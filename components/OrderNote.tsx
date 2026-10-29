import styles from "./OrderNote.module.css";

type Props = { value: string; onChange: (v: string) => void };

const QUICK_TAGS = [
    "Ít hành",
    "Nhiều hành",
    "Nước trong",
    "Bánh phở mềm",
    "Không hành lá",
    "Quẩy nóng",
];

export default function OrderNote({ value, onChange }: Props) {
    const handleTagClick = (tag: string) => {
        if (!value.trim()) {
            onChange(tag);
        } else if (!value.includes(tag)) {
            onChange(`${value}, ${tag}`);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <label htmlFor="note" className={styles.label}>
                    <span className={styles.icon}>✍️</span>
                    <span>Lưu ý đặc biệt cho quán</span>
                </label>
                <span className={styles.optional}>Không bắt buộc</span>
            </div>

            <div className={styles.quickTags}>
                {QUICK_TAGS.map((tag) => {
                    const active = value.includes(tag);
                    return (
                        <button
                            key={tag}
                            type="button"
                            onClick={() => handleTagClick(tag)}
                            className={`${styles.tagBtn} ${active ? styles.tagActive : ""}`}
                        >
                            {active ? "✓ " : "+ "}
                            {tag}
                        </button>
                    );
                })}
            </div>

            <textarea
                id="note"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Ví dụ: ít bánh nhiều nước, không mì chính, xin thêm ớt tươi..."
                className={styles.textarea}
                rows={3}
            />
        </div>
    );
}