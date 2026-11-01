/* ==========================================================================
   PHẦN 1: BẢNG CẤU HÌNH TRUNG TÂM (SỬA MỌI THÔNG TIN TẠI ĐÂY)
   ========================================================================== */

const LOVE_CONFIG = {
    // 1. Mật khẩu 4 số mở khóa màn hình
    passcode: "0809",

    // 2. Ngày bắt đầu yêu nhau (Năm-Tháng-NgàyTGiờ:Phút:Giây)
    startDate: "2026-09-08T00:00:00",

    // 3. Giao diện màu mặc định ('dreamy' = Hồng, 'skyblue' = Xanh da trời, 'galaxy' = Đêm, 'sunset' = Đào)
    defaultTheme: "dreamy",

    // 4. Các tiêu đề hiển thị trên web
    texts: {
        pageTitle: "Đếm ngày yêu nhau - Hải Dương 💕 Trúc Mai",
        lockTopBadge: "ĐẾM NGÀY YÊU NHAU • HẢI DƯƠNG & TRÚC MAI",
        lockBottomHint: "Nhập mật khẩu hoặc chạm Vân Tay để mở khóa & bật nhạc",
        clockMainTitle: "ĐÃ TRẢI QUA",
        footerMainTitle: "💕 Cảm ơn vì khoảng thời gian ta bên nhau 💕",
        footerSubTitle: "Hải Dương & Trúc Mai • Forever & Always (08.09.2026) ✨",
        letterSign: "— Yêu em thật nhiều, Hải Dương ❤️"
    },

    // 5. Thông tin Bạn Nam & Bạn Nữ (Hiện ở mặt trước và mặt sau thẻ 3D)
    boy: {
        name: "Hải Dương",
        avatar: "img/duong.jpg",
        badge: "♓ Song Ngư • Dev",
        birthday: "01/03",
        zodiac: "Song Ngư",
        hobby: "Code, Màu xanh da trời vì là màu của tự do & Chiều Mai",
        quote: '"Code có thể bug, nhưng yêu Mai thì không bao giờ lỗi!"'
    },
    girl: {
        name: "Trúc Mai",
        avatar: "img/mai.jpg",
        badge: "👑 Công Chúa Nhỏ",
        birthday: "10/02",
        zodiac: "Nóc Nhà Quyền Lực",
        hobby: "Đi dạo cùng Dương & Ôm Dương",
        quote: '"Mỗi ngày bên anh đều là ngày ngọt ngào nhất!"'
    },

    // 6. DANH SÁCH FILE NHẠC TRONG THƯ MỤC music/ (CÁCH 2)
    // Bạn chỉ cần điền tên các file .mp3 trong thư mục music/ vào đây (không cần ghi đuôi .mp3 hay có đuôi .mp3 đều được)
    // Tên bài hát trên web sẽ tự động lấy đúng tên file này, bấm nút Skip ⏭ hoặc ⏮ sẽ nhảy lần lượt qua danh sách!
    musicFiles: [
        "duong",
        "duonglove",
        "duonglove1",
        "roitoilun",
        "betifulinwhite"
    ],

    // 7. Danh sách câu trích dẫn ngọt ngào
    loveQuotes: [
        "Giữa hàng tỷ người, thật may mắn vì Hải Dương đã gặp được Trúc Mai 💕",
        "Code có thể bug, nhưng yêu Trúc Mai thì không bao giờ lỗi! 💙",
        "Trúc Mai là ngoại lệ duy nhất và mãi mãi của Hải Dương ✨",
        "Mỗi ngày đi dạo và ôm nhau đều là ngày ngọt ngào nhất trên đời 🌷",
        "Trái đất quay quanh mặt trời, còn Hải Dương thì quay quanh Trúc Mai 🪐",
        "Bầu trời màu xanh tự do, còn trái tim anh thì thuộc về Mai 🌸",
        "Hứa cùng nhau đi qua thật nhiều cái 100 ngày, 1000 ngày nữa nhé! 🥂"
    ],

    // 8. Lọ Sao Điều Ước & 100 Lý Do Yêu Em
    wishStars: [
        "🌟 Lý do #1: Vì nụ cười của Trúc Mai làm tan biến mọi mệt mỏi sau giờ code của Dương!",
        "🌟 Điều ước: Chúc công chúa nhỏ sinh ngày 10/02 lúc nào cũng rạng rỡ và hạnh phúc bên anh 💕",
        "🌟 Lý do #2: Vì những buổi đi dạo cùng Mai luôn là khoảng thời gian bình yên nhất 🛵",
        "🌟 Đặc quyền: Hôm nay Trúc Mai muốn ăn gì hay đi đâu, Hải Dương chiều hết 100%!",
        "🌟 Lý do #3: Vì cái ôm của Mai ấm áp hơn bất kỳ dòng code hoàn hảo nào trên đời 🫂",
        "🌟 Lời hứa: Dù bận rộn đến đâu, Mai vẫn luôn là ưu tiên số 1 của Hải Dương 💙",
        "🌟 Lý do #4: Yêu cái cách Mai làm nũng và cả lúc Mai làm 'Nóc Nhà Quyền Lực' 👑"
    ],

    // 9. Ví Voucher Tình Yêu dành tặng Trúc Mai
    coupons: [
        { id: "c1", icon: "🛵", title: "1 Buổi Đi Dạo Đêm", desc: "Lượn khắp phố phường Sài Gòn cùng Hải Dương bất cứ lúc nào", used: false },
        { id: "c2", icon: "🫂", title: "100 Cái Ôm Thật Chặt", desc: "Nạp đầy năng lượng yêu thương ngay lập tức", used: false },
        { id: "c3", icon: "👑", title: "Thẻ Miễn Trừ Giận Dỗi", desc: "Hải Dương nhận sai và làm lành ngay lập tức vô điều kiện", used: false },
        { id: "c4", icon: "🍽️", title: "1 Bữa Ăn Ngon Tùy Chọn", desc: "Nóc nhà chỉ việc lên đồ, mọi thứ để Hải Dương lo", used: false }
    ],

    // 10. Checklist Kế Hoạch Cùng Nhau Làm (Bucket List)
    bucketList: [
        { text: "Đi dạo phố đêm và tâm sự cùng nhau 🛵", done: true },
        { text: "Chụp một bộ ảnh Photobooth thật lầy lội 📸", done: true },
        { text: "Cùng nhau đón sinh nhật 10/02 của Mai & 01/03 của Dương 🎂", done: false },
        { text: "Đi du lịch xa cùng nhau (Food tour & Ngắm biển) 🏖️", done: false },
        { text: "Mặc đồ đôi màu xanh da trời đi dạo cuối tuần 💙", done: false },
        { text: "Nắm tay nhau chạm mốc 1000 ngày yêu 💍", done: false }
    ],

    // 11. Danh sách Vòng Quay Hẹn Hò (Đầy đủ lựa chọn Đi Ăn & Đi Chơi)
    wheelOptions: {
        food: [
            { label: "BBQ Nướng Hàn Quốc 🥩", color: "#ff4b8b" },
            { label: "Lẩu Bò Nóng Hổi 🍲", color: "#a855f7" },
            { label: "Trà Sữa & Bánh Ngọt 🧋", color: "#ec4899" },
            { label: "Mì Cay 7 Cấp Độ 🌶️", color: "#f43f5e" },
            { label: "Gà Rán & Pizza 🍕", color: "#fb923c" },
            { label: "Phở Bò / Bún Bò 🍜", color: "#8b5cf6" },
            { label: "Lẩu Tokbokki Phô Mai 🧀", color: "#0ea5e9" },
            { label: "Cơm Tấm Sườn Bì Chả 🍛", color: "#10b981" },
            { label: "Bánh Tráng Trộn & Ăn Vặt 🍢", color: "#f59e0b" },
            { label: "Dimsum / Đồ Trung Hoa 🥟", color: "#6366f1" },
            { label: "Kem Bơ / Chè Ngọt Mát 🍨", color: "#ec4899" },
            { label: "Theo Ý Trúc Mai Chọn 👑", color: "#e11d48" }
        ],
        place: [
            { label: "Đi Dạo Cùng Dương & Ôm Dương 🛵", color: "#0ea5e9" },
            { label: "Xem Phim Rạp CGV 🍿", color: "#8b5cf6" },
            { label: "Cafe Acoustic Chill ☕", color: "#ff4b8b" },
            { label: "Chụp Photobooth📸", color: "#f43f5e" },
            { label: "Đi Dạo Công Viên Bờ Sông 🌿", color: "#10b981" },
            { label: "Nấu Ăn Cùng Nhau Ở Nhà 👩‍🍳", color: "#fb923c" },
            { label: "Đi TTTM Mua Sắm & Dạo Mát 🛒", color: "#ec4899" },
            { label: "Workshop Tô Tượng / Làm Gốm 🎨", color: "#a855f7" },
            { label: "Ngắm Hoàng Hôn Chiều Tà 🌅", color: "#f59e0b" },
            { label: "Gắp Thú Bông / Khu Trò Chơi 🧸", color: "#6366f1" },
            { label: "Food Tour Ăn Sập Khu Phố 🍡", color: "#ec4899" },
            { label: "Xem Phim Ở Nhà & Ôm Nhau 🥰", color: "#e11d48" }
        ]
    },

    // 12. Danh sách Ảnh Kỷ Niệm Polaroid
    polaroids: [
        { caption: "Ngày đầu bên nhau 💕", date: "08.09.2026", rot: "-2.5deg", img: "img/duong.jpg", fallbackTitle: "First Date", emoji: "💑", c1: "#38bdf8", c2: "#f472b6" },
        { caption: "Đi dạo phố cùng nhau 🛵", date: "Kỷ niệm ngọt ngào", rot: "2deg", img: "img/mai.jpg", fallbackTitle: "Sweet Walk", emoji: "🛵", c1: "#a18cd1", c2: "#fbc2eb" },
        { caption: "Cái ôm ấm áp nhất 🫂", date: "Hải Dương & Trúc Mai", rot: "-1.8deg", img: "", fallbackTitle: "Warm Hug", emoji: "🫂", c1: "#fad0c4", c2: "#ffd1ff" },
        { caption: "Nụ cười của Công Chúa 🌷", date: "My Sunshine", rot: "2.5deg", img: "", fallbackTitle: "Your Smile", emoji: "🌷", c1: "#bae6fd", c2: "#fbcfe8" }
    ],

    // 13. Danh sách Thư Tay & Viên Nang Thời Gian
    letters: [
        {
            badgeText: "💌 Đã mở khóa",
            badgeColor: "emerald",
            rightNote: "Bức thư #1",
            icon: "💌",
            grad: "from-pink-500 to-rose-400",
            cardTitle: "Gửi Trúc Mai Thương Yêu",
            cardSub: "Bức thư đầu tiên viết cho hành trình của tụi mình...",
            btnText: "Mở Đọc Thư Ngay ✨",
            title: "Gửi Trúc Mai Thương Yêu",
            date: "Kỷ niệm 08-09-2026",
            body: "Gửi Trúc Mai — cô công chúa nhỏ của anh,\n\nCảm ơn em vì đã bước vào cuộc đời của Hải Dương và biến mỗi ngày bình thường trở nên rực rỡ nhất. Code có thể bug, nhưng tình yêu anh dành cho Mai thì không bao giờ lỗi. Mình cùng nhau đi dạo khắp thế gian và ôm nhau thật chặt qua mọi ngày nắng mưa em nhé! 💕"
        },
        {
            badgeText: "🔒 Cột mốc 100 Ngày",
            badgeColor: "amber",
            rightNote: "17/12/2026",
            icon: "⏳",
            grad: "from-amber-400 to-orange-500",
            cardTitle: "Viên Nang 100 Ngày Yêu",
            cardSub: "Lời nhắn hẹn ước cho ngày kỷ niệm 100 ngày bên nhau.",
            btnText: "Xem Lén / Mở Thử 👀",
            title: "Viên Nang Cột Mốc 100 Ngày Yêu",
            date: "Mở khóa vào 17-12-2026 (100 Ngày)",
            body: "Chúc mừng Hải Dương và Trúc Mai đã cùng nhau đi qua 100 ngày đầu tiên! 🌱\n\n100 ngày của những buổi đi dạo cùng nhau, những cái ôm thật chặt và biết bao tiếng cười. Chúc cho tình yêu của tụi mình lúc nào cũng ngọt ngào như ngày đầu tiên!"
        },
        {
            badgeText: "👑 Kỷ niệm 1 Năm",
            badgeColor: "purple",
            rightNote: "08/09/2027",
            icon: "👑",
            grad: "from-purple-500 to-indigo-500",
            cardTitle: "Hộp Thư Tròn 1 Năm",
            cardSub: "Gửi Hải Dương & Trúc Mai của cột mốc 365 ngày hạnh phúc.",
            btnText: "Xem Lén / Mở Thử 👀",
            title: "Hộp Thư Kỷ Niệm Tròn 1 Năm",
            date: "Mở khóa vào 08-09-2027 (365 Ngày)",
            body: "Happy 1st Anniversary Hải Dương ❤️ Trúc Mai!\n\nVậy là tụi mình đã đi cùng nhau trọn vẹn 4 mùa Xuân - Hạ - Thu - Đông. Cảm ơn vì đã luôn kiên nhẫn, lắng nghe và yêu thương nhau thật trọn vẹn!"
        }
    ],

    // 14. Danh sách Cột Mốc Tình Yêu
    milestones: [
        { days: 100, title: "Kỷ niệm 100 Ngày", icon: "🌱" },
        { days: 200, title: "Kỷ niệm 200 Ngày", icon: "🌸" },
        { days: 365, title: "Kỷ niệm 1 Năm", icon: "🎂" },
        { days: 500, title: "Kỷ niệm 500 Ngày", icon: "💎" },
        { days: 1000, title: "Kỷ niệm 1000 Ngày", icon: "👑" },
        { days: 2000, title: "Kỷ niệm 2000 Ngày", icon: "🏰" }
    ]
};

/* ==========================================================================
   PHẦN 2: HỆ THỐNG XỬ LÝ TỰ ĐỘNG (ĐỒNG BỘ TỪ LOVE_CONFIG LÊN GIAO DIỆN)
   ========================================================================== */

const WHEEL_COLORS = ["#ff4b8b", "#a855f7", "#ec4899", "#f43f5e", "#fb923c", "#8b5cf6", "#0ea5e9", "#10b981", "#f59e0b", "#6366f1"];

// Hỗ trợ tương thích cả tên biến boy/girl hoặc male/female
const getBoy = () => LOVE_CONFIG.boy || LOVE_CONFIG.male;
const getGirl = () => LOVE_CONFIG.girl || LOVE_CONFIG.female;

let yourDate = new Date(LOVE_CONFIG.startDate);
let enteredPasscode = "";
let bioScanTimer = null;
let currentTheme = LOVE_CONFIG.defaultTheme || "dreamy";
let clockMode = 1;
let heartClicks = 100;

// Biến trình phát nhạc (Đã fix hoàn toàn nút Skip)
let playlistTracks = [];
let currentTrackIndex = 0;
let isMusicPlaying = false;
let isShuffleMusic = false;
let usingSynthFallback = false;
let synthInterval = null;
let audioCtx = null;

// Biến hiệu ứng & tiện ích
let sparkleEnabled = true;
let weatherMode = "sakura";
let storyQuoteIndex = 0;
let islandIdx = 0;
let moodIdx = 0;
let polaroidsData = [];
let activePolaroidIndex = 0;
let typewriterTimer = null;
let currentWheelCat = "food";
let wheelAngle = 0;
let isSpinningWheel = false;

// SVG Avatar dự phòng sắc nét
function getMaleFallbackSVG() {
    const boy = getBoy();
    return "data:image/svg+xml;utf8," + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
            <defs><linearGradient id="bgM" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#38bdf8"/><stop offset="100%" stop-color="#818cf8"/></linearGradient></defs>
            <rect width="240" height="240" rx="120" fill="url(#bgM)"/>
            <circle cx="120" cy="95" r="46" fill="#ffedd5"/>
            <path d="M72 88 C72 48, 168 48, 168 88 C155 68, 85 68, 72 88 Z" fill="#1e293b"/>
            <circle cx="103" cy="96" r="5" fill="#1e293b"/><circle cx="137" cy="96" r="5" fill="#1e293b"/>
            <path d="M108 112 Q120 122 132 112" stroke="#e11d48" stroke-width="3.5" fill="none" stroke-linecap="round"/>
            <path d="M55 225 C55 162, 185 162, 185 225 Z" fill="#0284c7"/>
            <text x="120" y="212" font-family="sans-serif" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">${boy.name}</text>
        </svg>
    `);
}

function getFemaleFallbackSVG() {
    const girl = getGirl();
    return "data:image/svg+xml;utf8," + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
            <defs><linearGradient id="bgF" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fbcfe8"/><stop offset="100%" stop-color="#fda4af"/></linearGradient></defs>
            <rect width="240" height="240" rx="120" fill="url(#bgF)"/>
            <path d="M64 100 C64 42, 176 42, 176 100 L184 155 C160 145, 80 145, 56 155 Z" fill="#3f2722"/>
            <circle cx="120" cy="98" r="44" fill="#ffedd5"/>
            <path d="M74 88 Q120 55 166 88 C150 62, 90 62, 74 88 Z" fill="#3f2722"/>
            <circle cx="104" cy="98" r="5" fill="#1e293b"/><circle cx="136" cy="98" r="5" fill="#1e293b"/>
            <path d="M110 113 Q120 122 130 113" stroke="#e11d48" stroke-width="3.5" fill="none" stroke-linecap="round"/>
            <path d="M58 225 C58 164, 182 164, 182 225 Z" fill="#ec4899"/>
            <text x="120" y="212" font-family="sans-serif" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">${girl.name}</text>
        </svg>
    `);
}

function createRomanticPolaroidSVG(title, emoji, c1, c2) {
    return "data:image/svg+xml;utf8," + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
            <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${c1 || '#38bdf8'}"/><stop offset="100%" stop-color="${c2 || '#f472b6'}"/></linearGradient></defs>
            <rect width="400" height="400" fill="url(#g)"/>
            <circle cx="200" cy="175" r="85" fill="rgba(255,255,255,0.35)"/>
            <text x="200" y="198" font-size="78" text-anchor="middle">${emoji || '💕'}</text>
            <text x="200" y="330" font-family="sans-serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">${title || 'Memory'}</text>
        </svg>
    `);
}

document.addEventListener("DOMContentLoaded", function() {
    loadSharedDataFromURLAndStorage();
    yourDate = new Date(LOVE_CONFIG.startDate);

    applyConfigToDOM();

    const savedTheme = localStorage.getItem("love_theme") || LOVE_CONFIG.defaultTheme || "dreamy";
    setTheme(savedTheme);

    updateLockscreenClock();
    updateLoveClock();
    setInterval(() => {
        updateLockscreenClock();
        updateLoveClock();
    }, 1000);

    startDynamicIslandCycle();
    setupMusicPlayer();
    initPolaroids();
    renderLettersGrid();
    renderMilestones();
    renderWheelTags();
    drawDateWheel();
    renderCoupons();
    renderBucketList();
    initMemoryGame();
    initCoupleQuiz();
    init3DTiltCards();
    initParticleAndSparkleCanvas();

    // Hiệu ứng nổ tim nhỏ mỗi khi click chuột trên trang
    window.addEventListener("click", (e) => {
        if (e.target.closest("button, input, select, #lockscreen-overlay")) return;
        spawnMiniClickBurst(e.clientX, e.clientY);
    });

    if (window.lucide) lucide.createIcons();
});

// Đồng bộ dữ liệu khi Share Link
function loadSharedDataFromURLAndStorage() {
    const params = new URLSearchParams(window.location.search);
    const shared = params.get("share");
    if (shared) {
        try {
            const decoded = JSON.parse(decodeURIComponent(escape(atob(shared))));
            if (decoded.wheelOptions) LOVE_CONFIG.wheelOptions = decoded.wheelOptions;
            if (Array.isArray(decoded.extraPolaroids) && decoded.extraPolaroids.length > 0) {
                LOVE_CONFIG.polaroids = [...LOVE_CONFIG.polaroids, ...decoded.extraPolaroids];
            }
        } catch (e) {}
    } else {
        const savedWheel = localStorage.getItem("love_wheel_options_v4");
        if (savedWheel) {
            try { LOVE_CONFIG.wheelOptions = JSON.parse(savedWheel); } catch (e) {}
        }
    }
}

window.copyShareableLink = function(e) {
    if (e) e.stopPropagation();
    const extraPolaroids = polaroidsData
        .slice(LOVE_CONFIG.polaroids.length)
        .filter(p => p.img && !p.img.startsWith("data:"));

    const payload = {
        wheelOptions: LOVE_CONFIG.wheelOptions,
        extraPolaroids: extraPolaroids
    };

    const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
    const shareUrl = `${window.location.origin}${window.location.pathname}?share=${encoded}`;

    navigator.clipboard.writeText(shareUrl).then(() => {
        alert("🔗 Đã copy Link Chia Sẻ thành công!\n\nKhi gửi link này cho người yêu, mọi món ăn/địa điểm và Link ảnh mới bạn thêm sẽ tự động hiển thị!");
    }).catch(() => {
        prompt("Copy đường link dưới đây để gửi cho người yêu:", shareUrl);
    });
};

function applyConfigToDOM() {
    const boy = getBoy();
    const girl = getGirl();
    const setTxt = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
    };

    document.title = LOVE_CONFIG.texts.pageTitle;
    setTxt("lock-top-badge", LOVE_CONFIG.texts.lockTopBadge);
    setTxt("lock-bottom-hint", LOVE_CONFIG.texts.lockBottomHint);
    setTxt("clock-main-title", LOVE_CONFIG.texts.clockMainTitle);
    setTxt("footer-main-title", LOVE_CONFIG.texts.footerMainTitle);
    setTxt("footer-sub-title", LOVE_CONFIG.texts.footerSubTitle);
    setTxt("modal-letter-sign", LOVE_CONFIG.texts.letterSign);

    // Đổ thông tin Bạn Nam (boy)
    const maleImg = document.getElementById("male-avt");
    maleImg.src = localStorage.getItem("love_male_avt") || boy.avatar;
    maleImg.onerror = function() { this.onerror = null; this.src = getMaleFallbackSVG(); };

    setTxt("male-name-front", boy.name);
    setTxt("male-badge-front", boy.badge || boy.badgeFront);
    setTxt("male-name-back", `${boy.name} 💙`);
    setTxt("male-zodiac-back", boy.zodiac);
    setTxt("male-bday-back", boy.birthday);
    setTxt("male-hobby-back", boy.hobby);
    setTxt("male-quote-back", boy.quote);

    // Đổ thông tin Bạn Nữ (girl)
    const femaleImg = document.getElementById("female-avt");
    femaleImg.src = localStorage.getItem("love_female_avt") || girl.avatar;
    femaleImg.onerror = function() { this.onerror = null; this.src = getFemaleFallbackSVG(); };

    setTxt("female-name-front", girl.name);
    setTxt("female-badge-front", girl.badge || girl.badgeFront);
    setTxt("female-name-back", `${girl.name} 💖`);
    setTxt("female-zodiac-back", girl.zodiac);
    setTxt("female-bday-back", girl.birthday);
    setTxt("female-hobby-back", girl.hobby);
    setTxt("female-quote-back", girl.quote);

    const d = String(yourDate.getDate()).padStart(2, "0");
    const m = String(yourDate.getMonth() + 1).padStart(2, "0");
    const y = yourDate.getFullYear();
    const formattedAnni = `${d}-${m}-${y}`;

    const anniTag = document.querySelector("anni");
    if (anniTag) anniTag.textContent = formattedAnni;
    setTxt("header-anni-badge", `${d}.${m}.${y}`);
    setTxt("milestone-sub-date", `Tự động tính từ ngày kỷ niệm ${d}/${m}/${y}`);

    if (LOVE_CONFIG.loveQuotes.length > 0) {
        setTxt("love-quote-text", `"${LOVE_CONFIG.loveQuotes[0]}"`);
    }
}

// ==========================================
// 1. MÀN HÌNH KHÓA PASSCODE & VÂN TAY
// ==========================================
function updateLockscreenClock() {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const daysVN = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
    const lockTime = document.getElementById("lock-time");
    const lockDate = document.getElementById("lock-date");
    if (lockTime) lockTime.textContent = `${hh}:${mm}`;
    if (lockDate) lockDate.textContent = `${daysVN[now.getDay()]}, Ngày ${String(now.getDate()).padStart(2, "0")} Tháng ${String(now.getMonth() + 1).padStart(2, "0")}`;
}

window.pressPasscode = function(digit) {
    const targetPass = String(LOVE_CONFIG.passcode).trim();
    if (enteredPasscode.length >= targetPass.length) return;
    enteredPasscode += digit;
    updatePasscodeDots();

    if (enteredPasscode.length === targetPass.length) {
        if (enteredPasscode === targetPass) {
            unlockLoveScreen();
        } else {
            const dotsContainer = document.getElementById("passcode-dots");
            const prompt = document.getElementById("lock-prompt");
            dotsContainer.classList.add("shake-anim");
            prompt.innerHTML = `<span class="text-rose-400">Mật mã kỷ niệm là <strong>${targetPass}</strong> nhé! 💕</span>`;
            setTimeout(() => {
                enteredPasscode = "";
                updatePasscodeDots();
                dotsContainer.classList.remove("shake-anim");
            }, 450);
        }
    }
};

window.deletePasscode = function() {
    enteredPasscode = enteredPasscode.slice(0, -1);
    updatePasscodeDots();
};

function updatePasscodeDots() {
    const dots = document.querySelectorAll(".pass-dot");
    dots.forEach((dot, idx) => {
        if (idx < enteredPasscode.length) {
            dot.classList.add("bg-pink-400", "scale-110", "border-pink-400");
        } else {
            dot.classList.remove("bg-pink-400", "scale-110", "border-pink-400");
        }
    });
}

window.startBiometricScan = function(e) {
    if (e) e.preventDefault();
    const boy = getBoy();
    const girl = getGirl();
    const btn = document.getElementById("bio-btn");
    btn.classList.add("bio-scanning");
    document.getElementById("lock-prompt").innerHTML = `<span class="text-pink-300">Đang xác thực nhịp tim ${boy.name} & ${girl.name}... 💓</span>`;
    bioScanTimer = setTimeout(() => {
        unlockLoveScreen();
    }, 450);
};

window.cancelBiometricScan = function() {
    const btn = document.getElementById("bio-btn");
    if (btn) btn.classList.remove("bio-scanning");
    if (bioScanTimer) clearTimeout(bioScanTimer);
};

window.instantBiometricUnlock = function() {
    enteredPasscode = String(LOVE_CONFIG.passcode).trim();
    updatePasscodeDots();
    unlockLoveScreen();
};

function unlockLoveScreen() {
    const overlay = document.getElementById("lockscreen-overlay");
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
    setTimeout(() => {
        overlay.classList.add("hidden");
    }, 650);

    triggerHeartShower();
    if (!isMusicPlaying) {
        playCurrentTrack();
    }
}

window.relockScreen = function(e) {
    if (e) e.stopPropagation();
    enteredPasscode = "";
    updatePasscodeDots();
    const overlay = document.getElementById("lockscreen-overlay");
    overlay.classList.remove("hidden");
    requestAnimationFrame(() => {
        overlay.style.opacity = "1";
        overlay.style.pointerEvents = "auto";
    });
    toggleDynamicIsland(false);
};

// ==========================================
// 2. DYNAMIC ISLAND & SOS HUG
// ==========================================
const islandStatuses = [
    "Hải Dương ❤️ Trúc Mai",
    "Đang nhớ nhau 3000% 💕",
    "Pin tình yêu: 100% ⚡",
    "Bên nhau từ 08•09•2026 ✨"
];
const coupleMoods = [
    { badge: "⚡ 100%", text: "Trạng thái: Đang nhớ nhau cực kỳ 💕" },
    { badge: "🛵 Đi Dạo", text: "Trạng thái: Muốn đi dạo & ôm nhau thật chặt" },
    { badge: "🥰 Hạnh Phúc", text: "Trạng thái: Bình yên bên cạnh người thương" },
    { badge: "💙 Tự Do", text: "Trạng thái: Yêu bầu trời xanh & yêu Trúc Mai" }
];

function startDynamicIslandCycle() {
    setInterval(() => {
        islandIdx = (islandIdx + 1) % islandStatuses.length;
        const el = document.getElementById("island-status-text");
        if (el) el.textContent = islandStatuses[islandIdx];
    }, 3800);
}

window.toggleDynamicIsland = function(forceState) {
    const exp = document.getElementById("island-expanded");
    const chev = document.getElementById("island-chevron");
    const isHidden = exp.classList.contains("hidden");
    const shouldOpen = typeof forceState === "boolean" ? forceState : isHidden;

    if (shouldOpen) {
        exp.classList.remove("hidden");
        chev.style.transform = "rotate(180deg)";
    } else {
        exp.classList.add("hidden");
        chev.style.transform = "rotate(0deg)";
    }
};

window.setRandomMood = function(e) {
    if (e) e.stopPropagation();
    moodIdx = (moodIdx + 1) % coupleMoods.length;
    document.getElementById("island-mood-pill").textContent = coupleMoods[moodIdx].badge;
    document.getElementById("island-sub-mood").textContent = coupleMoods[moodIdx].text;
    triggerHeartShower(e);
};

window.sendSOSLoveSignal = function(e) {
    if (e) e.stopPropagation();
    const boy = getBoy();
    const girl = getGirl();
    document.getElementById("sos-modal-title").textContent = `${boy.name} 🫂 ${girl.name}`;
    document.getElementById("sos-modal-desc").textContent =
        `Tín hiệu nhớ nhau khẩn cấp đã được kích hoạt! Chốt lịch đi dạo cùng nhau và ôm nhau thật chặt ngay thôi ${boy.name} & ${girl.name} ơi! 💕`;
    document.getElementById("sos-hug-modal").classList.remove("hidden");
    triggerHeartShower(e);
};

window.closeSOSHugModal = function() {
    document.getElementById("sos-hug-modal").classList.add("hidden");
};

// ==========================================
// 3. ĐỒNG HỒ ĐẾM NGÀY YÊU NHAU
// ==========================================
window.toggleClockViewMode = function() {
    clockMode = clockMode === 1 ? 2 : 1;
    const m1 = document.getElementById("clock-mode-1");
    const m2 = document.getElementById("clock-mode-2");
    const hint = document.getElementById("clock-mode-hint");

    if (clockMode === 1) {
        m1.classList.remove("hidden");
        m2.classList.add("hidden");
        hint.textContent = "👆 Chạm vào đồng hồ để xem Năm / Tháng / Tuần / Nhịp tim";
    } else {
        m1.classList.add("hidden");
        m2.classList.remove("hidden");
        hint.textContent = "👆 Chạm lần nữa để quay về 4 ô Ngày / Giờ / Phút / Giây";
    }
};

function updateLoveClock() {
    const boy = getBoy();
    const girl = getGirl();
    const today = new Date();
    const diffMs = today - yourDate;
    const isFuture = diffMs < 0;
    const absDiffSec = Math.floor(Math.abs(diffMs) / 1000);

    const totalDays = Math.floor(absDiffSec / 86400);
    const hrs = Math.floor(absDiffSec / 3600) % 24;
    const min = Math.floor(absDiffSec / 60) % 60;
    const sec = absDiffSec % 60;

    const pad = (n) => (n > 9 ? n : "0" + n);

    document.querySelector("date").textContent = `${totalDays} Ngày`;
    document.querySelector("time").textContent = `${pad(hrs)}:${pad(min)}:${pad(sec)}`;

    document.getElementById("box-days").textContent = pad(totalDays);
    document.getElementById("box-hours").textContent = pad(hrs);
    document.getElementById("box-mins").textContent = pad(min);
    document.getElementById("box-secs").textContent = pad(sec);

    const years = Math.floor(totalDays / 365);
    const months = Math.floor((totalDays % 365) / 30);
    const remDays = (totalDays % 365) % 30;
    const weeks = Math.floor(totalDays / 7);

    const breakdownEl = document.getElementById("detailed-breakdown");
    const subtitleEl = document.getElementById("status-subtitle");
    const dStr = `${pad(yourDate.getDate())}/${pad(yourDate.getMonth() + 1)}/${yourDate.getFullYear()}`;

    if (isFuture) {
        subtitleEl.textContent = `⏳ Đếm ngược đến ngày kỷ niệm ${dStr} của ${boy.name} & ${girl.name}`;
        breakdownEl.innerHTML = `<span>🌟 Còn <strong>${totalDays}</strong> ngày (${weeks} tuần) nữa tới ${dStr}</span>`;
    } else {
        subtitleEl.textContent = `Hành trình yêu thương ngọt ngào của ${boy.name} & ${girl.name}`;
        let parts = [];
        if (years > 0) parts.push(`<strong>${years}</strong> Năm`);
        if (months > 0) parts.push(`<strong>${months}</strong> Tháng`);
        parts.push(`<strong>${remDays}</strong> Ngày`);
        breakdownEl.innerHTML = `<span>💞 Tương đương: ${parts.join(" • ")} (<strong>${weeks}</strong> tuần bên nhau)</span>`;
    }

    const totalHours = Math.floor(absDiffSec / 3600);
    const totalMins = Math.floor(absDiffSec / 60);
    const heartbeats = Math.floor(absDiffSec * 1.2);

    document.getElementById("m2-years").textContent = years;
    document.getElementById("m2-months").textContent = years * 12 + months;
    document.getElementById("m2-weeks").textContent = weeks;
    document.getElementById("m2-days").textContent = totalDays;
    document.getElementById("m2-total-hours").textContent = totalHours.toLocaleString("vi-VN") + " Giờ";
    document.getElementById("m2-total-mins").textContent = totalMins.toLocaleString("vi-VN") + " Phút";
    document.getElementById("m2-heartbeats").textContent = heartbeats.toLocaleString("vi-VN");
}

// ==========================================
// 4. LẬT THẺ 3D & ĐỔI AVATAR
// ==========================================
window.toggleFlipCard = function(cardId) {
    const el = document.getElementById(cardId);
    if (el) el.classList.toggle("is-flipped");
};

window.triggerAvatarUpload = function(event, person) {
    if (event) event.stopPropagation();
    document.getElementById(`upload-${person}`).click();
};

window.handleAvatarChange = function(event, imgId) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        const dataUrl = e.target.result;
        document.getElementById(imgId).src = dataUrl;
        try {
            localStorage.setItem(imgId === "male-avt" ? "love_male_avt" : "love_female_avt", dataUrl);
        } catch (err) {}
    };
    reader.readAsDataURL(file);
};

// ==========================================
// 5. GIAI ĐIỆU TÌNH YÊU (ĐÃ FIX HOÀN TOÀN NÚT SKIP THEO THƯ MỤC MUSIC/)
// ==========================================
const SYNTH_CHORDS = [
    [523.25, 659.25, 783.99, 1046.50, 783.99, 659.25, 440.00, 523.25, 659.25, 880.00],
    [659.25, 587.33, 523.25, 493.88, 440.00, 392.00, 440.00, 523.25, 659.25, 783.99],
    [587.33, 739.99, 880.00, 1174.66, 880.00, 739.99, 493.88, 587.33, 739.99, 987.77],
    [440.00, 554.37, 659.25, 880.00, 659.25, 554.37, 392.00, 493.88, 587.33, 783.99],
    [493.88, 622.25, 739.99, 987.77, 739.99, 622.25, 440.00, 523.25, 659.25, 880.00]
];

function setupMusicPlayer() {
    const rawFiles = Array.isArray(LOVE_CONFIG.musicFiles) && LOVE_CONFIG.musicFiles.length > 0
        ? LOVE_CONFIG.musicFiles
        : ["myheart"];

    // Chuẩn hóa danh sách bài hát từ mảng musicFiles: Tên bài hát chính là tên file
    playlistTracks = rawFiles.map((fileItem, idx) => {
        const cleanName = String(fileItem).trim().replace(/\.mp3$/i, "");
        return {
            title: cleanName,
            src: `music/${cleanName}.mp3`,
            notes: SYNTH_CHORDS[idx % SYNTH_CHORDS.length]
        };
    });

    renderMusicDropdown();

    const audio = document.getElementById("bg-audio");
    audio.volume = 0.8;

    // Tự động chuyển sang bài tiếp theo khi hết bài
    audio.addEventListener("ended", function() {
        switchMelodyTrack();
    });

    updateTrackMetadataUI();
}

function renderMusicDropdown() {
    const selector = document.getElementById("song-selector");
    if (!selector) return;
    selector.innerHTML = playlistTracks.map((t, idx) =>
        `<option value="${idx}">🎵 ${idx + 1}. ${t.title} (${t.src})</option>`
    ).join("");
    selector.value = String(currentTrackIndex);
}

function updateTrackMetadataUI() {
    const track = playlistTracks[currentTrackIndex];
    if (!track) return;

    document.getElementById("track-index-badge").textContent = `Bài ${currentTrackIndex + 1}/${playlistTracks.length}`;
    document.getElementById("song-title-display").textContent = track.title;
    document.getElementById("song-source-note").textContent = track.isCustomBlob
        ? `File tải lên: ${track.title}.mp3`
        : `Đang phát: ${track.src}`;

    const selector = document.getElementById("song-selector");
    if (selector) selector.value = String(currentTrackIndex);
}

function playCurrentTrack() {
    const track = playlistTracks[currentTrackIndex];
    if (!track) return;

    stopRomanticSynth();
    updateTrackMetadataUI();

    const audio = document.getElementById("bg-audio");
    audio.pause();
    audio.src = track.src;
    audio.load();

    audio.play().then(() => {
        usingSynthFallback = false;
        document.getElementById("audio-status-sub").textContent = `Đang phát từ thư mục music/`;
        setPlayingUI(true);
    }).catch(() => {
        // Nếu file .mp3 chưa kịp bỏ vào thư mục music/, tự động phát giai điệu hộp nhạc tương ứng để nút Skip luôn hoạt động mượt!
        usingSynthFallback = true;
        document.getElementById("audio-status-sub").textContent = `Hộp nhạc Lofi (${track.title})`;
        startRomanticSynth(track);
        setPlayingUI(true);
    });
}

window.toggleMusic = function() {
    const audio = document.getElementById("bg-audio");
    if (!isMusicPlaying) {
        playCurrentTrack();
    } else {
        audio.pause();
        stopRomanticSynth();
        setPlayingUI(false);
    }
};

// Nút Skip Next (⏭) - Nhảy theo danh sách trong thư mục music/
window.switchMelodyTrack = function() {
    if (playlistTracks.length === 0) return;
    if (isShuffleMusic && playlistTracks.length > 1) {
        let nextIdx = currentTrackIndex;
        while (nextIdx === currentTrackIndex) {
            nextIdx = Math.floor(Math.random() * playlistTracks.length);
        }
        currentTrackIndex = nextIdx;
    } else {
        currentTrackIndex = (currentTrackIndex + 1) % playlistTracks.length;
    }
    playCurrentTrack();
};

// Nút Prev (⏮)
window.prevMelodyTrack = function() {
    if (playlistTracks.length === 0) return;
    currentTrackIndex = (currentTrackIndex - 1 + playlistTracks.length) % playlistTracks.length;
    playCurrentTrack();
};

window.selectTrackFromDropdown = function(idxStr) {
    currentTrackIndex = parseInt(idxStr, 10) || 0;
    playCurrentTrack();
};

window.toggleShuffleMusic = function() {
    isShuffleMusic = !isShuffleMusic;
    const btn = document.getElementById("shuffle-btn");
    const badge = document.getElementById("shuffle-badge");
    if (isShuffleMusic) {
        btn.classList.add("bg-pink-500", "text-white");
        badge.classList.remove("hidden");
    } else {
        btn.classList.remove("bg-pink-500", "text-white");
        badge.classList.add("hidden");
    }
};

function setPlayingUI(playing) {
    isMusicPlaying = playing;
    const vinyl = document.getElementById("vinyl-record");
    const viz = document.getElementById("viz-container");
    const playText = document.getElementById("play-text");
    const playIcon = document.getElementById("play-icon");

    if (playing) {
        vinyl.classList.add("playing");
        viz.classList.add("playing-viz");
        playText.textContent = "Tạm Dừng";
        playIcon.setAttribute("data-lucide", "pause");
    } else {
        vinyl.classList.remove("playing");
        viz.classList.remove("playing-viz");
        playText.textContent = "Phát Nhạc";
        playIcon.setAttribute("data-lucide", "play");
    }
    if (window.lucide) lucide.createIcons();
}

function startRomanticSynth(track) {
    stopRomanticSynth();
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === "suspended") audioCtx.resume();

    let step = 0;
    const notes = track.notes || SYNTH_CHORDS[0];
    const volSlider = document.getElementById("volume-slider");

    const playNote = () => {
        if (!isMusicPlaying) return;
        const freq = notes[step % notes.length];
        step++;

        const vol = (volSlider ? volSlider.value : 80) / 100;
        if (vol <= 0.01) return;

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.11 * vol, audioCtx.currentTime + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.0);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 1.05);
    };

    playNote();
    synthInterval = setInterval(playNote, 420);
}

function stopRomanticSynth() {
    if (synthInterval) {
        clearInterval(synthInterval);
        synthInterval = null;
    }
}

window.changeVolume = function(val) {
    const audio = document.getElementById("bg-audio");
    audio.volume = val / 100;
};

// Hỗ trợ chọn thêm nhiều file MP3 từ máy vào danh sách phát
window.handleCustomMusic = function(event) {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) return;

    files.forEach((file, idx) => {
        const cleanTitle = file.name.replace(/\.[^/.]+$/, "");
        const url = URL.createObjectURL(file);
        playlistTracks.push({
            title: cleanTitle,
            src: url,
            isCustomBlob: true,
            notes: SYNTH_CHORDS[idx % SYNTH_CHORDS.length]
        });
    });

    renderMusicDropdown();
    currentTrackIndex = playlistTracks.length - files.length;
    playCurrentTrack();
};

// ==========================================
// 6. VÒNG QUAY HẸN HÒ + POPUP THÔNG BÁO TRÚNG Ô ĐÓ
// ==========================================
window.switchWheelCategory = function(cat) {
    if (isSpinningWheel) return;
    currentWheelCat = cat;
    const tabFood = document.getElementById("wheel-tab-food");
    const tabPlace = document.getElementById("wheel-tab-place");

    if (cat === "food") {
        tabFood.className = "px-2.5 py-1 rounded-full bg-pink-500 text-white transition-all";
        tabPlace.className = "px-2.5 py-1 rounded-full opacity-75 hover:opacity-100 transition-all";
    } else {
        tabPlace.className = "px-2.5 py-1 rounded-full bg-pink-500 text-white transition-all";
        tabFood.className = "px-2.5 py-1 rounded-full opacity-75 hover:opacity-100 transition-all";
    }
    renderWheelTags();
    drawDateWheel();
};

window.addCustomWheelOption = function() {
    const input = document.getElementById("custom-wheel-input");
    const val = input.value.trim();
    if (!val) return;

    const list = LOVE_CONFIG.wheelOptions[currentWheelCat];
    const color = WHEEL_COLORS[list.length % WHEEL_COLORS.length];
    list.push({ label: val, color });

    try { localStorage.setItem("love_wheel_options_v4", JSON.stringify(LOVE_CONFIG.wheelOptions)); } catch (e) {}
    input.value = "";
    renderWheelTags();
    drawDateWheel();
};

window.removeCustomWheelOption = function(idx) {
    const list = LOVE_CONFIG.wheelOptions[currentWheelCat];
    if (list.length <= 2) {
        alert("Vòng quay cần ít nhất 2 lựa chọn nhé!");
        return;
    }
    list.splice(idx, 1);
    try { localStorage.setItem("love_wheel_options_v4", JSON.stringify(LOVE_CONFIG.wheelOptions)); } catch (e) {}
    renderWheelTags();
    drawDateWheel();
};

function renderWheelTags() {
    const box = document.getElementById("wheel-tags-list");
    if (!box) return;
    const list = LOVE_CONFIG.wheelOptions[currentWheelCat];
    box.innerHTML = list.map((item, idx) => `
        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full glass-inner text-[10px] font-bold">
            <span>${item.label}</span>
            <button onclick="removeCustomWheelOption(${idx})" class="text-rose-500 hover:text-rose-700 font-extrabold">✕</button>
        </span>
    `).join("");
}

function drawDateWheel() {
    const canvas = document.getElementById("date-wheel-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const items = LOVE_CONFIG.wheelOptions[currentWheelCat];
    const arc = (Math.PI * 2) / items.length;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const radius = cx - 4;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    items.forEach((item, i) => {
        const startAngle = wheelAngle + i * arc;
        const endAngle = startAngle + arc;

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = item.color || WHEEL_COLORS[i % WHEEL_COLORS.length];
        ctx.fill();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = "rgba(255,255,255,0.65)";
        ctx.stroke();

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(startAngle + arc / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "#ffffff";
        ctx.font = items.length > 8 ? "bold 9px 'Plus Jakarta Sans', sans-serif" : "bold 10.5px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText(item.label.slice(0, 22), radius - 10, 3.5);
        ctx.restore();
    });

    ctx.beginPath();
    ctx.arc(cx, cy, 18, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.font = "13px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("❤️", cx, cy);
}

window.spinDateWheel = function() {
    if (isSpinningWheel) return;
    isSpinningWheel = true;
    const resultEl = document.getElementById("wheel-result-text");
    resultEl.textContent = "🎡 Đang quay chọn kèo tuyệt vời nhất...";

    const extraSpins = 5 + Math.random() * 4;
    const targetAngle = wheelAngle + extraSpins * Math.PI * 2;
    const startAngle = wheelAngle;
    const duration = 3000;
    const startTime = performance.now();

    function animateWheel(now) {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const easeOut = 1 - Math.pow(1 - progress, 4);

        wheelAngle = startAngle + (targetAngle - startAngle) * easeOut;
        drawDateWheel();

        if (progress < 1) {
            requestAnimationFrame(animateWheel);
        } else {
            isSpinningWheel = false;
            const items = LOVE_CONFIG.wheelOptions[currentWheelCat];
            const arc = (Math.PI * 2) / items.length;
            const normalized = (Math.PI * 1.5 - (wheelAngle % (Math.PI * 2)) + Math.PI * 4) % (Math.PI * 2);
            const winningIdx = Math.floor(normalized / arc) % items.length;
            const winner = items[winningIdx];

            resultEl.innerHTML = `🎉 Trúng ô: <strong class="underline">${winner.label}</strong>!`;
            triggerHeartShower();
            openWheelWinnerModal(winner, winningIdx + 1, items.length);
        }
    }
    requestAnimationFrame(animateWheel);
};

function openWheelWinnerModal(winnerObj, indexNumber, totalCount) {
    const boy = getBoy();
    const girl = getGirl();
    const isFood = currentWheelCat === "food";
    document.getElementById("wheel-modal-emoji").textContent = isFood ? "🍖" : "🛵";
    document.getElementById("wheel-modal-badge").textContent = isFood
        ? `🎯 TRÚNG Ô MÓN ĂN (#${indexNumber}/${totalCount})`
        : `🎯 TRÚNG Ô ĐI CHƠI (#${indexNumber}/${totalCount})`;
    document.getElementById("wheel-modal-winner-text").textContent = winnerObj.label;
    document.getElementById("wheel-modal-couple-note").textContent =
        `Vũ trụ đã gọi tên "${winnerObj.label}" cho ${boy.name} & ${girl.name} rồi nhé! 💕`;

    document.getElementById("wheel-winner-modal").classList.remove("hidden");
}

window.closeWheelWinnerModal = function(celebrate = false) {
    document.getElementById("wheel-winner-modal").classList.add("hidden");
    if (celebrate) triggerHeartShower();
};

window.spinAgainFromModal = function() {
    closeWheelWinnerModal();
    setTimeout(() => spinDateWheel(), 150);
};

// ==========================================
// 7. BA MINI-GAME GIẢI TRÍ GIẾT THỜI GIAN
// ==========================================
window.switchMiniGame = function(gameName) {
    ["catch", "memory", "quiz"].forEach(g => {
        document.getElementById(`game-panel-${g}`).classList.toggle("hidden", g !== gameName);
        const btn = document.getElementById(`tab-game-${g}`);
        if (g === gameName) {
            btn.className = "px-3 py-1 rounded-full bg-pink-500 text-white transition";
        } else {
            btn.className = "px-3 py-1 rounded-full opacity-75 hover:opacity-100 transition";
        }
    });
};

// --- MINI-GAME 1: BẮT TRÁI TIM (15s) ---
let catchGameTimer = null;
let catchSpawnTimer = null;
let catchScore = 0;
let catchHigh = parseInt(localStorage.getItem("love_catch_high") || "0", 10);

window.startHeartCatchGame = function() {
    const stage = document.getElementById("catch-stage");
    const startBtn = document.getElementById("catch-start-btn");
    const msg = document.getElementById("catch-msg");

    catchScore = 0;
    let timeLeft = 15;
    document.getElementById("catch-score").textContent = "0";
    document.getElementById("catch-high").textContent = String(catchHigh);
    document.getElementById("catch-timer").textContent = "15s";

    startBtn.classList.add("hidden");
    msg.classList.add("hidden");

    if (catchGameTimer) clearInterval(catchGameTimer);
    if (catchSpawnTimer) clearInterval(catchSpawnTimer);

    catchSpawnTimer = setInterval(() => {
        const item = document.createElement("button");
        const isBomb = Math.random() < 0.18;
        const icons = isBomb ? ["💣"] : ["💖", "💙", "🌷", "✨", "🧋"];
        item.textContent = icons[Math.floor(Math.random() * icons.length)];
        item.className = "absolute text-2xl sm:text-3xl select-none transition-transform active:scale-150 focus:outline-none";
        item.style.left = (10 + Math.random() * 80) + "%";
        item.style.top = "-30px";
        stage.appendChild(item);

        let pos = -30;
        const speed = 2.2 + Math.random() * 2.2;
        const fall = setInterval(() => {
            pos += speed;
            item.style.top = pos + "px";
            if (pos > stage.clientHeight) {
                clearInterval(fall);
                item.remove();
            }
        }, 20);

        item.onpointerdown = (e) => {
            e.stopPropagation();
            clearInterval(fall);
            if (isBomb) {
                catchScore = Math.max(0, catchScore - 2);
            } else {
                catchScore += 1;
                spawnMiniClickBurst(e.clientX, e.clientY);
            }
            document.getElementById("catch-score").textContent = String(catchScore);
            item.remove();
        };
    }, 380);

    catchGameTimer = setInterval(() => {
        timeLeft--;
        document.getElementById("catch-timer").textContent = `${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(catchGameTimer);
            clearInterval(catchSpawnTimer);
            stage.querySelectorAll("button:not(#catch-start-btn)").forEach(b => b.remove());
            if (catchScore > catchHigh) {
                catchHigh = catchScore;
                localStorage.setItem("love_catch_high", String(catchHigh));
                document.getElementById("catch-high").textContent = String(catchHigh);
            }
            msg.textContent = `🎉 Hết giờ! Bạn bắt được ${catchScore} điểm yêu thương!`;
            msg.classList.remove("hidden");
            startBtn.textContent = "🔄 Chơi Lại Lần Nữa";
            startBtn.classList.remove("hidden");
            triggerHeartShower();
        }
    }, 1000);
};

// --- MINI-GAME 2: LẬT THẺ TRÍ NHỚ (MEMORY MATCH) ---
const MEMORY_ICONS = ["💙", "💖", "🛵", "🫂", "👑", "♓", "🌷", "🎂"];
let memFlipped = [];
let memMatchedCount = 0;
let memMoves = 0;

window.initMemoryGame = function() {
    const grid = document.getElementById("memory-grid");
    if (!grid) return;
    document.getElementById("catch-high").textContent = String(catchHigh);

    const deck = [...MEMORY_ICONS, ...MEMORY_ICONS].sort(() => Math.random() - 0.5);
    memFlipped = [];
    memMatchedCount = 0;
    memMoves = 0;
    document.getElementById("mem-moves").textContent = "0";
    document.getElementById("mem-status").textContent = "Tìm các cặp biểu tượng giống nhau!";

    grid.innerHTML = deck.map((icon, idx) => `
        <button onclick="flipMemoryCard(${idx}, '${icon}')" id="mem-card-${idx}"
                class="h-14 sm:h-16 rounded-2xl glass-inner font-bold text-xl sm:text-2xl flex items-center justify-center transition-all hover:scale-105">
            ❓
        </button>
    `).join("");
};

window.flipMemoryCard = function(idx, icon) {
    const card = document.getElementById(`mem-card-${idx}`);
    if (!card || card.dataset.open === "true" || memFlipped.length >= 2) return;

    card.textContent = icon;
    card.dataset.open = "true";
    card.classList.add("bg-pink-500/25");
    memFlipped.push({ idx, icon, card });

    if (memFlipped.length === 2) {
        memMoves++;
        document.getElementById("mem-moves").textContent = String(memMoves);
        const [first, second] = memFlipped;

        if (first.icon === second.icon) {
            memMatchedCount++;
            memFlipped = [];
            if (memMatchedCount === MEMORY_ICONS.length) {
                document.getElementById("mem-status").textContent = `🎉 Tuyệt vời! Thắng sau ${memMoves} lượt!`;
                triggerHeartShower();
            }
        } else {
            setTimeout(() => {
                first.card.textContent = "❓";
                second.card.textContent = "❓";
                first.card.dataset.open = "false";
                second.card.dataset.open = "false";
                first.card.classList.remove("bg-pink-500/25");
                second.card.classList.remove("bg-pink-500/25");
                memFlipped = [];
            }, 650);
        }
    }
};

// --- MINI-GAME 3: ĐO ĐỘ ĂN Ý CẶP ĐÔI ---
const COUPLE_QUIZZES = [
    {
        q: "1. Màu sắc yêu thích của Hải Dương đại diện cho sự tự do là màu gì?",
        opts: ["💙 Màu xanh da trời", "❤️ Màu đỏ rực rỡ", "💛 Màu vàng nắng", "💜 Màu tím mộng mơ"],
        ans: 0,
        reply: "Chính xác 100%! Màu xanh da trời là màu của tự do & tình yêu dành cho Mai 💙"
    },
    {
        q: "2. Sinh nhật của Công Chúa Nhỏ Trúc Mai là ngày nào?",
        opts: ["🎂 Ngày 01/03", "🎂 Ngày 10/02", "🎂 Ngày 08/09", "🎂 Ngày 14/02"],
        ans: 1,
        reply: "Chuẩn luôn! 10/02 là ngày Công Chúa Nhỏ Trúc Mai chào đời 👑"
    },
    {
        q: "3. Sở thích ngọt ngào nhất của Trúc Mai khi ở bên Hải Dương là gì?",
        opts: ["🛵 Đi dạo cùng Dương & Ôm Dương", "🎮 Ngồi viết code Python", "⚽ Đi đá bóng", "📚 Học bài cả ngày"],
        ans: 0,
        reply: "Đúng rồi! Đi dạo cùng Dương & Ôm Dương là tuyệt vời nhất trên đời 🫂💕"
    }
];
let currentQuizIdx = 0;

function initCoupleQuiz() {
    renderQuizStep();
}

function renderQuizStep() {
    const item = COUPLE_QUIZZES[currentQuizIdx % COUPLE_QUIZZES.length];
    document.getElementById("quiz-question").textContent = item.q;
    document.getElementById("quiz-feedback").textContent = "";
    document.getElementById("quiz-options").innerHTML = item.opts.map((opt, idx) => `
        <button onclick="answerCoupleQuiz(${idx})" class="py-2.5 px-4 rounded-xl glass-inner font-bold text-xs sm:text-sm hover:bg-pink-500 hover:text-white transition">
            ${opt}
        </button>
    `).join("");
}

window.answerCoupleQuiz = function(choiceIdx) {
    const item = COUPLE_QUIZZES[currentQuizIdx % COUPLE_QUIZZES.length];
    const fb = document.getElementById("quiz-feedback");
    if (choiceIdx === item.ans) {
        fb.textContent = "🎉 " + item.reply;
        triggerHeartShower();
        setTimeout(() => {
            currentQuizIdx++;
            renderQuizStep();
        }, 2000);
    } else {
        fb.textContent = "🙈 Chưa đúng rồi, chọn lại đáp án khác nha!";
    }
};

// ==========================================
// 8. LỌ SAO ĐIỀU ƯỚC, VOUCHER & BUCKET LIST
// ==========================================
let wishIdx = 0;
window.drawWishStar = function(e) {
    const list = LOVE_CONFIG.wishStars;
    const textEl = document.getElementById("wish-star-text");
    textEl.textContent = `"${list[wishIdx % list.length]}"`;
    wishIdx++;
    triggerHeartShower(e);
};

function renderCoupons() {
    const box = document.getElementById("coupons-list");
    if (!box) return;
    const saved = JSON.parse(localStorage.getItem("love_coupons_v1") || "null");
    const list = saved || LOVE_CONFIG.coupons;

    box.innerHTML = list.map((c, idx) => `
        <div class="glass-inner rounded-2xl p-3.5 flex flex-col justify-between relative overflow-hidden ${c.used ? 'opacity-65' : ''}">
            <div class="flex items-start gap-2.5">
                <span class="text-2xl">${c.icon}</span>
                <div>
                    <h4 class="font-extrabold text-xs sm:text-sm">${c.title}</h4>
                    <p class="text-[11px] opacity-75 mt-0.5">${c.desc}</p>
                </div>
            </div>
            <button onclick="useCoupon(${idx})" class="mt-3 w-full py-1.5 rounded-xl text-xs font-extrabold transition ${
                c.used
                    ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300'
                    : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow'
            }">
                ${c.used ? '✅ ĐÃ ĐÓNG DẤU SỬ DỤNG' : '🎟️ Đổi Voucher Ngay'}
            </button>
        </div>
    `).join("");
}

window.useCoupon = function(idx) {
    const saved = JSON.parse(localStorage.getItem("love_coupons_v1") || "null") || LOVE_CONFIG.coupons;
    saved[idx].used = !saved[idx].used;
    localStorage.setItem("love_coupons_v1", JSON.stringify(saved));
    renderCoupons();
    if (saved[idx].used) triggerHeartShower();
};

window.resetCoupons = function() {
    localStorage.removeItem("love_coupons_v1");
    LOVE_CONFIG.coupons.forEach(c => c.used = false);
    renderCoupons();
};

function renderBucketList() {
    const grid = document.getElementById("bucket-grid");
    if (!grid) return;
    const saved = JSON.parse(localStorage.getItem("love_bucket_v1") || "null");
    const list = saved || LOVE_CONFIG.bucketList;

    const doneCount = list.filter(i => i.done).length;
    document.getElementById("bucket-progress-badge").textContent = `✅ ${doneCount}/${list.length} Hoàn thành`;

    grid.innerHTML = list.map((item, idx) => `
        <div onclick="toggleBucketItem(${idx})" class="glass-inner rounded-2xl p-3 flex items-center gap-2.5 cursor-pointer">
            <span class="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                item.done ? 'bg-emerald-500 text-white' : 'border-2 border-pink-400'
            }">
                ${item.done ? '✓' : ''}
            </span>
            <span class="text-xs font-bold flex-1 ${item.done ? 'line-through opacity-65' : ''}">${item.text}</span>
        </div>
    `).join("");
}

window.toggleBucketItem = function(idx) {
    const list = JSON.parse(localStorage.getItem("love_bucket_v1") || "null") || LOVE_CONFIG.bucketList;
    list[idx].done = !list[idx].done;
    localStorage.setItem("love_bucket_v1", JSON.stringify(list));
    renderBucketList();
    if (list[idx].done) triggerHeartShower();
};

window.addBucketItem = function() {
    const input = document.getElementById("new-bucket-input");
    const val = input.value.trim();
    if (!val) return;
    const list = JSON.parse(localStorage.getItem("love_bucket_v1") || "null") || LOVE_CONFIG.bucketList;
    list.push({ text: val, done: false });
    localStorage.setItem("love_bucket_v1", JSON.stringify(list));
    input.value = "";
    renderBucketList();
};

// ==========================================
// 9. THÚ CƯNG CHIBI CẶP ĐÔI DƯỚI CHÂN TRANG
// ==========================================
const PET_MESSAGES = [
    "Dương 💙 Mai mãi đỉnh!",
    "Đi dạo cùng nhau thôi 🛵",
    "Ôm cái cho ấm nào 🫂",
    "Code không bug, yêu không lỗi! 💻",
    "Công chúa 10/02 xinh nhất! 👑"
];
let petMsgIdx = 0;

window.interactChibiPets = function(e) {
    petMsgIdx = (petMsgIdx + 1) % PET_MESSAGES.length;
    document.getElementById("pet-speech-bubble").textContent = PET_MESSAGES[petMsgIdx];
    triggerHeartShower(e);
};

// ==========================================
// 10. POLAROID, THƯ TAY, CỘT MỐC & STORY 9:16
// ==========================================
function initPolaroids() {
    const defaultPolaroids = LOVE_CONFIG.polaroids.map((p, idx) => ({
        id: idx,
        caption: p.caption,
        date: p.date,
        rot: p.rot || (idx % 2 === 0 ? "-2deg" : "2deg"),
        img: p.img || createRomanticPolaroidSVG(p.fallbackTitle, p.emoji, p.c1, p.c2),
        fallbackSvg: createRomanticPolaroidSVG(p.fallbackTitle, p.emoji, p.c1, p.c2)
    }));

    try {
        const saved = localStorage.getItem("love_polaroids_v4");
        polaroidsData = saved ? JSON.parse(saved) : defaultPolaroids;
    } catch (e) {
        polaroidsData = defaultPolaroids;
    }
    renderPolaroids();
}

function renderPolaroids() {
    const grid = document.getElementById("polaroid-grid");
    if (!grid) return;
    grid.innerHTML = "";

    const badge = document.getElementById("polaroid-count-badge");
    if (badge) badge.textContent = `📸 ${polaroidsData.length} Khoảnh Khắc`;

    polaroidsData.forEach((p, idx) => {
        const fallback = p.fallbackSvg || createRomanticPolaroidSVG("Memory", "💕", "#38bdf8", "#f472b6");
        const html = `
            <div onclick="openPolaroidModal(${idx})" class="polaroid-card cursor-pointer" style="transform: rotate(${p.rot || '-2deg'});">
                <div class="washi-tape"></div>
                <div class="aspect-square rounded-lg overflow-hidden bg-pink-50 mb-2">
                    <img src="${p.img}" onerror="this.onerror=null;this.src='${fallback}'" alt="${p.caption}" class="w-full h-full object-cover">
                </div>
                <p class="font-handwriting text-base sm:text-lg font-bold text-center leading-tight text-slate-800 truncate">${p.caption}</p>
                <p class="font-mono text-[10px] text-center text-slate-400 mt-0.5">${p.date}</p>
            </div>
        `;
        grid.insertAdjacentHTML("beforeend", html);
    });
}

window.openPolaroidModal = function(idx) {
    activePolaroidIndex = idx;
    const item = polaroidsData[idx];
    const fallback = item.fallbackSvg || createRomanticPolaroidSVG("Memory", "💕", "#38bdf8", "#f472b6");
    const imgEl = document.getElementById("lightbox-img");
    imgEl.src = item.img;
    imgEl.onerror = function() { this.onerror = null; this.src = fallback; };

    document.getElementById("lightbox-caption-input").value = item.caption;
    document.getElementById("lightbox-date-input").value = item.date || "";
    document.getElementById("polaroid-modal").classList.remove("hidden");
};

window.closePolaroidModal = function() {
    document.getElementById("polaroid-modal").classList.add("hidden");
};

window.triggerPolaroidFileSelect = function() {
    document.getElementById("polaroid-file-input").click();
};

window.handlePolaroidUpload = function(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        polaroidsData[activePolaroidIndex].img = e.target.result;
        document.getElementById("lightbox-img").src = e.target.result;
    };
    reader.readAsDataURL(file);
};

window.savePolaroidEdits = function() {
    const newCap = document.getElementById("lightbox-caption-input").value.trim();
    const newDate = document.getElementById("lightbox-date-input").value.trim();
    if (newCap) polaroidsData[activePolaroidIndex].caption = newCap;
    if (newDate) polaroidsData[activePolaroidIndex].date = newDate;
    try {
        localStorage.setItem("love_polaroids_v4", JSON.stringify(polaroidsData));
    } catch (e) {}
    renderPolaroids();
    closePolaroidModal();
    triggerHeartShower();
};

window.openAddPolaroidModal = function() {
    document.getElementById("add-polaroid-modal").classList.remove("hidden");
};

window.closeAddPolaroidModal = function() {
    document.getElementById("add-polaroid-modal").classList.add("hidden");
};

window.confirmAddNewPolaroid = function() {
    const urlVal = document.getElementById("new-polaroid-url").value.trim();
    const fileVal = document.getElementById("new-polaroid-file").files[0];
    const capVal = document.getElementById("new-polaroid-caption").value.trim() || "Khoảnh khắc bên nhau 💕";
    const dateVal = document.getElementById("new-polaroid-date").value.trim() || "Kỷ niệm ngọt ngào";

    const pushPhoto = (srcData) => {
        polaroidsData.push({
            id: Date.now(),
            caption: capVal,
            date: dateVal,
            rot: polaroidsData.length % 2 === 0 ? "-2deg" : "2deg",
            img: srcData,
            fallbackSvg: createRomanticPolaroidSVG(capVal, "💖", "#38bdf8", "#f472b6")
        });
        try { localStorage.setItem("love_polaroids_v4", JSON.stringify(polaroidsData)); } catch (e) {}
        renderPolaroids();
        document.getElementById("new-polaroid-url").value = "";
        document.getElementById("new-polaroid-file").value = "";
        document.getElementById("new-polaroid-caption").value = "";
        document.getElementById("new-polaroid-date").value = "";
        closeAddPolaroidModal();
        triggerHeartShower();
    };

    if (urlVal) {
        pushPhoto(urlVal);
    } else if (fileVal) {
        const reader = new FileReader();
        reader.onload = e => pushPhoto(e.target.result);
        reader.readAsDataURL(fileVal);
    } else {
        alert("Bạn hãy dán Link ảnh hoặc chọn 1 tấm ảnh từ máy nhé!");
    }
};

function renderLettersGrid() {
    const grid = document.getElementById("letters-grid");
    if (!grid) return;

    const badgeStyles = {
        emerald: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-300",
        amber: "bg-amber-500/20 text-amber-600 dark:text-amber-300",
        purple: "bg-purple-500/20 text-purple-600 dark:text-purple-300"
    };
    const btnStyles = {
        emerald: "bg-pink-500/15 hover:bg-pink-500 text-pink-600 dark:text-pink-300 hover:text-white",
        amber: "bg-amber-500/15 hover:bg-amber-500 text-amber-700 dark:text-amber-300 hover:text-white",
        purple: "bg-purple-500/15 hover:bg-purple-500 text-purple-600 dark:text-purple-300 hover:text-white"
    };

    grid.innerHTML = LOVE_CONFIG.letters.map((ltr, idx) => {
        const bStyle = badgeStyles[ltr.badgeColor] || badgeStyles.emerald;
        const btStyle = btnStyles[ltr.badgeColor] || btnStyles.emerald;
        return `
            <div onclick="openLetterModal(${idx})" class="envelope-card glass-inner rounded-3xl p-5 cursor-pointer flex flex-col justify-between relative overflow-hidden group">
                <div>
                    <div class="flex items-center justify-between mb-3">
                        <span class="px-2.5 py-1 rounded-full ${bStyle} text-[11px] font-bold">${ltr.badgeText}</span>
                        <span class="font-mono text-xs opacity-60">${ltr.rightNote}</span>
                    </div>
                    <div class="my-3 flex justify-center">
                        <div class="w-16 h-16 rounded-2xl bg-gradient-to-br ${ltr.grad} text-white flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                            ${ltr.icon}
                        </div>
                    </div>
                    <h4 class="font-extrabold text-base text-center">${ltr.cardTitle}</h4>
                    <p class="text-xs opacity-75 text-center mt-1">${ltr.cardSub}</p>
                </div>
                <button class="mt-4 w-full py-2 rounded-xl ${btStyle} font-bold text-xs transition-all">
                    ${ltr.btnText}
                </button>
            </div>
        `;
    }).join("");
}

window.openLetterModal = function(idx) {
    const letter = LOVE_CONFIG.letters[idx];
    if (!letter) return;

    document.getElementById("modal-letter-icon").textContent = letter.icon;
    document.getElementById("modal-letter-title").textContent = letter.title;
    document.getElementById("modal-letter-date").textContent = letter.date;
    const bodyEl = document.getElementById("modal-letter-body");
    bodyEl.textContent = "";

    document.getElementById("letter-modal").classList.remove("hidden");

    if (typewriterTimer) clearInterval(typewriterTimer);
    let charIdx = 0;
    const text = letter.body;
    typewriterTimer = setInterval(() => {
        if (charIdx < text.length) {
            bodyEl.textContent += text.charAt(charIdx);
            charIdx++;
        } else {
            clearInterval(typewriterTimer);
        }
    }, 20);
};

window.closeLetterModal = function() {
    if (typewriterTimer) clearInterval(typewriterTimer);
    document.getElementById("letter-modal").classList.add("hidden");
};

function renderMilestones() {
    const boy = getBoy();
    const girl = getGirl();
    const now = new Date();
    const elapsedDays = Math.max(0, Math.floor((now - yourDate) / (1000 * 60 * 60 * 24)));

    const listEl = document.getElementById("milestones-list");
    if (!listEl) return;
    listEl.innerHTML = "";

    let nextMilestone = null;
    let prevMilestoneDays = 0;

    LOVE_CONFIG.milestones.forEach((m) => {
        const targetDate = new Date(yourDate.getTime() + m.days * 86400000);
        const dStr = `${String(targetDate.getDate()).padStart(2, "0")}/${String(targetDate.getMonth() + 1).padStart(2, "0")}/${targetDate.getFullYear()}`;
        const reached = now >= targetDate;

        if (!reached && !nextMilestone) {
            nextMilestone = { ...m, targetDate, dStr, prevDays: prevMilestoneDays };
        }
        if (reached) {
            prevMilestoneDays = m.days;
        }

        const daysLeft = Math.ceil((targetDate - now) / (1000 * 60 * 60 * 24));

        const itemHTML = `
            <div class="glass-inner rounded-2xl p-3.5 flex items-center justify-between gap-2 ${reached ? 'border-pink-400/60' : ''}">
                <div class="flex items-center gap-2.5">
                    <span class="text-xl">${m.icon}</span>
                    <div>
                        <p class="font-bold text-xs sm:text-sm leading-tight">${m.title}</p>
                        <p class="font-mono text-[11px] opacity-65 mt-0.5">${dStr}</p>
                    </div>
                </div>
                <span class="px-2.5 py-1 rounded-full text-[11px] font-bold shrink-0 ${
                    reached
                        ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-300'
                        : 'bg-pink-500/15 text-pink-600 dark:text-pink-300'
                }">
                    ${reached ? 'Đã đạt ✅' : `Còn ${daysLeft} ngày`}
                </span>
            </div>
        `;
        listEl.insertAdjacentHTML("beforeend", itemHTML);
    });

    const badgeEl = document.getElementById("next-milestone-badge");
    const labelEl = document.getElementById("progress-label");
    const percentEl = document.getElementById("progress-percent");
    const fillEl = document.getElementById("progress-bar-fill");

    if (nextMilestone) {
        const span = nextMilestone.days - nextMilestone.prevDays;
        const currentInSpan = Math.max(0, elapsedDays - nextMilestone.prevDays);
        const pct = Math.min(100, Math.max(4, Math.round((currentInSpan / span) * 100)));

        badgeEl.textContent = `Sắp tới: ${nextMilestone.title}`;
        labelEl.textContent = `Hướng tới ${nextMilestone.title} (${nextMilestone.dStr})`;
        percentEl.textContent = `${pct}%`;
        fillEl.style.width = `${pct}%`;
    } else {
        badgeEl.textContent = "Chinh phục 2000+ ngày 👑";
        labelEl.textContent = `Tình yêu vĩnh cửu của ${boy.name} & ${girl.name}`;
        percentEl.textContent = "100%";
        fillEl.style.width = "100%";
    }
}

window.openStoryModal = function(e) {
    if (e) e.stopPropagation();
    document.getElementById("story-modal").classList.remove("hidden");
    renderStoryCardCanvas();
};

window.closeStoryModal = function() {
    document.getElementById("story-modal").classList.add("hidden");
};

window.renderStoryCardCanvas = function() {
    const boy = getBoy();
    const girl = getGirl();
    const canvas = document.getElementById("story-canvas");
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;

    const grad = ctx.createLinearGradient(0, 0, W, H);
    if (currentTheme === "galaxy") {
        grad.addColorStop(0, "#120828");
        grad.addColorStop(0.5, "#35104d");
        grad.addColorStop(1, "#1a0b2e");
    } else if (currentTheme === "skyblue") {
        grad.addColorStop(0, "#7dd3fc");
        grad.addColorStop(0.5, "#e0f2fe");
        grad.addColorStop(1, "#fbcfe8");
    } else if (currentTheme === "sunset") {
        grad.addColorStop(0, "#ffecd2");
        grad.addColorStop(0.5, "#fcb69f");
        grad.addColorStop(1, "#ff9a9e");
    } else {
        grad.addColorStop(0, "#ffdde1");
        grad.addColorStop(0.5, "#ee9ca7");
        grad.addColorStop(1, "#bae6fd");
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    const isDark = currentTheme === "galaxy";
    ctx.fillStyle = isDark ? "rgba(30, 18, 60, 0.78)" : "rgba(255, 255, 255, 0.8)";
    ctx.strokeStyle = "rgba(255, 255, 255, 0.88)";
    ctx.lineWidth = 6;
    roundRect(ctx, 80, 160, W - 160, H - 320, 70, true, true);

    const primaryColor = isDark ? "#ffffff" : "#2d1b2e";
    const accentColor = "#ec407a";

    ctx.fillStyle = accentColor;
    ctx.font = "800 36px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("✨ ĐẾM NGÀY YÊU NHAU ✨", W / 2, 290);

    const daysText = document.querySelector("date").textContent;
    ctx.fillStyle = accentColor;
    ctx.font = "800 140px 'JetBrains Mono', monospace";
    ctx.fillText(daysText, W / 2, 510);

    const detailedText = document.getElementById("detailed-breakdown").textContent;
    ctx.fillStyle = primaryColor;
    ctx.font = "600 34px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText(detailedText, W / 2, 595);

    const maleImg = document.getElementById("male-avt");
    const femaleImg = document.getElementById("female-avt");

    drawCircularImage(ctx, maleImg, 310, 920, 150);
    drawCircularImage(ctx, femaleImg, 770, 920, 150);

    ctx.font = "110px sans-serif";
    ctx.fillText("❤", W / 2, 955);

    ctx.fillStyle = primaryColor;
    ctx.font = "800 50px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText(boy.name, 310, 1155);
    ctx.fillText(girl.name, 770, 1155);

    const d = String(yourDate.getDate()).padStart(2, "0");
    const m = String(yourDate.getMonth() + 1).padStart(2, "0");
    const y = yourDate.getFullYear();

    ctx.fillStyle = accentColor;
    roundRect(ctx, W / 2 - 210, 1230, 420, 78, 39, true, false);
    ctx.fillStyle = "#ffffff";
    ctx.font = "700 38px 'JetBrains Mono', monospace";
    ctx.fillText(`💕 ${d} - ${m} - ${y} 💕`, W / 2, 1282);

    const quote = LOVE_CONFIG.loveQuotes[storyQuoteIndex % LOVE_CONFIG.loveQuotes.length];
    storyQuoteIndex++;
    ctx.fillStyle = primaryColor;
    ctx.font = "italic 600 38px 'Plus Jakarta Sans', sans-serif";
    wrapCanvasText(ctx, `"${quote}"`, W / 2, 1430, 740, 54);

    ctx.fillStyle = isDark ? "rgba(255,255,255,0.65)" : "rgba(45,27,46,0.6)";
    ctx.font = "700 30px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText(LOVE_CONFIG.texts.footerMainTitle, W / 2, 1680);
};

function drawCircularImage(ctx, imgEl, cx, cy, r) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, r + 8, 0, Math.PI * 2);
    ctx.fillStyle = "#ec407a";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    try {
        ctx.drawImage(imgEl, cx - r, cy - r, r * 2, r * 2);
    } catch (e) {}
    ctx.restore();
}

function roundRect(ctx, x, y, w, h, r, fill, stroke) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    if (fill) ctx.fill();
    if (stroke) ctx.stroke();
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(" ");
    let line = "";
    for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && n > 0) {
            ctx.fillText(line, x, y);
            line = words[n] + " ";
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line, x, y);
}

window.downloadStoryCard = function() {
    const boy = getBoy();
    const girl = getGirl();
    const canvas = document.getElementById("story-canvas");
    try {
        const link = document.createElement("a");
        link.download = `${boy.name}-${girl.name}-LoveStory.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
        triggerHeartShower();
    } catch (err) {
        triggerHeartShower();
    }
};

// ==========================================
// 11. HIỆU ỨNG NGHIÊNG 3D, ĐỔI THEME & HIỆU ỨNG CHUỘT / THỜI TIẾT
// ==========================================
function init3DTiltCards() {
    if (window.innerWidth < 768) return;
    document.querySelectorAll(".tilt-card").forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotY = ((x / rect.width) - 0.5) * 5;
            const rotX = ((y / rect.height) - 0.5) * -5;
            card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        });
    });
}

window.setTheme = function(themeName) {
    currentTheme = themeName;
    if (themeName === "dreamy") {
        document.documentElement.removeAttribute("data-theme");
    } else {
        document.documentElement.setAttribute("data-theme", themeName);
    }
    localStorage.setItem("love_theme", themeName);

    ["dreamy", "skyblue", "galaxy", "sunset"].forEach(t => {
        const btn = document.getElementById(`theme-btn-${t}`);
        if (!btn) return;
        btn.className = t === themeName
            ? "py-1.5 px-2 rounded-xl font-bold text-[11px] bg-pink-500 text-white shadow-sm"
            : "py-1.5 px-2 rounded-xl font-bold text-[11px] bg-white/10 hover:bg-white/20 text-white";
    });
};

window.setWeatherEffect = function(mode, e) {
    if (e) e.stopPropagation();
    weatherMode = mode;
    ["sakura", "stars", "bubbles", "snow"].forEach(w => {
        const btn = document.getElementById(`weather-${w}`);
        if (!btn) return;
        btn.className = w === mode
            ? "py-1 px-1.5 rounded-xl bg-pink-500 text-white text-[10px] font-bold"
            : "py-1 px-1.5 rounded-xl bg-white/10 text-white text-[10px] font-bold";
    });
};

window.sendLoveInteraction = function(event) {
    heartClicks++;
    document.getElementById("heart-tap-count").textContent = heartClicks;

    const quoteEl = document.getElementById("love-quote-text");
    const nextQuote = LOVE_CONFIG.loveQuotes[heartClicks % LOVE_CONFIG.loveQuotes.length];
    quoteEl.style.opacity = "0";
    setTimeout(() => {
        quoteEl.textContent = `"${nextQuote}"`;
        quoteEl.style.opacity = "1";
    }, 150);

    triggerHeartShower(event);
};

function spawnMiniClickBurst(x, y) {
    const icons = ["💖", "💙", "✨", "🌸"];
    for (let i = 0; i < 6; i++) {
        const span = document.createElement("span");
        span.className = "burst-heart text-base select-none";
        span.textContent = icons[i % icons.length];
        const angle = (Math.PI * 2 * i) / 6;
        span.style.left = x + "px";
        span.style.top = y + "px";
        span.style.setProperty("--tx", Math.cos(angle) * 45 + "px");
        span.style.setProperty("--ty", Math.sin(angle) * 45 - 20 + "px");
        span.style.setProperty("--rot", (Math.random() * 60 - 30) + "deg");
        document.body.appendChild(span);
        setTimeout(() => span.remove(), 1100);
    }
}

window.triggerHeartShower = function(event) {
    const icons = ["❤️", "💖", "💙", "🌷", "✨", "💘", "🥰"];
    const originX = event && event.clientX ? event.clientX : window.innerWidth / 2;
    const originY = event && event.clientY ? event.clientY : window.innerHeight / 2;

    for (let i = 0; i < 16; i++) {
        const span = document.createElement("span");
        span.className = "burst-heart text-2xl sm:text-3xl select-none";
        span.textContent = icons[Math.floor(Math.random() * icons.length)];

        const angle = Math.random() * Math.PI * 2;
        const distance = 60 + Math.random() * 160;
        span.style.left = originX + "px";
        span.style.top = originY + "px";
        span.style.setProperty("--tx", Math.cos(angle) * distance + "px");
        span.style.setProperty("--ty", (Math.sin(angle) * distance - 90) + "px");
        span.style.setProperty("--rot", (Math.random() * 90 - 45) + "deg");

        document.body.appendChild(span);
        setTimeout(() => span.remove(), 1600);
    }
};

window.toggleSparkleTrail = function(e) {
    if (e) e.stopPropagation();
    sparkleEnabled = !sparkleEnabled;
    const btn = document.getElementById("sparkle-toggle-btn");
    btn.innerHTML = `✨ Hạt chuột: ${sparkleEnabled ? 'BẬT' : 'TẮT'}`;
};

function initParticleAndSparkleCanvas() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width, height;
    let bgParticles = [];
    let trailParticles = [];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    class WeatherParticle {
        constructor() { this.reset(true); }
        reset(initial = false) {
            this.x = Math.random() * width;
            this.y = initial ? Math.random() * height : -20;
            this.size = 5 + Math.random() * 9;
            this.speedY = 0.5 + Math.random() * 0.9;
            this.speedX = (Math.random() - 0.5) * 0.6;
            this.opacity = 0.25 + Math.random() * 0.4;
            this.swing = Math.random() * Math.PI * 2;
        }
        update() {
            this.y += this.speedY;
            this.swing += 0.02;
            this.x += Math.sin(this.swing) * 0.4 + this.speedX;
            if (this.y > height + 30) this.reset(false);
        }
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.globalAlpha = this.opacity;
            if (weatherMode === "snow") {
                ctx.fillStyle = "#ffffff";
                ctx.beginPath(); ctx.arc(0, 0, this.size * 0.45, 0, Math.PI * 2); ctx.fill();
            } else if (weatherMode === "stars") {
                ctx.fillStyle = "#fde047";
                ctx.beginPath(); ctx.arc(0, 0, this.size * 0.35, 0, Math.PI * 2); ctx.fill();
            } else if (weatherMode === "bubbles") {
                ctx.strokeStyle = "#38bdf8";
                ctx.lineWidth = 1.5;
                ctx.beginPath(); ctx.arc(0, 0, this.size * 0.7, 0, Math.PI * 2); ctx.stroke();
            } else {
                ctx.fillStyle = "#ff758f";
                ctx.beginPath();
                ctx.ellipse(0, 0, this.size * 0.6, this.size * 0.35, this.swing, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        }
    }

    class TrailSparkle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = 3.5 + Math.random() * 5;
            this.vx = (Math.random() - 0.5) * 2.2;
            this.vy = (Math.random() - 0.5) * 2.2 - 0.6;
            this.life = 1;
            this.color = ["#ff3b7f", "#38bdf8", "#a855f7", "#fb7185", "#fbbf24"][Math.floor(Math.random() * 5)];
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.life -= 0.03;
        }
        draw() {
            ctx.save();
            ctx.globalAlpha = Math.max(0, this.life);
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * this.life, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    const count = window.innerWidth < 768 ? 18 : 30;
    for (let i = 0; i < count; i++) bgParticles.push(new WeatherParticle());

    const spawnTrail = (x, y) => {
        if (!sparkleEnabled) return;
        trailParticles.push(new TrailSparkle(x, y));
    };

    window.addEventListener("mousemove", (e) => spawnTrail(e.clientX, e.clientY));
    window.addEventListener("touchmove", (e) => {
        if (e.touches && e.touches[0]) {
            spawnTrail(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, { passive: true });

    function animate() {
        ctx.clearRect(0, 0, width, height);
        bgParticles.forEach(p => { p.update(); p.draw(); });
        for (let i = trailParticles.length - 1; i >= 0; i--) {
            const tp = trailParticles[i];
            tp.update();
            tp.draw();
            if (tp.life <= 0) trailParticles.splice(i, 1);
        }
        requestAnimationFrame(animate);
    }
    animate();
}