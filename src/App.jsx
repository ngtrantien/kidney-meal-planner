import React, { useMemo, useState } from "react";
import { generateMonthPlan, getRandomMeal } from "./data/meals";
import { POSTS } from "./data/posts";
import "./App.css";

const quickMenus = [
  { label: "Xem thực đơn", href: "#planner" },
  { label: "Nguyên tắc ăn thận", href: "#notice" },
  { label: "Hướng dẫn sử dụng", href: "#guide" },
  { label: "Blog dinh dưỡng", href: "#blog" },
  { label: "Theo dõi tại nhà", href: "#tracking" },
  { label: "Món gợi ý", href: "#featured" },
];

const navLinks = [
  { label: "Tổng quan", href: "#hero" },
  { label: "Nguyên tắc", href: "#notice" },
  { label: "Cách dùng", href: "#guide" },
  { label: "Blog", href: "#blog" },
  { label: "Thực đơn", href: "#planner" },
];

const noticeTabs = ["Nguyên tắc", "Lời nhắc", "Cần hỏi bác sĩ"];

const noticeByTab = {
  "Nguyên tắc": [
    {
      date: "01",
      title: "Ăn nhạt trước tiên",
      text: "Giảm nước mắm, muối, hạt nêm, đồ hộp và thực phẩm chế biến sẵn để giảm gánh nặng cho thận.",
    },
    {
      date: "02",
      title: "Theo dõi kali và phospho",
      text: "Chọn rau củ phù hợp, luộc bỏ nước với một số loại rau và điều chỉnh theo kết quả xét nghiệm.",
    },
    {
      date: "03",
      title: "Đạm vừa phải",
      text: "Không tự tăng khẩu phần thịt cá. Lượng đạm nên theo giai đoạn bệnh và hướng dẫn điều trị.",
    },
  ],
  "Lời nhắc": [
    {
      date: "Mỗi ngày",
      title: "Ghi lại cân nặng và huyết áp",
      text: "Theo dõi vào khung giờ cố định để phát hiện sớm phù, tăng huyết áp hoặc thay đổi bất thường.",
    },
    {
      date: "Mỗi bữa",
      title: "Ưu tiên luộc, hấp, nêm nhẹ",
      text: "Dùng gừng, hành, tỏi, chanh và rau thơm để tăng mùi vị thay vì thêm nhiều gia vị mặn.",
    },
    {
      date: "Hàng tuần",
      title: "Xem lại món hợp khẩu vị",
      text: "Đổi món không phù hợp, giữ lại các món dễ ăn và mang nhật ký ăn uống khi tái khám.",
    },
  ],
  "Cần hỏi bác sĩ": [
    {
      date: "Quan trọng",
      title: "Lượng nước uống mỗi ngày",
      text: "Không tự tăng hoặc giảm lượng nước nếu đang phù, tiểu ít, suy tim hoặc có chỉ định hạn chế dịch.",
    },
    {
      date: "Quan trọng",
      title: "Mức kali/phospho trong máu",
      text: "Nếu kali hoặc phospho cao, cần cá nhân hóa thực đơn kỹ hơn thay vì dùng thực đơn mẫu.",
    },
    {
      date: "Quan trọng",
      title: "Giai đoạn bệnh thận",
      text: "Người lọc máu, bệnh thận giai đoạn muộn hoặc có bệnh nền cần hướng dẫn riêng.",
    },
  ],
};

function IconRefresh() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 7V3M20 3H16M4 17V21M4 21H8" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M20 3C17.8 1.8 15.1 1.5 12.6 2.4C8.1 4 5.4 8.6 6 13.3M4 21C6.2 22.2 8.9 22.5 11.4 21.6C15.9 20 18.6 15.4 18 10.7"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function SafetyNotice() {
  return (
    <section className="safety-note" aria-label="Lưu ý y tế">
      <strong>Lưu ý y tế</strong>
      <p>
        Thực đơn trên website chỉ là gợi ý tham khảo cho chế độ ăn hỗ trợ bệnh thận. Người bệnh cần
        ưu tiên hướng dẫn của bác sĩ hoặc chuyên gia dinh dưỡng, đặc biệt về lượng nước, đạm, kali,
        phospho và natri.
      </p>
    </section>
  );
}

function GuideSection() {
  return (
    <section className="guide" id="guide">
      <div className="section-title-row">
        <h2>Cách dùng thực đơn</h2>
        <p>Ba bước ngắn để gia đình dùng planner rõ ràng hơn mỗi ngày.</p>
      </div>
      <div className="guide-steps">
        <article>
          <span>1</span>
          <h3>Chọn ngày và khẩu phần</h3>
          <p>Mặc định hiển thị hôm nay và ngày mai. Có thể đổi ngày, tăng giảm số người ăn.</p>
        </article>
        <article>
          <span>2</span>
          <h3>Xem món và đổi nếu cần</h3>
          <p>Nếu món không hợp khẩu vị, dùng nút đổi món để thay bằng món cùng nhóm bữa.</p>
        </article>
        <article>
          <span>3</span>
          <h3>Ghi lại phản ứng cơ thể</h3>
          <p>Theo dõi phù, huyết áp, cân nặng, lượng nước tiểu và trao đổi khi tái khám.</p>
        </article>
      </div>
    </section>
  );
}

function MealCard({ label, meal, servings, onRandomize }) {
  const scaledIngredients = meal.ingredients.map((item) => {
    const amount = item.per1 * servings;
    const display = Number.isInteger(amount) ? amount : amount.toFixed(1);
    return `${item.name}: ${display}${item.unit}`;
  });
  const shortIngredients = scaledIngredients.slice(0, 4);
  const quickSteps = meal.steps.slice(0, 3);

  return (
    <article className="meal-card">
      <div className="meal-image-wrap">
        <img src={meal.image} alt={meal.name} loading="lazy" />
        <span className={`meal-badge ${label === "Bữa trưa" ? "lunch" : "dinner"}`}>{label}</span>
      </div>
      <div className="meal-body">
        <h5>{meal.name}</h5>
        <div className="meal-tags">
          {meal.tags.slice(0, 3).map((tag) => (
            <span key={`${meal.id}-${tag}`}>{tag}</span>
          ))}
        </div>
        <p>{meal.note}</p>
        <ul>
          {shortIngredients.map((line) => (
            <li key={`${meal.id}-${line}`}>{line}</li>
          ))}
        </ul>
        <h6>Cách chế biến nhanh</h6>
        <ol className="meal-steps">
          {quickSteps.map((step, index) => (
            <li key={`${meal.id}-step-${index + 1}`}>{step}</li>
          ))}
        </ol>
        <details className="meal-details">
          <summary>Xem đầy đủ nguyên liệu và cách nấu</summary>
          <div>
            <h6>Nguyên liệu đầy đủ</h6>
            <ul>
              {scaledIngredients.map((line) => (
                <li key={`${meal.id}-full-${line}`}>{line}</li>
              ))}
            </ul>
            <h6>Các bước nấu</h6>
            <ol>
              {meal.steps.map((step, index) => (
                <li key={`${meal.id}-full-step-${index + 1}`}>{step}</li>
              ))}
            </ol>
          </div>
        </details>
        <button onClick={onRandomize}>
          <IconRefresh />
          Đổi món này
        </button>
      </div>
    </article>
  );
}

function DayPlan({ dayPlan, servings, onRandomize, isToday, badge }) {
  return (
    <section className={`day-plan ${isToday ? "is-today" : ""}`} id={`day-${dayPlan.day}`}>
      <header>
        <h4>Ngày {dayPlan.day}</h4>
        {(badge || isToday) && <span>{badge || "Hôm nay"}</span>}
      </header>
      <div className="day-plan-grid">
        <MealCard
          label="Bữa trưa"
          meal={dayPlan.lunch}
          servings={servings}
          onRandomize={() => onRandomize(dayPlan.day, "lunch")}
        />
        <MealCard
          label="Bữa tối"
          meal={dayPlan.dinner}
          servings={servings}
          onRandomize={() => onRandomize(dayPlan.day, "dinner")}
        />
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section className="blog" id="blog">
      <div className="section-title-row">
        <h2>Blog dinh dưỡng thận</h2>
        <p>Mẹo ăn uống an toàn, dễ áp dụng tại nhà cho người bệnh thận.</p>
      </div>
      <div className="blog-grid">
        {POSTS.map((post) => (
          <article className="blog-card" key={post.slug}>
            <div className="blog-image-wrap">
              <img src={post.image} alt={post.title} loading="lazy" />
            </div>
            <div className="blog-content">
              <time>{post.date}</time>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <details>
                <summary>Đọc thêm</summary>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TrackingSection() {
  return (
    <section className="education" id="tracking">
      <h2>Theo dõi sức khỏe tại nhà</h2>
      <div className="education-grid">
        <article className="education-card">
          <h3>Nhật ký nên ghi</h3>
          <ul>
            <li>Cân nặng buổi sáng sau khi đi tiểu</li>
            <li>Huyết áp theo giờ cố định, nên đo 2 lần/ngày</li>
            <li>Lượng nước uống, nước tiểu và dấu hiệu phù</li>
            <li>Món ăn gây khó chịu, chán ăn hoặc đầy bụng</li>
          </ul>
        </article>
        <article className="education-card">
          <h3>Khi nào cần hỏi bác sĩ?</h3>
          <ul>
            <li>Tăng cân nhanh, phù chân, khó thở hoặc tiểu ít hơn rõ rệt</li>
            <li>Huyết áp tăng cao liên tục hoặc chóng mặt bất thường</li>
            <li>Kết quả xét nghiệm kali, phospho, ure, creatinine thay đổi</li>
            <li>Muốn đổi chế độ đạm, nước uống hoặc dùng thực phẩm bổ sung</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default function App() {
  const today = Math.min(new Date().getDate(), 30);
  const [plan, setPlan] = useState(() => generateMonthPlan());
  const [servings, setServings] = useState(2);
  const [activeTab, setActiveTab] = useState(noticeTabs[0]);
  const [selectedDay, setSelectedDay] = useState(today);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const nextSelectedDay = selectedDay === 30 ? 1 : selectedDay + 1;

  const featuredMeals = useMemo(() => {
    return plan.slice(0, 4).map((entry, idx) => {
      const meal = idx % 2 === 0 ? entry.lunch : entry.dinner;
      return { id: meal.id, name: meal.name, image: meal.image };
    });
  }, [plan]);

  const scrollToDay = (day) => {
    const el = document.getElementById(`day-${day}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getDayPlan = (day) => plan.find((entry) => entry.day === day);

  const getDayBadge = (day) => {
    if (day === today) return "Hôm nay";
    if (day === (today === 30 ? 1 : today + 1)) return "Ngày mai";
    if (day === selectedDay) return "Ngày đã chọn";
    return "Ngày kế tiếp";
  };

  const showToday = () => {
    setSelectedDay(today);
    window.requestAnimationFrame(() => scrollToDay(today));
  };

  const randomizeOne = (day, session) => {
    setPlan((prev) =>
      prev.map((entry) => {
        if (entry.day !== day) return entry;
        return {
          ...entry,
          [session]: getRandomMeal(session, entry[session].id),
        };
      })
    );
  };

  const regeneratePlan = () => {
    setPlan(generateMonthPlan());
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const displayedPlans = [getDayPlan(selectedDay), getDayPlan(nextSelectedDay)].filter(Boolean);

  return (
    <div className="site-shell">
      <header className="top-header">
        <div className="topline">
          <span>Kidney Care</span>
          <span>Nutrition Hub</span>
          <span>Meal Planner</span>
        </div>
        <div className="head-main">
          <div className="brand">
            <p>Thận Khỏe</p>
            <strong>Kidney Meal Planner Center</strong>
          </div>
          <button
            className={`menu-toggle ${mobileMenuOpen ? "is-open" : ""}`}
            type="button"
            aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="main-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav id="main-navigation" className={`main-nav ${mobileMenuOpen ? "is-open" : ""}`}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMobileMenu}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="content-wrap">
        <section className="hero" id="hero">
          <div className="hero-copy">
            <p className="hero-eyebrow">Thực đơn cho người bệnh thận</p>
            <h1>
              Chăm sóc thận mỗi ngày
              <br />
              <span>với thực đơn cá nhân hóa dễ theo dõi</span>
            </h1>
            <p>
              Lên kế hoạch ăn uống 30 ngày với món ít natri, kiểm soát kali và phospho, cân đối
              đạm theo nhu cầu điều trị. Dễ thay món, dễ theo dõi, dễ duy trì lâu dài.
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="#planner">Xem thực đơn hôm nay</a>
              <a className="secondary-link" href="#guide">Cách sử dụng</a>
            </div>
            <div className="quick-grid">
              {quickMenus.map((item) => (
                <a key={item.label} href={item.href}>{item.label}</a>
              ))}
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=1400&q=80"
              alt=""
            />
          </div>
        </section>

        <SafetyNotice />

        <section className="notice" id="notice">
          <div className="section-title-row">
            <h2>Nguyên tắc ăn uống cho thận</h2>
            <div className="tabs">
              {noticeTabs.map((tab) => (
                <button
                  key={tab}
                  className={tab === activeTab ? "active" : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="notice-grid">
            <div className="notice-cards">
              {noticeByTab[activeTab].map((item) => (
                <article key={`${activeTab}-${item.title}`} className="notice-card">
                  <time>{item.date}</time>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <aside className="focus-card">
              <p>Điểm cần nhớ</p>
              <h3>Đừng tự thay đổi lượng nước, đạm hoặc thực phẩm giàu kali nếu chưa hỏi bác sĩ</h3>
              <a href="#tracking">Xem dấu hiệu cần theo dõi</a>
            </aside>
          </div>
        </section>

        <GuideSection />

        <section className="featured" id="featured">
          <div className="section-title-row">
            <h2>Món nên thử trong tuần</h2>
            <p>Lựa chọn nhanh từ chính thực đơn thận đang được tạo.</p>
          </div>
          <div className="featured-track">
            {featuredMeals.map((item) => (
              <article key={item.id}>
                <img src={item.image} alt={item.name} loading="lazy" />
                <strong>{item.name}</strong>
              </article>
            ))}
          </div>
        </section>

        <BlogSection />
        <TrackingSection />

        <section className="planner" id="planner">
          <div className="planner-head">
            <div>
              <h2>Thực đơn thận 30 ngày</h2>
              <p>Mặc định xem hôm nay và ngày mai. Chọn ngày bất kỳ để xem ngày đó và ngày kế tiếp.</p>
            </div>
            <div className="planner-controls">
              <label className="day-select">
                <span>Chọn ngày</span>
                <select value={selectedDay} onChange={(event) => setSelectedDay(Number(event.target.value))}>
                  {plan.map((entry) => (
                    <option key={entry.day} value={entry.day}>
                      Ngày {entry.day}
                    </option>
                  ))}
                </select>
              </label>
              <div className="servings">
                <span>Khẩu phần</span>
                <button onClick={() => setServings((v) => Math.max(1, v - 1))}>-</button>
                <strong>{servings}</strong>
                <button onClick={() => setServings((v) => Math.min(8, v + 1))}>+</button>
              </div>
              <button className="regen-btn" onClick={regeneratePlan}>
                <IconRefresh />
                Tạo lại thực đơn
              </button>
            </div>
          </div>

          <div className="planner-summary">
            <button className={selectedDay === today ? "active" : ""} onClick={showToday}>
              Hôm nay
            </button>
            <button onClick={() => setSelectedDay(today === 30 ? 1 : today + 1)}>
              Ngày mai
            </button>
            <span>
              Đang xem ngày {selectedDay} và ngày {nextSelectedDay}
            </span>
          </div>

          <div className="planner-list">
            {displayedPlans.map((entry) => (
              <DayPlan
                key={entry.day}
                dayPlan={entry}
                servings={servings}
                onRandomize={randomizeOne}
                isToday={entry.day === today}
                badge={getDayBadge(entry.day)}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>Kidney Meal Planner Center</strong>
          <p>Hỗ trợ xây dựng bữa ăn phù hợp cho bệnh thận mạn tính.</p>
        </div>
        <div className="footer-actions">
          <button onClick={showToday}>Đến ngày hôm nay</button>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Lên đầu trang</button>
        </div>
      </footer>
    </div>
  );
}
