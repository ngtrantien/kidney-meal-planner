import React, { useMemo, useState } from "react";
import { generateMonthPlan, getRandomMeal } from "./data/meals";
import { POSTS } from "./data/posts";
import "./App.css";

const quickMenus = [
  "Hướng dẫn món ăn thận",
  "Thông số dinh dưỡng",
  "Q&A với bác sĩ",
  "Lịch tái khám",
  "Kho công thức",
  "Thực đơn theo tuần",
  "Mục tiêu uống nước",
];

const noticeTabs = ["Thông báo", "Lời nhắc", "Kiến thức thận"];

const noticeByTab = {
  "Thông báo": [
    {
      date: "08.15",
      title: "Cập nhật thực đơn thận tháng này",
      text: "Bổ sung các món ít natri và cân đối đạm cho bệnh thận mạn.",
    },
    {
      date: "08.10",
      title: "Lịch tư vấn dinh dưỡng online",
      text: "Mở khung 19:30 thứ 3 và thứ 6, đăng ký ngay trên hệ thống.",
    },
    {
      date: "08.08",
      title: "Mẫu nhật ký ăn uống mới",
      text: "Bản in 1 trang để theo dõi muối, kali, phospho mỗi ngày.",
    },
  ],
  "Lời nhắc": [
    {
      date: "Mỗi ngày",
      title: "Uống nước theo hướng dẫn cá nhân",
      text: "Không tăng giảm lượng nước nếu chưa có tư vấn từ bác sĩ điều trị.",
    },
    {
      date: "Mỗi bữa",
      title: "Nêm nhạt, ưu tiên luộc hấp",
      text: "Giảm nước mắm, hạt nêm, đồ đóng hộp và thực phẩm chế biến sẵn.",
    },
    {
      date: "Hàng tuần",
      title: "Theo dõi cân nặng và huyết áp",
      text: "Ghi lại thay đổi bất thường để trao đổi trong lần tái khám.",
    },
  ],
  "Kiến thức thận": [
    {
      date: "Kiến thức",
      title: "Vì sao cần giảm natri?",
      text: "Giảm muối giúp hạn chế phù và giảm gánh nặng cho thận và tim mạch.",
    },
    {
      date: "Kiến thức",
      title: "Kiểm soát kali như thế nào?",
      text: "Ưu tiên rau củ ít kali, cân đối khẩu phần theo kết quả xét nghiệm.",
    },
    {
      date: "Kiến thức",
      title: "Đạm vừa phải trong CKD",
      text: "Bố trí đạm theo hướng dẫn điều trị để tránh tăng ure máu.",
    },
  ],
};

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 20L16.5 16.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

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

function MealCard({ label, meal, servings, onRandomize }) {
  const scaledIngredients = meal.ingredients.slice(0, 4).map((item) => {
    const amount = item.per1 * servings;
    const display = Number.isInteger(amount) ? amount : amount.toFixed(1);
    return `${item.name}: ${display}${item.unit}`;
  });
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
          {scaledIngredients.map((line) => (
            <li key={`${meal.id}-${line}`}>{line}</li>
          ))}
        </ul>
        <h6>Cách chế biến nhanh</h6>
        <ol className="meal-steps">
          {quickSteps.map((step, index) => (
            <li key={`${meal.id}-step-${index + 1}`}>{step}</li>
          ))}
        </ol>
        <button onClick={onRandomize}>
          <IconRefresh />
          Đổi món này
        </button>
      </div>
    </article>
  );
}

function DayPlan({ dayPlan, servings, onRandomize, isToday }) {
  return (
    <section className={`day-plan ${isToday ? "is-today" : ""}`} id={`day-${dayPlan.day}`}>
      <header>
        <h4>Ngày {dayPlan.day}</h4>
        {isToday && <span>Hôm nay</span>}
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

export default function App() {
  const [plan, setPlan] = useState(() => generateMonthPlan());
  const [servings, setServings] = useState(2);
  const [activeTab, setActiveTab] = useState(noticeTabs[0]);
  const today = Math.min(new Date().getDate(), 30);

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
          <nav>
            <a href="#hero">Tổng quan</a>
            <a href="#notice">Thông tin</a>
            <a href="#featured">Món gợi ý</a>
            <a href="#blog">Blog</a>
            <a href="#planner">Thực đơn 30 ngày</a>
          </nav>
          <div className="head-actions">
            <button aria-label="Search">
              <IconSearch />
            </button>
            <button aria-label="Menu">
              <IconMenu />
            </button>
          </div>
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
            <div className="quick-grid">
              {quickMenus.map((item) => (
                <button key={item}>{item}</button>
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

        <section className="notice" id="notice">
          <div className="section-title-row">
            <h2>Bản tin dinh dưỡng thận</h2>
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
              <p>Chủ đề trọng tâm</p>
              <h3>Giảm muối thông minh trong bữa ăn hằng ngày</h3>
              <button>Đọc hướng dẫn</button>
            </aside>
          </div>
        </section>

        <section className="featured" id="featured">
          <div className="section-title-row">
            <h2>Món gợi ý trong tháng</h2>
            <p>Lựa chọn từ chính thực đơn thận đang được tạo.</p>
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

        <section className="education">
          <h2>Thông tin giáo dục bệnh thận</h2>
          <div className="education-grid">
            <article className="education-card">
              <h3>Lịch theo dõi sức khỏe</h3>
              <ul>
                <li>Cân nặng: ghi vào buổi sáng sau khi đi tiểu</li>
                <li>Huyết áp: đo 2 lần/ngày, ghi theo giờ cố định</li>
                <li>Nước tiểu: theo dõi màu sắc và lượng</li>
                <li>Tư vấn: mang nhật ký ăn uống khi tái khám</li>
              </ul>
            </article>
            <article className="education-card">
              <h3>Bài viết hữu ích</h3>
              <ul>
                {POSTS.map((post) => (
                  <li key={post.slug}>
                    <strong>{post.title}</strong>
                    <span>{post.date}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="planner" id="planner">
          <div className="planner-head">
            <div>
              <h2>Thực đơn thận 30 ngày</h2>
              <p>Chọn ngày để nhảy nhanh, đổi món theo bữa và điều chỉnh số khẩu phần.</p>
            </div>
            <div className="planner-controls">
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

          <div className="day-jump">
            {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
              <button
                key={day}
                className={day === today ? "today" : ""}
                onClick={() => scrollToDay(day)}
              >
                {day}
              </button>
            ))}
          </div>

          <div className="planner-list">
            {plan.map((entry) => (
              <DayPlan
                key={entry.day}
                dayPlan={entry}
                servings={servings}
                onRandomize={randomizeOne}
                isToday={entry.day === today}
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
          <button onClick={() => scrollToDay(today)}>Đến ngày hôm nay</button>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Lên đầu trang</button>
        </div>
      </footer>
    </div>
  );
}
