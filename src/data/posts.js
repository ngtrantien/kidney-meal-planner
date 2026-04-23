import "./mealImages";

const BLOG_IMAGES = {
  "che-do-an-it-kali": `${process.env.PUBLIC_URL}/images/blog/che-do-an-it-kali.svg`,
  "giam-muoi-trong-bua-an": `${process.env.PUBLIC_URL}/images/blog/giam-muoi-trong-bua-an.svg`,
  "lap-thuc-don-30-ngay": `${process.env.PUBLIC_URL}/images/blog/lap-thuc-don-30-ngay.svg`,
};

const RAW_POSTS = [
  {
    slug: "che-do-an-it-kali",
    title: "Chế độ ăn ít kali cho người bệnh thận",
    date: "23/04/2026",
    image: BLOG_IMAGES["che-do-an-it-kali"],
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
    image: BLOG_IMAGES["giam-muoi-trong-bua-an"],
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
    image: BLOG_IMAGES["lap-thuc-don-30-ngay"],
    excerpt: "Gợi ý cách xoay vòng món ăn, đổi món không hợp khẩu vị và điều chỉnh lượng nguyên liệu theo số người ăn.",
    content: `
      <p>Thực đơn 30 ngày nên được xem như khung tham khảo. Nếu một món không hợp khẩu vị, hãy dùng nút đổi món để chọn món cùng nhóm bữa.</p>
      <p>Lượng nguyên liệu có thể tăng giảm theo số người ăn, nhưng các giới hạn dinh dưỡng quan trọng vẫn nên hỏi bác sĩ hoặc chuyên gia dinh dưỡng.</p>
    `
  }
];

function repairMojibake(value) {
  if (typeof value !== "string") return value;
  if (!/[ÃÂÆÄÅÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿâ]/.test(value)) {
    return value;
  }

  try {
    const bytes = Uint8Array.from(Array.from(value, (ch) => ch.charCodeAt(0) & 0xff));
    return new TextDecoder("utf-8").decode(bytes);
  } catch {
    return value;
  }
}

const CP1252_REVERSE = {
  0x20ac: 0x80, 0x201a: 0x82, 0x0192: 0x83, 0x201e: 0x84, 0x2026: 0x85,
  0x2020: 0x86, 0x2021: 0x87, 0x02c6: 0x88, 0x2030: 0x89, 0x0160: 0x8a,
  0x2039: 0x8b, 0x0152: 0x8c, 0x017d: 0x8e, 0x2018: 0x91, 0x2019: 0x92,
  0x201c: 0x93, 0x201d: 0x94, 0x2022: 0x95, 0x2013: 0x96, 0x2014: 0x97,
  0x02dc: 0x98, 0x2122: 0x99, 0x0161: 0x9a, 0x203a: 0x9b, 0x0153: 0x9c,
  0x017e: 0x9e, 0x0178: 0x9f,
};

function looksMojibake(value) {
  return /(?:Ã.|Â.|Æ.|Ä.|Å.|áº|á»|â.|[\uFFFD])/u.test(value);
}

function decodeMojibakeUtf8(value) {
  const bytes = [];
  for (const ch of value) {
    const codePoint = ch.codePointAt(0);
    if (codePoint <= 0xff) {
      bytes.push(codePoint);
    } else if (CP1252_REVERSE[codePoint] !== undefined) {
      bytes.push(CP1252_REVERSE[codePoint]);
    }
  }
  return new TextDecoder("utf-8").decode(Uint8Array.from(bytes));
}

function repairMojibakeRobust(value) {
  if (typeof value !== "string" || !looksMojibake(value)) return value;

  try {
    const once = decodeMojibakeUtf8(value);
    return looksMojibake(once) ? decodeMojibakeUtf8(once) : once;
  } catch {
    return value;
  }
}

function normalizePost(post) {
  return {
    ...post,
    title: repairMojibakeRobust(post.title),
    excerpt: repairMojibakeRobust(post.excerpt),
    content: repairMojibakeRobust(post.content),
  };
}

export const POSTS = RAW_POSTS.map(normalizePost);
