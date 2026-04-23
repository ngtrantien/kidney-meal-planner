import React, { useEffect, useMemo, useState } from "react";
import { generateMonthPlan, getRandomMeal } from "./data/meals";
import { POSTS } from "./data/posts";
import "./App.css";

const repairVietnameseText = (value) => {
  if (typeof value !== "string" || !/[ÃÂÆÄá»áº]/.test(value)) return value;

  try {
    return decodeURIComponent(escape(value));
  } catch {
    return value;
  }
};

const repairUiData = (value) => {
  if (Array.isArray(value)) {
    return value.map((item) => repairUiData(item));
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [repairVietnameseText(key), repairUiData(nestedValue)])
    );
  }

  return repairVietnameseText(value);
};

const quickMenus = [
  { label: "Nguyên tắc", href: "#notice", page: "home" },
  { label: "Hướng dẫn sử dụng", href: "#guide", page: "home" },
  { label: "Blog dinh dưỡng", page: "blog" },
  { label: "Theo dõi tại nhà", href: "#tracking", page: "home" },
  { label: "Món gợi ý", href: "#featured", page: "home" },
];

const navLinks = [
  { label: "Tổng quan", href: "#hero", page: "home" },
  { label: "Thực đơn", href: "#planner", page: "home" },
  { label: "Nguyên tắc", href: "#notice", page: "home" },
  { label: "Cách dùng", href: "#guide", page: "home" },
  { label: "Blog", page: "blog" },
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

const uiQuickMenus = repairUiData(quickMenus);
const uiNavLinks = repairUiData(navLinks);
const uiNoticeTabs = repairUiData(noticeTabs);
const uiNoticeByTab = repairUiData(noticeByTab);

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
    <section className="blog" id="blog-list">
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

function BlogPage({ onGoHome, activePostSlug, onSelectPost }) {
  const activePost = POSTS.find((post) => post.slug === activePostSlug) || POSTS[0];
  const relatedPosts = (activePost.relatedSlugs || [])
    .map((slug) => POSTS.find((post) => post.slug === slug))
    .filter(Boolean);
  const [copyLabel, setCopyLabel] = useState("Sao chép link bài viết");
  const postUrl =
    typeof window === "undefined"
      ? `?page=blog&post=${activePost.slug}`
      : `${window.location.origin}${window.location.pathname}?page=blog&post=${activePost.slug}`;

  const copyPostLink = async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      setCopyLabel("Đã sao chép link");
      window.setTimeout(() => setCopyLabel("Sao chép link bài viết"), 1800);
    } catch {
      setCopyLabel("Không sao chép được");
      window.setTimeout(() => setCopyLabel("Sao chép link bài viết"), 1800);
    }
  };

  useEffect(() => {
    setCopyLabel("Sao chép link bài viết");
  }, [activePostSlug]);

  useEffect(() => {
    const previousTitle = document.title;
    const ensureMeta = (selector, attribute, value) => {
      let tag = document.head.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, value);
        document.head.appendChild(tag);
      }
      return tag;
    };

    document.title = activePost.metaTitle;

    const descriptionMeta = ensureMeta('meta[name="description"]', "name", "description");
    const ogTitleMeta = ensureMeta('meta[property="og:title"]', "property", "og:title");
    const ogDescriptionMeta = ensureMeta('meta[property="og:description"]', "property", "og:description");
    const twitterTitleMeta = ensureMeta('meta[name="twitter:title"]', "name", "twitter:title");
    const twitterDescriptionMeta = ensureMeta('meta[name="twitter:description"]', "name", "twitter:description");

    const previousDescription = descriptionMeta.getAttribute("content") || "";
    const previousOgTitle = ogTitleMeta.getAttribute("content") || "";
    const previousOgDescription = ogDescriptionMeta.getAttribute("content") || "";
    const previousTwitterTitle = twitterTitleMeta.getAttribute("content") || "";
    const previousTwitterDescription = twitterDescriptionMeta.getAttribute("content") || "";

    descriptionMeta.setAttribute("content", activePost.metaDescription);
    ogTitleMeta.setAttribute("content", activePost.metaTitle);
    ogDescriptionMeta.setAttribute("content", activePost.metaDescription);
    twitterTitleMeta.setAttribute("content", activePost.metaTitle);
    twitterDescriptionMeta.setAttribute("content", activePost.metaDescription);

    return () => {
      document.title = previousTitle;
      descriptionMeta.setAttribute("content", previousDescription);
      ogTitleMeta.setAttribute("content", previousOgTitle);
      ogDescriptionMeta.setAttribute("content", previousOgDescription);
      twitterTitleMeta.setAttribute("content", previousTwitterTitle);
      twitterDescriptionMeta.setAttribute("content", previousTwitterDescription);
    };
  }, [activePost]);

  const shareToFacebook = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer,width=720,height=640");
  };

  const shareToZalo = () => {
    const shareUrl = `https://zalo.me/share?url=${encodeURIComponent(postUrl)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer,width=720,height=640");
  };

  return (
    <main className="content-wrap blog-page">
      <section className="page-hero">
        <p className="hero-eyebrow">Trang con: Blog dinh dưỡng</p>
        <h1>Kiến thức dinh dưỡng cho người bệnh thận và gia đình chăm sóc</h1>
        <p>
          Tổng hợp các bài viết ngắn, dễ đọc, tập trung vào nguyên tắc ăn nhạt, kiểm soát kali,
          phospho, đạm và cách theo dõi an toàn tại nhà.
        </p>
        <div className="hero-actions">
          <button className="primary-link action-button" onClick={onGoHome}>
            Về trang thực đơn
          </button>
          <a className="secondary-link" href="#blog-list">
            Xem thư viện bài viết
          </a>
        </div>
      </section>
      <section className="blog-detail" id="blog-list">
        <div className="section-title-row">
          <h2>Thư viện bài viết</h2>
          <p>Chọn một chủ đề ở bên trái để đọc tập trung hơn, không bị dàn trải như dạng card.</p>
        </div>
        <div className="blog-detail-layout">
          <aside className="blog-sidebar">
            {POSTS.map((post) => (
              <button
                key={post.slug}
                type="button"
                className={`blog-sidebar-item ${post.slug === activePost.slug ? "active" : ""}`}
                onClick={() => onSelectPost(post.slug)}
              >
                <span>{post.date}</span>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </button>
            ))}
          </aside>

          <article className="blog-article">
            <div className="blog-article-image">
              <img src={activePost.image} alt={activePost.title} loading="lazy" />
            </div>
            <div className="blog-article-body">
              <time>{activePost.date}</time>
              <h2>{activePost.title}</h2>
              <p className="blog-article-excerpt">{activePost.excerpt}</p>
              <div className="blog-article-tools">
                <button type="button" className="copy-link-btn" onClick={copyPostLink}>
                  {copyLabel}
                </button>
                <button type="button" className="share-btn facebook" onClick={shareToFacebook}>
                  Chia sẻ Facebook
                </button>
                <button type="button" className="share-btn zalo" onClick={shareToZalo}>
                  Chia sẻ Zalo
                </button>
                <span>{`?page=blog&post=${activePost.slug}`}</span>
              </div>
              <div dangerouslySetInnerHTML={{ __html: activePost.content }} />
              <section className="related-posts">
                <h3>Bài liên quan</h3>
                <div className="related-posts-grid">
                  {relatedPosts.map((post) => (
                    <button
                      key={post.slug}
                      type="button"
                      className="related-post-card"
                      onClick={() => onSelectPost(post.slug)}
                    >
                      <img src={post.image} alt={post.title} loading="lazy" />
                      <div>
                        <span>{post.date}</span>
                        <strong>{post.title}</strong>
                        <p>{post.excerpt}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            </div>
          </article>
        </div>
      </section>
    </main>
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
  const getCurrentRoute = () => {
    if (typeof window === "undefined") {
      return { page: "home", post: POSTS[0]?.slug || "" };
    }
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page") === "blog" ? "blog" : "home";
    const post = params.get("post") || POSTS[0]?.slug || "";
    return { page, post };
  };

  const initialRoute = getCurrentRoute();
  const today = Math.min(new Date().getDate(), 30);
  const [plan, setPlan] = useState(() => generateMonthPlan());
  const [servings, setServings] = useState(2);
  const [activeTab, setActiveTab] = useState(uiNoticeTabs[0]);
  const [selectedDay, setSelectedDay] = useState(today);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(initialRoute.page);
  const [activePostSlug, setActivePostSlug] = useState(initialRoute.post);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [pendingHash, setPendingHash] = useState("");
  const [activeSection, setActiveSection] = useState("hero");
  const [featuredMealId, setFeaturedMealId] = useState("");
  const [isFeaturedModalOpen, setIsFeaturedModalOpen] = useState(false);
  const [isFeaturedModalClosing, setIsFeaturedModalClosing] = useState(false);
  const nextSelectedDay = selectedDay === 30 ? 1 : selectedDay + 1;

  const featuredMeals = useMemo(() => {
    return plan.slice(0, 4).map((entry, idx) => {
      const meal = idx % 2 === 0 ? entry.lunch : entry.dinner;
      return {
        id: meal.id,
        name: meal.name,
        image: meal.image,
        note: meal.note,
        tags: meal.tags,
        ingredients: meal.ingredients,
        steps: meal.steps,
        session: idx % 2 === 0 ? "lunch" : "dinner",
        sessionLabel: idx % 2 === 0 ? "Bữa trưa" : "Bữa tối",
      };
    });
  }, [plan]);

  const featuredMeal =
    featuredMeals.find((item) => item.id === featuredMealId) ||
    featuredMeals[0] ||
    null;

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

  const replaceTodayMealWithFeatured = (featuredItem) => {
    if (!featuredItem) return;
    setPlan((prev) =>
      prev.map((entry) => {
        if (entry.day !== today) return entry;
        return {
          ...entry,
          [featuredItem.session]:
            entry[featuredItem.session].id === featuredItem.id
              ? getRandomMeal(featuredItem.session, featuredItem.id)
              : featuredItem,
        };
      })
    );
    setSelectedDay(today);
    setIsFeaturedModalClosing(false);
    setIsFeaturedModalOpen(false);
    window.requestAnimationFrame(() => scrollToDay(today));
  };

  const openFeaturedModal = (featuredItem) => {
    if (!featuredItem) return;
    setFeaturedMealId(featuredItem.id);
    setIsFeaturedModalClosing(false);
    setIsFeaturedModalOpen(true);
  };

  const closeFeaturedModal = () => {
    if (!isFeaturedModalOpen || isFeaturedModalClosing) return;
    setIsFeaturedModalClosing(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navigateTo = ({ page = "home", hash = "", post = POSTS[0]?.slug || "" }) => {
    const searchParams = new URLSearchParams();
    if (page === "blog") {
      searchParams.set("page", "blog");
      if (post) searchParams.set("post", post);
    }

    const search = searchParams.toString() ? `?${searchParams.toString()}` : "";
    const nextUrl = `${window.location.pathname}${search}${page === "home" ? hash : ""}`;
    window.history.pushState({}, "", nextUrl);
    setCurrentPage(page);
    setActivePostSlug(post);
    setPendingHash(page === "home" ? hash : "");
    closeMobileMenu();

    if (page === "blog") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = (event, link) => {
    event.preventDefault();
    navigateTo({ page: link.page || "home", hash: link.href || "" });
  };

  useEffect(() => {
    const onPopState = () => {
      const route = getCurrentRoute();
      setCurrentPage(route.page);
      setActivePostSlug(route.post);
      setPendingHash(window.location.search.includes("page=blog") ? "" : window.location.hash);
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (currentPage !== "home") return;

    if (!pendingHash) return;
    window.requestAnimationFrame(() => {
      const el = document.querySelector(pendingHash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setPendingHash("");
    });
  }, [currentPage, pendingHash]);

  useEffect(() => {
    if (currentPage !== "home") {
      setActiveSection("");
      return;
    }

    const sections = ["hero", "planner", "notice", "guide", "featured", "tracking"];
    const onScrollSpy = () => {
      let current = "hero";

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;
        const rect = element.getBoundingClientRect();
        if (rect.top <= 140) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    onScrollSpy();
    window.addEventListener("scroll", onScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", onScrollSpy);
  }, [currentPage]);

  useEffect(() => {
    if (currentPage === "blog" && !POSTS.some((post) => post.slug === activePostSlug)) {
      setActivePostSlug(POSTS[0]?.slug || "");
    }
  }, [currentPage, activePostSlug]);

  useEffect(() => {
    if (!featuredMeals.length) return;
    if (!featuredMeals.some((item) => item.id === featuredMealId)) {
      setFeaturedMealId(featuredMeals[0].id);
    }
  }, [featuredMeals, featuredMealId]);

  useEffect(() => {
    if (!isFeaturedModalOpen && !isFeaturedModalClosing) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeFeaturedModal();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isFeaturedModalOpen, isFeaturedModalClosing]);

  useEffect(() => {
    if (!isFeaturedModalClosing) return undefined;

    const timer = window.setTimeout(() => {
      setIsFeaturedModalClosing(false);
      setIsFeaturedModalOpen(false);
    }, 220);

    return () => window.clearTimeout(timer);
  }, [isFeaturedModalClosing]);

  useEffect(() => {
    let previousScrollPos = window.pageYOffset;

    const onScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (mobileMenuOpen) {
        setHeaderVisible(true);
        previousScrollPos = currentScrollPos;
        return;
      }

      if (previousScrollPos > currentScrollPos || currentScrollPos < 40) {
        setHeaderVisible(true);
      } else {
        setHeaderVisible(false);
      }

      previousScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const root = document.getElementById("root");
    if (!root) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const textNodes = [];

    while (walker.nextNode()) {
      textNodes.push(walker.currentNode);
    }

    textNodes.forEach((node) => {
      const nextValue = repairVietnameseText(node.nodeValue || "");
      if (nextValue !== node.nodeValue) {
        node.nodeValue = nextValue;
      }
    });

    root.querySelectorAll("[aria-label]").forEach((element) => {
      const currentLabel = element.getAttribute("aria-label");
      const nextLabel = repairVietnameseText(currentLabel);
      if (currentLabel && nextLabel !== currentLabel) {
        element.setAttribute("aria-label", nextLabel);
      }
    });
  }, [activeTab, activePostSlug, currentPage, isFeaturedModalClosing, isFeaturedModalOpen, mobileMenuOpen, plan, selectedDay, servings]);

  const displayedPlans = [getDayPlan(selectedDay), getDayPlan(nextSelectedDay)].filter(Boolean);

  return (
    <>
      <header className={`top-header ${headerVisible ? "is-visible" : "is-hidden"}`}>
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
            {uiNavLinks.map((link) => (
              <a
                key={`${link.label}-${link.page || "home"}`}
                href={link.page === "blog" ? "?page=blog" : link.href}
                className={
                  link.page === "blog"
                    ? currentPage === "blog"
                      ? "active"
                      : ""
                    : currentPage === "home" && link.href === `#${activeSection}`
                      ? "active"
                      : ""
                }
                onClick={(event) => handleNavClick(event, link)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="site-shell">
        {currentPage === "blog" ? (
        <BlogPage
          activePostSlug={activePostSlug}
          onGoHome={() => navigateTo({ page: "home" })}
          onSelectPost={(slug) => navigateTo({ page: "blog", post: slug })}
        />
      ) : (
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
              <a className="primary-link" href="#planner" onClick={(event) => handleNavClick(event, { page: "home", href: "#planner" })}>Xem thực đơn hôm nay</a>
              <a className="secondary-link" href="#guide" onClick={(event) => handleNavClick(event, { page: "home", href: "#guide" })}>Cách sử dụng</a>
            </div>
            <div className="quick-grid">
              {uiQuickMenus.map((item) => (
                <a
                  key={item.label}
                  href={item.page === "blog" ? `?page=blog&post=${activePostSlug || POSTS[0]?.slug || ""}` : item.href}
                  className={
                    item.page === "blog"
                      ? currentPage === "blog"
                        ? "active"
                        : ""
                      : currentPage === "home" && item.href === `#${activeSection}`
                        ? "active"
                        : ""
                  }
                  onClick={(event) => handleNavClick(event, item)}
                >
                  {item.label}
                </a>
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

        <SafetyNotice />

        <section className="notice" id="notice">
          <div className="section-title-row">
            <h2>Nguyên tắc ăn uống cho thận</h2>
            <div className="tabs">
              {uiNoticeTabs.map((tab) => (
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
              {uiNoticeByTab[activeTab].map((item) => (
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
                <div className="featured-image-wrap">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <span className={`featured-badge ${item.session === "lunch" ? "lunch" : "dinner"}`}>
                    {item.session === "lunch" ? "Gợi ý bữa trưa" : "Gợi ý bữa tối"}
                  </span>
                </div>
                <strong>{item.name}</strong>
                <div className="featured-actions">
                  <button type="button" onClick={() => openFeaturedModal(item)}>
                    Xem chi tiết
                  </button>
                  <button type="button" onClick={() => replaceTodayMealWithFeatured(item)}>
                    Thay món hôm nay
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <TrackingSection />
      </main>
      )}

      <footer className="footer">
        <div>
          <strong>Kidney Meal Planner Center</strong>
          <p>Hỗ trợ xây dựng bữa ăn phù hợp cho bệnh thận mạn tính.</p>
        </div>
        <div className="footer-actions">
          <button onClick={() => navigateTo({ page: "home", hash: "#planner" })}>Đến thực đơn</button>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Lên đầu trang</button>
        </div>
      </footer>
      </div>

      {(isFeaturedModalOpen || isFeaturedModalClosing) && featuredMeal && (
        <div
          className={`featured-modal-backdrop ${isFeaturedModalClosing ? "is-closing" : ""}`}
          onClick={closeFeaturedModal}
          role="presentation"
        >
          <div
            className={`featured-modal ${isFeaturedModalClosing ? "is-closing" : ""}`}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button type="button" className="featured-modal-close" onClick={closeFeaturedModal} aria-label="Đóng chi tiết món">
              ×
            </button>
            <div className="featured-modal-image-wrap">
              <img src={featuredMeal.image} alt={featuredMeal.name} loading="lazy" />
              <span className={`featured-badge ${featuredMeal.session === "lunch" ? "lunch" : "dinner"}`}>
                {featuredMeal.session === "lunch" ? "Gợi ý bữa trưa" : "Gợi ý bữa tối"}
              </span>
            </div>
            <div className="featured-modal-body">
              <p className="featured-detail-label">{featuredMeal.sessionLabel} gợi ý</p>
              <h3>{featuredMeal.name}</h3>
              <p className="featured-modal-note">{featuredMeal.note}</p>
              <div className="meal-tags">
                {featuredMeal.tags.slice(0, 3).map((tag) => (
                  <span key={`${featuredMeal.id}-${tag}`}>{tag}</span>
                ))}
              </div>
              <div className="featured-detail-content">
                <div>
                  <h4>Nguyên liệu chính</h4>
                  <ul>
                    {featuredMeal.ingredients.slice(0, 6).map((item) => (
                      <li key={`${featuredMeal.id}-modal-${item.name}`}>
                        {item.name}: {item.per1}
                        {item.unit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Cách làm nhanh</h4>
                  <ol>
                    {featuredMeal.steps.slice(0, 4).map((step, index) => (
                      <li key={`${featuredMeal.id}-modal-step-${index + 1}`}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="featured-modal-actions">
                <button type="button" className="primary-link action-button" onClick={() => replaceTodayMealWithFeatured(featuredMeal)}>
                  Thay món hôm nay
                </button>
                <button type="button" className="secondary-link action-button" onClick={closeFeaturedModal}>
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
