/**
 * VSTEP WRITING TASK 01 - B2 NÂNG CAO
 * Cơ sở dữ liệu Lý thuyết tổng quan & Dàn ý chuẩn mới nhất (Chuẩn VSTEP B2)
 * Cập nhật chuẩn xác theo chuẩn VSTEP B2
 */

const OVERVIEW_THEORY = {
  intro: {
    title: "TỔNG QUAN VSTEP WRITING TASK 01 (BAND B2)",
    subtitle: "Kỹ năng Viết thư tương tác - Chiếm 1/3 tổng số điểm bài thi Viết VSTEP (Định dạng ĐGNLLNN bậc 3-5)",
    summary: "Trong bài thi VSTEP Writing, Task 01 yêu cầu thí sinh viết một bức thư/email có độ dài tối thiểu 120 từ để phản hồi lại một tình huống giao tiếp cụ thể trong đời sống hoặc công việc. Để đạt chuẩn B2 (tương đương 6.0 - 8.0/10 điểm Writing), bài viết phải thể hiện được sự linh hoạt về từ vựng học thuật, ngữ pháp đa dạng và bố cục 5 phần hoàn chỉnh chuẩn B2."
  },
  time_strategy: [
    {
      phase: "BƯỚC 1: PHÂN TÍCH ĐỀ & LẬP DÀN Ý (3 PHÚT)",
      icon: "fa-magnifying-glass",
      tasks: [
        "Xác định 4 câu hỏi phân tích đề: Người nhận là ai? Mục đích bức thư là gì? Thư thân mật, trang trọng hay bán trang trọng? Có những yêu cầu gì trong thư?",
        "Gạch chân chính xác 3 - 4 yêu cầu (bullet points) bắt buộc phải trả lời trong đề.",
        "Xác định đúng dạng thư: Thư cho lời khuyên / gợi ý (Advice/Suggestions) hay Thư yêu cầu (Request)...",
        "Lên nhanh 1-2 từ vựng chủ đề hoặc ý tưởng cho mỗi gạch đầu dòng."
      ]
    },
    {
      phase: "BƯỚC 2: VIẾT BÀI THEO KHUNG 5 BƯỚC (14 PHÚT)",
      icon: "fa-pen-fancy",
      tasks: [
        "1. Lời chào mở đầu (Salutation) đúng văn phong theo người nhận.",
        "2. Mở thư (Opening) áp dụng đúng mẫu câu chuẩn B2.",
        "3. Thân thư (Body) giải quyết trọn vẹn từng yêu cầu của đề bằng các mẫu câu chức năng B2 và từ nối gợi ý.",
        "4. Kết thư (Closing) đúng thể thức.",
        "5. Lời chào kết thúc (Sign-off) chuẩn chỉnh (Best wishes / Yours sincerely / Yours faithfully)."
      ]
    },
    {
      phase: "BƯỚC 3: ĐỌC SOÁT LỖI & ĐẾM TỪ (3 PHÚT)",
      icon: "fa-spell-check",
      tasks: [
        "Đảm bảo bài viết đạt từ 130 - 160 từ (vượt mức tối thiểu 120 từ an toàn).",
        "Soát lỗi chia động từ, mạo từ (a/an/the), danh từ số ít/số nhiều.",
        "Kiểm tra tính nhất quán về văn phong: Tuyệt đối KHÔNG viết tắt (don't, can't, I'm) trong thư trang trọng (Formal).",
        "Kiểm tra dấu câu (dấu phẩy sau lời chào, sau liên từ; dấu chấm câu rõ ràng)."
      ]
    }
  ],
  criteria: [
    {
      id: "task_fulfillment",
      code: "TF",
      title: "Task Fulfillment (Hoàn thành nhiệm vụ)",
      weight: "25%",
      b2_target: "Đạt Band 6.0 - 8.0",
      description: "Đánh giá mức độ hoàn thành đầy đủ các yêu cầu của đề bài, độ dài bài viết và tính phù hợp của văn phong.",
      requirements: [
        "Trả lời đầy đủ và mở rộng thích đáng tất cả các gợi ý (bullet points) trong đề bài.",
        "Đạt độ dài tối thiểu 120 từ (lý tưởng: 135 - 165 từ).",
        "Văn phong giao tiếp nhất quán từ đầu đến cuối (Thân mật hoặc Trang trọng).",
        "Có đầy đủ lời chào mở đầu và lời chào kết thúc phù hợp với đối tượng nhận thư."
      ]
    },
    {
      id: "organization",
      code: "OR",
      title: "Organization (Bố cục & Tính liên kết)",
      weight: "25%",
      b2_target: "Đạt Band 6.0 - 8.0",
      description: "Đánh giá cấu trúc bức thư, cách phân chia đoạn và việc sử dụng từ nối chuyển tiếp.",
      requirements: [
        "Bố cục rõ ràng gồm 5 phần chuẩn VSTEP B2 (Salutation ➔ Opening ➔ Body ➔ Closing ➔ Sign-off).",
        "Phân chia các đoạn văn hợp lý, mỗi đoạn có một trọng tâm ý rõ ràng.",
        "Sử dụng các chuỗi liên từ nối chuẩn B2 (First of all, when it comes to..., As for..., Regarding..., Last but not least...).",
        "Chuyển đoạn mượt mà, tự nhiên, không bị rời rạc hoặc lặp lại một liên từ quá nhiều lần."
      ]
    },
    {
      id: "vocabulary",
      code: "LR",
      title: "Vocabulary / Lexical Resource (Vốn từ vựng)",
      weight: "25%",
      b2_target: "Đạt Band 6.0 - 8.0",
      description: "Đánh giá sự phong phú, chính xác và tự nhiên của từ vựng theo chủ đề B2.",
      requirements: [
        "Sử dụng từ vựng đa dạng, có nhiều cụm từ cố định (Collocations) và cấu trúc câu đắt giá.",
        "Tránh lặp lại nguyên văn các từ ngữ trong đề bài (Paraphrase linh hoạt).",
        "Sử dụng từ ngữ học thuật và trang trọng trong thư Formal (ví dụ: 'inquire' thay vì 'ask', 'provide' thay vì 'give').",
        "Kiểm soát tốt chính tả, dùng đúng giới từ đi kèm động từ/tính từ."
      ]
    },
    {
      id: "grammar",
      code: "GRA",
      title: "Grammar & Accuracy (Ngữ pháp & Độ chính xác)",
      weight: "25%",
      b2_target: "Đạt Band 6.0 - 8.0",
      description: "Đánh giá sự đa dạng của các cấu trúc câu và mức độ chính xác ngữ pháp.",
      requirements: [
        "Kết hợp nhuần nhuyễn giữa câu đơn, câu ghép và câu phức.",
        "Áp dụng các cấu trúc B2 điểm cao: Câu điều kiện (If I were you, I would...), Cấu trúc V-ing (You could consider + V-ing, It might be worth + V-ing), Thể bị động, Mệnh đề quan hệ.",
        "Kiểm soát chính xác thì của động từ, sự hòa hợp giữa chủ ngữ và vị ngữ.",
        "Hiếm khi mắc lỗi gây hiểu lầm cho người đọc."
      ]
    }
  ],
  register_matrix: [
    {
      element: "Đối tượng nhận thư",
      informal: "Bạn bè thân thiết, đồng nghiệp thân, thành viên trong gia đình.",
      formal: "Người tuyển dụng, quản lý trung tâm/khách sạn, ban giám hiệu, người chưa từng quen biết."
    },
    {
      element: "Lời chào mở đầu (Salutation)",
      informal: "Dear + Tên (Dear Helen, Dear Tom,)",
      formal: "Dear Mr./Ms. + Họ (Dear Mr. Smith,) hoặc Dear Sir / Dear Madam / Dear Sir/Madam,"
    },
    {
      element: "Mở đầu thư (Opening)",
      informal: "Thanks for your letter. How have you been lately? After thinking about your situation... / How have you been lately? I’m writing to ask a few questions about...",
      formal: "I am writing to request some information about [thứ cần xin thông tin], as I am interested in [mục đích] and would like to learn more before making a decision. (hoặc: I am writing to formally request further details regarding [thứ cần xin thông tin], as I am planning to [mục đích].)"
    },
    {
      element: "Dùng từ viết tắt (Contractions)",
      informal: "Được phép viết tắt (I'm, don't, can't, it's...)",
      formal: "TUYỆT ĐỐI KHÔNG VIẾT TẮT (I am, do not, cannot, it is...)"
    },
    {
      element: "Lựa chọn từ vựng (Word Choice)",
      informal: "Từ ngữ thân mật, gần gũi (ask, tell, buy, need, give)",
      formal: "Từ ngữ trang trọng, lịch sự (inquire about, request, provide, clarify, require)"
    },
    {
      element: "Liên từ chuyển ý (Connectors)",
      informal: "First of all, when it comes to... / Besides that, ... / On top of that, ... / Last but not least, ...",
      formal: "To begin with, ... / In addition, ... / Furthermore, ... / Finally, ..."
    },
    {
      element: "Kết thư (Closing)",
      informal: "I hope you find my suggestions helpful. Let me know how things go. / I’d really appreciate your help with this. Write back soon.",
      formal: "Thank you for your time. I look forward to hearing from you."
    },
    {
      element: "Lời chào kết thúc (Sign-off)",
      informal: "Best wishes,",
      formal: "Yours faithfully, (khi chào Dear Sir/Madam) / Yours sincerely, (khi chào Dear Mr./Ms. + Họ)"
    }
  ],
  connectors_bank: {
    advice_chain: [
      { en: "First of all, when it comes to [yêu cầu 1], ...", vi: "Trước hết, khi nhắc đến [yêu cầu 1], ..." },
      { en: "As for [yêu cầu 2], ...", vi: "Còn về [yêu cầu 2], ..." },
      { en: "Regarding [yêu cầu 3], ...", vi: "Liên quan đến [yêu cầu 3], ..." },
      { en: "Last but not least, [yêu cầu 4], ...", vi: "Cuối cùng nhưng không kém phần quan trọng, ..." }
    ],
    request_informal_chain: [
      { en: "First of all, ...", vi: "Trước hết..." },
      { en: "Besides that, ...", vi: "Bên cạnh đó..." },
      { en: "On top of that, ...", vi: "Thêm vào đó nữa là..." },
      { en: "Finally, ...", vi: "Cuối cùng..." }
    ],
    request_formal_chain: [
      { en: "To begin with, ...", vi: "Trước hết / Đầu tiên..." },
      { en: "In addition, ...", vi: "Ngoài ra / Thêm vào đó..." },
      { en: "Furthermore, ...", vi: "Hơn thế nữa..." },
      { en: "Finally, ...", vi: "Cuối cùng..." }
    ]
  },
  pitfalls: [
    {
      title: "1. Bỏ qua 4 câu hỏi phân tích đề",
      desc: "Không xác định rõ người nhận và văn phong (Informal hay Formal) dẫn đến dùng sai lời chào, viết tắt bừa bãi hoặc dùng từ sai ngữ cảnh."
    },
    {
      title: "2. Viết không đủ 120 từ",
      desc: "Nhiều bạn chỉ viết 80 - 100 từ dẫn đến bị trừ nặng điểm Task Fulfillment (rớt xuống Band 4 hoặc 5)."
    },
    {
      title: "3. Không áp dụng cấu trúc câu khuyên/yêu cầu đa dạng",
      desc: "Lặp lại liên tục 'You should' hoặc 'Can you' từ đầu đến cuối thay vì phối hợp 'If I were you, I would', 'You could consider + V-ing', 'It would be a good idea to', 'I would appreciate it if you could provide...'."
    },
    {
      title: "4. Dùng liên từ rời rạc, không mượt mà",
      desc: "Không sử dụng chuỗi liên từ chuẩn B2 (First of all, when it comes to... As for... Regarding... Last but not least...). "
    },
    {
      title: "5. Quên cách đoạn giữa 5 phần",
      desc: "Viết bài thành một khối liền tù tì không phân cách giữa Lời chào, Mở bài, Thân bài và Kết thư khiến bài thi bị mất điểm Organization."
    }
  ]
};

// ==========================================================================
// 2 DẠNG THƯ TRỌNG TÂM (CHUẨN VSTEP B2)
// ==========================================================================
const B2_CATEGORY_THEORY = {
  advice: {
    category_id: "advice",
    title_vi: "Thư cho lời khuyên hoặc gợi ý",
    title_en: "Letter of Advice or Suggestions",
    badge: "TYPE 01 - B2 LEVEL",
    purpose: "Đưa ra lời khuyên hoặc gợi ý phù hợp với tình huống của đề bài giúp người nhận giải quyết khó khăn, chuẩn bị cho chuyến đi du lịch, học tập hoặc lựa chọn quyết định.",
    typical_register: "Chủ yếu là thư thân mật (Informal Letter).",
    signs: [
      "advice / give me some advice / ask for advice",
      "suggestions / recommendations",
      "What should I do…? / What would you suggest…?",
      "I need your help with…",
      "Could you give me some advice on…?",
      "I’m not sure how to…",
      "I’m having trouble with…",
      "What would be the best way to…?",
      "I would appreciate any suggestions you could give me.",
      "Can you recommend anything that might help me…?"
    ],
    b2_power_structures: [
      { pattern: "I think you should + Vo.", meaning: "Tớ nghĩ cậu nên...", example: "I think you should book your hotel in advance to avoid high prices." },
      { pattern: "You may want to + Vo.", meaning: "Cậu có thể muốn...", example: "You may want to try famous local dishes like Pho and Bun Cha." },
      { pattern: "It would be a good idea to + Vo.", meaning: "Sẽ là một ý kiến hay nếu...", example: "It would be a good idea to visit Hoan Kiem Lake in the evening." },
      { pattern: "If I were you, I would + Vo.", meaning: "Nếu tớ là cậu, tớ sẽ...", example: "If I were you, I would take a walk around the Old Quarter on weekends." },
      { pattern: "You could try + V-ing. / You could consider + V-ing.", meaning: "Cậu có thể thử / cân nhắc việc...", example: "You could consider packing light cotton clothes because June is very hot." },
      { pattern: "Remember to + Vo. / Don't forget to + Vo.", meaning: "Hãy nhớ... / Đừng quên...", example: "Remember to bring an umbrella since sudden summer rain is quite common." },
      { pattern: "It might be worth + V-ing.", meaning: "Có lẽ rất đáng để...", example: "It might be worth waking up early to enjoy the peaceful morning atmosphere." },
      { pattern: "I would recommend + V-ing.", meaning: "Tớ rất khuyên cậu nên...", example: "I would recommend downloading popular transport apps for easy travel." }
    ],
    connectors_hint: "First of all, when it comes to___,  … → As for___, … → Regarding ___, … → Last but not least, …",
    analysis_questions: [
      "Người nhận là ai?",
      "Mục đích bức thư là gì?",
      "Đây là thư thân mật, trang trọng, hay bán trang trọng?",
      "Có những yêu cầu gì trong thư?"
    ]
  },

  request: {
    category_id: "request",
    title_vi: "Thư yêu cầu",
    title_en: "Letter of Request",
    badge: "TYPE 02 - B2 LEVEL",
    purpose: "Dùng để xin thông tin, xin giúp đỡ hoặc đề nghị điều gì đó. Thư có thể là thư thân mật, bán trang trọng hoặc trang trọng tùy thuộc vào người nhận.",
    typical_register: "Thân mật (Informal), Bán trang trọng (Semi-formal) hoặc Trang trọng (Formal).",
    signs: [
      "ask for information about…",
      "request information about…",
      "ask about…",
      "would like to know…",
      "would like to learn more about…",
      "inquire about…",
      "ask someone for more details about…",
      "find out more about…"
    ],
    b2_power_structures: [
      { pattern: "Can you give me more information about …? (Thân mật)", meaning: "Cậu có thể cho tớ thêm thông tin về...", example: "Can you give me more information about the tuition fee and schedule?" },
      { pattern: "Can you tell me more about …? (Thân mật)", meaning: "Cậu có thể kể cho tớ thêm về...", example: "Can you tell me more about the teachers and their teaching style?" },
      { pattern: "I’d like to learn more about … (Thân mật)", meaning: "Tớ muốn tìm hiểu thêm về...", example: "I’d like to learn more about the training program and practice materials." },
      { pattern: "I’d like to get more details about … (Thân mật)", meaning: "Tớ muốn biết thêm chi tiết về...", example: "I’d like to get more details about the center's location and facilities." },
      { pattern: "Could you provide me with more information about …? (Trang trọng)", meaning: "Xin ông/bà vui lòng cung cấp thêm thông tin về...", example: "Could you provide me with more information about the course prerequisites?" },
      { pattern: "Could you give me more details about …? (Trang trọng)", meaning: "Xin ông/bà cho tôi biết thêm chi tiết về...", example: "Could you give me more details regarding the installment payment options?" },
      { pattern: "I would appreciate it if you could provide more information about … (Trang trọng)", meaning: "Tôi sẽ rất cảm kích nếu ông/bà có thể cung cấp thêm thông tin về...", example: "I would appreciate it if you could provide more information about the class timetable." },
      { pattern: "I would also like to know more about … (Trang trọng)", meaning: "Tôi cũng rất muốn biết thêm về...", example: "I would also like to know more about the scholarship opportunities available." }
    ],
    connectors_hint: "Thân mật: First of all, … → Besides that, … → On top of that, … → Finally, … | Trang trọng: To begin with, … → In addition, … → Furthermore, … → Finally, …",
    analysis_questions: [
      "Người nhận là ai?",
      "Mục đích bức thư là gì?",
      "Đây là thư thân mật, trang trọng, hay bán trang trọng?",
      "Có những yêu cầu gì trong thư?"
    ]
  },

  description: {
    category_id: "description",
    title_vi: "Thư mô tả",
    title_en: "Letter of Description",
    badge: "TYPE 03 - B2 LEVEL",
    purpose: "Dùng để cung cấp thông tin hoặc mô tả một người, địa điểm, sự vật, sự kiện hay trải nghiệm cụ thể theo yêu cầu của người nhận.",
    typical_register: "Thân mật (Informal), Bán trang trọng (Semi-formal) hoặc Trang trọng (Formal), tùy thuộc vào người nhận và mục đích giao tiếp.",
    signs: [
      "describe … / write a letter to describe …",
      "tell me more about …",
      "tell me what … is like",
      "give me some information about …",
      "provide details about …",
      "tell me a little about …",
      "explain what … is like"
    ],
    distinction_note: "LƯU Ý QUAN TRỌNG: 'give information about' và 'provide details about' cũng có thể xuất hiện trong dạng Letter of Request. Vì vậy, cần xác định dạng bài dựa trên mục đích giao tiếp: người viết đang cung cấp thông tin/mô tả hay đang yêu cầu người khác cung cấp thông tin. Cần xác định dạng bài dựa trên vai trò giao tiếp của người viết: cung cấp thông tin theo yêu cầu của người nhận hay chủ động yêu cầu người khác cung cấp thông tin.",
    b2_power_structures: [
      { pattern: "How have you been lately? In your letter, you asked me about [chủ đề], so I’d be happy to share some details with you.", meaning: "Mở thư thân mật khi được yêu cầu cung cấp thông tin.", example: "How have you been lately? In your letter, you asked me about my friend Hoa, so I’d be happy to share some details with you." },
      { pattern: "I hope this letter finds you well. In your letter, you requested information about [chủ đề], so I am writing to provide you with the relevant details.", meaning: "Mở thư trang trọng / bán trang trọng khi được yêu cầu cung cấp thông tin.", example: "I hope this letter finds you well. In your letter, you requested information about our exchange program, so I am writing to provide you with the relevant details." },
      { pattern: "How have you been lately? You asked me to describe [đối tượng], so let me tell you a little more about it.", meaning: "Mở thư thân mật khi được yêu cầu mô tả một đối tượng hoặc sự việc.", example: "How have you been lately? You asked me to describe our recent cycling competition, so let me tell you a little more about it." },
      { pattern: "I hope this letter finds you well. You asked me to describe [đối tượng], so I am writing to provide you with a detailed description.", meaning: "Mở thư trang trọng / bán trang trọng khi được yêu cầu mô tả một đối tượng.", example: "I hope this letter finds you well. You asked me to describe the accommodation facilities, so I am writing to provide you with a detailed description." },
      { pattern: "To begin with, regarding [chủ đề], …", meaning: "Trước hết, xét về khía cạnh... (Cụm chuyển ý B2 đắt giá)", example: "To begin with, regarding her personality, Hoa is an extremely kind-hearted and considerate person." },
      { pattern: "In addition, in terms of [chủ đề], …", meaning: "Ngoài ra, xét về mặt... (Phát triển luận điểm 2 mượt mà)", example: "In addition, in terms of her hobbies, she is genuinely passionate about reading contemporary literature and cooking." },
      { pattern: "Furthermore, as for [chủ đề], …", meaning: "Hơn thế nữa, liên quan đến... (Phát triển luận điểm 3)", example: "Furthermore, as for her current study, she has recently graduated with an honors degree in finance." },
      { pattern: "I hope you find this information helpful. Let me know if you need any more details.", meaning: "Lời kết thư thân mật chuẩn B2.", example: "I hope you find this information helpful. Let me know if you need any more details." },
      { pattern: "I hope the information provided is helpful. Please feel free to contact me if you require any further details.", meaning: "Lời kết thư trang trọng & bán trang trọng chuẩn B2.", example: "I hope the information provided is helpful. Please feel free to contact me if you require any further details." }
    ],
    connectors_hint: "To begin with, … → In addition, … → Furthermore, … → Finally, … (kèm cụm chuyển ý: As for ___, … | In terms of ___, … | Regarding ___, …)",
    analysis_questions: [
      "Người nhận là ai?",
      "Mục đích bức thư là gì?",
      "Đây là thư thân mật, trang trọng, hay bán trang trọng?",
      "Có những yêu cầu gì trong thư?"
    ]
  },

  complaint: {
    category_id: "complaint",
    title_vi: "Thư phàn nàn",
    title_en: "Letter of Complaint",
    badge: "TYPE 04 - B2 LEVEL",
    purpose: "Bày tỏ sự không hài lòng về chất lượng sản phẩm, dịch vụ hoặc tiện ích, giải thích cảm xúc và đề xuất các giải pháp khắc phục thỏa đáng.",
    typical_register: "Thư phàn nàn thường sử dụng phong cách trang trọng hoặc bán trang trọng, tùy thuộc vào người nhận và mối quan hệ giữa hai bên.",
    signs: [
      "complain about …",
      "express dissatisfaction with …",
      "be unhappy with …",
      "be disappointed with …",
      "report a problem with …",
      "describe the problems you experienced with …",
      "explain why you were dissatisfied with …",
      "suggest what should be done to improve …"
    ],
    distinction_note: "Không nhất thiết đề bài phải có từ complain. Nếu đề yêu cầu mô tả vấn đề, giải thích sự không hài lòng và đề xuất cách cải thiện, người viết vẫn có thể triển khai theo dạng Letter of Complaint.",
    b2_power_structures: [
      {
        pattern: "I am writing to express my dissatisfaction with … I recently [used/bought/experienced] …, and I was disappointed with the experience.",
        meaning: "Tôi viết thư này để bày tỏ sự không hài lòng với [vấn đề]. Gần đây tôi đã [sử dụng/mua/trải nghiệm] [sản phẩm/dịch vụ], và tôi đã thất vọng với trải nghiệm này.",
        example: "I am writing to express my dissatisfaction with the condition of the changing room at your sports center. I recently used this facility, and I was disappointed with the experience."
      },
      {
        pattern: "The main problem was that …",
        meaning: "Vấn đề chính là...",
        example: "The main problem was that the changing room was not cleaned on a regular basis, leaving the floor wet and slippery."
      },
      {
        pattern: "Another concern was that …",
        meaning: "Một mối bận tâm khác là...",
        example: "Another concern was that several lockers were broken and could not be locked securely."
      },
      {
        pattern: "A further issue was that …",
        meaning: "Một vấn đề nữa là...",
        example: "A further issue was that an unpleasant odor lingered in the room due to poor ventilation."
      },
      {
        pattern: "To begin with, … → In addition, … → What made the situation worse was that …",
        meaning: "Trước hết,... → Ngoài ra,... → Điều làm cho tình huống tệ hơn là...",
        example: "To begin with, the floor was slippery. In addition, many lockers were broken. What made the situation worse was that there was no hot water in the showers."
      },
      {
        pattern: "I was particularly disappointed with this experience because I expected a better level of quality and service.",
        meaning: "Tôi đặc biệt thất vọng với trải nghiệm này vì tôi đã kỳ vọng mức chất lượng và dịch vụ tốt hơn.",
        example: "I was particularly disappointed with this experience because I expected a better level of quality and service from a reputable center."
      },
      {
        pattern: "I would appreciate it if you could [đề xuất giải pháp cụ thể].",
        meaning: "Tôi sẽ rất cảm kích nếu quý vị có thể [đề xuất giải pháp cụ thể].",
        example: "I would appreciate it if you could arrange for the changing room to be cleaned and inspected much more frequently."
      },
      {
        pattern: "I strongly recommend that the management [đề xuất giải pháp cụ thể].",
        meaning: "Tôi tha thiết đề xuất rằng ban quản lý [đề xuất giải pháp cụ thể].",
        example: "I strongly recommend that the management repair the faulty lockers and upgrade the ventilation system immediately."
      },
      {
        pattern: "I believe that steps should be taken to [biện pháp cần thực hiện].",
        meaning: "Tôi tin rằng các biện pháp cần được thực hiện để [biện pháp cần thực hiện].",
        example: "I believe that steps should be taken to ensure a clean, safe, and pleasant environment for all members."
      },
      {
        pattern: "I hope that these issues will be addressed promptly. I look forward to hearing from you soon.",
        meaning: "Tôi hy vọng những vấn đề này sẽ được giải quyết kịp thời. Tôi rất mong sớm nhận được hồi âm từ quý vị.",
        example: "I hope that these issues will be addressed promptly. I look forward to hearing from you soon."
      }
    ],
    connectors_hint: "To begin with, [vấn đề 1] … → In addition, [vấn đề 2] … → What made the situation worse was that [vấn đề 3] …",
    analysis_questions: [
      "Người nhận là ai?",
      "Mục đích bức thư là gì?",
      "Đây là thư thân mật, trang trọng, hay bán trang trọng?",
      "Có những yêu cầu gì trong thư?"
    ]
  },

  feedback: {
    category_id: "feedback",
    title_vi: "Thư phản hồi, đánh giá",
    title_en: "Letter of Feedback",
    badge: "TYPE 05 - B2 LEVEL",
    purpose: "Đưa ra đánh giá, nhận xét khách quan về một khóa học, sự kiện hoặc dịch vụ đã trải nghiệm (khen ngợi điểm tốt và góp ý điểm cần khắc phục).",
    typical_register: "Bán trang trọng (Semi-formal) hoặc Trang trọng (Formal).",
    signs: [
      "give feedback on...",
      "write a review...",
      "comment on...",
      "share your opinions about...",
      "evaluate...",
      "suggestions for improvement..."
    ],
    b2_power_structures: [
      { pattern: "I am writing to give my feedback on …", meaning: "Tôi/Tớ viết thư để đưa ra phản hồi, đánh giá về...", example: "I am writing to give my feedback on the recent workshop organized by your department." },
      { pattern: "I was particularly impressed by …", meaning: "Tôi đặc biệt ấn tượng bởi...", example: "I was particularly impressed by the insightful presentations and the practical case studies shared." },
      { pattern: "The aspect I found most rewarding was …", meaning: "Khía cạnh tôi thấy hữu ích nhất chính là...", example: "The aspect I found most rewarding was the interactive group discussion session." },
      { pattern: "However, there are still a few areas that could be improved.", meaning: "Tuy nhiên, vẫn còn một vài khía cạnh có thể cải thiện thêm.", example: "However, there are still a few areas that could be improved, particularly the time management." },
      { pattern: "One drawback was that …", meaning: "Một điểm hạn chế là...", example: "One drawback was that the breakout rooms were somewhat cramped for large group activities." },
      { pattern: "I would recommend that you allocate more time for …", meaning: "Tôi khuyến nghị quý vị nên dành thêm thời gian cho...", example: "I would recommend that you allocate more time for direct Q&A sessions with the guest speakers." },
      { pattern: "It would be better if you could provide …", meaning: "Sẽ tốt hơn nhiều nếu quý ban có thể cung cấp...", example: "It would be better if you could provide hand-out materials and slide decks prior to the seminar." },
      { pattern: "I hope these comments will be helpful for your upcoming events.", meaning: "Tôi hy vọng những đóng góp này sẽ hữu ích cho các sự kiện sắp tới.", example: "I hope these comments will be helpful for improving the quality of future training sessions." }
    ],
    connectors_hint: "First of all, regarding the positive aspects, … → Furthermore, … → However, one drawback was that … → In conclusion, …",
    analysis_questions: [
      "Người nhận là ai?",
      "Mục đích bức thư là gì?",
      "Đây là thư thân mật, trang trọng hay bán trang trọng?",
      "Có những điểm cộng và điểm cần cải thiện nào?"
    ]
  },

  apology: {
    category_id: "apology",
    title_vi: "Thư xin lỗi",
    title_en: "Letter of Apology",
    badge: "TYPE 06 - B2 LEVEL",
    purpose: "Bày tỏ lời xin lỗi chân thành vì đã không thể tham gia sự kiện, làm lỡ hẹn, gây ra sơ suất hoặc thiệt hại và đề xuất phương án bù đắp, chuộc lỗi.",
    typical_register: "Thân mật (Informal) hoặc Trang trọng (Formal).",
    signs: [
      "apologize for...",
      "say sorry for...",
      "express regret...",
      "make an apology...",
      "could not attend...",
      "missed the event..."
    ],
    b2_power_structures: [
      { pattern: "I am writing to sincerely apologize for …", meaning: "Tôi/Tớ viết thư này để chân thành xin lỗi vì...", example: "I am writing to sincerely apologize for not being able to attend your farewell party last night." },
      { pattern: "I’m really sorry that I couldn’t + Vo because …", meaning: "Tớ thực sự xin lỗi vì đã không thể... bởi vì...", example: "I’m really sorry that I couldn’t meet you as promised because my flight was unexpectedly delayed." },
      { pattern: "I feel terrible about not being able to …", meaning: "Tớ cảm thấy vô cùng áy náy vì đã không thể...", example: "I feel terrible about missing your graduation ceremony due to an urgent family emergency." },
      { pattern: "I didn’t mean to cause any inconvenience, but …", meaning: "Tớ không hề cố ý gây bất tiện, nhưng...", example: "I didn’t mean to let you down, but unexpected overtime work kept me at the office until midnight." },
      { pattern: "The reason why I could not attend was that …", meaning: "Lý do tôi không thể có mặt là vì...", example: "The reason why I could not attend the scheduled meeting was that I suffered from a severe migraine." },
      { pattern: "I regret that I was unable to inform you in advance.", meaning: "Tôi rất lấy làm tiếc vì đã không thể báo trước cho bạn/quý vị.", example: "I regret that I was unable to inform you in advance due to network connection issues on my phone." },
      { pattern: "Let me make it up to you by + V-ing …", meaning: "Hãy để tớ chuộc lỗi bằng cách...", example: "Let me make it up to you by treating you to dinner at your favorite Italian restaurant this weekend." },
      { pattern: "To make up for my mistake, I would like to + Vo …", meaning: "Để đền bù cho sơ suất của mình, tôi xin được...", example: "To make up for my mistake, I would like to reschedule our appointment at your earliest convenience." }
    ],
    connectors_hint: "Thân mật: First, I’m really sorry that … → The reason was that … → Let me make it up to you by … | Trang trọng: To begin with, … → The reason was that … → To make up for this, …",
    analysis_questions: [
      "Người nhận là ai?",
      "Mục đích bức thư là gì?",
      "Đây là thư thân mật hay trang trọng?",
      "Lý do của sự cố là gì và có hành động đền bù cụ thể nào?"
    ]
  },

  application: {
    category_id: "application",
    title_vi: "Thư ứng tuyển",
    title_en: "Letter of Application",
    badge: "TYPE 07 - B2 LEVEL",
    purpose: "Bày tỏ nguyện vọng ứng tuyển vào một vị trí công việc bán thời gian, chương trình tình nguyện, học bổng hoặc câu lạc bộ.",
    typical_register: "Chủ yếu là thư Trang trọng (Formal).",
    signs: [
      "apply for the position of...",
      "volunteer application...",
      "job application...",
      "apply to join...",
      "express my interest in..."
    ],
    b2_power_structures: [
      { pattern: "I am writing to express my keen interest in the position of …", meaning: "Tôi viết thư này để bày tỏ sự quan tâm sâu sắc tới vị trí...", example: "I am writing to express my keen interest in the volunteer English tutor position at your club." },
      { pattern: "I believe my background and skills make me a strong candidate for …", meaning: "Tôi tin rằng nền tảng và kỹ năng của mình giúp tôi là một ứng viên tiềm năng cho...", example: "I believe my background in pedagogy and fluency in English make me a strong candidate." },
      { pattern: "During my previous role as …, I was responsible for …", meaning: "Trong vai trò trước đây là..., tôi chịu trách nhiệm về...", example: "During my previous role as a class leader, I was responsible for organizing extracurricular activities." },
      { pattern: "I have developed strong communication and problem-solving skills.", meaning: "Tôi đã trau dồi được kỹ năng giao tiếp và giải quyết vấn đề xuất sắc.", example: "I have developed strong communication and problem-solving skills through various team projects." },
      { pattern: "I am particularly drawn to this opportunity because …", meaning: "Tôi đặc biệt bị thu hút bởi cơ hội này vì...", example: "I am particularly drawn to this opportunity because of your organization's inspiring educational mission." },
      { pattern: "I am confident that I can contribute effectively to your team.", meaning: "Tôi tự tin rằng mình có thể đóng góp hiệu quả vào đội ngũ của quý vị.", example: "I am confident that I can contribute effectively to your upcoming community outreach campaigns." },
      { pattern: "I have attached my updated CV for your detailed review.", meaning: "Tôi xin đính kèm bản sơ yếu lý lịch để quý vị tiện xem xét chi tiết.", example: "I have attached my updated curriculum vitae and recommendation letters for your kind review." },
      { pattern: "I would appreciate the chance to discuss my application further in an interview.", meaning: "Tôi rất cảm kích cơ hội được trao đổi sâu hơn về hồ sơ trong buổi phỏng vấn.", example: "I would appreciate the opportunity to discuss my qualifications further in a personal interview." }
    ],
    connectors_hint: "First of all, regarding my qualifications, … → In addition, … → Furthermore, I have developed … → Finally, …",
    analysis_questions: [
      "Người nhận là ai?",
      "Mục đích bức thư là gì?",
      "Văn phong là gì (100% Trang trọng)?",
      "Vị trí ứng tuyển là gì và cần làm nổi bật kỹ năng/kinh nghiệm nào?"
    ]
  }
};

// ==========================================================================
// DÀN Ý CHI TIẾT CHUẨN VSTEP B2
// ==========================================================================
const B2_DETAILED_OUTLINES = {
  advice: `
    <!-- 4 Câu hỏi phân tích đề (4 Hộp nổi 4 màu) -->
    <div class="bento-card card-theme-cyan" style="padding: 1.25rem 1.5rem; margin-bottom: 1.35rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
        <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--text-primary); margin: 0;">
          <i class="fa-solid fa-compass" style="color: var(--cyan-light);"></i> 4 BƯỚC PHÂN TÍCH ĐỀ TRƯỚC KHI VIẾT (THƯ LỜI KHUYÊN - INFORMAL):
        </h4>
        <span class="hl-pill hl-cyan">Chủ yếu là Thư Thân Mật (Informal)</span>
      </div>
      <div class="analysis-quad-grid" style="margin-top: 0.5rem;">
        <div class="analysis-step-item step-cyan" style="padding: 0.85rem 1rem;">
          <div class="analysis-step-top"><div class="num">1</div><span class="hl-pill hl-cyan">Người nhận</span></div>
          <div class="label">Người nhận là ai?</div>
          <div class="val">Thường là <span class="hl-pill hl-cyan">Bạn bè nước ngoài</span> hoặc người thân đang cần lời khuyên.</div>
        </div>
        <div class="analysis-step-item step-amber" style="padding: 0.85rem 1rem;">
          <div class="analysis-step-top"><div class="num">2</div><span class="hl-pill hl-amber">Mục đích</span></div>
          <div class="label">Mục đích thư là gì?</div>
          <div class="val"><span class="hl-pill hl-amber">Đưa ra lời khuyên / gợi ý</span> phù hợp với tình huống trong đề.</div>
        </div>
        <div class="analysis-step-item step-emerald" style="padding: 0.85rem 1rem;">
          <div class="analysis-step-top"><div class="num">3</div><span class="hl-pill hl-emerald">Văn phong</span></div>
          <div class="label">Văn phong là gì?</div>
          <div class="val"><span class="hl-pill hl-emerald">Thân mật (Informal)</span> — được dùng từ viết tắt (I'm, don't, it's).</div>
        </div>
        <div class="analysis-step-item step-rose" style="padding: 0.85rem 1rem;">
          <div class="analysis-step-top"><div class="num">4</div><span class="hl-pill hl-rose">Yêu cầu</span></div>
          <div class="label">Có những yêu cầu gì?</div>
          <div class="val">Gạch chân <span class="hl-pill hl-rose">3 - 4 ý hỏi</span> trong đề để lần lượt giải quyết.</div>
        </div>
      </div>
    </div>

    <!-- 1. Lời chào mở đầu -->
    <div class="outline-step-card step-border-cyan">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-cyan"><i class="fa-solid fa-hand-wave"></i> BƯỚC 1: LỜI CHÀO MỞ ĐẦU (SALUTATION)</span>
        <span class="hl-pill hl-cyan">Thân mật (Informal)</span>
      </div>
      <div style="background: var(--bg-inner); padding: 0.85rem 1.15rem; border-radius: var(--radius-md); border: 1px solid var(--cyan-border);">
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary);">
            Dear <span class="hl-placeholder">[tên của người nhận]</span>,
          </div>
        </div>
      </div>
    </div>

    <!-- 2. Mở thư -->
    <div class="outline-step-card step-border-violet">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-violet"><i class="fa-solid fa-envelope-open-text"></i> BƯỚC 2: MỞ THƯ (OPENING)</span>
        <span class="hl-pill hl-violet">Hỏi thăm + Nêu mục đích khuyên</span>
      </div>
      <p style="color: var(--text-secondary); margin-bottom: 0.6rem; font-size: 0.86rem; text-align: justify !important; text-justify: inter-word !important;">Mẫu câu mở bài ăn điểm tuyệt đối chuẩn B2:</p>
      <div style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.14), rgba(168, 85, 247, 0.08)); border: 1px solid var(--violet-border); border-radius: var(--radius-md); padding: 1rem 1.25rem; font-size: 1.02rem; color: var(--text-primary); line-height: 1.7;">
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content">
            <strong><span class="hl-mark-opening">Thanks for your letter. How have you been lately? After thinking about your situation, I have a few suggestions that might help.</span></strong>
          </div>
        </div>
      </div>
      <p style="font-size: 0.83rem; color: var(--text-muted); margin: 0.5rem 0 0 0; text-align: justify !important; text-justify: inter-word !important;">
        <i class="fa-solid fa-language" style="color: var(--violet-light);"></i> <em>Dịch: Cảm ơn vì bức thư của cậu. Dạo này cậu thế nào? Sau khi suy nghĩ về tình huống của cậu, tớ có một vài gợi ý có thể giúp ích được.</em>
      </p>
    </div>

    <!-- 3. Thân thư -->
    <div class="outline-step-card step-border-emerald">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-emerald"><i class="fa-solid fa-layer-group"></i> BƯỚC 3: THÂN THƯ (BODY PARAGRAPHS)</span>
        <span class="hl-pill hl-emerald">Trọng tâm 4 Tiêu chí VSTEP</span>
      </div>
      <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 0.9rem;">
        👉 <strong>Lần lượt đưa ra lời khuyên / gợi ý phù hợp với từng yêu cầu của đề bài. Phối hợp linh hoạt 8 cấu trúc B2 và Chuỗi liên từ nối ý:</strong>
      </p>

      <!-- BỘ CẤU TRÚC CÂU "ĂN ĐIỂM" BAND B2 ĐẶC TRƯNG -->
      <div class="bento-card card-theme-amber" style="margin: 1.25rem 0; padding: 1.25rem 1.4rem;">
        <div class="bento-card-header" style="margin-bottom: 1rem;">
          <div class="bento-header-left">
            <div class="bento-icon-badge badge-amber"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
            <div>
              <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary); margin: 0;">BỘ CẤU TRÚC CÂU "ĂN ĐIỂM" BAND B2 ĐẶC TRƯNG</h4>
              <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0.15rem 0 0 0; text-align: justify !important; text-justify: inter-word !important;">Phối hợp đa dạng các cấu trúc dưới đây vào phần Thân bài để bứt phá điểm Ngữ pháp & Từ vựng (kèm câu ví dụ mẫu):</p>
            </div>
          </div>
          <span class="hl-pill hl-amber"><i class="fa-solid fa-crown"></i> 8 Cấu trúc B2</span>
        </div>
        <div id="outlineStructuresContainer" class="formulas-grid-2col"></div>
      </div>

      <!-- Chuỗi từ liên kết gợi ý dạng Flow Nodes -->
      <div class="connector-flow-box">
        <strong style="color: var(--emerald-light); font-size: 0.86rem;"><i class="fa-solid fa-route"></i> SƠ ĐỒ CHUỖI TỪ LIÊN KẾT GỢI Ý CHUẨN B2:</strong>
        <div class="connector-chain-nodes">
          <span class="flow-node-3d"><span class="flow-node-num">1</span> First of all, when it comes to <span class="hl-placeholder">___</span>, …</span>
          <i class="fa-solid fa-arrow-right flow-arrow"></i>
          <span class="flow-node-3d"><span class="flow-node-num">2</span> As for <span class="hl-placeholder">___</span>, …</span>
          <i class="fa-solid fa-arrow-right flow-arrow"></i>
          <span class="flow-node-3d"><span class="flow-node-num">3</span> Regarding <span class="hl-placeholder">___</span>, …</span>
          <i class="fa-solid fa-arrow-right flow-arrow"></i>
          <span class="flow-node-3d"><span class="flow-node-num">4</span> Last but not least, …</span>
        </div>
      </div>
    </div>

    <!-- 4. Kết thư -->
    <div class="outline-step-card step-border-amber">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-amber"><i class="fa-solid fa-heart"></i> BƯỚC 4: KẾT THƯ (CLOSING)</span>
        <span class="hl-pill hl-amber">Chúc may mắn + Mong hồi âm</span>
      </div>
      <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.14), rgba(234, 88, 12, 0.06)); border: 1px solid var(--amber-border); border-radius: var(--radius-md); padding: 0.9rem 1.2rem; font-size: 1.02rem; color: var(--text-primary);">
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content">
            <strong><span class="hl-mark-opening">I hope you find my suggestions helpful. Let me know how things go.</span></strong>
          </div>
        </div>
      </div>
      <p style="font-size: 0.83rem; color: var(--text-muted); margin: 0.45rem 0 0 0; text-align: justify !important; text-justify: inter-word !important;">
        <i class="fa-solid fa-language" style="color: var(--amber-light);"></i> <em>Dịch: Tớ hy vọng cậu thấy những gợi ý của tớ hữu ích. Hãy cho tớ biết mọi chuyện diễn ra như thế nào nhé.</em>
      </p>
    </div>

    <!-- 5. Lời chào kết thúc -->
    <div class="outline-step-card step-border-rose">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-rose"><i class="fa-solid fa-signature"></i> BƯỚC 5: LỜI CHÀO KẾT THÚC (SIGN-OFF)</span>
        <span class="hl-pill hl-rose">Không ký tên thật vào bài thi</span>
      </div>
      <div style="background: var(--bg-inner); padding: 0.85rem 1.15rem; border-radius: var(--radius-md); border: 1px solid var(--rose-border);">
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary);">
            <span class="hl-mark-connector">Best wishes,</span>
          </div>
        </div>
      </div>
    </div>
  `,

  request: `
    <!-- 4 Câu hỏi phân tích đề (4 Hộp nổi 4 màu) -->
    <div class="bento-card card-theme-cyan" style="padding: 1.25rem 1.5rem; margin-bottom: 1.35rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
        <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--text-primary); margin: 0;">
          <i class="fa-solid fa-compass" style="color: var(--cyan-light);"></i> 4 BƯỚC PHÂN TÍCH ĐỀ TRƯỚC KHI VIẾT (THƯ YÊU CẦU - REQUEST):
        </h4>
        <span class="hl-pill hl-violet">Đa dạng: Thân mật • Bán trang trọng • Trang trọng</span>
      </div>
      <div class="analysis-quad-grid" style="margin-top: 0.5rem;">
        <div class="analysis-step-item step-cyan" style="padding: 0.85rem 1rem;">
          <div class="analysis-step-top"><div class="num">1</div><span class="hl-pill hl-cyan">Người nhận</span></div>
          <div class="label">Người nhận là ai?</div>
          <div class="val"><span class="hl-pill hl-cyan">Bạn bè</span> hay <span class="hl-pill hl-violet">Giám đốc / Trung tâm / Tổ chức</span>?</div>
        </div>
        <div class="analysis-step-item step-amber" style="padding: 0.85rem 1rem;">
          <div class="analysis-step-top"><div class="num">2</div><span class="hl-pill hl-amber">Mục đích</span></div>
          <div class="label">Mục đích thư là gì?</div>
          <div class="val"><span class="hl-pill hl-amber">Xin thông tin</span>, hỏi chi tiết khóa học, dịch vụ hoặc nhờ giúp đỡ.</div>
        </div>
        <div class="analysis-step-item step-emerald" style="padding: 0.85rem 1rem;">
          <div class="analysis-step-top"><div class="num">3</div><span class="hl-pill hl-emerald">Văn phong</span></div>
          <div class="label">Văn phong là gì?</div>
          <div class="val">Chọn đúng: <span class="hl-pill hl-cyan">Thân mật</span> hay <span class="hl-pill hl-violet">Trang trọng / Bán trang trọng</span>.</div>
        </div>
        <div class="analysis-step-item step-rose" style="padding: 0.85rem 1rem;">
          <div class="analysis-step-top"><div class="num">4</div><span class="hl-pill hl-rose">Yêu cầu</span></div>
          <div class="label">Có những yêu cầu gì?</div>
          <div class="val">Gạch chân <span class="hl-pill hl-rose">3 - 4 thông tin cần hỏi</span> (học phí, lịch trình, chỗ ở...).</div>
        </div>
      </div>
    </div>

    <!-- 1. Lời chào mở đầu -->
    <div class="outline-step-card step-border-cyan">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-cyan"><i class="fa-solid fa-hand-wave"></i> BƯỚC 1: LỜI CHÀO MỞ ĐẦU (SALUTATION)</span>
        <span class="hl-pill hl-cyan">Phân loại theo người nhận</span>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.95rem; align-items: stretch;">
        
        <!-- Cột 1: Thân mật -->
        <div style="background: var(--bg-inner); border: 1px solid var(--cyan-border); border-radius: var(--radius-md); padding: 0.95rem 1.1rem; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.65rem;">
              <span class="hl-pill hl-cyan">• Thân mật (Informal)</span>
              <span style="font-size: 0.78rem; color: var(--text-muted);"><i class="fa-solid fa-user-group"></i> Bạn bè</span>
            </div>
            <div style="font-size: 0.91rem; line-height: 1.85; color: var(--text-secondary);">
              <div>↳ <strong style="color: var(--text-primary);">Dear <span class="hl-placeholder">[tên người nhận]</span>,</strong> <em>(chuẩn nhất)</em></div>
              <div>↳ <strong style="color: var(--text-primary);">Hi <span class="hl-placeholder">[tên người nhận]</span>,</strong> <em>(thân thiện)</em></div>
              <div>↳ <strong style="color: var(--text-primary);">Hello <span class="hl-placeholder">[tên người nhận]</span>,</strong> <em>(tự nhiên)</em></div>
            </div>
          </div>
          <div style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px dashed rgba(6, 182, 212, 0.25); font-size: 0.78rem; color: var(--text-muted);">
            <i class="fa-solid fa-circle-check" style="color: var(--cyan); margin-right: 0.25rem;"></i> Kết thư: <strong style="color: var(--text-primary);">Best wishes,</strong>
          </div>
        </div>

        <!-- Cột 2: Trang trọng -->
        <div style="background: var(--bg-inner); border: 1px solid var(--violet-border); border-radius: var(--radius-md); padding: 0.95rem 1.1rem; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.65rem;">
              <span class="hl-pill hl-violet">• Trang trọng (Formal)</span>
              <span style="font-size: 0.78rem; color: var(--text-muted);"><i class="fa-solid fa-building"></i> Chưa rõ tên</span>
            </div>
            <div style="font-size: 0.91rem; line-height: 1.85; color: var(--text-secondary);">
              <div>↳ <strong style="color: var(--violet-light);">Dear Sir/Madam,</strong> <em>(an toàn nhất)</em></div>
              <div>↳ <strong style="color: var(--text-primary);">Dear Sir,</strong> <em>(khi biết là nam)</em></div>
              <div>↳ <strong style="color: var(--text-primary);">Dear Madam,</strong> <em>(khi biết là nữ)</em></div>
            </div>
          </div>
          <div style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px dashed rgba(168, 85, 247, 0.25); font-size: 0.78rem; color: var(--text-muted);">
            <i class="fa-solid fa-circle-check" style="color: var(--violet); margin-right: 0.25rem;"></i> Kết thư: <strong style="color: var(--text-primary);">Yours faithfully,</strong>
          </div>
        </div>

        <!-- Cột 3: Bán trang trọng -->
        <div style="background: var(--bg-inner); border: 1px solid var(--amber-border); border-radius: var(--radius-md); padding: 0.95rem 1.1rem; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.65rem;">
              <span class="hl-pill hl-amber">• Bán trang trọng (Semi-formal)</span>
              <span style="font-size: 0.78rem; color: var(--text-muted);"><i class="fa-solid fa-user-tie"></i> Đã biết họ</span>
            </div>
            <div style="font-size: 0.91rem; line-height: 1.85; color: var(--text-secondary);">
              <div>↳ <strong style="color: var(--text-primary);">Dear Mr. <span class="hl-placeholder">[họ người nhận]</span>,</strong> <em>(người nhận nam)</em></div>
              <div>↳ <strong style="color: var(--amber-light);">Dear Ms. <span class="hl-placeholder">[họ người nhận]</span>,</strong> <em>(nữ - lịch sự nhất)</em></div>
              <div>↳ <strong style="color: var(--text-primary);">Dear Mrs. <span class="hl-placeholder">[họ người nhận]</span>,</strong> <em>(nữ đã có gia đình)</em></div>
            </div>
          </div>
          <div style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px dashed rgba(245, 158, 11, 0.25); font-size: 0.78rem; color: var(--text-muted);">
            <i class="fa-solid fa-circle-check" style="color: var(--amber); margin-right: 0.25rem;"></i> Kết thư: <strong style="color: var(--text-primary);">Yours sincerely,</strong>
          </div>
        </div>

      </div>
    </div>

    <!-- 2. Mở thư -->
    <div class="outline-step-card step-border-violet">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-violet"><i class="fa-solid fa-envelope-open-text"></i> BƯỚC 2: MỞ THƯ (OPENING)</span>
        <span class="hl-pill hl-violet">2 Mẫu câu Mở bài Chuẩn B2</span>
      </div>
      
      <div style="display: grid; grid-template-columns: 1fr; gap: 0.9rem;">
        <div style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.12), var(--bg-inner)); border: 1px solid var(--cyan-border); border-radius: var(--radius-md); padding: 1rem 1.2rem;">
          <div style="margin-bottom: 0.4rem;">
            <span class="hl-pill hl-cyan"><i class="fa-solid fa-user-group"></i> 1. Mở thư Thân mật (Viết cho bạn bè / người quen)</span>
          </div>
          <div class="formula-arrow-row" style="font-size: 0.98rem; color: var(--text-primary); line-height: 1.65;">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content">
              <strong>How have you been lately? I’m writing to ask a few questions about <span class="hl-placeholder">[thứ cần xin thông tin]</span>, as I’m planning to <span class="hl-placeholder">[mục đích]</span>.</strong>
            </div>
          </div>
        </div>

        <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.14), var(--bg-inner)); border: 1px solid var(--violet-border); border-radius: var(--radius-md); padding: 1rem 1.2rem;">
          <div style="margin-bottom: 0.4rem;">
            <span class="hl-pill hl-violet"><i class="fa-solid fa-building-columns"></i> 2. Mở thư Trang trọng & Bán trang trọng (Viết cho tổ chức / trung tâm)</span>
          </div>
          <div class="formula-arrow-row" style="font-size: 0.98rem; color: var(--text-primary); line-height: 1.65;">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content">
              <strong>I am writing to request some information about <span class="hl-placeholder">[thứ cần xin thông tin]</span>, as I am interested in <span class="hl-placeholder">[mục đích]</span> and would like to learn more before making a decision.</strong>
            </div>
          </div>
          <div style="margin-top: 0.55rem; padding-top: 0.5rem; border-top: 1px dashed rgba(139, 92, 246, 0.3); font-size: 0.9rem; color: var(--text-secondary);">
            <em style="color: var(--amber-light); font-weight: 700;">(hoặc cách diễn đạt nâng cao):</em>
            <div class="formula-arrow-row" style="margin-top: 0.25rem;">
              <span class="formula-arrow-icon">↳</span>
              <div class="formula-arrow-content">
                <strong style="color: var(--text-primary);">I am writing to formally request further details regarding <span class="hl-placeholder">[thứ cần xin thông tin]</span>, as I am planning to <span class="hl-placeholder">[mục đích]</span>.</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. Thân thư -->
    <div class="outline-step-card step-border-emerald">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-emerald"><i class="fa-solid fa-layer-group"></i> BƯỚC 3: THÂN THƯ (BODY PARAGRAPHS)</span>
        <span class="hl-pill hl-emerald">Lần lượt hỏi đủ các thông tin của đề</span>
      </div>

      <!-- BỘ CẤU TRÚC CÂU "ĂN ĐIỂM" BAND B2 ĐẶC TRƯNG -->
      <div class="bento-card card-theme-amber" style="margin: 1.25rem 0; padding: 1.25rem 1.4rem;">
        <div class="bento-card-header" style="margin-bottom: 1rem;">
          <div class="bento-header-left">
            <div class="bento-icon-badge badge-amber"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
            <div>
              <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary); margin: 0;">BỘ CẤU TRÚC CÂU "ĂN ĐIỂM" BAND B2 ĐẶC TRƯNG</h4>
              <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0.15rem 0 0 0; text-align: justify !important; text-justify: inter-word !important;">Phối hợp đa dạng các cấu trúc dưới đây vào phần Thân bài để bứt phá điểm Ngữ pháp & Từ vựng (kèm câu ví dụ mẫu):</p>
            </div>
          </div>
          <span class="hl-pill hl-amber"><i class="fa-solid fa-crown"></i> 8 Cấu trúc B2</span>
        </div>
        <div id="outlineStructuresContainer" class="formulas-grid-2col"></div>
      </div>

      <!-- Từ liên kết gợi ý -->
      <div class="connector-flow-box">
        <strong style="color: var(--emerald-light); font-size: 0.86rem;"><i class="fa-solid fa-route"></i> SƠ ĐỒ CHUỖI TỪ LIÊN KẾT GỢI Ý CHUẨN B2:</strong>
        <div style="margin-top: 0.6rem;">
          <span class="hl-pill hl-cyan" style="margin-bottom: 0.35rem;">• Thân mật (Informal):</span>
          <div class="connector-chain-nodes" style="margin-top: 0.3rem; margin-bottom: 0.75rem;">
            <span class="flow-node-3d"><span class="flow-node-num">1</span> First of all, …</span>
            <i class="fa-solid fa-arrow-right flow-arrow"></i>
            <span class="flow-node-3d"><span class="flow-node-num">2</span> Besides that, …</span>
            <i class="fa-solid fa-arrow-right flow-arrow"></i>
            <span class="flow-node-3d"><span class="flow-node-num">3</span> On top of that, …</span>
            <i class="fa-solid fa-arrow-right flow-arrow"></i>
            <span class="flow-node-3d"><span class="flow-node-num">4</span> Finally, …</span>
          </div>

          <span class="hl-pill hl-violet" style="margin-bottom: 0.35rem;">• Trang trọng & Bán trang trọng (Formal / Semi-formal):</span>
          <div class="connector-chain-nodes" style="margin-top: 0.3rem;">
            <span class="flow-node-3d"><span class="flow-node-num">1</span> To begin with, …</span>
            <i class="fa-solid fa-arrow-right flow-arrow"></i>
            <span class="flow-node-3d"><span class="flow-node-num">2</span> In addition, …</span>
            <i class="fa-solid fa-arrow-right flow-arrow"></i>
            <span class="flow-node-3d"><span class="flow-node-num">3</span> Furthermore, …</span>
            <i class="fa-solid fa-arrow-right flow-arrow"></i>
            <span class="flow-node-3d"><span class="flow-node-num">4</span> Finally, …</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 4. Kết thư -->
    <div class="outline-step-card step-border-amber">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-amber"><i class="fa-solid fa-heart"></i> BƯỚC 4: KẾT THƯ (CLOSING)</span>
        <span class="hl-pill hl-amber">Cảm ơn & Mong phản hồi</span>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 0.85rem;">
        <div style="background: var(--bg-inner); border: 1px solid var(--cyan-border); border-radius: var(--radius-md); padding: 0.9rem 1.1rem;">
          <div style="margin-bottom: 0.35rem;">
            <span class="hl-pill hl-cyan">• Thân mật</span>
          </div>
          <div class="formula-arrow-row" style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary);">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content">
              I’d really appreciate your help with this. Write back soon.
            </div>
          </div>
        </div>
        <div style="background: var(--bg-inner); border: 1px solid var(--violet-border); border-radius: var(--radius-md); padding: 0.9rem 1.1rem;">
          <div style="margin-bottom: 0.35rem;">
            <span class="hl-pill hl-violet">• Trang trọng & Bán trang trọng</span>
          </div>
          <div class="formula-arrow-row" style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary);">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content">
              Thank you for your time. I look forward to hearing from you.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 5. Lời chào kết thúc -->
    <div class="outline-step-card step-border-rose">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-rose"><i class="fa-solid fa-signature"></i> BƯỚC 5: LỜI CHÀO KẾT THÚC (SIGN-OFF)</span>
        <span class="hl-pill hl-rose">Tương ứng với lời chào Bước 1</span>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 0.85rem; align-items: stretch;">
        <div style="background: var(--bg-inner); border: 1px solid var(--cyan-border); border-radius: var(--radius-md); padding: 0.85rem 1.1rem; display: flex; align-items: center; justify-content: space-between;">
          <span class="hl-pill hl-cyan">• Thân mật</span>
          <strong style="color: var(--text-primary); font-size: 0.95rem;">Best wishes,</strong>
        </div>
        <div style="background: var(--bg-inner); border: 1px solid var(--violet-border); border-radius: var(--radius-md); padding: 0.85rem 1.1rem; display: flex; align-items: center; justify-content: space-between;">
          <span class="hl-pill hl-violet">• Trang trọng</span>
          <strong style="color: var(--violet-light); font-size: 0.95rem;">Yours faithfully,</strong>
        </div>
        <div style="background: var(--bg-inner); border: 1px solid var(--amber-border); border-radius: var(--radius-md); padding: 0.85rem 1.1rem; display: flex; align-items: center; justify-content: space-between;">
          <span class="hl-pill hl-amber">• Bán trang trọng</span>
          <strong style="color: var(--amber-light); font-size: 0.95rem;">Yours sincerely,</strong>
        </div>
      </div>
    </div>
  `,

  description: `
    <!-- PHẦN I: DẤU HIỆU NHẬN BIẾT & LƯU Ý PHÂN BIỆT -->
    <div class="bento-card card-theme-cyan" style="padding: 1.4rem 1.6rem; margin-bottom: 1.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.85rem;">
        <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary); margin: 0;">
          <i class="fa-solid fa-magnifying-glass" style="color: var(--cyan-light);"></i> I. DẤU HIỆU NHẬN BIẾT (TYPE 03: LETTER OF DESCRIPTION - THƯ MÔ TẢ)
        </h4>
        <span class="hl-pill hl-cyan"><i class="fa-solid fa-tag"></i> Từ khóa cốt lõi</span>
      </div>
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
        Dạng thư này thường xuất hiện khi đề bài có các từ khóa như:
      </p>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">describe … / write a letter to describe …</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">tell me more about …</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">tell me what … is like</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">give me some information about …</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">provide details about …</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">tell me a little about …</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">explain what … is like</span>
      </div>

      <!-- HỘP LƯU Ý PHÂN BIỆT ĐẶC BIỆT -->
      <div style="background: rgba(245, 158, 11, 0.12); border-left: 4px solid var(--amber-light); border-radius: var(--radius-sm); padding: 0.95rem 1.15rem; font-size: 0.88rem; line-height: 1.65; color: var(--text-primary);">
        <strong style="color: var(--amber-light); display: inline-flex; align-items: center; gap: 0.4rem; margin-bottom: 0.3rem;">
          <i class="fa-solid fa-triangle-exclamation"></i> LƯU Ý PHÂN BIỆT QUAN TRỌNG:
        </strong>
        <p style="margin: 0; text-align: justify !important; text-justify: inter-word !important;">
          Cụm từ <em>give information about</em> và <em>provide details about</em> cũng có thể xuất hiện trong dạng <strong>Letter of Request (Thư yêu cầu)</strong>. Vì vậy, cần xác định dạng bài dựa trên <strong>mục đích giao tiếp</strong>: người viết đang cung cấp thông tin/mô tả hay đang yêu cầu người khác cung cấp thông tin. Cần xác định dạng bài dựa trên <strong>vai trò giao tiếp của người viết</strong>: <u>cung cấp thông tin theo yêu cầu của người nhận</u> hay <u>chủ động yêu cầu người khác cung cấp thông tin</u>.
        </p>
      </div>
    </div>

    <!-- PHẦN II: DÀN Ý CHI TIẾT 5 BƯỚC -->
    <div class="bento-card card-theme-violet" style="padding: 1.25rem 1.5rem; margin-bottom: 1.35rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
        <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary); margin: 0;">
          <i class="fa-solid fa-sitemap" style="color: var(--violet-light);"></i> II. DÀN Ý CHI TIẾT 5 BƯỚC (MASTER OUTLINE)
        </h4>
        <span class="hl-pill hl-violet">3 Phong cách: Thân mật • Bán trang trọng • Trang trọng</span>
      </div>
      <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0.5rem 0 0 0; text-align: justify !important; text-justify: inter-word !important;">
        <strong>LƯU Ý:</strong> Thư mô tả thường yêu cầu người viết cung cấp thông tin hoặc mô tả một người, địa điểm, sự vật, sự kiện hay trải nghiệm cụ thể. Dạng thư này có thể được viết theo phong cách thân mật, bán trang trọng hoặc trang trọng, tùy thuộc vào người nhận và mục đích giao tiếp.
      </p>
    </div>

    <!-- Bước 1: Lời chào mở đầu -->
    <div class="outline-step-card step-border-cyan">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-cyan"><i class="fa-solid fa-hand-wave"></i> 1. LỜI CHÀO MỞ ĐẦU (SALUTATION)</span>
        <span class="hl-pill hl-cyan">Phân loại theo người nhận</span>
      </div>
      <div style="background: var(--bg-inner); padding: 1rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--cyan-border); font-size: 0.95rem; line-height: 1.7;">
        <div style="margin-bottom: 0.6rem;">
          <strong style="color: var(--cyan-light);">• Thân mật (Informal):</strong>
          <div class="formula-arrow-row" style="margin-left: 0.65rem; margin-top: 0.25rem;">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content" style="font-size: 1.02rem; font-weight: 800; color: var(--text-primary);">
              Dear <span class="hl-placeholder">[tên của người nhận]</span>,
            </div>
          </div>
        </div>
        <div style="margin-bottom: 0.6rem;">
          <strong style="color: var(--amber-light);">• Bán trang trọng (Semi-formal):</strong>
          <div class="formula-arrow-row" style="margin-left: 0.65rem; margin-top: 0.25rem;">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content" style="font-size: 1.02rem; font-weight: 800; color: var(--text-primary);">
              Dear Mr. / Ms. / Mrs. <span class="hl-placeholder">[họ của người nhận]</span>,
            </div>
          </div>
        </div>
        <div>
          <strong style="color: var(--violet-light);">• Trang trọng (Formal):</strong>
          <div style="margin-left: 0.65rem; margin-top: 0.25rem; display: flex; flex-direction: column; gap: 0.35rem;">
            <div class="formula-arrow-row">
              <span class="formula-arrow-icon">↳</span>
              <div class="formula-arrow-content" style="color: var(--text-primary); font-weight: 700;">
                Dear Sir, <span style="font-weight: 400; color: var(--text-muted);">(nếu biết chắc chắn người nhận là nam)</span>
              </div>
            </div>
            <div class="formula-arrow-row">
              <span class="formula-arrow-icon">↳</span>
              <div class="formula-arrow-content" style="color: var(--text-primary); font-weight: 700;">
                Dear Madam, <span style="font-weight: 400; color: var(--text-muted);">(nếu biết chắc chắn người nhận là nữ)</span>
              </div>
            </div>
            <div class="formula-arrow-row">
              <span class="formula-arrow-icon">↳</span>
              <div class="formula-arrow-content" style="color: var(--text-primary); font-weight: 700;">
                Dear Sir/Madam, <span style="font-weight: 400; color: var(--text-muted);">(nếu không biết chắc chắn người nhận là nam hay nữ)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bước 2: Mở thư -->
    <div class="outline-step-card step-border-violet">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-violet"><i class="fa-solid fa-envelope-open-text"></i> 2. MỞ THƯ (OPENING)</span>
        <span class="hl-pill hl-violet">2 Tình huống mở bài</span>
      </div>
      
      <!-- 2.1 Khi thư yêu cầu cung cấp thông tin -->
      <div style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(168, 85, 247, 0.06)); border: 1px solid var(--violet-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; margin-bottom: 0.85rem; font-size: 0.95rem; line-height: 1.7;">
        <div style="font-weight: 800; color: var(--violet-light); margin-bottom: 0.5rem; font-size: 0.96rem;">
          <i class="fa-solid fa-circle-info"></i> 2.1. Khi thư yêu cầu cung cấp thông tin:
        </div>
        <div style="margin-bottom: 0.65rem;">
          <strong style="color: var(--cyan-light);">• Thân mật (Informal):</strong>
          <div class="formula-arrow-row" style="margin-left: 0.65rem; margin-top: 0.25rem; font-size: 1rem; color: var(--text-primary);">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content">
              <strong>How have you been lately? In your letter, you asked me about <span class="hl-placeholder">[chủ đề cần được cung cấp thông tin]</span>, so I’d be happy to share some details with you.</strong>
            </div>
          </div>
        </div>
        <div>
          <strong style="color: var(--amber-light);">• Trang trọng & bán trang trọng (Formal / Semi-formal):</strong>
          <div class="formula-arrow-row" style="margin-left: 0.65rem; margin-top: 0.25rem; font-size: 1rem; color: var(--text-primary);">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content">
              <strong>I hope this letter finds you well. In your letter, you requested information about <span class="hl-placeholder">[chủ đề cần được cung cấp thông tin]</span>, so I am writing to provide you with the relevant details.</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- 2.2 Khi thư yêu cầu mô tả một đối tượng hoặc sự việc -->
      <div style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.12), rgba(59, 130, 246, 0.06)); border: 1px solid var(--cyan-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; font-size: 0.95rem; line-height: 1.7;">
        <div style="font-weight: 800; color: var(--cyan-light); margin-bottom: 0.5rem; font-size: 0.96rem;">
          <i class="fa-solid fa-paintbrush"></i> 2.2. Khi thư yêu cầu mô tả một đối tượng hoặc sự việc:
        </div>
        <div style="margin-bottom: 0.65rem;">
          <strong style="color: var(--cyan-light);">• Thân mật (Informal):</strong>
          <div class="formula-arrow-row" style="margin-left: 0.65rem; margin-top: 0.25rem; font-size: 1rem; color: var(--text-primary);">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content">
              <strong>How have you been lately? You asked me to describe <span class="hl-placeholder">[đối tượng cần được mô tả]</span>, so let me tell you a little more about it.</strong>
            </div>
          </div>
        </div>
        <div>
          <strong style="color: var(--amber-light);">• Trang trọng & bán trang trọng (Formal / Semi-formal):</strong>
          <div class="formula-arrow-row" style="margin-left: 0.65rem; margin-top: 0.25rem; font-size: 1rem; color: var(--text-primary);">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content">
              <strong>I hope this letter finds you well. You asked me to describe <span class="hl-placeholder">[đối tượng cần được mô tả]</span>, so I am writing to provide you with a detailed description.</strong>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bước 3: Thân thư -->
    <div class="outline-step-card step-border-emerald">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-emerald"><i class="fa-solid fa-layer-group"></i> 3. THÂN THƯ (BODY PARAGRAPHS)</span>
        <span class="hl-pill hl-emerald">Thông tin chính + Chi tiết bổ trợ & Minh họa</span>
      </div>

      <div style="background: var(--bg-inner); padding: 1.1rem 1.3rem; border-radius: var(--radius-md); border: 1px solid var(--panel-border); margin-bottom: 1.15rem; font-size: 0.92rem; line-height: 1.7; color: var(--text-primary);">
        <p style="margin: 0 0 0.5rem 0; text-align: justify !important; text-justify: inter-word !important;">
          Lần lượt cung cấp thông tin hoặc mô tả đối tượng theo các yêu cầu của đề. Mỗi ý nên gồm <strong>thông tin chính</strong> và các <strong>chi tiết bổ trợ phù hợp</strong>, chẳng hạn đặc điểm, ví dụ, lý do hoặc nhận xét có liên quan.
        </p>
        <p style="margin: 0; color: var(--emerald-light); font-weight: 700; text-align: justify !important; text-justify: inter-word !important;">
          <i class="fa-solid fa-lightbulb"></i> NGUYÊN TẮC: Đối với bài mô tả, không nên chỉ liệt kê thông tin. Cần giải thích hoặc minh họa để người đọc hình dung rõ hơn về đối tượng.
        </p>
      </div>

      <!-- TỪ LIÊN KẾT GỢI Ý & CỤM CHUYỂN Ý -->
      <div class="connector-flow-box" style="margin-bottom: 1.25rem;">
        <strong style="color: var(--emerald-light); font-size: 0.92rem;"><i class="fa-solid fa-route"></i> TỪ LIÊN KẾT GỢI Ý (ĐỀ XUẤT SỬ DỤNG):</strong>
        <div class="connector-chain-nodes" style="margin-top: 0.65rem; margin-bottom: 0.85rem;">
          <span class="flow-node-3d"><span class="flow-node-num">1</span> To begin with, …</span>
          <i class="fa-solid fa-arrow-right flow-arrow"></i>
          <span class="flow-node-3d"><span class="flow-node-num">2</span> In addition, …</span>
          <i class="fa-solid fa-arrow-right flow-arrow"></i>
          <span class="flow-node-3d"><span class="flow-node-num">3</span> Furthermore, …</span>
          <i class="fa-solid fa-arrow-right flow-arrow"></i>
          <span class="flow-node-3d"><span class="flow-node-num">4</span> Finally, …</span>
        </div>

        <div style="border-top: 1px dashed var(--panel-border); padding-top: 0.65rem; font-size: 0.88rem; color: var(--text-primary);">
          <strong style="color: var(--cyan-light);">Ngoài ra, có thể dùng các cụm chuyển ý theo nội dung mô tả:</strong>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.4rem;">
            <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.3rem 0.65rem;">As for ______, …</span>
            <span class="hl-pill hl-emerald" style="font-size: 0.85rem; padding: 0.3rem 0.65rem;">In terms of ______, …</span>
            <span class="hl-pill hl-amber" style="font-size: 0.85rem; padding: 0.3rem 0.65rem;">Regarding ______, …</span>
          </div>
        </div>
      </div>

      <!-- BỘ CẤU TRÚC CÂU "ĂN ĐIỂM" BAND B2 ĐẶC TRƯNG -->
      <div class="bento-card card-theme-amber" style="margin: 1.25rem 0; padding: 1.25rem 1.4rem;">
        <div class="bento-card-header" style="margin-bottom: 1rem;">
          <div class="bento-header-left">
            <div class="bento-icon-badge badge-amber"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
            <div>
              <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary); margin: 0;">BỘ CẤU TRÚC CÂU "ĂN ĐIỂM" BAND B2 ĐẶC TRƯNG</h4>
              <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0.15rem 0 0 0; text-align: justify !important; text-justify: inter-word !important;">Phối hợp đa dạng các cấu trúc dưới đây vào phần Thân bài để bứt phá điểm Ngữ pháp & Từ vựng (kèm câu ví dụ mẫu):</p>
            </div>
          </div>
          <span class="hl-pill hl-amber"><i class="fa-solid fa-crown"></i> Chuẩn B2</span>
        </div>
        <div id="outlineStructuresContainer" class="formulas-grid-2col"></div>
      </div>
    </div>

    <!-- Bước 4: Kết thư -->
    <div class="outline-step-card step-border-amber">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-amber"><i class="fa-solid fa-heart"></i> 4. KẾT THƯ (CLOSING)</span>
        <span class="hl-pill hl-amber">Hy vọng thông tin hữu ích & Sẵn sàng giải đáp thêm</span>
      </div>
      <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(234, 88, 12, 0.05)); border: 1px solid var(--amber-border); border-radius: var(--radius-md); padding: 1rem 1.25rem; font-size: 0.95rem; line-height: 1.7;">
        <div style="margin-bottom: 0.65rem;">
          <strong style="color: var(--cyan-light);">• Thân mật (Informal):</strong>
          <div class="formula-arrow-row" style="margin-left: 0.65rem; margin-top: 0.25rem; font-size: 1.02rem; color: var(--text-primary);">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content">
              <strong>I hope you find this information helpful. Let me know if you need any more details.</strong>
            </div>
          </div>
        </div>
        <div>
          <strong style="color: var(--amber-light);">• Trang trọng & Bán trang trọng (Formal / Semi-formal):</strong>
          <div class="formula-arrow-row" style="margin-left: 0.65rem; margin-top: 0.25rem; font-size: 1.02rem; color: var(--text-primary);">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content">
              <strong>I hope the information provided is helpful. Please feel free to contact me if you require any further details.</strong>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bước 5: Lời chào kết thúc -->
    <div class="outline-step-card step-border-rose">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-rose"><i class="fa-solid fa-signature"></i> 5. LỜI CHÀO KẾT THÚC (SIGN-OFF)</span>
        <span class="hl-pill hl-rose">Đúng chuẩn từng văn phong</span>
      </div>
      <div style="background: var(--bg-inner); padding: 1rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--rose-border); font-size: 0.95rem; line-height: 1.7;">
        <div style="display: flex; flex-wrap: wrap; gap: 1.5rem;">
          <div>
            <strong style="color: var(--cyan-light);">• Thân mật:</strong>
            <div class="formula-arrow-row" style="margin-top: 0.25rem;">
              <span class="formula-arrow-icon">↳</span>
              <div class="formula-arrow-content" style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary);">
                Best wishes,
              </div>
            </div>
          </div>
          <div>
            <strong style="color: var(--violet-light);">• Trang trọng:</strong>
            <div class="formula-arrow-row" style="margin-top: 0.25rem;">
              <span class="formula-arrow-icon">↳</span>
              <div class="formula-arrow-content" style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary);">
                Yours faithfully,
              </div>
            </div>
          </div>
          <div>
            <strong style="color: var(--amber-light);">• Bán trang trọng:</strong>
            <div class="formula-arrow-row" style="margin-top: 0.25rem;">
              <span class="formula-arrow-icon">↳</span>
              <div class="formula-arrow-content" style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary);">
                Yours sincerely,
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- VÍ DỤ MINH HỌA & PHÂN TÍCH ĐỀ -->
    <div class="bento-card card-theme-emerald" style="padding: 1.4rem 1.6rem; margin-top: 1.75rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.85rem;">
        <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary); margin: 0;">
          <i class="fa-solid fa-book-open-reader" style="color: var(--emerald-light);"></i> VÍ DỤ MINH HỌA (SAMPLE TOPIC & PROMPT ANALYSIS)
        </h4>
        <span class="hl-pill hl-emerald"><i class="fa-solid fa-star"></i> Đề mẫu B2</span>
      </div>

      <div style="background: var(--bg-card); border: 1.5px solid var(--emerald-border); border-radius: var(--radius-md); padding: 1.15rem 1.25rem; margin-bottom: 1.25rem; font-size: 0.95rem; line-height: 1.7; color: var(--text-primary);">
        <p style="margin: 0 0 0.5rem 0; font-weight: 700;">
          You have received a letter from your English friend, Emily. Read part of her letter below:
        </p>
        <blockquote style="margin: 0.5rem 0; padding: 0.65rem 1rem; border-left: 3px solid var(--emerald-light); background: rgba(16, 185, 129, 0.08); font-style: italic; color: var(--text-secondary); border-radius: var(--radius-sm);">
          "... I have received a letter from your friend, Hoa. She is going to do a course in London, so she asked me if she could stay with me and my family until she finds an apartment. Could you tell me some information about her? (things like her personality, her hobbies, her current work or study). I need to know whether she will fit in my family or not ..."
        </blockquote>
        <p style="margin: 0.5rem 0 0 0;">
          Write a letter responding to Emily. You should write at least 120 words. <strong>Do not include your name or address. Your response will be evaluated in terms of Task Fulfillment, Organization, Vocabulary, and Grammar.</strong>
        </p>
      </div>

      <!-- 4 Câu hỏi Phân tích đề -->
      <h5 style="font-size: 0.95rem; font-weight: 800; color: var(--emerald-light); margin: 0 0 0.65rem 0;">
        <i class="fa-solid fa-compass"></i> PHÂN TÍCH ĐỀ BÀI (4 CÂU HỎI VÀNG):
      </h5>
      <div class="analysis-quad-grid" style="margin-top: 0.5rem;">
        <div class="analysis-step-item step-cyan" style="padding: 0.9rem 1rem;">
          <div class="analysis-step-top"><div class="num">1</div><span class="hl-pill hl-cyan">Người nhận</span></div>
          <div class="label">Người nhận là ai?</div>
          <div class="val">Emily (Bạn thân người Anh ở London).</div>
        </div>
        <div class="analysis-step-item step-amber" style="padding: 0.9rem 1rem;">
          <div class="analysis-step-top"><div class="num">2</div><span class="hl-pill hl-amber">Mục đích</span></div>
          <div class="label">Mục đích bức thư là gì?</div>
          <div class="val">Cung cấp thông tin & mô tả về Hoa (tính cách, sở thích, việc học/làm) để xem Hoa có hợp sống cùng gia đình Emily không.</div>
        </div>
        <div class="analysis-step-item step-emerald" style="padding: 0.9rem 1rem;">
          <div class="analysis-step-top"><div class="num">3</div><span class="hl-pill hl-emerald">Văn phong</span></div>
          <div class="label">Văn phong thư là gì?</div>
          <div class="val">Thư thân mật (Informal letter) vì viết cho bạn thân.</div>
        </div>
        <div class="analysis-step-item step-rose" style="padding: 0.9rem 1rem;">
          <div class="analysis-step-top"><div class="num">4</div><span class="hl-pill hl-rose">Yêu cầu</span></div>
          <div class="label">Có những yêu cầu gì?</div>
          <div class="val">1. Hoa's personality • 2. Her hobbies • 3. Current work or study • 4. Khẳng định Hoa sẽ hòa hợp tốt với gia đình.</div>
        </div>
      </div>
    </div>
  `,

  complaint: `
    <!-- PHẦN I: DẤU HIỆU NHẬN BIẾT -->
    <div class="bento-card card-theme-cyan" style="padding: 1.25rem 1.5rem; margin-bottom: 1.35rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.85rem;">
        <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary); margin: 0;">
          <i class="fa-solid fa-magnifying-glass" style="color: var(--cyan-light);"></i> I. DẤU HIỆU NHẬN BIẾT (TYPE 04: LETTER OF COMPLAINT - THƯ PHÀN NÀN)
        </h4>
        <span class="hl-pill hl-cyan"><i class="fa-solid fa-tag"></i> Từ khóa cốt lõi</span>
      </div>
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
        Dạng thư này thường xuất hiện khi đề bài có các từ khóa như:
      </p>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">complain about …</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">express dissatisfaction with …</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">be unhappy with …</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">be disappointed with …</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">report a problem with …</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">describe the problems you experienced with …</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">explain why you were dissatisfied with …</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">suggest what should be done to improve …</span>
      </div>

      <!-- HỘP LƯU Ý PHÂN BIỆT ĐẶC BIỆT -->
      <div style="background: rgba(245, 158, 11, 0.12); border-left: 4px solid var(--amber-light); border-radius: var(--radius-sm); padding: 0.95rem 1.15rem; font-size: 0.88rem; line-height: 1.65; color: var(--text-primary);">
        <strong style="color: var(--amber-light); display: inline-flex; align-items: center; gap: 0.4rem; margin-bottom: 0.3rem;">
          <i class="fa-solid fa-triangle-exclamation"></i> LƯU Ý PHÂN BIỆT QUAN TRỌNG:
        </strong>
        <p style="margin: 0; text-align: justify !important; text-justify: inter-word !important;">
          Không nhất thiết đề bài phải có từ <strong>complain</strong>. Nếu đề yêu cầu mô tả vấn đề, giải thích sự không hài lòng và đề xuất cách cải thiện, người viết vẫn có thể triển khai theo dạng <strong>Letter of Complaint</strong>.
        </p>
      </div>
    </div>

    <!-- PHẦN II: DÀN Ý CHI TIẾT 5 BƯỚC -->
    <div class="bento-card card-theme-violet" style="padding: 1.25rem 1.5rem; margin-bottom: 1.35rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
        <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary); margin: 0;">
          <i class="fa-solid fa-sitemap" style="color: var(--violet-light);"></i> II. DÀN Ý CHI TIẾT 5 BƯỚC (MASTER OUTLINE)
        </h4>
        <span class="hl-pill hl-violet">Phong cách: Trang trọng • Bán trang trọng</span>
      </div>
      <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0.5rem 0 0 0; text-align: justify !important; text-justify: inter-word !important;">
        <strong>LƯU Ý:</strong> Thư phàn nàn thường sử dụng phong cách trang trọng hoặc bán trang trọng, tùy thuộc vào người nhận và mối quan hệ giữa hai bên.
      </p>
    </div>

    <!-- Bước 1: Lời chào mở đầu -->
    <div class="outline-step-card step-border-cyan">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-cyan"><i class="fa-solid fa-hand-wave"></i> 1. LỜI CHÀO MỞ ĐẦU (SALUTATION)</span>
        <span class="hl-pill hl-cyan">Phân loại theo người nhận</span>
      </div>
      <div style="background: var(--bg-inner); padding: 1rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--cyan-border); font-size: 0.95rem; line-height: 1.7;">
        <div style="margin-bottom: 0.75rem;">
          <strong style="color: var(--violet-light);">• Trang trọng (Formal):</strong>
          <div style="margin-left: 0.65rem; margin-top: 0.25rem; display: flex; flex-direction: column; gap: 0.35rem;">
            <div class="formula-arrow-row">
              <span class="formula-arrow-icon">↳</span>
              <div class="formula-arrow-content" style="color: var(--text-primary); font-weight: 700;">
                Dear Sir, <span style="font-weight: 400; color: var(--text-muted);">(nếu biết chắc chắn người nhận là nam)</span>
              </div>
            </div>
            <div class="formula-arrow-row">
              <span class="formula-arrow-icon">↳</span>
              <div class="formula-arrow-content" style="color: var(--text-primary); font-weight: 700;">
                Dear Madam, <span style="font-weight: 400; color: var(--text-muted);">(nếu biết chắc chắn người nhận là nữ)</span>
              </div>
            </div>
            <div class="formula-arrow-row">
              <span class="formula-arrow-icon">↳</span>
              <div class="formula-arrow-content" style="color: var(--text-primary); font-weight: 700;">
                Dear Sir/Madam, <span style="font-weight: 400; color: var(--text-muted);">(nếu không biết chắc chắn biết người nhận là nam hay nữ)</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <strong style="color: var(--amber-light);">• Bán trang trọng (Semi-formal):</strong>
          <div class="formula-arrow-row" style="margin-left: 0.65rem; margin-top: 0.25rem;">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content" style="font-size: 1.02rem; font-weight: 800; color: var(--text-primary);">
              Dear Mr. / Ms. / Mrs. <span class="hl-placeholder">[họ của người nhận]</span>,
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bước 2: Mở thư -->
    <div class="outline-step-card step-border-violet">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-violet"><i class="fa-solid fa-envelope-open-text"></i> 2. MỞ THƯ (OPENING)</span>
        <span class="hl-pill hl-violet">Nêu sự việc & Sự thất vọng</span>
      </div>
      <div style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(168, 85, 247, 0.06)); border: 1px solid var(--violet-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; font-size: 1.02rem; color: var(--text-primary); line-height: 1.7;">
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content">
            <strong>I am writing to express my dissatisfaction with <span class="hl-placeholder">[vấn đề cần phàn nàn]</span>. I recently <span class="hl-placeholder">[sử dụng/mua/trải nghiệm]</span> <span class="hl-placeholder">[sản phẩm hoặc dịch vụ]</span>, and I was disappointed with the experience.</strong>
          </div>
        </div>
      </div>
    </div>

    <!-- Bước 3: Thân thư -->
    <div class="outline-step-card step-border-emerald">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-emerald"><i class="fa-solid fa-layer-group"></i> 3. THÂN THƯ (BODY PARAGRAPHS)</span>
        <span class="hl-pill hl-emerald">3 Thân thư: Vấn đề • Cảm xúc • Đề xuất giải pháp</span>
      </div>

      <!-- Thân thư 1: Trình bày các vấn đề cụ thể -->
      <div style="background: var(--bg-inner); padding: 1.1rem 1.3rem; border-radius: var(--radius-md); border: 1px solid var(--panel-border); margin-bottom: 1.15rem; font-size: 0.95rem; line-height: 1.7; color: var(--text-primary);">
        <div style="font-weight: 800; color: var(--cyan-light); margin-bottom: 0.65rem; font-size: 0.98rem;">
          <i class="fa-solid fa-triangle-exclamation"></i> Thân thư 1: Trình bày các vấn đề cụ thể
        </div>
        <p style="margin: 0 0 0.5rem 0; font-size: 0.88rem; color: var(--text-secondary);">
          Có thể sử dụng các cấu trúc sau:
        </p>
        <div style="display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 0.85rem; margin-left: 0.5rem;">
          <div class="formula-arrow-row">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content" style="color: var(--text-primary); font-weight: 700;">
              The main problem was that <span class="hl-placeholder">[vấn đề 1]</span>.
            </div>
          </div>
          <div class="formula-arrow-row">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content" style="color: var(--text-primary); font-weight: 700;">
              Another concern was that <span class="hl-placeholder">[vấn đề 2]</span>.
            </div>
          </div>
          <div class="formula-arrow-row">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content" style="color: var(--text-primary); font-weight: 700;">
              A further issue was that <span class="hl-placeholder">[vấn đề 3]</span>.
            </div>
          </div>
        </div>

        <p style="margin: 0 0 0.5rem 0; font-size: 0.88rem; color: var(--text-secondary);">
          Hoặc đa dạng hóa cách diễn đạt:
        </p>
        <div style="display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 0.85rem; margin-left: 0.5rem;">
          <div class="formula-arrow-row">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content" style="color: var(--text-primary); font-weight: 700;">
              To begin with, <span class="hl-placeholder">[vấn đề 1]</span>.
            </div>
          </div>
          <div class="formula-arrow-row">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content" style="color: var(--text-primary); font-weight: 700;">
              In addition, <span class="hl-placeholder">[vấn đề 2]</span>.
            </div>
          </div>
          <div class="formula-arrow-row">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content" style="color: var(--text-primary); font-weight: 700;">
              What made the situation worse was that <span class="hl-placeholder">[vấn đề 3]</span>.
            </div>
          </div>
        </div>

        <p style="margin: 0; color: var(--emerald-light); font-weight: 700; font-size: 0.88rem; text-align: justify !important; text-justify: inter-word !important;">
          <i class="fa-solid fa-circle-info"></i> LƯU Ý QUAN TRỌNG: Sau mỗi vấn đề, nên bổ sung chi tiết hoặc hậu quả để giải thích tại sao vấn đề đó đáng quan tâm.
        </p>
      </div>

      <!-- Thân thư 2: Giải thích cảm xúc -->
      <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.05)); border: 1px solid var(--rose-border); border-radius: var(--radius-md); padding: 1.1rem 1.3rem; margin-bottom: 1.15rem; font-size: 0.95rem; line-height: 1.7; color: var(--text-primary);">
        <div style="font-weight: 800; color: var(--rose-light); margin-bottom: 0.5rem; font-size: 0.98rem;">
          <i class="fa-solid fa-face-frown"></i> Thân thư 2: Giải thích cảm xúc
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="font-size: 1.02rem; font-weight: 800; color: var(--text-primary);">
            I was particularly disappointed with this experience because I expected a better level of quality and service.
          </div>
        </div>
      </div>

      <!-- Thân thư 3: Đề xuất giải pháp -->
      <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.05)); border: 1px solid var(--emerald-border); border-radius: var(--radius-md); padding: 1.1rem 1.3rem; margin-bottom: 1.15rem; font-size: 0.95rem; line-height: 1.7; color: var(--text-primary);">
        <div style="font-weight: 800; color: var(--emerald-light); margin-bottom: 0.5rem; font-size: 0.98rem;">
          <i class="fa-solid fa-screwdriver-wrench"></i> Thân thư 3: Đề xuất giải pháp
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.45rem; margin-left: 0.5rem;">
          <div class="formula-arrow-row">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content" style="color: var(--text-primary); font-weight: 700;">
              I would appreciate it if you could <span class="hl-placeholder">[đề xuất giải pháp cụ thể]</span>.
            </div>
          </div>
          <div class="formula-arrow-row">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content" style="color: var(--text-primary); font-weight: 700;">
              I would like to suggest that you <span class="hl-placeholder">[đề xuất giải pháp cụ thể]</span>.
            </div>
          </div>
          <div class="formula-arrow-row">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content" style="color: var(--text-primary); font-weight: 700;">
              I strongly recommend that the management <span class="hl-placeholder">[đề xuất giải pháp cụ thể]</span>.
            </div>
          </div>
          <div class="formula-arrow-row">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content" style="color: var(--text-primary); font-weight: 700;">
              I believe that steps should be taken to <span class="hl-placeholder">[biện pháp cần thực hiện]</span>.
            </div>
          </div>
        </div>
      </div>

      <!-- TỪ LIÊN KẾT GỢI Ý -->
      <div class="connector-flow-box" style="margin-bottom: 1.25rem;">
        <strong style="color: var(--emerald-light); font-size: 0.92rem;"><i class="fa-solid fa-route"></i> TỪ LIÊN KẾT GỢI Ý (ĐỀ XUẤT SỬ DỤNG):</strong>
        <div class="connector-chain-nodes" style="margin-top: 0.65rem; margin-bottom: 0.85rem;">
          <span class="flow-node-3d"><span class="flow-node-num">1</span> To begin with, <span class="hl-placeholder">[vấn đề 1]</span></span>
          <i class="fa-solid fa-arrow-right flow-arrow"></i>
          <span class="flow-node-3d"><span class="flow-node-num">2</span> In addition, <span class="hl-placeholder">[vấn đề 2]</span></span>
          <i class="fa-solid fa-arrow-right flow-arrow"></i>
          <span class="flow-node-3d"><span class="flow-node-num">3</span> What made the situation worse was that <span class="hl-placeholder">[vấn đề 3]</span></span>
        </div>
        <div style="border-top: 1px dashed var(--panel-border); padding-top: 0.65rem; font-size: 0.88rem; color: var(--text-primary);">
          <strong style="color: var(--cyan-light);">Hoặc chuỗi liên kết theo mức độ quan tâm:</strong>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.4rem;">
            <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.3rem 0.65rem;">The main problem was that …</span>
            <span class="hl-pill hl-emerald" style="font-size: 0.85rem; padding: 0.3rem 0.65rem;">Another concern was that …</span>
            <span class="hl-pill hl-amber" style="font-size: 0.85rem; padding: 0.3rem 0.65rem;">A further issue was that …</span>
          </div>
        </div>
      </div>

      <!-- BỘ CẤU TRÚC CÂU "ĂN ĐIỂM" BAND B2 ĐẶC TRƯNG -->
      <div class="bento-card card-theme-amber" style="margin: 1.25rem 0; padding: 1.25rem 1.4rem;">
        <div class="bento-card-header" style="margin-bottom: 1rem;">
          <div class="bento-header-left">
            <div class="bento-icon-badge badge-amber"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
            <div>
              <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary); margin: 0;">BỘ CẤU TRÚC CÂU "ĂN ĐIỂM" BAND B2 ĐẶC TRƯNG</h4>
              <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0.15rem 0 0 0; text-align: justify !important; text-justify: inter-word !important;">Phối hợp đa dạng các cấu trúc dưới đây vào phần Thân bài để bứt phá điểm Ngữ pháp & Từ vựng (kèm câu ví dụ mẫu):</p>
            </div>
          </div>
          <span class="hl-pill hl-amber"><i class="fa-solid fa-crown"></i> Chuẩn B2</span>
        </div>
        <div id="outlineStructuresContainer" class="formulas-grid-2col"></div>
      </div>
    </div>

    <!-- Bước 4: Kết thư -->
    <div class="outline-step-card step-border-amber">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-amber"><i class="fa-solid fa-heart"></i> 4. KẾT THƯ (CLOSING)</span>
        <span class="hl-pill hl-amber">Yêu cầu giải quyết vấn đề & Mong đợi hồi âm</span>
      </div>
      <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(234, 88, 12, 0.05)); border: 1px solid var(--amber-border); border-radius: var(--radius-md); padding: 1rem 1.25rem; font-size: 0.95rem; line-height: 1.7;">
        <div style="margin-bottom: 0.65rem;">
          <strong style="color: var(--amber-light);"><i class="fa-solid fa-clock"></i> Yêu cầu giải quyết vấn đề:</strong>
          <div class="formula-arrow-row" style="margin-left: 0.65rem; margin-top: 0.25rem; font-size: 1.02rem; color: var(--text-primary);">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content">
              <strong>I hope that these issues will be addressed promptly.</strong>
            </div>
          </div>
        </div>
        <div>
          <strong style="color: var(--cyan-light);"><i class="fa-solid fa-envelope"></i> Mong đợi hồi âm:</strong>
          <div class="formula-arrow-row" style="margin-left: 0.65rem; margin-top: 0.25rem; font-size: 1.02rem; color: var(--text-primary);">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content">
              <strong>I look forward to hearing from you soon.</strong>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bước 5: Lời chào kết thúc -->
    <div class="outline-step-card step-border-rose">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-rose"><i class="fa-solid fa-signature"></i> 5. LỜI CHÀO KẾT THÚC (SIGN-OFF)</span>
        <span class="hl-pill hl-rose">Đúng chuẩn từng văn phong</span>
      </div>
      <div style="background: var(--bg-inner); padding: 1rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--rose-border); font-size: 0.95rem; line-height: 1.7;">
        <div style="display: flex; flex-wrap: wrap; gap: 1.5rem;">
          <div>
            <strong style="color: var(--cyan-light);">• Thân mật:</strong>
            <div class="formula-arrow-row" style="margin-top: 0.25rem;">
              <span class="formula-arrow-icon">↳</span>
              <div class="formula-arrow-content" style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary);">
                Best wishes,
              </div>
            </div>
          </div>
          <div>
            <strong style="color: var(--violet-light);">• Trang trọng:</strong>
            <div class="formula-arrow-row" style="margin-top: 0.25rem;">
              <span class="formula-arrow-icon">↳</span>
              <div class="formula-arrow-content" style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary);">
                Yours faithfully,
              </div>
            </div>
          </div>
          <div>
            <strong style="color: var(--amber-light);">• Bán trang trọng:</strong>
            <div class="formula-arrow-row" style="margin-top: 0.25rem;">
              <span class="formula-arrow-icon">↳</span>
              <div class="formula-arrow-content" style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary);">
                Yours sincerely,
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- VÍ DỤ MINH HỌA & PHÂN TÍCH ĐỀ -->
    <div class="bento-card card-theme-emerald" style="padding: 1.4rem 1.6rem; margin-top: 1.75rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.85rem;">
        <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary); margin: 0;">
          <i class="fa-solid fa-book-open-reader" style="color: var(--emerald-light);"></i> VÍ DỤ MINH HOẠ (SAMPLE TOPIC & PROMPT ANALYSIS)
        </h4>
        <span class="hl-pill hl-emerald"><i class="fa-solid fa-star"></i> Đề mẫu B2</span>
      </div>

      <div style="background: var(--bg-card); border: 1.5px solid var(--emerald-border); border-radius: var(--radius-md); padding: 1.15rem 1.25rem; margin-bottom: 1.25rem; font-size: 0.95rem; line-height: 1.7; color: var(--text-primary);">
        <p style="margin: 0 0 0.5rem 0; font-weight: 700; text-align: justify !important; text-justify: inter-word !important;">
          You are a member of a local sports center. You have recently used the changing room and were not satisfied with its condition. Write an email to the manager of the sports center. In your email, you should:
        </p>
        <div style="margin: 0.5rem 0 0.65rem 0.5rem; display: flex; flex-direction: column; gap: 0.25rem; color: var(--text-secondary); font-size: 0.93rem;">
          <div>• Describe the problems you found in the changing room</div>
          <div>• Explain how the situation made you feel</div>
          <div>• Suggest what should be done to improve the facility</div>
        </div>
        <p style="margin: 0.5rem 0 0 0; text-align: justify !important; text-justify: inter-word !important;">
          You should write at least 120 words. <strong>Do not include your name or address. Your response will be evaluated in terms of Task Fulfillment, Organization, Vocabulary, and Grammar.</strong>
        </p>
      </div>

      <!-- 4 Câu hỏi Phân tích đề -->
      <h5 style="font-size: 0.95rem; font-weight: 800; color: var(--emerald-light); margin: 0 0 0.65rem 0;">
        <i class="fa-solid fa-compass"></i> PHÂN TÍCH ĐỀ BÀI (4 CÂU HỎI VÀNG):
      </h5>
      <div class="analysis-quad-grid" style="margin-top: 0.5rem;">
        <div class="analysis-step-item step-cyan" style="padding: 0.9rem 1rem;">
          <div class="analysis-step-top"><div class="num">1</div><span class="hl-pill hl-cyan">Người nhận</span></div>
          <div class="label">Người nhận là ai?</div>
          <div class="val">Quản lý trung tâm thể thao (The Manager of the Sports Center).</div>
        </div>
        <div class="analysis-step-item step-amber" style="padding: 0.9rem 1rem;">
          <div class="analysis-step-top"><div class="num">2</div><span class="hl-pill hl-amber">Mục đích</span></div>
          <div class="label">Mục đích bức thư là gì?</div>
          <div class="val">Khiếu nại về tình trạng xuống cấp, mất vệ sinh của phòng thay đồ, nêu cảm xúc thất vọng và đề xuất các giải pháp cải thiện cụ thể.</div>
        </div>
        <div class="analysis-step-item step-emerald" style="padding: 0.9rem 1rem;">
          <div class="analysis-step-top"><div class="num">3</div><span class="hl-pill hl-emerald">Văn phong</span></div>
          <div class="label">Đây là thư thân mật, trang trọng, hay bán trang trọng?</div>
          <div class="val">Thư trang trọng (Formal) hoặc bán trang trọng (Semi-formal) vì gửi tới người quản lý cơ sở.</div>
        </div>
        <div class="analysis-step-item step-rose" style="padding: 0.9rem 1rem;">
          <div class="analysis-step-top"><div class="num">4</div><span class="hl-pill hl-rose">Yêu cầu</span></div>
          <div class="label">Có những yêu cầu gì trong thư?</div>
          <div class="val">1. Miêu tả các sự cố trong phòng thay đồ (vệ sinh kém, sàn trơn, tủ đồ hỏng) • 2. Nêu cảm xúc bất an, thất vọng • 3. Đề xuất các biện pháp cải thiện cơ sở vật chất.</div>
        </div>
      </div>
    </div>

    <!-- PHẦN IV: NGÂN HÀNG Ý TƯỞNG GỢI Ý CHI TIẾT (13 GỢI Ý TRIỂN KHAI CHO ĐỀ PHÒNG THAY ĐỒ) -->
    <div class="bento-card card-theme-violet" style="padding: 1.4rem 1.6rem; margin-top: 1.75rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.85rem;">
        <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary); margin: 0;">
          <i class="fa-solid fa-lightbulb" style="color: var(--violet-light);"></i> IV. NGÂN HÀNG Ý TƯỞNG PHÁT TRIỂN BÀI VIẾT (13 GỢI Ý CHI TIẾT - CHỦ ĐỀ PHÒNG THAY ĐỒ)
        </h4>
        <span class="hl-pill hl-violet"><i class="fa-solid fa-layer-group"></i> 13 Nhóm vấn đề & Giải pháp</span>
      </div>
      <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0 0 1.15rem 0; text-align: justify !important; text-justify: inter-word !important;">
        Khi viết phần Thân bài, học viên chọn từ <strong>2 đến 3 vấn đề</strong> dưới đây để phát triển thành các câu hoàn chỉnh theo công thức: <em>Vấn đề cụ thể → Hậu quả / Cảm nhận → Đề xuất giải pháp khắc phục</em>:
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1rem;">
        
      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-broom" style="color: var(--cyan-light);"></i>
            <span>1. The dirty changing room (Phòng thay đồ bẩn)</span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 1</span>
          The changing room was poorly maintained. (Phòng thay đồ được giữ gìn kém.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            Rubbish was scattered across the floor, making the entire area look unhygienic and unpleasant to use. (Rác vương vãi khắp sàn nhà, khiến toàn bộ khu vực trông mất vệ sinh và gây cảm giác khó chịu khi sử dụng.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> arrange for the changing room to be cleaned more frequently (bố trí vệ sinh phòng thay đồ thường xuyên hơn)
          </div>
        </div>
      </div>
    
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 2</span>
          The changing room was not cleaned on a regular basis/ regularly. (Phòng thay đồ không được vệ sinh thường xuyên.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            An unpleasant smell lingered in the room, making it uncomfortable for members to change their clothes. (Mùi khó chịu lưu lại trong phòng, khiến các thành viên cảm thấy không thoải mái khi thay quần áo.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> improve the cleaning service and ensure regular maintenance (cải thiện dịch vụ vệ sinh và bảo đảm việc bảo trì thường xuyên)
          </div>
        </div>
      </div>
    
        </div>
      </div>
    
      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-lock" style="color: var(--cyan-light);"></i>
            <span>2. Broken lockers (Tủ khóa bị hỏng)</span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 1</span>
          Some of the lockers were out of order. (Một số tủ khóa không thể sử dụng được.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            I was unable to secure my personal belongings, which made me concerned about their safety. (Tôi không thể cất giữ đồ dùng cá nhân một cách an toàn, điều này khiến tôi lo lắng về sự an toàn của chúng.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> repair or replace the faulty lockers (sửa chữa hoặc thay thế các tủ khóa bị lỗi)
          </div>
        </div>
      </div>
    
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 2</span>
          There were insufficient lockers available for members. (Không có đủ tủ khóa cho các thành viên.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            I had to wait until a locker became available, which wasted valuable time before my workout. (Tôi phải chờ đến khi có tủ trống, điều này làm lãng phí thời gian quý báu trước buổi tập.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> install additional lockers to accommodate more members (lắp đặt thêm tủ khóa để phục vụ nhiều thành viên hơn)
          </div>
        </div>
      </div>
    
        </div>
      </div>
    
      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-shower" style="color: var(--cyan-light);"></i>
            <span>3. Broken showers (Vòi sen bị hỏng)</span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 1</span>
          Some of the showers were not functioning properly. (Một số vòi sen không hoạt động bình thường.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            I was unable to take a shower after exercising, which made it inconvenient to freshen up before leaving the center. (Tôi không thể tắm sau khi tập luyện, khiến việc vệ sinh cơ thể trước khi rời trung tâm trở nên bất tiện.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> repair the faulty showers as soon as possible (sửa chữa các vòi sen bị lỗi sớm nhất có thể)
          </div>
        </div>
      </div>
    
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 2</span>
          There was no hot water available. (Không có nước nóng.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            I had no choice but to take a cold shower after exercising, which was particularly uncomfortable. (Tôi không còn lựa chọn nào khác ngoài việc tắm nước lạnh sau khi tập luyện, điều này đặc biệt khó chịu.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> ensure a reliable supply of hot water (bảo đảm nguồn cung cấp nước nóng ổn định)
          </div>
        </div>
      </div>
    
        </div>
      </div>
    
      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-lightbulb" style="color: var(--cyan-light);"></i>
            <span>4. Broken lights (Đèn bị hỏng)</span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 1</span>
          Some of the lights were not working properly. (Một số đèn không hoạt động bình thường.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            The changing room was poorly lit, making it difficult for members to move around safely. (Phòng thay đồ thiếu ánh sáng, khiến các thành viên khó di chuyển an toàn.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> replace the faulty lights with new ones (thay các đèn bị lỗi bằng đèn mới)
          </div>
        </div>
      </div>
    
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 2</span>
          The lighting in the changing room was inadequate. (Hệ thống chiếu sáng trong phòng thay đồ không đủ.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            I found it difficult to locate my personal belongings, especially in the darker areas of the room. (Tôi thấy khó tìm đồ dùng cá nhân, đặc biệt ở những khu vực tối hơn trong phòng.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> install brighter lights to improve visibility (lắp đặt đèn sáng hơn để cải thiện tầm nhìn)
          </div>
        </div>
      </div>
    
        </div>
      </div>
    
      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-shirt" style="color: var(--cyan-light);"></i>
            <span>5. Clothes hooks (Móc treo đồ)</span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 1</span>
          There were insufficient clothes hooks available. (Không có đủ móc treo quần áo.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            I had to leave my clothes on a bench or the floor, where they could easily become dirty. (Tôi phải để quần áo trên ghế hoặc sàn nhà, nơi chúng có thể dễ bị bẩn.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> install additional clothes hooks (lắp đặt thêm móc treo quần áo)
          </div>
        </div>
      </div>
    
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 2</span>
          Some of the clothes hooks were damaged. (Một số móc treo quần áo bị hỏng.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            I was unable to hang my clothes properly, making it difficult to keep my belongings neat and organised. (Tôi không thể treo quần áo đúng cách, khiến việc giữ đồ đạc gọn gàng và ngăn nắp trở nên khó khăn.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> repair or replace the damaged clothes hooks (sửa chữa hoặc thay thế các móc treo quần áo bị hỏng)
          </div>
        </div>
      </div>
    
        </div>
      </div>
    
      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-chair" style="color: var(--cyan-light);"></i>
            <span>6. Dirty benches (Ghế ngồi bẩn)</span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 1</span>
          The benches were poorly maintained and visibly dirty. (Các ghế ngồi được giữ gìn kém và nhìn thấy rõ là rất bẩn.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            I felt uncomfortable sitting on them because their surfaces appeared to have been neglected for some time. (Tôi cảm thấy không thoải mái khi ngồi lên ghế vì bề mặt của chúng có vẻ đã bị bỏ bê trong một thời gian.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> clean and disinfect the benches more frequently (vệ sinh và khử trùng ghế thường xuyên hơn)
          </div>
        </div>
      </div>
    
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 2</span>
          There were not enough benches in the changing room. (Không có đủ ghế ngồi trong phòng thay đồ.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            I had to stand while changing my clothes, which was particularly inconvenient when the room was crowded. (Tôi phải đứng khi thay quần áo, điều này đặc biệt bất tiện khi phòng đông người.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> provide additional benches for members (bổ sung thêm ghế ngồi cho các thành viên)
          </div>
        </div>
      </div>
    
        </div>
      </div>
    
      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-triangle-exclamation" style="color: var(--cyan-light);"></i>
            <span>7. Slippery floor (Sàn nhà trơn trượt)</span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 1</span>
          The floor was wet and dangerously slippery. (Sàn nhà ướt và trơn trượt nguy hiểm.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            I was concerned that I might slip and injure myself, particularly when walking barefoot. (Tôi lo mình có thể trượt ngã và bị thương, đặc biệt khi đi chân trần.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> clean and dry the floor regularly to prevent accidents (thường xuyên vệ sinh và lau khô sàn nhà để ngăn ngừa tai nạn)
          </div>
        </div>
      </div>
    
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 2</span>
          Water had accumulated across the floor. (Nước đọng trên khắp sàn nhà.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            This made it difficult to move around safely and increased the risk of slips and falls. (Điều này khiến việc đi lại an toàn trở nên khó khăn và làm tăng nguy cơ trượt ngã.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> keep the floor clean and dry at all times (giữ sàn nhà sạch sẽ và khô ráo mọi lúc)
          </div>
        </div>
      </div>
    
        </div>
      </div>
    
      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-table-cells-large" style="color: var(--cyan-light);"></i>
            <span>8. Dirty mirrors (Gương bẩn)</span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 1</span>
          The mirrors were covered in dirt and stains. (Các tấm gương bị phủ đầy bụi bẩn và vết ố.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            I could not see my reflection clearly, making it difficult to check my appearance before leaving the center. (Tôi không thể nhìn rõ hình ảnh phản chiếu của mình, khiến việc kiểm tra diện mạo trước khi rời trung tâm trở nên khó khăn.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> clean the mirrors thoroughly and regularly (vệ sinh gương kỹ lưỡng và thường xuyên)
          </div>
        </div>
      </div>
    
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 2</span>
          Some of the mirrors were cracked. (Một số gương bị nứt.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            I was concerned that the damaged glass might break further and cause injuries to members. (Tôi lo rằng phần kính bị hỏng có thể vỡ thêm và gây thương tích cho các thành viên.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> replace the cracked mirrors immediately (thay thế ngay các tấm gương bị nứt)
          </div>
        </div>
      </div>
    
        </div>
      </div>
    
      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-wind" style="color: var(--cyan-light);"></i>
            <span>9. Broken hair dryers (Máy sấy tóc bị hỏng)</span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 1</span>
          Some of the hair dryers were out of order. (Một số máy sấy tóc không thể sử dụng được.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            I was unable to dry my hair after taking a shower, which was inconvenient before heading home or going to work. (Tôi không thể sấy khô tóc sau khi tắm, điều này gây bất tiện trước khi về nhà hoặc đi làm.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> repair or replace the faulty hair dryers (sửa chữa hoặc thay thế các máy sấy tóc bị lỗi)
          </div>
        </div>
      </div>
    
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 2</span>
          There were not enough hair dryers for members to use. (Không có đủ máy sấy tóc cho các thành viên sử dụng.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            I had to wait in a queue for an extended period, which delayed my departure from the sports center. (Tôi phải xếp hàng chờ trong một khoảng thời gian khá dài, khiến tôi rời trung tâm thể thao muộn hơn.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> provide additional hair dryers to reduce waiting times (bổ sung máy sấy tóc để giảm thời gian chờ đợi)
          </div>
        </div>
      </div>
    
        </div>
      </div>
    
      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-pump-soap" style="color: var(--cyan-light);"></i>
            <span>10. Hygiene products (Đồ dùng vệ sinh)</span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 1</span>
          There was no soap available near the sinks. (Không có xà phòng gần các bồn rửa tay.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            I was unable to wash my hands properly, raising concerns about basic hygiene in the facility. (Tôi không thể rửa tay đúng cách, làm dấy lên lo ngại về vấn đề vệ sinh cơ bản tại cơ sở.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> provide sufficient soap and refill the dispensers regularly (cung cấp đủ xà phòng và bổ sung vào các hộp đựng thường xuyên)
          </div>
        </div>
      </div>
    
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 2</span>
          There were no paper towels available. (Không có khăn giấy.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            I had no convenient way to dry my hands after washing them, which made the facilities less practical to use. (Tôi không có cách thuận tiện để lau khô tay sau khi rửa, khiến các tiện ích kém thuận tiện hơn khi sử dụng.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> provide paper towels or install hand dryers near the sinks (cung cấp khăn giấy hoặc lắp đặt máy sấy tay gần các bồn rửa)
          </div>
        </div>
      </div>
    
        </div>
      </div>
    
      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-trash-can" style="color: var(--cyan-light);"></i>
            <span>11. Full rubbish bins (Thùng rác đầy)</span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 1</span>
          The rubbish bins were overflowing. (Các thùng rác bị đầy tràn.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            Rubbish had accumulated inside and around the bins, making the changing room look unhygienic and unpleasant. (Rác tích tụ bên trong và xung quanh thùng, khiến phòng thay đồ trông mất vệ sinh và gây cảm giác khó chịu.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> empty the rubbish bins more frequently, especially during busy periods (đổ rác thường xuyên hơn, đặc biệt vào những thời điểm đông người)
          </div>
        </div>
      </div>
    
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 2</span>
          Rubbish was scattered around the bins. (Rác vương vãi xung quanh các thùng rác.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            This made the area look messy and unhygienic, creating a negative impression of the sports center. (Điều này khiến khu vực trông bừa bộn và mất vệ sinh, tạo ấn tượng tiêu cực về trung tâm thể thao.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> clean the area around the bins regularly and dispose of rubbish properly (thường xuyên vệ sinh khu vực xung quanh thùng rác và xử lý rác đúng cách)
          </div>
        </div>
      </div>
    
        </div>
      </div>
    
      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-wind" style="color: var(--cyan-light);"></i>
            <span>12. Unpleasant smell (Mùi khó chịu)</span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 1</span>
          There was a persistent unpleasant smell in the changing room. (Có mùi khó chịu dai dẳng trong phòng thay đồ.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            The smell made the room uncomfortable to use and negatively affected my overall experience at the sports center. (Mùi này khiến căn phòng trở nên khó chịu khi sử dụng và ảnh hưởng tiêu cực đến trải nghiệm tổng thể của tôi tại trung tâm thể thao.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> identify the source of the smell and improve the cleaning service (xác định nguồn gây mùi và cải thiện dịch vụ vệ sinh)
          </div>
        </div>
      </div>
    
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 2</span>
          The changing room was poorly ventilated. (Phòng thay đồ thông gió kém.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            As a result, the air felt stuffy and unpleasant, particularly when many members were using the room at the same time. (Do đó, không khí trở nên ngột ngạt và khó chịu, đặc biệt khi nhiều thành viên sử dụng phòng cùng lúc.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> install a more effective ventilation system (lắp đặt hệ thống thông gió hiệu quả hơn)
          </div>
        </div>
      </div>
    
        </div>
      </div>
    
      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-restroom" style="color: var(--cyan-light);"></i>
            <span>13. Dirty toilets (Nhà vệ sinh bẩn)</span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 1</span>
          The toilets were poorly maintained and unhygienic. (Nhà vệ sinh được giữ gìn kém và mất vệ sinh.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            The unsanitary conditions made me uncomfortable using the toilets and raised concerns about the overall hygiene standards of the sports center. (Điều kiện mất vệ sinh khiến tôi không thoải mái khi sử dụng nhà vệ sinh và làm dấy lên lo ngại về tiêu chuẩn vệ sinh chung của trung tâm thể thao.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> clean and disinfect the toilets more regularly (vệ sinh và khử trùng nhà vệ sinh thường xuyên hơn)
          </div>
        </div>
      </div>
    
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 0.92rem;">
          <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.5rem; margin-right: 0.35rem;">Ý 2</span>
          There was a strong unpleasant smell coming from the toilets. (Có mùi khó chịu nồng nặc phát ra từ nhà vệ sinh.)
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-bottom: 0.35rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            The smell spread to the surrounding area, making the entire section unpleasant to use. (Mùi này lan ra khu vực xung quanh, khiến toàn bộ khu vực trở nên khó chịu khi sử dụng.)
          </div>
        </div>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; font-size: 0.88rem; color: var(--emerald-light); font-weight: 600;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <i class="fa-solid fa-screwdriver-wrench" style="margin-right: 0.25rem;"></i> thoroughly clean the toilets and check the plumbing and ventilation systems (vệ sinh nhà vệ sinh kỹ lưỡng và kiểm tra hệ thống ống nước cùng hệ thống thông gió)
          </div>
        </div>
      </div>
    
        </div>
      </div>
    
      </div>
    </div>
  
  `,

  feedback: `
    <!-- 4 Bước Phân tích đề -->
    <div class="bento-card card-theme-cyan" style="padding: 1.25rem 1.5rem; margin-bottom: 1.35rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
        <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--text-primary); margin: 0;">
          <i class="fa-solid fa-compass" style="color: var(--cyan-light);"></i> 4 BƯỚC PHÂN TÍCH ĐỀ TRƯỚC KHI VIẾT (THƯ PHẢN HỒI, ĐÁNH GIÁ - FEEDBACK):
        </h4>
        <span class="hl-pill hl-cyan">Bán trang trọng • Trang trọng</span>
      </div>
      <div class="analysis-quad-grid" style="margin-top: 0.5rem;">
        <div class="analysis-step-item step-cyan" style="padding: 0.85rem 1rem;">
          <div class="analysis-step-top"><div class="num">1</div><span class="hl-pill hl-cyan">Người nhận</span></div>
          <div class="label">Người nhận là ai?</div>
          <div class="val">Ban tổ chức sự kiện, Giảng viên hoặc Quản lý dịch vụ.</div>
        </div>
        <div class="analysis-step-item step-amber" style="padding: 0.85rem 1rem;">
          <div class="analysis-step-top"><div class="num">2</div><span class="hl-pill hl-amber">Mục đích</span></div>
          <div class="label">Mục đích thư là gì?</div>
          <div class="val">Nhận xét cả điểm tích cực (khen) và điểm cần hoàn thiện (góp ý).</div>
        </div>
        <div class="analysis-step-item step-emerald" style="padding: 0.85rem 1rem;">
          <div class="analysis-step-top"><div class="num">3</div><span class="hl-pill hl-emerald">Văn phong</span></div>
          <div class="label">Văn phong là gì?</div>
          <div class="val">Khách quan, xây dựng, lịch thiệp (Semi-formal / Formal).</div>
        </div>
        <div class="analysis-step-item step-rose" style="padding: 0.85rem 1rem;">
          <div class="analysis-step-top"><div class="num">4</div><span class="hl-pill hl-rose">Yêu cầu</span></div>
          <div class="label">Có những yêu cầu gì?</div>
          <div class="val">Đánh giá cụ thể các khía cạnh và đề xuất phương án cải thiện.</div>
        </div>
      </div>
    </div>

    <!-- Bước 1 -->
    <div class="outline-step-card step-border-cyan">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-cyan"><i class="fa-solid fa-hand-wave"></i> BƯỚC 1: LỜI CHÀO MỞ ĐẦU (SALUTATION)</span>
      </div>
      <div style="background: var(--bg-inner); padding: 0.85rem 1.15rem; border-radius: var(--radius-md); border: 1px solid var(--cyan-border);">
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary);">
            Dear Organizers, / Dear Mr. / Ms. <span class="hl-placeholder">[họ]</span>,
          </div>
        </div>
      </div>
    </div>

    <!-- Bước 2 -->
    <div class="outline-step-card step-border-violet">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-violet"><i class="fa-solid fa-envelope-open-text"></i> BƯỚC 2: MỞ THƯ (OPENING)</span>
      </div>
      <div style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.14), rgba(168, 85, 247, 0.08)); border: 1px solid var(--violet-border); border-radius: var(--radius-md); padding: 1rem 1.25rem; font-size: 1.02rem; color: var(--text-primary); line-height: 1.7;">
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content">
            <strong><span class="hl-mark-opening">I am writing to provide my feedback on the recent conference and share some suggestions for future events.</span></strong>
          </div>
        </div>
      </div>
    </div>

    <!-- Bước 3 -->
    <div class="outline-step-card step-border-emerald">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-emerald"><i class="fa-solid fa-layer-group"></i> BƯỚC 3: THÂN THƯ (BODY PARAGRAPHS)</span>
      </div>

      <!-- BỘ CẤU TRÚC CÂU "ĂN ĐIỂM" BAND B2 ĐẶC TRƯNG -->
      <div class="bento-card card-theme-amber" style="margin: 1.25rem 0; padding: 1.25rem 1.4rem;">
        <div class="bento-card-header" style="margin-bottom: 1rem;">
          <div class="bento-header-left">
            <div class="bento-icon-badge badge-amber"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
            <div>
              <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary); margin: 0;">BỘ CẤU TRÚC CÂU "ĂN ĐIỂM" BAND B2 ĐẶC TRƯNG</h4>
              <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0.15rem 0 0 0; text-align: justify !important; text-justify: inter-word !important;">Phối hợp đa dạng các cấu trúc dưới đây vào phần Thân bài để bứt phá điểm Ngữ pháp & Từ vựng (kèm câu ví dụ mẫu):</p>
            </div>
          </div>
          <span class="hl-pill hl-amber"><i class="fa-solid fa-crown"></i> 8 Cấu trúc B2</span>
        </div>
        <div id="outlineStructuresContainer" class="formulas-grid-2col"></div>
      </div>

      <!-- Từ liên kết -->
      <div class="connector-flow-box">
        <strong style="color: var(--emerald-light); font-size: 0.86rem;"><i class="fa-solid fa-route"></i> SƠ ĐỒ CHUỖI TỪ LIÊN KẾT GỢI Ý CHUẨN:</strong>
        <div class="connector-chain-nodes" style="margin-top: 0.5rem;">
          <span class="flow-node-3d"><span class="flow-node-num">1</span> Regarding the positive aspects, …</span>
          <i class="fa-solid fa-arrow-right flow-arrow"></i>
          <span class="flow-node-3d"><span class="flow-node-num">2</span> Furthermore, …</span>
          <i class="fa-solid fa-arrow-right flow-arrow"></i>
          <span class="flow-node-3d"><span class="flow-node-num">3</span> However, one drawback was that …</span>
          <i class="fa-solid fa-arrow-right flow-arrow"></i>
          <span class="flow-node-3d"><span class="flow-node-num">4</span> In conclusion, …</span>
        </div>
      </div>
    </div>

    <!-- Bước 4 -->
    <div class="outline-step-card step-border-amber">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-amber"><i class="fa-solid fa-heart"></i> BƯỚC 4: KẾT THƯ (CLOSING)</span>
      </div>
      <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.14), rgba(234, 88, 12, 0.06)); border: 1px solid var(--amber-border); border-radius: var(--radius-md); padding: 0.9rem 1.2rem; font-size: 1.02rem; color: var(--text-primary);">
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content">
            <strong><span class="hl-mark-opening">I hope these comments will be helpful for organizing future sessions. Thank you for your dedication.</span></strong>
          </div>
        </div>
      </div>
    </div>

    <!-- Bước 5 -->
    <div class="outline-step-card step-border-rose">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-rose"><i class="fa-solid fa-signature"></i> BƯỚC 5: LỜI CHÀO KẾT THÚC (SIGN-OFF)</span>
      </div>
      <div style="background: var(--bg-inner); padding: 0.85rem 1.15rem; border-radius: var(--radius-md); border: 1px solid var(--rose-border);">
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content">
            <strong style="color: var(--text-primary); font-size: 1.02rem;">Yours sincerely,</strong>
          </div>
        </div>
      </div>
    </div>
  `,

  apology: `
    <!-- 4 Bước Phân tích đề -->
    <div class="bento-card card-theme-cyan" style="padding: 1.25rem 1.5rem; margin-bottom: 1.35rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
        <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--text-primary); margin: 0;">
          <i class="fa-solid fa-compass" style="color: var(--cyan-light);"></i> 4 BƯỚC PHÂN TÍCH ĐỀ TRƯỚC KHI VIẾT (THƯ XIN LỖI - APOLOGY):
        </h4>
        <span class="hl-pill hl-cyan">Thân mật hoặc Trang trọng</span>
      </div>
      <div class="analysis-quad-grid" style="margin-top: 0.5rem;">
        <div class="analysis-step-item step-cyan" style="padding: 0.85rem 1rem;">
          <div class="analysis-step-top"><div class="num">1</div><span class="hl-pill hl-cyan">Người nhận</span></div>
          <div class="label">Người nhận là ai?</div>
          <div class="val">Bạn bè thân thiết (Informal) hoặc Đối tác / Giáo viên (Formal).</div>
        </div>
        <div class="analysis-step-item step-amber" style="padding: 0.85rem 1rem;">
          <div class="analysis-step-top"><div class="num">2</div><span class="hl-pill hl-amber">Mục đích</span></div>
          <div class="label">Mục đích thư là gì?</div>
          <div class="val">Bày tỏ lời xin lỗi chân thành, giải thích lý do chính đáng và đề xuất bù đắp.</div>
        </div>
        <div class="analysis-step-item step-emerald" style="padding: 0.85rem 1rem;">
          <div class="analysis-step-top"><div class="num">3</div><span class="hl-pill hl-emerald">Văn phong</span></div>
          <div class="label">Văn phong là gì?</div>
          <div class="val">Thành thật, đồng cảm và có trách nhiệm.</div>
        </div>
        <div class="analysis-step-item step-rose" style="padding: 0.85rem 1rem;">
          <div class="analysis-step-top"><div class="num">4</div><span class="hl-pill hl-rose">Yêu cầu</span></div>
          <div class="label">Có những yêu cầu gì?</div>
          <div class="val">Xin lỗi ➔ Giải thích nguyên nhân ➔ Đưa ra hành động bù đắp cụ thể.</div>
        </div>
      </div>
    </div>

    <!-- Bước 1 -->
    <div class="outline-step-card step-border-cyan">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-cyan"><i class="fa-solid fa-hand-wave"></i> BƯỚC 1: LỜI CHÀO MỞ ĐẦU (SALUTATION)</span>
      </div>
      <div style="background: var(--bg-inner); padding: 0.85rem 1.15rem; border-radius: var(--radius-md); border: 1px solid var(--cyan-border);">
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary);">
            Dear <span class="hl-placeholder">[tên người nhận]</span>, / Dear Mr. / Ms. <span class="hl-placeholder">[họ]</span>,
          </div>
        </div>
      </div>
    </div>

    <!-- Bước 2 -->
    <div class="outline-step-card step-border-violet">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-violet"><i class="fa-solid fa-envelope-open-text"></i> BƯỚC 2: MỞ THƯ (OPENING)</span>
      </div>
      <div style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.14), rgba(168, 85, 247, 0.08)); border: 1px solid var(--violet-border); border-radius: var(--radius-md); padding: 1rem 1.25rem; font-size: 1.02rem; color: var(--text-primary); line-height: 1.7;">
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content">
            <strong><span class="hl-mark-opening">I am writing to sincerely apologize for missing our scheduled meeting yesterday.</span></strong>
          </div>
        </div>
      </div>
    </div>

    <!-- Bước 3 -->
    <div class="outline-step-card step-border-emerald">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-emerald"><i class="fa-solid fa-layer-group"></i> BƯỚC 3: THÂN THƯ (BODY PARAGRAPHS)</span>
      </div>

      <!-- BỘ CẤU TRÚC CÂU "ĂN ĐIỂM" BAND B2 ĐẶC TRƯNG -->
      <div class="bento-card card-theme-amber" style="margin: 1.25rem 0; padding: 1.25rem 1.4rem;">
        <div class="bento-card-header" style="margin-bottom: 1rem;">
          <div class="bento-header-left">
            <div class="bento-icon-badge badge-amber"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
            <div>
              <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary); margin: 0;">BỘ CẤU TRÚC CÂU "ĂN ĐIỂM" BAND B2 ĐẶC TRƯNG</h4>
              <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0.15rem 0 0 0; text-align: justify !important; text-justify: inter-word !important;">Phối hợp đa dạng các cấu trúc dưới đây vào phần Thân bài để bứt phá điểm Ngữ pháp & Từ vựng (kèm câu ví dụ mẫu):</p>
            </div>
          </div>
          <span class="hl-pill hl-amber"><i class="fa-solid fa-crown"></i> 8 Cấu trúc B2</span>
        </div>
        <div id="outlineStructuresContainer" class="formulas-grid-2col"></div>
      </div>

      <!-- Từ liên kết -->
      <div class="connector-flow-box">
        <strong style="color: var(--emerald-light); font-size: 0.86rem;"><i class="fa-solid fa-route"></i> SƠ ĐỒ CHUỖI TỪ LIÊN KẾT GỢI Ý CHUẨN:</strong>
        <div class="connector-chain-nodes" style="margin-top: 0.5rem;">
          <span class="flow-node-3d"><span class="flow-node-num">1</span> First, I’m really sorry that …</span>
          <i class="fa-solid fa-arrow-right flow-arrow"></i>
          <span class="flow-node-3d"><span class="flow-node-num">2</span> The reason was that …</span>
          <i class="fa-solid fa-arrow-right flow-arrow"></i>
          <span class="flow-node-3d"><span class="flow-node-num">3</span> Let me make it up to you by …</span>
        </div>
      </div>
    </div>

    <!-- Bước 4 -->
    <div class="outline-step-card step-border-amber">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-amber"><i class="fa-solid fa-heart"></i> BƯỚC 4: KẾT THƯ (CLOSING)</span>
      </div>
      <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.14), rgba(234, 88, 12, 0.06)); border: 1px solid var(--amber-border); border-radius: var(--radius-md); padding: 0.9rem 1.2rem; font-size: 1.02rem; color: var(--text-primary);">
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content">
            <strong><span class="hl-mark-opening">Once again, I truly apologize for any inconvenience caused. I look forward to catching up with you soon.</span></strong>
          </div>
        </div>
      </div>
    </div>

    <!-- Bước 5 -->
    <div class="outline-step-card step-border-rose">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-rose"><i class="fa-solid fa-signature"></i> BƯỚC 5: LỜI CHÀO KẾT THÚC (SIGN-OFF)</span>
      </div>
      <div style="background: var(--bg-inner); padding: 0.85rem 1.15rem; border-radius: var(--radius-md); border: 1px solid var(--rose-border);">
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="font-size: 1.02rem; color: var(--text-primary);">
            <strong>Best wishes,</strong> / <strong>Yours sincerely,</strong>
          </div>
        </div>
      </div>
    </div>
  `,

  application: `
    <!-- 4 Bước Phân tích đề -->
    <div class="bento-card card-theme-cyan" style="padding: 1.25rem 1.5rem; margin-bottom: 1.35rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
        <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--text-primary); margin: 0;">
          <i class="fa-solid fa-compass" style="color: var(--cyan-light);"></i> 4 BƯỚC PHÂN TÍCH ĐỀ TRƯỚC KHI VIẾT (THƯ ỨNG TUYỂN - APPLICATION):
        </h4>
        <span class="hl-pill hl-violet">100% Trang trọng (Formal)</span>
      </div>
      <div class="analysis-quad-grid" style="margin-top: 0.5rem;">
        <div class="analysis-step-item step-cyan" style="padding: 0.85rem 1rem;">
          <div class="analysis-step-top"><div class="num">1</div><span class="hl-pill hl-cyan">Người nhận</span></div>
          <div class="label">Người nhận là ai?</div>
          <div class="val">Nhà tuyển dụng, Ban điều hành câu lạc bộ hoặc Hội đồng xét tuyển.</div>
        </div>
        <div class="analysis-step-item step-amber" style="padding: 0.85rem 1rem;">
          <div class="analysis-step-top"><div class="num">2</div><span class="hl-pill hl-amber">Mục đích</span></div>
          <div class="label">Mục đích thư là gì?</div>
          <div class="val">Bày tỏ nguyện vọng ứng tuyển, chứng minh năng lực và kinh nghiệm phù hợp.</div>
        </div>
        <div class="analysis-step-item step-emerald" style="padding: 0.85rem 1rem;">
          <div class="analysis-step-top"><div class="num">3</div><span class="hl-pill hl-emerald">Văn phong</span></div>
          <div class="label">Văn phong là gì?</div>
          <div class="val">Chuyên nghiệp, tự tin, trang trọng (Tuyệt đối không dùng tiếng lóng hay viết tắt).</div>
        </div>
        <div class="analysis-step-item step-rose" style="padding: 0.85rem 1rem;">
          <div class="analysis-step-top"><div class="num">4</div><span class="hl-pill hl-rose">Yêu cầu</span></div>
          <div class="label">Có những yêu cầu gì?</div>
          <div class="val">Nêu vị trí ứng tuyển ➔ Trình bày kỹ năng/kinh nghiệm ➔ Đề xuất phỏng vấn.</div>
        </div>
      </div>
    </div>

    <!-- Bước 1 -->
    <div class="outline-step-card step-border-cyan">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-cyan"><i class="fa-solid fa-hand-wave"></i> BƯỚC 1: LỜI CHÀO MỞ ĐẦU (SALUTATION)</span>
        <span class="hl-pill hl-violet">Trang trọng</span>
      </div>
      <div style="background: var(--bg-inner); padding: 0.85rem 1.15rem; border-radius: var(--radius-md); border: 1px solid var(--cyan-border);">
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary);">
            Dear Hiring Manager, / Dear Sir/Madam,
          </div>
        </div>
      </div>
    </div>

    <!-- Bước 2 -->
    <div class="outline-step-card step-border-violet">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-violet"><i class="fa-solid fa-envelope-open-text"></i> BƯỚC 2: MỞ THƯ (OPENING)</span>
      </div>
      <div style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.14), rgba(168, 85, 247, 0.08)); border: 1px solid var(--violet-border); border-radius: var(--radius-md); padding: 1rem 1.25rem; font-size: 1.02rem; color: var(--text-primary); line-height: 1.7;">
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content">
            <strong><span class="hl-mark-opening">I am writing to express my strong interest in the volunteer position advertised on your university website.</span></strong>
          </div>
        </div>
      </div>
    </div>

    <!-- Bước 3 -->
    <div class="outline-step-card step-border-emerald">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-emerald"><i class="fa-solid fa-layer-group"></i> BƯỚC 3: THÂN THƯ (BODY PARAGRAPHS)</span>
      </div>

      <!-- BỘ CẤU TRÚC CÂU "ĂN ĐIỂM" BAND B2 ĐẶC TRƯNG -->
      <div class="bento-card card-theme-amber" style="margin: 1.25rem 0; padding: 1.25rem 1.4rem;">
        <div class="bento-card-header" style="margin-bottom: 1rem;">
          <div class="bento-header-left">
            <div class="bento-icon-badge badge-amber"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
            <div>
              <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary); margin: 0;">BỘ CẤU TRÚC CÂU "ĂN ĐIỂM" BAND B2 ĐẶC TRƯNG</h4>
              <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0.15rem 0 0 0; text-align: justify !important; text-justify: inter-word !important;">Phối hợp đa dạng các cấu trúc dưới đây vào phần Thân bài để bứt phá điểm Ngữ pháp & Từ vựng (kèm câu ví dụ mẫu):</p>
            </div>
          </div>
          <span class="hl-pill hl-amber"><i class="fa-solid fa-crown"></i> 8 Cấu trúc B2</span>
        </div>
        <div id="outlineStructuresContainer" class="formulas-grid-2col"></div>
      </div>

      <!-- Từ liên kết -->
      <div class="connector-flow-box">
        <strong style="color: var(--emerald-light); font-size: 0.86rem;"><i class="fa-solid fa-route"></i> SƠ ĐỒ CHUỖI TỪ LIÊN KẾT GỢI Ý CHUẨN:</strong>
        <div class="connector-chain-nodes" style="margin-top: 0.5rem;">
          <span class="flow-node-3d"><span class="flow-node-num">1</span> First of all, regarding my qualifications, …</span>
          <i class="fa-solid fa-arrow-right flow-arrow"></i>
          <span class="flow-node-3d"><span class="flow-node-num">2</span> In addition, …</span>
          <i class="fa-solid fa-arrow-right flow-arrow"></i>
          <span class="flow-node-3d"><span class="flow-node-num">3</span> Furthermore, I have developed …</span>
          <i class="fa-solid fa-arrow-right flow-arrow"></i>
          <span class="flow-node-3d"><span class="flow-node-num">4</span> Finally, …</span>
        </div>
      </div>
    </div>

    <!-- Bước 4 -->
    <div class="outline-step-card step-border-amber">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-amber"><i class="fa-solid fa-heart"></i> BƯỚC 4: KẾT THƯ (CLOSING)</span>
      </div>
      <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.14), rgba(234, 88, 12, 0.06)); border: 1px solid var(--amber-border); border-radius: var(--radius-md); padding: 0.9rem 1.2rem; font-size: 1.02rem; color: var(--text-primary);">
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content">
            <strong><span class="hl-mark-opening">Thank you for considering my application. I would welcome the opportunity to discuss my qualifications with you in an interview.</span></strong>
          </div>
        </div>
      </div>
    </div>

    <!-- Bước 5 -->
    <div class="outline-step-card step-border-rose">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-rose"><i class="fa-solid fa-signature"></i> BƯỚC 5: LỜI CHÀO KẾT THÚC (SIGN-OFF)</span>
      </div>
      <div style="background: var(--bg-inner); padding: 0.85rem 1.15rem; border-radius: var(--radius-md); border: 1px solid var(--rose-border);">
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content">
            <strong style="color: var(--text-primary); font-size: 1.02rem;">Yours faithfully,</strong>
          </div>
        </div>
      </div>
    </div>
  `
};
