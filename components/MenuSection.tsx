import { MenuItem } from "@/lib/menu";
import MenuItemCard from "./MenuItemCard";
import styles from "./MenuSection.module.css";

type Props = {
    title: string;
    items: MenuItem[];
    cart: Record<number, number>;
    onAdd: (id: number) => void;
    onRemove: (id: number) => void;
};

const CATEGORY_ICONS: Record<string, string> = {
    "Phở": "🍜",
    "Ăn kèm": "🥢",
    "Đồ uống": "🥤",
};

export default function MenuSection({ title, items, cart, onAdd, onRemove }: Props) {
    if (items.length === 0) return null;

    const icon = CATEGORY_ICONS[title] || "✨";

    return (
        <section className={styles.section} id={`cat-${title}`}>
            <div className={styles.header}>
                <div className={styles.titleWrap}>
                    <span className={styles.icon}>{icon}</span>
                    <h2 className={styles.title}>{title}</h2>
                </div>
                <span className={styles.countBadge}>{items.length} món</span>
            </div>

            <div className={styles.list}>
                {items.map((item) => (
                    <MenuItemCard
                        key={item.id}
                        item={item}
                        qty={cart[item.id] ?? 0}
                        onAdd={() => onAdd(item.id)}
                        onRemove={() => onRemove(item.id)}
                    />
                ))}
            </div>
        </section>
    );
}