"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { CATEGORIES, MENU } from "@/lib/menu";
import Header from "./Header";
import MenuSection from "./MenuSection";
import CartBar from "./CartBar";
import CartSheet from "./CartSheet";
import OrderSuccess from "./OrderSuccess";
import styles from "./OrderApp.module.css";

type View = "menu" | "cart" | "done";

export default function OrderApp() {
    const [view, setView] = useState<View>("menu");
    const [cart, setCart] = useState<Record<number, number>>({});
    const [note, setNote] = useState("");
    const [orderNo, setOrderNo] = useState(0);
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState("");

    const count = Object.values(cart).reduce((a, b) => a + b, 0);
    const total = MENU.reduce((s, m) => s + m.price * (cart[m.id] ?? 0), 0);
    const cartItems = MENU.filter((m) => (cart[m.id] ?? 0) > 0);

    const add = (id: number) =>
        setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));

    const remove = (id: number) =>
        setCart((c) => {
            const { [id]: q = 0, ...rest } = c;
            return q > 1 ? { ...c, [id]: q - 1 } : rest;
        });

    const submit = () => {
        setOrderNo(Math.floor(100 + Math.random() * 900));
        setCart({});
        setNote("");
        setView("done");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Filter items based on activeCategory and searchQuery
    const filteredCategories = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        
        const cats = activeCategory === "all" ? CATEGORIES : CATEGORIES.filter(c => c === activeCategory);

        return cats.map(cat => {
            const items = MENU.filter(m => {
                const matchCat = m.category === cat;
                const matchQuery = !query || m.name.toLowerCase().includes(query) || (m.desc && m.desc.toLowerCase().includes(query));
                return matchCat && matchQuery;
            });
            return {
                title: cat,
                items,
            };
        }).filter(group => group.items.length > 0);
    }, [activeCategory, searchQuery]);

    const subtitle =
        view === "menu"
            ? "Món ngon gia truyền, nóng hổi tới bàn"
            : view === "cart"
                ? "Kiểm tra món ăn đã chọn"
                : "Cảm ơn quý khách!";

    return (
        <div className={styles.app}>
            <Header subtitle={subtitle} />

            {view === "menu" && (
                <>
                    {/* Hero Restaurant Banner */}
                    <div className={styles.bannerContainer}>
                        <div className={styles.bannerImgWrap}>
                            <Image
                                src="/images/banner-pho.svg"
                                alt="Quán Phở Bát Sứ Hà Nội"
                                width={800}
                                height={320}
                                priority
                                className={styles.bannerImg}
                            />
                        </div>
                    </div>

                    {/* Search & Category Filter Navigation */}
                    <div className={styles.navSticky}>
                        <div className={styles.searchBar}>
                            <span className={styles.searchIcon}>🔍</span>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Tìm phở tái, phở gà, quẩy giòn, trà đá..."
                                className={styles.searchInput}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className={styles.clearSearch}
                                    aria-label="Xóa tìm kiếm"
                                >
                                    ✕
                                </button>
                            )}
                        </div>

                        <div className={styles.categoryTabs}>
                            <button
                                onClick={() => setActiveCategory("all")}
                                className={`${styles.catTab} ${activeCategory === "all" ? styles.catTabActive : ""}`}
                            >
                                Tất cả ({MENU.length})
                            </button>
                            {CATEGORIES.map((cat) => {
                                const catCount = MENU.filter(m => m.category === cat).length;
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`${styles.catTab} ${activeCategory === cat ? styles.catTabActive : ""}`}
                                    >
                                        {cat} ({catCount})
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <main className={styles.main}>
                        {filteredCategories.length === 0 ? (
                            <div className={styles.noResult}>
                                <span className={styles.noResultIcon}>🍲</span>
                                <h3>Không tìm thấy món phù hợp</h3>
                                <p>Thử tìm với từ khóa khác như &quot;tái&quot;, &quot;gà&quot;, &quot;quẩy&quot;, hoặc bấm &quot;Tất cả&quot;.</p>
                                <button onClick={() => { setSearchQuery(""); setActiveCategory("all"); }} className={styles.resetBtn}>
                                    Xem tất cả thực đơn
                                </button>
                            </div>
                        ) : (
                            filteredCategories.map((group) => (
                                <MenuSection
                                    key={group.title}
                                    title={group.title}
                                    items={group.items}
                                    cart={cart}
                                    onAdd={add}
                                    onRemove={remove}
                                />
                            ))
                        )}
                    </main>

                    <CartBar
                        count={count}
                        total={total}
                        onClick={() => {
                            setView("cart");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    />
                </>
            )}

            {view === "cart" && (
                <CartSheet
                    items={cartItems}
                    cart={cart}
                    note={note}
                    total={total}
                    onNoteChange={(v) => setNote(v)}
                    onAdd={add}
                    onRemove={remove}
                    onBack={() => {
                        setView("menu");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    onSubmit={submit}
                />
            )}

            {view === "done" && (
                <OrderSuccess
                    orderNo={orderNo}
                    onNewOrder={() => {
                        setView("menu");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                />
            )}
        </div>
    );
}