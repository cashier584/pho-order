import styles from "./QuantityControl.module.css";

type Props = {
    name: string;
    qty: number;
    onAdd: () => void;
    onRemove: () => void;
};

export default function QuantityControl({ name, qty, onAdd, onRemove }: Props) {
    if (qty === 0) {
        return (
            <div className={styles.wrap}>
                <button
                    aria-label={`Thêm ${name}`}
                    onClick={onAdd}
                    className={styles.addBtn}
                >
                    <span className={styles.addIcon}>+</span>
                    <span className={styles.addText}>Thêm</span>
                </button>
            </div>
        );
    }

    return (
        <div className={`${styles.wrap} ${styles.expanded}`}>
            <button
                aria-label={`Bớt ${name}`}
                onClick={onRemove}
                className={`${styles.btn} ${styles.minus}`}
            >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
            </button>
            <span className={styles.qty} aria-live="polite">{qty}</span>
            <button
                aria-label={`Thêm ${name}`}
                onClick={onAdd}
                className={`${styles.btn} ${styles.plus}`}
            >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
            </button>
        </div>
    );
}