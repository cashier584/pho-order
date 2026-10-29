import Image from "next/image";
import { MenuItem, formatPrice } from "@/lib/menu";
import QuantityControl from "./QuantityControl";
import styles from "./MenuItemCard.module.css";

type Props = {
    item: MenuItem;
    qty: number;
    onAdd: () => void;
    onRemove: () => void;
};

export default function MenuItemCard({ item, qty, onAdd, onRemove }: Props) {
    const isSelected = qty > 0;

    return (
        <article className={`${styles.card} ${isSelected ? styles.selected : ""}`}>
            <div className={styles.imageContainer}>
                <Image
                    src={item.image}
                    alt={item.name}
                    width={110}
                    height={95}
                    className={styles.image}
                    loading="lazy"
                />
                {item.tag && (
                    <span className={styles.badge}>{item.tag}</span>
                )}
            </div>

            <div className={styles.content}>
                <div className={styles.headerRow}>
                    <h3 className={styles.name}>{item.name}</h3>
                </div>

                {item.desc && <p className={styles.desc}>{item.desc}</p>}

                <div className={styles.footerRow}>
                    <div className={styles.priceWrap}>
                        <span className={styles.price}>{formatPrice(item.price)}</span>
                        {item.prepTime && (
                            <span className={styles.prepTime}>⚡ {item.prepTime}</span>
                        )}
                    </div>
                    
                    <div className={styles.actionWrap}>
                        <QuantityControl
                            name={item.name}
                            qty={qty}
                            onAdd={onAdd}
                            onRemove={onRemove}
                        />
                    </div>
                </div>
            </div>
        </article>
    );
}