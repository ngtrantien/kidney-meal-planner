# 🫘 Thực Đơn Thận Lành

Ứng dụng thực đơn hàng ngày dành cho **người bệnh thận mạn tính** — tất cả món ăn được chọn lọc theo tiêu chí:
- ✅ Ít kali (< 2000mg/ngày)
- ✅ Ít phốt-pho
- ✅ Ít natri (ít muối)
- ✅ Đạm vừa phải (không quá tải thận)

## ✨ Tính năng

- 📅 Thực đơn 30 ngày tự động (trưa + tối)
- 🔀 Bấm **"Đổi món khác"** nếu không thích
- 👥 Điều chỉnh **1–10 người ăn** — nguyên liệu tự nhân theo
- 📋 Hướng dẫn chế biến từng bước
- 🗓️ Navigation nhanh theo ngày, tự nhảy đến "Hôm nay"
- 🔁 Bấm **"Thực đơn mới"** mỗi tháng để xoay vòng
- 📱 Responsive — dùng được trên điện thoại

---

## 🚀 Deploy lên GitHub Pages (lần đầu)

### Bước 1 — Clone & cài đặt

```bash
git clone https://github.com/YOUR_USERNAME/kidney-meal-planner.git
cd kidney-meal-planner
npm install
```

### Bước 2 — Chạy thử local

```bash
npm start
# Mở http://localhost:3000
```

### Bước 3 — Tạo GitHub repo & push

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/kidney-meal-planner.git
git push -u origin main
```

### Bước 4 — Bật GitHub Pages

1. Vào repo → **Settings** → **Pages**
2. Source: chọn **GitHub Actions**
3. Lần push tiếp theo sẽ tự động deploy ✅

### URL sau khi deploy

```
https://YOUR_USERNAME.github.io/kidney-meal-planner/
```

---

## 🗂️ Cấu trúc project

```
kidney-meal-planner/
├── src/
│   ├── data/
│   │   └── meals.js        ← Toàn bộ dữ liệu món ăn
│   ├── App.jsx             ← Component chính
│   ├── App.css             ← Toàn bộ styles
│   └── index.js            ← Entry point
├── public/
│   └── index.html
├── .github/workflows/
│   └── deploy.yml          ← Auto-deploy CI/CD
└── package.json
```

## ➕ Thêm món ăn mới

Mở file `src/data/meals.js`, thêm object vào mảng `MEALS`:

```js
{
  id: "lunch_16",          // ID duy nhất
  session: "lunch",        // "lunch" hoặc "dinner"
  name: "Tên món ăn",
  tags: ["tag1", "tag2"],
  note: "Ghi chú dinh dưỡng",
  ingredients: [
    { name: "Tên nguyên liệu", unit: "g", per1: 100 }
    // per1 = lượng cho 1 người
  ],
  steps: [
    "Bước 1...",
    "Bước 2..."
  ]
}
```

---

> ⚠️ **Lưu ý y tế**: Thực đơn này chỉ mang tính tham khảo. Vui lòng tham khảo bác sĩ/chuyên gia dinh dưỡng để điều chỉnh phù hợp với tình trạng cụ thể của bệnh nhân.
