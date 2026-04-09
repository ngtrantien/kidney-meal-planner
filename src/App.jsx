import React, { useState, useEffect, useCallback } from "react";
import { generateMonthPlan, getRandomMeal } from "./data/meals";
import "./App.css";

// ── Inline SVG icons ──────────────────────────────────────
const Ico = {
  refresh: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>
    </svg>
  ),
  sun: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
    </svg>
  ),
  moon: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
    </svg>
  ),
  chevron: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  ),
  heart: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  users: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  calendar: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/>
      <line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
    </svg>
  ),
};

// Emoji map cho từng loại món
const MEAL_EMOJI = {
  lunch_01: "🐟", lunch_02: "🍳", lunch_03: "🍗",
  lunch_04: "🥢", lunch_05: "🐠", lunch_06: "🥩",
  lunch_07: "🍚", lunch_08: "🦐", lunch_09: "🐡",
  lunch_10: "🍜", lunch_11: "🫘", lunch_12: "🐟",
  lunch_13: "🥩", lunch_14: "🍲", lunch_15: "🥦",
  dinner_01: "🐟", dinner_02: "🥕", dinner_03: "🌾",
  dinner_04: "🐟", dinner_05: "🥒", dinner_06: "🥗",
  dinner_07: "🥕", dinner_08: "🦐", dinner_09: "🍜",
  dinner_10: "🫘", dinner_11: "🍲", dinner_12: "🍗",
  dinner_13: "🍜", dinner_14: "🦪", dinner_15: "🎃",
};

const WEEKDAYS = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
const TODAY = new Date().getDate();

// ── MealPanel ─────────────────────────────────────────────
function MealPanel({ meal, session, servings, onRandomize, day }) {
  const [open, setOpen] = useState(false);
  const scale = v => { const r = v * servings; return r % 1 === 0 ? r : r.toFixed(1); };
  const emoji = MEAL_EMOJI[meal.id] || (session === "lunch" ? "🍱" : "🥘");

  return (
    <div className={`meal-panel ${session}`}>
      {/* Top row — clickable to expand */}
      <div className="meal-panel-top" onClick={() => setOpen(o => !o)}>
        <div className="food-visual">
          <div className="food-visual-ring" />
          {emoji}
        </div>

        <div className="meal-info">
          <div className="meal-session-label">
            {session === "lunch" ? <>{Ico.sun} Bữa Trưa</> : <>{Ico.moon} Bữa Tối</>}
          </div>
          <div className="meal-name">{meal.name}</div>
          <div className="nutrition-row">
            <span className="nutr-badge k">↓ Kali</span>
            <span className="nutr-badge p">↓ P</span>
            <span className="nutr-badge na">↓ Muối</span>
          </div>
          <div className="meal-note-short">💡 {meal.note}</div>
        </div>
      </div>

      <div className="expand-row" onClick={() => setOpen(o => !o)}>
        <span>{open ? "Thu gọn" : "Xem nguyên liệu & cách làm"}</span>
        <span className={`expand-arrow ${open ? "open" : ""}`}>{Ico.chevron}</span>
      </div>

      {/* Expanded detail */}
      {open && (
        <div className="meal-detail">
          <div className="detail-section">
            <div className="detail-title">
              {Ico.users} Nguyên liệu
              <span className="serving-tag">{servings} người</span>
            </div>
            <div className="ingredient-grid">
              {meal.ingredients.map((ing, i) => (
                <div key={i} className="ingredient-row">
                  <span className="ingredient-name">{ing.name}</span>
                  <span className="ingredient-amount">{scale(ing.per1)} {ing.unit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-section">
            <div className="detail-title">📋 Cách chế biến</div>
            <ol className="steps-list">
              {meal.steps.map((step, i) => (
                <li key={i} className="step-item">
                  <span className="step-dot">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}

      {/* Randomize */}
      <div className="randomize-row">
        <button
          className="randomize-btn"
          onClick={() => onRandomize(day, session)}
        >
          {Ico.refresh}
          Không thích? Đổi món khác
        </button>
      </div>
    </div>
  );
}

// ── DayBlock ──────────────────────────────────────────────
function DayBlock({ entry, servings, onRandomize }) {
  const isToday = entry.day === TODAY;
  const dow = WEEKDAYS[(new Date().getDay() + entry.day - TODAY + 70) % 7];

  return (
    <div className={`day-block ${isToday ? "today" : ""}`} id={`day-${entry.day}`}>
      <div className="day-block-header">
        <div className="day-num-badge">
          <span className="day-num-big">{entry.day}</span>
          <span className="day-wd">{dow}</span>
        </div>
        <div>
          <div className="day-header-title">
            Ngày {entry.day}
            {isToday && <span className="today-chip">Hôm nay</span>}
          </div>
          <div className="day-header-note">2 bữa · {entry.lunch.tags[0]} · {entry.dinner.tags[0]}</div>
        </div>
      </div>

      <div className="day-meals-grid">
        <MealPanel meal={entry.lunch}  session="lunch"  servings={servings} onRandomize={onRandomize} day={entry.day} />
        <MealPanel meal={entry.dinner} session="dinner" servings={servings} onRandomize={onRandomize} day={entry.day} />
      </div>
    </div>
  );
}

// ── App ───────────────────────────────────────────────────
export default function App() {
  const [plan, setPlan] = useState(() => generateMonthPlan());
  const [servings, setServings] = useState(2);

  const handleRandomize = useCallback((day, session) => {
    setPlan(prev => prev.map(e => {
      if (e.day !== day) return e;
      return { ...e, [session]: getRandomMeal(session, e[session].id) };
    }));
  }, []);

  const scrollToToday = () => {
    document.getElementById(`day-${TODAY}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => { setTimeout(scrollToToday, 400); }, []);

  const now = new Date();
  const monthLabel = `Tháng ${now.getMonth() + 1} · ${now.getFullYear()}`;

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <div className="header-inner">
          <div className="logo">
            <div className="logo-icon-wrap">🫘</div>
            <div>
              <div className="app-title">Thực Đơn Thận Lành</div>
              <div className="app-sub">Dành cho người bệnh thận mạn tính</div>
            </div>
          </div>

          <div className="header-right">
            <div className="servings-pill">
              <span className="servings-label">{Ico.users} <span>Số người</span></span>
              <div className="servings-btns">
                <button className="count-btn" onClick={() => setServings(s => Math.max(1, s - 1))}>−</button>
                <span className="count-display">{servings}</span>
                <button className="count-btn" onClick={() => setServings(s => Math.min(10, s + 1))}>+</button>
              </div>
            </div>

            <button className="btn-ghost" onClick={scrollToToday}>
              {Ico.calendar} <span>Hôm nay</span>
            </button>

            <button className="btn-green" onClick={() => {
              if (window.confirm("Tạo lại thực đơn tháng mới?")) setPlan(generateMonthPlan());
            }}>
              {Ico.refresh} <span>Thực đơn mới</span>
            </button>
          </div>
        </div>

        <div className="health-ribbon">
          {Ico.heart}
          <span>Tất cả món ăn: <strong>↓ Kali · ↓ Phốt-pho · ↓ Natri · Đạm vừa phải</strong> — Vui lòng tham khảo bác sĩ dinh dưỡng</span>
        </div>
      </header>

      {/* Month nav */}
      <div className="main-wrap">
        <div className="month-nav-wrap">
          <div className="month-nav-header">
            <span className="month-title">{monthLabel}</span>
            <span style={{ fontSize: 11, color: "var(--text-muted)" }}>Bấm vào ngày để nhảy tới</span>
          </div>
          <div className="month-nav-scroll">
            <div className="day-dots">
              {Array.from({ length: 30 }, (_, i) => i + 1).map(d => {
                const wd = WEEKDAYS[(new Date().getDay() + d - TODAY + 70) % 7];
                return (
                  <button
                    key={d}
                    className={`day-dot ${d === TODAY ? "active" : ""}`}
                    onClick={() => document.getElementById(`day-${d}`)?.scrollIntoView({ behavior: "smooth", block: "center" })}
                  >
                    <span className="day-dot-num">{d}</span>
                    <span className="day-dot-wd">{wd}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Plan */}
        <div className="plan-list">
          {plan.map(entry => (
            <DayBlock key={entry.day} entry={entry} servings={servings} onRandomize={handleRandomize} />
          ))}
        </div>
      </div>

      <footer className="app-footer">
        Làm với {Ico.heart} để chăm sóc sức khỏe bố &nbsp;·&nbsp; Mỗi tháng bấm "Thực đơn mới" để xoay vòng
      </footer>
    </div>
  );
}
