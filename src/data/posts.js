import "./mealImages";

const blogImage = `${process.env.PUBLIC_URL}/images/blog/placeholder.svg`;

export const POSTS = [
  {
    slug: "che-do-an-it-kali",
    title: "Chế độ ăn ít kali cho người bệnh thận",
    date: "23/04/2026",
    image: blogImage,
    excerpt: "Các nguyên tắc đơn giản để chọn rau củ, trái cây và khẩu phần phù hợp hơn khi cần kiểm soát kali.",
    content: `
      <p>Người bệnh thận thường cần kiểm soát lượng kali tùy theo xét nghiệm máu và chỉ định của bác sĩ.</p>
      <p>Nên ưu tiên khẩu phần vừa phải, luộc bỏ nước với một số loại rau củ, hạn chế nước ép trái cây đậm đặc và theo dõi phản ứng cơ thể.</p>
    `
  },
  {
    slug: "giam-muoi-trong-bua-an",
    title: "Giảm muối mà bữa ăn vẫn ngon",
    date: "23/04/2026",
    image: blogImage,
    excerpt: "Một vài cách dùng gừng, hành, tỏi, chanh và rau thơm để món ăn đậm vị hơn mà không cần nhiều muối.",
    content: `
      <p>Giảm muối không có nghĩa là bữa ăn phải nhạt nhẽo. Có thể tăng hương thơm bằng gừng, hành, tỏi, tiêu nhẹ, chanh hoặc rau mùi.</p>
      <p>Gia đình nên nêm nhạt từ đầu, tránh nước mắm chấm đặc và hạn chế thực phẩm chế biến sẵn.</p>
    `
  },
  {
    slug: "lap-thuc-don-30-ngay",
    title: "Cách dùng thực đơn 30 ngày",
    date: "23/04/2026",
    image: blogImage,
    excerpt: "Gợi ý cách xoay vòng món ăn, đổi món không hợp khẩu vị và điều chỉnh lượng nguyên liệu theo số người ăn.",
    content: `
      <p>Thực đơn 30 ngày nên được xem như khung tham khảo. Nếu một món không hợp khẩu vị, hãy dùng nút đổi món để chọn món cùng nhóm bữa.</p>
      <p>Lượng nguyên liệu có thể tăng giảm theo số người ăn, nhưng các giới hạn dinh dưỡng quan trọng vẫn nên hỏi bác sĩ hoặc chuyên gia dinh dưỡng.</p>
    `
  }
];
