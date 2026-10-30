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
        example: "The main problem was that the changing room was poorly maintained. Rubbish was scattered across the floor, so the entire area looked unhygienic and unpleasant to use."
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
    purpose: "Đưa ra đánh giá, nhận xét khách quan về một sản phẩm, dịch vụ, cơ sở vật chất hoặc sự kiện đã trải nghiệm (khen ngợi điểm tích cực, phản ánh điểm chưa hài lòng và đề xuất giải pháp cải thiện cụ thể).",
    typical_register: "Bán trang trọng (Semi-formal) hoặc Trang trọng (Formal).",
    signs: [
      "give/provide feedback on …",
      "share your opinion about …",
      "describe your experience with …",
      "write a letter to comment on …",
      "say what you liked or did not like about …",
      "say what you were satisfied or dissatisfied with …",
      "express your satisfaction or dissatisfaction with …",
      "make suggestions for improvement"
    ],
    b2_power_structures: [
      { pattern: "One aspect I appreciated was [điểm tích cực] because [lý do].", meaning: "Một khía cạnh tôi rất đánh giá cao là [điểm tích cực] bởi vì [lý do].", example: "One aspect I appreciated was the spacious and spotless room because it provided a remarkably relaxing atmosphere." },
      { pattern: "I was very satisfied with [điểm tích cực], as [lý do].", meaning: "Tôi rất hài lòng với [điểm tích cực], bởi vì [lý do].", example: "I was very satisfied with the customer service, as the front desk staff were polite, welcoming, and always ready to help." },
      { pattern: "I was particularly impressed with [điểm tích cực] because [lý do].", meaning: "Tôi đặc biệt ấn tượng với [điểm tích cực] bởi vì [lý do].", example: "I was particularly impressed with the prompt check-in process because it saved us valuable time after a long journey." },
      { pattern: "The quality of [điểm tích cực] was excellent, which made my experience more enjoyable. In fact, [lý do].", meaning: "Chất lượng của [điểm tích cực] rất tuyệt vời, khiến trải nghiệm thêm phần thú vị. Trên thực tế, [lý do].", example: "The quality of the cuisine was excellent, which made my experience more enjoyable. In fact, every dish was freshly prepared." },
      { pattern: "One issue that I encountered was [điểm chưa hài lòng] because [lý do].", meaning: "Một vấn đề mà tôi gặp phải là [điểm chưa hài lòng] bởi vì [lý do].", example: "One issue that I encountered was the unstable Wi-Fi connection because it disrupted my urgent online meetings." },
      { pattern: "I was quite disappointed with [điểm chưa hài lòng], as [lý do].", meaning: "Tôi khá thất vọng với [điểm chưa hài lòng], bởi vì [lý do].", example: "I was quite disappointed with the limited breakfast choices, as there were very few nutritious options available." },
      { pattern: "The quality of [điểm chưa hài lòng] was not as good as I had expected. To be specific, [lý do].", meaning: "Chất lượng của [điểm chưa hài lòng] không được tốt như kỳ vọng. Cụ thể là, [lý do].", example: "The quality of the room air conditioning was not as good as I had expected. To be specific, it made a loud noise throughout the night." },
      { pattern: "I suggest that you [hành động – Vo]. / It would be better if you could [hành động – Vo].", meaning: "Tôi đề xuất quý vị nên... / Sẽ tốt hơn nhiều nếu quý vị có thể...", example: "I suggest that you upgrade the Wi-Fi network and diversify the morning breakfast menu to satisfy more guests." }
    ],
    connectors_hint: "First of all, I would like to mention some positive aspects of … → However, there were also some areas that could be improved. → To improve the quality, I have a few suggestions.",
    analysis_questions: [
      "Người nhận là ai?",
      "Mục đích bức thư là gì?",
      "Đây là thư thân mật, trang trọng, hay bán trang trọng?",
      "Có những yêu cầu gì trong thư?"
    ]
  },

  apology: {
    category_id: "apology",
    title_vi: "Thư xin lỗi",
    title_en: "Letter of Apology",
    badge: "TYPE 06 - B2 LEVEL",
    purpose: "Bày tỏ lời xin lỗi chân thành về một sai sót, sự cố lỡ hẹn hoặc việc không thể hoàn thành cam kết; giải thích lý do cụ thể và đưa ra phương án đền bù / khắc phục hậu quả.",
    typical_register: "Thân mật (Informal), Bán trang trọng (Semi-formal) hoặc Trang trọng (Formal).",
    signs: [
      "apologize for / say sorry for …",
      "explain why you … (missed …, were late …, forgot …, damaged …, etc.)",
      "say how you will make up for it",
      "explain the situation and offer a solution",
      "apologize for not being able to …",
      "explain the reason for …"
    ],
    b2_power_structures: [
      { pattern: "I’m really sorry that I couldn’t [Vo] because [mệnh đề]. (Thân mật)", meaning: "Tớ thực sự xin lỗi vì đã không thể... bởi vì...", example: "I’m really sorry that I couldn’t return your book earlier because I was overwhelmed with exam preparation." },
      { pattern: "I didn’t mean to [Vo], but [mệnh đề]. (Thân mật)", meaning: "Tớ không hề cố ý..., nhưng...", example: "I didn’t mean to forget our agreement, but urgent family matters kept me occupied all week." },
      { pattern: "I couldn’t manage to [Vo] because [mệnh đề]. (Thân mật)", meaning: "Tớ đã không thể thu xếp để... bởi vì...", example: "I couldn’t manage to visit you last Sunday because I had to finish several urgent course assignments." },
      { pattern: "Let me make it up to you by [V-ing], and I’ll make sure this does not happen again. (Thân mật)", meaning: "Hãy để tớ chuộc lỗi bằng cách..., và tớ đảm bảo điều này sẽ không lặp lại.", example: "Let me make it up to you by treating you to a cup of milk tea and snacks this Saturday afternoon." },
      { pattern: "The reason why I could not [Vo] was that [mệnh đề]. (Trang trọng)", meaning: "Lý do tôi đã không thể... là vì...", example: "The reason why I could not submit the research paper on time was that my laptop hard drive failed unexpectedly." },
      { pattern: "I regret that I was unable to [Vo] because [mệnh đề]. (Trang trọng)", meaning: "Tôi rất lấy làm tiếc vì đã không thể... bởi vì...", example: "I regret that I was unable to attend the faculty seminar because I was hospitalized for a severe fever." },
      { pattern: "Because [mệnh đề], I was unable to [Vo]. (Trang trọng)", meaning: "Bởi vì..., tôi đã không thể...", example: "Because unforeseen transportation delays blocked the highway, I was unable to arrive at the presentation on schedule." },
      { pattern: "I would like to make up for this by [V-ing]. I will make every effort to avoid similar situations. (Trang trọng)", meaning: "Tôi xin được đền bù bằng cách... Tôi sẽ nỗ lực hết mình để tránh tình huống tương tự.", example: "I would like to make up for this by submitting the finalized thesis directly to your office first thing tomorrow." }
    ],
    connectors_hint: "Thân mật: First of all, let me explain why this happened. → Furthermore, … → Let me make it up to you by … | Trang trọng: First of all, I would like to explain why this happened. → In addition, … → I would like to make up for this by …",
    analysis_questions: [
      "Người nhận là ai?",
      "Mục đích bức thư là gì?",
      "Đây là thư thân mật, trang trọng, hay bán trang trọng?",
      "Có những yêu cầu gì trong thư?"
    ]
  },

  application: {
    category_id: "application",
    title_vi: "Thư ứng tuyển",
    title_en: "Letter of Application",
    badge: "TYPE 07 - B2 LEVEL",
    purpose: "Bày tỏ nguyện vọng ứng tuyển vào một vị trí công việc bán thời gian/toàn thời gian, dự án tình nguyện hoặc vị trí thực tập; trình bày trình độ học vấn, kinh nghiệm và khẳng định sự phù hợp với tổ chức.",
    typical_register: "100% Trang trọng (Formal Letter).",
    signs: [
      "apply for the position of …",
      "apply for the job of …",
      "write a letter of application",
      "respond to a job advertisement",
      "express your interest in a job vacancy",
      "apply for a part-time/full-time job"
    ],
    b2_power_structures: [
      { pattern: "I am writing to apply for the position of [vị trí], which was advertised on/in [nguồn].", meaning: "Tôi viết thư này để ứng tuyển vào vị trí [vị trí công việc], được đăng tuyển trên [nguồn tuyển dụng].", example: "I am writing to apply for the position of Sales Assistant, which was advertised on your company website." },
      { pattern: "I am particularly interested in this position because it closely matches my interests and career goals.", meaning: "Tôi đặc biệt quan tâm đến vị trí này vì nó hoàn toàn phù hợp với sở thích và mục tiêu nghề nghiệp của tôi.", example: "I am particularly interested in this position because it closely matches my career aspirations in fashion retail." },
      { pattern: "In addition, I have a strong interest in [hoạt động], which motivates me to apply for this role.", meaning: "Ngoài ra, tôi có niềm đam mê lớn đối với..., điều này thôi thúc tôi ứng tuyển vào vị trí này.", example: "In addition, I have a strong interest in styling and customer care, which motivates me to apply for this role." },
      { pattern: "I believe this job will give me a valuable opportunity to apply my knowledge and gain practical experience.", meaning: "Tôi tin rằng công việc này sẽ cho tôi cơ hội quý giá để áp dụng kiến thức và tích lũy kinh nghiệm thực tế.", example: "I believe this job will give me a valuable opportunity to apply my knowledge and gain practical customer service experience." },
      { pattern: "I recently graduated from [trường] with a bachelor’s degree in [ngành]. / I am currently studying [ngành] at [trường].", meaning: "Tôi vừa tốt nghiệp trường... với bằng cử nhân ngành... / Tôi hiện đang theo học ngành... tại trường...", example: "I recently graduated from Can Tho University with a bachelor’s degree in Business Administration." },
      { pattern: "During my studies, I developed a good understanding of my field and gained useful practical skills.", meaning: "Trong quá trình học tập, tôi đã xây dựng hiểu biết vững vàng về lĩnh vực của mình và tiếp thu nhiều kỹ năng thực tế.", example: "During my studies, I developed a good understanding of retail operations and interpersonal communication." },
      { pattern: "I worked part-time as a [vị trí] at [nơi làm]. In this role, I was responsible for [nhiệm vụ].", meaning: "Tôi từng làm việc bán thời gian ở vị trí... tại... Trong vai trò này, tôi chịu trách nhiệm về...", example: "I worked part-time as a sales assistant at a clothing store. In this role, I was responsible for welcoming shoppers and handling transactions." },
      { pattern: "I believe I would be a suitable candidate for this position because I am [đặc điểm tính cách].", meaning: "Tôi tin rằng mình sẽ là ứng viên phù hợp cho vị trí này vì tôi là người...", example: "I believe I would be a suitable candidate for this position because I am enthusiastic, honest, and hardworking." }
    ],
    connectors_hint: "I am particularly interested in this position because … → During my studies, I … / In this role, I was responsible for … → Finally, I believe I would be a suitable candidate because …",
    analysis_questions: [
      "Người nhận là ai?",
      "Mục đích bức thư là gì?",
      "Đây là thư thân mật, trang trọng, hay bán trang trọng?",
      "Có những yêu cầu gì trong thư?"
    ]
  }
};

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

        <!-- HỘP NGUYÊN TẮC VÀNG: CẤU TRÚC THEO TỪNG CẶP CÂU -->
        <div style="background: rgba(239, 68, 68, 0.08); border: 1.5px solid var(--rose-border); border-radius: var(--radius-sm); padding: 0.95rem 1.15rem; margin-bottom: 1rem; font-size: 0.88rem; line-height: 1.65; color: var(--text-primary);">
          <strong style="color: var(--rose-light); display: inline-flex; align-items: center; gap: 0.4rem; margin-bottom: 0.35rem; font-size: 0.92rem;">
            <i class="fa-solid fa-circle-exclamation"></i> NGUYÊN TẮC BẮT BUỘC TRONG THÂN THƯ 1: CẤU TRÚC THEO TỪNG CẶP CÂU
          </strong>
          <p style="margin: 0; text-align: justify !important; text-justify: inter-word !important;">
            Đối với thư phàn nàn, mỗi vấn đề được nêu ra trong Thân thư 1 luôn gồm <strong>1 CẶP CÂU HOÀN CHỈNH</strong>:
          </p>
          <div style="margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.4rem; padding-left: 0.5rem;">
            <div class="formula-arrow-row">
              <span class="formula-arrow-icon" style="color: var(--rose-light);">1.</span>
              <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
                <strong>Câu vấn đề chính:</strong> Nêu rõ sự việc gặp sự cố bằng các cấu trúc dẫn dắt (<em>The main problem was that... / Another concern was that... / A further issue was that...</em>).
              </div>
            </div>
            <div class="formula-arrow-row">
              <span class="formula-arrow-icon" style="color: var(--amber-light);">2.</span>
              <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
                <strong>Câu mô tả cụ thể:</strong> Đi kèm ngay phía sau để mô tả chi tiết biểu hiện thực tế hoặc hậu quả/bất tiện trực tiếp đến người viết (dùng câu độc lập hoặc mệnh đề quan hệ đầy đủ, tuyệt đối không dùng rút gọn đại từ quan hệ).
              </div>
            </div>
          </div>
        </div>

        <p style="margin: 0 0 0.5rem 0; font-size: 0.88rem; color: var(--text-secondary);">
          Có thể sử dụng các cấu trúc dẫn dắt sau:
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
          <i class="fa-solid fa-circle-info"></i> LƯU Ý QUAN TRỌNG: Sau mỗi vấn đề, luôn đi kèm 1 câu mô tả chi tiết hoặc hậu quả để giải thích tại sao vấn đề đó đáng quan tâm.
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
        Khi viết phần Thân bài, học viên chọn từ <strong>2 đến 3 vấn đề</strong> dưới đây. Mỗi vấn đề triển khai theo quy tắc: <strong>1 Cặp câu ở Thân thư 1</strong> (Câu vấn đề chính + Câu mô tả cụ thể/hậu quả) và <strong>1 câu Đề xuất giải pháp</strong> dành riêng cho Thân thư 3 (tuyệt đối không dùng rút gọn đại từ quan hệ):
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1rem;">
        
      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-broom" style="color: var(--cyan-light);"></i>
            <span>1. The dirty changing room <span style="font-size: 0.85rem; font-weight: 500; color: var(--text-muted);">(Phòng thay đồ bẩn)</span></span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            The changing room was poorly maintained.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Phòng thay đồ được giữ gìn kém.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              Rubbish was scattered across the floor, so the entire area looked unhygienic and unpleasant to use.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Rác vương vãi khắp sàn nhà, vì vậy toàn bộ khu vực trông mất vệ sinh và gây cảm giác khó chịu khi sử dụng.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I would appreciate it if you could arrange for the changing room to be cleaned more frequently.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi sẽ rất cảm kích nếu quý vị có thể bố trí vệ sinh phòng thay đồ thường xuyên hơn.)</div>
          </div>
        </div>
        
      </div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            The changing room was not cleaned on a regular basis.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Phòng thay đồ không được vệ sinh thường xuyên.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              An unpleasant smell lingered in the room, so members felt uncomfortable when changing their clothes.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Mùi khó chịu lưu lại trong phòng, vì vậy các thành viên cảm thấy không thoải mái khi thay quần áo.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I strongly recommend that you improve the cleaning service and ensure regular maintenance.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi tha thiết đề xuất quý vị cải thiện dịch vụ vệ sinh và bảo đảm việc bảo trì thường xuyên.)</div>
          </div>
        </div>
        
      </div>
          
        </div>
      </div>
  

      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-lock" style="color: var(--cyan-light);"></i>
            <span>2. Broken lockers <span style="font-size: 0.85rem; font-weight: 500; color: var(--text-muted);">(Tủ khóa bị hỏng)</span></span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            Some of the lockers were out of order.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Một số tủ khóa không thể sử dụng được.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              I was unable to secure my personal belongings, so I felt very concerned about their safety.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi không thể cất giữ đồ dùng cá nhân một cách an toàn, vì vậy tôi cảm thấy rất lo lắng về sự an toàn của chúng.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I would like to suggest that you repair or replace the faulty lockers as soon as possible.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi muốn gợi ý rằng quý vị sửa chữa hoặc thay thế các tủ khóa bị lỗi sớm nhất có thể.)</div>
          </div>
        </div>
        
      </div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            There were insufficient lockers available for members.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Không có đủ tủ khóa cho các thành viên.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              I had to wait until a locker became available, and this wasted valuable time before my workout.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi phải chờ đến khi có tủ trống, và điều này làm lãng phí thời gian quý báu trước buổi tập.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I suggest that you install additional lockers to accommodate more members.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi đề xuất quý vị lắp đặt thêm tủ khóa để phục vụ nhiều thành viên hơn.)</div>
          </div>
        </div>
        
      </div>
          
        </div>
      </div>
  

      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-shower" style="color: var(--cyan-light);"></i>
            <span>3. Broken showers <span style="font-size: 0.85rem; font-weight: 500; color: var(--text-muted);">(Vòi sen bị hỏng)</span></span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            Some of the showers were not functioning properly.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Một số vòi sen không hoạt động bình thường.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              I was unable to take a shower after exercising, so it was very inconvenient to freshen up before leaving the center.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi không thể tắm sau khi tập luyện, vì vậy rất bất tiện để vệ sinh cơ thể trước khi rời trung tâm.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I would appreciate it if you could repair the faulty showers as soon as possible.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi sẽ rất cảm kích nếu quý vị có thể sửa chữa các vòi sen bị lỗi sớm nhất có thể.)</div>
          </div>
        </div>
        
      </div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            There was no hot water available in the showers.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Không có nước nóng trong các vòi sen.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              I had no choice but to take a cold shower after exercising, and it was particularly uncomfortable.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi không còn lựa chọn nào khác ngoài việc tắm nước lạnh sau khi tập luyện, và điều này đặc biệt khó chịu.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I strongly recommend that the management ensure a reliable supply of hot water.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi tha thiết đề xuất ban quản lý bảo đảm nguồn cung cấp nước nóng ổn định.)</div>
          </div>
        </div>
        
      </div>
          
        </div>
      </div>
  

      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-lightbulb" style="color: var(--cyan-light);"></i>
            <span>4. Broken lights <span style="font-size: 0.85rem; font-weight: 500; color: var(--text-muted);">(Đèn bị hỏng)</span></span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            Some of the lights were not working properly.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Một số đèn không hoạt động bình thường.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              The changing room was poorly lit, so it was difficult for members to move around safely.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Phòng thay đồ thiếu ánh sáng, vì vậy các thành viên gặp khó khăn khi di chuyển an toàn.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I suggest that you replace the faulty lights with new ones promptly.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi đề xuất quý vị thay các đèn bị lỗi bằng đèn mới kịp thời.)</div>
          </div>
        </div>
        
      </div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            The lighting in the changing room was inadequate.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Hệ thống chiếu sáng trong phòng thay đồ không đủ.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              I found it difficult to locate my personal belongings, especially in the darker areas of the room.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi thấy khó tìm đồ dùng cá nhân, đặc biệt ở những khu vực tối hơn trong phòng.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I believe that steps should be taken to install brighter lights to improve visibility.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi tin rằng các biện pháp cần được thực hiện để lắp đặt đèn sáng hơn nhằm cải thiện tầm nhìn.)</div>
          </div>
        </div>
        
      </div>
          
        </div>
      </div>
  

      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-shirt" style="color: var(--cyan-light);"></i>
            <span>5. Clothes hooks <span style="font-size: 0.85rem; font-weight: 500; color: var(--text-muted);">(Móc treo đồ)</span></span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            There were insufficient clothes hooks available.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Không có đủ móc treo quần áo.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              I had to leave my clothes on a bench or the floor, so they could easily become dirty.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi phải để quần áo trên ghế hoặc sàn nhà, nơi chúng có thể dễ bị bẩn.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I would appreciate it if you could install additional clothes hooks.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi sẽ rất cảm kích nếu quý vị có thể lắp đặt thêm móc treo quần áo.)</div>
          </div>
        </div>
        
      </div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            Some of the clothes hooks were damaged.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Một số móc treo quần áo bị hỏng.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              I was unable to hang my clothes properly, and this made it difficult to keep my belongings neat and organized.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi không thể treo quần áo gọn gàng, và điều này khiến việc giữ đồ đạc ngăn nắp trở nên khó khăn.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I strongly recommend that the management repair or replace the damaged clothes hooks.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi tha thiết đề xuất ban quản lý sửa chữa hoặc thay thế các móc treo quần áo bị hỏng.)</div>
          </div>
        </div>
        
      </div>
          
        </div>
      </div>
  

      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-chair" style="color: var(--cyan-light);"></i>
            <span>6. Dirty benches <span style="font-size: 0.85rem; font-weight: 500; color: var(--text-muted);">(Ghế ngồi bẩn)</span></span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            The benches were poorly maintained and visibly dirty.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Các ghế ngồi được giữ gìn kém và nhìn thấy rõ là rất bẩn.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              I felt uncomfortable sitting on them because their surfaces looked dusty and neglected.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi cảm thấy không thoải mái khi ngồi lên ghế vì bề mặt của chúng trông bụi bặm và bị bỏ bê.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I would like to suggest that you clean and disinfect the benches more frequently.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi muốn gợi ý rằng quý vị vệ sinh và khử trùng ghế thường xuyên hơn.)</div>
          </div>
        </div>
        
      </div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            There were not enough benches in the changing room.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Không có đủ ghế ngồi trong phòng thay đồ.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              I had to stand while changing my clothes, and this was particularly inconvenient when the room was crowded.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi phải đứng khi thay quần áo, và điều này đặc biệt bất tiện khi phòng đông người.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I suggest that you provide additional benches for members.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi đề xuất quý vị bổ sung thêm ghế ngồi cho các thành viên.)</div>
          </div>
        </div>
        
      </div>
          
        </div>
      </div>
  

      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-triangle-exclamation" style="color: var(--cyan-light);"></i>
            <span>7. Slippery floor <span style="font-size: 0.85rem; font-weight: 500; color: var(--text-muted);">(Sàn nhà trơn trượt)</span></span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            The floor was wet and dangerously slippery.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Sàn nhà ướt và trơn trượt nguy hiểm.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              I was concerned that I might slip and injure myself, particularly when walking barefoot.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi lo mình có thể trượt ngã và bị thương, đặc biệt khi đi chân trần.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I would appreciate it if you could clean and dry the floor regularly to prevent accidents.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi sẽ rất cảm kích nếu quý vị thường xuyên vệ sinh và lau khô sàn nhà để ngăn ngừa tai nạn.)</div>
          </div>
        </div>
        
      </div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            Water had accumulated across the floor.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Nước đọng trên khắp sàn nhà.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              This made it difficult to move around safely and increased the risk of slips and falls.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Điều này khiến việc đi lại an toàn trở nên khó khăn và làm tăng nguy cơ trượt ngã.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I believe that steps should be taken to keep the floor clean and dry at all times.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi tin rằng các biện pháp cần được thực hiện để giữ sàn nhà sạch sẽ và khô ráo mọi lúc.)</div>
          </div>
        </div>
        
      </div>
          
        </div>
      </div>
  

      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-table-cells-large" style="color: var(--cyan-light);"></i>
            <span>8. Dirty mirrors <span style="font-size: 0.85rem; font-weight: 500; color: var(--text-muted);">(Gương bẩn)</span></span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            The mirrors were covered in dirt and stains.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Các tấm gương bị phủ đầy bụi bẩn và vết ố.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              I could not see my reflection clearly, so it was difficult to check my appearance before leaving the center.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi không thể nhìn rõ hình ảnh phản chiếu của mình, vì vậy rất khó để kiểm tra diện mạo trước khi rời trung tâm.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I suggest that you clean the mirrors thoroughly and regularly.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi đề xuất quý vị vệ sinh gương kỹ lưỡng và thường xuyên.)</div>
          </div>
        </div>
        
      </div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            Some of the mirrors were cracked.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Một số gương bị nứt.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              I was concerned that the damaged glass might break further and cause injuries to members.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi lo rằng phần kính bị hỏng có thể vỡ thêm và gây thương tích cho các thành viên.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I strongly recommend that the management replace the cracked mirrors immediately.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi tha thiết đề xuất ban quản lý thay thế ngay các tấm gương bị nứt.)</div>
          </div>
        </div>
        
      </div>
          
        </div>
      </div>
  

      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-wind" style="color: var(--cyan-light);"></i>
            <span>9. Broken hair dryers <span style="font-size: 0.85rem; font-weight: 500; color: var(--text-muted);">(Máy sấy tóc bị hỏng)</span></span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            Some of the hair dryers were out of order.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Một số máy sấy tóc không thể sử dụng được.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              I was unable to dry my hair after taking a shower, so it was inconvenient before heading home or going to work.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi không thể sấy khô tóc sau khi tắm, vì vậy rất bất tiện trước khi về nhà hoặc đi làm.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I would appreciate it if you could repair or replace the faulty hair dryers.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi sẽ rất cảm kích nếu quý vị có thể sửa chữa hoặc thay thế các máy sấy tóc bị lỗi.)</div>
          </div>
        </div>
        
      </div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            There were not enough hair dryers for members to use.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Không có đủ máy sấy tóc cho các thành viên sử dụng.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              I had to wait in a queue for a long time, and this delayed my departure from the sports center.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi phải xếp hàng chờ trong một thời gian dài, và điều này làm chậm trễ giờ rời trung tâm của tôi.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I would like to suggest that you provide additional hair dryers to reduce waiting times.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi muốn gợi ý rằng quý vị bổ sung máy sấy tóc để giảm thời gian chờ đợi.)</div>
          </div>
        </div>
        
      </div>
          
        </div>
      </div>
  

      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-pump-soap" style="color: var(--cyan-light);"></i>
            <span>10. Hygiene products <span style="font-size: 0.85rem; font-weight: 500; color: var(--text-muted);">(Đồ dùng vệ sinh)</span></span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            There was no soap available near the sinks.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Không có xà phòng gần các bồn rửa tay.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              I was unable to wash my hands properly, and this raised concerns about basic hygiene in the facility.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi không thể rửa tay đúng cách, và điều này làm dấy lên lo ngại về vấn đề vệ sinh cơ bản tại cơ sở.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I strongly recommend that you provide sufficient soap and refill the dispensers regularly.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi tha thiết đề xuất quý vị cung cấp đủ xà phòng và bổ sung vào các hộp đựng thường xuyên.)</div>
          </div>
        </div>
        
      </div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            There were no paper towels available.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Không có khăn giấy.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              I had no convenient way to dry my hands after washing them, so the facilities felt less practical to use.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi không có cách thuận tiện để lau khô tay sau khi rửa, khiến các tiện ích kém thuận tiện hơn khi sử dụng.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I suggest that you provide paper towels or install hand dryers near the sinks.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi đề xuất quý vị cung cấp khăn giấy hoặc lắp đặt máy sấy tay gần các bồn rửa.)</div>
          </div>
        </div>
        
      </div>
          
        </div>
      </div>
  

      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-trash-can" style="color: var(--cyan-light);"></i>
            <span>11. Full rubbish bins <span style="font-size: 0.85rem; font-weight: 500; color: var(--text-muted);">(Thùng rác đầy)</span></span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            The rubbish bins were overflowing.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Các thùng rác bị đầy tràn.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              Rubbish had accumulated around the bins, so the changing room looked unhygienic and unpleasant.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Rác tích tụ xung quanh thùng, điều này khiến phòng thay đồ trông mất vệ sinh và gây cảm giác khó chịu.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I believe that steps should be taken to empty the rubbish bins more frequently, especially during busy periods.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi tin rằng các biện pháp cần được thực hiện để đổ rác thường xuyên hơn, đặc biệt vào những thời điểm đông người.)</div>
          </div>
        </div>
        
      </div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            Rubbish was scattered around the bins.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Rác vương vãi xung quanh các thùng rác.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              The bins were completely full, and this created a very negative impression of the sports center.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Các thùng rác đã đầy ứ, và điều này tạo ra một ấn tượng rất tiêu cực về trung tâm thể thao.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I would appreciate it if you could clean the area around the bins regularly and dispose of rubbish properly.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi sẽ rất cảm kích nếu quý vị thường xuyên vệ sinh khu vực xung quanh thùng rác và xử lý rác đúng cách.)</div>
          </div>
        </div>
        
      </div>
          
        </div>
      </div>
  

      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-wind" style="color: var(--cyan-light);"></i>
            <span>12. Unpleasant smell <span style="font-size: 0.85rem; font-weight: 500; color: var(--text-muted);">(Mùi khó chịu)</span></span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            There was a persistent unpleasant smell in the changing room.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Có mùi khó chịu dai dẳng trong phòng thay đồ.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              The smell made the room uncomfortable to use and negatively affected my overall experience at the sports center.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Mùi này khiến căn phòng trở nên khó chịu khi sử dụng và ảnh hưởng tiêu cực đến trải nghiệm tổng thể của tôi tại trung tâm thể thao.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I strongly recommend that you identify the source of the smell and improve the cleaning service.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi tha thiết đề xuất quý vị xác định nguồn gây mùi và cải thiện dịch vụ vệ sinh.)</div>
          </div>
        </div>
        
      </div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            The changing room was poorly ventilated.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Phòng thay đồ thông gió kém.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              As a result, the air felt stuffy and unpleasant, particularly when many members were using the room at the same time.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Do đó, không khí trở nên ngột ngạt và khó chịu, đặc biệt khi nhiều thành viên sử dụng phòng cùng lúc.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I would like to suggest that you install a more effective ventilation system.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi muốn gợi ý rằng quý vị lắp đặt hệ thống thông gió hiệu quả hơn.)</div>
          </div>
        </div>
        
      </div>
          
        </div>
      </div>
  

      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--panel-border); padding-bottom: 0.55rem;">
          <h5 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.45rem;">
            <i class="fa-solid fa-restroom" style="color: var(--cyan-light);"></i>
            <span>13. Dirty toilets <span style="font-size: 0.85rem; font-weight: 500; color: var(--text-muted);">(Nhà vệ sinh bẩn)</span></span>
          </h5>
          <span class="hl-pill hl-violet" style="font-size: 0.72rem;">2 Hướng triển khai</span>
        </div>
        <div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            The toilets were poorly maintained and unhygienic.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Nhà vệ sinh được giữ gìn kém và mất vệ sinh.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              The unsanitary conditions made me uncomfortable using the toilets and raised concerns about the overall hygiene standards of the sports center.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Điều kiện mất vệ sinh khiến tôi không thoải mái khi sử dụng nhà vệ sinh và làm dấy lên lo ngại về tiêu chuẩn vệ sinh chung của trung tâm thể thao.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I believe that steps should be taken to clean and disinfect the toilets more regularly.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi tin rằng các biện pháp cần được thực hiện để vệ sinh và khử trùng nhà vệ sinh thường xuyên hơn.)</div>
          </div>
        </div>
        
      </div>
          
      <div style="background: var(--bg-card); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <!-- 1. Câu vấn đề chính (Thân 1) -->
        <div style="margin-bottom: 0.45rem;">
          <div style="margin-bottom: 0.2rem;">
            <span class="hl-pill hl-rose" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
              <i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính
            </span>
          </div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.5;">
            There was a strong unpleasant smell coming from the toilets.
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Có mùi khó chịu nồng nặc phát ra từ nhà vệ sinh.)</div>
        </div>

        <!-- 2. Câu mô tả cụ thể (Thân 1) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem; margin-bottom: 0.45rem;">
          <span class="formula-arrow-icon" style="color: var(--amber-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-amber" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể
              </span>
            </div>
            <div style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5;">
              The smell spread to the surrounding area, so the entire section was unpleasant to use.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Mùi này lan ra khu vực xung quanh, điều này khiến toàn bộ khu vực trở nên khó chịu khi sử dụng.)</div>
          </div>
        </div>
        

        <!-- 3. Đề xuất giải pháp (Thân 3) -->
        
        <div class="formula-arrow-row" style="margin-left: 0.35rem;">
          <span class="formula-arrow-icon" style="color: var(--emerald-light); font-size: 0.85rem;">↳</span>
          <div class="formula-arrow-content" style="text-align: justify !important; text-justify: inter-word !important;">
            <div style="margin-bottom: 0.2rem;">
              <span class="hl-pill hl-emerald" style="font-size: 0.7rem; padding: 0.12rem 0.5rem; font-weight: 700;">
                <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân 3)
              </span>
            </div>
            <div style="color: var(--emerald-light); font-weight: 600; font-size: 0.9rem; line-height: 1.5;">
              I would appreciate it if you could thoroughly clean the toilets and check the plumbing and ventilation systems.
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">(Tôi sẽ rất cảm kích nếu quý vị vệ sinh nhà vệ sinh kỹ lưỡng và kiểm tra hệ thống ống nước cùng hệ thống thông gió.)</div>
          </div>
        </div>
        
      </div>
          
        </div>
      </div>
  
      </div>
    </div>
  `,

  feedback: `
    <!-- PHẦN I: DẤU HIỆU NHẬN BIẾT -->
    <div class="bento-card card-theme-cyan" style="padding: 1.4rem 1.6rem; margin-bottom: 1.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.85rem;">
        <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary); margin: 0;">
          <i class="fa-solid fa-magnifying-glass" style="color: var(--cyan-light);"></i> I. DẤU HIỆU NHẬN BIẾT (TYPE 05: LETTER OF FEEDBACK - THƯ PHẢN HỒI, ĐÁNH GIÁ)
        </h4>
        <span class="hl-pill hl-cyan"><i class="fa-solid fa-tag"></i> Từ khóa cốt lõi</span>
      </div>
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
        Dạng thư này thường xuất hiện khi đề bài có các từ khóa như:
      </p>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">give/provide feedback on …</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">share your opinion about …</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">describe your experience with …</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">write a letter to comment on …</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">say what you liked or did not like about …</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">say what you were satisfied or dissatisfied with …</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">express your satisfaction or dissatisfaction with …</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">make suggestions for improvement</span>
      </div>

      <!-- HỘP LƯU Ý VĂN PHONG -->
      <div style="background: rgba(245, 158, 11, 0.12); border-left: 4px solid var(--amber-light); border-radius: var(--radius-sm); padding: 0.95rem 1.15rem; font-size: 0.88rem; line-height: 1.65; color: var(--text-primary);">
        <strong style="color: var(--amber-light); display: inline-flex; align-items: center; gap: 0.4rem; margin-bottom: 0.3rem;">
          <i class="fa-solid fa-triangle-exclamation"></i> LƯU Ý VỀ VĂN PHONG VÀ ĐẶC TRƯNG GIAO TIẾP:
        </strong>
        <p style="margin: 0; text-align: justify !important; text-justify: inter-word !important;">
          Thư phản hồi, đánh giá thường sử dụng phong cách <strong>trang trọng (Formal)</strong> hoặc <strong>bán trang trọng (Semi-formal)</strong>, tùy thuộc vào người nhận và mối quan hệ giữa hai bên. Khác với thư phàn nàn thuần túy chỉ tập trung vào lỗi sai, thư phản hồi luôn mang tính chất <strong>khách quan và xây dựng</strong>: ghi nhận điểm tích cực, nêu các điểm chưa hài lòng và đề xuất giải pháp cải thiện cụ thể.
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
        <strong>LƯU Ý:</strong> Thư phản hồi, đánh giá thường sử dụng phong cách trang trọng hoặc bán trang trọng, tùy thuộc vào người nhận và mối quan hệ giữa hai bên.
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
                Dear Sir/Madam, <span style="font-weight: 400; color: var(--text-muted);">(nếu không biết chắc chắn người nhận là nam hay nữ)</span>
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
        <span class="hl-pill hl-violet">Chào hỏi lịch sự & Nêu mục đích phản hồi</span>
      </div>
      <div style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(168, 85, 247, 0.06)); border: 1px solid var(--violet-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; font-size: 1.02rem; color: var(--text-primary); line-height: 1.7;">
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content">
            <strong>I hope this letter finds you well. I am writing to provide feedback on <span class="hl-placeholder">[sản phẩm/dịch vụ/trải nghiệm cần đánh giá - danh từ/cụm danh từ]</span>. I would like to share my experience and offer some suggestions for improvement.</strong>
          </div>
        </div>
      </div>
      <p style="font-size: 0.83rem; color: var(--text-muted); margin: 0.5rem 0 0 0; text-align: justify !important; text-justify: inter-word !important;">
        <i class="fa-solid fa-language" style="color: var(--violet-light);"></i> <em>Dịch: Tôi hy vọng lá thư này đến được với quý vị trong lúc tốt đẹp. Tôi viết thư này để đưa ra phản hồi về [sản phẩm/dịch vụ]. Tôi muốn chia sẻ trải nghiệm của mình và đưa ra một vài đề xuất nhằm cải thiện chất lượng.</em>
      </p>
    </div>

    <!-- Bước 3: Thân thư -->
    <div class="outline-step-card step-border-emerald">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-emerald"><i class="fa-solid fa-layer-group"></i> 3. THÂN THƯ (BODY PARAGRAPHS)</span>
        <span class="hl-pill hl-emerald">3 Phần: Điểm tích cực • Điểm chưa hài lòng • Đề xuất giải pháp</span>
      </div>

      <!-- 3.1 Đánh giá những điểm tích cực -->
      <div style="background: var(--bg-inner); padding: 1.1rem 1.3rem; border-radius: var(--radius-md); border: 1px solid var(--panel-border); margin-bottom: 1.15rem; font-size: 0.95rem; line-height: 1.7; color: var(--text-primary);">
        <div style="font-weight: 800; color: var(--emerald-light); margin-bottom: 0.45rem; font-size: 0.98rem;">
          <i class="fa-solid fa-circle-check"></i> 3.1. Đánh giá những điểm tích cực (nếu có)
        </div>
        <div class="formula-arrow-row" style="margin-bottom: 0.6rem;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="font-weight: 700; color: var(--text-primary);">
            First of all, I would like to mention some positive aspects of <span class="hl-placeholder">[đối tượng được đánh giá]</span>.
          </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.45rem; padding-left: 0.5rem; font-size: 0.92rem;">
          <div>• <strong>One aspect I appreciated was</strong> <span class="hl-placeholder">[điểm tích cực - danh từ/cụm danh từ]</span> <strong>because</strong> <span class="hl-placeholder">[lý do - mệnh đề]</span>.</div>
          <div>• <strong>I was very satisfied with</strong> <span class="hl-placeholder">[điểm tích cực - danh từ/cụm danh từ]</span>, <strong>as</strong> <span class="hl-placeholder">[lý do - mệnh đề]</span>.</div>
          <div>• <strong>I was particularly impressed with</strong> <span class="hl-placeholder">[điểm tích cực - danh từ/cụm danh từ]</span> <strong>because</strong> <span class="hl-placeholder">[lý do - mệnh đề]</span>.</div>
          <div>• <strong>The quality of</strong> <span class="hl-placeholder">[điểm tích cực - danh từ/cụm danh từ]</span> <strong>was excellent, which made my experience more enjoyable. In fact,</strong> <span class="hl-placeholder">[lý do - mệnh đề]</span>.</div>
        </div>
      </div>

      <!-- 3.2 Đánh giá những điểm chưa tích cực -->
      <div style="background: var(--bg-inner); padding: 1.1rem 1.3rem; border-radius: var(--radius-md); border: 1px solid var(--panel-border); margin-bottom: 1.15rem; font-size: 0.95rem; line-height: 1.7; color: var(--text-primary);">
        <div style="font-weight: 800; color: var(--rose-light); margin-bottom: 0.45rem; font-size: 0.98rem;">
          <i class="fa-solid fa-circle-exclamation"></i> 3.2. Đánh giá những điểm chưa tích cực (nếu có)
        </div>
        <div class="formula-arrow-row" style="margin-bottom: 0.6rem;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="font-weight: 700; color: var(--text-primary);">
            However, there were also some areas that could be improved.
          </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.45rem; padding-left: 0.5rem; font-size: 0.92rem;">
          <div>• <strong>One issue that I encountered was</strong> <span class="hl-placeholder">[điểm chưa hài lòng - danh từ/cụm danh từ]</span> <strong>because</strong> <span class="hl-placeholder">[lý do - mệnh đề]</span>.</div>
          <div>• <strong>I was quite disappointed with</strong> <span class="hl-placeholder">[điểm chưa hài lòng - danh từ/cụm danh từ]</span>, <strong>as</strong> <span class="hl-placeholder">[lý do - mệnh đề]</span>.</div>
          <div>• <strong>I was not entirely satisfied with</strong> <span class="hl-placeholder">[điểm chưa hài lòng - danh từ/cụm danh từ]</span> <strong>because</strong> <span class="hl-placeholder">[lý do - mệnh đề]</span>.</div>
          <div>• <strong>The quality of</strong> <span class="hl-placeholder">[điểm chưa hài lòng - danh từ/cụm danh từ]</span> <strong>was not as good as I had expected. To be specific,</strong> <span class="hl-placeholder">[lý do - mệnh đề]</span>.</div>
        </div>
      </div>

      <!-- 3.3 Đề xuất giải pháp -->
      <div style="background: var(--bg-inner); padding: 1.1rem 1.3rem; border-radius: var(--radius-md); border: 1px solid var(--panel-border); margin-bottom: 1.15rem; font-size: 0.95rem; line-height: 1.7; color: var(--text-primary);">
        <div style="font-weight: 800; color: var(--amber-light); margin-bottom: 0.45rem; font-size: 0.98rem;">
          <i class="fa-solid fa-lightbulb"></i> 3.3. Đề xuất giải pháp
        </div>
        <div class="formula-arrow-row" style="margin-bottom: 0.6rem;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="font-weight: 700; color: var(--text-primary);">
            To improve the quality of your <span class="hl-placeholder">[sản phẩm/dịch vụ/cơ sở vật chất]</span>, I have a few suggestions.
          </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.45rem; padding-left: 0.5rem; font-size: 0.92rem;">
          <div>• <strong>I suggest that you</strong> <span class="hl-placeholder">[hành động – V0]</span>.</div>
          <div>• <strong>I would recommend that you</strong> <span class="hl-placeholder">[hành động – V0]</span>.</div>
          <div>• <strong>It would be better if you could</strong> <span class="hl-placeholder">[hành động – V0]</span>.</div>
          <div>• <strong>I hope you will consider</strong> <span class="hl-placeholder">[hành động – V-ing]</span>.</div>
        </div>
      </div>

      <!-- BỘ CẤU TRÚC CÂU "ĂN ĐIỂM" BAND B2 ĐẶC TRƯNG -->
      <div class="bento-card card-theme-amber" style="margin: 1.25rem 0; padding: 1.25rem 1.4rem;">
        <div class="bento-card-header" style="margin-bottom: 1rem;">
          <div class="bento-header-left">
            <div class="bento-icon-badge badge-amber"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
            <div>
              <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary); margin: 0;">BỘ CẤU TRÚC CÂU "ĂN ĐIỂM" BAND B2 ĐẶC TRƯNG</h4>
              <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0.15rem 0 0 0; text-align: justify !important; text-justify: inter-word !important;">Phối hợp linh hoạt các cấu trúc dưới đây vào Thân bài để bứt phá điểm Ngữ pháp & Từ vựng (kèm câu ví dụ mẫu):</p>
            </div>
          </div>
          <span class="hl-pill hl-amber"><i class="fa-solid fa-crown"></i> 8 Cấu trúc B2</span>
        </div>
        <div id="outlineStructuresContainer" class="formulas-grid-2col"></div>
      </div>

      <!-- Sơ đồ chuỗi từ liên kết gợi ý dạng Flow Nodes -->
      <div class="connector-flow-box">
        <strong style="color: var(--emerald-light); font-size: 0.92rem;"><i class="fa-solid fa-route"></i> SƠ ĐỒ CHUỖI TỪ LIÊN KẾT GỢI Ý CHUẨN B2:</strong>
        <div class="connector-chain-nodes" style="margin-top: 0.65rem;">
          <span class="flow-node-3d"><span class="flow-node-num">1</span> First of all, regarding positive aspects, …</span>
          <i class="fa-solid fa-arrow-right flow-arrow"></i>
          <span class="flow-node-3d"><span class="flow-node-num">2</span> Furthermore, …</span>
          <i class="fa-solid fa-arrow-right flow-arrow"></i>
          <span class="flow-node-3d"><span class="flow-node-num">3</span> However, there were also areas that could be improved, …</span>
          <i class="fa-solid fa-arrow-right flow-arrow"></i>
          <span class="flow-node-3d"><span class="flow-node-num">4</span> To improve the quality, I suggest that you should …</span>
        </div>
      </div>
    </div>

    <!-- Bước 4: Kết thư -->
    <div class="outline-step-card step-border-amber">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-amber"><i class="fa-solid fa-heart"></i> 4. KẾT THƯ (CLOSING)</span>
        <span class="hl-pill hl-amber">Hy vọng phản hồi hữu ích & Lời mời liên hệ</span>
      </div>
      <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(234, 88, 12, 0.05)); border: 1px solid var(--amber-border); border-radius: var(--radius-md); padding: 1rem 1.25rem; font-size: 1.02rem; color: var(--text-primary); line-height: 1.7;">
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content">
            <strong>I hope my feedback will be useful in improving your <span class="hl-placeholder">[sản phẩm/dịch vụ/cơ sở vật chất]</span>. Please feel free to contact me if you have any further questions.</strong>
          </div>
        </div>
      </div>
      <p style="font-size: 0.83rem; color: var(--text-muted); margin: 0.5rem 0 0 0; text-align: justify !important; text-justify: inter-word !important;">
        <i class="fa-solid fa-language" style="color: var(--amber-light);"></i> <em>Dịch: Tôi hy vọng những phản hồi của mình sẽ hữu ích trong việc cải thiện [sản phẩm/dịch vụ]. Xin vui lòng liên hệ với tôi nếu quý vị có thêm bất kỳ câu hỏi nào.</em>
      </p>
    </div>

    <!-- Bước 5: Lời chào kết thúc -->
    <div class="outline-step-card step-border-rose">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-rose"><i class="fa-solid fa-signature"></i> 5. LỜI CHÀO KẾT THÚC (SIGN-OFF)</span>
        <span class="hl-pill hl-rose">Đúng chuẩn từng văn phong</span>
      </div>
      <div style="background: var(--bg-inner); padding: 1rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--rose-border); font-size: 0.95rem; line-height: 1.7;">
        <div style="display: flex; flex-wrap: wrap; gap: 2rem;">
          <div>
            <strong style="color: var(--violet-light);">• Trang trọng (khi xưng Dear Sir/Madam):</strong>
            <div class="formula-arrow-row" style="margin-top: 0.25rem;">
              <span class="formula-arrow-icon">↳</span>
              <div class="formula-arrow-content" style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary);">
                Yours faithfully,
              </div>
            </div>
          </div>
          <div>
            <strong style="color: var(--amber-light);">• Bán trang trọng (khi xưng tên họ Mr./Ms.):</strong>
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
          You recently stayed at a hotel and received an email from the hotel manager asking for feedback about your stay.
        </p>
        <p style="margin: 0 0 0.5rem 0;">
          Write an email to give your opinion. In your email, you should:
        </p>
        <div style="margin: 0.5rem 0 0.75rem 0; padding-left: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 0.45rem; margin-bottom: 0.25rem;"><i class="fa-solid fa-bolt" style="color: var(--amber-light);"></i> <span>Say whether you were satisfied or dissatisfied with the service</span></div>
          <div style="display: flex; align-items: center; gap: 0.45rem; margin-bottom: 0.25rem;"><i class="fa-solid fa-bolt" style="color: var(--amber-light);"></i> <span>Describe your experience</span></div>
          <div style="display: flex; align-items: center; gap: 0.45rem;"><i class="fa-solid fa-bolt" style="color: var(--amber-light);"></i> <span>Suggest ways the hotel can improve its service</span></div>
        </div>
        <p style="margin: 0.5rem 0 0 0;">
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
          <div class="val">Hotel Manager (Quản lý khách sạn).</div>
        </div>
        <div class="analysis-step-item step-amber" style="padding: 0.9rem 1rem;">
          <div class="analysis-step-top"><div class="num">2</div><span class="hl-pill hl-amber">Mục đích</span></div>
          <div class="label">Mục đích bức thư là gì?</div>
          <div class="val">Đưa ra phản hồi và đánh giá về kỳ nghỉ tại khách sạn (nêu điểm hài lòng/chưa hài lòng, miêu tả trải nghiệm và đề xuất cách cải thiện dịch vụ).</div>
        </div>
        <div class="analysis-step-item step-emerald" style="padding: 0.9rem 1rem;">
          <div class="analysis-step-top"><div class="num">3</div><span class="hl-pill hl-emerald">Văn phong</span></div>
          <div class="label">Văn phong thư là gì?</div>
          <div class="val">Trang trọng (Formal) hoặc Bán trang trọng (Semi-formal).</div>
        </div>
        <div class="analysis-step-item step-rose" style="padding: 0.9rem 1rem;">
          <div class="analysis-step-top"><div class="num">4</div><span class="hl-pill hl-rose">Yêu cầu</span></div>
          <div class="label">Có những yêu cầu gì?</div>
          <div class="val">1. Nêu mức độ hài lòng hoặc chưa hài lòng • 2. Miêu tả trải nghiệm cụ thể (điểm cộng và điểm trừ) • 3. Đề xuất các giải pháp giúp khách sạn nâng cấp dịch vụ.</div>
        </div>
      </div>
    </div>
  
  `,

  apology: `
    <!-- PHẦN I: DẤU HIỆU NHẬN BIẾT -->
    <div class="bento-card card-theme-cyan" style="padding: 1.4rem 1.6rem; margin-bottom: 1.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.85rem;">
        <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary); margin: 0;">
          <i class="fa-solid fa-magnifying-glass" style="color: var(--cyan-light);"></i> I. DẤU HIỆU NHẬN BIẾT (TYPE 06: LETTER OF APOLOGY - THƯ XIN LỖI)
        </h4>
        <span class="hl-pill hl-cyan"><i class="fa-solid fa-tag"></i> Từ khóa cốt lõi</span>
      </div>
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
        Dạng thư này thường xuất hiện khi đề bài có các từ khóa như:
      </p>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">apologize for / say sorry for …</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">explain why you … (missed …, were late …, forgot …, damaged …, etc.)</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">say how you will make up for it</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">explain the situation and offer a solution</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">apologize for not being able to …</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">explain the reason for …</span>
      </div>

      <!-- HỘP LƯU Ý VĂN PHONG -->
      <div style="background: rgba(245, 158, 11, 0.12); border-left: 4px solid var(--amber-light); border-radius: var(--radius-sm); padding: 0.95rem 1.15rem; font-size: 0.88rem; line-height: 1.65; color: var(--text-primary);">
        <strong style="color: var(--amber-light); display: inline-flex; align-items: center; gap: 0.4rem; margin-bottom: 0.3rem;">
          <i class="fa-solid fa-triangle-exclamation"></i> LƯU Ý VỀ VĂN PHONG VÀ ĐẶC TRƯNG GIAO TIẾP:
        </strong>
        <p style="margin: 0; text-align: justify !important; text-justify: inter-word !important;">
          Thư xin lỗi thường sử dụng phong cách <strong>thân mật (Informal)</strong>, <strong>trang trọng (Formal)</strong> hoặc <strong>bán trang trọng (Semi-formal)</strong>, tùy thuộc vào người nhận và mối quan hệ giữa hai bên. Khi viết cho bạn bè, hãy dùng giọng điệu ấm áp, chân thành; khi viết cho giảng viên, đối tác hay khách hàng, hãy thể hiện sự tôn trọng, chuyên nghiệp và tinh thần trách nhiệm cao.
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
        <strong>LƯU Ý:</strong> Thư xin lỗi thường sử dụng phong cách thân mật, trang trọng hoặc bán trang trọng, tùy thuộc vào người nhận và mối quan hệ giữa hai bên.
      </p>
    </div>

    <!-- Bước 1: Lời chào mở đầu -->
    <div class="outline-step-card step-border-cyan">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-cyan"><i class="fa-solid fa-hand-wave"></i> 1. LỜI CHÀO MỞ ĐẦU (SALUTATION)</span>
        <span class="hl-pill hl-cyan">Phân loại theo người nhận</span>
      </div>
      <div style="background: var(--bg-inner); padding: 1rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--cyan-border); font-size: 0.95rem; line-height: 1.7;">
        <div style="margin-bottom: 0.65rem;">
          <strong style="color: var(--cyan-light);">• Thân mật (Informal):</strong>
          <div class="formula-arrow-row" style="margin-left: 0.65rem; margin-top: 0.25rem;">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content" style="font-size: 1.02rem; font-weight: 800; color: var(--text-primary);">
              Dear <span class="hl-placeholder">[tên của người nhận]</span>,
            </div>
          </div>
        </div>
        <div style="margin-bottom: 0.65rem;">
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
        <span class="hl-pill hl-violet">Lời xin lỗi chân thành & Dẫn dắt giải thích</span>
      </div>

      <!-- Thân mật -->
      <div style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.12), rgba(59, 130, 246, 0.06)); border: 1px solid var(--cyan-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; margin-bottom: 0.85rem; font-size: 0.95rem; line-height: 1.7;">
        <div style="font-weight: 800; color: var(--cyan-light); margin-bottom: 0.45rem; font-size: 0.96rem;">
          <i class="fa-solid fa-user-group"></i> Thân mật (Informal):
        </div>
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content">
            <strong>How have you been lately? I’m really sorry for <span class="hl-placeholder">[vấn đề cần xin lỗi - Ving/danh từ/cụm danh từ]</span>. Let me explain what happened.</strong>
          </div>
        </div>
        <p style="font-size: 0.83rem; color: var(--text-muted); margin: 0.45rem 0 0 0; text-align: justify !important; text-justify: inter-word !important;">
          <i class="fa-solid fa-language" style="color: var(--cyan-light);"></i> <em>Dịch: Dạo này cậu thế nào? Tớ thực sự rất xin lỗi vì [vấn đề]. Để tớ giải thích những gì đã xảy ra nhé.</em>
        </p>
      </div>

      <!-- Trang trọng & Bán trang trọng -->
      <div style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(168, 85, 247, 0.06)); border: 1px solid var(--violet-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; font-size: 0.95rem; line-height: 1.7;">
        <div style="font-weight: 800; color: var(--violet-light); margin-bottom: 0.45rem; font-size: 0.96rem;">
          <i class="fa-solid fa-briefcase"></i> Trang trọng & Bán trang trọng (Formal / Semi-formal):
        </div>
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content">
            <strong>I hope this letter finds you well. I am writing to sincerely apologize for <span class="hl-placeholder">[vấn đề cần xin lỗi - Ving/danh từ/cụm danh từ]</span>. I would also like to explain what happened.</strong>
          </div>
        </div>
        <p style="font-size: 0.83rem; color: var(--text-muted); margin: 0.45rem 0 0 0; text-align: justify !important; text-justify: inter-word !important;">
          <i class="fa-solid fa-language" style="color: var(--violet-light);"></i> <em>Dịch: Tôi hy vọng lá thư này đến được với quý vị trong lúc tốt đẹp. Tôi viết thư này để chân thành xin lỗi vì [vấn đề]. Tôi cũng xin phép được giải thích về những gì đã xảy ra.</em>
        </p>
      </div>
    </div>

    <!-- Bước 3: Thân thư -->
    <div class="outline-step-card step-border-emerald">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-emerald"><i class="fa-solid fa-layer-group"></i> 3. THÂN THƯ (BODY PARAGRAPHS)</span>
        <span class="hl-pill hl-emerald">3 Phần: Giải thích lý do • Thông tin bổ sung • Cách khắc phục</span>
      </div>

      <!-- 3.1 Giải thích lý do -->
      <div style="background: var(--bg-inner); padding: 1.1rem 1.3rem; border-radius: var(--radius-md); border: 1px solid var(--panel-border); margin-bottom: 1.15rem; font-size: 0.95rem; line-height: 1.7; color: var(--text-primary);">
        <div style="font-weight: 800; color: var(--emerald-light); margin-bottom: 0.5rem; font-size: 0.98rem;">
          <i class="fa-solid fa-circle-question"></i> 3.1. Giải thích lý do (Explanation of the Reason)
        </div>

        <!-- Thân mật -->
        <div style="margin-bottom: 0.85rem;">
          <strong style="color: var(--cyan-light);">• Thân mật (Informal):</strong>
          <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-top: 0.2rem; margin-bottom: 0.4rem;">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content" style="font-weight: 700;">
              First of all, let me explain why this happened.
            </div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.35rem; padding-left: 1rem; font-size: 0.92rem;">
            <div>- <strong>I’m really sorry that I couldn’t</strong> <span class="hl-placeholder">[hành động – V0]</span> <strong>because</strong> <span class="hl-placeholder">[lý do - mệnh đề]</span>.</div>
            <div>- <strong>I didn’t mean to</strong> <span class="hl-placeholder">[hành động – V0]</span>, <strong>but</strong> <span class="hl-placeholder">[lý do - mệnh đề]</span>.</div>
            <div>- <strong>I couldn’t manage to</strong> <span class="hl-placeholder">[hành động – V0]</span> <strong>because</strong> <span class="hl-placeholder">[lý do - mệnh đề]</span>.</div>
          </div>
        </div>

        <!-- Trang trọng -->
        <div style="margin-bottom: 0.85rem;">
          <strong style="color: var(--amber-light);">• Trang trọng & Bán trang trọng (Formal / Semi-formal):</strong>
          <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-top: 0.2rem; margin-bottom: 0.4rem;">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content" style="font-weight: 700;">
              First of all, I would like to explain why this happened.
            </div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.35rem; padding-left: 1rem; font-size: 0.92rem;">
            <div>- <strong>The reason why I could not</strong> <span class="hl-placeholder">[hành động – V0]</span> <strong>was that</strong> <span class="hl-placeholder">[lý do - mệnh đề]</span>.</div>
            <div>- <strong>I regret that I was unable to</strong> <span class="hl-placeholder">[hành động – V0]</span> <strong>because</strong> <span class="hl-placeholder">[lý do - mệnh đề]</span>.</div>
            <div>- <strong>Because</strong> <span class="hl-placeholder">[lý do - mệnh đề]</span>, <strong>I was unable to</strong> <span class="hl-placeholder">[hành động – V0]</span>.</div>
          </div>
        </div>

        <!-- HỘP LƯU Ý THÌ QUÁ KHỨ ĐƠN -->
        <div style="background: rgba(16, 185, 129, 0.1); border-left: 3px solid var(--emerald-light); padding: 0.75rem 1rem; border-radius: var(--radius-sm); font-size: 0.88rem; line-height: 1.6;">
          <strong style="color: var(--emerald-light); display: inline-flex; align-items: center; gap: 0.35rem;">
            <i class="fa-solid fa-clock-rotate-left"></i> LƯU Ý QUAN TRỌNG:
          </strong>
          <span style="color: var(--text-primary);">
            Sau khi nêu lý do, nên bổ sung <strong>1–3 câu mô tả cụ thể tình huống</strong> để người đọc hiểu rõ hơn. Sử dụng thì <strong>Quá khứ đơn (Past Simple)</strong> để kể lại những sự việc đã xảy ra.
          </span>
        </div>
      </div>

      <!-- 3.2 Cung cấp thông tin bổ sung -->
      <div style="background: var(--bg-inner); padding: 1.1rem 1.3rem; border-radius: var(--radius-md); border: 1px solid var(--panel-border); margin-bottom: 1.15rem; font-size: 0.95rem; line-height: 1.7; color: var(--text-primary);">
        <div style="font-weight: 800; color: var(--cyan-light); margin-bottom: 0.45rem; font-size: 0.98rem;">
          <i class="fa-solid fa-file-circle-plus"></i> 3.2. Cung cấp thông tin bổ sung (nếu đề bài yêu cầu)
        </div>
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="color: var(--text-primary);">
            Lần lượt trả lời các yêu cầu bổ sung trong đề bài, chẳng hạn tình trạng hiện tại, tiến độ công việc hoặc thông tin liên quan đến sự việc (ví dụ: đã đọc xong sách chưa, tình trạng máy tính bị hư hỏng ra sao...).
          </div>
        </div>
      </div>

      <!-- 3.3 Đề xuất cách khắc phục -->
      <div style="background: var(--bg-inner); padding: 1.1rem 1.3rem; border-radius: var(--radius-md); border: 1px solid var(--panel-border); margin-bottom: 1.15rem; font-size: 0.95rem; line-height: 1.7; color: var(--text-primary);">
        <div style="font-weight: 800; color: var(--amber-light); margin-bottom: 0.5rem; font-size: 0.98rem;">
          <i class="fa-solid fa-hand-holding-hand"></i> 3.3. Đề xuất cách khắc phục / Chuộc lỗi (nếu cần, tuỳ theo tình huống)
        </div>

        <div style="margin-bottom: 0.65rem;">
          <strong style="color: var(--cyan-light);">• Thân mật (Informal):</strong>
          <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-top: 0.2rem;">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content" style="font-weight: 700; color: var(--text-primary);">
              Let me make it up to you by <span class="hl-placeholder">[hành động – V-ing]</span>, and I’ll make sure this does not happen again.
            </div>
          </div>
        </div>

        <div>
          <strong style="color: var(--amber-light);">• Trang trọng & Bán trang trọng (Formal / Semi-formal):</strong>
          <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-top: 0.2rem;">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content" style="font-weight: 700; color: var(--text-primary);">
              I would like to make up for this by <span class="hl-placeholder">[hành động – V-ing]</span>. I will make every effort to avoid similar situations in the future.
            </div>
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
              <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0.15rem 0 0 0; text-align: justify !important; text-justify: inter-word !important;">Phối hợp linh hoạt các cấu trúc dưới đây vào Thân bài để bứt phá điểm Ngữ pháp & Từ vựng (kèm câu ví dụ mẫu):</p>
            </div>
          </div>
          <span class="hl-pill hl-amber"><i class="fa-solid fa-crown"></i> 8 Cấu trúc B2</span>
        </div>
        <div id="outlineStructuresContainer" class="formulas-grid-2col"></div>
      </div>

      <!-- Sơ đồ chuỗi từ liên kết gợi ý dạng Flow Nodes -->
      <div class="connector-flow-box">
        <strong style="color: var(--emerald-light); font-size: 0.92rem;"><i class="fa-solid fa-route"></i> SƠ ĐỒ CHUỖI TỪ LIÊN KẾT GỢI Ý CHUẨN B2:</strong>
        
        <div style="margin-top: 0.5rem; margin-bottom: 0.5rem;">
          <span class="hl-pill hl-cyan" style="margin-bottom: 0.35rem;">Thân mật (Informal):</span>
          <div class="connector-chain-nodes" style="margin-top: 0.35rem;">
            <span class="flow-node-3d"><span class="flow-node-num">1</span> First of all, let me explain why this happened.</span>
            <i class="fa-solid fa-arrow-right flow-arrow"></i>
            <span class="flow-node-3d"><span class="flow-node-num">2</span> Next, regarding the situation, …</span>
            <i class="fa-solid fa-arrow-right flow-arrow"></i>
            <span class="flow-node-3d"><span class="flow-node-num">3</span> Finally, let me make it up to you by …</span>
          </div>
        </div>

        <div style="border-top: 1px dashed var(--panel-border); padding-top: 0.65rem;">
          <span class="hl-pill hl-violet" style="margin-bottom: 0.35rem;">Trang trọng (Formal):</span>
          <div class="connector-chain-nodes" style="margin-top: 0.35rem;">
            <span class="flow-node-3d"><span class="flow-node-num">1</span> First of all, I would like to explain why this happened.</span>
            <i class="fa-solid fa-arrow-right flow-arrow"></i>
            <span class="flow-node-3d"><span class="flow-node-num">2</span> In addition, regarding …</span>
            <i class="fa-solid fa-arrow-right flow-arrow"></i>
            <span class="flow-node-3d"><span class="flow-node-num">3</span> To make up for this, I would like to …</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bước 4: Kết thư -->
    <div class="outline-step-card step-border-amber">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-amber"><i class="fa-solid fa-heart"></i> 4. KẾT THƯ (CLOSING)</span>
        <span class="hl-pill hl-amber">Nhắc lại lời xin lỗi & Cảm ơn sự thấu hiểu</span>
      </div>

      <!-- Thân mật -->
      <div style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.12), rgba(59, 130, 246, 0.06)); border: 1px solid var(--cyan-border); border-radius: var(--radius-md); padding: 1rem 1.25rem; margin-bottom: 0.75rem; font-size: 1.02rem; color: var(--text-primary); line-height: 1.7;">
        <div style="font-weight: 800; color: var(--cyan-light); margin-bottom: 0.35rem; font-size: 0.92rem;">
          • Thân mật (Informal):
        </div>
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content">
            <strong>I’m really sorry once again. I truly appreciate your understanding. Write back soon.</strong>
          </div>
        </div>
      </div>

      <!-- Trang trọng & Bán trang trọng -->
      <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(234, 88, 12, 0.05)); border: 1px solid var(--amber-border); border-radius: var(--radius-md); padding: 1rem 1.25rem; font-size: 1.02rem; color: var(--text-primary); line-height: 1.7;">
        <div style="font-weight: 800; color: var(--amber-light); margin-bottom: 0.35rem; font-size: 0.92rem;">
          • Trang trọng & Bán trang trọng (Formal / Semi-formal):
        </div>
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content">
            <strong>I would like to apologize once again for the inconvenience. Thank you for your understanding. I look forward to hearing from you soon.</strong>
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
        <div style="display: flex; flex-wrap: wrap; gap: 2rem;">
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
            <strong style="color: var(--violet-light);">• Trang trọng (khi xưng Dear Sir/Madam):</strong>
            <div class="formula-arrow-row" style="margin-top: 0.25rem;">
              <span class="formula-arrow-icon">↳</span>
              <div class="formula-arrow-content" style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary);">
                Yours faithfully,
              </div>
            </div>
          </div>
          <div>
            <strong style="color: var(--amber-light);">• Bán trang trọng (khi xưng tên họ Mr./Ms.):</strong>
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
          You borrowed a book from your friend Helen, but forgot to return it. Read part of her letter below:
        </p>
        <blockquote style="margin: 0.5rem 0; padding: 0.65rem 1rem; border-left: 3px solid var(--emerald-light); background: rgba(16, 185, 129, 0.08); font-style: italic; color: var(--text-secondary); border-radius: var(--radius-sm);">
          "… Hey! How have you been lately? By the way, have you finished reading the book you borrowed from me? I was wondering why you haven’t returned it yet. When do you plan to give it back, and how will you return it? …"
        </blockquote>
        <p style="margin: 0.5rem 0 0 0;">
          Write a letter to reply to Helen. In your letter, you should:
        </p>
        <div style="margin: 0.5rem 0 0.75rem 0; padding-left: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 0.45rem; margin-bottom: 0.25rem;"><i class="fa-solid fa-bolt" style="color: var(--amber-light);"></i> <span>apologize for not returning the book</span></div>
          <div style="display: flex; align-items: center; gap: 0.45rem; margin-bottom: 0.25rem;"><i class="fa-solid fa-bolt" style="color: var(--amber-light);"></i> <span>explain your current situation and whether you’ve finished the book</span></div>
          <div style="display: flex; align-items: center; gap: 0.45rem;"><i class="fa-solid fa-bolt" style="color: var(--amber-light);"></i> <span>say when and how you will return it</span></div>
        </div>
        <p style="margin: 0.5rem 0 0 0;">
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
          <div class="val">Helen (Bạn thân).</div>
        </div>
        <div class="analysis-step-item step-amber" style="padding: 0.9rem 1rem;">
          <div class="analysis-step-top"><div class="num">2</div><span class="hl-pill hl-amber">Mục đích</span></div>
          <div class="label">Mục đích bức thư là gì?</div>
          <div class="val">Hồi âm xin lỗi bạn vì quên trả sách, giải thích lý do/tình hình hiện tại và hẹn ngày giờ, phương thức trả sách cụ thể.</div>
        </div>
        <div class="analysis-step-item step-emerald" style="padding: 0.9rem 1rem;">
          <div class="analysis-step-top"><div class="num">3</div><span class="hl-pill hl-emerald">Văn phong</span></div>
          <div class="label">Văn phong thư là gì?</div>
          <div class="val">Thân mật (Informal letter).</div>
        </div>
        <div class="analysis-step-item step-rose" style="padding: 0.9rem 1rem;">
          <div class="analysis-step-top"><div class="num">4</div><span class="hl-pill hl-rose">Yêu cầu</span></div>
          <div class="label">Có những yêu cầu gì?</div>
          <div class="val">1. Xin lỗi vì chưa trả sách • 2. Giải thích tình hình hiện tại & cho biết đã đọc xong sách chưa • 3. Nêu rõ khi nào và trả lại sách bằng cách nào.</div>
        </div>
      </div>
    </div>
  
  `,

  application: `
    <!-- PHẦN I: DẤU HIỆU NHẬN BIẾT -->
    <div class="bento-card card-theme-cyan" style="padding: 1.4rem 1.6rem; margin-bottom: 1.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.85rem;">
        <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary); margin: 0;">
          <i class="fa-solid fa-magnifying-glass" style="color: var(--cyan-light);"></i> I. DẤU HIỆU NHẬN BIẾT (TYPE 07: LETTER OF APPLICATION - THƯ ỨNG TUYỂN)
        </h4>
        <span class="hl-pill hl-cyan"><i class="fa-solid fa-tag"></i> Từ khóa cốt lõi</span>
      </div>
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
        Dạng thư này thường xuất hiện khi đề bài có các từ khóa như:
      </p>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">apply for the position of …</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">apply for the job of …</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">write a letter of application</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">respond to a job advertisement</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">express your interest in a job vacancy</span>
        <span class="hl-pill hl-cyan" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">apply for a part-time/full-time job</span>
      </div>

      <!-- HỘP LƯU Ý VĂN PHONG -->
      <div style="background: rgba(245, 158, 11, 0.12); border-left: 4px solid var(--amber-light); border-radius: var(--radius-sm); padding: 0.95rem 1.15rem; font-size: 0.88rem; line-height: 1.65; color: var(--text-primary);">
        <strong style="color: var(--amber-light); display: inline-flex; align-items: center; gap: 0.4rem; margin-bottom: 0.3rem;">
          <i class="fa-solid fa-triangle-exclamation"></i> LƯU Ý VỀ VĂN PHONG VÀ ĐẶC TRƯNG GIAO TIẾP:
        </strong>
        <p style="margin: 0; text-align: justify !important; text-justify: inter-word !important;">
          Thư ứng tuyển thường sử dụng <strong>văn phong trang trọng (Formal) 100%</strong>, đặc biệt khi người viết gửi đơn trực tiếp đến nhà tuyển dụng hoặc bộ phận tuyển dụng. Tuyệt đối <strong>không sử dụng từ viết tắt</strong> (dùng <em>I am, do not, cannot</em> thay vì <em>I'm, don't, can't</em>), tránh dùng từ lóng và duy trì sự tự tin, chuyên nghiệp trong toàn bộ bài viết.
        </p>
      </div>
    </div>

    <!-- PHẦN II: DÀN Ý CHI TIẾT 5 BƯỚC -->
    <div class="bento-card card-theme-violet" style="padding: 1.25rem 1.5rem; margin-bottom: 1.35rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
        <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary); margin: 0;">
          <i class="fa-solid fa-sitemap" style="color: var(--violet-light);"></i> II. DÀN Ý CHI TIẾT 5 BƯỚC (MASTER OUTLINE)
        </h4>
        <span class="hl-pill hl-violet">100% Chuẩn Trang Trọng (Formal Letter)</span>
      </div>
      <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0.5rem 0 0 0; text-align: justify !important; text-justify: inter-word !important;">
        <strong>LƯU Ý:</strong> Thư ứng tuyển thường sử dụng văn phong trang trọng (formal), đặc biệt khi người viết gửi đơn trực tiếp đến nhà tuyển dụng hoặc bộ phận tuyển dụng.
      </p>
    </div>

    <!-- Bước 1: Lời chào mở đầu -->
    <div class="outline-step-card step-border-cyan">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-cyan"><i class="fa-solid fa-hand-wave"></i> 1. LỜI CHÀO MỞ ĐẦU (SALUTATION)</span>
        <span class="hl-pill hl-cyan">Chuẩn mực trang trọng</span>
      </div>
      <div style="background: var(--bg-inner); padding: 1rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--cyan-border); font-size: 0.95rem; line-height: 1.7;">
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary);">
            Dear Sir/Madam,
          </div>
        </div>
      </div>
    </div>

    <!-- Bước 2: Mở thư -->
    <div class="outline-step-card step-border-violet">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-violet"><i class="fa-solid fa-envelope-open-text"></i> 2. MỞ THƯ (OPENING)</span>
        <span class="hl-pill hl-violet">Nêu rõ vị trí & Nguồn thông tin tuyển dụng</span>
      </div>
      <div style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(168, 85, 247, 0.06)); border: 1px solid var(--violet-border); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; font-size: 1.02rem; color: var(--text-primary); line-height: 1.7;">
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content">
            <strong>I am writing to apply for the position of <span class="hl-placeholder">[vị trí công việc]</span>, which was advertised on/in <span class="hl-placeholder">[nguồn tuyển dụng]</span>.</strong>
          </div>
        </div>
      </div>
      <p style="font-size: 0.83rem; color: var(--text-muted); margin: 0.5rem 0 0 0; text-align: justify !important; text-justify: inter-word !important;">
        <i class="fa-solid fa-language" style="color: var(--violet-light);"></i> <em>Dịch: Tôi viết thư này để ứng tuyển vào vị trí [vị trí công việc], được đăng tuyển trên [nguồn tuyển dụng].</em>
      </p>
    </div>

    <!-- Bước 3: Thân thư -->
    <div class="outline-step-card step-border-emerald">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-emerald"><i class="fa-solid fa-layer-group"></i> 3. THÂN THƯ (BODY PARAGRAPHS)</span>
        <span class="hl-pill hl-emerald">3 Phần: Sự quan tâm • Học vấn & Kinh nghiệm • Sự phù hợp</span>
      </div>

      <!-- 3.1 Thể hiện sự quan tâm đến vị trí ứng tuyển -->
      <div style="background: var(--bg-inner); padding: 1.1rem 1.3rem; border-radius: var(--radius-md); border: 1px solid var(--panel-border); margin-bottom: 1.15rem; font-size: 0.95rem; line-height: 1.7; color: var(--text-primary);">
        <div style="font-weight: 800; color: var(--emerald-light); margin-bottom: 0.45rem; font-size: 0.98rem;">
          <i class="fa-solid fa-heart"></i> 3.1. Thể hiện sự quan tâm đến vị trí ứng tuyển
        </div>
        <div class="formula-arrow-row" style="margin-bottom: 0.6rem;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="color: var(--text-primary); line-height: 1.7;">
            <strong>I am particularly interested in this position because it closely matches my interests and career goals. In addition, I have a strong interest in <span class="hl-placeholder">[hoạt động liên quan đến công việc]</span>, which motivates me to apply for this role. I believe this job will give me a valuable opportunity to apply my knowledge and gain practical experience.</strong>
          </div>
        </div>
        <div style="background: rgba(16, 185, 129, 0.08); border-left: 3px solid var(--emerald-light); padding: 0.65rem 0.95rem; border-radius: var(--radius-sm); font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6;">
          <i class="fa-solid fa-lightbulb" style="color: var(--emerald-light);"></i> <em>Nếu đã có kinh nghiệm làm việc, có thể thay câu cuối bằng:</em><br>
          <strong style="color: var(--text-primary);">"I believe this position will allow me to further develop my professional skills and contribute to your organization."</strong>
        </div>
      </div>

      <!-- 3.2 Giới thiệu trình độ học vấn và kinh nghiệm làm việc -->
      <div style="background: var(--bg-inner); padding: 1.1rem 1.3rem; border-radius: var(--radius-md); border: 1px solid var(--panel-border); margin-bottom: 1.15rem; font-size: 0.95rem; line-height: 1.7; color: var(--text-primary);">
        <div style="font-weight: 800; color: var(--cyan-light); margin-bottom: 0.5rem; font-size: 0.98rem;">
          <i class="fa-solid fa-graduation-cap"></i> 3.2. Giới thiệu trình độ học vấn và kinh nghiệm làm việc
        </div>

        <strong style="color: var(--amber-light); font-size: 0.93rem;">• Trình độ học vấn / Tình trạng hiện tại:</strong>
        <div style="margin-left: 0.5rem; margin-top: 0.35rem; margin-bottom: 0.75rem; display: flex; flex-direction: column; gap: 0.45rem;">
          <div class="formula-arrow-row">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content" style="color: var(--text-primary);">
              <span class="hl-pill hl-cyan" style="font-size: 0.78rem; padding: 0.15rem 0.5rem;">Đã tốt nghiệp</span>
              <strong>I recently graduated from <span class="hl-placeholder">[tên trường]</span> with a bachelor’s degree in <span class="hl-placeholder">[chuyên ngành]</span>. During my studies, I developed a good understanding of my field. I also gained useful knowledge of relevant theories and practical skills related to my major.</strong>
            </div>
          </div>
          <div class="formula-arrow-row">
            <span class="formula-arrow-icon">↳</span>
            <div class="formula-arrow-content" style="color: var(--text-primary);">
              <span class="hl-pill hl-emerald" style="font-size: 0.78rem; padding: 0.15rem 0.5rem;">Đang theo học</span>
              <strong>I am currently studying <span class="hl-placeholder">[chuyên ngành]</span> at <span class="hl-placeholder">[tên trường]</span>. During my studies, I have developed a good understanding of my field. I have also gained useful knowledge of relevant theories and practical skills related to my major.</strong>
            </div>
          </div>
        </div>

        <strong style="color: var(--cyan-light); font-size: 0.93rem;">• Kinh nghiệm làm việc:</strong>
        <div class="formula-arrow-row" style="margin-left: 0.5rem; margin-top: 0.35rem;">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="color: var(--text-primary); line-height: 1.7;">
            <strong>I worked part-time as a <span class="hl-placeholder">[vị trí công việc]</span> at <span class="hl-placeholder">[nơi làm việc]</span>. In this role, I was responsible for <span class="hl-placeholder">[nhiệm vụ]</span>. This experience allowed me to develop important soft skills such as <span class="hl-placeholder">[kỹ năng mềm 1]</span> and <span class="hl-placeholder">[kỹ năng mềm 2]</span>. It also gave me valuable hands-on experience and strengthened my ability to handle tasks efficiently.</strong>
          </div>
        </div>
      </div>

      <!-- 3.3 Giải thích sự phù hợp với vị trí ứng tuyển -->
      <div style="background: var(--bg-inner); padding: 1.1rem 1.3rem; border-radius: var(--radius-md); border: 1px solid var(--panel-border); margin-bottom: 1.15rem; font-size: 0.95rem; line-height: 1.7; color: var(--text-primary);">
        <div style="font-weight: 800; color: var(--rose-light); margin-bottom: 0.45rem; font-size: 0.98rem;">
          <i class="fa-solid fa-user-check"></i> 3.3. Giải thích sự phù hợp với vị trí ứng tuyển
        </div>
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="color: var(--text-primary); line-height: 1.7;">
            <strong>I believe I would be a suitable candidate for this position because I am <span class="hl-placeholder">[đặc điểm tính cách: enthusiastic, honest, and hardworking]</span>. Moreover, I am eager to learn and can adapt quickly to new environments. I am confident that I can make a positive contribution to your organization and perform my duties effectively.</strong>
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
              <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0.15rem 0 0 0; text-align: justify !important; text-justify: inter-word !important;">Phối hợp linh hoạt các cấu trúc dưới đây vào Thân bài để bứt phá điểm Ngữ pháp & Từ vựng (kèm câu ví dụ mẫu):</p>
            </div>
          </div>
          <span class="hl-pill hl-amber"><i class="fa-solid fa-crown"></i> 8 Cấu trúc B2</span>
        </div>
        <div id="outlineStructuresContainer" class="formulas-grid-2col"></div>
      </div>

      <!-- Sơ đồ chuỗi từ liên kết gợi ý dạng Flow Nodes -->
      <div class="connector-flow-box">
        <strong style="color: var(--emerald-light); font-size: 0.92rem;"><i class="fa-solid fa-route"></i> SƠ ĐỒ CHUỖI TỪ LIÊN KẾT GỢI Ý CHUẨN B2:</strong>
        <div class="connector-chain-nodes" style="margin-top: 0.65rem;">
          <span class="flow-node-3d"><span class="flow-node-num">1</span> I am particularly interested in this position because …</span>
          <i class="fa-solid fa-arrow-right flow-arrow"></i>
          <span class="flow-node-3d"><span class="flow-node-num">2</span> Regarding my education, I recently graduated / am studying …</span>
          <i class="fa-solid fa-arrow-right flow-arrow"></i>
          <span class="flow-node-3d"><span class="flow-node-num">3</span> In addition, I worked part-time as a …</span>
          <i class="fa-solid fa-arrow-right flow-arrow"></i>
          <span class="flow-node-3d"><span class="flow-node-num">4</span> Finally, I believe I would be a suitable candidate because …</span>
        </div>
      </div>
    </div>

    <!-- Bước 4: Kết thư -->
    <div class="outline-step-card step-border-amber">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-amber"><i class="fa-solid fa-heart"></i> 4. KẾT THƯ (CLOSING)</span>
        <span class="hl-pill hl-amber">Bày tỏ lòng biết ơn & Sẵn sàng phỏng vấn</span>
      </div>
      <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(234, 88, 12, 0.05)); border: 1px solid var(--amber-border); border-radius: var(--radius-md); padding: 1rem 1.25rem; font-size: 1.02rem; color: var(--text-primary); line-height: 1.7;">
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content">
            <strong>I would be grateful if you could consider my application. I am available for an interview at your convenience and look forward to hearing from you soon.</strong>
          </div>
        </div>
      </div>
      <p style="font-size: 0.83rem; color: var(--text-muted); margin: 0.5rem 0 0 0; text-align: justify !important; text-justify: inter-word !important;">
        <i class="fa-solid fa-language" style="color: var(--amber-light);"></i> <em>Dịch: Tôi rất cảm kích nếu quý vị có thể xem xét hồ sơ ứng tuyển của tôi. Tôi luôn sẵn sàng tham gia phỏng vấn vào thời gian thuận tiện cho quý vị và rất mong sớm nhận được hồi âm.</em>
      </p>
    </div>

    <!-- Bước 5: Lời chào kết thúc -->
    <div class="outline-step-card step-border-rose">
      <div class="outline-step-title">
        <span class="step-badge-3d step-badge-rose"><i class="fa-solid fa-signature"></i> 5. LỜI CHÀO KẾT THÚC (SIGN-OFF)</span>
        <span class="hl-pill hl-rose">100% Chuẩn Trang Trọng</span>
      </div>
      <div style="background: var(--bg-inner); padding: 1rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--rose-border); font-size: 0.95rem; line-height: 1.7;">
        <div class="formula-arrow-row">
          <span class="formula-arrow-icon">↳</span>
          <div class="formula-arrow-content" style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary);">
            Yours faithfully,
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
          You saw a job advertisement for a sales assistant at a clothing store in your city. Write an email to apply for the job.
        </p>
        <p style="margin: 0 0 0.5rem 0;">
          In your email, you should:
        </p>
        <div style="margin: 0.5rem 0 0.75rem 0; padding-left: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 0.45rem; margin-bottom: 0.25rem;"><i class="fa-solid fa-bolt" style="color: var(--amber-light);"></i> <span>Introduce yourself and your current situation</span></div>
          <div style="display: flex; align-items: center; gap: 0.45rem; margin-bottom: 0.25rem;"><i class="fa-solid fa-bolt" style="color: var(--amber-light);"></i> <span>Say why you are interested in the position</span></div>
          <div style="display: flex; align-items: center; gap: 0.45rem;"><i class="fa-solid fa-bolt" style="color: var(--amber-light);"></i> <span>Mention any experience you have working with customers</span></div>
        </div>
        <p style="margin: 0.5rem 0 0 0;">
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
          <div class="val">Hiring Manager / Store Manager (Nhà tuyển dụng / Quản lý cửa hàng thời trang).</div>
        </div>
        <div class="analysis-step-item step-amber" style="padding: 0.9rem 1rem;">
          <div class="analysis-step-top"><div class="num">2</div><span class="hl-pill hl-amber">Mục đích</span></div>
          <div class="label">Mục đích bức thư là gì?</div>
          <div class="val">Ứng tuyển vào vị trí nhân viên bán hàng (Sales Assistant) tại cửa hàng quần áo.</div>
        </div>
        <div class="analysis-step-item step-emerald" style="padding: 0.9rem 1rem;">
          <div class="analysis-step-top"><div class="num">3</div><span class="hl-pill hl-emerald">Văn phong</span></div>
          <div class="label">Văn phong thư là gì?</div>
          <div class="val">100% Trang trọng (Formal letter).</div>
        </div>
        <div class="analysis-step-item step-rose" style="padding: 0.9rem 1rem;">
          <div class="analysis-step-top"><div class="num">4</div><span class="hl-pill hl-rose">Yêu cầu</span></div>
          <div class="label">Có những yêu cầu gì?</div>
          <div class="val">1. Giới thiệu bản thân và tình trạng học vấn/công việc hiện tại • 2. Nêu lý do yêu thích và quan tâm đến vị trí này • 3. Mô tả kinh nghiệm làm việc với khách hàng trước đây và sự phù hợp.</div>
        </div>
      </div>
    </div>
  
  `
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { OVERVIEW_THEORY, B2_CATEGORY_THEORY, B2_DETAILED_OUTLINES };
}
