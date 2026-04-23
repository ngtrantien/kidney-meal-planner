import React, { useState, useEffect, useCallback } from "react";
import { generateMonthPlan, getRandomMeal } from "./data/meals";
import { POSTS } from "./data/posts";
import "./App.css";
import "./content.css";

const assetPath = (path) => `${process.env.PUBLIC_URL}${path}`;
const placeholderMealImage = assetPath("/images/meals/placeholder.svg");

// ─── Icons ─────────────────────────────────────────────
const IconRefresh = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>
  </svg>
);
const IconSun = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
  </svg>
);
const IconMoon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </svg>
);
const IconChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);
const IconHeart = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const IconUsers = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconCalendar = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
  </svg>
);
const IconLeaf = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);
const IconMenu = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const IconClose = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

// ─── Navbar ──────────────────────────────────────────────
function Navbar({ servings, setServings, onRegeneratePlan, onScrollToToday }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a className="navbar-brand" href="#top">
          <div className="navbar-logo-pill"><span>🫛</span></div>
          <span className="navbar-name">Thực Đơn Thận</span>
        </a>

        <div className="navbar-links">
          <a href="#plan" className="nav-link">Thực đơn</a>
          <a href="#blog" className="nav-link">Kiến thức</a>
        </div>

        <div className="navbar-controls">
          <div className="servings-row">
            <IconUsers />
            <span className="servings-row-label">Người ăn</span>
            <div className="servings-counter">
              <button onClick={() => setServings(s => Math.max(1, s - 1))}>−</button>
              <span>{servings}</span>
              <button onClick={() => setServings(s => Math.min(10, s + 1))}>+</button>
            </div>
          </div>

          <button className="btn-ghost" onClick={onScrollToToday}>
            <IconCalendar /><span>Hôm nay</span>
          </button>

          <button className="btn-primary" onClick={onRegeneratePlan}>
            <IconRefresh /><span>Thực đơn mới</span>
          </button>
        </div>

        <button className="navbar-hamburger" onClick={() => setDrawerOpen(v => !v)} aria-label="Menu">
          {drawerOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {drawerOpen && (
        <div className="navbar-drawer">
          <a href="#plan" className="drawer-link" onClick={() => setDrawerOpen(false)}>📅 Thực đơn</a>
          <a href="#blog" className="drawer-link" onClick={() => setDrawerOpen(false)}>📖 Kiến thức</a>
          <div className="drawer-servings">
            <IconUsers /><span>Người ăn</span>
            <button onClick={() => setServings(s => Math.max(1, s - 1))}>−</button>
            <strong>{servings}</strong>
            <button onClick={() => setServings(s => Math.min(10, s + 1))}>+</button>
          </div>
          <button className="btn-ghost full-w" onClick={() => { onScrollToToday(); setDrawerOpen(false); }}>
            <IconCalendar /><span>Hôm nay</span>
          </button>
          <button className="btn-primary full-w" onClick={() => { onRegeneratePlan(); setDrawerOpen(false); }}>
            <IconRefresh /><span>Thực đơn mới</span>
          </button>
        </div>
      )}
    </nav>
  );
}

// ─── MealCard ─────────────────────────────────────────────
function MealCard({ meal, session, servings, onRandomize, dayNum }) {
  const [open, setOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(meal.image || placeholderMealImage);

  useEffect(() => {
    setImageSrc(meal.image || placeholderMealImage);
  }, [meal.image]);

  const scale = (val) => {
    const result = val * servings;
    return result % 1 === 0 ? result : result.toFixed(1);
  };

  const sessionLabel = session === "lunch" ? "Bữa Trưa" : "Bữa Tối";
  const SessionIcon = session === "lunch" ? IconSun : IconMoon;

  return (
    <div className={`meal-card ${session} ${open ? "expanded" : ""}`}>
      <div className="meal-image-wrap" onClick={() => setOpen(v => !v)}>
        <img
          className="meal-image"
          src={imageSrc}
          alt={meal.name}
          loading="lazy"
          onError={() => setImageSrc(placeholderMealImage)}
        />
        <div className="meal-img-overlay">
          <span className={`session-chip ${session}`}>
            <SessionIcon />{sessionLabel}
          </span>
          <span className={`expand-chevron ${open ? "open" : ""}`}>
            <IconChevronDown />
          </span>
        </div>
      </div>

      <div className="meal-info" onClick={() => setOpen(v => !v)}>
        <h3 className="meal-name">{meal.name}</h3>
        <div className="meal-tags">
          {meal.tags.map(tag => (
            <span key={tag} className="tag"><IconLeaf />{tag}</span>
          ))}
        </div>
        <p className="meal-note">{meal.note}</p>
      </div>

      {open && (
        <div className="meal-body">
          <div className="section">
            <h4 className="section-title">
              <IconUsers />
              Nguyên liệu <span className="serving-badge">{servings} người</span>
            </h4>
            <table className="ingredient-table">
              <thead>
                <tr><th>Nguyên liệu</th><th>Lượng</th></tr>
              </thead>
              <tbody>
                {meal.ingredients.map((ing, i) => (
                  <tr key={i}>
                    <td>{ing.name}</td>
                    <td className="amount">{scale(ing.per1)} {ing.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="section">
            <h4 className="section-title">Cách chế biến</h4>
            <ol className="steps-list">
              {meal.steps.map((step, i) => (
                <li key={i}><span className="step-num">{i + 1}</span><span>{step}</span></li>
              ))}
            </ol>
          </div>
        </div>
      )}

      <button
        className="randomize-btn"
        onClick={(e) => { e.stopPropagation(); onRandomize(dayNum, session); }}
        title="Đổi sang món khác"
      >
        <IconRefresh /><span>Đổi món khác</span>
      </button>
    </div>
  );
}

// ─── DayRow ───────────────────────────────────────────────
function DayRow({ entry, servings, onRandomize, isToday }) {
  const weekdays = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  const now = new Date();
  const dayOfWeek = weekdays[(now.getDay() + entry.day - 1) % 7];

  return (
    <div className={`day-row ${isToday ? "today" : ""}`} id={`day-${entry.day}`}>
      <div className="day-strip">
        <div className="day-label-group">
          <span className="day-num">{entry.day}</span>
          <span className="day-week">{dayOfWeek}</span>
        </div>
        {isToday && <span className="today-badge">✦ Hôm nay</span>}
      </div>
      <div className="day-meals">
        <MealCard meal={entry.lunch} session="lunch" servings={servings} onRandomize={onRandomize} dayNum={entry.day} />
        <MealCard meal={entry.dinner} session="dinner" servings={servings} onRandomize={onRandomize} dayNum={entry.day} />
      </div>
    </div>
  );
}

// ─── BlogSection ─────────────────────────────────────────
function BlogSection() {
  return (
    <section className="blog-section" id="blog">
      <div className="section-heading">
        <span className="section-eyebrow">Góc kiến thức</span>
        <h2>Bài viết chăm sóc thận</h2>
        <p>Các ghi chú ngắn để gia đình dễ theo dõi chế độ ăn ít muối, ít kali và phù hợp hơn mỗi ngày.</p>
      </div>
      <div className="blog-grid">
        {POSTS.map((post) => (
          <article className="blog-card" key={post.slug}>
            <div className="blog-img-wrap">
              <img src={post.image} alt={post.title} loading="lazy" />
            </div>
            <div className="blog-card-body">
              <span className="blog-date">{post.date}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <details>
                <summary>Đọc nhanh</summary>
                <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ─── App ─────────────────────────────────────────────────
export default function App() {
  const [plan, setPlan] = useState(() => generateMonthPlan());
  const [servings, setServings] = useState(2);
  const today = new Date().getDate();

  const handleRandomize = useCallback((dayNum, session) => {
    setPlan(prev => prev.map(entry => {
      if (entry.day !== dayNum) return entry;
      const currentMealId = entry[session].id;
      const newMeal = getRandomMeal(session, currentMealId);
      return { ...entry, [session]: newMeal };
    }));
  }, []);

  const handleRegeneratePlan = () => {
    if (window.confirm("Tạo lại toàn bộ thực đơn tháng mới?")) {
      setPlan(generateMonthPlan());
    }
  };

  const scrollToDay = (day, block = "center") => {
    const el = document.getElementById(`day-${day}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block });
  };

  const scrollToToday = () => scrollToDay(today);

  useEffect(() => {
    setTimeout(() => scrollToDay(today, "start"), 300);
  }, [today]);

  return (
    <>
      <Navbar
        servings={servings}
        setServings={setServings}
        onRegeneratePlan={handleRegeneratePlan}
        onScrollToToday={scrollToToday}
      />

      <div className="app" id="top">
        {/* ── Hero ── */}
        <header className="app-hero">
          <div className="hero-body">
            <div className="hero-text">
              <span className="hero-eyebrow">Kidney Meal Planner</span>
              <h1 className="hero-title">Thực Đơn<br />Thận Lành</h1>
              <p className="hero-sub">
                Kế hoạch bữa ăn 30 ngày dành cho người bệnh thận mạn tính —
                ngon miệng, an toàn và dễ theo dõi mỗi ngày.
              </p>
              <div className="hero-chips">
                <span className="hero-chip">🧂 Ít natri</span>
                <span className="hero-chip">⚡ Ít kali</span>
                <span className="hero-chip">🦴 Ít phốt-pho</span>
                <span className="hero-chip">🥩 Đạm hợp lý</span>
              </div>
            </div>

            <div className="hero-stats-card">
              <div className="hero-stat">
                <span className="hstat-num">30</span>
                <span className="hstat-label">ngày</span>
              </div>
              <div className="hstat-divider" />
              <div className="hero-stat">
                <span className="hstat-num">60</span>
                <span className="hstat-label">bữa ăn</span>
              </div>
              <div className="hstat-divider" />
              <div className="hero-stat">
                <span className="hstat-num">{servings}</span>
                <span className="hstat-label">người</span>
              </div>
            </div>
          </div>

          <div className="health-notice">
            <IconHeart />
            <span>
              Thực đơn thiết kế cho chế độ ăn thận —
              vẫn nên tham khảo <strong>bác sĩ hoặc chuyên gia dinh dưỡng</strong>.
            </span>
          </div>
        </header>

        {/* ── Month Nav ── */}
        <div className="month-nav" id="plan">
          <div className="month-nav-header">
            <IconCalendar />
            <span>Chọn ngày trong tháng</span>
          </div>
          <div className="week-strips">
            {Array.from({ length: 30 }, (_, i) => i + 1).map(d => (
              <button
                key={d}
                className={`day-dot ${d === today ? "active" : ""}`}
                onClick={() => scrollToDay(d)}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* ── Meal Plan ── */}
        <main className="plan-container">
          {plan.map(entry => (
            <DayRow
              key={entry.day}
              entry={entry}
              servings={servings}
              onRandomize={handleRandomize}
              isToday={entry.day === today}
            />
          ))}
        </main>

        <BlogSection />

        <footer className="app-footer">
          <div className="footer-inner">
            <span className="footer-logo">🫛</span>
            <span className="footer-name">Thực Đơn Thận Lành</span>
            <span className="footer-dot">·</span>
            <span className="footer-note">
              Làm với <IconHeart /> để chăm sóc sức khỏe
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
