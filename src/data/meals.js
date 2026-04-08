// ============================================================
// CƠ SỞ DỮ LIỆU MÓN ĂN PHÙ HỢP BỆNH THẬN MẠN TÍNH
// Tiêu chí: ít kali, ít phốt-pho, ít natri, đạm vừa phải
// ============================================================

export const MEALS = [
  // ─── BỮA TRƯA ───────────────────────────────────────────
  {
    id: "lunch_01",
    session: "lunch",
    name: "Cơm trắng + Cá hấp gừng + Rau muống xào tỏi",
    tags: ["ít kali", "ít phốt-pho", "dễ làm"],
    note: "Cá hấp giữ nguyên dưỡng chất, không thêm mắm nhiều.",
    ingredients: [
      { name: "Gạo trắng", unit: "g", per1: 80 },
      { name: "Cá trắm (hoặc cá rô phi)", unit: "g", per1: 120 },
      { name: "Gừng tươi", unit: "g", per1: 10 },
      { name: "Rau muống", unit: "g", per1: 150 },
      { name: "Tỏi", unit: "tép", per1: 2 },
      { name: "Dầu ăn", unit: "ml", per1: 10 },
      { name: "Muối", unit: "g", per1: 1 }
    ],
    steps: [
      "Vo gạo, nấu cơm như bình thường.",
      "Cá làm sạch, ướp chút muối và gừng thái sợi 10 phút.",
      "Hấp cá 15–20 phút cho chín mềm, rưới ít dầu mè (nếu có).",
      "Rau muống nhặt sạch, chần nước sôi 1 phút, vớt ra để ráo.",
      "Phi tỏi vàng, cho rau muống vào xào nhanh lửa lớn 2–3 phút, nêm nhạt."
    ]
  },
  {
    id: "lunch_02",
    session: "lunch",
    name: "Cơm trắng + Trứng chiên + Canh bí đao",
    tags: ["ít kali", "dễ tiêu", "thanh đạm"],
    note: "Bí đao rất tốt cho thận, giúp lợi tiểu nhẹ.",
    ingredients: [
      { name: "Gạo trắng", unit: "g", per1: 80 },
      { name: "Trứng gà", unit: "quả", per1: 1.5 },
      { name: "Bí đao", unit: "g", per1: 200 },
      { name: "Hành lá", unit: "g", per1: 10 },
      { name: "Dầu ăn", unit: "ml", per1: 15 },
      { name: "Muối", unit: "g", per1: 1 }
    ],
    steps: [
      "Nấu cơm.",
      "Đánh trứng, thêm chút muối, chiên vàng 2 mặt.",
      "Bí đao gọt vỏ, thái miếng vuông cỡ 2cm.",
      "Đun sôi 500ml nước, cho bí đao vào nấu 10 phút đến mềm.",
      "Nêm nhạt, thêm hành lá, tắt bếp."
    ]
  },
  {
    id: "lunch_03",
    session: "lunch",
    name: "Cơm trắng + Thịt gà luộc + Rau cải luộc",
    tags: ["đạm trắng", "ít muối", "nhẹ bụng"],
    note: "Gà luộc bỏ da giúp giảm mỡ và phốt-pho.",
    ingredients: [
      { name: "Gạo trắng", unit: "g", per1: 80 },
      { name: "Ức gà (bỏ da)", unit: "g", per1: 100 },
      { name: "Cải thảo (hoặc cải xanh)", unit: "g", per1: 150 },
      { name: "Gừng", unit: "lát", per1: 2 },
      { name: "Muối", unit: "g", per1: 1 },
      { name: "Dầu mè", unit: "ml", per1: 5 }
    ],
    steps: [
      "Nấu cơm.",
      "Luộc gà với gừng và chút muối, nước vừa ngập thịt, đun 20 phút.",
      "Vớt gà ra, để nguội, xé sợi hoặc chặt miếng nhỏ.",
      "Dùng nước luộc gà (bỏ bọt) luộc rau cải 3 phút, vớt ra.",
      "Chan chút dầu mè lên thịt gà trước khi ăn."
    ]
  },
  {
    id: "lunch_04",
    session: "lunch",
    name: "Cơm trắng + Đậu hũ sốt cà chua + Súp lơ trắng xào",
    tags: ["chay", "ít kali", "giàu canxi thực vật"],
    note: "Đậu hũ non ít phốt-pho hơn đậu hũ cứng.",
    ingredients: [
      { name: "Gạo trắng", unit: "g", per1: 80 },
      { name: "Đậu hũ non", unit: "g", per1: 150 },
      { name: "Cà chua", unit: "quả", per1: 1 },
      { name: "Súp lơ trắng", unit: "g", per1: 150 },
      { name: "Hành tây", unit: "g", per1: 30 },
      { name: "Dầu ăn", unit: "ml", per1: 15 },
      { name: "Đường", unit: "g", per1: 3 },
      { name: "Muối", unit: "g", per1: 1 }
    ],
    steps: [
      "Nấu cơm.",
      "Đậu hũ cắt miếng vuông, chiên sơ dầu ít cho vàng nhẹ.",
      "Cà chua bổ múi cau, hành tây thái múi; xào thơm với dầu.",
      "Cho đậu hũ vào, nêm muối + đường, thêm 50ml nước, đun liu riu 5 phút.",
      "Súp lơ tách bông nhỏ, luộc 3 phút hoặc xào nhanh với tỏi."
    ]
  },
  {
    id: "lunch_05",
    session: "lunch",
    name: "Cơm trắng + Cá lóc kho gừng + Rau lang luộc",
    tags: ["kho nhạt", "ít natri", "ấm bụng"],
    note: "Kho nhạt hơn thông thường, giảm muối/nước mắm 50%.",
    ingredients: [
      { name: "Gạo trắng", unit: "g", per1: 80 },
      { name: "Cá lóc (khứa)", unit: "g", per1: 120 },
      { name: "Gừng", unit: "g", per1: 15 },
      { name: "Rau lang (ngọn)", unit: "g", per1: 150 },
      { name: "Dầu ăn", unit: "ml", per1: 10 },
      { name: "Đường", unit: "g", per1: 5 },
      { name: "Muối", unit: "g", per1: 1 }
    ],
    steps: [
      "Nấu cơm.",
      "Cá ướp chút muối + gừng thái sợi 10 phút.",
      "Đun chảo, cho ít dầu + đường thắng nhẹ màu, cho cá vào kho liu riu.",
      "Thêm 2–3 muỗng nước, kho tiếp 10 phút đến cạn.",
      "Rau lang nhặt ngọn non, luộc nước sôi 3 phút, chấm nước kho loãng."
    ]
  },
  {
    id: "lunch_06",
    session: "lunch",
    name: "Cơm trắng + Thịt heo luộc + Canh rau ngót",
    tags: ["thanh mát", "ít phốt-pho", "bổ dưỡng"],
    note: "Thịt heo nạc, bỏ mỡ. Rau ngót giúp bổ máu nhẹ.",
    ingredients: [
      { name: "Gạo trắng", unit: "g", per1: 80 },
      { name: "Thịt nạc vai heo", unit: "g", per1: 100 },
      { name: "Rau ngót", unit: "g", per1: 100 },
      { name: "Hành lá", unit: "g", per1: 10 },
      { name: "Muối", unit: "g", per1: 1 }
    ],
    steps: [
      "Nấu cơm.",
      "Luộc thịt với chút muối, vớt bọt, luộc 20 phút.",
      "Thái thịt mỏng, bày ra đĩa.",
      "Rau ngót nhặt lá, cho vào nước luộc thịt đun sôi 3 phút.",
      "Nêm nhạt, cho hành lá vào tắt bếp."
    ]
  },
  {
    id: "lunch_07",
    session: "lunch",
    name: "Cháo trắng + Trứng gà + Cải bó xôi luộc",
    tags: ["mềm", "dễ tiêu", "nhẹ thận"],
    note: "Cháo loãng giúp giảm tải cho thận. Không thêm mì chính.",
    ingredients: [
      { name: "Gạo tẻ", unit: "g", per1: 60 },
      { name: "Trứng gà", unit: "quả", per1: 1 },
      { name: "Cải bó xôi", unit: "g", per1: 100 },
      { name: "Gừng", unit: "lát", per1: 2 },
      { name: "Muối", unit: "g", per1: 0.5 }
    ],
    steps: [
      "Nấu cháo gạo tỉ lệ 1:10 với gừng, đun 30 phút đến nở mềm.",
      "Đánh trứng, đổ từ từ vào cháo đang sôi, khuấy đều.",
      "Cải bó xôi luộc riêng 2 phút, vớt ra bày bên.",
      "Nêm nhạt muối, ăn kèm."
    ]
  },
  {
    id: "lunch_08",
    session: "lunch",
    name: "Cơm trắng + Tôm rang muối nhạt + Canh mướp",
    tags: ["hải sản nhẹ", "ít natri", "mát"],
    note: "Tôm ăn vừa phải (80–100g), không ăn quá nhiều.",
    ingredients: [
      { name: "Gạo trắng", unit: "g", per1: 80 },
      { name: "Tôm tươi (bóc vỏ)", unit: "g", per1: 80 },
      { name: "Mướp hương", unit: "g", per1: 200 },
      { name: "Hành lá", unit: "g", per1: 10 },
      { name: "Tỏi", unit: "tép", per1: 2 },
      { name: "Dầu ăn", unit: "ml", per1: 10 },
      { name: "Muối", unit: "g", per1: 1 }
    ],
    steps: [
      "Nấu cơm.",
      "Tôm rửa sạch, ướp chút muối 5 phút.",
      "Phi tỏi, rang tôm lửa lớn 3 phút đến chín.",
      "Mướp gọt vỏ, thái khoanh.",
      "Nấu 500ml nước sôi, cho mướp vào 5 phút, nêm nhạt, cho hành lá."
    ]
  },
  {
    id: "lunch_09",
    session: "lunch",
    name: "Cơm trắng + Cá thu áp chảo + Rau cải xanh luộc",
    tags: ["omega-3", "ít kali", "chống viêm"],
    note: "Cá thu giàu omega-3 tốt cho tim mạch và thận.",
    ingredients: [
      { name: "Gạo trắng", unit: "g", per1: 80 },
      { name: "Cá thu (khúc)", unit: "g", per1: 120 },
      { name: "Cải xanh", unit: "g", per1: 150 },
      { name: "Chanh", unit: "quả", per1: 0.25 },
      { name: "Dầu ăn", unit: "ml", per1: 15 },
      { name: "Muối", unit: "g", per1: 1 }
    ],
    steps: [
      "Nấu cơm.",
      "Cá ướp muối + vài giọt nước cốt chanh 10 phút.",
      "Áp chảo cá lửa vừa, mỗi mặt 4–5 phút đến vàng giòn.",
      "Cải xanh luộc nước sôi 3 phút, vớt ra để ráo.",
      "Dọn ra đĩa, ăn kèm cơm."
    ]
  },
  {
    id: "lunch_10",
    session: "lunch",
    name: "Bún gạo + Gà xé + Rau sống (ít)",
    tags: ["thanh nhẹ", "dễ ăn", "ít muối"],
    note: "Dùng bún thay cơm đổi vị. Nước dùng nấu nhạt.",
    ingredients: [
      { name: "Bún gạo tươi", unit: "g", per1: 150 },
      { name: "Ức gà luộc xé", unit: "g", per1: 100 },
      { name: "Giá đỗ", unit: "g", per1: 50 },
      { name: "Rau mùi", unit: "g", per1: 10 },
      { name: "Gừng", unit: "g", per1: 10 },
      { name: "Muối", unit: "g", per1: 0.5 }
    ],
    steps: [
      "Luộc gà với gừng 20 phút, xé sợi.",
      "Nước luộc gà lọc qua rây, nêm nhạt làm nước dùng.",
      "Trụng bún qua nước sôi, cho ra tô.",
      "Xếp gà xé lên trên, chan nước dùng nóng.",
      "Thêm giá đỗ và rau mùi theo khẩu vị."
    ]
  },
  {
    id: "lunch_11",
    session: "lunch",
    name: "Cơm trắng + Đậu hũ chiên sả + Canh bầu",
    tags: ["chay", "thanh mát", "ít kali"],
    note: "Bầu có tác dụng mát và lợi tiểu, tốt cho thận.",
    ingredients: [
      { name: "Gạo trắng", unit: "g", per1: 80 },
      { name: "Đậu hũ cứng", unit: "g", per1: 120 },
      { name: "Sả", unit: "cây", per1: 1 },
      { name: "Bầu", unit: "g", per1: 200 },
      { name: "Hành lá", unit: "g", per1: 10 },
      { name: "Dầu ăn", unit: "ml", per1: 15 },
      { name: "Muối", unit: "g", per1: 1 }
    ],
    steps: [
      "Nấu cơm.",
      "Đậu hũ cắt miếng vừa, thái sả nhỏ.",
      "Chiên đậu hũ vàng đều 2 mặt, cho sả vào đảo thơm.",
      "Bầu gọt vỏ, thái miếng, nấu canh 500ml nước sôi 8 phút.",
      "Nêm nhạt muối, cho hành lá."
    ]
  },
  {
    id: "lunch_12",
    session: "lunch",
    name: "Cơm trắng + Cá diêu hồng hấp + Cải thảo luộc",
    tags: ["hấp", "ít dầu mỡ", "đạm trắng"],
    note: "Cá diêu hồng hấp giữ nguyên dưỡng chất tốt nhất.",
    ingredients: [
      { name: "Gạo trắng", unit: "g", per1: 80 },
      { name: "Cá diêu hồng (cắt khúc)", unit: "g", per1: 130 },
      { name: "Cải thảo", unit: "g", per1: 150 },
      { name: "Gừng", unit: "g", per1: 10 },
      { name: "Hành lá", unit: "g", per1: 10 },
      { name: "Dầu mè", unit: "ml", per1: 5 },
      { name: "Muối", unit: "g", per1: 1 }
    ],
    steps: [
      "Nấu cơm.",
      "Cá ướp muối và gừng thái sợi 10 phút.",
      "Hấp cá 15–20 phút, rưới dầu mè và hành lá lên khi chín.",
      "Cải thảo cắt khúc, luộc 3 phút.",
      "Bày ra dĩa ăn kèm cơm."
    ]
  },
  {
    id: "lunch_13",
    session: "lunch",
    name: "Cơm trắng + Thịt bò xào hành tây + Rau bina luộc",
    tags: ["ít phốt-pho", "năng lượng", "ngon miệng"],
    note: "Thịt bò nạc, hạn chế phần mỡ. Ăn không quá 80g.",
    ingredients: [
      { name: "Gạo trắng", unit: "g", per1: 80 },
      { name: "Thịt bò nạc", unit: "g", per1: 80 },
      { name: "Hành tây", unit: "g", per1: 80 },
      { name: "Rau bina (spinach)", unit: "g", per1: 120 },
      { name: "Dầu ăn", unit: "ml", per1: 15 },
      { name: "Muối", unit: "g", per1: 1 }
    ],
    steps: [
      "Nấu cơm.",
      "Thịt bò thái mỏng, ướp chút muối.",
      "Hành tây bóc vỏ, thái múi cau.",
      "Xào thịt bò lửa lớn 2 phút, cho hành tây vào đảo thêm 2 phút.",
      "Rau bina luộc nhanh 2 phút, vớt ra ăn kèm."
    ]
  },
  {
    id: "lunch_14",
    session: "lunch",
    name: "Cơm trắng + Canh cá nấu dứa + Rau muống luộc",
    tags: ["chua nhẹ", "kích thích ăn", "mát"],
    note: "Dứa (thơm) giúp tiêu hóa tốt, nấu canh chua nhẹ.",
    ingredients: [
      { name: "Gạo trắng", unit: "g", per1: 80 },
      { name: "Cá (basa hoặc điêu hồng)", unit: "g", per1: 120 },
      { name: "Dứa (thơm)", unit: "g", per1: 80 },
      { name: "Cà chua", unit: "quả", per1: 1 },
      { name: "Rau muống", unit: "g", per1: 150 },
      { name: "Dầu ăn", unit: "ml", per1: 10 },
      { name: "Muối", unit: "g", per1: 1 }
    ],
    steps: [
      "Nấu cơm.",
      "Dứa gọt vỏ, thái miếng. Cà chua bổ múi.",
      "Xào dứa + cà chua 3 phút, cho 500ml nước vào đun sôi.",
      "Cho cá vào nấu 10 phút, nêm nhạt.",
      "Rau muống luộc riêng 3 phút."
    ]
  },
  {
    id: "lunch_15",
    session: "lunch",
    name: "Cơm trắng + Gà hấp hành gừng + Bông cải xanh luộc",
    tags: ["chống viêm", "đạm trắng", "bổ dưỡng"],
    note: "Bông cải xanh rất tốt, chứa chất chống oxy hóa.",
    ingredients: [
      { name: "Gạo trắng", unit: "g", per1: 80 },
      { name: "Ức gà (bỏ da)", unit: "g", per1: 100 },
      { name: "Bông cải xanh", unit: "g", per1: 150 },
      { name: "Hành lá", unit: "g", per1: 15 },
      { name: "Gừng", unit: "g", per1: 10 },
      { name: "Dầu mè", unit: "ml", per1: 5 },
      { name: "Muối", unit: "g", per1: 1 }
    ],
    steps: [
      "Nấu cơm.",
      "Gà ướp muối + gừng thái sợi.",
      "Hấp gà 20 phút đến chín, phủ hành lá lên, rưới dầu mè.",
      "Bông cải tách bông nhỏ, luộc 4 phút hoặc hấp cùng gà.",
      "Thái gà thành miếng vừa ăn."
    ]
  },

  // ─── BỮA TỐI ────────────────────────────────────────────
  {
    id: "dinner_01",
    session: "dinner",
    name: "Cháo trắng + Cá hồi áp chảo + Dưa chuột",
    tags: ["nhẹ bụng", "omega-3", "buổi tối"],
    note: "Buổi tối ăn nhẹ hơn. Dưa chuột giúp lợi tiểu.",
    ingredients: [
      { name: "Gạo tẻ", unit: "g", per1: 60 },
      { name: "Cá hồi (phi lê)", unit: "g", per1: 100 },
      { name: "Dưa chuột", unit: "g", per1: 100 },
      { name: "Chanh", unit: "quả", per1: 0.25 },
      { name: "Dầu ăn", unit: "ml", per1: 10 },
      { name: "Muối", unit: "g", per1: 0.5 }
    ],
    steps: [
      "Nấu cháo trắng với tỉ lệ 1:10, đun 30 phút.",
      "Cá hồi ướp muối + chanh 10 phút.",
      "Áp chảo cá 3 phút mỗi mặt.",
      "Dưa chuột rửa sạch, thái lát mỏng.",
      "Dọn cháo + cá + dưa chuột ra ăn."
    ]
  },
  {
    id: "dinner_02",
    session: "dinner",
    name: "Cơm trắng (ít) + Canh bí đỏ + Trứng luộc",
    tags: ["buổi tối", "ít calo", "dễ tiêu"],
    note: "Bí đỏ giàu beta-carotene, tốt cho sức đề kháng.",
    ingredients: [
      { name: "Gạo trắng", unit: "g", per1: 60 },
      { name: "Bí đỏ", unit: "g", per1: 150 },
      { name: "Trứng gà", unit: "quả", per1: 1 },
      { name: "Hành lá", unit: "g", per1: 10 },
      { name: "Muối", unit: "g", per1: 1 }
    ],
    steps: [
      "Nấu cơm (lượng ít hơn buổi trưa).",
      "Trứng luộc 10 phút, bóc vỏ, cắt đôi.",
      "Bí đỏ gọt vỏ, thái miếng vuông.",
      "Nấu 500ml nước sôi, cho bí đỏ vào 12 phút đến mềm.",
      "Nêm nhạt muối, cho hành lá, tắt bếp."
    ]
  },
  {
    id: "dinner_03",
    session: "dinner",
    name: "Cháo yến mạch + Gà xé + Rau thơm",
    tags: ["nhẹ bụng", "chất xơ", "dễ ngủ"],
    note: "Yến mạch giúp ổn định đường huyết và nhẹ thận.",
    ingredients: [
      { name: "Yến mạch (oats)", unit: "g", per1: 50 },
      { name: "Ức gà xé sợi", unit: "g", per1: 80 },
      { name: "Gừng", unit: "lát", per1: 2 },
      { name: "Rau mùi", unit: "g", per1: 10 },
      { name: "Muối", unit: "g", per1: 0.5 }
    ],
    steps: [
      "Đun 500ml nước với gừng, cho yến mạch vào khuấy 5 phút.",
      "Gà luộc sẵn, xé sợi nhỏ.",
      "Cho gà xé vào cháo, nêm nhạt.",
      "Rắc rau mùi lên trên, ăn khi còn nóng."
    ]
  },
  {
    id: "dinner_04",
    session: "dinner",
    name: "Cơm trắng (ít) + Cá hấp gừng hành + Canh rau củ",
    tags: ["buổi tối", "đạm nhẹ", "thanh"],
    note: "Canh rau củ nên dùng cà rốt + su su, tránh khoai tây.",
    ingredients: [
      { name: "Gạo trắng", unit: "g", per1: 60 },
      { name: "Cá trắng (hấp)", unit: "g", per1: 100 },
      { name: "Cà rốt", unit: "g", per1: 80 },
      { name: "Su su", unit: "g", per1: 100 },
      { name: "Gừng", unit: "g", per1: 10 },
      { name: "Hành lá", unit: "g", per1: 10 },
      { name: "Muối", unit: "g", per1: 1 }
    ],
    steps: [
      "Nấu cơm.",
      "Cá ướp muối + gừng, hấp 15 phút.",
      "Cà rốt + su su thái miếng nhỏ.",
      "Nấu canh: 500ml nước, cho rau củ vào đun 10 phút.",
      "Nêm nhạt, cho hành lá."
    ]
  },
  {
    id: "dinner_05",
    session: "dinner",
    name: "Súp bí đao + Cơm trắng (ít) + Đậu hũ luộc",
    tags: ["lợi tiểu", "mát", "nhẹ bụng"],
    note: "Súp bí đao rất tốt cho người bệnh thận, uống được nhiều.",
    ingredients: [
      { name: "Gạo trắng", unit: "g", per1: 60 },
      { name: "Bí đao", unit: "g", per1: 200 },
      { name: "Đậu hũ non", unit: "g", per1: 100 },
      { name: "Hành lá", unit: "g", per1: 10 },
      { name: "Muối", unit: "g", per1: 0.5 }
    ],
    steps: [
      "Nấu cơm.",
      "Bí đao thái miếng, nấu 500ml nước 10 phút.",
      "Cho đậu hũ non vào nấu thêm 3 phút.",
      "Nêm rất nhạt, cho hành lá.",
      "Ăn kèm cơm."
    ]
  },
  {
    id: "dinner_06",
    session: "dinner",
    name: "Cơm trắng (ít) + Thịt heo luộc + Rau luộc hỗn hợp",
    tags: ["buổi tối", "đạm vừa", "thanh đạm"],
    note: "Rau luộc hỗn hợp: cải xanh + su su + cà rốt.",
    ingredients: [
      { name: "Gạo trắng", unit: "g", per1: 60 },
      { name: "Thịt nạc vai heo", unit: "g", per1: 80 },
      { name: "Cải xanh", unit: "g", per1: 80 },
      { name: "Su su", unit: "g", per1: 80 },
      { name: "Cà rốt", unit: "g", per1: 50 },
      { name: "Muối", unit: "g", per1: 1 }
    ],
    steps: [
      "Nấu cơm.",
      "Luộc thịt 20 phút với chút muối.",
      "Rau củ cắt vừa, luộc chung nước thịt 5 phút.",
      "Thái thịt mỏng, bày ra đĩa.",
      "Dùng nước luộc thịt làm canh."
    ]
  },
  {
    id: "dinner_07",
    session: "dinner",
    name: "Cháo trắng + Cà rốt nghiền + Gà xé",
    tags: ["mềm", "dễ tiêu", "beta-carotene"],
    note: "Phù hợp khi bố mệt, ăn không ngon miệng.",
    ingredients: [
      { name: "Gạo tẻ", unit: "g", per1: 60 },
      { name: "Cà rốt", unit: "g", per1: 100 },
      { name: "Ức gà luộc", unit: "g", per1: 80 },
      { name: "Gừng", unit: "lát", per1: 2 },
      { name: "Muối", unit: "g", per1: 0.5 }
    ],
    steps: [
      "Nấu cháo với gừng.",
      "Cà rốt hấp mềm, nghiền nhuyễn.",
      "Trộn cà rốt nghiền vào cháo, khuấy đều.",
      "Gà luộc xé sợi, đặt lên trên.",
      "Nêm rất nhạt, ăn nóng."
    ]
  },
  {
    id: "dinner_08",
    session: "dinner",
    name: "Cơm trắng (ít) + Tôm hấp sả + Canh bí đao",
    tags: ["thanh mát", "hải sản nhẹ", "lợi tiểu"],
    note: "Tôm hấp sả thơm mà không cần nhiều gia vị.",
    ingredients: [
      { name: "Gạo trắng", unit: "g", per1: 60 },
      { name: "Tôm tươi", unit: "g", per1: 80 },
      { name: "Sả", unit: "cây", per1: 2 },
      { name: "Bí đao", unit: "g", per1: 150 },
      { name: "Muối", unit: "g", per1: 1 }
    ],
    steps: [
      "Nấu cơm.",
      "Sả đập dập, lót dưới đáy nồi hấp.",
      "Tôm rửa sạch, xếp lên sả, hấp 8 phút.",
      "Bí đao thái miếng, nấu canh 500ml nước 8 phút.",
      "Nêm nhạt."
    ]
  },
  {
    id: "dinner_09",
    session: "dinner",
    name: "Miến gà + Rau cải",
    tags: ["nhẹ bụng", "dễ tiêu", "thơm ngon"],
    note: "Miến dong ít kali hơn bún/phở. Nước dùng nấu nhạt.",
    ingredients: [
      { name: "Miến dong khô", unit: "g", per1: 50 },
      { name: "Ức gà", unit: "g", per1: 80 },
      { name: "Cải thảo", unit: "g", per1: 100 },
      { name: "Hành lá", unit: "g", per1: 10 },
      { name: "Gừng", unit: "g", per1: 10 },
      { name: "Muối", unit: "g", per1: 0.5 }
    ],
    steps: [
      "Miến ngâm nước 15 phút, cắt ngắn.",
      "Luộc gà với gừng 20 phút, xé sợi, giữ nước dùng.",
      "Nước dùng lọc sạch, nêm nhạt.",
      "Đun sôi nước dùng, cho miến vào 3 phút.",
      "Xếp gà xé + cải thảo + hành lá lên trên."
    ]
  },
  {
    id: "dinner_10",
    session: "dinner",
    name: "Cơm trắng (ít) + Đậu hũ nhồi thịt hấp + Rau luộc",
    tags: ["đạm hỗn hợp", "buổi tối", "ngon miệng"],
    note: "Đậu hũ nhồi thịt đẹp mắt, kích thích ăn ngon.",
    ingredients: [
      { name: "Gạo trắng", unit: "g", per1: 60 },
      { name: "Đậu hũ cứng", unit: "g", per1: 120 },
      { name: "Thịt nạc xay", unit: "g", per1: 60 },
      { name: "Nấm mèo", unit: "g", per1: 20 },
      { name: "Rau xanh (tùy chọn)", unit: "g", per1: 100 },
      { name: "Muối", unit: "g", per1: 1 }
    ],
    steps: [
      "Nấu cơm.",
      "Nấm mèo ngâm nở, thái nhỏ, trộn với thịt xay + chút muối.",
      "Khoét lỗ đậu hũ, nhồi nhân thịt vào.",
      "Hấp đậu hũ nhồi 15 phút.",
      "Rau xanh luộc chín, bày ra đĩa ăn kèm."
    ]
  },
  {
    id: "dinner_11",
    session: "dinner",
    name: "Cháo cá + Gừng + Hành lá",
    tags: ["dễ tiêu", "ấm bụng", "nhẹ thận"],
    note: "Cháo cá ăn tối rất nhẹ bụng, tốt cho giấc ngủ.",
    ingredients: [
      { name: "Gạo tẻ", unit: "g", per1: 60 },
      { name: "Cá trắng (phi lê)", unit: "g", per1: 80 },
      { name: "Gừng", unit: "g", per1: 15 },
      { name: "Hành lá", unit: "g", per1: 10 },
      { name: "Dầu mè", unit: "ml", per1: 3 },
      { name: "Muối", unit: "g", per1: 0.5 }
    ],
    steps: [
      "Nấu cháo trắng với gừng đến nở mềm.",
      "Cá phi lê thái nhỏ, thả vào cháo đang sôi.",
      "Khuấy đều, đun thêm 5 phút đến cá chín.",
      "Nêm nhạt, cho hành lá + vài giọt dầu mè.",
      "Ăn khi còn nóng."
    ]
  },
  {
    id: "dinner_12",
    session: "dinner",
    name: "Cơm trắng (ít) + Thịt gà nướng + Salad dưa leo",
    tags: ["ít dầu", "nhẹ bụng", "thanh"],
    note: "Nướng không ướp nhiều gia vị, tránh nước tương mặn.",
    ingredients: [
      { name: "Gạo trắng", unit: "g", per1: 60 },
      { name: "Ức gà (bỏ da)", unit: "g", per1: 100 },
      { name: "Dưa chuột", unit: "g", per1: 100 },
      { name: "Chanh", unit: "quả", per1: 0.25 },
      { name: "Dầu ô liu", unit: "ml", per1: 5 },
      { name: "Muối", unit: "g", per1: 0.5 }
    ],
    steps: [
      "Nấu cơm.",
      "Gà ướp muối + vài giọt chanh 15 phút.",
      "Nướng gà 180°C trong 20 phút hoặc áp chảo không dầu.",
      "Dưa chuột thái lát, trộn dầu ô liu + vài giọt chanh.",
      "Bày ra đĩa ăn kèm cơm."
    ]
  },
  {
    id: "dinner_13",
    session: "dinner",
    name: "Phở gà nhạt + Rau thơm",
    tags: ["thơm ngon", "nhẹ bụng", "đổi vị"],
    note: "Nước phở nấu nhạt, ít muối. Không dùng bột nêm.",
    ingredients: [
      { name: "Bánh phở tươi", unit: "g", per1: 150 },
      { name: "Ức gà luộc", unit: "g", per1: 80 },
      { name: "Gừng nướng", unit: "g", per1: 20 },
      { name: "Hành tây", unit: "g", per1: 30 },
      { name: "Rau mùi / hành lá", unit: "g", per1: 15 },
      { name: "Muối", unit: "g", per1: 0.5 }
    ],
    steps: [
      "Nướng gừng + hành tây qua lửa cho thơm.",
      "Nấu xương gà + gừng + hành 30 phút lấy nước dùng.",
      "Lọc nước dùng, nêm rất nhạt.",
      "Trụng bánh phở, xếp gà xé lên trên.",
      "Chan nước dùng nóng, thêm rau thơm."
    ]
  },
  {
    id: "dinner_14",
    session: "dinner",
    name: "Cơm trắng (ít) + Canh hến (hoặc ngao) nấu nhạt + Rau luộc",
    tags: ["khoáng chất", "nhẹ", "buổi tối"],
    note: "Hến ít lượng (50g) cung cấp sắt và kẽm, tốt khi thận yếu.",
    ingredients: [
      { name: "Gạo trắng", unit: "g", per1: 60 },
      { name: "Hến (hoặc ngao)", unit: "g", per1: 50 },
      { name: "Rau cải xanh", unit: "g", per1: 100 },
      { name: "Gừng", unit: "lát", per1: 2 },
      { name: "Hành lá", unit: "g", per1: 10 },
      { name: "Muối", unit: "g", per1: 0.5 }
    ],
    steps: [
      "Nấu cơm.",
      "Hến/ngao ngâm nước muối loãng 30 phút, rửa sạch.",
      "Đun sôi 400ml nước + gừng, cho hến vào 5 phút.",
      "Vớt bỏ vỏ không mở, nêm nhạt, cho hành lá.",
      "Rau cải luộc ăn kèm."
    ]
  },
  {
    id: "dinner_15",
    session: "dinner",
    name: "Cháo bí đỏ + Gà + Hạt bí",
    tags: ["ấm bụng", "dinh dưỡng", "dễ ngủ"],
    note: "Hạt bí chứa kẽm và magie, tốt cho thận (chỉ 1 muỗng).",
    ingredients: [
      { name: "Gạo tẻ", unit: "g", per1: 50 },
      { name: "Bí đỏ", unit: "g", per1: 100 },
      { name: "Ức gà", unit: "g", per1: 70 },
      { name: "Hạt bí rang (ít muối)", unit: "g", per1: 5 },
      { name: "Gừng", unit: "lát", per1: 2 },
      { name: "Muối", unit: "g", per1: 0.5 }
    ],
    steps: [
      "Nấu cháo trắng.",
      "Bí đỏ hấp mềm, nghiền nhuyễn.",
      "Gà luộc xé sợi nhỏ.",
      "Trộn bí đỏ vào cháo, cho gà xé lên.",
      "Rắc hạt bí rang, ăn nóng."
    ]
  }
];

// Tạo thực đơn 30 ngày từ danh sách món
export function generateMonthPlan() {
  const lunches = MEALS.filter(m => m.session === "lunch");
  const dinners = MEALS.filter(m => m.session === "dinner");

  const plan = [];
  const shuffledL = [...lunches].sort(() => Math.random() - 0.5);
  const shuffledD = [...dinners].sort(() => Math.random() - 0.5);

  for (let day = 1; day <= 30; day++) {
    plan.push({
      day,
      lunch: shuffledL[(day - 1) % shuffledL.length],
      dinner: shuffledD[(day - 1) % shuffledD.length]
    });
  }
  return plan;
}

export function getRandomMeal(session, excludeId) {
  const pool = MEALS.filter(m => m.session === session && m.id !== excludeId);
  return pool[Math.floor(Math.random() * pool.length)];
}
