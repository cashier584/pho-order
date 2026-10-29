export type Category = "Phở" | "Ăn kèm" | "Đồ uống";

export type MenuItem = {
    id: number;
    name: string;
    price: number;
    category: Category;
    desc?: string;
    image: string;
    tag?: string;
    prepTime?: string;
};

export const CATEGORIES: Category[] = ["Phở", "Ăn kèm", "Đồ uống"];

export const MENU: MenuItem[] = [
    {
        id: 1,
        name: "Phở tái",
        price: 55000,
        category: "Phở",
        desc: "Thịt bò tái mềm tươi ngọt, chần vừa tới trong nước dùng thanh thanh đậm đà.",
        image: "/images/pho-tai.svg",
        tag: "Bán chạy",
        prepTime: "3 phút",
    },
    {
        id: 2,
        name: "Phở chín",
        price: 55000,
        category: "Phở",
        desc: "Thịt bò nạm chín thái mỏng, thơm mềm ninh kỹ theo công thức gia truyền.",
        image: "/images/pho-chin.svg",
        prepTime: "3 phút",
    },
    {
        id: 3,
        name: "Phở tái nạm",
        price: 60000,
        category: "Phở",
        desc: "Sự hòa quyện giữa thịt bò tái ngọt mềm và nạm giòn thơm sần sật.",
        image: "/images/pho-tai.svg",
        tag: "Đậm vị",
        prepTime: "4 phút",
    },
    {
        id: 4,
        name: "Phở đặc biệt",
        price: 70000,
        category: "Phở",
        desc: "Tô đầy đặn gồm tái, nạm, gầu, gân dẻo và bò viên hảo hạng.",
        image: "/images/pho-dac-biet.svg",
        tag: "★ Thượng hạng",
        prepTime: "5 phút",
    },
    {
        id: 5,
        name: "Phở gà ta",
        price: 55000,
        category: "Phở",
        desc: "Thịt gà ta thả vườn da vàng óng giòn sần sật, xé phay rắc lá chanh thơm ngát.",
        image: "/images/pho-ga.svg",
        tag: "Gà ta giòn",
        prepTime: "3 phút",
    },
    {
        id: 6,
        name: "Quẩy giòn",
        price: 5000,
        category: "Ăn kèm",
        desc: "Quẩy chiên vàng ruộm, giòn rụm nóng hổi nhúng nước dùng phở chuẩn vị Hà Nội.",
        image: "/images/quay.svg",
        tag: "Kèm phở",
        prepTime: "1 phút",
    },
    {
        id: 7,
        name: "Trứng chần lòng đào",
        price: 8000,
        category: "Ăn kèm",
        desc: "Trứng gà ta chần lòng đào béo ngậy rắc tiêu đen thơm lừng.",
        image: "/images/trung-chan.svg",
        tag: "Béo ngậy",
        prepTime: "2 phút",
    },
    {
        id: 8,
        name: "Thêm thịt bò",
        price: 20000,
        category: "Ăn kèm",
        desc: "Đĩa thịt bò tươi ngon gọi thêm theo yêu cầu (tái hoặc chín).",
        image: "/images/them-thit.svg",
        prepTime: "2 phút",
    },
    {
        id: 9,
        name: "Thêm bánh phở",
        price: 10000,
        category: "Ăn kèm",
        desc: "Bát bánh phở tươi tráng thủ công mềm mướt nóng hổi.",
        image: "/images/them-banh.svg",
        prepTime: "1 phút",
    },
    {
        id: 10,
        name: "Trà đá Hà Nội",
        price: 3000,
        category: "Đồ uống",
        desc: "Trà hoa nhài ướp hương thơm mát, nhiều đá viên giải nhiệt.",
        image: "/images/tra-da.svg",
        tag: "Mát lạnh",
        prepTime: "1 phút",
    },
    {
        id: 11,
        name: "Nước ngọt ướp lạnh",
        price: 15000,
        category: "Đồ uống",
        desc: "Coca-Cola, Pepsi, 7Up hoặc Bò Húc lon 330ml ướp lạnh sảng khoái.",
        image: "/images/nuoc-ngot.svg",
        prepTime: "1 phút",
    },
];

export const formatPrice = (n: number) => n.toLocaleString("vi-VN") + " đ";