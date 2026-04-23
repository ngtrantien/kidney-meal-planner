import "./mealImages";

const BLOG_IMAGES = {
  "che-do-an-it-kali": `${process.env.PUBLIC_URL}/images/blog/che-do-an-it-kali.svg`,
  "giam-muoi-trong-bua-an": `${process.env.PUBLIC_URL}/images/blog/giam-muoi-trong-bua-an.svg`,
  "lap-thuc-don-30-ngay": `${process.env.PUBLIC_URL}/images/blog/lap-thuc-don-30-ngay.svg`,
  "kiem-soat-phospho-hang-ngay": `${process.env.PUBLIC_URL}/images/blog/kiem-soat-phospho-hang-ngay.svg`,
  "uoc-luong-khau-phan-dam": `${process.env.PUBLIC_URL}/images/blog/uoc-luong-khau-phan-dam.svg`,
  "an-ngoai-khi-bi-benh-than": `${process.env.PUBLIC_URL}/images/blog/an-ngoai-khi-bi-benh-than.svg`,
  "doc-nhan-thuc-pham-dong-goi": `${process.env.PUBLIC_URL}/images/blog/doc-nhan-thuc-pham-dong-goi.svg`,
  "nhat-ky-an-uong-va-tai-kham": `${process.env.PUBLIC_URL}/images/blog/nhat-ky-an-uong-va-tai-kham.svg`,
};

const RAW_POSTS = [
  {
    slug: "che-do-an-it-kali",
    title: "Chế độ ăn ít kali cho người bệnh thận: cách chọn thực phẩm và giữ bữa ăn dễ áp dụng",
    date: "23/04/2026",
    image: BLOG_IMAGES["che-do-an-it-kali"],
    metaTitle: "Chế độ ăn ít kali cho người bệnh thận | Hướng dẫn chi tiết dễ áp dụng",
    metaDescription:
      "Hướng dẫn chi tiết về chế độ ăn ít kali cho người bệnh thận: thực phẩm nên hạn chế, cách nấu giảm kali và cách tổ chức bữa ăn an toàn hơn mỗi ngày.",
    relatedSlugs: ["kiem-soat-phospho-hang-ngay", "giam-muoi-trong-bua-an", "lap-thuc-don-30-ngay"],
    excerpt:
      "Bài viết giải thích rõ vì sao cần kiểm soát kali, cách nhận diện nhóm thực phẩm dễ làm kali tăng cao, và cách nấu nướng để bữa ăn hằng ngày vẫn nhẹ nhàng, dễ thực hiện.",
    content: `
      <p>Kali là khoáng chất cần thiết cho hoạt động của thần kinh, cơ và tim. Tuy nhiên, khi chức năng thận giảm, cơ thể có thể đào thải kali kém hơn bình thường. Nếu kali máu tăng quá cao, người bệnh có thể mệt nhiều, yếu cơ, hồi hộp, thậm chí rối loạn nhịp tim. Vì vậy, kiểm soát kali không phải là kiêng tuyệt đối mọi thứ, mà là biết chọn đúng thực phẩm, đúng lượng và đúng cách chế biến.</p>
      <p>Điều đầu tiên cần nhớ là không phải người bệnh thận nào cũng phải ăn thật ít kali ở cùng một mức. Mức hạn chế phụ thuộc vào xét nghiệm máu, giai đoạn bệnh, lượng nước tiểu còn lại và chỉ định điều trị. Có người chỉ cần tránh những món quá đậm kali; có người lại phải kiểm soát rất chặt. Vì vậy, thực đơn mẫu trên website chỉ nên xem như khung tham khảo để tổ chức bữa ăn, còn giới hạn cụ thể vẫn cần bám theo bác sĩ hoặc chuyên gia dinh dưỡng.</p>
      <h3>Những nhóm thực phẩm cần chú ý hơn</h3>
      <p>Các loại rau lá xanh đậm, nước rau củ cô đặc, nước ép trái cây, chuối, cam, bơ, khoai tây, khoai lang, nước dừa, trái cây sấy và nhiều loại hạt thường là những thực phẩm người bệnh hay vô tình dùng quá tay. Điều này không có nghĩa là tất cả đều bị cấm, nhưng nếu đang có kali máu cao, nên giảm tần suất, giảm khẩu phần và ưu tiên các lựa chọn an toàn hơn như bầu, bí đao, su su, dưa leo, táo, lê hoặc nho theo lượng phù hợp.</p>
      <h3>Cách nấu giúp giảm bớt kali</h3>
      <p>Với một số loại rau củ, cách nấu có thể giúp giảm phần nào lượng kali. Có thể gọt vỏ, thái nhỏ, ngâm nước, sau đó luộc và bỏ phần nước luộc đầu. Cách này không làm rau trở thành “không còn kali”, nhưng có thể giúp bữa ăn an toàn hơn. Ngược lại, các món hầm lâu, nấu canh đậm hoặc xay thành sinh tố lại dễ khiến người bệnh đưa nhiều kali vào cơ thể hơn mà không nhận ra.</p>
      <h3>Gợi ý áp dụng trong bữa ăn hằng ngày</h3>
      <ul>
        <li>Mỗi bữa chỉ chọn 1 nguồn rau chính, tránh ăn dồn nhiều món rau đậm màu cùng lúc.</li>
        <li>Không uống nước luộc rau nếu đang phải kiểm soát kali chặt.</li>
        <li>Hạn chế nước ép, sinh tố, trái cây sấy và các loại “healthy snack” quá đậm đặc.</li>
        <li>Đọc lại kết quả xét nghiệm định kỳ để điều chỉnh thực đơn thay vì tự kiêng kéo dài.</li>
      </ul>
      <p>Khi áp dụng thực đơn ít kali, mục tiêu quan trọng nhất là giữ bữa ăn bền vững. Nếu thực đơn quá khắt khe, người bệnh dễ bỏ cuộc hoặc ăn lệch kéo dài. Hãy bắt đầu bằng việc thay những món có nguy cơ cao bằng lựa chọn dễ hơn, ghi lại phản ứng cơ thể, rồi điều chỉnh dần từng tuần. Đó là cách thực tế nhất để vừa an toàn, vừa giữ được chất lượng sống.</p>
    `,
  },
  {
    slug: "giam-muoi-trong-bua-an",
    title: "Giảm muối mà bữa ăn vẫn ngon: cách nêm nếm cho người bệnh thận mà gia đình vẫn ăn được",
    date: "23/04/2026",
    image: BLOG_IMAGES["giam-muoi-trong-bua-an"],
    metaTitle: "Giảm muối mà bữa ăn vẫn ngon | Cách nêm nếm cho người bệnh thận",
    metaDescription:
      "Cách giảm muối trong bữa ăn cho người bệnh thận mà món vẫn ngon, dễ ăn và phù hợp cho cả gia đình: mẹo nêm nếm, thay gia vị và tránh natri ẩn.",
    relatedSlugs: ["doc-nhan-thuc-pham-dong-goi", "che-do-an-it-kali", "an-ngoai-khi-bi-benh-than"],
    excerpt:
      "Không ít gia đình nghĩ rằng ăn nhạt đồng nghĩa với nhạt nhẽo. Bài viết này hướng dẫn cách giảm natri trong thực tế, từ nêm nếm, chọn gia vị thay thế đến thói quen nấu nướng dễ duy trì lâu dài.",
    content: `
      <p>Ăn nhạt là một trong những nguyên tắc quan trọng nhất khi chăm sóc người bệnh thận, đặc biệt nếu có phù, tăng huyết áp hoặc bệnh tim mạch đi kèm. Vấn đề là nhiều gia đình chỉ tập trung “bớt muối” ở bước cuối mà quên rằng natri còn đến từ nước mắm, nước tương, đồ hộp, thực phẩm chế biến sẵn, chả giò đông lạnh, xúc xích, mì gói, bột nêm, nước sốt và các món chấm.</p>
      <p>Muốn giảm muối hiệu quả, trước hết cần thay đổi cách nghĩ: mục tiêu không phải làm món ăn mất vị, mà là chuyển trọng tâm sang mùi thơm, vị ngọt tự nhiên và độ tươi của nguyên liệu. Khi dùng gừng, hành, tỏi, tiêu nhẹ, chanh, rau mùi, hành lá hoặc sả đúng cách, món ăn vẫn có chiều sâu hương vị dù lượng muối thấp hơn nhiều.</p>
      <h3>Ba sai lầm thường gặp khi giảm muối</h3>
      <ul>
        <li>Nêm nhạt lúc nấu nhưng để thêm chén nước mắm hoặc muối tiêu khi ăn.</li>
        <li>Cho ít muối hơn nhưng bù lại bằng nhiều nước tương, dầu hào hoặc hạt nêm.</li>
        <li>Ưu tiên đồ “tiện lợi” như cá viên, xúc xích, thức ăn đóng hộp vì nghĩ đỡ phải nêm nếm.</li>
      </ul>
      <p>Trong thực tế, cách dễ làm nhất là nêm nhẹ ngay từ đầu và bỏ hẳn thói quen đặt nước chấm đậm đặc ở giữa bàn. Với món canh, nên để vị thanh, dùng ngọt từ bí, bầu, cà rốt hoặc hành tây. Với món hấp và luộc, có thể tăng mùi thơm bằng gừng, hành, thì là, rau mùi hoặc chút dầu mè. Với món xào, nên xào nhanh lửa lớn, dùng ít dầu, thêm tỏi hoặc hành phi nhẹ để món ăn “dậy” mùi mà không cần nhiều gia vị mặn.</p>
      <h3>Cách giảm muối mà cả gia đình vẫn ăn được</h3>
      <p>Nếu trong nhà chỉ có một người bệnh thận, đừng nấu hai bữa ăn hoàn toàn tách biệt nếu điều đó khiến người chăm sóc quá mệt. Thay vào đó, hãy nấu nền món ăn nhạt cho cả nhà, sau đó nếu cần mới điều chỉnh nhẹ cho người khỏe mạnh bằng một phần riêng. Cách này giúp cả gia đình quen dần với khẩu vị lành mạnh hơn, giảm áp lực nấu nướng và tránh cảm giác người bệnh bị “ăn khác mọi người”.</p>
      <p>Một quy tắc đơn giản là giảm từ từ nhưng đều đặn. Mỗi tuần giảm một chút lượng nước mắm, hạt nêm hoặc nước tương trong món quen thuộc. Sau 2 đến 4 tuần, vị giác sẽ thích nghi đáng kể. Điều quan trọng không phải là đạt mức hoàn hảo ngay lập tức, mà là tạo được một nhịp ăn uống bền vững, để việc ăn nhạt trở thành thói quen chứ không còn là ép buộc.</p>
    `,
  },
  {
    slug: "lap-thuc-don-30-ngay",
    title: "Cách dùng thực đơn 30 ngày: xoay vòng món ăn, đổi món hợp lý và giữ kế hoạch bền vững",
    date: "23/04/2026",
    image: BLOG_IMAGES["lap-thuc-don-30-ngay"],
    metaTitle: "Cách dùng thực đơn 30 ngày cho người bệnh thận | Planner chi tiết",
    metaDescription:
      "Hướng dẫn dùng planner 30 ngày cho người bệnh thận: cách đổi món, điều chỉnh khẩu phần, giữ kế hoạch linh hoạt và bền vững trong gia đình.",
    relatedSlugs: ["uoc-luong-khau-phan-dam", "nhat-ky-an-uong-va-tai-kham", "giam-muoi-trong-bua-an"],
    excerpt:
      "Thực đơn 30 ngày không nên dùng như lịch cứng. Bài viết này hướng dẫn cách xem planner đúng cách, cách đổi món khi không hợp khẩu vị và cách điều chỉnh khẩu phần theo số người ăn mà vẫn giữ nguyên nguyên tắc bệnh thận.",
    content: `
      <p>Nhiều người nhìn vào thực đơn 30 ngày rồi lo rằng mình phải nấu đúng y nguyên từng món, từng ngày mới “đúng chuẩn”. Thật ra không phải vậy. Bộ planner nên được hiểu là một hệ thống gợi ý giúp bạn giảm áp lực nghĩ món, giữ nhịp bữa ăn đều hơn và tránh lặp lại các món quá mặn, quá nhiều đạm hoặc không phù hợp cho người bệnh thận.</p>
      <p>Điểm mạnh của planner là có sẵn cấu trúc bữa trưa và bữa tối để bạn nhìn nhanh được nhịp ăn trong tháng. Nhưng trong đời sống thật, chắc chắn sẽ có ngày người bệnh mệt, ăn kém, đổi khẩu vị, có sẵn nguyên liệu khác trong tủ lạnh hoặc gia đình cần nấu món dễ hơn. Những lúc đó, hãy đổi món trong cùng nhóm thay vì bỏ hẳn kế hoạch. Ví dụ, nếu bữa có cá hấp không phù hợp, bạn có thể đổi sang một món cá hoặc món đạm nhẹ tương đương trong cùng khung bữa.</p>
      <h3>Nên dùng planner như thế nào cho hiệu quả?</h3>
      <ul>
        <li>Mỗi ngày chỉ cần tập trung vào hôm nay và ngày mai, không cần nhìn cả tháng rồi bị ngợp.</li>
        <li>Nếu món nào gia đình đã nấu ngon và người bệnh ăn hợp, nên ghi lại để ưu tiên xuất hiện lại.</li>
        <li>Nếu một món bị đổi vì thiếu nguyên liệu, vẫn giữ nguyên nguyên tắc: ít muối, đạm vừa phải, rau phù hợp.</li>
        <li>Điều chỉnh khẩu phần theo số người ăn, nhưng không vì đông người mà nêm mặn hơn nền món.</li>
      </ul>
      <p>Website hiện đã cho phép thay đổi khẩu phần và đổi món từng bữa. Đây là tính năng nên dùng thường xuyên, vì một kế hoạch có thể linh hoạt mới thực sự sống được trong gia đình. Ngược lại, nếu quá cứng nhắc, bạn sẽ nhanh mệt và rất dễ bỏ planner chỉ sau vài ngày đầu.</p>
      <p>Một cách dùng rất hiệu quả là mỗi tuần dành 10 đến 15 phút nhìn lại: món nào ăn ngon, món nào người bệnh bỏ dở, món nào mất quá nhiều thời gian chuẩn bị. Sau đó, ưu tiên giữ các món dễ nấu, dễ ăn, dễ mua nguyên liệu. Thực đơn tốt không phải thực đơn “đẹp trên giấy”, mà là thực đơn gia đình có thể nấu thật và người bệnh có thể ăn thật trong nhiều tuần liên tiếp.</p>
      <p>Nếu nhà có người chăm sóc chính là người lớn tuổi, càng nên đơn giản hóa việc dùng planner. Chỉ cần chọn 2 đến 3 món “an toàn”, xoay vòng có kiểm soát, vẫn tốt hơn rất nhiều so với cố làm quá nhiều món rồi bỏ cuộc. Sự đều đặn luôn quan trọng hơn sự hoàn hảo.</p>
    `,
  },
  {
    slug: "kiem-soat-phospho-hang-ngay",
    title: "Kiểm soát phospho trong bữa ăn hằng ngày: điều người bệnh thận thường bỏ sót",
    date: "24/04/2026",
    image: BLOG_IMAGES["kiem-soat-phospho-hang-ngay"],
    metaTitle: "Kiểm soát phospho cho người bệnh thận | Những điều thường bị bỏ sót",
    metaDescription:
      "Giải thích cách kiểm soát phospho trong bữa ăn hằng ngày cho người bệnh thận, nhận diện thực phẩm nhiều phospho và giảm gánh nặng cho xương, tim mạch.",
    relatedSlugs: ["che-do-an-it-kali", "doc-nhan-thuc-pham-dong-goi", "uoc-luong-khau-phan-dam"],
    excerpt:
      "Phospho không chỉ đến từ nội tạng hay sữa mà còn ẩn trong nhiều thực phẩm tiện lợi. Bài viết này giúp nhận diện nguồn phospho, cách ưu tiên món ăn ít gánh nặng hơn cho thận và xương.",
    content: `
      <p>Khi nói đến chế độ ăn cho bệnh thận, nhiều người chỉ nhớ đến muối và kali mà quên mất phospho. Thực tế, phospho cao kéo dài có thể làm ngứa, mệt, rối loạn chuyển hóa xương, tăng nguy cơ lắng đọng canxi và ảnh hưởng đến tim mạch. Điều khó ở đây là phospho thường không tạo cảm giác rõ ràng ngay sau bữa ăn, nên người bệnh dễ chủ quan.</p>
      <p>Một hiểu lầm phổ biến là chỉ cần tránh nội tạng hoặc sữa là đủ. Thực tế, phospho còn có nhiều trong phô mai chế biến, sữa đặc, bột ngũ cốc pha sẵn, nước ngọt cola, xúc xích, thịt nguội, phô mai lát, bánh nướng công nghiệp, bột nở, phụ gia thực phẩm và nhiều món đóng gói tiện lợi. Đặc biệt, phospho từ phụ gia thường hấp thu cao hơn phospho tự nhiên trong thực phẩm.</p>
      <h3>Những nguyên tắc nên nhớ</h3>
      <ul>
        <li>Ưu tiên thực phẩm tươi thay vì thực phẩm chế biến sẵn.</li>
        <li>Ăn đạm vừa đủ theo chỉ định, không tăng thịt cá tùy ý để “bồi bổ”.</li>
        <li>Đọc bảng thành phần, lưu ý các chữ có gốc “phos” nếu dùng thực phẩm đóng gói.</li>
        <li>Không lạm dụng sữa, bột dinh dưỡng hoặc thực phẩm bổ sung nếu chưa được hướng dẫn.</li>
      </ul>
      <p>Trong bữa ăn gia đình, cách đơn giản nhất để giảm phospho là quay về với mô hình bữa cơ bản: cơm, đạm tươi vừa đủ, rau củ phù hợp và ít đồ chế biến công nghiệp. Một lát xúc xích, một viên phô mai hoặc một ly bột pha sẵn tưởng nhỏ nhưng nếu dùng hằng ngày sẽ tích lũy thành vấn đề lớn hơn nhiều so với món cá hấp hoặc thịt luộc nấu tại nhà.</p>
      <p>Nếu bác sĩ đã kê thuốc gắn phospho, người bệnh cũng cần dùng đúng thời điểm theo hướng dẫn, thường là đi cùng bữa ăn. Nhưng thuốc không thể thay thế hoàn toàn việc lựa chọn thực phẩm. Chế độ ăn hợp lý vẫn là nền quan trọng nhất để giảm gánh nặng cho thận và hỗ trợ kiểm soát xét nghiệm tốt hơn về lâu dài.</p>
    `,
  },
  {
    slug: "uoc-luong-khau-phan-dam",
    title: "Ước lượng khẩu phần đạm: ăn bao nhiêu là vừa cho người bệnh thận?",
    date: "24/04/2026",
    image: BLOG_IMAGES["uoc-luong-khau-phan-dam"],
    metaTitle: "Ước lượng khẩu phần đạm cho người bệnh thận | Ăn bao nhiêu là vừa?",
    metaDescription:
      "Bài viết chi tiết giúp ước lượng khẩu phần đạm phù hợp cho người bệnh thận, tránh ăn quá ít gây suy dinh dưỡng hoặc quá nhiều làm tăng gánh nặng cho thận.",
    relatedSlugs: ["lap-thuc-don-30-ngay", "kiem-soat-phospho-hang-ngay", "nhat-ky-an-uong-va-tai-kham"],
    excerpt:
      "Đạm quá ít dễ suy dinh dưỡng, nhưng quá nhiều lại tăng gánh nặng cho thận. Bài viết này hướng dẫn cách nhìn khẩu phần bằng mắt và tổ chức nguồn đạm hợp lý trong bữa ăn hằng ngày.",
    content: `
      <p>Đạm là nhóm chất khiến rất nhiều gia đình bối rối. Có người sợ thận yếu nên cắt gần hết thịt cá, làm người bệnh nhanh sút cân và mệt. Có người lại nghĩ càng ăn nhiều đạm càng khỏe, dẫn đến bữa nào cũng đầy thịt, trứng, sữa. Với bệnh thận, cả hai thái cực này đều không tốt.</p>
      <p>Mức đạm phù hợp phụ thuộc vào giai đoạn bệnh, cân nặng, tình trạng dinh dưỡng, có lọc máu hay không và chỉ định điều trị cụ thể. Tuy nhiên, trong bữa cơm hằng ngày, điều quan trọng nhất là giữ “đạm vừa phải”, không dồn quá nhiều trong một bữa và không tự ý tăng khẩu phần chỉ vì thấy người bệnh mệt hay chán ăn.</p>
      <h3>Cách nhìn khẩu phần bằng mắt</h3>
      <p>Với nhiều gia đình, cân điện tử trong bếp không phải lúc nào cũng tiện. Một cách dễ áp dụng là xem phần thịt/cá/gà cho một bữa tương đương khoảng một lòng bàn tay nhỏ hoặc một khúc vừa phải, thay vì một đĩa đầy. Nếu bữa đó đã có trứng hoặc đậu hũ, phần thịt cá nên giảm xuống. Nếu người bệnh ăn ít, nên ưu tiên đạm có chất lượng tốt và món chế biến mềm, dễ nuốt, dễ tiêu.</p>
      <h3>Cách chia đạm hợp lý trong ngày</h3>
      <ul>
        <li>Không dồn hết đạm vào buổi tối vì dễ nặng bụng và khó theo dõi khẩu phần.</li>
        <li>Luân phiên cá, gà, thịt nạc, trứng, đậu hũ để bữa ăn bớt ngán.</li>
        <li>Nếu đã dùng sữa dinh dưỡng, nên tính vào tổng lượng đạm trong ngày.</li>
        <li>Không lấy món “ít muối” làm lý do để ăn gấp đôi phần đạm.</li>
      </ul>
      <p>Người bệnh thận không cần sợ đạm đến mức chỉ ăn rau với cháo trắng kéo dài. Điều cần là biết lượng nào phù hợp với cơ thể mình ở giai đoạn hiện tại. Nếu gần đây người bệnh sút cân, yếu cơ, ăn kém hoặc albumin giảm, nên trao đổi sớm với bác sĩ hoặc chuyên gia dinh dưỡng để điều chỉnh thay vì tự cắt giảm kéo dài.</p>
      <p>Một bữa ăn tốt là bữa mà phần đạm vừa đủ, rau và tinh bột đi cùng để cơ thể sử dụng hiệu quả hơn, và người bệnh vẫn cảm thấy dễ ăn. Khi khẩu phần đạm được tổ chức đúng, bạn sẽ thấy việc lên thực đơn nhẹ nhàng hơn rất nhiều.</p>
    `,
  },
  {
    slug: "an-ngoai-khi-bi-benh-than",
    title: "Ăn ngoài khi bị bệnh thận: gọi món thế nào để đỡ mặn, đỡ rủi ro hơn",
    date: "24/04/2026",
    image: BLOG_IMAGES["an-ngoai-khi-bi-benh-than"],
    metaTitle: "Ăn ngoài khi bị bệnh thận | Cách gọi món an toàn hơn",
    metaDescription:
      "Gợi ý cách ăn ngoài khi bị bệnh thận: chọn quán, chọn món, dặn bếp và giảm rủi ro từ đồ ăn mặn, nhiều sốt hoặc khó kiểm soát khẩu phần.",
    relatedSlugs: ["giam-muoi-trong-bua-an", "doc-nhan-thuc-pham-dong-goi", "lap-thuc-don-30-ngay"],
    excerpt:
      "Không phải lúc nào cũng có thể nấu ở nhà. Bài viết này gợi ý cách chọn quán, chọn món và dặn bếp sao cho bữa ăn bên ngoài vẫn an toàn hơn cho người bệnh thận.",
    content: `
      <p>Nhiều người bệnh và gia đình cảm thấy rất áp lực mỗi khi phải ăn ngoài, đi đám, đi làm xa hoặc đi khám cả ngày. Thực tế, ăn ngoài không có nghĩa là thất bại với chế độ ăn bệnh thận. Điều quan trọng là chuẩn bị trước và biết nguyên tắc chọn món.</p>
      <p>Rủi ro lớn nhất của đồ ăn ngoài là mặn, nhiều nước sốt, nhiều phụ gia và khó kiểm soát khẩu phần. Các món kho đậm, lẩu, đồ nướng tẩm sẵn, mì nước đậm vị, thức ăn nhanh, đồ chiên giòn và món chế biến sẵn thường dễ vượt giới hạn natri hơn rất nhiều so với cảm nhận vị giác.</p>
      <h3>Nguyên tắc gọi món khi ăn ngoài</h3>
      <ul>
        <li>Ưu tiên món hấp, luộc, áp chảo nhẹ, canh thanh hoặc cơm phần đơn giản.</li>
        <li>Dặn quán “nêm nhạt”, “ít nước mắm”, “không thêm bột nêm/nước tương nếu được”.</li>
        <li>Xin nước chấm riêng để tự kiểm soát thay vì để bếp nêm sẵn.</li>
        <li>Tránh uống luôn phần nước dùng nếu món quá đậm vị.</li>
      </ul>
      <p>Nếu phải chọn giữa nhiều lựa chọn không hoàn hảo, hãy ưu tiên món ít sốt nhất và ít chế biến công nghiệp nhất. Ví dụ, một phần cơm trắng với gà luộc hoặc cá hấp sẽ an toàn hơn nhiều so với mì nước, gà rán, cơm chiên hay đồ nướng tẩm sốt. Nếu khẩu phần đạm bên ngoài có vẻ quá nhiều, bạn có thể chủ động ăn bớt phần thịt cá và tăng phần cơm hoặc rau phù hợp.</p>
      <p>Một mẹo nhỏ rất hữu ích là mang theo chai nước riêng và một món phụ an toàn nếu biết mình sẽ ra ngoài lâu. Chỉ cần chuẩn bị trước một chút, bạn sẽ bớt bị động và tránh phải chọn món vội vàng khi đã quá đói. Với bệnh thận, sự chuẩn bị nhỏ thường giúp giảm rất nhiều sai sót không đáng có.</p>
    `,
  },
  {
    slug: "doc-nhan-thuc-pham-dong-goi",
    title: "Đọc nhãn thực phẩm đóng gói: cách nhìn nhanh để tránh natri, phospho và đường ẩn",
    date: "24/04/2026",
    image: BLOG_IMAGES["doc-nhan-thuc-pham-dong-goi"],
    metaTitle: "Đọc nhãn thực phẩm đóng gói cho người bệnh thận | Cách nhìn nhanh",
    metaDescription:
      "Hướng dẫn đọc nhãn thực phẩm đóng gói cho người bệnh thận: nhận diện natri, phospho, đường ẩn và chọn sản phẩm an toàn hơn khi mua sắm.",
    relatedSlugs: ["giam-muoi-trong-bua-an", "kiem-soat-phospho-hang-ngay", "an-ngoai-khi-bi-benh-than"],
    excerpt:
      "Nhiều thực phẩm nhìn có vẻ lành mạnh nhưng lại chứa rất nhiều natri hoặc phụ gia. Bài viết này giúp gia đình đọc nhãn nhanh, biết nên ưu tiên gì và bỏ qua gì khi mua đồ đóng gói.",
    content: `
      <p>Đồ đóng gói ngày càng phổ biến vì tiện, nhanh và dễ dự trữ. Nhưng với người bệnh thận, đây cũng là nơi dễ phát sinh sai sót nhất. Rất nhiều sản phẩm gắn nhãn “healthy”, “ngũ cốc”, “ít béo” hoặc “ăn kiêng” vẫn có thể chứa nhiều natri, phospho phụ gia hoặc đường hơn tưởng tượng.</p>
      <p>Khi cầm một sản phẩm lên, đừng nhìn mặt trước quá lâu. Hãy lật ngay ra mặt sau để xem 3 phần quan trọng: khẩu phần ghi trên bao bì, lượng natri cho mỗi khẩu phần và bảng thành phần. Chỉ số trên mặt trước thường được dùng để quảng bá; phần dinh dưỡng và thành phần mới là nơi giúp bạn ra quyết định đúng.</p>
      <h3>Cần nhìn gì đầu tiên?</h3>
      <ul>
        <li>Lượng natri trên mỗi khẩu phần và số khẩu phần thật sự trong cả gói.</li>
        <li>Bảng thành phần: càng ngắn, càng dễ hiểu thường càng tốt hơn.</li>
        <li>Các phụ gia có gốc “phos” nếu bạn đang cần kiểm soát phospho.</li>
        <li>Lượng đường thêm vào, đặc biệt với ngũ cốc, sữa pha sẵn và snack.</li>
      </ul>
      <p>Một lỗi rất thường gặp là đọc natri theo khẩu phần rồi quên rằng cả gói có thể chứa 2 đến 3 khẩu phần. Ví dụ, một gói snack hoặc một ly mì nếu ăn hết sẽ đưa vào cơ thể lượng natri cao gấp nhiều lần con số ban đầu bạn nhìn thấy. Vì vậy, luôn nhìn cả “serving size” và “servings per container”.</p>
      <p>Nếu phải chọn giữa hai sản phẩm tương tự, hãy ưu tiên sản phẩm có natri thấp hơn, ít thành phần phụ gia hơn và ít từ ngữ khó hiểu hơn. Với người bệnh thận, mua sắm thông minh là bước đầu tiên để bữa ăn trong tuần nhẹ nhàng hơn. Bạn không cần trở thành chuyên gia dinh dưỡng trong siêu thị, chỉ cần tập trung vào vài chỉ số thật sự quan trọng.</p>
    `,
  },
  {
    slug: "nhat-ky-an-uong-va-tai-kham",
    title: "Nhật ký ăn uống và tái khám: ghi gì để bác sĩ dễ điều chỉnh thực đơn hơn",
    date: "24/04/2026",
    image: BLOG_IMAGES["nhat-ky-an-uong-va-tai-kham"],
    metaTitle: "Nhật ký ăn uống và tái khám cho người bệnh thận | Ghi gì cho hiệu quả",
    metaDescription:
      "Hướng dẫn ghi nhật ký ăn uống và theo dõi triệu chứng để bác sĩ, chuyên gia dinh dưỡng dễ điều chỉnh thực đơn cho người bệnh thận trong lần tái khám.",
    relatedSlugs: ["lap-thuc-don-30-ngay", "uoc-luong-khau-phan-dam", "che-do-an-it-kali"],
    excerpt:
      "Nhật ký ăn uống không cần cầu kỳ. Bài viết này hướng dẫn cách ghi ngắn gọn nhưng đủ hữu ích để lần tái khám sau bác sĩ hoặc chuyên gia dinh dưỡng có thể điều chỉnh thực đơn sát hơn.",
    content: `
      <p>Nhiều gia đình nghe đến “nhật ký ăn uống” là thấy ngại vì nghĩ phải ghi rất chi tiết, rất nhiều số liệu. Thực ra, một nhật ký tốt không cần dài. Điều cần nhất là ghi đúng những thứ giúp bác sĩ hiểu được người bệnh đang ăn như thế nào, có triệu chứng gì và món nào gây khó chịu hoặc phù hợp.</p>
      <p>Nhật ký ăn uống đặc biệt hữu ích khi người bệnh có kali hoặc phospho biến động, tăng huyết áp thất thường, chán ăn kéo dài, phù, sút cân hoặc nghi ngờ đang ăn quá mặn mà không nhận ra. Khi có ghi chép, việc điều chỉnh thực đơn sẽ cụ thể hơn rất nhiều so với chỉ nhớ mang máng “ăn cũng bình thường”.</p>
      <h3>Những thông tin nên ghi ngắn gọn mỗi ngày</h3>
      <ul>
        <li>Món chính đã ăn ở bữa trưa và bữa tối.</li>
        <li>Lượng ăn được: hết, còn nửa phần hay chỉ ăn vài miếng.</li>
        <li>Có uống thêm sữa, nước trái cây, ăn snack hay đồ đóng gói không.</li>
        <li>Cân nặng, huyết áp, phù chân, khó thở, đầy bụng hoặc chán ăn nếu có.</li>
      </ul>
      <p>Nếu không có thời gian ghi cả ngày, chỉ cần ghi những ngày có thay đổi bất thường hoặc những ngày gần xét nghiệm. Bạn cũng có thể dùng điện thoại chụp lại bữa ăn trong vài ngày liên tiếp, sau đó note nhanh thêm về lượng ăn được và cảm giác sau ăn. Đây là cách rất thực tế với người chăm sóc bận rộn.</p>
      <p>Trong lần tái khám, nhật ký này giúp bác sĩ và chuyên gia dinh dưỡng nhìn ra vấn đề nhanh hơn: người bệnh ăn quá ít đạm, đang dùng nhiều đồ tiện lợi, hay bị “quá tay” với nước chấm hoặc trái cây. Nhờ đó, việc điều chỉnh sẽ sát thực tế hơn và người bệnh cũng đỡ phải kiêng một cách mơ hồ.</p>
      <p>Điều cuối cùng cần nhớ là nhật ký ăn uống không phải để tự trách mình. Nó là công cụ để hiểu cơ thể hơn. Càng ghi đơn giản nhưng đều, bạn càng có cơ sở để giữ thực đơn phù hợp lâu dài và an toàn hơn cho thận.</p>
    `,
  },
];

function repairMojibake(value) {
  if (typeof value !== "string") return value;
  if (!/[ÃƒÃ‚Ã†Ã„Ã…ÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿Ã¢]/.test(value)) {
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
  return /(?:Ãƒ.|Ã‚.|Ã†.|Ã„.|Ã….|Ã¡Âº|Ã¡Â»|Ã¢.|[\uFFFD])/u.test(value);
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
    metaTitle: repairMojibakeRobust(post.metaTitle),
    metaDescription: repairMojibakeRobust(post.metaDescription),
    excerpt: repairMojibakeRobust(post.excerpt),
    content: repairMojibakeRobust(post.content),
  };
}

export const POSTS = RAW_POSTS.map(normalizePost);
