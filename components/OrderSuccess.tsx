import Image from "next/image";
import BottomBar from "./BottomBar";
import styles from "./OrderSuccess.module.css";

type Props = {
    orderNo: number;
    tableNo?: number;
    onNewOrder: () => void;
};

export default function OrderSuccess({ orderNo, tableNo = 4, onNewOrder }: Props) {
    const orderTime = new Date().toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <div className={styles.wrapper}>
            <main className={styles.main}>
                <div className={styles.heroCard}>
                    <div className={styles.illustrationWrap}>
                        <Image
                            src="/images/pho-dac-biet.svg"
                            alt="Phở đang được nấu"
                            width={160}
                            height={120}
                            className={styles.phoImg}
                            priority
                        />
                        <div className={styles.checkBadge}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                    </div>

                    <h2 className={styles.title}>Đặt món thành công!</h2>
                    <p className={styles.subtitle}>Bếp đang bắt đầu làm món cho bạn</p>

                    <div className={styles.orderTicket}>
                        <div className={styles.ticketRow}>
                            <div className={styles.ticketCol}>
                                <span className={styles.ticketLabel}>MÃ ĐƠN</span>
                                <span className={styles.ticketCode}>#{orderNo}</span>
                            </div>
                            <div className={styles.ticketDivider}></div>
                            <div className={styles.ticketCol}>
                                <span className={styles.ticketLabel}>VỊ TRÍ</span>
                                <span className={styles.ticketVal}>Bàn {tableNo}</span>
                            </div>
                            <div className={styles.ticketDivider}></div>
                            <div className={styles.ticketCol}>
                                <span className={styles.ticketLabel}>THỜI GIAN</span>
                                <span className={styles.ticketVal}>{orderTime}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.trackingCard}>
                    <h3 className={styles.trackingHeading}>Tiến độ phục vụ</h3>
                    
                    <div className={styles.steps}>
                        <div className={`${styles.step} ${styles.stepDone}`}>
                            <div className={styles.stepCircle}>✓</div>
                            <div className={styles.stepInfo}>
                                <span className={styles.stepName}>Đã chuyển đơn vào quầy bếp</span>
                                <span className={styles.stepSub}>Quán đã nhận được danh sách món</span>
                            </div>
                        </div>

                        <div className={`${styles.step} ${styles.stepActive}`}>
                            <div className={styles.stepCircle}>
                                <span className={styles.pulsingDot}></span>
                            </div>
                            <div className={styles.stepInfo}>
                                <span className={styles.stepName}>Đang trần bánh &amp; chan nước dùng</span>
                                <span className={styles.stepSub}>Dự kiến: 3 - 5 phút</span>
                            </div>
                        </div>

                        <div className={styles.step}>
                            <div className={styles.stepCircle}>3</div>
                            <div className={styles.stepInfo}>
                                <span className={styles.stepName}>Phục vụ nóng hổi tại Bàn {tableNo}</span>
                                <span className={styles.stepSub}>Kèm quẩy giòn &amp; chanh ớt</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.tipBox}>
                    <span className={styles.tipIcon}>💡</span>
                    <p className={styles.tipText}>
                        Gia vị (chanh tươi, giấm tỏi ớt, tương ớt cay nồng) đã có sẵn trên bàn của bạn. Chúc bạn ngon miệng!
                    </p>
                </div>
            </main>

            <BottomBar
                icon={
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                }
                label="Gọi thêm món hoặc đồ uống"
                onClick={onNewOrder}
            />
        </div>
    );
}