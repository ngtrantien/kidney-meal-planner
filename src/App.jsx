import React, { useState, useEffect, useCallback } from "react";
import { generateMonthPlan, getRandomMeal } from "./data/meals";
import "./App.css";

const IconRefresh = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>
  </svg>
);
const IconSun = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
  </svg>
);
const IconMoon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </svg>
);
const IconChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);
const IconHeart = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const IconUsers = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconCalendar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
  </svg>
);
const IconLeaf = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

function MealCard({ meal, session, servings, onRandomize, dayNum }) {
  const [open, setOpen] = useState(false);

  const scale = (val) => {
    const result = val * servings;
    return result % 1 === 0 ? result : result.toFixed(1);
  };

  const sessionLabel = session === "lunch" ? "Bữa Trưa" : "Bữa Tối";
  const SessionIcon = session === "lunch" ? IconSun : IconMoon;

  return (
    <div className={`meal-card ${session} ${open ? "expanded" : ""}`}>
      <div className="meal-session-badge">
        <SessionIcon />
        <span>{sessionLabel}</span>
      </div>

      <div className="meal-header" onClick={() => setOpen(!open)}>
        <div className="meal-title-row">
          <h3 className="meal-name">{meal.name}</h3>
          <div className={`chevron ${open ? "rotated" : ""}`}><IconChevronDown /></div>
        </div>

        <div className="meal-tags">
          {meal.tags.map(tag => (
            <span key={tag} className="tag"><IconLeaf />{tag}</span>
          ))}
        </div>

        <p className="meal-note">💡 {meal.note}</p>
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
            <h4 className="section-title">📋 Cách chế biến</h4>
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
        <IconRefresh />
        <span>Đổi món khác</span>
      </button>
    </div>
  );
}

function DayRow({ entry, servings, onRandomize, isToday }) {
  const weekdays = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  const now = new Date();
  const dayOfWeek = weekdays[(now.getDay() + entry.day - 1) % 7];

  return (
    <div className={`day-row ${isToday ? "today" : ""}`} id={`day-${entry.day}`}>
      <div className="day-label">
        <span className="day-num">{entry.day}</span>
        <span className="day-week">{dayOfWeek}</span>
        {isToday && <span className="today-badge">Hôm nay</span>}
      </div>
      <div className="day-meals">
        <MealCard meal={entry.lunch} session="lunch" servings={servings} onRandomize={onRandomize} dayNum={entry.day} />
        <MealCard meal={entry.dinner} session="dinner" servings={servings} onRandomize={onRandomize} dayNum={entry.day} />
      </div>
    </div>
  );
}

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
    <div className="app">
      <header className="app-header">
        <div className="header-shell">
          <div className="header-brand-row">
            <div className="logo-badge">
              <span className="logo-icon">🫘</span>
            </div>

            <div className="brand-copy">
              <span className="brand-kicker">Kidney Meal Planner</span>
              <h1 className="app-title">Thực Đơn Thận Lành</h1>
              <p className="app-sub">Kế hoạch bữa ăn 30 ngày dành cho người bệnh thận mạn tính</p>
            </div>
          </div>

          <div className="header-utility-grid">
            <div className="compact-pill current-day-pill">
              <IconCalendar />
              <span>Ngày {today}</span>
            </div>

            <div className="compact-control servings-pill">
              <span className="compact-label"><IconUsers /> Số người ăn</span>
              <div className="servings-control">
                <button className="count-btn" onClick={() => setServings(s => Math.max(1, s - 1))}>−</button>
                <span className="count-display">{servings}</span>
                <button className="count-btn" onClick={() => setServings(s => Math.min(10, s + 1))}>+</button>
              </div>
            </div>

            <button className="compact-pill action-pill" onClick={scrollToToday}>
              <IconCalendar />
              <span>Hôm nay</span>
            </button>

            <button className="btn-primary action-pill" onClick={handleRegeneratePlan}>
              <IconRefresh />
              <span>Thực đơn mới</span>
            </button>
          </div>
        </div>

        <div className="health-banner">
          <IconHeart />
          <span>Phù hợp cho người bệnh thận với tiêu chí <strong>ít kali · ít phốt-pho · ít natri · đạm vừa phải</strong>. Vẫn nên tham khảo bác sĩ hoặc chuyên gia dinh dưỡng.</span>
        </div>
      </header>

      <div className="month-nav">
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

      <footer className="app-footer">
        <p>Làm với <IconHeart /> để chăm sóc sức khỏe bố &nbsp;·&nbsp; Mỗi tháng bấm "Thực đơn mới" để xoay vòng</p>
      </footer>
    </div>
  );
}
