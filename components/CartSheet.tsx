import Image from "next/image";
import { MenuItem, formatPrice } from "@/lib/menu";
import QuantityControl from "./QuantityControl";
import OrderNote from "./OrderNote";
import BottomBar from "./BottomBar";
import styles from "./CartSheet.module.css";

type Props = {
    items: MenuItem[];
    cart: Record<number, number>;
    note: string;
    total: number;
    tableNo?: number;
    onNoteChange: (v: string) => void;
    onAdd: (id: number) => void;
    onRemove: (id: number) => void;
    onBack: () => void;
    onSubmit: () => void;
};

export default function CartSheet(p: Props) {
    const empty = p.items.length === 0;
    const totalCount = Object.values(p.cart).reduce((a, b) => a + b, 0);

    return (
        <div className={styles.wrapper}>
            <main className={styles.main}>
                <div className={styles.topNav}>
                    <button onClick={p.onBack} className={styles.backBtn} aria-label="Quay lại thực đơn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        <span>Thêm món khác</span>
                    </button>

                    <div className={styles.tableBadge}>
                        <span className={styles.tableDot}></span>
                        <span>Bàn {p.tableNo ?? 4}</span>
                    </div>
                </div>

                {empty ? (
                    <div className={styles.emptyState}>
                        <div className={styles.emptyIcon}>🥣</div>
                        <h3 className={styles.emptyTitle}>Giỏ hàng đang trống</h3>
                        <p className={styles.emptyText}>
                            Bạn chưa chọn món nào. Hãy quay lại thực đơn để chọn những tô phở nóng hổi nhé!
                        </p>
                        <button onClick={p.onBack} className={styles.emptyBtn}>
                            Xem thực đơn ngay
                        </button>
                    </div>
                ) : (
                    <>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.heading}>Món đã chọn ({totalCount})</h2>
                            <button onClick={p.onBack} className={styles.addMoreLink}>
                                + Chọn thêm
                            </button>
                        </div>

                        <div className={styles.itemList}>
                            {p.items.map((item) => {
                                const q = p.cart[item.id] ?? 0;
                                const itemTotal = item.price * q;

                                return (
                                    <div key={item.id} className={styles.cartItem}>
                                        <div className={styles.itemImgWrap}>
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                width={60}
                                                height={54}
                                                className={styles.itemImg}
                                            />
                                        </div>

                                        <div className={styles.itemInfo}>
                                            <div className={styles.itemTopRow}>
                                                <h4 className={styles.itemName}>{item.name}</h4>
                                                <span className={styles.itemTotal}>{formatPrice(itemTotal)}</span>
                                            </div>
                                            <div className={styles.itemUnit}>
                                                {formatPrice(item.price)} / phần
                                            </div>
                                            <div className={styles.itemControlRow}>
                                                <QuantityControl
                                                    name={item.name}
                                                    qty={q}
                                                    onAdd={() => p.onAdd(item.id)}
                                                    onRemove={() => p.onRemove(item.id)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <OrderNote value={p.note} onChange={p.onNoteChange} />

                        <div className={styles.billCard}>
                            <div className={styles.billRow}>
                                <span className={styles.billLabel}>Tạm tính</span>
                                <span className={styles.billVal}>{formatPrice(p.total)}</span>
                            </div>
                            <div className={styles.billRow}>
                                <span className={styles.billLabel}>Phí phục vụ &amp; rau thơm, nước chấm</span>
                                <span className={styles.freeBadge}>Miễn phí</span>
                            </div>
                            <div className={styles.billDivider}></div>
                            <div className={styles.billTotalRow}>
                                <div>
                                    <span className={styles.totalText}>Tổng thanh toán</span>
                                    <span className={styles.vatNote}>(Thanh toán tại quầy khi nhận món)</span>
                                </div>
                                <span className={styles.totalAmount}>{formatPrice(p.total)}</span>
                            </div>
                        </div>
                    </>
                )}
            </main>

            <BottomBar
                icon={
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                }
                label="Xác nhận gọi món"
                amount={formatPrice(p.total)}
                onClick={p.onSubmit}
                disabled={empty}
            />
        </div>
    );
}