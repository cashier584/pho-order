import Image from "next/image";
import styles from "./Header.module.css";

type Props = {
    subtitle: string;
};

export default function Header({ subtitle }: Props) {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
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

                <div className={styles.rightInfo}>
                    <div className={styles.statusPill}>
                        <span className={styles.statusDot}></span>
                        <span className={styles.statusText}>Bàn 4</span>
                    </div>
                </div>
            </div>
        </header>
    );
}