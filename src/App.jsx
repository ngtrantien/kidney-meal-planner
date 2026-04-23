import React, { useMemo, useState } from "react";
import { generateMonthPlan, getRandomMeal } from "./data/meals";
import { POSTS } from "./data/posts";
import "./App.css";

const quickMenus = [
  "Huong dan mon an than",
  "Thong so dinh duong",
  "Q&A voi bac si",
  "Lich tai kham",
  "Kho cong thuc",
  "Thuc don theo tuan",
  "Muc tieu uong nuoc",
];

const noticeTabs = ["Thong bao", "Loi nhac", "Kien thuc than"];

const noticeByTab = {
  "Thong bao": [
    {
      date: "08.15",
      title: "Cap nhat thuc don than thang nay",
      text: "Bo sung cac mon it natri va can doi dam cho benh than man.",
    },
    {
      date: "08.10",
      title: "Lich tu van dinh duong online",
      text: "Mo khung 19:30 thu 3 va thu 6, dang ky ngay tren he thong.",
    },
    {
      date: "08.08",
      title: "Mau nhat ky an uong moi",
      text: "Ban in 1 trang de theo doi muoi, kali, phospho moi ngay.",
    },
  ],
  "Loi nhac": [
    {
      date: "Moi ngay",
      title: "Uong nuoc theo huong dan ca nhan",
      text: "Khong tang giam luong nuoc neu chua co tu van tu bac si dieu tri.",
    },
    {
      date: "Moi bua",
      title: "Niem nhat, uu tien luoc hap",
      text: "Giam nuoc mam, hat nem, do dong hop va thuc pham che bien san.",
    },
    {
      date: "Hang tuan",
      title: "Theo doi can nang va huyet ap",
      text: "Ghi lai thay doi bat thuong de trao doi trong lan tai kham.",
    },
  ],
  "Kien thuc than": [
    {
      date: "Kien thuc",
      title: "Vì sao can giam natri?",
      text: "Giam muoi giup han che phu va giam ganh nang cho than va tim mach.",
    },
    {
      date: "Kien thuc",
      title: "Kiem soat kali nhu the nao?",
      text: "Uu tien rau cu it kali, can doi khau phan theo ket qua xet nghiem.",
    },
    {
      date: "Kien thuc",
      title: "Dam vua phai trong CKD",
      text: "Bo tri dam theo huong dan dieu tri de tranh tang ure mau.",
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
        <span className={`meal-badge ${label === "Lunch" ? "lunch" : "dinner"}`}>{label}</span>
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
        <h6>Cach che bien nhanh</h6>
        <ol className="meal-steps">
          {quickSteps.map((step, index) => (
            <li key={`${meal.id}-step-${index + 1}`}>{step}</li>
          ))}
        </ol>
        <button onClick={onRandomize}>
          <IconRefresh />
          Doi mon nay
        </button>
      </div>
    </article>
  );
}

function DayPlan({ dayPlan, servings, onRandomize, isToday }) {
  return (
    <section className={`day-plan ${isToday ? "is-today" : ""}`} id={`day-${dayPlan.day}`}>
      <header>
        <h4>Ngay {dayPlan.day}</h4>
        {isToday && <span>Hom nay</span>}
      </header>
      <div className="day-plan-grid">
        <MealCard
          label="Lunch"
          meal={dayPlan.lunch}
          servings={servings}
          onRandomize={() => onRandomize(dayPlan.day, "lunch")}
        />
        <MealCard
          label="Dinner"
          meal={dayPlan.dinner}
          servings={servings}
          onRandomize={() => onRandomize(dayPlan.day, "dinner")}
        />
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
            <p>ThanKhoe</p>
            <strong>Kidney Meal Planner Center</strong>
          </div>
          <nav>
            <a href="#hero">Tong quan</a>
            <a href="#notice">Thong tin</a>
            <a href="#featured">Mon goi y</a>
            <a href="#planner">Thuc don 30 ngay</a>
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
            <p className="hero-eyebrow">Thuc don cho nguoi benh than</p>
            <h1>
              Layout moi giong mau
              <br />
              <span>nhung van dung cho thuc don than</span>
            </h1>
            <p>
              Ke hoach 30 ngay gom bua trua va bua toi. Moi mon duoc uu tien it natri, kiem soat
              kali va phospho, dam o muc vua phai.
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
            <h2>Ban tin dinh duong than</h2>
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
              <p>Chu de trong tam</p>
              <h3>Giam muoi thong minh trong bua an hang ngay</h3>
              <button>Doc huong dan</button>
            </aside>
          </div>
        </section>

        <section className="featured" id="featured">
          <div className="section-title-row">
            <h2>Mon goi y trong thang</h2>
            <p>Lua chon tu chinh thuc don than dang duoc tao.</p>
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

        <section className="education">
          <h2>Thong tin giao duc benh than</h2>
          <div className="education-grid">
            <article className="education-card">
              <h3>Lich theo doi suc khoe</h3>
              <ul>
                <li>Can nang: ghi vao buoi sang sau khi di tieu</li>
                <li>Huyet ap: do 2 lan/ngay, ghi theo gio co dinh</li>
                <li>Nuoc tieu: theo doi mau sac va luong</li>
                <li>Tu van: mang nhat ky an uong khi tai kham</li>
              </ul>
            </article>
            <article className="education-card">
              <h3>Bai viet huu ich</h3>
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
              <h2>Thuc don than 30 ngay</h2>
              <p>Chon ngay de nhay nhanh, doi mon theo bua va dieu chinh so khau phan.</p>
            </div>
            <div className="planner-controls">
              <div className="servings">
                <span>Khau phan</span>
                <button onClick={() => setServings((v) => Math.max(1, v - 1))}>-</button>
                <strong>{servings}</strong>
                <button onClick={() => setServings((v) => Math.min(8, v + 1))}>+</button>
              </div>
              <button className="regen-btn" onClick={regeneratePlan}>
                <IconRefresh />
                Tao lai thuc don
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
          <p>Ho tro xay dung bua an phu hop cho benh than man tinh.</p>
        </div>
        <div className="footer-actions">
          <button onClick={() => scrollToDay(today)}>Den ngay hom nay</button>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Len dau trang</button>
        </div>
      </footer>
    </div>
  );
}
