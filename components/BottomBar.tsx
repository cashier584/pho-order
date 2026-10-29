import styles from "./BottomBar.module.css";

type Props = {
    label: string;
    amount?: string;
    onClick: () => void;
    disabled?: boolean;
    icon?: React.ReactNode;
};

export default function BottomBar({ label, amount, onClick, disabled, icon }: Props) {
    return (
        <div className={styles.bar}>
            <div className={styles.inner}>
                <button
                    onClick={onClick}
                    disabled={disabled}
                    className={`${styles.button} ${amount ? styles.split : styles.centered}`}
                >
                    <div className={styles.labelGroup}>
                        {icon && <span className={styles.icon}>{icon}</span>}
                        <span className={styles.label}>{label}</span>
                    </div>
                    {amount && (
                        <div className={styles.amountGroup}>
                            <span className={styles.amount}>{amount}</span>
                            <span className={styles.arrow}>→</span>
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
}