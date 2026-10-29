import Image from "next/image";
import styles from "./Header.module.css";

type Props = {
    subtitle: string;
    tableNo?: number;
    onTableChange?: (table: number) => void;
    onBack?: () => void;
    showBack?: boolean;
};

export default function Header({ subtitle, tableNo = 4, onTableChange, onBack, showBack }: Props) {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {showBack ? (
                    <button onClick={onBack} className={styles.backBtn} aria-label="Quay lại">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        <span>Quay lại</span>
                    </button>
                ) : (
                    <div className={styles.brand}>
                        <div className={styles.logoWrap}>
                            <Image
                                src="/images/logo.svg"
                                alt="Logo Quán Phở Bát Sứ"
                                width={42}
                                height={42}
                                priority
                                className={styles.logoImg}
                            />
                        </div>
                        <div className={styles.titleWrap}>
                            <div className={styles.titleRow}>
                                <h1 className={styles.title}>Phở Bát Sứ</h1>
                                <span className={styles.tagTradition}>Gia truyền</span>
                            </div>
                            <p className={styles.subtitle}>{subtitle}</p>
                        </div>
                    </div>
                )}

                <div className={styles.rightInfo}>
                    <div className={styles.statusPill}>
                        <span className={styles.statusDot}></span>
                        <span className={styles.statusText}>Bàn {tableNo}</span>
                    </div>
                </div>
            </div>
        </header>
    );
}