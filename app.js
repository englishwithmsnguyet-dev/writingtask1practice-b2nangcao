/**
 * VSTEP WRITING TASK 01 - B2 NÂNG CAO (PHƯƠNG PHÁP CHUẨN B2)
 * Logic ứng dụng, điều hướng 5 Tabs, phòng thực hành & bộ chấm điểm VSTEP B2
 */

// ==========================================================================
// 1. GLOBAL APPLICATION STATE
// ==========================================================================
const AppState = {
  activeScreen: 'overview', // 'overview' | 'category' | 'all-submissions' | 'all-drafts'
  activeCategory: 'advice', // 'advice' | 'request' | 'description' | 'complaint' | 'feedback' | 'apology' | 'application'
  activeTab: 'theory',      // 'theory' | 'outline' | 'samples' | 'practice' | 'submissions'
  
  activeSampleTopicId: null,
  activeIdeasTopicId: null,
  activePracticeTopicId: null,
  
  sampleTranslationVisible: false,
  ideasPromptTranslationVisible: false,
  practicePromptTranslationVisible: false,
  currentAssistTab: 'checkpoints', // 'checkpoints' | 'ideas' | 'vocab'
  
  // 20-min Countdown Timer
  timerTotalSeconds: 1200, // 20 minutes
  timerRemaining: 1200,
  timerRunning: false,
  timerInterval: null,
  
  // Audio & Sounds
  soundEnabled: true,
  audioCtx: null,
  ambientRainNode: null,
  ambientRainGain: null,
  
  // Storage
  student: {
    name: 'Học viên VSTEP B2',
    className: 'CB206 - Mục tiêu B2'
  },
  submissions: [],
  drafts: {},

  // Recitation State (TRẢ BÀI DÀN Ý CHI TIẾT - CHUẨN B2)
  isRecitationInProgress: false,
  recitationCategory: null,
  currentRecitationQuestionIdx: 0,
  recitationQuestions: [],
  recitationUserAnswers: [],
  recitationScores: [],
  recitationHintsUsed: [],
  recitationTimerRemaining: 1200,
  recitationTimerInterval: null
};

// Category Mapping info (7 Dạng thư VSTEP B2 chuẩn B2)
const CATEGORY_MAP = {
  advice: { 
    id: 1, 
    key: 'advice', 
    title_vi: 'Thư Cho Lời Khuyên', 
    title_en: 'Letter of Advice', 
    icon: 'fa-lightbulb', 
    badge: 'BAND B2',
    defaultTopicId: 'de-01'
  },
  request: { 
    id: 2, 
    key: 'request', 
    title_vi: 'Thư Yêu Cầu', 
    title_en: 'Letter of Request', 
    icon: 'fa-handshake', 
    badge: 'BAND B2',
    defaultTopicId: 'de-03'
  },
  description: { 
    id: 3, 
    key: 'description', 
    title_vi: 'Thư Mô Tả', 
    title_en: 'Letter of Description', 
    icon: 'fa-circle-info', 
    badge: 'BAND B2',
    defaultTopicId: 'de-19'
  },
  complaint: { 
    id: 4, 
    key: 'complaint', 
    title_vi: 'Thư Phàn Nàn', 
    title_en: 'Letter of Complaint', 
    icon: 'fa-triangle-exclamation', 
    badge: 'BAND B2',
    defaultTopicId: 'de-20'
  },
  feedback: { 
    id: 5, 
    key: 'feedback', 
    title_vi: 'Thư Phản Hồi, Đánh Giá', 
    title_en: 'Letter of Feedback', 
    icon: 'fa-comments', 
    badge: 'BAND B2',
    defaultTopicId: 'de-09'
  },
  apology: { 
    id: 6, 
    key: 'apology', 
    title_vi: 'Thư Xin Lỗi', 
    title_en: 'Letter of Apology', 
    icon: 'fa-reply', 
    badge: 'BAND B2',
    defaultTopicId: 'de-11'
  },
  application: { 
    id: 7, 
    key: 'application', 
    title_vi: 'Thư Ứng Tuyển', 
    title_en: 'Letter of Application', 
    icon: 'fa-briefcase', 
    badge: 'BAND B2',
    defaultTopicId: 'de-13'
  }
};

// ==========================================================================
// 2. AUTHENTICATION & STUDENT LOGIN (WELCOME MODAL)
// Theo dõi đăng nhập qua: https://forms.gle/232xy5SsK36JqpCn7
// Mật khẩu truy cập chính thức: VSTEPWRITING
// Các lớp tiếp nhận: CB206, CB210, B2 (Học viên: Gia Tuệ,...)
// ==========================================================================
const ACCESS_PASSWORDS = ['VSTEPWRITING', 'VSTEOWRITING', 'VSTEP', 'PTMN', 'B2', 'CB206', 'CB210', 'ADMIN'];
const ALLOWED_CLASSES = ['CB206', 'CB210', 'B2', 'GV'];
// Danh sách Dạng thư tạm khóa đối với học viên thông thường (Chỉ mở 01 Advice, 02 Request)
const LOCKED_CATEGORIES_FOR_STUDENTS = ['description', 'complaint', 'feedback', 'apology', 'application'];
// Riêng học viên Gia Tuệ: Mở khóa toàn bộ 07 dạng thư
const LOCKED_CATEGORIES_FOR_GIATUE = [];
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLScjhthdSEklX3xgFywh0WVnboJiMrdtwktPgdImgsVwl3ymbQ/formResponse';
const GOOGLE_FORM_ENTRY = 'entry.1205151935';

function cleanAccessPassword(pwd) {
  return (pwd || '')
    .trim()
    .toUpperCase()
    .replace(/\s+/g, '') // Xóa khoảng trắng thừa
    .replace(/Ư/g, 'W')  // Khắc phục gõ Telex chữ W bị biến thành Ư
    .replace(/Ơ/g, 'OW') // Khắc phục gõ Telex OW bị biến thành Ơ
    .replace(/Ê/g, 'E'); // Khắc phục gõ Telex E bị biến thành Ê
}

function togglePasswordVisibility() {
  const pwdInput = document.getElementById('student-password');
  const icon = document.getElementById('toggle-pwd-icon');
  if (!pwdInput) return;
  if (pwdInput.type === 'password') {
    pwdInput.type = 'text';
    if (icon) {
      icon.innerHTML = `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>`;
    }
  } else {
    pwdInput.type = 'password';
    if (icon) {
      icon.innerHTML = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>`;
    }
  }
}

function initLoginModal() {
  const welcomeModal = document.getElementById('welcome-modal');
  const nameInp = document.getElementById('student-name');
  const classInp = document.getElementById('student-class');
  const pwdInp = document.getElementById('student-password');
  const loginErr = document.getElementById('login-error');

  if (welcomeModal) {
    welcomeModal.classList.remove('hidden');
    welcomeModal.style.display = 'flex';
    welcomeModal.style.opacity = '1';
    welcomeModal.style.pointerEvents = 'auto';
  }

  // Điền sẵn thông tin học viên trước đó nếu có
  if (AppState.student) {
    if (nameInp && AppState.student.name && AppState.student.name !== 'Học viên VSTEP B2') {
      nameInp.value = AppState.student.name;
    }
    if (classInp && AppState.student.className && !AppState.student.className.includes('Mục tiêu B2')) {
      classInp.value = AppState.student.className;
    }
  }

  if (pwdInp) pwdInp.value = '';
  if (loginErr) loginErr.style.display = 'none';

  setTimeout(() => {
    if (nameInp && !nameInp.value) {
      nameInp.focus();
    } else if (classInp && !classInp.value) {
      classInp.focus();
    } else if (pwdInp) {
      pwdInp.focus();
    }
  }, 250);
}

function reopenLoginModal() {
  closeStudentModal();
  initLoginModal();
}

function enterRoom() {
  const studentInput = document.getElementById('student-name');
  const studentClassInput = document.getElementById('student-class');
  const studentPasswordInput = document.getElementById('student-password');
  const loginError = document.getElementById('login-error');
  const startBtn = document.getElementById('start-btn');
  
  const nameVal = (studentInput?.value || '').trim();
  const rawClassVal = (studentClassInput?.value || '').trim();
  const classVal = rawClassVal.toUpperCase().replace(/[\s\-_]+/g, '');
  const passwordVal = (studentPasswordInput?.value || '').trim();
  
  if (!nameVal) {
    if (loginError) {
      loginError.textContent = 'Vui lòng nhập đầy đủ Họ và tên học viên!';
      loginError.style.display = 'block';
    }
    if (studentInput) studentInput.focus();
    return;
  }

  const normName = nameVal.toUpperCase();
  
  // Nhận diện tài khoản Giáo viên (PTMN, Nguyệt Phạm, Cô Nguyệt, mã lớp GV, hoặc nhập pass PTMN/ADMIN)
  const isTeacher = (
    normName === 'PTMN' ||
    normName.includes('NGUYỆT') ||
    normName.includes('NGUYET') ||
    normName.includes('GIÁO VIÊN') ||
    normName.includes('GIAO VIEN') ||
    normName.includes('TEACHER') ||
    normName.includes('ADMIN') ||
    classVal === 'GV' ||
    classVal.includes('GIÁO') ||
    classVal.includes('GIAO') ||
    classVal.includes('TEACHER') ||
    classVal.includes('ADMIN') ||
    cleanAccessPassword(passwordVal) === 'PTMN' ||
    cleanAccessPassword(passwordVal) === 'ADMIN'
  );

  let finalClassVal = rawClassVal;
  if (isTeacher && !finalClassVal) {
    finalClassVal = 'GV';
  } else if (!finalClassVal) {
    finalClassVal = 'B2';
  }

  // Nếu không phải Giáo viên thì kiểm tra mật khẩu truy cập (VSTEPWRITING)
  if (!isTeacher) {
    if (!passwordVal) {
      if (loginError) {
        loginError.textContent = 'Vui lòng nhập Mật khẩu truy cập!';
        loginError.style.display = 'block';
      }
      if (studentPasswordInput) studentPasswordInput.focus();
      return;
    }

    const cleanedPwd = cleanAccessPassword(passwordVal);
    const isPwdCorrect = ACCESS_PASSWORDS.includes(cleanedPwd) || 
                         cleanedPwd.startsWith('VSTEP') || 
                         cleanedPwd.endsWith('WRITING');

    if (!isPwdCorrect) {
      if (loginError) {
        loginError.textContent = 'Mật khẩu không chính xác! (Mật khẩu: VSTEPWRITING - lưu ý tắt bộ gõ tiếng Việt Telex khi gõ chữ W)';
        loginError.style.display = 'block';
      }
      if (studentPasswordInput) {
        studentPasswordInput.focus();
        studentPasswordInput.select();
      }
      return;
    }
  }
  
  if (loginError) loginError.style.display = 'none';
  if (startBtn) {
    startBtn.disabled = true;
    startBtn.innerHTML = `<span>Đang vào lớp...</span> <i class="fa-solid fa-spinner fa-spin"></i>`;
  }
  
  // Lưu thông tin học viên vào state và localStorage
  AppState.student = { name: nameVal, className: finalClassVal };
  try {
    localStorage.setItem('vstep_b2_task1_student', JSON.stringify(AppState.student));
  } catch (e) {}
  updateStudentDisplay();

  // Gửi thông báo đăng nhập tới Google Forms (https://forms.gle/232xy5SsK36JqpCn7)
  try {
    const now = new Date();
    const timeString = now.toLocaleTimeString('vi-VN', { hour12: false }) + ' ' + now.toLocaleDateString('vi-VN');
    const finalData = `[B2 NÂNG CAO] [ĐĂNG NHẬP] ${nameVal} - Lớp: ${finalClassVal}${isTeacher ? ' (Giáo viên)' : ''} - Vào học lúc ${timeString}`;
    
    // Method 1: sendBeacon (Hiện đại, ngầm và không chặn trình duyệt)
    if (typeof navigator !== 'undefined' && navigator.sendBeacon && typeof FormData !== 'undefined') {
      try {
        const fd = new FormData();
        fd.append(GOOGLE_FORM_ENTRY, finalData);
        fd.append('fvv', '1');
        fd.append('pageHistory', '0');
        navigator.sendBeacon(GOOGLE_FORM_ACTION, fd);
      } catch (be) {}
    }

    // Method 2: Hidden iframe form
    const formInput = document.getElementById('gform_hidden_input');
    const formEl = document.getElementById('gform_hidden_form');
    if (formInput && formEl) {
      formInput.value = finalData;
      try { formEl.submit(); } catch (fe) {}
    }
    
    // Method 3: Parallel fetch call with mode: no-cors
    try {
      const gFormData = new URLSearchParams();
      gFormData.append(GOOGLE_FORM_ENTRY, finalData);
      gFormData.append('fvv', '1');
      gFormData.append('pageHistory', '0');
      fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: gFormData.toString()
      }).catch(() => {});
    } catch (fe) {}
  } catch (err) {
    console.warn("Tracking error:", err);
  }

  // Đóng modal chào mừng mượt mà
  const welcomeModal = document.getElementById('welcome-modal');
  if (welcomeModal) {
    welcomeModal.style.opacity = '0';
    welcomeModal.style.pointerEvents = 'none';
    setTimeout(() => {
      welcomeModal.classList.add('hidden');
      welcomeModal.style.display = 'none';
    }, 250);
  }
  
  if (isGiaTueAccount()) {
    showToast(`🎉 Chào mừng học viên Gia Tuệ! Hệ thống đã mở khóa hoàn toàn tất cả 07 dạng thư cho bạn!`, 'success');
  } else {
    showToast(`Chào mừng ${nameVal} (${isTeacher ? 'Giáo viên' : 'Lớp ' + finalClassVal}) vào học! 🎉`, 'success');
  }

  if (startBtn) {
    startBtn.disabled = false;
    startBtn.innerHTML = `<span>BẮT ĐẦU HỌC</span> <i class="fa-solid fa-arrow-right"></i>`;
  }

  updatePracticeCopyPasteBadge();
  updateSidebarCategoryLockUI();
}

// ==========================================================================
// PHÂN QUYỀN HỌC VIÊN & GIÁO VIÊN
// ==========================================================================
function isGiaTueAccount() {
  const student = AppState.student || {};
  const name = (student.name || '').trim().toUpperCase();
  return name.includes('GIA TUỆ') || name.includes('GIA TUÊ') || name.includes('GIA TUE') || name.includes('GIATUE');
}

function isTeacherAccount() {
  const student = AppState.student || {};
  const name = (student.name || '').trim().toUpperCase();
  const cls = (student.className || '').trim().toUpperCase();
  return (
    name === 'PTMN' ||
    name.includes('NGUYỆT') ||
    name.includes('NGUYET') ||
    name.includes('GIÁO VIÊN') ||
    name.includes('GIAO VIEN') ||
    name.includes('TEACHER') ||
    name.includes('ADMIN') ||
    cls === 'GV' ||
    cls.includes('GIÁO') ||
    cls.includes('GIAO') ||
    cls.includes('TEACHER') ||
    cls.includes('ADMIN')
  );
}

function isCategoryLocked(catKey) {
  // Giáo viên: Mở toàn bộ 100% tất cả 07 dạng thư
  if (isTeacherAccount()) return false;

  // Học viên Gia Tuệ: Mở khóa toàn bộ 100% tất cả 07 dạng thư
  if (isGiaTueAccount()) return false;

  // Học viên khác: Tạm khóa từ Dạng 03 đến Dạng 07 (chỉ mở Dạng 01 và 02)
  return LOCKED_CATEGORIES_FOR_STUDENTS.includes(catKey);
}

function updateSidebarCategoryLockUI() {
  const allCategories = ['advice', 'request', 'description', 'complaint', 'feedback', 'apology', 'application'];

  allCategories.forEach((catKey) => {
    const navLink = document.getElementById(`nav-cat-${catKey}`);
    if (!navLink) return;

    let lockBadge = navLink.querySelector('.cat-lock-indicator');
    const locked = isCategoryLocked(catKey);

    if (locked) {
      navLink.classList.add('nav-cat-locked');
      if (!lockBadge) {
        lockBadge = document.createElement('span');
        lockBadge.className = 'cat-lock-indicator';
        lockBadge.innerHTML = '<i class="fa-solid fa-lock" style="font-size: 0.75rem; color: var(--amber-light);"></i>';
        navLink.appendChild(lockBadge);
      }
      lockBadge.style.display = 'inline-flex';
      navLink.title = 'Dạng thư này tạm thời đang khóa đối với học viên';
    } else {
      navLink.classList.remove('nav-cat-locked');
      if (lockBadge) {
        lockBadge.style.display = 'none';
      }
      navLink.title = '';
    }
  });
}

function updatePracticeCopyPasteBadge() {
  const badge = document.getElementById('practiceCopyPasteBadge');
  if (badge) {
    badge.style.display = 'none';
  }
}

function initPracticeWritingAntiCheat() {
  const textarea = document.getElementById('practiceWritingTextarea');
  if (!textarea) return;

  // 1. Chặn sự kiện PASTE (Dán)
  textarea.addEventListener('paste', (e) => {
    if (isTeacherAccount()) return; // Giáo viên được phép
    e.preventDefault();
    e.stopPropagation();
    showToast('🚫 Chức năng Dán (Paste) đã bị khóa đối với học viên! Vui lòng tự gõ bài làm để rèn luyện kỹ năng phòng thi.', 'warning');
  });

  // 2. Chặn sự kiện COPY (Sao chép)
  textarea.addEventListener('copy', (e) => {
    if (isTeacherAccount()) return; // Giáo viên được phép
    e.preventDefault();
    e.stopPropagation();
    showToast('🚫 Chức năng Sao chép (Copy) đã bị khóa đối với học viên.', 'warning');
  });

  // 3. Chặn sự kiện CUT (Cắt)
  textarea.addEventListener('cut', (e) => {
    if (isTeacherAccount()) return; // Giáo viên được phép
    e.preventDefault();
    e.stopPropagation();
    showToast('🚫 Chức năng Cắt (Cut) đã bị khóa đối với học viên.', 'warning');
  });

  // 4. Chặn phím tắt Ctrl+V, Cmd+V, Ctrl+C, Cmd+C, Ctrl+X, Cmd+X, Shift+Insert
  textarea.addEventListener('keydown', (e) => {
    if (isTeacherAccount()) return; // Giáo viên được phép

    const isCtrlOrCmd = e.ctrlKey || e.metaKey;
    const key = (e.key || '').toLowerCase();

    // Chặn Paste
    if ((isCtrlOrCmd && key === 'v') || (e.shiftKey && e.key === 'Insert')) {
      e.preventDefault();
      e.stopPropagation();
      showToast('🚫 Phím tắt Dán (Ctrl+V / Cmd+V) đã bị khóa! Vui lòng tự gõ bài làm.', 'warning');
      return;
    }

    // Chặn Copy
    if (isCtrlOrCmd && key === 'c') {
      e.preventDefault();
      e.stopPropagation();
      showToast('🚫 Phím tắt Sao chép (Ctrl+C / Cmd+C) đã bị khóa đối với học viên.', 'warning');
      return;
    }

    // Chặn Cut
    if (isCtrlOrCmd && key === 'x') {
      e.preventDefault();
      e.stopPropagation();
      showToast('🚫 Phím tắt Cắt (Ctrl+X / Cmd+X) đã bị khóa đối với học viên.', 'warning');
      return;
    }
  });

  // 5. Chặn kéo thả văn bản vào textarea (Drag & Drop)
  textarea.addEventListener('drop', (e) => {
    if (isTeacherAccount()) return;
    e.preventDefault();
    e.stopPropagation();
    showToast('🚫 Không thể kéo thả văn bản vào bài làm.', 'warning');
  });

  // 6. Chặn menu chuột phải (Context Menu) trong ô viết bài
  textarea.addEventListener('contextmenu', (e) => {
    if (isTeacherAccount()) return;
    e.preventDefault();
    showToast('🚫 Menu chuột phải và thao tác sao chép / dán đã bị khóa.', 'warning');
  });
}

// ==========================================================================
// 3. INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initStorage();
  initTheme();
  
  const hash = (window.location.hash || '').replace('#', '').toLowerCase();
  if (CATEGORY_MAP[hash]) {
    if (!isCategoryLocked(hash)) {
      selectCategory(hash);
    } else {
      // Nếu chuyên đề đang tạm khóa đối với tài khoản này -> Tự động chuyển về Dạng 01
      selectCategory('advice');
    }
  } else if (hash === 'overview') {
    switchMainScreen('overview');
  } else if (hash === 'submissions' || hash === 'all-submissions') {
    switchMainScreen('all-submissions');
  } else if (hash === 'drafts' || hash === 'all-drafts') {
    switchMainScreen('all-drafts');
  } else {
    // MẶC ĐỊNH MỞ TAB ĐẦU TIÊN TRÊN SIDEBAR: LÝ THUYẾT TỔNG QUAN
    switchMainScreen('overview');
  }
  
  updateStudentDisplay();
  updatePracticeCopyPasteBadge();
  updateSidebarCategoryLockUI();
  initPracticeWritingAntiCheat();
  initLoginModal();
});

window.addEventListener('hashchange', () => {
  const hash = (window.location.hash || '').replace('#', '').toLowerCase();
  if (CATEGORY_MAP[hash]) {
    if (!isCategoryLocked(hash)) {
      selectCategory(hash);
    } else {
      showToast('🔒 Dạng thư này tạm thời đang khóa đối với tài khoản học viên.', 'warning');
      selectCategory('advice');
    }
  } else if (hash === 'overview') {
    switchMainScreen('overview');
  } else if (hash === 'submissions' || hash === 'all-submissions') {
    switchMainScreen('all-submissions');
  } else if (hash === 'drafts' || hash === 'all-drafts') {
    switchMainScreen('all-drafts');
  }
});

function initStorage() {
  try {
    const savedSubs = localStorage.getItem('vstep_b2_task1_submissions');
    if (savedSubs) AppState.submissions = JSON.parse(savedSubs);

    const savedDrafts = localStorage.getItem('vstep_b2_task1_drafts');
    if (savedDrafts) AppState.drafts = JSON.parse(savedDrafts);

    const savedStudent = localStorage.getItem('vstep_b2_task1_student');
    if (savedStudent) AppState.student = JSON.parse(savedStudent);
  } catch (e) {
    console.error("Storage load error:", e);
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem('vstep_b2_theme') || 'light';
  setTheme(savedTheme);
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('vstep_b2_theme', theme);
  
  const lightBtn = document.getElementById('theme-light-btn');
  const darkBtn = document.getElementById('theme-dark-btn');
  if (lightBtn && darkBtn) {
    lightBtn.classList.toggle('active', theme === 'light');
    darkBtn.classList.toggle('active', theme === 'dark');
  }
}

// ==========================================================================
// 3. NAVIGATION: MAIN SCREENS & SIDEBAR
// ==========================================================================
function switchMainScreen(screenName) {
  if (AppState.isRecitationInProgress && screenName !== 'category') {
    if (confirm('🔒 Bạn đang trong bài kiểm tra Trả bài. Bạn có muốn nộp bài sớm để mở khóa màn hình không?')) {
      submitRecitationEarly();
    } else {
      return;
    }
  }
  AppState.activeScreen = screenName;
  closeMobileSidebar();

  // Hide all screens
  document.querySelectorAll('.screen, .screen-view').forEach(s => s.classList.remove('active'));

  // Remove active from all sidebar links
  document.querySelectorAll('.sidebar-nav .nav-link').forEach(l => l.classList.remove('active'));

  const headerTitle = document.getElementById('top-header-title-badge');

  if (screenName === 'overview') {
    document.getElementById('screen-overview').classList.add('active');
    document.getElementById('nav-link-overview').classList.add('active');
    if (headerTitle) {
      headerTitle.innerHTML = '<i class="fa-solid fa-book-open" style="color: var(--accent-primary);"></i> <span>LÝ THUYẾT TỔNG QUAN TASK 01</span>';
    }
    renderOverviewScreen();
  } 
  else if (screenName === 'category') {
    document.getElementById('screen-category').classList.add('active');
    const catNav = document.getElementById(`nav-cat-${AppState.activeCategory}`);
    if (catNav) catNav.classList.add('active');
    updateCategoryHeaderUI();
  }
  else if (screenName === 'all-submissions') {
    document.getElementById('screen-all-submissions').classList.add('active');
    document.getElementById('nav-link-all-submissions').classList.add('active');
    if (headerTitle) {
      headerTitle.innerHTML = '<i class="fa-solid fa-clipboard-check" style="color: var(--accent-primary);"></i> <span>QUẢN LÝ BÀI TRẢ & ĐÁNH GIÁ</span>';
    }
    renderAllSubmissionsScreen();
  }
  else if (screenName === 'all-drafts') {
    document.getElementById('screen-all-drafts').classList.add('active');
    document.getElementById('nav-link-all-drafts').classList.add('active');
    if (headerTitle) {
      headerTitle.innerHTML = '<i class="fa-solid fa-floppy-disk" style="color: var(--accent-primary);"></i> <span>DANH SÁCH BẢN NHÁP ĐÃ LƯU</span>';
    }
    renderAllDraftsScreen();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectCategory(catKey) {
  if (AppState.isRecitationInProgress && catKey !== AppState.activeCategory) {
    if (confirm('🔒 Bạn đang trong bài kiểm tra Trả bài. Bạn có muốn nộp bài sớm để chuyển chuyên đề không?')) {
      submitRecitationEarly();
    } else {
      return;
    }
  }

  // Kiểm tra phân quyền truy cập Dạng thư
  if (isCategoryLocked(catKey)) {
    const catInfo = CATEGORY_MAP[catKey];
    if (isGiaTueAccount()) {
      showToast(`🔒 Dạng thư "${catInfo?.title_vi || catKey}" đang được chuẩn bị và sẽ sớm mở cho Gia Tuệ ở bài học tiếp theo nhé!`, 'warning');
    } else {
      showToast(`🔒 Dạng thư "${catInfo?.title_vi || catKey}" tạm thời đang khóa đối với học viên. Hiện tại bạn hãy luyện tập Dạng 01 (Advice) và Dạng 02 (Request) nhé!`, 'warning');
    }
    return;
  }

  if (!CATEGORY_MAP[catKey]) catKey = 'advice';
  AppState.activeCategory = catKey;
  
  const cat = CATEGORY_MAP[catKey];
  if (cat && cat.defaultTopicId) {
    AppState.activeSampleTopicId = cat.defaultTopicId;
    AppState.activePracticeTopicId = cat.defaultTopicId;
  } else {
    AppState.activeSampleTopicId = null;
    AppState.activePracticeTopicId = null;
  }
  
  setupCategoryTopics(catKey);
  switchMainScreen('category');
  
  // Render active workflow tab
  renderActiveWorkflowTab();
}

function updateCategoryHeaderUI() {
  const cat = CATEGORY_MAP[AppState.activeCategory];
  const catData = (typeof LETTERS_DATA !== 'undefined') ? LETTERS_DATA.find(c => c.category_id === AppState.activeCategory) : null;
  
  const iconEl = document.getElementById('catHeroIcon');
  const titleEl = document.getElementById('catHeroTitleVi');
  const descEl = document.getElementById('catHeroDesc');
  const badgeEl = document.getElementById('catHeroBadge');
  const topHeaderTitle = document.getElementById('top-header-title-badge');

  if (iconEl) iconEl.innerHTML = `<i class="fa-solid ${cat.icon}"></i>`;
  if (titleEl) titleEl.textContent = cat.title_en;
  if (descEl) descEl.textContent = cat.title_vi;
  if (badgeEl) badgeEl.textContent = cat.badge || 'B2 LEVEL ADVANCED';
  
  if (topHeaderTitle) {
    topHeaderTitle.innerHTML = `<i class="fa-solid ${cat.icon}" style="color: var(--accent-primary);"></i> <span>${cat.title_en.toUpperCase()}</span>`;
  }
}

function setupCategoryTopics(catKey) {
  const cat = CATEGORY_MAP[catKey];
  const catData = (typeof LETTERS_DATA !== 'undefined') ? LETTERS_DATA.find(c => c.category_id === catKey) : null;
  const topics = (catData && catData.topics) ? catData.topics : [];

  if (topics.length > 0) {
    const preferredId = (cat && cat.defaultTopicId && topics.some(t => t.id === cat.defaultTopicId)) 
      ? cat.defaultTopicId 
      : topics[0].id;

    if (!AppState.activeSampleTopicId || !topics.some(t => t.id === AppState.activeSampleTopicId)) {
      AppState.activeSampleTopicId = preferredId;
    }
    if (!AppState.activeIdeasTopicId || !topics.some(t => t.id === AppState.activeIdeasTopicId)) {
      AppState.activeIdeasTopicId = preferredId;
    }
    if (!AppState.activePracticeTopicId || !topics.some(t => t.id === AppState.activePracticeTopicId)) {
      AppState.activePracticeTopicId = preferredId;
    }
  }

  // Populate Selectors
  populateTopicSelectors(topics);
}

function findCategoryByTopicId(topicId) {
  if (typeof LETTERS_DATA === 'undefined') return null;
  for (const cat of LETTERS_DATA) {
    if (cat.topics && cat.topics.some(t => t.id === topicId)) {
      return cat;
    }
  }
  return null;
}

function populateTopicSelectors(categoryTopics) {
  const catKey = AppState.activeCategory;
  const cat = CATEGORY_MAP[catKey];
  const catData = (typeof LETTERS_DATA !== 'undefined') ? LETTERS_DATA.find(c => c.category_id === catKey) : null;
  const topics = (catData && catData.topics) ? catData.topics : (categoryTopics || []);

  const sampleSelect = document.getElementById('sampleTopicSelect');
  const practiceSelect = document.getElementById('practiceTopicSelect');
  const selectLabel = document.getElementById('practiceTopicSelectLabel');
  const countLabel = document.getElementById('btnCategoryTopicsCountLabel');
  const pillsContainer = document.getElementById('practiceTopicQuickPills');

  // Options HTML strictly for the active category
  const optionsHtml = topics.map((t, idx) => {
    const numStr = String(idx + 1).padStart(2, '0');
    const cleanTitle = t.title_vi ? t.title_vi.replace(/^Đề\s*\d+\s*:\s*/i, '') : (t.title_en || '');
    return `<option value="${t.id}">Đề ${numStr}: ${escapeHtml(cleanTitle)}</option>`;
  }).join('');

  // 1. Sample tab select (strictly topics of this category)
  if (sampleSelect) {
    sampleSelect.innerHTML = optionsHtml;
    if (AppState.activeSampleTopicId && topics.some(t => t.id === AppState.activeSampleTopicId)) {
      sampleSelect.value = AppState.activeSampleTopicId;
    } else if (topics.length > 0) {
      AppState.activeSampleTopicId = topics[0].id;
      sampleSelect.value = topics[0].id;
    }
  }

  // 2. Practice tab select (strictly topics of this category)
  if (practiceSelect) {
    practiceSelect.innerHTML = optionsHtml;
    if (AppState.activePracticeTopicId && topics.some(t => t.id === AppState.activePracticeTopicId)) {
      practiceSelect.value = AppState.activePracticeTopicId;
    } else if (topics.length > 0) {
      AppState.activePracticeTopicId = topics[0].id;
      practiceSelect.value = topics[0].id;
    }
  }

  // 3. Category count labels
  if (selectLabel && cat) {
    selectLabel.textContent = `Chọn đề (${topics.length} đề ${cat.title_vi}):`;
  }
  if (countLabel) {
    countLabel.textContent = `Xem cả ${topics.length} đề`;
  }



  // 4. Quick Topic Switch Pills
  if (pillsContainer) {
    pillsContainer.innerHTML = topics.map((t, idx) => {
      const isSelected = (t.id === AppState.activePracticeTopicId);
      const numStr = String(idx + 1).padStart(2, '0');
      const cleanTitle = t.title_vi ? t.title_vi.replace(/^Đề\s*\d+\s*:\s*/i, '') : (t.title_en || '');
      return `
        <button type="button" class="topic-quick-pill ${isSelected ? 'active' : ''}" onclick="onPracticeTopicChange('${t.id}')" title="Đề ${numStr}: ${escapeHtml(cleanTitle)}">
          Đề ${numStr}
        </button>
      `;
    }).join('');
  }
}

// ==========================================================================
// 4. WORKFLOW TABS: 5-STEP PEDAGOGICAL FLOW
// ==========================================================================
function switchWorkflowTab(tabName) {
  // Tự động lưu nháp nếu đang chuyển khỏi tab Thực hành viết bài
  if (AppState.activeTab === 'practice' && tabName !== 'practice') {
    if (typeof executeAutoSavePracticeDraft === 'function') {
      executeAutoSavePracticeDraft();
    }
  }

  if (AppState.isRecitationInProgress && tabName !== 'submissions') {
    if (confirm('🔒 Bạn đang trong bài kiểm tra Trả bài. Bạn có muốn nộp bài sớm để chuyển sang tab khác không?')) {
      submitRecitationEarly();
    } else {
      return;
    }
  }
  AppState.activeTab = tabName;

  // Update tab buttons
  document.querySelectorAll('.workflow-tab-btn, .tab-btn').forEach(b => b.classList.remove('active'));
  const targetBtn = document.getElementById(`tab-btn-${tabName}`);
  if (targetBtn) targetBtn.classList.add('active');

  // Update tab panels
  document.querySelectorAll('.tab-content-panel').forEach(p => p.classList.remove('active'));
  const targetPanel = document.getElementById(`tab-panel-${tabName}`);
  if (targetPanel) targetPanel.classList.add('active');

  renderActiveWorkflowTab();
}

function renderActiveWorkflowTab() {
  const tab = AppState.activeTab;
  if (tab === 'theory') renderCategoryTheoryTab();
  else if (tab === 'outline') renderCategoryOutlineTab();
  else if (tab === 'samples') renderCategorySamplesTab();
  else if (tab === 'practice') renderCategoryPracticeTab();
  else if (tab === 'submissions') renderCategorySubmissionsTab();
}

// --------------------------------------------------------------------------
// TAB 1: LÝ THUYẾT DẠNG THƯ (3D FLOATING PILLS, FLOW NODES & COLOR HIGHLIGHTS)
// --------------------------------------------------------------------------
function formatGrammarPatternHtml(pattern) {
  let html = escapeHtml(pattern);
  html = html.replace(/\+\s*Vo/g, '<span class="gram-highlight">+ Vo</span>');
  html = html.replace(/\+\s*V-?ing/gi, '<span class="gram-highlight">+ V-ing</span>');
  html = html.replace(/\(Thân mật\)/g, '<span class="hl-pill hl-cyan" style="margin-left: 0.35rem;">Thân mật</span>');
  html = html.replace(/\(Trang trọng\)/g, '<span class="hl-pill hl-violet" style="margin-left: 0.35rem;">Trang trọng</span>');
  return html;
}

function renderCategoryTheoryTab() {
  const catKey = AppState.activeCategory;
  const th = (typeof B2_CATEGORY_THEORY !== 'undefined') ? B2_CATEGORY_THEORY[catKey] : null;
  const catData = (typeof LETTERS_DATA !== 'undefined') ? LETTERS_DATA.find(c => c.category_id === catKey) : null;

  const purposeEl = document.getElementById('catTheoryPurposeContent');
  const connHintEl = document.getElementById('catTheoryConnectorsHint');
  const signsEl = document.getElementById('catTheorySignsList');

  if (purposeEl) {
    purposeEl.innerHTML = `
      <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-radius: var(--radius-md); padding: 0.85rem 1rem; margin-bottom: 0.75rem;">
        <div style="margin-bottom: 0.5rem;">
          <span class="hl-pill hl-amber" style="margin-right: 0.4rem;"><i class="fa-solid fa-bullseye"></i> Mục đích cốt lõi</span>
          <span style="color: var(--text-primary); font-weight: 600;">${th ? th.purpose : (catData?.description || '')}</span>
        </div>
        <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 0.45rem;">
          <span class="hl-pill hl-violet"><i class="fa-solid fa-masks-theater"></i> Văn phong yêu cầu</span>
          <span style="color: var(--cyan-light); font-weight: 800; font-size: 0.88rem;">
            ${th ? th.typical_register : 'Thân mật (Informal)'}
          </span>
        </div>
      </div>
    `;
  }

  if (connHintEl) {
    if (catKey === 'advice') {
      const nodes = [
        { label: 'First of all, when it comes to ___, …' },
        { label: 'As for ___, …' },
        { label: 'Regarding ___, …' },
        { label: 'Last but not least, …' }
      ];
      connHintEl.innerHTML = nodes.map((n, idx) => `
        <span class="flow-node-3d">
          <span class="flow-node-num">${idx + 1}</span>
          <span>${n.label}</span>
        </span>
        ${idx < nodes.length - 1 ? '<i class="fa-solid fa-arrow-right flow-arrow"></i>' : ''}
      `).join('');
    } else if (catKey === 'feedback') {
      const nodes = [
        { label: 'First of all, regarding positive aspects, …' },
        { label: 'Furthermore, …' },
        { label: 'However, there were also areas that could be improved, …' },
        { label: 'To improve the quality, I suggest that you should …' }
      ];
      connHintEl.innerHTML = `
        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.4rem; margin-top: 0.25rem;">
          ${nodes.map((n, idx) => `
            <span class="flow-node-3d">
              <span class="flow-node-num">${idx + 1}</span>
              <span>${n.label}</span>
            </span>
            ${idx < nodes.length - 1 ? '<i class="fa-solid fa-arrow-right flow-arrow"></i>' : ''}
          `).join('')}
        </div>
      `;
    } else if (catKey === 'apology') {
      connHintEl.innerHTML = `
        <div style="width: 100%; margin-bottom: 0.4rem;">
          <span class="hl-pill hl-cyan" style="margin-bottom: 0.35rem;">Thân mật (Informal):</span>
          <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.4rem; margin-top: 0.25rem;">
            <span class="flow-node-3d"><span class="flow-node-num">1</span> First of all, let me explain why this happened.</span>
            <i class="fa-solid fa-arrow-right flow-arrow"></i>
            <span class="flow-node-3d"><span class="flow-node-num">2</span> Next, regarding the situation, …</span>
            <i class="fa-solid fa-arrow-right flow-arrow"></i>
            <span class="flow-node-3d"><span class="flow-node-num">3</span> Finally, let me make it up to you by …</span>
          </div>
        </div>
        <div style="width: 100%;">
          <span class="hl-pill hl-violet" style="margin-bottom: 0.35rem;">Trang trọng (Formal):</span>
          <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.4rem; margin-top: 0.25rem;">
            <span class="flow-node-3d"><span class="flow-node-num">1</span> First of all, I would like to explain why this happened.</span>
            <i class="fa-solid fa-arrow-right flow-arrow"></i>
            <span class="flow-node-3d"><span class="flow-node-num">2</span> In addition, regarding …</span>
            <i class="fa-solid fa-arrow-right flow-arrow"></i>
            <span class="flow-node-3d"><span class="flow-node-num">3</span> To make up for this, I would like to …</span>
          </div>
        </div>
      `;
    } else if (catKey === 'application') {
      const nodes = [
        { label: 'I am particularly interested in this position because …' },
        { label: 'Regarding my education, I recently graduated / am studying …' },
        { label: 'In addition, I worked part-time as a …' },
        { label: 'Finally, I believe I would be a suitable candidate because …' }
      ];
      connHintEl.innerHTML = `
        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.4rem; margin-top: 0.25rem;">
          ${nodes.map((n, idx) => `
            <span class="flow-node-3d">
              <span class="flow-node-num">${idx + 1}</span>
              <span>${n.label}</span>
            </span>
            ${idx < nodes.length - 1 ? '<i class="fa-solid fa-arrow-right flow-arrow"></i>' : ''}
          `).join('')}
        </div>
      `;
    } else {
      connHintEl.innerHTML = `
        <div style="width: 100%; margin-bottom: 0.4rem;">
          <span class="hl-pill hl-cyan" style="margin-bottom: 0.35rem;">Thân mật:</span>
          <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.4rem; margin-top: 0.25rem;">
            <span class="flow-node-3d"><span class="flow-node-num">1</span> First of all, …</span>
            <i class="fa-solid fa-arrow-right flow-arrow"></i>
            <span class="flow-node-3d"><span class="flow-node-num">2</span> Besides that, …</span>
            <i class="fa-solid fa-arrow-right flow-arrow"></i>
            <span class="flow-node-3d"><span class="flow-node-num">3</span> On top of that, …</span>
            <i class="fa-solid fa-arrow-right flow-arrow"></i>
            <span class="flow-node-3d"><span class="flow-node-num">4</span> Finally, …</span>
          </div>
        </div>
        <div style="width: 100%;">
          <span class="hl-pill hl-violet" style="margin-bottom: 0.35rem;">Trang trọng:</span>
          <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.4rem; margin-top: 0.25rem;">
            <span class="flow-node-3d"><span class="flow-node-num">1</span> To begin with, …</span>
            <i class="fa-solid fa-arrow-right flow-arrow"></i>
            <span class="flow-node-3d"><span class="flow-node-num">2</span> In addition, …</span>
            <i class="fa-solid fa-arrow-right flow-arrow"></i>
            <span class="flow-node-3d"><span class="flow-node-num">3</span> Furthermore, …</span>
            <i class="fa-solid fa-arrow-right flow-arrow"></i>
            <span class="flow-node-3d"><span class="flow-node-num">4</span> Finally, …</span>
          </div>
        </div>
      `;
    }
  }

  if (signsEl) {
    const signs = (th && th.signs) ? th.signs : (catData?.identifying_signs || []);
    signsEl.innerHTML = signs.map(s => `
      <div class="sign-pill-3d">
        <i class="fa-solid fa-circle-check"></i>
        <span>${escapeHtml(s)}</span>
      </div>
    `).join('');
  }
}

// --------------------------------------------------------------------------
// TAB 2: DÀN Ý CHUNG 5 BƯỚC (BAND B2)
// --------------------------------------------------------------------------
function renderCategoryOutlineTab() {
  const catKey = AppState.activeCategory;
  const container = document.getElementById('catDetailedOutlineContent');
  if (!container) return;

  const outlineMarkup = (typeof B2_DETAILED_OUTLINES !== 'undefined') ? B2_DETAILED_OUTLINES[catKey] : null;
  if (outlineMarkup) {
    container.innerHTML = outlineMarkup;
  } else {
    container.innerHTML = '<p style="color: var(--text-muted);">Đang cập nhật dàn ý cho chuyên đề này.</p>';
  }

  // Populate dynamic outline structures container inside Step 3 (Thân thư)
  const outlineStructContainer = document.getElementById('outlineStructuresContainer');
  if (outlineStructContainer) {
    const th = (typeof B2_CATEGORY_THEORY !== 'undefined') ? B2_CATEGORY_THEORY[catKey] : null;
    const structs = (th && th.b2_power_structures) ? th.b2_power_structures : [];
    if (structs.length > 0) {
      const pillClasses = ['hl-violet', 'hl-cyan', 'hl-emerald', 'hl-amber', 'hl-rose', 'hl-violet', 'hl-cyan', 'hl-amber'];
      outlineStructContainer.innerHTML = structs.map((st, i) => `
        <div class="formula-item f-color-${i % 8}">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.4rem;">
              <div class="formula-pattern">${formatGrammarPatternHtml(st.pattern)}</div>
              <div style="display: flex; align-items: center; gap: 0.35rem; flex-shrink: 0;">
                <span class="hl-pill ${pillClasses[i % 8]}">#0${i + 1}</span>
              </div>
            </div>
            <div class="formula-vi" style="text-align: justify !important; text-justify: inter-word !important;"><i class="fa-solid fa-language" style="color: var(--cyan-light); margin-right: 0.35rem;"></i>${escapeHtml(st.meaning)}</div>
          </div>
          ${st.example ? `<div class="formula-example" style="text-align: justify !important; text-justify: inter-word !important;"><i class="fa-solid fa-quote-left" style="color: var(--amber-light); margin-right: 0.4rem;"></i>${escapeHtml(st.example)}</div>` : ''}
        </div>
      `).join('');
    }
  }
}

// --------------------------------------------------------------------------
// TAB 3: BÀI MẪU B2 SONG NGỮ (VỚI COLOR HIGHLIGHT TỰ ĐỘNG)
// --------------------------------------------------------------------------
AppState.sampleHighlightEnabled = true;

function formatExamPromptHtml(rawPrompt) {
  if (!rawPrompt) return '';
  const lines = rawPrompt.split('\n');
  return lines.map(line => {
    const trimmed = line.trim();
    if (!trimmed) {
      return '<div style="height: 0.35rem;"></div>';
    }

    // Bullet points (-, •, o)
    if (/^[-•]\s*/.test(trimmed) || /^o\s+/.test(trimmed) || trimmed.startsWith('o\t')) {
      const cleanBulletText = trimmed.replace(/^[-•]\s*|^o\t\s*|^o\s+/, '');
      return `<div style="display: flex; align-items: center; gap: 0.55rem; background: var(--amber-bg); border: 1px solid var(--amber-border); padding: 0.45rem 0.85rem; border-radius: var(--radius-sm); margin: 0.35rem 0; font-weight: 700; color: var(--text-primary);">
        <i class="fa-solid fa-bolt" style="color: var(--amber-light);"></i>
        <span>${escapeHtml(cleanBulletText)}</span>
      </div>`;
    }

    // Exam requirement line with "Do not include your name..." and criteria
    if (trimmed.includes('Do not include your name') || trimmed.includes('evaluated in terms of') || trimmed.includes('at least 120 words')) {
      let content = escapeHtml(trimmed);
      // Support markdown bolding for "Do not include your name..."
      content = content.replace(/\*\*(Do not include your name(?: or address)?\.?)\*\*/gi, '<strong style="color: var(--danger-light, #f43f5e); font-weight: 800;">$1</strong>');
      // Other markdown boldings
      content = content.replace(/\*\*(.*?)\*\*/g, '<strong style="font-weight: 800;">$1</strong>');
      
      // Auto-bold critical terms if plain text
      content = content.replace(/(?<!<strong[^>]*>)(Do not include your name(?: or address)?\.?)(?!<\/strong>)/gi, '<strong style="color: var(--danger-light, #f43f5e); font-weight: 800;">$1</strong>');
      ['Task Fulfillment', 'Task fulfillment', 'Task Fulfilment', 'Organization', 'Vocabulary', 'Grammar', 'at least 120 words'].forEach(term => {
        const re = new RegExp(`(?<!<strong[^>]*>)${term}(?!<\\/strong>)`, 'g');
        content = content.replace(re, `<strong style="font-weight: 800;">${term}</strong>`);
      });

      return `<div class="exam-prompt-requirement-box" style="margin-top: 0.75rem; padding: 0.75rem 0.95rem; background: linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(245, 158, 11, 0.08) 100%); border-left: 4px solid var(--danger-light, #ef4444); border-radius: var(--radius-sm); font-size: 0.9rem; line-height: 1.65; color: var(--text-primary); box-shadow: var(--shadow-sm);">
        <div style="display: flex; align-items: flex-start; gap: 0.55rem;">
          <i class="fa-solid fa-circle-exclamation" style="color: var(--danger-light, #ef4444); margin-top: 0.2rem; flex-shrink: 0; font-size: 1rem;"></i>
          <div>${content}</div>
        </div>
      </div>`;
    }

    let lineHtml = escapeHtml(trimmed);
    lineHtml = lineHtml.replace(/\*\*(.*?)\*\*/g, '<strong style="font-weight: 800;">$1</strong>');
    return `<div style="margin-bottom: 0.35rem;">${lineHtml}</div>`;
  }).join('');
}

function highlightSampleLetterHtml(rawText) {
  if (!rawText) return '';
  let html = escapeHtml(rawText);
  if (!AppState.sampleHighlightEnabled) {
    html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong class="hl-key-idea"><em>$1</em></strong>');
    html = html.replace(/\*\*_(.*?)_\*\*/g, '<strong class="hl-key-idea"><em>$1</em></strong>');
    return html;
  }

  // 1. Highlight Openings & Closings (Single combined regex)
  const openingClosingRegex = /(Thanks for your letter\.\s*How have you been lately\?\s*After thinking about your situation,\s*I have a few suggestions that might help\.|Thanks for writing to me\.|How have you been lately\?\s*I[’']m writing to ask a few questions about[^.\n]*\.|How have you been lately\?\s*I[’']m writing[^.\n]*\.|How have you been lately\?|After reading your letter,\s*I have a few suggestions that you may want to consider[^.\n]*\.|Thanks for your letter\.[^.\n]*\.|I am writing to request some information[^.\n]*\.|I am writing to formally request[^.\n]*\.|I am writing to ask for some information[^.\n]*\.|I am writing to express my (?:strong )?dissatisfaction with [^.\n]+?\.\s*I recently [^.\n]+?and (?:I )?was (?:quite )?disappointed with the experience\.|I am writing to express my (?:strong )?dissatisfaction with [^.\n]+?\.\s*I recently [^.\n]+?and was not satisfied with [^.\n]+?\.|I am writing to express my strong dissatisfaction[^.\n]*\.|I am writing to express my dissatisfaction[^.\n]*\.|I am writing to provide feedback[^.\n]*\.|I am writing to apply for the position of[^.\n]*\.|I am writing to apologize for[^.\n]*\.|Please accept this letter as my sincere apology[^.\n]*\.|In your letter,\s*you asked me about[^.\n]*\.|I hope you find my suggestions helpful\.\s*Let me know how things go\.|I hope you find my suggestions helpful\.|Let me know how things go\.|Write back soon\.|I[’']d really appreciate your help with this\.\s*Write back soon\.|I[’']d really appreciate your help with this\.|Thank you for your time\.\s*I look forward to hearing from you\.|Thank you for your time and assistance[^.\n]*\.|Thank you for your patience and kind understanding[^.\n]*\.|Thank you for your kind understanding and continued patronage[^.\n]*\.|Thank you for your time and understanding[^.\n]*\.|Thank you for your time[^.\n]*\.|I hope that (?:this issue|these issues) will be addressed promptly\.\s*I look forward to (?:hearing from you soon|receiving your reply soon)\.|I hope that (?:this issue|these issues) will be addressed promptly\.|I look forward to hearing from you soon[^.\n]*\.|I look forward to hearing from you[^.\n]*\.|I look forward to receiving your reply soon[^.\n]*\.|I look forward to your reply[^.\n]*\.|I look forward to welcoming you back to our hotel[^.\n]*\.|I look forward to the possibility of discussing my application[^.\n]*\.|I would be grateful if you could consider my application[^.\n]*\.|I hope my feedback will be useful[^.\n]*\.|I would like to (?:sincerely )?apologize once again for the inconvenience[^.\n]*\.|I’m really sorry once again\.|I truly appreciate your (?:patience and kind )?understanding[^.\n]*\.|Please feel free to contact me if you have any further questions\.)/gi;
  html = html.replace(openingClosingRegex, match => `<span class="hl-mark-opening" title="Mở thư / Kết thư chuẩn B2">${match}</span>`);

  // 2. Highlight Connectors (Single combined regex, longest first)
  const connectorRegex = /\b(First of all,\s*when it comes to|Last but not least,|To begin with,\s*the main problem was that|To begin with,\s*the main problem was the|To begin with,\s*the main problem was|To begin with,|The main problem was that|Another concern was that|A further issue was that|What made the situation worse was that|What made matters worse was that|To make matters worse,\s*another concern was that|To make matters worse,\s*another concern was the|To make matters worse,\s*another concern was|To make matters worse,|Regarding the positive aspects,|First of all,|On top of that,|Besides that,|In addition,|Furthermore,|Moreover,|Overall,|However,|Therefore,|Secondly,|Second,|Thirdly,|Next,|Finally,|Regarding\s+[A-Z]|As for\b|In terms of\b)/g;
  html = html.replace(connectorRegex, match => `<span class="hl-mark-connector" title="Từ nối chuyển ý (Connector)">${match}</span>`);

  // 3. Highlight B2 Power Structures (Single combined regex, longest first)
  const structureRegex = /\b(I would appreciate it if you could provide more information about|I would appreciate it if you could take immediate action to address these problems|I would appreciate it if you could take immediate action|I would appreciate it if you could|Could you provide me with more information about|Can you give me more information about|Can you let me know more about|Could you give me more details about|I[’']d like to get more details about|I[’']d like to learn more about|I would also like to know more about|I would like to know more about|I am also wondering about|I[’']m also wondering about|I was particularly disappointed with this experience because I expected a better level of quality and service|I was particularly disappointed with this experience because I expected|I was particularly disappointed with|I strongly recommend that the management|I strongly recommend that you|I strongly recommend|I believe that these steps should be taken to|I believe that steps should be taken to|I would like to suggest that you|I would like to suggest that|it would be better if you could|It would be a good idea to|If I were you,\s*I would|Can you tell me more about|You could consider|I would recommend|I think you should|It might be worth|You may want to|You could try|Don[’']t forget to|Remember to|Could you please provide|Could you tell me|To make up for this mistake,\s*I would like to|To make up for my mistake,\s*I would like to|To make up for this,\s*I would like to|let me make it up to you by|First of all,\s*I would like to explain why this happened|Unfortunately,\s*I was unable to attend|I was unable to attend|I[’']ll make sure this does not happen again|I will ensure that this (?:issue )?will not (?:happen again|recur)|I believe I would be an ideal candidate for|I believe I would be a suitable candidate for|I was particularly impressed with|I suggest that you)\b/gi;
  html = html.replace(structureRegex, match => `<span class="hl-mark-structure" title="Cấu trúc câu ăn điểm B2">${match}</span>`);

  // 4. Markdown Bold + Italic for Key Ideas (Ý chính theo yêu cầu đề)
  html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong class="hl-key-idea"><em>$1</em></strong>');
  html = html.replace(/\*\*_(.*?)_\*\*/g, '<strong class="hl-key-idea"><em>$1</em></strong>');

  return html;
}

function formatSampleLetterEnHtml(rawText) {
  if (!rawText) return '';
  const paras = rawText.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
  return paras.map((p, index) => {
    const highlighted = highlightSampleLetterHtml(p);
    if (index === 0 && /^Dear\b/i.test(p)) {
      return `<p class="sample-p sample-p-salutation">${highlighted}</p>`;
    }
    if (index === paras.length - 1 && /^(Best wishes|Warm regards|Yours sincerely|Yours faithfully|All the best|Regards|Sincerely yours)\b/i.test(p)) {
      return `<p class="sample-p sample-p-signoff">${highlighted}</p>`;
    }
    return `<p class="sample-p">${highlighted}</p>`;
  }).join('');
}

function formatSampleLetterViHtml(rawText) {
  if (!rawText) return '';
  const paras = rawText.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
  return paras.map((p, index) => {
    let escaped = escapeHtml(p);
    escaped = escaped.replace(/\*\*\*(.*?)\*\*\*/g, '<strong class="hl-key-idea"><em>$1</em></strong>');
    escaped = escaped.replace(/\*\*_(.*?)_\*\*/g, '<strong class="hl-key-idea"><em>$1</em></strong>');
    if (index === 0 && /^(Kính gửi|Gửi|Thân gửi|[^\n,]+ thân mến)\b/i.test(p)) {
      return `<p class="sample-trans-p sample-trans-salutation">${escaped}</p>`;
    }
    if (index === paras.length - 1 && /^(Trân trọng|Kính thư|Thân ái|Thân mến|Chúc bạn|Chúc mọi điều|Chúc những điều)\b/i.test(p)) {
      return `<p class="sample-trans-p sample-trans-signoff">${escaped}</p>`;
    }
    return `<p class="sample-trans-p">${escaped}</p>`;
  }).join('');
}

function toggleSampleHighlightMode() {
  AppState.sampleHighlightEnabled = !AppState.sampleHighlightEnabled;
  const btn = document.getElementById('btnToggleSampleHighlight');
  const legend = document.getElementById('sampleHighlightLegend');
  if (btn) {
    btn.innerHTML = AppState.sampleHighlightEnabled
      ? '<i class="fa-solid fa-highlighter"></i> Đang bật Highlight'
      : '<i class="fa-solid fa-highlighter"></i> Bật Highlight cấu trúc';
    btn.style.opacity = AppState.sampleHighlightEnabled ? '1' : '0.65';
  }
  if (legend) {
    legend.style.display = AppState.sampleHighlightEnabled ? 'flex' : 'none';
  }
  if (AppState.activeSampleTopicId) {
    renderSampleLetterForSelectedTopic(AppState.activeSampleTopicId);
  }
}

function renderCategorySamplesTab() {
  const catKey = AppState.activeCategory;
  const catData = (typeof LETTERS_DATA !== 'undefined') ? LETTERS_DATA.find(c => c.category_id === catKey) : null;
  const topics = (catData && catData.topics) ? catData.topics : [];

  if (topics.length === 0) return;

  if (!AppState.activeSampleTopicId || !topics.some(t => t.id === AppState.activeSampleTopicId)) {
    AppState.activeSampleTopicId = topics[0].id;
  }

  populateTopicSelectors(topics);
  renderSampleLetterForSelectedTopic(AppState.activeSampleTopicId);
}

function renderSampleLetterForSelectedTopic(topicId) {
  AppState.activeSampleTopicId = topicId;
  const select = document.getElementById('sampleTopicSelect');
  if (select && select.value !== topicId) select.value = topicId;

  const topic = findTopicById(topicId);
  if (!topic) return;

  // Prompt En & Vi with highlighted bullet points
  const promptEnEl = document.getElementById('samplePromptTextEn');
  const promptViEl = document.getElementById('samplePromptTextVi');
  if (promptEnEl) promptEnEl.innerHTML = formatExamPromptHtml(topic.prompt || topic.context || '');
  if (promptViEl) {
    promptViEl.textContent = topic.title_vi || (topic.details?.analysis?.purpose ? `Mục đích: ${topic.details.analysis.purpose}` : '');
  }

  // Model Letter B2 with Color Highlighting
  const sampleData = topic.details?.sample_b2 || topic.sample_b2;
  const bodyEnEl = document.getElementById('sampleLetterEnBody');
  const bodyViEl = document.getElementById('sampleLetterViBody');
  const wordBadge = document.getElementById('sampleWordCountBadge');
  const vocabList = document.getElementById('sampleVocabChipsList');

  const letterTextEn = sampleData?.letter_en || sampleData?.text || '';
  const letterTextVi = sampleData?.letter_vi || sampleData?.translation || '';
  const wordsCount = sampleData?.word_count || (letterTextEn ? letterTextEn.replace(/[*_]/g, '').split(/\s+/).filter(Boolean).length : 0);

  if (bodyEnEl) bodyEnEl.innerHTML = formatSampleLetterEnHtml(letterTextEn);
  if (bodyViEl) bodyViEl.innerHTML = formatSampleLetterViHtml(letterTextVi);
  if (wordBadge) wordBadge.innerHTML = `<i class="fa-solid fa-check-double"></i> ${wordsCount} từ (Đạt chuẩn B2)`;

  // Render Vocab Chips
  if (vocabList) {
    const vocab = topic.details?.vocab || [];
    if (vocab.length > 0) {
      vocabList.innerHTML = vocab.slice(0, 12).map(v => `
        <span class="sample-vocab-chip">
          <i class="fa-solid fa-star" style="color: var(--amber-light); font-size: 0.72rem;"></i>
          <strong>${escapeHtml(v.en)}</strong> <em style="opacity: 0.85;">(${escapeHtml(v.vi || '')})</em>
        </span>
      `).join('');
    } else {
      vocabList.innerHTML = '<span style="color: var(--text-muted); font-size: 0.85rem;">Từ vựng chuẩn B2 đã được tích hợp trực tiếp trong bài mẫu.</span>';
    }
  }
}

function toggleSampleTranslationMode() {
  AppState.sampleTranslationVisible = !AppState.sampleTranslationVisible;
  const viContainer = document.getElementById('sampleLetterViContainer');
  const promptVi = document.getElementById('samplePromptTextVi');
  const btn = document.getElementById('btnToggleSampleTrans');

  if (viContainer) viContainer.style.display = AppState.sampleTranslationVisible ? 'block' : 'none';
  if (promptVi) promptVi.style.display = AppState.sampleTranslationVisible ? 'block' : 'none';
  if (btn) {
    btn.innerHTML = AppState.sampleTranslationVisible ? 
      '<i class="fa-solid fa-eye-slash"></i> Ẩn dịch tiếng Việt' : 
      '<i class="fa-solid fa-language"></i> Hiện dịch tiếng Việt';
  }
}

function jumpToPracticeFromSample() {
  AppState.activePracticeTopicId = AppState.activeSampleTopicId;
  switchWorkflowTab('practice');
}

// --------------------------------------------------------------------------
// TAB 4: THỰC HÀNH VIẾT (PRACTICE LAB & QUICK INSERT BAR)
// --------------------------------------------------------------------------
function insertPhraseIntoEditor(phrase) {
  // Quick insert disabled as per requirements
}

function renderQuickInsertBar() {
  const bar = document.getElementById('practiceQuickInsertBar');
  if (bar) bar.innerHTML = '';
}

function renderCategoryPracticeTab() {
  const catKey = AppState.activeCategory;
  const catData = (typeof LETTERS_DATA !== 'undefined') ? LETTERS_DATA.find(c => c.category_id === catKey) : null;
  const topics = (catData && catData.topics) ? catData.topics : [];

  if (topics.length > 0) {
    if (!AppState.activePracticeTopicId || !topics.some(t => t.id === AppState.activePracticeTopicId)) {
      AppState.activePracticeTopicId = topics[0].id;
    }
  }

  // Populate and sync selectors strictly for this category
  populateTopicSelectors(topics);

  renderQuickInsertBar();
  onPracticeTopicChange(AppState.activePracticeTopicId);
}

function onPracticeTopicChange(topicId) {
  // Tự động lưu tiến độ của đề hiện tại trước khi chuyển sang đề mới
  if (AppState.activePracticeTopicId && AppState.activePracticeTopicId !== topicId) {
    if (typeof executeAutoSavePracticeDraft === 'function') {
      executeAutoSavePracticeDraft();
    }
  }

  AppState.activePracticeTopicId = topicId;
  const editorGrid = document.getElementById('practiceEditorGrid');
  const resultContainer = document.getElementById('practiceCompletionResultContainer');
  if (editorGrid) editorGrid.style.display = '';
  if (resultContainer) resultContainer.style.display = 'none';
  const select = document.getElementById('practiceTopicSelect');
  if (select && select.value !== topicId) select.value = topicId;

  // Sync active state in Topic Quick Switch Pills
  document.querySelectorAll('.topic-quick-pill').forEach(pill => {
    pill.classList.toggle('active', pill.getAttribute('onclick')?.includes(topicId));
  });

  const topic = findTopicById(topicId);
  if (!topic) return;

  // Prompt display with highlighted bullets
  const promptEnEl = document.getElementById('practicePromptEn');
  const promptViEl = document.getElementById('practicePromptVi');
  if (promptEnEl) promptEnEl.innerHTML = formatExamPromptHtml(topic.prompt || topic.context || '');
  if (promptViEl) promptViEl.textContent = topic.title_vi || (topic.details?.analysis?.purpose || '');

  // Checkpoints & 4-Step Analysis
  const extractionsList = document.getElementById('practiceTaskExtractionsList');
  if (extractionsList) {
    const analysis = topic.details?.analysis;
    let html = '';
    if (analysis) {
      html += `
        <div style="background: linear-gradient(145deg, rgba(99,102,241,0.14), var(--bg-inner)); border: 1px solid var(--violet-border); border-radius: var(--radius-md); padding: 0.8rem 1rem; margin-bottom: 0.75rem; font-size: 0.83rem; box-shadow: var(--shadow-sm);">
          <strong style="color: var(--violet-light); display: block; margin-bottom: 0.35rem;"><i class="fa-solid fa-compass"></i> 4 BƯỚC PHÂN TÍCH ĐỀ (BAND B2):</strong>
          <div style="display: flex; flex-direction: column; gap: 0.3rem; color: var(--text-secondary);">
            <div><span class="hl-pill hl-cyan">1. Người nhận</span> <strong style="color: var(--text-primary); margin-left: 0.3rem;">${escapeHtml(analysis.recipient || 'Bạn bè/Người quen')}</strong></div>
            <div><span class="hl-pill hl-amber">2. Mục đích</span> <span style="color: var(--text-primary); margin-left: 0.3rem;">${escapeHtml(analysis.purpose || '')}</span></div>
            <div><span class="hl-pill hl-emerald">3. Văn phong</span> <strong style="color: var(--emerald-light); margin-left: 0.3rem;">${escapeHtml(analysis.letter_type || 'Informal')}</strong></div>
          </div>
        </div>
      `;
    }
    const extractions = topic.details?.task_extractions || [];
    const badgeThemes = ['hl-cyan', 'hl-amber', 'hl-emerald', 'hl-rose'];
    if (extractions.length > 0) {
      html += extractions.map((ex, idx) => `
        <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-left: 4px solid var(--accent-primary); border-radius: var(--radius-md); padding: 0.7rem 0.9rem; font-size: 0.85rem; margin-bottom: 0.5rem; box-shadow: var(--shadow-sm);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem;">
            <span class="hl-pill ${badgeThemes[idx % 4]}"><i class="fa-solid ${ex.icon || 'fa-check'}"></i> ${escapeHtml(ex.task_title || `Yêu cầu ${idx + 1}`)}</span>
          </div>
          <div style="color: var(--text-primary); font-weight: 600; margin-top: 0.2rem;">${escapeHtml(ex.task_goal || ex.prompt_requirement || '')}</div>
        </div>
      `).join('');
    } else {
      html += '<div style="color: var(--text-muted); font-size: 0.85rem;">Trả lời đầy đủ các gợi ý trong đề bài.</div>';
    }
    extractionsList.innerHTML = html;
  }

  // Ideas & Vocab
  renderPracticeIdeas(topic);
  renderPracticeVocab(topic);
  renderQuickInsertBar();

  // Restore draft if any
  const textarea = document.getElementById('practiceWritingTextarea');
  if (textarea) {
    const draftKey = `draft_${topicId}`;
    if (AppState.drafts[draftKey]) {
      textarea.value = AppState.drafts[draftKey].content || '';
    } else {
      textarea.value = '';
    }
    onPracticeTextareaInput();
  }
}

function renderPracticeIdeas(topic) {
  const container = document.getElementById('practiceIdeasContainer');
  if (!container) return;
  const ideas = topic?.details?.suggested_ideas || [];
  const catKey = AppState.activeCategory;

  if (ideas.length === 0) {
    container.innerHTML = '<div style="color: var(--text-muted); font-size: 0.85rem; padding: 0.85rem; text-align: center;">Đang cập nhật gợi ý riêng cho đề này.</div>';
    return;
  }

  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; padding: 0.6rem 0.85rem; background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.22); border-radius: var(--radius-sm);">
      <div style="font-size: 0.8rem; font-weight: 700; color: var(--amber-light); display: flex; align-items: center; gap: 0.35rem;">
        <i class="fa-solid fa-lightbulb"></i> Gợi ý ý tưởng B2 cho đề này:
      </div>
      <button type="button" class="btn btn-secondary btn-sm" onclick="openPracticeIdeasModal()" style="font-size: 0.72rem; padding: 0.22rem 0.6rem; color: var(--cyan-light); border-color: var(--cyan-border); font-weight: 700;" title="Mở bảng gợi ý chi tiết đề này">
        <i class="fa-solid fa-expand"></i> Phóng to
      </button>
    </div>
    ${buildIdeasCardsHtml(ideas, true, catKey)}
  `;
}

function renderPracticeVocab(topic) {
  const container = document.getElementById('practiceVocabContainer');
  if (!container) return;
  const vocab = topic.details?.vocab || [];
  if (vocab.length === 0) {
    container.innerHTML = '<div style="color: var(--text-muted); font-size: 0.85rem;">Đang cập nhật từ vựng.</div>';
    return;
  }

  container.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 0.4rem;">
      ${vocab.map(v => `
        <div style="display: flex; justify-content: space-between; font-size: 0.82rem; background: var(--bg-inner); padding: 0.35rem 0.6rem; border-radius: 4px; border: 1px solid var(--panel-border);">
          <strong style="color: var(--text-primary);">${escapeHtml(v.en)}</strong>
          <span style="color: var(--text-muted);">${escapeHtml(v.vi || '')}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function switchAssistTab(tabName) {
  AppState.currentAssistTab = tabName;
  ['checkpoints', 'ideas', 'vocab'].forEach(t => {
    const btn = document.getElementById(`btnAssist${capitalize(t)}`);
    const content = document.getElementById(`assist${capitalize(t)}Content`);
    if (btn) btn.classList.toggle('active', t === tabName);
    if (content) content.style.display = (t === tabName) ? 'block' : 'none';
  });
}

function togglePracticePromptTranslation() {
  AppState.practicePromptTranslationVisible = !AppState.practicePromptTranslationVisible;
  const viEl = document.getElementById('practicePromptVi');
  const label = document.getElementById('btnPromptTransLabel');
  if (viEl) viEl.style.display = AppState.practicePromptTranslationVisible ? 'block' : 'none';
  if (label) label.textContent = AppState.practicePromptTranslationVisible ? 'Ẩn dịch tiếng Việt' : 'Xem dịch đề tiếng Việt';
}

function onPracticeTextareaInput() {
  const textarea = document.getElementById('practiceWritingTextarea');
  const countEl = document.getElementById('practiceWordCountNum');
  const barEl = document.getElementById('practiceWordProgressBar');
  const badgeEl = document.getElementById('practiceWordCountBadge');
  if (!textarea) return;

  const words = textarea.value.trim().split(/\s+/).filter(Boolean);
  const count = words.length;

  if (countEl) {
    countEl.textContent = count;
    countEl.className = 'word-count-value ' + (count < 100 ? 'word-count-danger' : (count < 120 ? 'word-count-warning' : 'word-count-success'));
  }

  if (badgeEl) {
    if (count < 100) {
      badgeEl.className = 'word-count-status-pill badge-danger';
      badgeEl.textContent = 'Chưa đủ từ';
    } else if (count < 120) {
      badgeEl.className = 'word-count-status-pill badge-warning';
      badgeEl.textContent = 'Gần đạt';
    } else {
      badgeEl.className = 'word-count-status-pill badge-success';
      badgeEl.textContent = 'Đạt chuẩn B2';
    }
  }

  if (barEl) {
    const percent = Math.min(100, Math.round((count / 140) * 100));
    barEl.style.width = `${percent}%`;
    barEl.style.background = count < 100 ? 'var(--danger)' : (count < 120 ? 'var(--warning)' : 'var(--success)');
  }

  // Tự động sao lưu tiến độ bài viết theo thời gian thực (Debounced Auto-Save)
  triggerAutoSavePracticeDraft();
}

// --------------------------------------------------------------------------
// REAL-TIME AUTO-SAVE (TỰ ĐỘNG LƯU TIẾN ĐỘ BÀI VIẾT)
// --------------------------------------------------------------------------
function triggerAutoSavePracticeDraft() {
  const statusEl = document.getElementById('practiceAutoSaveStatus');
  if (statusEl) {
    statusEl.className = 'editor-autosave-indicator saving';
    statusEl.innerHTML = '<i class="fa-solid fa-pencil fa-fade" style="color: var(--amber-light);"></i> <span>Đang lưu...</span>';
  }

  if (AppState.autoSaveTimer) clearTimeout(AppState.autoSaveTimer);
  AppState.autoSaveTimer = setTimeout(() => {
    executeAutoSavePracticeDraft();
  }, 700);
}

function executeAutoSavePracticeDraft() {
  const topicId = AppState.activePracticeTopicId;
  const textarea = document.getElementById('practiceWritingTextarea');
  const statusEl = document.getElementById('practiceAutoSaveStatus');
  if (!textarea || !topicId) return;

  const content = textarea.value;
  const topic = findTopicById(topicId);
  const draftKey = `draft_${topicId}`;

  if (content.trim()) {
    AppState.drafts[draftKey] = {
      topicId,
      categoryKey: AppState.activeCategory,
      topicTitle: topic?.title_vi || topic?.title_en || 'Bài viết',
      content,
      wordCount: content.trim().split(/\s+/).filter(Boolean).length,
      savedAt: new Date().toISOString()
    };
    try {
      localStorage.setItem('vstep_b2_task1_drafts', JSON.stringify(AppState.drafts));
    } catch (e) {}

    if (statusEl) {
      statusEl.className = 'editor-autosave-indicator saved';
      const now = new Date();
      const timeStr = now.toLocaleTimeString('vi-VN', { hour12: false, hour: '2-digit', minute: '2-digit' });
      statusEl.innerHTML = `<i class="fa-solid fa-cloud-arrow-up" style="color: var(--emerald-light);"></i> <span>Đã tự động lưu (${timeStr})</span>`;
    }
  } else {
    if (statusEl) {
      statusEl.className = 'editor-autosave-indicator';
      statusEl.innerHTML = '<i class="fa-solid fa-cloud" style="color: var(--text-muted);"></i> <span>Tự động lưu: Sẵn sàng</span>';
    }
  }
}

// Lưu tiến độ khi học viên đóng hoặc reload trình duyệt
window.addEventListener('beforeunload', () => {
  if (typeof executeAutoSavePracticeDraft === 'function') {
    executeAutoSavePracticeDraft();
  }
});

// --------------------------------------------------------------------------
// TIMER UTILITIES (20 MINS COUNTDOWN)
// --------------------------------------------------------------------------
function togglePracticeTimer() {
  if (AppState.timerRunning) {
    pausePracticeTimer();
  } else {
    startPracticeTimer();
  }
}

function startPracticeTimer() {
  AppState.timerRunning = true;
  const toggleBtn = document.getElementById('practiceTimerToggleBtn');
  if (toggleBtn) toggleBtn.innerHTML = '<i class="fa-solid fa-pause"></i> Tạm dừng';

  if (AppState.timerInterval) clearInterval(AppState.timerInterval);
  AppState.timerInterval = setInterval(() => {
    if (AppState.timerRemaining > 0) {
      AppState.timerRemaining--;
      updateTimerDisplayUI();
    } else {
      pausePracticeTimer();
      playSuccessChime();
      showToast('Hết thời gian 20 phút làm bài thi!', 'warning');
    }
  }, 1000);
}

function pausePracticeTimer() {
  AppState.timerRunning = false;
  const toggleBtn = document.getElementById('practiceTimerToggleBtn');
  if (toggleBtn) toggleBtn.innerHTML = '<i class="fa-solid fa-play"></i> Bắt đầu';
  if (AppState.timerInterval) clearInterval(AppState.timerInterval);
}

function resetPracticeTimer() {
  pausePracticeTimer();
  AppState.timerRemaining = AppState.timerTotalSeconds;
  updateTimerDisplayUI();
}

function updateTimerDisplayUI() {
  const display = document.getElementById('practiceTimerDisplay');
  if (!display) return;
  const mins = Math.floor(AppState.timerRemaining / 60);
  const secs = AppState.timerRemaining % 60;
  display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  
  if (AppState.timerRemaining <= 180) {
    display.style.color = 'var(--danger)';
  } else {
    display.style.color = 'var(--text-primary)';
  }
}

// --------------------------------------------------------------------------
// DRAFT & SUBMISSION ACTIONS
// --------------------------------------------------------------------------
function saveCurrentDraftAction() {
  const topicId = AppState.activePracticeTopicId;
  const textarea = document.getElementById('practiceWritingTextarea');
  if (!textarea || !topicId) return;

  const content = textarea.value.trim();
  if (!content) {
    showToast('Chưa có nội dung để lưu nháp!', 'warning');
    return;
  }

  const topic = findTopicById(topicId);
  const draftKey = `draft_${topicId}`;
  AppState.drafts[draftKey] = {
    topicId,
    categoryKey: AppState.activeCategory,
    topicTitle: topic?.title_vi || topic?.title_en || 'Bài viết',
    content,
    savedAt: new Date().toISOString()
  };

  try {
    localStorage.setItem('vstep_b2_task1_drafts', JSON.stringify(AppState.drafts));
    playPopSound();
    showToast('Đã lưu bản nháp thành công!', 'success');
  } catch (e) {
    console.error(e);
  }
}

function clearPracticeTextareaAction() {
  const textarea = document.getElementById('practiceWritingTextarea');
  if (!textarea) return;
  if (confirm('Bạn có chắc chắn muốn xóa toàn bộ nội dung trong ô viết bài?')) {
    textarea.value = '';
    onPracticeTextareaInput();
  }
}

function submitAndEvaluatePracticeLetter() {
  const topicId = AppState.activePracticeTopicId;
  const textarea = document.getElementById('practiceWritingTextarea');
  if (!textarea || !topicId) return;

  const text = textarea.value.trim();
  const words = text.split(/\s+/).filter(Boolean);
  const topic = findTopicById(topicId);

  // Kiểm tra nếu bài viết sao chép lại đề bài
  const copyCheck = detectPromptCopying(text, topic);
  if (copyCheck.isPromptCopy) {
    alert(
      '🚫 PHÁT HIỆN SAO CHÉP ĐỀ BÀI (0.0 ĐIỂM)!\n\n' +
      'Nội dung bạn nhập vào là câu hỏi / hướng dẫn của đề thi chứ không phải bài viết thư của thí sinh.\n\n' +
      'Theo quy chế thi VSTEP Task 01, bài làm sao chép đề bài sẽ bị tính 0 ĐIỂM (không công nhận kết quả).\n\n' +
      'Vui lòng tự viết một bức thư hoàn chỉnh bao gồm:\n' +
      '• Lời chào mở đầu (Dear...)\n' +
      '• Đoạn mở thư nêu mục đích viết thư\n' +
      '• Các đoạn thân bài trả lời các yêu cầu của đề bài\n' +
      '• Lời kết thư (Yours sincerely / Best regards...)\n' +
      'trước khi nhấn Nộp bài!'
    );
    return;
  }

  if (words.length < 30) {
    alert('Bài viết quá ngắn (dưới 30 từ)! Vui lòng viết ít nhất 120 từ theo tiêu chuẩn bài thi VSTEP Task 01 để hệ thống đánh giá chính xác.');
    return;
  }
  const timeSpentSecs = AppState.timerTotalSeconds - AppState.timerRemaining;

  // Run official VSTEP Evaluation (including Sentence-by-Sentence Evaluation)
  const evalResult = evaluateVstepLetter(text, topic);

  const isRevision = !!AppState.activeRevision;
  const revNum = isRevision ? ((AppState.activeRevision.revisionCount || 1) + 1) : 1;
  const rawTitle = topic?.title_vi || topic?.title_en || 'Bài tập viết thư';

  const submission = {
    id: `sub_${Date.now()}`,
    topicId,
    categoryKey: AppState.activeCategory,
    topicTitle: isRevision ? `${rawTitle} (Bản sửa lần ${revNum})` : rawTitle,
    studentName: AppState.student?.name || 'Học viên VSTEP B2',
    className: AppState.student?.className || 'CB206 - Mục tiêu B2',
    content: text,
    wordCount: words.length,
    timeSpentSecs: Math.max(timeSpentSecs, 60),
    submittedAt: new Date().toISOString(),
    evaluation: evalResult,
    isRevision,
    revisionNumber: revNum
  };

  // Reset revision state after successful submission
  AppState.activeRevision = null;
  const revBanner = document.getElementById('practiceRevisionBanner');
  if (revBanner) revBanner.style.display = 'none';

  // Add to submissions
  AppState.submissions.unshift(submission);
  try {
    localStorage.setItem('vstep_b2_task1_submissions', JSON.stringify(AppState.submissions));
    // Clear draft for this topic
    delete AppState.drafts[`draft_${topicId}`];
    localStorage.setItem('vstep_b2_task1_drafts', JSON.stringify(AppState.drafts));
  } catch (e) {
    console.error(e);
  }

  // Sound & notification & confetti
  const isFailed = (evalResult.overallBand < 4.0 || evalResult.isPromptCopy);
  if (isFailed) {
    showToast('⚠️ Bài viết chưa đạt yêu cầu tối thiểu (dưới 4.0 điểm). Hãy xem kỹ nhận xét và viết lại nhé!', 'warning');
  } else {
    playFanfare();
    shootConfetti();
    showToast(isRevision ? `🎉 Đã hoàn tất chấm điểm Bản sửa lần ${revNum}!` : '🎉 Đã nộp bài và hoàn tất chấm điểm VSTEP B2!', 'success');
  }

  // Render evaluation report directly in Practice Room
  const resultContainer = document.getElementById('practiceCompletionResultContainer');
  const editorGrid = document.getElementById('practiceEditorGrid');
  if (resultContainer && editorGrid) {
    const bannerTitle = evalResult.isPromptCopy
      ? '⚠️ BÀI VIẾT SAO CHÉP ĐỀ BÀI (0.0 ĐIỂM) - KHÔNG ĐƯỢC CÔNG NHẬN!'
      : (evalResult.overallBand < 4.0
        ? '⚠️ BÀI VIẾT CHƯA ĐẠT YÊU CẦU TỐI THIỂU - CẦN VIẾT LẠI!'
        : (isRevision ? `🎉 Chúc mừng bạn đã hoàn thành Bản sửa lần ${revNum}!` : 'Chúc mừng bạn đã hoàn thành bài viết!'));
    const bannerSub = evalResult.isPromptCopy
      ? 'Hệ thống phát hiện bài làm sao chép lại đề thi. Theo quy chế VSTEP, phần sao chép đề không được tính điểm. Vui lòng tự viết lại bức thư.'
      : 'Hệ thống đã hoàn tất chấm điểm 4 tiêu chí VSTEP Task 01, nhận xét chi tiết từng câu và xuất phiếu đánh giá.';
    const bannerIcon = isFailed ? '<i class="fa-solid fa-triangle-exclamation" style="color: var(--danger);"></i>' : '<i class="fa-solid fa-circle-check"></i>';

    resultContainer.innerHTML = `
      <div class="eval-completion-banner fade-in">
        <div class="eval-completion-banner-left">
          <div class="eval-completion-banner-icon">
            ${bannerIcon}
          </div>
          <div>
            <div class="eval-completion-banner-title">
              ${bannerTitle}
            </div>
            <div class="eval-completion-banner-sub">
              ${bannerSub}
            </div>
          </div>
        </div>
        <div style="display: flex; gap: 0.65rem; flex-wrap: wrap; align-items: center;">
          <button class="btn btn-export-word" onclick="exportSubmissionToWord('${submission.id}')" title="Tải phiếu chấm điểm và bài sửa về máy dạng tệp Microsoft Word (.docx)">
            <i class="fa-solid fa-file-word"></i> Xuất file Word (.docx)
          </button>
          <button class="btn btn-secondary" onclick="window.print()" style="font-weight: 700; border-radius: 50px;" title="In phiếu đánh giá hoặc lưu dưới dạng PDF">
            <i class="fa-solid fa-print"></i> In / Lưu PDF
          </button>
          <button class="btn btn-secondary" onclick="copySubmissionCorrection('${submission.id}')" style="font-weight: 700; border-radius: 50px;" title="Sao chép bài viết và nhận xét sửa bài vào bộ nhớ tạm">
            <i class="fa-solid fa-copy"></i> Chép bài & sửa lỗi
          </button>
          <button class="btn btn-secondary" onclick="editSubmissionAgain('${topicId}')" style="font-weight: 700; border-radius: 50px; color: var(--accent-primary); border-color: var(--accent-primary);" title="Mở lại bài làm để tiếp tục chỉnh sửa">
            <i class="fa-solid fa-pen-to-square"></i> Sửa bài lần nữa
          </button>
        </div>
      </div>
      ${buildSubmissionCardMarkup(submission, true)}
    `;
    editorGrid.style.display = 'none';
    resultContainer.style.display = 'block';
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    // Fallback to switch tab
    switchWorkflowTab('submissions');
  }
}

// --------------------------------------------------------------------------
// CELEBRATION CONFETTI (PHÁO HOA ĂN MỪNG chuẩn B2)
// --------------------------------------------------------------------------
function shootConfetti() {
  if (typeof confetti === 'function') {
    try {
      const duration = 2400;
      const end = Date.now() + duration;
      (function frame() {
        confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff'], zIndex: 99999 });
        confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff'], zIndex: 99999 });
        if (Date.now() < end) requestAnimationFrame(frame);
      }());
    } catch (e) {
      console.warn("Confetti error:", e);
    }
  }
}

// ==========================================================================
// CƠ SỞ DỮ LIỆU CÂU HỎI TRẢ BÀI DÀN Ý CHI TIẾT (CHUẨN VSTEP B2)
// ==========================================================================
const RECITATION_QUESTIONS = {
  "advice": [
    {
      "cue": "Viết lời chào mở đầu thư thân mật: \"Kính gửi [tên của người nhận],\"",
      "target": "Dear [tên của người nhận],"
    },
    {
      "cue": "Viết câu mở thư hỏi thăm và nêu mục đích đưa lời khuyên: \"Cảm ơn vì bức thư của cậu. Dạo này cậu thế nào? Sau khi suy nghĩ về tình huống của cậu, tớ có một vài gợi ý có thể giúp ích được.\"",
      "target": "Thanks for your letter. How have you been lately? After thinking about your situation, I have a few suggestions that might help."
    },
    {
      "cue": "Viết cấu trúc khuyên bảo thân mật: \"Tớ nghĩ cậu nên + Vo.\"",
      "target": "I think you should + Vo."
    },
    {
      "cue": "Viết cấu trúc gợi ý nhẹ nhàng: \"Cậu có thể muốn + Vo.\"",
      "target": "You may want to + Vo."
    },
    {
      "cue": "Viết cấu trúc gợi ý lịch sự: \"Sẽ là một ý kiến hay nếu + Vo.\"",
      "target": "It would be a good idea to + Vo."
    },
    {
      "cue": "Viết cấu trúc khuyên bảo bằng câu điều kiện loại 2: \"Nếu tớ là cậu, tớ sẽ + Vo.\"",
      "target": "If I were you, I would + Vo."
    },
    {
      "cue": "Viết cấu trúc gợi ý thử / cân nhắc: \"Cậu có thể thử / cân nhắc việc + V-ing.\"",
      "target": "You could try + V-ing. / You could consider + V-ing."
    },
    {
      "cue": "Viết cấu trúc nhắc nhở: \"Hãy nhớ + Vo. / Đừng quên + Vo.\"",
      "target": "Remember to + Vo. / Don't forget to + Vo."
    },
    {
      "cue": "Viết cấu trúc khuyên bảo mang tính đánh giá cao: \"Có lẽ rất đáng để + V-ing.\"",
      "target": "It might be worth + V-ing."
    },
    {
      "cue": "Viết cấu trúc đề xuất mạnh mẽ: \"Tớ rất khuyên cậu nên + V-ing.\"",
      "target": "I would recommend + V-ing."
    },
    {
      "cue": "Viết liên từ mở đầu ý khuyên thứ nhất trong thân bài: \"Trước hết, khi bàn về [vấn đề], ...\"",
      "target": "First of all, when it comes to …"
    },
    {
      "cue": "Viết liên từ chuyển sang ý khuyên cuối cùng: \"Cuối cùng nhưng không kém phần quan trọng, ...\"",
      "target": "Last but not least, …"
    },
    {
      "cue": "Viết câu kết thư chúc may mắn và mong tin: \"Tớ hy vọng cậu thấy những gợi ý của tớ hữu ích. Hãy cho tớ biết mọi chuyện diễn ra như thế nào nhé.\"",
      "target": "I hope you find my suggestions helpful. Let me know how things go."
    },
    {
      "cue": "Viết lời chào kết thúc thư thân mật: \"Lời chúc tốt đẹp nhất,\"",
      "target": "Best wishes,"
    }
  ],
  "request": [
    {
      "cue": "Viết lời chào mở đầu thư thân mật gửi cho bạn bè: \"Kính gửi [tên người nhận],\"",
      "target": "Dear [tên người nhận],"
    },
    {
      "cue": "Viết lời chào mở đầu trang trọng khi không biết rõ tên hoặc giới tính người nhận: \"Kính gửi Quý ông/Quý bà,\"",
      "target": "Dear Sir/Madam,"
    },
    {
      "cue": "Viết lời chào mở đầu bán trang trọng khi đã biết họ của người nhận: \"Kính gửi Ông/Bà [họ người nhận],\"",
      "target": "Dear Mr. / Ms. / Mrs. [họ người nhận],"
    },
    {
      "cue": "Viết câu mở thư yêu cầu thân mật: \"Dạo này cậu thế nào? Tớ viết thư để hỏi một vài câu về [thứ cần xin thông tin], vì tớ đang dự định [mục đích].\"",
      "target": "How have you been lately? I’m writing to ask a few questions about [thứ cần xin thông tin], as I’m planning to [mục đích]."
    },
    {
      "cue": "Viết câu mở thư yêu cầu trang trọng và bán trang trọng: \"Tôi viết thư này để yêu cầu một số thông tin về [thứ cần xin thông tin], vì tôi quan tâm đến [mục đích] và muốn tìm hiểu thêm trước khi đưa ra quyết định.\"",
      "target": "I am writing to request some information about [thứ cần xin thông tin], as I am interested in [mục đích] and would like to learn more before making a decision."
    },
    {
      "cue": "Viết cấu trúc xin thông tin thân mật 1: \"Cậu có thể cho tớ thêm thông tin về...?\"",
      "target": "Can you give me more information about …?"
    },
    {
      "cue": "Viết cấu trúc xin thông tin thân mật 2: \"Cậu có thể kể cho tớ thêm về...?\"",
      "target": "Can you tell me more about …?"
    },
    {
      "cue": "Viết cấu trúc bày tỏ mong muốn tìm hiểu thân mật 3: \"Tớ muốn tìm hiểu thêm về...\"",
      "target": "I’d like to learn more about …"
    },
    {
      "cue": "Viết cấu trúc bày tỏ mong muốn biết chi tiết thân mật 4: \"Tớ muốn biết thêm chi tiết về...\"",
      "target": "I’d like to get more details about …"
    },
    {
      "cue": "Viết cấu trúc xin thông tin trang trọng 1: \"Xin ông/bà vui lòng cung cấp thêm thông tin về...?\"",
      "target": "Could you provide me with more information about …?"
    },
    {
      "cue": "Viết cấu trúc xin chi tiết trang trọng 2: \"Xin ông/bà cho tôi biết thêm chi tiết về...?\"",
      "target": "Could you give me more details about …?"
    },
    {
      "cue": "Viết cấu trúc bày tỏ sự cảm kích lịch sự trang trọng 3: \"Tôi sẽ rất cảm kích nếu ông/bà có thể cung cấp thêm thông tin về...\"",
      "target": "I would appreciate it if you could provide more information about …"
    },
    {
      "cue": "Viết cấu trúc bày tỏ sự quan tâm trang trọng 4: \"Tôi cũng rất muốn biết thêm về...\"",
      "target": "I would also like to know more about …"
    },
    {
      "cue": "Viết 4 từ liên kết theo thứ tự trong thư trang trọng: \"Để bắt đầu, ... -> Ngoài ra, ... -> Hơn nữa, ... -> Cuối cùng, ...\"",
      "target": "To begin with, … -> In addition, … -> Furthermore, … -> Finally, …"
    },
    {
      "cue": "Viết câu kết thư yêu cầu thân mật: \"Tớ sẽ thực sự rất cảm kích sự giúp đỡ của cậu về việc này. Hãy viết thư lại sớm nhé.\"",
      "target": "I’d really appreciate your help with this. Write back soon."
    },
    {
      "cue": "Viết câu kết thư yêu cầu trang trọng: \"Cảm ơn ông/bà đã dành thời gian. Tôi rất mong sớm nhận được phản hồi từ ông/bà.\"",
      "target": "Thank you for your time. I look forward to hearing from you."
    },
    {
      "cue": "Viết lời chào kết thúc thư trang trọng (khi lời chào mở đầu là Dear Sir/Madam): \"Trân trọng,\"",
      "target": "Yours faithfully,"
    },
    {
      "cue": "Viết lời chào kết thúc thư bán trang trọng (khi lời chào mở đầu là Dear Mr./Ms. [họ]): \"Trân trọng,\"",
      "target": "Yours sincerely,"
    }
  ],
  "description": [
    {
      "cue": "Viết lời chào mở đầu thư mô tả thân mật (gửi bạn bè): \"Kính gửi [tên của người nhận],\"",
      "target": "Dear [tên của người nhận],"
    },
    {
      "cue": "Viết lời chào mở đầu thư trang trọng khi biết chắc chắn người nhận là nam: \"Kính gửi Ông,\"",
      "target": "Dear Sir,"
    },
    {
      "cue": "Viết lời chào mở đầu thư trang trọng khi biết chắc chắn người nhận là nữ: \"Kính gửi Bà,\"",
      "target": "Dear Madam,"
    },
    {
      "cue": "Viết lời chào mở đầu thư trang trọng khi không biết chắc chắn người nhận là nam hay nữ: \"Kính gửi Quý ông/Quý bà,\"",
      "target": "Dear Sir/Madam,"
    },
    {
      "cue": "Viết lời chào mở đầu thư bán trang trọng khi đã biết họ của người nhận: \"Kính gửi Ông / Bà [họ của người nhận],\"",
      "target": "Dear Mr. / Ms. / Mrs. [họ của người nhận],"
    },
    {
      "cue": "Viết câu mở thư thân mật khi thư yêu cầu cung cấp thông tin: \"Dạo này bạn thế nào? Trong thư bạn có hỏi tôi về [chủ đề cần được cung cấp thông tin], vì vậy tôi rất vui được chia sẻ một vài chi tiết với bạn.\"",
      "target": "How have you been lately? In your letter, you asked me about [chủ đề cần được cung cấp thông tin], so I’d be happy to share some details with you."
    },
    {
      "cue": "Viết câu mở thư trang trọng & bán trang trọng khi thư yêu cầu cung cấp thông tin: \"Tôi hy vọng lá thư này đến khi bạn/quý vị vẫn mạnh khỏe. Trong thư bạn/quý vị có yêu cầu thông tin về [chủ đề cần được cung cấp thông tin], vì vậy tôi viết thư này để cung cấp các chi tiết liên quan.\"",
      "target": "I hope this letter finds you well. In your letter, you requested information about [chủ đề cần được cung cấp thông tin], so I am writing to provide you with the relevant details."
    },
    {
      "cue": "Viết câu mở thư thân mật khi thư yêu cầu mô tả một đối tượng hoặc sự việc: \"Dạo này bạn thế nào? Bạn có nhờ tôi mô tả [đối tượng cần được mô tả], vì vậy để tôi kể cho bạn nghe thêm một chút về điều đó nhé.\"",
      "target": "How have you been lately? You asked me to describe [đối tượng cần được mô tả], so let me tell you a little more about it."
    },
    {
      "cue": "Viết câu mở thư trang trọng & bán trang trọng khi thư yêu cầu mô tả một đối tượng hoặc sự việc: \"Tôi hy vọng lá thư này đến khi bạn/quý vị vẫn mạnh khỏe. Bạn/Quý vị có yêu cầu tôi mô tả [đối tượng cần được mô tả], vì vậy tôi viết thư này để cung cấp bản mô tả chi tiết.\"",
      "target": "I hope this letter finds you well. You asked me to describe [đối tượng cần được mô tả], so I am writing to provide you with a detailed description."
    },
    {
      "cue": "Viết chuỗi 4 từ liên kết đề xuất trong thân bài thư mô tả: \"Để bắt đầu, ... → Ngoài ra, ... → Hơn nữa, ... → Cuối cùng, ...\"",
      "target": "To begin with, … → In addition, … → Furthermore, … → Finally, …"
    },
    {
      "cue": "Viết cụm chuyển ý theo nội dung mô tả trong thân bài: \"Liên quan đến [chủ đề], ...\"",
      "target": "As for ______, …"
    },
    {
      "cue": "Viết cụm chuyển ý theo nội dung mô tả trong thân bài: \"Xét về mặt [chủ đề], ...\"",
      "target": "In terms of ______, …"
    },
    {
      "cue": "Viết cụm chuyển ý theo nội dung mô tả trong thân bài: \"Về phương diện [chủ đề], ...\"",
      "target": "Regarding ______, …"
    },
    {
      "cue": "Viết câu kết thư mô tả thân mật: \"Tôi hy vọng bạn thấy thông tin này hữu ích. Hãy cho tôi biết nếu bạn cần thêm bất kỳ chi tiết nào nhé.\"",
      "target": "I hope you find this information helpful. Let me know if you need any more details."
    },
    {
      "cue": "Viết câu kết thư mô tả trang trọng & bán trang trọng: \"Tôi hy vọng thông tin được cung cấp là hữu ích. Xin vui lòng liên hệ với tôi nếu bạn/quý vị cần thêm bất kỳ chi tiết nào.\"",
      "target": "I hope the information provided is helpful. Please feel free to contact me if you require any further details."
    },
    {
      "cue": "Viết lời chào kết thúc thư thân mật: \"Lời chúc tốt đẹp nhất,\"",
      "target": "Best wishes,"
    },
    {
      "cue": "Viết lời chào kết thúc thư trang trọng (khi mở đầu bằng Dear Sir/Madam): \"Trân trọng,\"",
      "target": "Yours faithfully,"
    },
    {
      "cue": "Viết lời chào kết thúc thư bán trang trọng (khi mở đầu bằng Dear Mr./Ms. [họ]): \"Trân trọng,\"",
      "target": "Yours sincerely,"
    }
  ],
  "complaint": [
    {
      "cue": "Viết lời chào mở đầu trang trọng khi biết chắc chắn người nhận là nam: \"Kính gửi Ông,\"",
      "target": "Dear Sir,"
    },
    {
      "cue": "Viết lời chào mở đầu trang trọng khi biết chắc chắn người nhận là nữ: \"Kính gửi Bà,\"",
      "target": "Dear Madam,"
    },
    {
      "cue": "Viết lời chào mở đầu trang trọng khi không biết chắc chắn người nhận là nam hay nữ: \"Kính gửi Ông/Bà,\"",
      "target": "Dear Sir/Madam,"
    },
    {
      "cue": "Viết lời chào mở đầu bán trang trọng kèm họ người nhận: \"Kính gửi Ông/Bà/Cô [họ của người nhận],\"",
      "target": "Dear Mr. / Ms. / Mrs. [họ của người nhận],"
    },
    {
      "cue": "Viết câu mở thư phàn nàn và nêu sự thất vọng với trải nghiệm: \"Tôi viết thư này để bày tỏ sự không hài lòng với [vấn đề cần phàn nàn]. Gần đây tôi đã [sử dụng/mua/trải nghiệm] [sản phẩm hoặc dịch vụ], và tôi đã thất vọng với trải nghiệm này.\"",
      "target": "I am writing to express my dissatisfaction with [vấn đề cần phàn nàn]. I recently [sử dụng/mua/trải nghiệm] [sản phẩm hoặc dịch vụ], and I was disappointed with the experience."
    },
    {
      "cue": "Viết cấu trúc trình bày vấn đề chính thứ nhất: \"Vấn đề chính là [vấn đề 1].\"",
      "target": "The main problem was that [vấn đề 1]."
    },
    {
      "cue": "Viết cấu trúc trình bày mối bận tâm tiếp theo: \"Một mối bận tâm khác là [vấn đề 2].\"",
      "target": "Another concern was that [vấn đề 2]."
    },
    {
      "cue": "Viết cấu trúc bổ sung một vấn đề thứ ba: \"Một vấn đề nữa là [vấn đề 3].\"",
      "target": "A further issue was that [vấn đề 3]."
    },
    {
      "cue": "Viết liên từ mở đầu chuỗi vấn đề: \"Trước hết, [vấn đề 1].\"",
      "target": "To begin with, [vấn đề 1]."
    },
    {
      "cue": "Viết liên từ bổ sung vấn đề tiếp theo: \"Ngoài ra, [vấn đề 2].\"",
      "target": "In addition, [vấn đề 2]."
    },
    {
      "cue": "Viết cấu trúc nhấn mạnh điều làm cho tình huống tệ hơn: \"Điều làm cho tình huống tệ hơn là [vấn đề 3].\"",
      "target": "What made the situation worse was that [vấn đề 3]."
    },
    {
      "cue": "Viết câu giải thích cảm xúc thất vọng vì kỳ vọng chất lượng và dịch vụ tốt hơn: \"Tôi đặc biệt thất vọng với trải nghiệm này vì tôi đã kỳ vọng mức chất lượng và dịch vụ tốt hơn.\"",
      "target": "I was particularly disappointed with this experience because I expected a better level of quality and service."
    },
    {
      "cue": "Viết cấu trúc đề xuất giải pháp lịch sự: \"Tôi sẽ rất cảm kích nếu quý vị có thể [đề xuất giải pháp cụ thể].\"",
      "target": "I would appreciate it if you could [đề xuất giải pháp cụ thể]."
    },
    {
      "cue": "Viết cấu trúc đưa ra lời gợi ý giải pháp: \"Tôi muốn gợi ý rằng quý vị [đề xuất giải pháp cụ thể].\"",
      "target": "I would like to suggest that you [đề xuất giải pháp cụ thể]."
    },
    {
      "cue": "Viết cấu trúc khuyến nghị mạnh mẽ tới ban quản lý: \"Tôi tha thiết đề xuất rằng ban quản lý [đề xuất giải pháp cụ thể].\"",
      "target": "I strongly recommend that the management [đề xuất giải pháp cụ thể]."
    },
    {
      "cue": "Viết cấu trúc đề xuất biện pháp cần thực hiện: \"Tôi tin rằng các biện pháp cần được thực hiện để [biện pháp cần thực hiện].\"",
      "target": "I believe that steps should be taken to [biện pháp cần thực hiện]."
    },
    {
      "cue": "Viết câu kết thư yêu cầu giải quyết các vấn đề nhanh chóng: \"Tôi hy vọng rằng những vấn đề này sẽ được giải quyết kịp thời.\"",
      "target": "I hope that these issues will be addressed promptly."
    },
    {
      "cue": "Viết câu kết thư mong đợi sớm nhận được hồi âm: \"Tôi rất mong sớm nhận được hồi âm từ quý vị.\"",
      "target": "I look forward to hearing from you soon."
    },
    {
      "cue": "Viết lời chào kết thúc thư thân mật: \"Lời chúc tốt đẹp nhất,\"",
      "target": "Best wishes,"
    },
    {
      "cue": "Viết lời chào kết thúc thư trang trọng: \"Trân trọng,\"",
      "target": "Yours faithfully,"
    },
    {
      "cue": "Viết lời chào kết thúc thư bán trang trọng: \"Trân trọng,\"",
      "target": "Yours sincerely,"
    }
  ],
  "feedback": [
    {
      "cue": "Viết lời chào mở đầu thư phản hồi: \"Kính gửi Ban tổ chức, / Kính gửi Ông/Bà [họ],\"",
      "target": "Dear Organizers, / Dear Mr. / Ms. [họ],"
    },
    {
      "cue": "Viết câu mở thư phản hồi hội nghị và đưa đề xuất: \"Tôi viết thư này để cung cấp phản hồi về hội nghị gần đây và chia sẻ một số gợi ý cho các sự kiện trong tương lai.\"",
      "target": "I am writing to provide my feedback on the recent conference and share some suggestions for future events."
    },
    {
      "cue": "Viết câu dẫn dắt nêu phản hồi, đánh giá: \"Tôi/Tớ viết thư để đưa ra phản hồi, đánh giá về...\"",
      "target": "I am writing to give my feedback on …"
    },
    {
      "cue": "Viết câu khen ngợi điểm nổi bật: \"Tôi đặc biệt ấn tượng bởi...\"",
      "target": "I was particularly impressed by …"
    },
    {
      "cue": "Viết câu đánh giá khía cạnh bổ ích nhất: \"Khía cạnh tôi thấy hữu ích nhất chính là...\"",
      "target": "The aspect I found most rewarding was …"
    },
    {
      "cue": "Viết câu chuyển ý lịch sự sang các điểm cần hoàn thiện: \"Tuy nhiên, vẫn còn một vài khía cạnh có thể cải thiện thêm.\"",
      "target": "However, there are still a few areas that could be improved."
    },
    {
      "cue": "Viết câu chỉ ra một hạn chế cụ thể: \"Một điểm hạn chế là...\"",
      "target": "One drawback was that …"
    },
    {
      "cue": "Viết câu khuyến nghị dành thêm thời gian: \"Tôi khuyến nghị quý vị nên dành thêm thời gian cho...\"",
      "target": "I would recommend that you allocate more time for …"
    },
    {
      "cue": "Viết câu gợi ý cải thiện dịch vụ hoặc tài liệu: \"Sẽ tốt hơn nhiều nếu quý ban có thể cung cấp...\"",
      "target": "It would be better if you could provide …"
    },
    {
      "cue": "Viết câu hy vọng đóng góp có giá trị cho các sự kiện tới: \"Tôi hy vọng những đóng góp này sẽ hữu ích cho các sự kiện sắp tới.\"",
      "target": "I hope these comments will be helpful for your upcoming events."
    },
    {
      "cue": "Viết câu kết thư cảm ơn sự cống hiến của ban tổ chức: \"Tôi hy vọng những nhận xét này sẽ giúp ích cho việc tổ chức các buổi tiếp theo. Cảm ơn sự cống hiến của quý vị.\"",
      "target": "I hope these comments will be helpful for organizing future sessions. Thank you for your dedication."
    },
    {
      "cue": "Viết lời chào kết thúc thư phản hồi bán trang trọng: \"Trân trọng,\"",
      "target": "Yours sincerely,"
    }
  ],
  "apology": [
    {
      "cue": "Viết lời chào mở đầu thư xin lỗi (thân mật hoặc bán trang trọng): \"Kính gửi [tên người nhận], / Kính gửi Ông/Bà [họ],\"",
      "target": "Dear [tên người nhận], / Dear Mr. / Ms. [họ],"
    },
    {
      "cue": "Viết câu mở thư chân thành xin lỗi vì lỡ cuộc hẹn: \"Tôi viết thư này để chân thành xin lỗi vì đã bỏ lỡ cuộc họp theo lịch trình của chúng ta ngày hôm qua.\"",
      "target": "I am writing to sincerely apologize for missing our scheduled meeting yesterday."
    },
    {
      "cue": "Viết câu mở đầu nêu lời xin lỗi chân thành: \"Tôi/Tớ viết thư này để chân thành xin lỗi vì...\"",
      "target": "I am writing to sincerely apologize for …"
    },
    {
      "cue": "Viết câu xin lỗi thân mật giải thích không thể tham gia: \"Tớ thực sự xin lỗi vì đã không thể + Vo bởi vì...\"",
      "target": "I’m really sorry that I couldn’t + Vo because …"
    },
    {
      "cue": "Viết câu bày tỏ tâm trạng áy náy sâu sắc: \"Tớ cảm thấy vô cùng áy náy vì đã không thể...\"",
      "target": "I feel terrible about not being able to …"
    },
    {
      "cue": "Viết câu khẳng định không hề cố ý gây bất tiện: \"Tớ không hề cố ý gây bất tiện, nhưng...\"",
      "target": "I didn’t mean to cause any inconvenience, but …"
    },
    {
      "cue": "Viết câu giải thích lý do vắng mặt trang trọng: \"Lý do tôi không thể có mặt là vì...\"",
      "target": "The reason why I could not attend was that …"
    },
    {
      "cue": "Viết câu bày tỏ tiếc nuối vì đã không thông báo trước: \"Tôi rất lấy làm tiếc vì đã không thể báo trước cho bạn/quý vị.\"",
      "target": "I regret that I was unable to inform you in advance."
    },
    {
      "cue": "Viết câu đề xuất chuộc lỗi thân mật: \"Hãy để tớ chuộc lỗi bằng cách + V-ing...\"",
      "target": "Let me make it up to you by + V-ing …"
    },
    {
      "cue": "Viết câu đề xuất đền bù sơ suất một cách trang trọng: \"Để đền bù cho sơ suất của mình, tôi xin được + Vo...\"",
      "target": "To make up for my mistake, I would like to + Vo …"
    },
    {
      "cue": "Viết câu kết thư xin lỗi mong sớm gặp lại: \"Một lần nữa, tôi thực sự xin lỗi vì bất kỳ sự bất tiện nào đã gây ra. Tôi rất mong sớm được gặp lại bạn/quý vị.\"",
      "target": "Once again, I truly apologize for any inconvenience caused. I look forward to catching up with you soon."
    },
    {
      "cue": "Viết lời chào kết thúc thư xin lỗi (thân mật hoặc bán trang trọng): \"Lời chúc tốt đẹp nhất, / Trân trọng,\"",
      "target": "Best wishes, / Yours sincerely,"
    }
  ],
  "application": [
    {
      "cue": "Viết lời chào mở đầu trang trọng trong thư ứng tuyển: \"Kính gửi Quản lý Tuyển dụng, / Kính gửi Quý ông/Quý bà,\"",
      "target": "Dear Hiring Manager, / Dear Sir/Madam,"
    },
    {
      "cue": "Viết câu mở thư bày tỏ sự quan tâm mạnh mẽ tới vị trí tình nguyện viên: \"Tôi viết thư này để bày tỏ sự quan tâm mạnh mẽ đến vị trí tình nguyện viên được quảng cáo trên trang web trường đại học của quý vị.\"",
      "target": "I am writing to express my strong interest in the volunteer position advertised on your university website."
    },
    {
      "cue": "Viết câu bày tỏ nguyện vọng ứng tuyển sâu sắc: \"Tôi viết thư này để bày tỏ sự quan tâm sâu sắc tới vị trí...\"",
      "target": "I am writing to express my keen interest in the position of …"
    },
    {
      "cue": "Viết câu khẳng định nền tảng và kỹ năng là ứng viên tiềm năng: \"Tôi tin rằng nền tảng và kỹ năng của mình giúp tôi là một ứng viên tiềm năng cho...\"",
      "target": "I believe my background and skills make me a strong candidate for …"
    },
    {
      "cue": "Viết câu trình bày trách nhiệm công việc trong vai trò trước đây: \"Trong vai trò trước đây là..., tôi chịu trách nhiệm về...\"",
      "target": "During my previous role as …, I was responsible for …"
    },
    {
      "cue": "Viết câu nêu bật kỹ năng giao tiếp và giải quyết vấn đề xuất sắc: \"Tôi đã trau dồi được kỹ năng giao tiếp và giải quyết vấn đề xuất sắc.\"",
      "target": "I have developed strong communication and problem-solving skills."
    },
    {
      "cue": "Viết câu giải thích lý do bị thu hút bởi cơ hội làm việc: \"Tôi đặc biệt bị thu hút bởi cơ hội này vì...\"",
      "target": "I am particularly drawn to this opportunity because …"
    },
    {
      "cue": "Viết câu tự tin khẳng định đóng góp hiệu quả vào đội ngũ: \"Tôi tự tin rằng mình có thể đóng góp hiệu quả vào đội ngũ của quý vị.\"",
      "target": "I am confident that I can contribute effectively to your team."
    },
    {
      "cue": "Viết câu thông báo đã đính kèm hồ sơ lý lịch chi tiết: \"Tôi xin đính kèm bản sơ yếu lý lịch để quý vị tiện xem xét chi tiết.\"",
      "target": "I have attached my updated CV for your detailed review."
    },
    {
      "cue": "Viết câu bày tỏ mong muốn được phỏng vấn trao đổi sâu hơn: \"Tôi rất cảm kích cơ hội được trao đổi sâu hơn về hồ sơ trong buổi phỏng vấn.\"",
      "target": "I would appreciate the chance to discuss my application further in an interview."
    },
    {
      "cue": "Viết câu kết thư cảm ơn và hoan nghênh buổi phỏng vấn: \"Cảm ơn quý vị đã xem xét đơn ứng tuyển của tôi. Tôi rất hoan nghênh cơ hội được trao đổi về năng lực của mình với quý vị trong một buổi phỏng vấn.\"",
      "target": "Thank you for considering my application. I would welcome the opportunity to discuss my qualifications with you in an interview."
    },
    {
      "cue": "Viết lời chào kết thúc thư ứng tuyển trang trọng: \"Trân trọng,\"",
      "target": "Yours faithfully,"
    }
  ]
};

// ==========================================================================
// THUẬT TOÁN SO KHỚP TỪNG TỪ (WORD-LEVEL LCS DIFF ALGORITHM)
// ==========================================================================
function diffWords(userText, targetText) {
  const isPunctOrSignOnly = (w) => /^[+\-–—−.,!?;:()\[\]\s]+$/.test(w);

  const preProcess = (t) => (t || '')
    .replace(/…/g, '...')
    .replace(/\.\s*\.\s*\./g, '...')
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/^[\s+\-–—−*•]+/, '')
    .replace(/(^|[^a-zA-Z0-9])([vV])\s*[-_–—−]\s*(ing\b|[0oO]\b)/gi, '$1$2$3')
    .replace(/(hành\s*động)\s*([+\-:–—−/]|->)?\s*/gi, '$1 ')
    .replace(/([a-zA-Z0-9])\s*[-–—−]\s*([a-zA-Z0-9])/g, '$1 $2')
    .replace(/[–—−]/g, '-')
    .replace(/\s*\+\s*/g, ' + ')
    .replace(/\s*-\s*/g, ' - ');
      
  const clean = (w) => {
    let s = (w || '').toLowerCase().trim();
    s = s.replace(/^[.,!?;:()+\[\]\s\-–—−/]+|[.,!?;:()+\[\]\s\-–—−/]+$/g, '');
    s = s.replace(/^[vV]\s*[-_]?ing$/i, 'ving');
    s = s.replace(/^[vV]\s*[-_]?[0oO]$/i, 'vo');
    return s;
  };

  // If target has alternate options separated by ' / '
  if (targetText.includes(' / ') && (targetText.includes('+ Vo') || targetText.includes('+ Ving') || targetText.includes('Don’t forget') || targetText.includes('quite unhappy'))) {
    const altTargets = targetText.split(' / ');
    let bestDiff = null;
    for (const alt of altTargets) {
      const curDiff = diffWordsSingle(userText, alt.trim(), preProcess, clean, isPunctOrSignOnly);
      if (!bestDiff || curDiff.accuracy > bestDiff.accuracy) {
        bestDiff = curDiff;
      }
    }
    const fullDiff = diffWordsSingle(userText, targetText, preProcess, clean, isPunctOrSignOnly);
    if (fullDiff.accuracy > bestDiff.accuracy) {
      bestDiff = fullDiff;
    }
    return bestDiff;
  }

  return diffWordsSingle(userText, targetText, preProcess, clean, isPunctOrSignOnly);
}

function diffWordsSingle(userText, targetText, preProcess, clean, isPunctOrSignOnly) {
  if (!isPunctOrSignOnly) {
    isPunctOrSignOnly = (w) => /^[+\-–—−.,!?;:()\[\]\s]+$/.test(w);
  }
  const rawUser = preProcess(userText).trim();
  const rawTarget = preProcess(targetText).trim();

  let adjustedTarget = rawTarget;
  if (!adjustedTarget.includes('[') && !adjustedTarget.includes(']')) {
    adjustedTarget = adjustedTarget.replace(/(^|[^a-zA-Z0-9])[+\-–—−]?\s*Vo\b/g, '$1[+ Vo]');
    adjustedTarget = adjustedTarget.replace(/(^|[^a-zA-Z0-9])[+\-–—−]?\s*Ving\b/g, '$1[+ Ving]');
  }

  const slotMatches = [...adjustedTarget.matchAll(/\[([^\]]+)\]/g)];

  if (slotMatches.length > 0) {
    const slots = slotMatches.map(m => m[1]);
    const parts = adjustedTarget.split(/\[[^\]]+\]/);

    let pattern = '^\\s*';
    for (let i = 0; i < slots.length; i++) {
      const pStr = parts[i].trim();
      if (pStr) {
        const words = pStr.split(/\s+/).filter(w => !isPunctOrSignOnly(w) || w === '.' || w === '!' || w === '?').map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        pattern += words.join('[\\s+\\-–—−]*') + '[\\s+\\-–—−]*(.+?)[\\s+\\-–—−]*';
      } else {
        pattern += '(.+?)[\\s+\\-–—−]*';
      }
    }
    const pLast = parts[parts.length - 1].trim();
    if (pLast) {
      const lastWords = pLast.split(/\s+/).filter(w => !isPunctOrSignOnly(w) || w === '.' || w === '!' || w === '?').map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
      if (/^[.,!?;:]+$/.test(pLast)) {
        pattern += '(?:[\\s+\\-–—−]*[' + pLast.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '])?';
      } else {
        pattern += lastWords.join('[\\s+\\-–—−]*');
      }
    }
    pattern += '\\s*$';

    const templateRegex = new RegExp(pattern, 'i');
    const tm = rawUser.match(templateRegex);

    if (tm) {
      const diff = [];
      for (let i = 0; i < slots.length; i++) {
        const pWords = parts[i].trim().split(/\s+/).filter(w => w);
        for (const pw of pWords) {
          diff.push({ word: pw, targetWord: pw, type: 'match' });
        }
        const userSlotVal = tm[i + 1].trim();
        const targetSlotDisplay = slots[i].startsWith('+ ') ? slots[i] : `[${slots[i]}]`;
        diff.push({
          word: userSlotVal,
          targetWord: targetSlotDisplay,
          type: 'match'
        });
      }
      const pLastWords = parts[parts.length - 1].trim().split(/\s+/).filter(w => w);
      for (const pw of pLastWords) {
        diff.push({ word: pw, targetWord: pw, type: 'match' });
      }

      return {
        diff,
        accuracy: 100,
        isPerfect: true
      };
    }

    let uNorm = rawUser;
    let tNorm = adjustedTarget;
    const slotValues = {};

    const userBrackets = [...rawUser.matchAll(/\[([^\]]+)\]/g)].map(m => m[1]);
    if (userBrackets.length === slots.length) {
      for (let i = 0; i < slots.length; i++) {
        const tok = `__SLOT_${i}__`;
        uNorm = uNorm.replace(`[${userBrackets[i]}]`, ` ${tok} `);
        tNorm = tNorm.replace(`[${slots[i]}]`, ` ${tok} `);
        slotValues[tok] = {
          user: `[${userBrackets[i]}]`,
          target: slots[i].startsWith('+ ') ? slots[i] : `[${slots[i]}]`
        };
      }
    } else {
      for (let i = 0; i < slots.length; i++) {
        const tok = `__SLOT_${i}__`;
        tNorm = tNorm.replace(`[${slots[i]}]`, ` ${tok} `);

        const beforeWords = parts[i].trim().split(/\s+/).filter(w => w);
        const afterWords = parts[i + 1].trim().split(/\s+/).filter(w => w);
        const anchorB = beforeWords.length > 0 ? beforeWords[beforeWords.length - 1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : '';
        const anchorA = afterWords.length > 0 ? afterWords[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : '';

        let extractedUserSlot = '';
        if (anchorB && anchorA) {
          const subReg = new RegExp(`(\\b${anchorB}\\b\\s*)(.+?)(\\s*${anchorA})`, 'i');
          const sm = uNorm.match(subReg);
          if (sm && sm[2].trim()) {
            extractedUserSlot = sm[2].trim();
            uNorm = uNorm.replace(subReg, `$1 ${tok} $3`);
          }
        } else if (anchorB) {
          const subReg = new RegExp(`(\\b${anchorB}\\b\\s*)(.+?)(\\s*[,.!?]|$)`, 'i');
          const sm = uNorm.match(subReg);
          if (sm && sm[2].trim()) {
            extractedUserSlot = sm[2].trim();
            uNorm = uNorm.replace(subReg, `$1 ${tok} $3`);
          }
        }

        slotValues[tok] = {
          user: extractedUserSlot || (slots[i].startsWith('+ ') ? slots[i] : `[${slots[i]}]`),
          target: slots[i].startsWith('+ ') ? slots[i] : `[${slots[i]}]`
        };
      }
    }

    const uWords = uNorm.trim().split(/\s+/).filter(w => w !== '');
    const tWords = tNorm.trim().split(/\s+/).filter(w => w !== '');

    const n = uWords.length;
    const m = tWords.length;
    const dp = Array(n + 1).fill(null).map(() => Array(m + 1).fill(0));

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        if (clean(uWords[i - 1]) === clean(tWords[j - 1])) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    let i = n, j = m;
    const diff = [];

    while (i > 0 || j > 0) {
      if (i > 0 && j > 0 && clean(uWords[i - 1]) === clean(tWords[j - 1])) {
        const uW = uWords[i - 1];
        const tW = tWords[j - 1];
        if (slotValues[tW]) {
          diff.unshift({
            word: slotValues[tW].user,
            targetWord: slotValues[tW].target,
            type: 'match'
          });
        } else {
          diff.unshift({ word: uW, targetWord: tW, type: 'match' });
        }
        i--;
        j--;
      } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
        const tW = tWords[j - 1];
        diff.unshift({
          word: slotValues[tW] ? slotValues[tW].target : tW,
          targetWord: slotValues[tW] ? slotValues[tW].target : tW,
          type: 'missing'
        });
        j--;
      } else {
        const uW = uWords[i - 1];
        diff.unshift({
          word: slotValues[uW] ? slotValues[uW].user : uW,
          type: 'extra'
        });
        i--;
      }
    }

    const meaningfulUserWords = uWords.filter(w => !isPunctOrSignOnly(w));
    const meaningfulTargetWords = tWords.filter(w => !isPunctOrSignOnly(w));
    const matchCount = diff.filter(d => d.type === 'match' && !isPunctOrSignOnly(d.word)).length;
    const maxWords = Math.max(meaningfulTargetWords.length, meaningfulUserWords.length);
    const accuracy = maxWords > 0 ? Math.round((matchCount / maxWords) * 100) : 0;

    return {
      diff,
      accuracy,
      isPerfect: matchCount === meaningfulTargetWords.length && meaningfulUserWords.length === meaningfulTargetWords.length
    };
  }

  // Standard LCS for targets without brackets
  const uWords = rawUser.split(/\s+/).filter(w => w !== '');
  const tWords = rawTarget.split(/\s+/).filter(w => w !== '');
  const n = uWords.length;
  const m = tWords.length;
  const dp = Array(n + 1).fill(null).map(() => Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (clean(uWords[i - 1]) === clean(tWords[j - 1])) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let i = n, j = m;
  const diff = [];

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && clean(uWords[i - 1]) === clean(tWords[j - 1])) {
      diff.unshift({ word: uWords[i - 1], targetWord: tWords[j - 1], type: 'match' });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      diff.unshift({ word: tWords[j - 1], targetWord: tWords[j - 1], type: 'missing' });
      j--;
    } else {
      diff.unshift({ word: uWords[i - 1], type: 'extra' });
      i--;
    }
  }

  const meaningfulUserWords = uWords.filter(w => !isPunctOrSignOnly(w));
  const meaningfulTargetWords = tWords.filter(w => !isPunctOrSignOnly(w));
  const matchCount = diff.filter(d => d.type === 'match' && !isPunctOrSignOnly(d.word)).length;
  const maxWords = Math.max(meaningfulTargetWords.length, meaningfulUserWords.length);
  const accuracy = maxWords > 0 ? Math.round((matchCount / maxWords) * 100) : 0;

  return {
    diff,
    accuracy,
    isPerfect: matchCount === meaningfulTargetWords.length && meaningfulUserWords.length === meaningfulTargetWords.length
  };
}

// Generate subtle hint: triggers recall with starting phrases
function getHintText(target) {
  if (!target) return '';
  target = target.trim();

  if (target.includes(' / ') && (target.includes('+ Vo') || target.includes('+ Ving') || target.includes('Don’t forget'))) {
    const options = target.split(' / ');
    const hintOpts = options.map(opt => getHintText(opt));
    return hintOpts.join(' / ');
  }

  const targetClean = target
    .replace(/\s*\/\s*quite unhappy/i, '')
    .replace(/on\/in/g, 'on/in');

  const sentences = targetClean.split(/(?<=[.?!;])\s+/);
  const cues = [];

  for (const s of sentences) {
    const sTrim = s.trim();
    if (!sTrim) continue;

    const hasVo = /\+\s*vo\b/i.test(sTrim);
    const hasVing = /\+\s*ving\b/i.test(sTrim);

    const sDisplay = sTrim.replace(/\[([^\]\s]+)[^\]]*\]/g, '[$1...]');
    const words = sDisplay.split(/\s+/);

    if (words.length <= 2) {
      if (words[0].toLowerCase() === 'best' && words.length >= 2) {
        cues.push(`${words[0]} ${words[1][0]}...,`);
      } else if (words[0].toLowerCase() === 'yours' && words.length >= 2) {
        cues.push(`${words[0]} ${words[1][0]}...,`);
      } else {
        cues.push(words.join(' '));
      }
    } else {
      const lowerS = sTrim.toLowerCase();
      let num = 2;
      if (lowerS.startsWith('i would like to')) {
        num = 5;
      } else if (lowerS.startsWith('could you') || lowerS.startsWith('can you')) {
        num = 4;
      } else if (lowerS.startsWith('i want to') || lowerS.startsWith('i want more')) {
        num = 4;
      } else if (lowerS.startsWith('the quality of') || lowerS.startsWith('one thing that') || lowerS.startsWith('to enhance the')) {
        num = 4;
      } else if (words.length >= 7) {
        num = 3;
      } else {
        num = 2;
      }

      let prefix = words.slice(0, num).join(' ');
      prefix = prefix.replace(/[,.?!…]+$/, '');

      let suffix = '';
      if (hasVo && !prefix.includes('+ Vo')) {
        suffix = ' (+ Vo.)';
      } else if (hasVing && !prefix.includes('+ Ving')) {
        suffix = ' (+ Ving)';
      }

      cues.push(prefix + '...' + suffix);
    }
  }

  return cues.join(' / ');
}

// ==========================================================================
// ĐIỀU HƯỚNG & KHÓA TAB TRONG QUÁ TRÌNH TRẢ BÀI DÀN Ý (CHẾ ĐỘ TRẢ BÀI)
// ==========================================================================
function applyRecitationNavigationLock() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    if (btn.id !== 'tab-btn-submissions') {
      btn.classList.add('tab-locked');
      btn.setAttribute('title', 'Đã bị khóa trong lúc trả bài để đảm bảo tính trung thực');
    }
  });

  // Khóa trực quan các mục điều hướng ngoài sidebar
  document.querySelectorAll('.sidebar-nav .nav-link').forEach(link => {
    const isCurrentCat = link.id === `nav-cat-${AppState.activeCategory}`;
    if (!isCurrentCat) {
      link.classList.add('nav-locked');
      link.setAttribute('title', 'Đã bị khóa trong lúc trả bài để đảm bảo tính trung thực');
    }
  });
}

function unlockRecitationNavigation() {
  AppState.isRecitationInProgress = false;
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('tab-locked');
    btn.removeAttribute('title');
  });
  document.querySelectorAll('.sidebar-nav .nav-link').forEach(link => {
    link.classList.remove('nav-locked');
    link.removeAttribute('title');
  });
  const banner = document.getElementById('recitationLockedBanner');
  if (banner) banner.classList.add('hidden');
}

// Timer Format (mm:ss)
function formatTimerMmSs(totalSecs) {
  const m = Math.floor(totalSecs / 60);
  const s = totalSecs % 60;
  return `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
}

function updateRecitationTimerDisplay() {
  const countdownEl = document.getElementById('recitationCountdown');
  const badgeEl = document.getElementById('recitationTimerBadge');
  if (countdownEl) countdownEl.textContent = formatTimerMmSs(AppState.recitationTimerRemaining);

  if (badgeEl) {
    badgeEl.classList.remove('timer-normal', 'timer-warning', 'timer-urgent');
    if (AppState.recitationTimerRemaining > 300) {
      badgeEl.classList.add('timer-normal');
    } else if (AppState.recitationTimerRemaining > 60) {
      badgeEl.classList.add('timer-warning');
    } else {
      badgeEl.classList.add('timer-urgent');
    }
  }
}

function startRecitationTimer() {
  stopRecitationTimer();
  updateRecitationTimerDisplay();
  AppState.recitationTimerInterval = setInterval(() => {
    if (AppState.recitationTimerRemaining > 0) {
      AppState.recitationTimerRemaining--;
      updateRecitationTimerDisplay();
    } else {
      handleRecitationTimeUp();
    }
  }, 1000);
}

function stopRecitationTimer() {
  if (AppState.recitationTimerInterval) {
    clearInterval(AppState.recitationTimerInterval);
    AppState.recitationTimerInterval = null;
  }
}

function handleRecitationTimeUp() {
  stopRecitationTimer();
  const textarea = document.getElementById('recitationInput');
  if (textarea) textarea.disabled = true;

  // Grade current question if typed
  const userAns = textarea ? textarea.value.trim() : '';
  const idx = AppState.currentRecitationQuestionIdx;
  const q = AppState.recitationQuestions[idx];
  if (userAns && q) {
    const diff = diffWords(userAns, q.target);
    const hintUsed = AppState.recitationHintsUsed[idx];
    AppState.recitationScores[idx] = hintUsed ? Math.round(diff.accuracy * 0.5) : diff.accuracy;
    AppState.recitationUserAnswers[idx] = userAns;
  }

  alert('⏰ ĐÃ HẾT THỜI GIAN 20 PHÚT LÀM BÀI!\nHệ thống tự động nộp bài và hiển thị kết quả đánh giá trả bài của bạn.');
  showRecitationEvaluationResult();
}

// ==========================================================================
// TAB 4: TRẢ BÀI DÀN Ý CHI TIẾT (RECITATION QUIZ ENGINE)
// Giao diện học thuật chuẩn englishwithmsnguyet-dev.github.io/vstepwritingtask1b1/
// ==========================================================================
function switchSubmissionsSubTab(subTab) {
  const btnResult = document.getElementById('btnSubNavResult');
  const btnRecitation = document.getElementById('btnSubNavRecitation');
  const container = document.getElementById('categorySubmissionResultContainer');
  if (!container) return;

  if (subTab === 'result') {
    if (btnResult) {
      btnResult.classList.add('active', 'btn-primary');
      btnResult.classList.remove('btn-secondary');
    }
    if (btnRecitation) {
      btnRecitation.classList.remove('active', 'btn-primary');
      btnRecitation.classList.add('btn-secondary');
    }
    
    // Find latest submission for active category
    const catSubs = AppState.submissions.filter(s => s.categoryKey === AppState.activeCategory);
    if (catSubs.length > 0) {
      container.innerHTML = buildSubmissionCardMarkup(catSubs[0]);
    } else if (AppState.submissions.length > 0) {
      container.innerHTML = buildSubmissionCardMarkup(AppState.submissions[0]);
    } else {
      container.innerHTML = `
        <div style="text-align: center; padding: 4rem 1.5rem; background: var(--bg-card); border-radius: var(--radius-xl); border: 1px solid var(--panel-border);">
          <i class="fa-solid fa-pen-nib" style="font-size: 3rem; color: var(--cyan-light); margin-bottom: 1rem;"></i>
          <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">CHƯA CÓ BÀI NỘP NÀO CHO DẠNG THƯ NÀY</h3>
          <p style="color: var(--text-secondary); margin-bottom: 1.5rem; font-size: 0.9rem;">
            Bạn chưa thực hiện bài viết nào trong dạng thư này. Hãy chuyển sang tab "THỰC HÀNH VIẾT" để viết bài và nhận kết quả chấm điểm chi tiết!
          </p>
          <button class="btn btn-primary" onclick="switchWorkflowTab('practice')">
            <i class="fa-solid fa-pen-nib"></i> Vào phòng thực hành viết ngay
          </button>
        </div>
      `;
    }
  } else if (subTab === 'recitation') {
    if (btnResult) {
      btnResult.classList.remove('active', 'btn-primary');
      btnResult.classList.add('btn-secondary');
    }
    if (btnRecitation) {
      btnRecitation.classList.add('active', 'btn-primary');
      btnRecitation.classList.remove('btn-secondary');
    }
    initRecitationForActiveCategory();
  }
}

function renderCategorySubmissionsTab() {
  const container = document.getElementById('categorySubmissionResultContainer');
  if (!container) return;

  // If recitation is already running in active category, just ensure question is displayed
  if (AppState.isRecitationInProgress && AppState.recitationCategory === AppState.activeCategory) {
    const btnResult = document.getElementById('btnSubNavResult');
    const btnRecitation = document.getElementById('btnSubNavRecitation');
    if (btnResult) {
      btnResult.classList.remove('active', 'btn-primary');
      btnResult.classList.add('btn-secondary');
    }
    if (btnRecitation) {
      btnRecitation.classList.add('active', 'btn-primary');
      btnRecitation.classList.remove('btn-secondary');
    }
    showRecitationQuestion();
    return;
  }

  // MẶC ĐỊNH MỞ NGAY HỆ THỐNG TRẢ BÀI DÀN Ý CHI TIẾT KHI HỌC VIÊN CHỌN TAB TRẢ BÀI!
  switchSubmissionsSubTab('recitation');
}

function initRecitationForActiveCategory() {
  const catKey = AppState.activeCategory;
  const questions = RECITATION_QUESTIONS[catKey] || RECITATION_QUESTIONS.advice || [];

  AppState.isRecitationInProgress = true;
  AppState.recitationCategory = catKey;
  AppState.recitationQuestions = questions;
  AppState.currentRecitationQuestionIdx = 0;
  AppState.recitationScores = new Array(questions.length).fill(0);
  AppState.recitationUserAnswers = new Array(questions.length).fill('');
  AppState.recitationHintsUsed = new Array(questions.length).fill(false);
  AppState.recitationTimerRemaining = 1200; // 20 minutes

  const container = document.getElementById('categorySubmissionResultContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="recitation-container fade-in">
      <!-- Recitation Lock Notice Banner -->
      <div class="recitation-locked-banner" id="recitationLockedBanner">
        <i class="fa-solid fa-lock"></i>
        <span><strong>Chế độ Trả bài đang hoạt động:</strong> Toàn bộ các tab tài liệu và danh mục đã được khóa để đảm bảo tính trung thực. Bạn cần hoàn thành hoặc chọn <strong>Nộp bài sớm</strong> để mở khóa!</span>
      </div>

      <!-- Recitation Header Bar -->
      <div class="recitation-header" id="recitationHeaderBar">
        <h3>HỆ THỐNG TRẢ BÀI DÀN Ý CHI TIẾT</h3>
        <div class="recitation-header-right">
          <div class="recitation-timer-badge timer-normal" id="recitationTimerBadge" title="Thời gian làm bài: 20 phút">
            <i class="fa-solid fa-stopwatch" id="recitationTimerIcon"></i>
            <span class="timer-label">THỜI GIAN:</span>
            <span class="timer-countdown" id="recitationCountdown">20:00</span>
          </div>
          <div class="recitation-progress-wrapper">
            <span class="progress-text">Câu hỏi <strong id="currentQuestionNum">1</strong>/<span id="totalQuestionsNum">${questions.length}</span></span>
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" id="recitationProgressBarFill" style="width: ${Math.round((1 / questions.length) * 100)}%;"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quiz Box -->
      <div class="quiz-box" id="recitationQuizBox">
        <div class="question-cue-box">
          <span class="cue-label">YÊU CẦU VIẾT BẰNG TIẾNG ANH:</span>
          <p id="questionCueText"></p>
          <div class="question-hint hidden" id="questionHintBox">
            <span class="hint-label"><i class="fa-solid fa-lightbulb"></i> Gợi ý:</span>
            <span id="questionHintText"></span>
          </div>
        </div>

        <div class="answer-input-area">
          <textarea id="recitationInput" placeholder="Nhập câu tiếng Anh chính xác từ dàn ý tại đây..."></textarea>
          <div class="recitation-note">
            <i class="fa-solid fa-circle-info"></i>
            <span>Hãy viết chính xác từng từ bao gồm cả ký hiệu đặc biệt (như <strong>Vo</strong>, <strong>Ving</strong>, hoặc <strong>[ ]</strong>) nếu có. Nếu phần trả lời không có thì xem như sai.</span>
          </div>
        </div>

        <div class="quiz-actions">
          <button class="btn btn-secondary" id="btnPrevQuestion" onclick="prevRecitationQuestion()"><i class="fa-solid fa-chevron-left"></i> Câu trước</button>
          <button class="btn btn-secondary" id="btnShowAnswer" onclick="showRecitationHint()"><i class="fa-solid fa-lightbulb"></i> Gợi ý</button>
          <button class="btn btn-primary" id="btnCheckAnswer" onclick="checkRecitationAnswer()"><i class="fa-solid fa-circle-check"></i> Kiểm tra</button>
          <button class="btn btn-primary hidden" id="btnNextQuestion" onclick="nextRecitationQuestion()">Câu tiếp theo <i class="fa-solid fa-chevron-right"></i></button>
          <button class="btn btn-early-submit" id="btnSubmitRecitationEarly" onclick="submitRecitationEarly()"><i class="fa-solid fa-flag"></i> Nộp bài sớm</button>
        </div>

        <!-- Feedback & Diff Comparison Area -->
        <div class="recitation-feedback hidden" id="recitationFeedback">
          <div class="feedback-status" id="feedbackStatus"></div>
          <div class="comparison-display">
            <div class="comparison-boxes">
              <div class="comparison-box-item">
                <span class="box-label">Câu của bạn:</span>
                <div class="user-diff" id="userDiffResult"></div>
              </div>
              <div class="comparison-box-item">
                <span class="box-label">Đáp án đúng từ dàn ý:</span>
                <div class="correct-text" id="correctTextResult"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Evaluation Result Box -->
      <div class="recitation-result-box hidden" id="recitationResultBox">
        <div class="evaluation-card" id="recitationEvaluationCard">
          <div class="evaluation-header">
            <h4 style="font-size: 1.35rem; font-weight: 800; color: var(--text-primary); margin: 0; font-family: var(--font-display);">KẾT QUẢ ĐÁNH GIÁ TRẢ BÀI DÀN Ý</h4>
          </div>
          <div class="evaluation-icon" id="evaluationIcon">
            <i class="fa-solid fa-circle-check"></i>
          </div>
          <div class="evaluation-score">
            <span class="score-number" id="scorePercentageVal">100</span><span class="score-unit">%</span>
          </div>
          <div class="evaluation-badge" id="resultStatusVal">ĐẠT</div>
          <div class="evaluation-time-spent" id="evaluationTimeSpent">
            <i class="fa-solid fa-stopwatch"></i> Thời gian hoàn thành: <strong id="timeSpentVal">00:00</strong> / 20:00
          </div>
          <p class="evaluation-message" id="resultMessageVal"></p>

          <!-- Detailed Question Breakdown Review -->
          <div id="recitationReviewListContainer" style="width: 100%; text-align: left; margin: 1.25rem 0;"></div>
          
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; width: 100%; margin-top: 1rem;">
            <button class="btn btn-primary" onclick="restartRecitation()" style="border-radius: 50px; padding: 0.85rem 1.85rem; font-weight: 700;">
              <i class="fa-solid fa-rotate-left"></i> Làm lại từ đầu
            </button>
            <button class="btn btn-secondary" onclick="switchWorkflowTab('practice')" style="border-radius: 50px; padding: 0.85rem 1.85rem; font-weight: 700; border-color: var(--accent-primary); color: var(--accent-primary);">
              <i class="fa-solid fa-pen-nib"></i> Sang phòng thực hành viết ›
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  applyRecitationNavigationLock();
  startRecitationTimer();
  showRecitationQuestion();
}

function showRecitationQuestion() {
  const questions = AppState.recitationQuestions;
  if (!questions || questions.length === 0) return;

  const idx = AppState.currentRecitationQuestionIdx;
  const q = questions[idx];

  const numEl = document.getElementById('currentQuestionNum');
  const totalEl = document.getElementById('totalQuestionsNum');
  const barEl = document.getElementById('recitationProgressBarFill');
  const cueEl = document.getElementById('questionCueText');
  const textarea = document.getElementById('recitationInput');
  const hintBox = document.getElementById('questionHintBox');
  const hintText = document.getElementById('questionHintText');
  const feedbackBox = document.getElementById('recitationFeedback');
  const btnPrev = document.getElementById('btnPrevQuestion');
  const btnCheck = document.getElementById('btnCheckAnswer');
  const btnNext = document.getElementById('btnNextQuestion');
  const btnHint = document.getElementById('btnShowAnswer');

  if (numEl) numEl.textContent = idx + 1;
  if (totalEl) totalEl.textContent = questions.length;
  if (barEl) barEl.style.width = `${Math.round(((idx + 1) / questions.length) * 100)}%`;
  if (cueEl) cueEl.textContent = q.cue;

  if (btnPrev) btnPrev.disabled = (idx === 0);

  // Restore previous answer if existing
  if (textarea) {
    textarea.value = AppState.recitationUserAnswers[idx] || '';
    textarea.disabled = false;
    textarea.focus();
  }

  // Restore hint if used
  if (AppState.recitationHintsUsed[idx]) {
    if (hintText) hintText.textContent = getHintText(q.target);
    if (hintBox) hintBox.classList.remove('hidden');
  } else {
    if (hintBox) hintBox.classList.add('hidden');
    if (hintText) hintText.textContent = '';
  }

  // Check button states
  if (AppState.recitationUserAnswers[idx] && AppState.recitationScores[idx] > 0) {
    // Already checked
    if (btnCheck) btnCheck.classList.add('hidden');
    if (btnNext) btnNext.classList.remove('hidden');
  } else {
    if (btnCheck) btnCheck.classList.remove('hidden');
    if (btnNext) btnNext.classList.add('hidden');
    if (feedbackBox) feedbackBox.classList.add('hidden');
  }
}

function showRecitationHint() {
  const questions = AppState.recitationQuestions;
  const idx = AppState.currentRecitationQuestionIdx;
  if (!questions || !questions[idx]) return;

  AppState.recitationHintsUsed[idx] = true;
  const hintText = getHintText(questions[idx].target);

  const hintBox = document.getElementById('questionHintBox');
  const hintEl = document.getElementById('questionHintText');
  if (hintEl) hintEl.textContent = hintText;
  if (hintBox) hintBox.classList.remove('hidden');
}

function checkRecitationAnswer() {
  const questions = AppState.recitationQuestions;
  const idx = AppState.currentRecitationQuestionIdx;
  if (!questions || !questions[idx]) return;

  const q = questions[idx];
  const textarea = document.getElementById('recitationInput');
  const userAns = textarea ? textarea.value.trim() : '';

  if (!userAns) {
    alert('Vui lòng nhập câu trả lời của bạn trước khi kiểm tra!');
    return;
  }

  const diffResult = diffWords(userAns, q.target);
  const hintUsed = AppState.recitationHintsUsed[idx] || false;

  let finalScore = diffResult.accuracy;
  if (hintUsed) {
    finalScore = Math.round(diffResult.accuracy * 0.5);
  }
  AppState.recitationScores[idx] = finalScore;
  AppState.recitationUserAnswers[idx] = userAns;

  // Render User Diff Result
  const userDiffEl = document.getElementById('userDiffResult');
  if (userDiffEl) {
    userDiffEl.innerHTML = '';
    diffResult.diff.forEach(d => {
      if (d.type === 'match') {
        const span = document.createElement('span');
        span.className = 'diff-word-match';
        span.textContent = d.word + ' ';
        userDiffEl.appendChild(span);
      } else if (d.type === 'extra') {
        const span = document.createElement('span');
        span.className = 'diff-word-extra';
        span.textContent = d.word + ' ';
        userDiffEl.appendChild(span);
      }
    });
    if (userDiffEl.innerHTML === '') {
      userDiffEl.innerHTML = '<span style="color:var(--text-muted);font-style:italic;">(Bỏ trống)</span>';
    }
  }

  // Render Correct Target Result
  const correctEl = document.getElementById('correctTextResult');
  if (correctEl) {
    correctEl.innerHTML = '';
    diffResult.diff.forEach(d => {
      if (d.type === 'match') {
        const span = document.createElement('span');
        span.className = 'diff-word-match';
        span.textContent = (d.targetWord || d.word) + ' ';
        correctEl.appendChild(span);
      } else if (d.type === 'missing') {
        const span = document.createElement('span');
        span.className = 'diff-word-mismatch';
        span.textContent = (d.targetWord || d.word) + ' ';
        correctEl.appendChild(span);
      }
    });
  }

  // Show Feedback Status
  const statusEl = document.getElementById('feedbackStatus');
  if (statusEl) {
    if (diffResult.isPerfect) {
      statusEl.className = 'feedback-status status-success';
      statusEl.innerHTML = hintUsed 
        ? `<i class="fa-solid fa-circle-check"></i> <strong>Chính xác tuyệt đối!</strong> (Độ khớp: 100% - Điểm tính: 50% do dùng gợi ý)`
        : `<i class="fa-solid fa-circle-check"></i> <strong>Chính xác tuyệt đối!</strong> (Độ chính xác: 100%)`;
    } else {
      statusEl.className = 'feedback-status status-error';
      statusEl.innerHTML = hintUsed
        ? `<i class="fa-solid fa-triangle-exclamation"></i> <strong>Chưa chính xác!</strong> (Độ khớp: ${diffResult.accuracy}% - Điểm tính: ${finalScore}% do dùng gợi ý). Xem chi tiết bên dưới.`
        : `<i class="fa-solid fa-triangle-exclamation"></i> <strong>Chưa chính xác! Độ chính xác: ${diffResult.accuracy}%. Xem so sánh bên dưới.</strong>`;
    }
  }

  const feedbackBox = document.getElementById('recitationFeedback');
  const btnCheck = document.getElementById('btnCheckAnswer');
  const btnNext = document.getElementById('btnNextQuestion');

  if (feedbackBox) feedbackBox.classList.remove('hidden');
  if (btnCheck) btnCheck.classList.add('hidden');
  if (btnNext) btnNext.classList.remove('hidden');
  if (textarea) textarea.disabled = true;
}

function prevRecitationQuestion() {
  if (AppState.currentRecitationQuestionIdx > 0) {
    AppState.currentRecitationQuestionIdx--;
    showRecitationQuestion();
  }
}

function nextRecitationQuestion() {
  if (AppState.currentRecitationQuestionIdx < AppState.recitationQuestions.length - 1) {
    AppState.currentRecitationQuestionIdx++;
    showRecitationQuestion();
  } else {
    showRecitationEvaluationResult();
  }
}

function submitRecitationEarly() {
  if (!AppState.isRecitationInProgress) return;

  const confirmEarly = confirm(
    '⚠️ BẠN CÓ CHẮC CHẮN MUỐN NỘP BÀI SỚM KHÔNG?\n\n' +
    '• Các câu hỏi chưa làm sẽ được tính 0 điểm.\n' +
    '• Hệ thống sẽ tự động tổng kết điểm và MỞ KHÓA lại các tab cho bạn.\n\n' +
    'Bấm OK để nộp bài sớm ngay, hoặc Hủy để tiếp tục làm bài.'
  );

  if (!confirmEarly) return;

  // Grade current question if typed
  const textarea = document.getElementById('recitationInput');
  const userAns = textarea ? textarea.value.trim() : '';
  const idx = AppState.currentRecitationQuestionIdx;
  const q = AppState.recitationQuestions[idx];
  const feedbackBox = document.getElementById('recitationFeedback');

  if (userAns && (!feedbackBox || feedbackBox.classList.contains('hidden'))) {
    if (q) {
      const diffResult = diffWords(userAns, q.target);
      const hintUsed = AppState.recitationHintsUsed[idx];
      AppState.recitationScores[idx] = hintUsed ? Math.round(diffResult.accuracy * 0.5) : diffResult.accuracy;
      AppState.recitationUserAnswers[idx] = userAns;
    }
  }

  showRecitationEvaluationResult();
}

function showRecitationEvaluationResult() {
  stopRecitationTimer();
  unlockRecitationNavigation();

  const quizBox = document.getElementById('recitationQuizBox');
  const feedbackBox = document.getElementById('recitationFeedback');
  const headerBar = document.getElementById('recitationHeaderBar');
  const lockedBanner = document.getElementById('recitationLockedBanner');
  const resultBox = document.getElementById('recitationResultBox');

  if (quizBox) quizBox.classList.add('hidden');
  if (feedbackBox) feedbackBox.classList.add('hidden');
  if (headerBar) headerBar.classList.add('hidden');
  if (lockedBanner) lockedBanner.classList.add('hidden');

  // Compute average score & time spent
  const totalQuestions = AppState.recitationQuestions.length;
  const totalScore = AppState.recitationScores.reduce((sum, s) => sum + s, 0);
  const averageScore = totalQuestions > 0 ? Math.round(totalScore / totalQuestions) : 0;
  const timeSpentSecs = Math.max(0, 1200 - AppState.recitationTimerRemaining);

  const scoreEl = document.getElementById('scorePercentageVal');
  const statusEl = document.getElementById('resultStatusVal');
  const msgEl = document.getElementById('resultMessageVal');
  const timeEl = document.getElementById('timeSpentVal');
  const iconEl = document.getElementById('evaluationIcon');
  const evalCard = document.getElementById('recitationEvaluationCard');

  if (scoreEl) scoreEl.textContent = averageScore;
  if (timeEl) timeEl.textContent = formatTimerMmSs(timeSpentSecs);

  const cat = CATEGORY_MAP[AppState.activeCategory] || { title_vi: 'Dạng thư này' };

  if (averageScore >= 80) {
    if (statusEl) statusEl.textContent = 'ĐẠT';
    if (msgEl) msgEl.textContent = `🎉 Chúc mừng bạn đã hoàn thành xuất sắc bài kiểm tra trả bài dàn ý ${cat.title_vi}! Bạn đã ghi nhớ vững vàng các cấu trúc và sẵn sàng bước sang phòng thực hành viết thư.`;
    if (iconEl) iconEl.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    if (evalCard) {
      evalCard.classList.remove('failed');
      evalCard.classList.add('passed');
    }
    shootConfetti();
  } else {
    if (statusEl) statusEl.textContent = 'KHÔNG ĐẠT';
    if (msgEl) msgEl.textContent = `Bạn đạt ${averageScore}% (Yêu cầu tối thiểu 80% để đạt). Hãy xem lại các câu chưa chính xác trong bảng đối chiếu bên dưới và bấm "Làm lại từ đầu" để luyện tập lại nhé!`;
    if (iconEl) iconEl.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
    if (evalCard) {
      evalCard.classList.remove('passed');
      evalCard.classList.add('failed');
    }
  }

  // Render question-by-question review table
  const reviewContainer = document.getElementById('recitationReviewListContainer');
  if (reviewContainer) {
    reviewContainer.innerHTML = `
      <div style="font-size: 1rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem; font-family: var(--font-display);">
        <i class="fa-solid fa-list-check" style="color: var(--accent-primary);"></i> BẢNG ĐỐI CHIẾU CHI TIẾT TỪNG CÂU DÀN Ý:
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        ${AppState.recitationQuestions.map((q, i) => {
          const score = AppState.recitationScores[i] || 0;
          const userAns = AppState.recitationUserAnswers[i] || '(Chưa làm)';
          const isPass = score >= 80;
          return `
            <div style="background: var(--bg-inner); border: 1px solid var(--panel-border); border-left: 4px solid ${isPass ? 'var(--success)' : 'var(--danger)'}; border-radius: 12px; padding: 0.85rem 1.15rem; font-size: 0.9rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
                <strong style="color: var(--text-primary);">Câu ${i + 1}: ${escapeHtml(q.cue)}</strong>
                <span style="font-size: 0.78rem; font-weight: 800; padding: 0.15rem 0.55rem; border-radius: 50px; background: ${isPass ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)'}; color: ${isPass ? 'var(--success)' : 'var(--danger)'};">
                  ${score}%
                </span>
              </div>
              <div style="color: var(--text-secondary); margin-bottom: 0.25rem;">
                <span style="color: var(--text-muted); font-size: 0.8rem; font-weight: 700;">Bài làm của bạn:</span> 
                <span style="font-family: var(--font-display);">${escapeHtml(userAns)}</span>
              </div>
              <div style="color: var(--success);">
                <span style="color: var(--text-muted); font-size: 0.8rem; font-weight: 700;">Đáp án chuẩn dàn ý:</span> 
                <strong style="font-family: var(--font-display);">${escapeHtml(q.target)}</strong>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  if (resultBox) resultBox.classList.remove('hidden');
}

function restartRecitation() {
  initRecitationForActiveCategory();
}

function buildSubmissionCardMarkup(sub, isInlinePractice) {
  const ev = sub.evaluation || {};
  const tf = ev.tf || { band: 6.5, strengths: [], improvements: [] };
  const or = ev.or || { band: 6.5, strengths: [], improvements: [] };
  const lr = ev.lr || { band: 6.5, strengths: [], improvements: [] };
  const gra = ev.gra || { band: 6.5, strengths: [], improvements: [] };
  const errors = ev.detectedErrors || [];
  
  // Sentence-by-sentence evaluation (fallback generate if missing)
  let sentences = ev.sentenceEvaluations || [];
  if (sentences.length === 0 && sub.content) {
    const topic = findTopicById(sub.topicId);
    sentences = evaluateSentenceBySentence(sub.content, topic, errors);
  }

  const nExc = sentences.filter(s => s.quality === 'excellent').length;
  const nGood = sentences.filter(s => s.quality === 'good').length;
  const nImp = sentences.filter(s => s.quality === 'needs_improvement').length;
  const nErr = sentences.filter(s => s.quality === 'error').length;

  const topic = findTopicById(sub.topicId);
  const sampleData = topic?.details?.sample_b2 || topic?.sample_b2;
  const sampleTextEn = sampleData?.letter_en || sampleData?.text || '';
  const sampleTextVi = sampleData?.letter_vi || sampleData?.translation || '';
  const sampleWordCount = sampleData?.word_count || (sampleTextEn ? sampleTextEn.replace(/[*_]/g, '').split(/\s+/).filter(Boolean).length : 140);
  const vocabList = topic?.details?.vocab || [];

  const overallBand = Number(ev.overallBand || ((tf.band + or.band + lr.band + gra.band) / 4).toFixed(1));
  const minutes = Math.floor((sub.timeSpentSecs || 0) / 60);
  const seconds = (sub.timeSpentSecs || 0) % 60;

  // Band Score classification
  let scoreClass = 'score-mid';
  let bandStatusText = 'TIỆM CẬN B2 (B1+)';
  if (ev.isPromptCopy) {
    scoreClass = 'score-low';
    bandStatusText = 'SAO CHÉP ĐỀ BÀI (0.0 ĐIỂM)';
  } else if (overallBand >= 7.0) {
    scoreClass = 'score-high';
    bandStatusText = 'ĐẠT CHUẨN VSTEP B2';
  } else if (overallBand >= 5.5) {
    scoreClass = 'score-mid';
    bandStatusText = 'TIỆM CẬN B2 (B1+)';
  } else if (overallBand >= 4.0) {
    scoreClass = 'score-low';
    bandStatusText = 'TRÌNH ĐỘ B1';
  } else {
    scoreClass = 'score-low';
    bandStatusText = 'CHƯA ĐẠT CHUẨN (CẦN VIẾT LẠI)';
  }

  // Teacher comment generator
  let teacherQuote = '';
  if (ev.isPromptCopy) {
    teacherQuote = 'Hệ thống phát hiện bài viết sao chép lại nguyên văn đề bài hoặc các câu hướng dẫn của đề thi. Theo quy chế VSTEP Task 01, phần sao chép đề bài sẽ bị tính 0.0 điểm và không được công nhận kết quả. Bạn hãy tự viết một bức thư hoàn chỉnh theo đúng định dạng nhé!';
  } else if (overallBand >= 7.5 && errors.length <= 2) {
    teacherQuote = 'Bài viết rất xuất sắc! Bố cục mạch lạc chuẩn học thuật, kiểm soát ngữ pháp chặt chẽ và áp dụng hiệu quả chuỗi liên từ chuyển ý chuẩn B2. Bạn đã sẵn sàng tự tin bước vào phòng thi VSTEP!';
  } else if (overallBand >= 6.5) {
    teacherQuote = 'Bài viết đạt yêu cầu cơ bản của mức điểm B2. Nội dung đáp ứng đủ các ý hỏi của đề, cách dùng từ tương đối tự nhiên. Hãy xem kỹ các điểm lưu ý bên dưới để trau chuốt thêm nhé!';
  } else if (sub.wordCount < 60) {
    teacherQuote = 'Bài viết quá ngắn (dưới 60 từ), chưa đủ dung lượng tối thiểu để đánh giá bài thi viết thư VSTEP. Hãy viết ít nhất 120 từ theo tiêu chuẩn phòng thi!';
  } else if (sub.wordCount < 120) {
    teacherQuote = 'Độ dài bài viết chưa đạt mốc 120 từ của tiêu chuẩn bài thi VSTEP Task 01. Hãy mở rộng thêm các chi tiết minh họa và giải thích lý do ở phần thân bài để nâng điểm Task Fulfillment!';
  } else {
    teacherQuote = 'Ý tưởng bài viết tốt nhưng còn mắc một số lỗi về chia thì hoặc diễn đạt chưa chuẩn phong cách thư học thuật. Hãy bấm nút "Viết lại" bên dưới để hoàn thiện và bứt phá điểm số!';
  }

  // B2 Linking Chains check in student's text
  const lowerContent = (sub.content || '').toLowerCase();
  const coNguyetChains = [
    { label: 'When it comes to', found: lowerContent.includes('when it comes to') },
    { label: 'As for', found: lowerContent.includes('as for') },
    { label: 'Regarding', found: lowerContent.includes('regarding') },
    { label: 'Last but not least', found: lowerContent.includes('last but not least') },
    { label: 'First of all', found: lowerContent.includes('first of all') },
    { label: 'To begin with', found: lowerContent.includes('to begin with') },
    { label: 'In addition', found: lowerContent.includes('in addition') },
    { label: 'Besides that', found: lowerContent.includes('besides that') },
    { label: 'Furthermore', found: lowerContent.includes('furthermore') }
  ];
  const matchedChains = coNguyetChains.filter(c => c.found);

  return `
    <div class="submission-review-card fade-in" style="background: transparent; border: none; padding: 0; box-shadow: none;">
      
      <!-- ==============================================================
           1. HERO SCORE BANNER (Chuẩn phong cách vstepspeakingpart1)
           ============================================================== -->
      <div class="eval-hero-banner">
        
        <div class="eval-hero-top">
          <div style="flex: 1; min-width: 280px;">
            <div class="eval-badge-mini">
              <i class="fa-solid fa-award"></i> KẾT QUẢ ĐÁNH GIÁ CHUẨN VSTEP TASK 01
            </div>
            
            <h1 class="eval-hero-title">
              ${escapeHtml(sub.topicTitle)}
            </h1>

            <div class="eval-meta-row">
              <div class="eval-meta-pill">
                <i class="fa-solid fa-user-graduate"></i>
                <span>Học viên: <strong>${escapeHtml(sub.studentName || AppState.student?.name || 'Học viên VSTEP B2')}</strong></span>
              </div>
              <div class="eval-meta-pill">
                <i class="fa-solid fa-chalkboard-user"></i>
                <span>Lớp: <strong>${escapeHtml(sub.className || AppState.student?.className || 'CB206 - Mục tiêu B2')}</strong></span>
              </div>
              <div class="eval-meta-pill">
                <i class="fa-regular fa-calendar-check"></i>
                <span>${formatDateTime(sub.submittedAt)}</span>
              </div>
              <button class="btn btn-export-word" onclick="exportSubmissionToWord('${sub.id}')" style="margin-left: auto;">
                <i class="fa-solid fa-file-word"></i> Xuất file Word (.docx)
              </button>
            </div>
          </div>

          <!-- Overall Score Ring Card -->
          <div class="eval-score-card ${scoreClass}">
            <div class="eval-score-num">
              ${overallBand}
            </div>
            <div class="eval-score-scale">/ 10.0</div>
            <div class="eval-score-band-tag">
              ${bandStatusText}
            </div>
            <button class="btn-confetti-trigger" onclick="shootConfetti()" title="Bắn pháo hoa ăn mừng">
              🎉 Ăn mừng
            </button>
          </div>
        </div>

        <!-- Quick Stats Row -->
        <div class="eval-stats-grid">
          <div class="eval-stat-pill">
            <span class="label">Độ dài:</span>
            <span class="value">${sub.wordCount} / 120 từ</span>
            <i class="fa-solid fa-circle-check" style="color: ${sub.wordCount >= 120 ? 'var(--success)' : 'var(--warning)'}; margin-left: auto;"></i>
          </div>
          <div class="eval-stat-pill">
            <span class="label">Thời gian:</span>
            <span class="value">${minutes}p ${seconds}s</span>
            <i class="fa-solid fa-stopwatch" style="color: var(--accent-primary); margin-left: auto;"></i>
          </div>
          <div class="eval-stat-pill">
            <span class="label">Lỗi phát hiện:</span>
            <span class="value">${errors.length} lỗi</span>
            <i class="fa-solid fa-shield-virus" style="color: ${errors.length === 0 ? 'var(--success)' : 'var(--danger)'}; margin-left: auto;"></i>
          </div>
          <div class="eval-stat-pill">
            <span class="label">Tổng số câu:</span>
            <span class="value">${sentences.length} câu</span>
            <i class="fa-solid fa-list-check" style="color: var(--cyan-light); margin-left: auto;"></i>
          </div>
        </div>

        <!-- Teacher's Comment Box -->
        <div class="eval-teacher-quote">
          <div class="quote-icon"><i class="fa-solid fa-quote-left"></i></div>
          <div class="quote-body">
            <strong>Nhận xét tổng quan của Giáo viên:</strong>
            <p>${teacherQuote}</p>
          </div>
        </div>

      </div>

      <!-- ==============================================================
           2. DETAILED 4-CRITERIA VSTEP B2 BREAKDOWN
           ============================================================== -->
      <div class="eval-interactive-panel">
        
        <div class="eval-panel-header">
          <h3>
            <i class="fa-solid fa-chart-pie"></i> BẢNG ĐIỂM 4 TIÊU CHÍ CHUẨN VSTEP TASK 01
          </h3>
          <p>
            Được đánh giá chi tiết theo khung tham chiếu chấm điểm chính thức của Bộ GD&ĐT dành cho bài thi viết thư VSTEP B2.
          </p>
        </div>

        <div class="eval-criteria-grid">
          
          <!-- TF -->
          <div class="eval-criterion-card">
            <div class="eval-criterion-top">
              <div>
                <span class="eval-criterion-title">1. Task Fulfillment</span>
                <span style="font-size: 0.78rem; color: var(--text-muted); display: block;">Hoàn thành yêu cầu đề bài</span>
              </div>
              <span class="eval-band-badge ${tf.band >= 7 ? 'band-high' : tf.band >= 6 ? 'band-mid' : 'band-low'}">
                Band ${tf.band}
              </span>
            </div>

            <div class="eval-meter-track">
              <div class="eval-meter-fill ${tf.band >= 7 ? 'fill-high' : tf.band >= 6 ? 'fill-mid' : 'fill-low'}" style="width: ${(tf.band / 9) * 100}%;"></div>
            </div>

            <div class="eval-feedback-group">
              <span class="eval-group-heading text-success">
                <i class="fa-solid fa-check"></i> Điểm mạnh:
              </span>
              <ul class="eval-feedback-list">
                ${(tf.strengths || []).map(s => `<li>${escapeHtml(s)}</li>`).join('')}
              </ul>
            </div>

            ${tf.improvements && tf.improvements.length > 0 ? `
              <div class="eval-feedback-group" style="margin-top: 0.65rem;">
                <span class="eval-group-heading text-warning">
                  <i class="fa-solid fa-lightbulb"></i> Cần cải thiện:
                </span>
                <ul class="eval-feedback-list">
                  ${tf.improvements.map(i => `<li>${escapeHtml(i)}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
          </div>

          <!-- OR -->
          <div class="eval-criterion-card">
            <div class="eval-criterion-top">
              <div>
                <span class="eval-criterion-title">2. Organization</span>
                <span style="font-size: 0.78rem; color: var(--text-muted); display: block;">Bố cục & tính liên kết</span>
              </div>
              <span class="eval-band-badge ${or.band >= 7 ? 'band-high' : or.band >= 6 ? 'band-mid' : 'band-low'}">
                Band ${or.band}
              </span>
            </div>

            <div class="eval-meter-track">
              <div class="eval-meter-fill ${or.band >= 7 ? 'fill-high' : or.band >= 6 ? 'fill-mid' : 'fill-low'}" style="width: ${(or.band / 9) * 100}%;"></div>
            </div>

            <div class="eval-feedback-group">
              <span class="eval-group-heading text-success">
                <i class="fa-solid fa-check"></i> Điểm mạnh:
              </span>
              <ul class="eval-feedback-list">
                ${(or.strengths || []).map(s => `<li>${escapeHtml(s)}</li>`).join('')}
              </ul>
            </div>

            <!-- B2 Chains Detector Pill Row -->
            <div style="margin-top: 0.65rem; padding: 0.5rem; background: var(--bg-inner); border-radius: var(--radius-sm); border: 1px solid var(--panel-border);">
              <span style="font-size: 0.75rem; font-weight: 700; color: var(--accent-primary); display: block; margin-bottom: 0.35rem;">
                <i class="fa-solid fa-link"></i> Chuỗi liên từ chuẩn B2 đã dùng:
              </span>
              <div class="eval-chain-tags-row">
                ${matchedChains.length > 0 ? matchedChains.map(c => `
                  <span class="eval-chain-tag tag-found"><i class="fa-solid fa-check"></i> ${c.label}</span>
                `).join('') : '<span style="font-size: 0.76rem; color: var(--text-muted); font-style: italic;">Chưa xuất hiện chuỗi liên từ nâng cao</span>'}
              </div>
            </div>

            ${or.improvements && or.improvements.length > 0 ? `
              <div class="eval-feedback-group" style="margin-top: 0.65rem;">
                <span class="eval-group-heading text-warning">
                  <i class="fa-solid fa-lightbulb"></i> Cần cải thiện:
                </span>
                <ul class="eval-feedback-list">
                  ${or.improvements.map(i => `<li>${escapeHtml(i)}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
          </div>

          <!-- LR -->
          <div class="eval-criterion-card">
            <div class="eval-criterion-top">
              <div>
                <span class="eval-criterion-title">3. Lexical Resource</span>
                <span style="font-size: 0.78rem; color: var(--text-muted); display: block;">Vốn từ & Collocations B2</span>
              </div>
              <span class="eval-band-badge ${lr.band >= 7 ? 'band-high' : lr.band >= 6 ? 'band-mid' : 'band-low'}">
                Band ${lr.band}
              </span>
            </div>

            <div class="eval-meter-track">
              <div class="eval-meter-fill ${lr.band >= 7 ? 'fill-high' : lr.band >= 6 ? 'fill-mid' : 'fill-low'}" style="width: ${(lr.band / 9) * 100}%;"></div>
            </div>

            <div class="eval-feedback-group">
              <span class="eval-group-heading text-success">
                <i class="fa-solid fa-check"></i> Điểm mạnh:
              </span>
              <ul class="eval-feedback-list">
                ${(lr.strengths || []).map(s => `<li>${escapeHtml(s)}</li>`).join('')}
              </ul>
            </div>

            ${lr.improvements && lr.improvements.length > 0 ? `
              <div class="eval-feedback-group" style="margin-top: 0.65rem;">
                <span class="eval-group-heading text-warning">
                  <i class="fa-solid fa-lightbulb"></i> Cần cải thiện:
                </span>
                <ul class="eval-feedback-list">
                  ${lr.improvements.map(i => `<li>${escapeHtml(i)}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
          </div>

          <!-- GRA -->
          <div class="eval-criterion-card">
            <div class="eval-criterion-top">
              <div>
                <span class="eval-criterion-title">4. Grammatical Accuracy</span>
                <span style="font-size: 0.78rem; color: var(--text-muted); display: block;">Ngữ pháp & Đa dạng câu</span>
              </div>
              <span class="eval-band-badge ${gra.band >= 7 ? 'band-high' : gra.band >= 6 ? 'band-mid' : 'band-low'}">
                Band ${gra.band}
              </span>
            </div>

            <div class="eval-meter-track">
              <div class="eval-meter-fill ${gra.band >= 7 ? 'fill-high' : gra.band >= 6 ? 'fill-mid' : 'fill-low'}" style="width: ${(gra.band / 9) * 100}%;"></div>
            </div>

            <div class="eval-feedback-group">
              <span class="eval-group-heading text-success">
                <i class="fa-solid fa-check"></i> Điểm mạnh:
              </span>
              <ul class="eval-feedback-list">
                ${(gra.strengths || []).map(s => `<li>${escapeHtml(s)}</li>`).join('')}
              </ul>
            </div>

            ${gra.improvements && gra.improvements.length > 0 ? `
              <div class="eval-feedback-group" style="margin-top: 0.65rem;">
                <span class="eval-group-heading text-warning">
                  <i class="fa-solid fa-lightbulb"></i> Cần cải thiện:
                </span>
                <ul class="eval-feedback-list">
                  ${gra.improvements.map(i => `<li>${escapeHtml(i)}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
          </div>

        </div>

      </div>

      <!-- ==============================================================
           3. DIAGNOSTIC ERROR CORRECTION (SỬA LỖI TRỰC QUAN)
           ============================================================== -->
      ${errors.length > 0 ? `
        <div class="eval-interactive-panel">
          <div class="eval-panel-header">
            <h3>
              <i class="fa-solid fa-stethoscope"></i> CHẨN ĐOÁN LỖI SAI & PHƯƠNG ÁN SỬA ĐỔI
            </h3>
            <p>
              Phát hiện các lỗi dùng từ, chia thì, chính tả hoặc mạo từ thường gặp trong bài thi VSTEP Task 01.
            </p>
          </div>

          <div class="eval-errors-container">
            ${renderErrorsListMarkup(errors)}
          </div>
        </div>
      ` : ''}

      <!-- ==============================================================
           4. SENTENCE-BY-SENTENCE EVALUATION (ĐÁNH GIÁ TỪNG CÂU CHUẨN VSTEP)
           ============================================================== -->
      <div class="eval-interactive-panel" id="eval-sentences-panel-${sub.id}">
        <div class="eval-panel-header">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; width: 100%;">
            <div>
              <h3>
                <i class="fa-solid fa-list-check" style="color: var(--cyan-light);"></i> ĐÁNH GIÁ & NHẬN XÉT CHI TIẾT TỪNG CÂU (VSTEP TASK 01)
              </h3>
              <p>
                Phân tích cấu trúc, ngữ pháp, từ vựng và gợi ý nâng cấp câu văn chuẩn B2 cho từng câu trong bài viết của bạn.
              </p>
            </div>
            <div style="display: flex; gap: 0.35rem; flex-wrap: wrap;" class="eval-sentence-filters">
              <button class="btn btn-secondary btn-sm active" onclick="filterSubSentences('${sub.id}', 'all', this)">
                Tất cả (${sentences.length})
              </button>
              ${nExc > 0 ? `<button class="btn btn-secondary btn-sm" onclick="filterSubSentences('${sub.id}', 'excellent', this)" style="color: var(--emerald-light);">
                🌟 Xuất sắc (${nExc})
              </button>` : ''}
              ${nGood > 0 ? `<button class="btn btn-secondary btn-sm" onclick="filterSubSentences('${sub.id}', 'good', this)" style="color: var(--cyan-light);">
                ✅ Đạt chuẩn (${nGood})
              </button>` : ''}
              ${nImp > 0 ? `<button class="btn btn-secondary btn-sm" onclick="filterSubSentences('${sub.id}', 'needs_improvement', this)" style="color: var(--amber-light);">
                ⚠️ Cần cải thiện (${nImp})
              </button>` : ''}
              ${nErr > 0 ? `<button class="btn btn-secondary btn-sm" onclick="filterSubSentences('${sub.id}', 'error', this)" style="color: var(--danger);">
                ❌ Có lỗi (${nErr})
              </button>` : ''}
            </div>
          </div>
        </div>

        <div class="eval-sentences-container" id="sentences_container_${sub.id}">
          ${renderSentencesListMarkup(sentences, sub.id)}
        </div>
      </div>

      <!-- ==============================================================
           5. REFERENCE MODEL LETTER (BÀI MẪU THAM KHẢO CHUẨN B2)
           ============================================================== -->
      <div class="eval-interactive-panel">
        <div class="eval-panel-header">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; width: 100%;">
            <div>
              <h3>
                <i class="fa-solid fa-star" style="color: var(--amber-light);"></i> BÀI MẪU THAM KHẢO ĐẠT CHUẨN (BAND 8.0 - 9.0 VSTEP)
              </h3>
              <p>
                Đối chiếu bài làm của bạn với bài mẫu chuẩn B2 của Miss Nguyệt để học hỏi cấu trúc triển khai và từ vựng đắt giá.
              </p>
            </div>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <span class="eval-meta-pill" style="background: rgba(245, 158, 11, 0.15); border-color: rgba(245, 158, 11, 0.3); color: var(--amber-light); font-weight: 800;">
                <i class="fa-solid fa-check-double"></i> ${sampleWordCount} từ (Chuẩn B2)
              </span>
              <button class="btn btn-secondary btn-sm" onclick="toggleSubSampleTranslation('${sub.id}')" style="font-weight: 700;">
                <i class="fa-solid fa-language"></i> <span id="btnSubSampleTransLabel_${sub.id}">Xem dịch tiếng Việt</span>
              </button>
              <button class="btn btn-secondary btn-sm" onclick="copySampleLetterText('${sub.topicId}')" style="font-weight: 700; color: var(--emerald-light); border-color: rgba(16, 185, 129, 0.4);">
                <i class="fa-solid fa-copy"></i> Sao chép bài mẫu
              </button>
            </div>
          </div>
        </div>

        <div class="eval-sample-card">
          <div class="eval-sample-en" id="sub_sample_en_${sub.id}">
            ${formatSampleLetterEnHtml(sampleTextEn)}
          </div>
          <div class="eval-sample-vi" id="sub_sample_vi_${sub.id}" style="display: none;">
            ${formatSampleLetterViHtml(sampleTextVi)}
          </div>
        </div>

        ${vocabList.length > 0 ? `
          <div class="eval-sample-vocab-box">
            <div style="font-size: 0.82rem; font-weight: 800; color: var(--amber-light); margin-bottom: 0.5rem; text-transform: uppercase;">
              <i class="fa-solid fa-tags"></i> TỪ VỰNG & CẤU TRÚC ĐẮT GIÁ TRONG BÀI MẪU:
            </div>
            <div class="eval-sample-vocab-chips">
              ${vocabList.slice(0, 10).map(v => `
                <span class="sample-vocab-chip">
                  <i class="fa-solid fa-star" style="color: var(--amber-light); font-size: 0.72rem;"></i>
                  <strong>${escapeHtml(v.en)}</strong> <em style="opacity: 0.85;">(${escapeHtml(v.vi || '')})</em>
                </span>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>

      <!-- ==============================================================
           6. STUDENT ACADEMIC MANUSCRIPT (NGUYÊN VĂN BÀI VIẾT)
           ============================================================== -->
      <div class="eval-interactive-panel">
        <div class="eval-panel-header">
          <h3>
            <i class="fa-solid fa-feather-pointed"></i> NGUYÊN VĂN BÀI VIẾT CỦA HỌC VIÊN
          </h3>
          <p>
            Bản ghi chính thức được lưu trữ trong hồ sơ học tập của bạn.
          </p>
        </div>

        <div class="eval-manuscript-card">
          <div class="eval-manuscript-meta-bar">
            <div class="eval-manuscript-title">
              <i class="fa-solid fa-envelope-open-text" style="color: var(--accent-primary);"></i>
              <span>${escapeHtml(sub.topicTitle)}</span>
            </div>
            <div style="display: flex; gap: 0.65rem; align-items: center; flex-wrap: wrap;">
              <span class="eval-meta-pill" style="background: var(--bg-card); border-color: var(--panel-border); color: var(--text-primary); font-size: 0.78rem;">
                <i class="fa-solid fa-pen-nib"></i> ${sub.wordCount} từ
              </span>
              <span class="eval-meta-pill" style="background: var(--bg-card); border-color: var(--panel-border); color: var(--text-primary); font-size: 0.78rem;">
                <i class="fa-regular fa-clock"></i> ${minutes}p ${seconds}s
              </span>
            </div>
          </div>

          <div class="eval-manuscript-body" id="sub_text_${sub.id}">
            ${escapeHtml(sub.content)}
          </div>
        </div>

        <!-- Actions Footer -->
        <div class="eval-actions-footer">
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
            <button class="btn btn-export-word" onclick="exportSubmissionToWord('${sub.id}')">
              <i class="fa-solid fa-file-word"></i> Xuất file Word (.docx)
            </button>
            <button class="btn btn-primary" onclick="editSubmissionAgain('${sub.topicId}')" style="font-weight: 700; border-radius: 50px; padding: 0.75rem 1.6rem;">
              <i class="fa-solid fa-rotate-left"></i> Viết lại đề này để nâng Band
            </button>
            <button class="btn btn-secondary" onclick="window.print()" style="font-weight: 600; border-radius: 50px; padding: 0.75rem 1.4rem;">
              <i class="fa-solid fa-print"></i> In kết quả / Lưu PDF
            </button>
          </div>

          <button class="btn btn-secondary" onclick="nextPracticeTopicInCat()" style="font-weight: 700; border-radius: 50px; padding: 0.75rem 1.6rem; border-color: var(--accent-primary); color: var(--accent-primary);">
            <i class="fa-solid fa-arrow-right"></i> Luyện tập đề tiếp theo ›
          </button>
        </div>

      </div>

    </div>
  `;
}


function renderErrorsListMarkup(errors) {
  if (!errors || errors.length === 0) {
    return `
      <div class="eval-perfect-box">
        <i class="fa-solid fa-circle-check"></i>
        <div>
          <h4 style="font-weight: 800; font-size: 1.15rem; margin-bottom: 0.35rem; color: var(--success); font-family: var(--font-display);">
            XUẤT SẮC - KHÔNG PHÁT HIỆN LỖI SAI NGHIÊM TRỌNG NÀO!
          </h4>
          <p style="margin: 0; font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">
            Bài viết của bạn kiểm soát chính tả, mạo từ và các cấu trúc ngữ pháp rất tốt. Độ chính xác cao, chuẩn văn phong học thuật VSTEP B2. Rất đáng khen ngợi!
          </p>
        </div>
      </div>
    `;
  }

  return errors.slice(0, 8).map((e, idx) => `
    <div class="eval-error-card">
      <div class="eval-error-header">
        <div style="display: flex; align-items: center; gap: 0.65rem;">
          <span class="eval-error-cat-pill">${escapeHtml(e.category || 'Ngữ pháp')}</span>
          <span class="eval-error-title">${escapeHtml(e.title)}</span>
        </div>
        <span style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600;">Lỗi #${idx + 1}</span>
      </div>

      <div class="eval-error-diff-grid">
        <div class="eval-diff-box eval-diff-wrong">
          <span style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; display: block; margin-bottom: 0.25rem;">
            <i class="fa-solid fa-xmark"></i> Câu gốc trong bài:
          </span>
          <strong>${escapeHtml(e.quote)}</strong>
        </div>

        <div class="eval-diff-box eval-diff-right">
          <span style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; display: block; margin-bottom: 0.25rem;">
            <i class="fa-solid fa-check"></i> Phương án sửa chuẩn B2:
          </span>
          <strong>${escapeHtml(e.fix)}</strong>
        </div>
      </div>

      ${e.explanation ? `
        <div class="eval-error-explain">
          <i class="fa-solid fa-circle-info"></i>
          <span>${escapeHtml(e.explanation)}</span>
        </div>
      ` : ''}
    </div>
  `).join('');
}

function editSubmissionAgain(topicId) {
  AppState.activePracticeTopicId = topicId;
  const topic = findTopicById(topicId);
  const sub = AppState.submissions.find(s => s.topicId === topicId);

  AppState.activeRevision = {
    topicId,
    originalSubId: sub?.id,
    revisionCount: (sub?.revisionNumber || 1)
  };

  switchWorkflowTab('practice');

  const editorGrid = document.getElementById('practiceEditorGrid');
  const resultContainer = document.getElementById('practiceCompletionResultContainer');
  if (editorGrid) editorGrid.style.display = '';
  if (resultContainer) resultContainer.style.display = 'none';

  const revBanner = document.getElementById('practiceRevisionBanner');
  const revText = document.getElementById('practiceRevisionText');
  if (revBanner) {
    revBanner.style.display = 'flex';
    if (revText) {
      const nextRev = (sub?.revisionNumber || 1) + 1;
      revText.innerHTML = `Bạn đang sửa bài cho đề <strong>"${escapeHtml(topic?.title_vi || topicId)}"</strong> (Lần sửa thứ ${nextRev}). Hãy vận dụng câu nâng cấp B2 và bấm "NỘP BÀI" để nhận phiếu chấm mới!`;
    }
  }

  const textarea = document.getElementById('practiceWritingTextarea');
  if (textarea && sub) {
    textarea.value = sub.content;
    onPracticeTextareaInput();
  }
  if (textarea) {
    textarea.focus();
    textarea.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  showToast('🛠️ Đã mở bài viết ở Chế độ Sửa bài (Revision Mode)!', 'info');
}

function cancelRevisionMode() {
  AppState.activeRevision = null;
  const revBanner = document.getElementById('practiceRevisionBanner');
  if (revBanner) revBanner.style.display = 'none';
  showToast('Đã thoát Chế độ Sửa bài.', 'info');
}

function nextPracticeTopicInCat() {
  const topics = getCategoryTopics(AppState.activeCategory);
  if (!topics || topics.length === 0) return;
  const currentIdx = topics.findIndex(t => t.id === AppState.activePracticeTopicId);
  const nextIdx = (currentIdx + 1) % topics.length;
  selectPracticeTopic(topics[nextIdx].id);
  switchWorkflowTab('practice');
}

// ==========================================================================
// 5. OFFICIAL VSTEP B2 LETTER EVALUATION ENGINE
// ==========================================================================

// ==========================================================================
// BỘ ĐÁNH GIÁ & NHẬN XÉT CHI TIẾT TỪNG CÂU (VSTEP TASK 01 - BAND B2)
// ==========================================================================
function evaluateSentenceBySentence(text, topic, detectedErrors) {
  if (!text || !text.trim()) return [];
  const paragraphs = text.split(/\n+/).map(p => p.trim()).filter(Boolean);
  const rawSentences = [];

  // Xác định dạng thư và văn phong
  const catKey = topic?.category_id || AppState.activeCategory || 'advice';
  const sampleText = topic?.details?.sample_b2?.letter_en || '';
  const isFormal = topic?.recipient_type === 'formal' || /^(dear sir|dear professor|dear mr|dear ms|dear madam|dear hiring)/i.test(sampleText) || /^(dear sir|dear professor|dear mr|dear ms|dear madam|dear hiring)/i.test(text.trim());

  paragraphs.forEach((p, pIdx) => {
    // 1. Check Salutation
    if (/^(dear|hello|hi)\b/i.test(p) && p.split(/\s+/).length <= 5) {
      rawSentences.push({ text: p, pIdx, isGreeting: true });
      return;
    }
    // 2. Check Sign-off block
    if (/^(best wishes|yours sincerely|yours faithfully|best regards|warm regards|warmly|all the best|love|sincerely)/i.test(p)) {
      const parts = p.split(/\n/).map(x => x.trim()).filter(Boolean);
      parts.forEach(part => {
        rawSentences.push({ text: part, pIdx, isSignoff: true });
      });
      return;
    }

    // 3. Regular sentence splitting
    const regex = /[^.!?]+(?:[.!?]+|$)/g;
    let match;
    while ((match = regex.exec(p)) !== null) {
      const s = match[0].trim();
      if (s) rawSentences.push({ text: s, pIdx });
    }
  });

  const total = rawSentences.length;

  return rawSentences.map((s, idx) => {
    const txt = s.text;
    const lower = txt.toLowerCase();
    const words = txt.split(/\s+/).filter(Boolean);
    const wc = words.length;

    let role = "Thân bài - Diễn giải nội dung (Body Content)";
    let roleKey = "body_content";
    let quality = "good";
    let qualityBadge = "Đạt chuẩn B2";
    let feedback = [];
    let upgrade = "";

    // Kiểm tra câu sao chép từ đề bài
    const promptFull = ((topic?.prompt || '') + ' ' + (topic?.context || '')).toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ');
    const normSent = lower.replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
    const isMetaInstruction = /write a letter in response|in your letter you should|write an email to|you should write at least|do not include your name|evaluated in terms of/i.test(normSent);
    const isPromptVerbatim = (normSent.length > 25 && promptFull.includes(normSent));

    if (isMetaInstruction || isPromptVerbatim) {
      return {
        text: txt,
        pIdx: s.pIdx,
        role: "Sao chép đề bài / Hướng dẫn đề thi",
        roleKey: "prompt_copy",
        quality: "error",
        qualityBadge: "Sao chép đề bài",
        feedback: ["Câu này được chép lại từ đề bài hoặc câu hướng dẫn của đề thi ('Write a letter...', 'In your letter, you should:...'). Theo quy chế VSTEP, câu sao chép đề bài không được tính điểm."],
        upgrade: "Hãy tự viết câu mở thư hoặc thân bài của riêng bạn (ví dụ: 'I am writing to express my apologies...' hoặc 'First of all, I would like to...')."
      };
    }

    // A. Phân loại vai trò câu trong bài thi VSTEP Task 01
    if (s.isGreeting || /^(dear|hello|hi)\b/i.test(txt)) {
      role = "Lời chào mở đầu (Salutation)";
      roleKey = "salutation";
    } else if (s.isSignoff || (idx >= total - 2 && wc <= 3 && !/[.!?]$/.test(txt)) || /^(best wishes|yours sincerely|yours faithfully|best regards|warm regards|warmly|all the best|love|sincerely)/i.test(txt)) {
      role = "Ký tên & Kết thúc thư (Sign-off)";
      roleKey = "signoff";
    } else if (idx >= total - 3 && (lower.includes("thank you for your time") || lower.includes("look forward to") || lower.includes("let me know") || lower.includes("write back soon") || lower.includes("really appreciate your help") || lower.includes("feel free to contact") || lower.includes("hope you find") || lower.includes("hope the information") || lower.includes("hope this information") || lower.includes("hope that these issues") || lower.includes("addressed promptly") || lower.includes("hearing from you soon") || lower.includes("apologize once again"))) {
      role = "Lời kết thư & Kỳ vọng (Closing Remark)";
      roleKey = "closing";
    } else if (idx <= 3 && (lower.includes("how are you") || lower.includes("how have you been") || lower.includes("writing to") || lower.includes("writing this") || lower.includes("pleased to") || lower.includes("glad to") || lower.includes("purpose of") || lower.includes("inform you") || lower.includes("in your letter") || lower.includes("happy to share") || lower.includes("provide you with") || lower.includes("asked me to describe") || lower.includes("hope this letter finds you") || lower.includes("express my dissatisfaction") || (lower.includes("thank") && idx === 1))) {
      role = "Mở bài & Nêu mục đích viết thư (Opening & Purpose)";
      roleKey = "opening";
    } else if (/^(because|this is because|in fact|specifically|to be specific|for example|for instance|therefore|as a result|this will|this helps|this allows|this means|so that|moreover|furthermore|in addition)/i.test(txt) || lower.includes("this will allow") || lower.includes("so that you can") || lower.includes("as a consequence")) {
      role = "Giải thích & Mở rộng chi tiết (Reason & Expansion)";
      roleKey = "body_expansion";
    } else if (lower.includes("when it comes to") || lower.includes("as for") || lower.includes("regarding") || lower.includes("first of all") || lower.includes("to begin with") || lower.includes("besides that") || lower.includes("on top of that") || lower.includes("secondly") || lower.includes("last but not least") || lower.includes("firstly") || lower.includes("another key point")) {
      role = "Triển khai luận điểm chính (Body - Main Point)";
      roleKey = "body_main";
    }

    // B. Kiểm tra lỗi ngữ pháp / chính tả đã phát hiện trong câu này
    const sErrors = (detectedErrors || []).filter(e => lower.includes(e.quote.toLowerCase()));

    // C. Đánh giá chất lượng, nhận xét và đề xuất câu viết lại B2
    if (roleKey === "salutation") {
      if (/,$/.test(txt)) {
        quality = "excellent";
        qualityBadge = "Xuất sắc";
        feedback.push("Lời chào đúng quy chuẩn viết thư quốc tế với dấu phẩy ngăn cách.");
      } else {
        quality = "needs_improvement";
        qualityBadge = "Cần cải thiện";
        feedback.push("Nên có dấu phẩy ở cuối lời chào (ví dụ: Dear Helen, hoặc Dear Sir/Madam,).");
        upgrade = txt.replace(/[.,;]?$/, ",");
      }
    } else if (roleKey === "signoff") {
      quality = "good";
      qualityBadge = "Đạt chuẩn B2";
      feedback.push("Lời chào kết thúc phù hợp với văn phong bài thi VSTEP.");
      if (!upgrade && !/,$/.test(txt) && wc > 1) {
        upgrade = txt.replace(/[.,;]?$/, ",");
      }
    } else if (roleKey === "opening") {
      if (lower.includes("writing to") || lower.includes("writing this")) {
        quality = "excellent";
        qualityBadge = "Xuất sắc (Chuẩn B2)";
        feedback.push("Nêu mục đích viết thư rất trực diện, mạch lạc và đúng định hướng yêu cầu đề bài.");
      } else if (lower.includes("thank") || lower.includes("how have you been") || lower.includes("how are you")) {
        quality = "good";
        qualityBadge = "Đạt chuẩn B2";
        feedback.push("Tạo sự kết nối tự nhiên, thân thiện với người nhận thư ngay từ câu đầu.");
      } else {
        quality = "good";
        qualityBadge = "Đạt chuẩn B2";
        feedback.push("Mở bài lịch thiệp, tạo ngữ cảnh giao tiếp tự nhiên.");
      }

      // Upgrade gợi ý theo đúng dạng thư của đề bài
      if (catKey === 'request') {
        upgrade = isFormal ?
          "I am writing to request some information about the course, as I am interested in enrolling and would like to learn more before making a decision." :
          "How have you been lately? I’m writing to ask a few questions about the course, as I’m planning to enroll next month.";
      } else if (catKey === 'advice') {
        upgrade = "Thanks for your letter. How have you been lately? After thinking about your situation, I have a few suggestions that might help.";
      } else if (catKey === 'apology') {
        upgrade = isFormal ?
          "I am writing to apologize for the delay. I understand that this may have caused inconvenience, and I would like to explain the situation." :
          "I’m really sorry for what happened. Let me explain the situation so you can understand.";
      } else if (catKey === 'complaint') {
        upgrade = "I am writing to express my dissatisfaction with this matter. I recently used your facility, and I was disappointed with the experience.";
      } else if (catKey === 'application') {
        upgrade = "I am writing to apply for the position advertised on your official website.";
      } else if (catKey === 'feedback') {
        upgrade = "I am writing to provide feedback on the recent event and share a few suggestions for future improvements.";
      } else if (catKey === 'description') {
        upgrade = isFormal ?
          "I hope this letter finds you well. In your letter, you requested information about this matter, so I am writing to provide you with the relevant details." :
          "How have you been lately? In your letter, you asked me about my friend Hoa, so I’d be happy to share some details with you.";
      } else {
        upgrade = "How have you been lately? I hope everything is going well. In your letter, you asked me about this topic, so here are some details.";
      }
    } else if (roleKey === "closing") {
      if (lower.includes("look forward") || lower.includes("let me know") || lower.includes("really appreciate") || lower.includes("thank you for your time") || lower.includes("feel free to contact")) {
        quality = "excellent";
        qualityBadge = "Xuất sắc (Chuẩn B2)";
        feedback.push("Lời kết thúc tự nhiên, thể hiện rõ thiện chí và sự mong đợi phản hồi.");
      } else {
        quality = "good";
        qualityBadge = "Đạt chuẩn B2";
        feedback.push("Lời nhắn nhủ kết thúc bài viết ngắn gọn, lịch sự.");
      }

      if (catKey === 'request') {
        upgrade = isFormal ?
          "Thank you for your time. I look forward to hearing from you." :
          "I’d really appreciate your help with this. Write back soon.";
      } else if (catKey === 'advice') {
        upgrade = "I hope you find my suggestions helpful. Let me know how things go.";
      } else if (catKey === 'apology') {
        upgrade = isFormal ?
          "I would like to apologize once again for the inconvenience. Thank you for your patience and kind understanding." :
          "I’m really sorry once again. I truly appreciate your understanding. Write back soon.";
      } else if (catKey === 'complaint') {
        upgrade = "I hope that these issues will be addressed promptly. I look forward to hearing from you soon.";
      } else if (catKey === 'application') {
        upgrade = "Thank you for considering my application. I would welcome the opportunity to discuss my qualifications with you in an interview.";
      } else if (catKey === 'description') {
        upgrade = isFormal ?
          "I hope the information provided is helpful. Please feel free to contact me if you require any further details." :
          "I hope you find this information helpful. Let me know if you need any more details.";
      } else {
        upgrade = "I hope you find this information helpful. Let me know if you need any further details.";
      }
    } else {
      // Body evaluation
      if (sErrors.length > 0) {
        quality = "error";
        qualityBadge = "Có lỗi cần sửa";
        feedback.push(`Cần lưu ý: ${sErrors.map(e => e.title + " (" + e.fix + ")").join("; ")}.`);
        upgrade = txt;
        sErrors.forEach(err => {
          if (err.fix && err.quote) {
            upgrade = upgrade.replace(new RegExp(err.quote, "gi"), err.fix);
          }
        });
      } else if (lower.includes("when it comes to") || lower.includes("last but not least") || lower.includes("as for") || lower.includes("regarding") || lower.includes("to begin with") || lower.includes("on top of that") || lower.includes("besides that") || lower.includes("in terms of")) {
        quality = "excellent";
        qualityBadge = "Xuất sắc (Band 8.0 - 9.0)";
        feedback.push("Áp dụng chuỗi liên từ chuyển ý độc quyền chuẩn B2 (To begin with, regarding, in terms of, as for...) rất mượt mà.");
        if (lower.includes("because") || lower.includes("so that") || lower.includes("which") || lower.includes("in order to")) {
          feedback.push("Cấu trúc câu phức cân đối, thể hiện tư duy lập luận logic.");
        }
      } else if (lower.includes("because") || lower.includes("so that") || lower.includes("in order to") || lower.includes("which") || lower.includes("although") || lower.includes("could you please") || lower.includes("would like to")) {
        quality = "good";
        qualityBadge = "Đạt chuẩn B2";
        feedback.push("Sử dụng tốt cấu trúc câu phức / câu hỏi lịch sự chuẩn B2 để củng cố luận điểm.");
      } else if (wc < 7) {
        quality = "needs_improvement";
        qualityBadge = "Câu hơi ngắn";
        feedback.push("Câu hơi ngắn (<7 từ), nên mở rộng thêm mệnh đề chỉ nguyên nhân hoặc mục đích để câu văn giàu thông tin hơn.");
        upgrade = txt.replace(/[.!?]?$/, " because this will allow you to achieve the most favorable outcome.");
      } else if (wc > 32) {
        quality = "needs_improvement";
        qualityBadge = "Câu hơi dài";
        feedback.push("Câu dài trên 30 từ, nên tách thành 2 câu đơn/ghép ngắn hơn để tránh lỗi kéo lê (run-on sentence).");
      } else {
        quality = "good";
        qualityBadge = "Đạt chuẩn B2";
        feedback.push("Diễn đạt rõ ràng, ngữ pháp chính xác và phù hợp ngữ cảnh.");
      }
    }

    return {
      index: idx + 1,
      text: txt,
      role,
      roleKey,
      quality,
      qualityBadge,
      wordCount: wc,
      feedback: feedback.join(" "),
      upgrade: upgrade || ""
    };
  });
}

// Phát hiện bài thi sao chép đề bài
function detectPromptCopying(text, topic) {
  if (!text || !text.trim()) {
    return { isPromptCopy: false, overlapRatio: 0, effectiveWordCount: 0 };
  }

  const promptText = ((topic?.prompt || '') + ' ' + (topic?.context || '')).trim();
  if (!promptText) {
    const wc = text.split(/\s+/).filter(Boolean).length;
    return { isPromptCopy: false, overlapRatio: 0, effectiveWordCount: wc };
  }

  const normText = text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
  const normPrompt = promptText.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();

  const textWords = normText.split(' ').filter(Boolean);
  if (textWords.length === 0) return { isPromptCopy: false, overlapRatio: 0, effectiveWordCount: 0 };

  const metaPhrases = [
    'write a letter in response to', 'write an email to', 'in your letter you should', 'in your email you should',
    'you should write at least', 'do not include your name', 'evaluated in terms of',
    'read part of the letter', 'read part of her letter', 'read part of his letter',
    'you are the hotel manager', 'you recently stayed at', 'you borrowed a book from'
  ];

  let hasMeta = metaPhrases.some(p => normText.includes(p));

  // Đếm số từ trùng 4-gram với đề bài
  let matchedWordsCount = 0;
  for (let i = 0; i <= textWords.length - 4; i++) {
    const quad = textWords.slice(i, i + 4).join(' ');
    if (normPrompt.includes(quad)) {
      matchedWordsCount += 4;
    }
  }

  const overlapRatio = Math.min(1.0, matchedWordsCount / textWords.length);
  const isPromptCopy = (overlapRatio >= 0.35 && textWords.length < 100) || (overlapRatio >= 0.60) || (hasMeta && textWords.length < 80);
  const effectiveWordCount = isPromptCopy ? 0 : Math.max(0, textWords.length - Math.round(matchedWordsCount * 0.4));

  return {
    isPromptCopy,
    overlapRatio: Number(overlapRatio.toFixed(2)),
    hasMeta,
    effectiveWordCount
  };
}

function evaluateVstepLetter(text, topic) {
  const words = text.split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const rawParagraphs = text.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
  const paragraphCount = rawParagraphs.length;
  const lowerText = text.toLowerCase();

  // 0. CHECK PROMPT COPYING (Phát hiện sao chép đề bài)
  const copyCheck = detectPromptCopying(text, topic);
  if (copyCheck.isPromptCopy) {
    return {
      isPromptCopy: true,
      overallBand: 0.0,
      tf: {
        band: 0.0,
        strengths: [],
        improvements: [
          "Bài làm sao chép lại đề bài hoặc câu hướng dẫn của đề thi (0.0 điểm).",
          "Theo quy chế thi VSTEP Task 01, bài làm sao chép đề bài sẽ bị tính 0 điểm và không được công nhận kết quả."
        ]
      },
      or: {
        band: 0.0,
        strengths: [],
        improvements: [
          "Không có bố cục của một bức thư hoàn chỉnh (thiếu lời chào mở đầu Dear..., các đoạn thân bài và lời kết thư)."
        ]
      },
      lr: {
        band: 0.0,
        strengths: [],
        improvements: [
          "Từ vựng sao chép nguyên văn từ đề bài, không được tính vào vốn từ của thí sinh."
        ]
      },
      gra: {
        band: 0.0,
        strengths: [],
        improvements: [
          "Ngữ pháp sao chép từ đề bài, không phản ánh năng lực viết câu của thí sinh."
        ]
      },
      detectedErrors: [],
      sentenceEvaluations: evaluateSentenceBySentence(text, topic, [])
    };
  }

  // Run comprehensive error detector
  const detectedErrors = detectComprehensiveLetterErrors(text);

  const hasSalutation = /^(dear|hello|hi)\b/i.test(text.trim());
  const hasSignOff = /(best wishes|yours sincerely|yours faithfully|best regards|warm regards|warmly|all the best|sincerely)/i.test(lowerText);

  // 1. TASK FULFILLMENT (TF)
  const ideas = topic?.details?.suggested_ideas || [];
  let coveredCount = 0;
  if (ideas.length > 0) {
    ideas.forEach(g => {
      const optWords = (g.options || []).map(o => (o.action_en || "").toLowerCase().split(/\s+/)).flat().filter(w => w.length > 4);
      const matched = optWords.some(w => lowerText.includes(w));
      if (matched) coveredCount++;
    });
  } else {
    coveredCount = 3;
  }

  let tfBand = 6.0;
  let tfStrengths = [];
  let tfImprovements = [];

  if (wordCount < 40) {
    tfBand = 1.0;
    tfImprovements.push("Bài viết quá ngắn (<40 từ), chưa giải quyết các yêu cầu của đề bài.");
  } else if (wordCount < 60) {
    tfBand = 2.0;
    tfImprovements.push("Bài viết dưới 60 từ (chưa đạt một nửa độ dài tối thiểu 120 từ); các yêu cầu hầu như chưa được giải quyết.");
  } else if (wordCount < 80) {
    tfBand = 3.0;
    tfImprovements.push("Bài viết dưới 80 từ, thiếu hơn 35% dung lượng yêu cầu; các ý chính rất sơ sài.");
  } else if (wordCount < 100) {
    tfBand = 4.0;
    tfImprovements.push("Độ dài bài chưa đạt mức tối thiểu 100 từ; nội dung chưa được mở rộng đầy đủ.");
  } else if (wordCount < 120) {
    tfBand = 5.0;
    tfStrengths.push("Đã giải quyết được phần lớn yêu cầu đề bài.");
    tfImprovements.push(`Chưa đạt đủ 120 từ (hiện có ${wordCount} từ); cần viết thêm 15-20 từ để đảm bảo tiêu chuẩn B2.`);
  } else {
    if (hasSalutation && hasSignOff && coveredCount >= 3) {
      if (wordCount >= 140 && detectedErrors.length <= 2) {
        tfBand = 8.0;
        tfStrengths.push("Đáp ứng trọn vẹn mọi yêu cầu của đề bài; ý tưởng mở rộng sắc bén.");
      } else {
        tfBand = 7.0;
        tfStrengths.push(`Đáp ứng đầy đủ 4/4 yêu cầu của đề bài; độ dài tốt (${wordCount}/120 từ).`);
      }
    } else {
      tfBand = 6.0;
      tfStrengths.push(`Đạt độ dài bài viết (${wordCount}/120 từ).`);
      if (!hasSalutation || !hasSignOff) {
        tfImprovements.push("Cần có đầy đủ lời chào mở đầu (Dear...) và lời kết thư (Best regards...).");
      }
    }
  }

  // Format penalty on TF
  if (wordCount >= 60 && !hasSalutation && !hasSignOff) {
    tfBand = Math.min(tfBand, 4.5);
    if (!tfImprovements.some(i => i.includes('lời chào'))) {
      tfImprovements.push("Bài viết chưa có cấu trúc thư chuẩn (thiếu lời chào mở đầu và lời kết thư).");
    }
  }

  // 2. ORGANIZATION (OR)
  const seqLinks = [
    'when it comes to', 'as for', 'regarding', 'last but not least',
    'first of all', 'to begin with', 'firstly', 'secondly', 'second', 'next', 'finally', 'lastly'
  ];
  const advLinks = [
    'besides that', 'on top of that', 'in addition', 'furthermore', 'moreover', 'besides', 'on the other hand', 'therefore', 'consequently'
  ];
  const causeLinks = ['because', 'since', 'as', 'so that', 'although', 'however'];

  const matchedSeq = seqLinks.filter(l => lowerText.includes(l));
  const matchedAdv = advLinks.filter(l => lowerText.includes(l));
  const matchedCause = causeLinks.filter(l => lowerText.includes(l));

  let orBand = 6.0;
  let orStrengths = [];
  let orImprovements = [];

  const usedCoNguyetChain = (lowerText.includes('when it comes to') || lowerText.includes('as for') || lowerText.includes('regarding') || lowerText.includes('on top of that') || lowerText.includes('last but not least'));

  if (wordCount < 40) {
    orBand = 1.0;
    orImprovements.push("Chưa có bố cục đoạn văn hoặc cấu trúc thư.");
  } else if (wordCount < 60) {
    orBand = 2.0;
    orImprovements.push("Bài viết dưới 60 từ, không đủ cấu trúc để tạo thành một bức thư hoàn chỉnh.");
  } else if (wordCount < 80) {
    orBand = 3.0;
    orImprovements.push("Chưa phân đoạn rõ ràng, thiếu liên từ kết nối giữa các ý.");
  } else if (wordCount < 100) {
    orBand = 4.0;
    orImprovements.push("Bố cục chưa cân đối, các đoạn còn ngắn và thiếu chuỗi liên từ chuyển tiếp.");
  } else if (wordCount < 120) {
    orBand = (paragraphCount >= 3 && (matchedSeq.length >= 1 || matchedAdv.length >= 1)) ? 5.5 : 5.0;
    orImprovements.push("Nên mở rộng thêm đoạn văn và áp dụng liên từ B2 để nâng band Organization.");
  } else {
    if (paragraphCount <= 1) {
      orBand = 4.0;
      orImprovements.push("Bài viết dính liền 1 khối; cần phân chia thành 3-4 đoạn (Mở thư, Thân bài, Kết thư).");
    } else if (paragraphCount >= 3) {
      if (usedCoNguyetChain || (matchedSeq.length >= 2 && matchedAdv.length >= 1)) {
        orBand = 8.0;
        orStrengths.push("Áp dụng rất xuất sắc chuỗi liên từ nối chuyển ý chuẩn B2 (First of all, As for, Regarding, Last but not least...).");
      } else if (matchedSeq.length >= 2 || matchedAdv.length >= 2) {
        orBand = 7.5;
        orStrengths.push("Bố cục rõ ràng, chia đoạn hợp lý và sử dụng liên từ nối mượt mà.");
      } else {
        orBand = 6.5;
        orStrengths.push("Bố cục các đoạn văn tương đối hoàn chỉnh.");
        orImprovements.push("Nên áp dụng chuỗi liên từ gợi ý chuẩn B2 (First of all, As for, Regarding, Last but not least) để bài viết mượt mà hơn.");
      }
    } else {
      orBand = 6.0;
    }
  }

  // Format penalty on OR
  if (wordCount >= 60 && !hasSalutation && !hasSignOff) {
    orBand = Math.min(orBand, 4.0);
    if (!orImprovements.some(i => i.includes('kết thư'))) {
      orImprovements.push("Cần bổ sung cấu trúc thư chuẩn (Lời chào mở đầu Dear... và Lời chào kết thư).");
    }
  }

  // 3. LEXICAL RESOURCE (LR)
  const b2VocabList = ['consider', 'recommend', 'advantageous', 'beneficial', 'delighted', 'dissatisfaction', 'inconvenience', 'appreciate', 'sincerely', 'opportunity', 'regarding', 'furthermore', 'apologize', 'complaint', 'refund', 'assistance', 'experience', 'delightful', 'spacious', 'comfortable', 'excellent'];
  const matchedVocab = b2VocabList.filter(v => lowerText.includes(v));

  let lrBand = 6.0;
  let lrStrengths = [];
  let lrImprovements = [];

  if (wordCount < 40) {
    lrBand = 1.0;
    lrImprovements.push("Số lượng từ vựng quá ít, không thể đánh giá vốn từ.");
  } else if (wordCount < 60) {
    lrBand = 2.0;
    lrImprovements.push("Vốn từ vựng rất hạn chế, chỉ có một số từ cơ bản đơn lẻ.");
  } else if (wordCount < 80) {
    lrBand = 3.0;
    lrImprovements.push("Vốn từ vựng đơn giản (trình độ A2), chưa có từ vựng B2 theo chủ đề.");
  } else if (wordCount < 100) {
    lrBand = 4.0;
    lrImprovements.push("Từ vựng còn đơn giản, lặp từ nhiều, cần bổ sung từ vựng theo chủ đề.");
  } else if (wordCount < 120) {
    lrBand = (matchedVocab.length >= 2) ? 5.5 : 5.0;
    lrStrengths.push("Vốn từ vựng ở mức cơ bản B1, cần phát triển thêm để đạt chuẩn B2.");
  } else {
    if (matchedVocab.length >= 4) {
      lrBand = 7.5;
      lrStrengths.push(`Sử dụng tốt từ vựng Band B2 (${matchedVocab.slice(0, 3).join(', ')}...).`);
    } else if (matchedVocab.length >= 2) {
      lrBand = 6.5;
      lrStrengths.push("Vốn từ vựng tương đối phong phú, đúng ngữ cảnh.");
      lrImprovements.push("Nên trau dồi thêm các collocations nâng cao để đạt Band 7+.");
    } else {
      lrBand = 6.0;
      lrImprovements.push("Từ vựng còn đơn giản, nên thay thế các từ cơ bản bằng từ học thuật B2.");
    }
  }

  // 4. GRAMMAR ACCURACY (GRA)
  const hasCond = /if\s+i\s+were\s+you|if\s+you\s+want|if\s+you\s+need/i.test(lowerText);
  const hasRelative = /\b(which|who|that|where)\b/i.test(lowerText);
  const hasPassive = /\b(is|are|was|were|been|being)\s+([a-z]+ed|[a-z]+en)\b/i.test(lowerText);

  let graBand = 6.0;
  let graStrengths = [];
  let graImprovements = [];

  const complexCount = (hasCond ? 1 : 0) + (hasRelative ? 1 : 0) + (hasPassive ? 1 : 0);

  if (wordCount < 40) {
    graBand = 1.0;
    graImprovements.push("Không đủ mẫu câu để đánh giá ngữ pháp.");
  } else if (wordCount < 60) {
    graBand = 2.0;
    graImprovements.push("Chỉ có các cụm từ hoặc câu đơn giản, chưa kiểm soát được câu.");
  } else if (wordCount < 80) {
    graBand = 3.0;
    graImprovements.push("Chủ yếu là câu đơn, chưa có câu ghép hoặc câu phức.");
  } else if (wordCount < 100) {
    graBand = 4.0;
    graImprovements.push("Cấu trúc câu còn đơn điệu, cần đa dạng hóa các mẫu câu B2.");
  } else if (wordCount < 120) {
    graBand = (complexCount >= 1 && detectedErrors.length <= 2) ? 5.5 : 5.0;
  } else {
    if (complexCount >= 2 && detectedErrors.length <= 2) {
      graBand = 7.5;
      graStrengths.push("Sử dụng đa dạng câu ghép, câu phức (mệnh đề quan hệ, câu điều kiện, thể bị động).");
    } else if (detectedErrors.length >= 5) {
      graBand = 5.0;
      graImprovements.push("Còn mắc nhiều lỗi ngữ pháp hoặc chia thì làm ảnh hưởng đến độ chính xác.");
    } else {
      graBand = 6.5;
      graStrengths.push("Kiểm soát ngữ pháp tương đối ổn định.");
      if (detectedErrors.length > 0) {
        graImprovements.push(`Cần lưu ý kiểm tra ${detectedErrors.length} lỗi chính tả / ngữ pháp đã được hệ thống phát hiện.`);
      }
    }
  }

  const overall = Number(((tfBand + orBand + lrBand + graBand) / 4).toFixed(1));

  return {
    overallBand: overall,
    tf: { band: tfBand, strengths: tfStrengths, improvements: tfImprovements },
    or: { band: orBand, strengths: orStrengths, improvements: orImprovements },
    lr: { band: lrBand, strengths: lrStrengths, improvements: lrImprovements },
    gra: { band: graBand, strengths: graStrengths, improvements: graImprovements },
    detectedErrors,
    sentenceEvaluations: evaluateSentenceBySentence(text, topic, detectedErrors)
  };
}

// Error Detection Engine
function detectComprehensiveLetterErrors(text) {
  const errors = [];
  const clean = text.replace(/[\r\t]/g, ' ');

  function addError(cat, title, quote, fix, explanation) {
    if (!errors.some(e => e.quote.toLowerCase() === quote.toLowerCase())) {
      errors.push({ category: cat, title, quote, fix, explanation });
    }
  }

  // 1. Modal verbs + V-ing: should trying, can going
  const modalIngRegex = /\b(should|can|could|must|will|would|may|might)\s+([a-z]+ing)\b/gi;
  let m;
  while ((m = modalIngRegex.exec(clean)) !== null) {
    addError('grammar', 'Động từ khuyết thiếu đi với V-ing', m[0], `${m[1]} + Vo`, 'Sau modal verbs (should, can, could...) phải dùng động từ nguyên thể không "to".');
  }

  // 2. Contractions in formal letters
  if (AppState.activeCategory === 'complaint' || AppState.activeCategory === 'application') {
    const contractRegex = /\b(i'm|don't|can't|won't|it's|didn't)\b/gi;
    while ((m = contractRegex.exec(clean)) !== null) {
      addError('vocab', 'Dùng từ viết tắt trong thư trang trọng', m[0], 'Viết đầy đủ', 'Trong thư Formal tuyệt đối không được viết tắt (dùng I am, do not, cannot...).');
    }
  }

  // 3. Look forward to + Vo instead of V-ing
  const lftRegex = /\blook\s+forward\s+to\s+([a-z]+)\b/gi;
  while ((m = lftRegex.exec(clean)) !== null) {
    if (m[1].toLowerCase() !== 'hearing' && m[1].toLowerCase() !== 'seeing' && !m[1].endsWith('ing') && m[1].toLowerCase() !== 'your') {
      addError('grammar', 'Cấu trúc "look forward to"', m[0], `look forward to + V-ing`, 'Sau "look forward to" bắt buộc phải dùng V-ing hoặc danh từ (ví dụ: look forward to hearing from you).');
    }
  }

  return errors;
}

// ==========================================================================
// 6. SCREEN 1: RENDER OVERVIEW SCREEN (BENTO DASHBOARD & SUB-TABS)
// ==========================================================================
function switchOverviewSubTab(subTab) {
  if (!subTab) subTab = 'strategy';
  AppState.overviewSubTab = subTab;
  document.querySelectorAll('#overviewSubTabNav .tab-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`ov-tab-${subTab}`);
  if (activeBtn) activeBtn.classList.add('active');

  const modules = document.querySelectorAll('#screen-overview .ov-module');
  modules.forEach(mod => {
    const group = mod.getAttribute('data-ov-group');
    if (group === subTab) {
      mod.style.display = '';
    } else {
      mod.style.display = 'none';
    }
  });
}

function renderOverviewScreen() {
  if (typeof OVERVIEW_THEORY === 'undefined') return;

  switchOverviewSubTab(AppState.overviewSubTab || 'strategy');

  // 1. Time Strategy (3 - 14 - 3)
  const stratContainer = document.getElementById('overview-time-strategy-container');
  if (stratContainer && OVERVIEW_THEORY.time_strategy) {
    const badgeClasses = ['step-badge-cyan', 'step-badge-violet', 'step-badge-emerald'];
    const borderColors = ['var(--cyan-border)', 'var(--violet-border)', 'var(--emerald-border)'];
    const pillClasses = ['hl-cyan', 'hl-violet', 'hl-emerald'];
    const timeLabels = ['3 Phút đầu (15%)', '14 Phút trọng tâm (70%)', '3 Phút cuối (15%)'];

    stratContainer.innerHTML = OVERVIEW_THEORY.time_strategy.map((st, idx) => `
      <div style="background: var(--bg-inner); border: 1px solid ${borderColors[idx % 3]}; border-radius: var(--radius-lg); padding: 1rem 1.2rem; box-shadow: var(--shadow-sm);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.6rem;">
          <span class="step-badge-3d ${badgeClasses[idx % 3]}">
            <i class="fa-solid ${st.icon || 'fa-clock'}"></i> ${escapeHtml(st.phase)}
          </span>
          <span class="hl-pill ${pillClasses[idx % 3]}">${timeLabels[idx % 3]}</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.85rem; color: var(--text-secondary);">
          ${st.tasks.map(t => `
            <div style="display: flex; align-items: flex-start; gap: 0.45rem;">
              <i class="fa-solid fa-circle-check" style="color: var(--emerald-light); margin-top: 0.25rem; flex-shrink: 0;"></i>
              <span>${escapeHtml(t)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // 2. 4 Official VSTEP Criteria Grid (2x2 Bento)
  const critContainer = document.getElementById('overview-criteria-container');
  if (critContainer && OVERVIEW_THEORY.criteria) {
    const themes = [
      { border: 'f-color-1', badge: 'hl-cyan', icon: 'fa-bullseye', color: 'var(--cyan-light)' },
      { border: 'f-color-5', badge: 'hl-violet', icon: 'fa-sitemap', color: 'var(--violet-light)' },
      { border: 'f-color-2', badge: 'hl-emerald', icon: 'fa-spell-check', color: 'var(--emerald-light)' },
      { border: 'f-color-3', badge: 'hl-amber', icon: 'fa-wand-magic-sparkles', color: 'var(--amber-light)' }
    ];

    critContainer.innerHTML = OVERVIEW_THEORY.criteria.map((cr, idx) => {
      const th = themes[idx % 4];
      return `
        <div class="formula-item ${th.border}" style="padding: 1.25rem 1.4rem;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="hl-pill ${th.badge}" style="font-size: 0.78rem; padding: 0.25rem 0.65rem;">
                <i class="fa-solid ${th.icon}"></i> Tiêu chí 0${idx + 1} • Trọng số ${escapeHtml(cr.weight)}
              </span>
              <span class="hl-pill hl-emerald">${escapeHtml(cr.b2_target)}</span>
            </div>
            <h4 style="font-size: 1.05rem; font-weight: 900; color: ${th.color}; margin-bottom: 0.35rem;">
              ${escapeHtml(cr.title)}
            </h4>
            <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 0.75rem;">${escapeHtml(cr.description)}</p>
            <div style="display: flex; flex-direction: column; gap: 0.38rem; font-size: 0.84rem; color: var(--text-secondary);">
              ${cr.requirements.map(r => `
                <div style="display: flex; align-items: flex-start; gap: 0.45rem;">
                  <span style="color: ${th.color}; font-weight: 900;">✔</span>
                  <span>${escapeHtml(r)}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 3. Register Comparison Table (Informal vs Formal)
  const regTbody = document.getElementById('overview-register-tbody');
  if (regTbody && OVERVIEW_THEORY.register_matrix) {
    regTbody.innerHTML = OVERVIEW_THEORY.register_matrix.map((row, idx) => {
      const isContractionRow = row.element.includes('viết tắt');
      return `
        <tr style="border-bottom: 1px solid var(--panel-border); background: ${idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)'};">
          <td style="padding: 0.9rem 1.25rem; font-weight: 800; color: var(--amber-light);">
            ${escapeHtml(row.element)}
          </td>
          <td style="padding: 0.9rem 1.25rem; color: var(--text-primary);">
            ${isContractionRow
              ? `<span class="hl-pill hl-emerald" style="font-size: 0.82rem;"><i class="fa-solid fa-check"></i> ${escapeHtml(row.informal)}</span>`
              : `<span style="color: var(--cyan-light); font-weight: 600;">${escapeHtml(row.informal)}</span>`
            }
          </td>
          <td style="padding: 0.9rem 1.25rem; color: var(--text-primary);">
            ${isContractionRow
              ? `<span class="hl-pill hl-rose" style="font-size: 0.82rem;"><i class="fa-solid fa-ban"></i> ${escapeHtml(row.formal)}</span>`
              : `<span style="color: var(--violet-light); font-weight: 600;">${escapeHtml(row.formal)}</span>`
            }
          </td>
        </tr>
      `;
    }).join('');
  }

  // 4. Connectors Bank (3 Exclusive Chains for Band B2)
  const connContainer = document.getElementById('overview-connectors-container');
  if (connContainer && OVERVIEW_THEORY.connectors_bank) {
    const cb = OVERVIEW_THEORY.connectors_bank;
    const chains = [
      {
        title: '1. Chuỗi liên từ Thư Cho Lời Khuyên (Advice)',
        pill: 'hl-emerald',
        pillText: 'Informal',
        items: cb.advice_chain || []
      },
      {
        title: '2. Chuỗi liên từ Thư Yêu Cầu (Thân mật)',
        pill: 'hl-cyan',
        pillText: 'Informal Request',
        items: cb.request_informal_chain || []
      },
      {
        title: '3. Chuỗi liên từ Thư Yêu Cầu (Trang trọng)',
        pill: 'hl-violet',
        pillText: 'Formal Request',
        items: cb.request_formal_chain || []
      }
    ];

    connContainer.innerHTML = chains.map(ch => `
      <div class="connector-flow-box" style="padding: 0.95rem 1.15rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <strong style="color: var(--text-primary); font-size: 0.88rem;">${escapeHtml(ch.title)}</strong>
          <span class="hl-pill ${ch.pill}">${escapeHtml(ch.pillText)}</span>
        </div>
        <div class="connector-chain-nodes" style="margin-top: 0.35rem;">
          ${ch.items.map((item, idx) => `
            <span class="flow-node-3d" title="${escapeHtml(item.vi)}">
              <span class="flow-node-num">${idx + 1}</span>
              <span>${escapeHtml(item.en)}</span>
            </span>
            ${idx < ch.items.length - 1 ? '<i class="fa-solid fa-arrow-right flow-arrow"></i>' : ''}
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // 5. Pitfalls (5 Fatal Mistakes)
  const pitContainer = document.getElementById('overview-pitfalls-container');
  if (pitContainer && OVERVIEW_THEORY.pitfalls) {
    pitContainer.innerHTML = OVERVIEW_THEORY.pitfalls.map(p => `
      <div style="background: linear-gradient(145deg, rgba(244, 63, 94, 0.1), var(--bg-inner)); border: 1px solid var(--rose-border); border-left: 4px solid var(--rose-light); border-radius: var(--radius-md); padding: 0.85rem 1.1rem; box-shadow: var(--shadow-sm);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem;">
          <h4 style="font-size: 0.92rem; font-weight: 800; color: var(--rose-light); margin: 0;">
            <i class="fa-solid fa-circle-xmark"></i> ${escapeHtml(p.title)}
          </h4>
        </div>
        <p style="font-size: 0.83rem; color: var(--text-secondary); margin: 0; line-height: 1.5;">${escapeHtml(p.desc)}</p>
      </div>
    `).join('');
  }
}

// ==========================================================================
// 7. SCREEN 3 & 4: ALL SUBMISSIONS & ALL DRAFTS
// ==========================================================================
function renderAllSubmissionsScreen() {
  const container = document.getElementById('allSubmissionsListContainer');
  if (!container) return;

  if (AppState.submissions.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 4rem 1.5rem; background: var(--bg-card); border-radius: var(--radius-xl); border: 1px solid var(--panel-border);">
        <i class="fa-solid fa-folder-open" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
        <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">CHƯA CÓ BÀI NỘP NÀO</h3>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem; font-size: 0.9rem;">
          Bạn chưa nộp bài viết nào. Hãy chọn một dạng thư bất kỳ ở thanh bên trái và bắt đầu làm bài!
        </p>
        <button class="btn btn-primary" onclick="selectCategory('advice')">
          <i class="fa-solid fa-pen-nib"></i> Luyện viết thư đầu tiên
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = AppState.submissions.map(sub => buildSubmissionCardMarkup(sub)).join('');
}

function renderAllDraftsScreen() {
  const container = document.getElementById('allDraftsListContainer');
  if (!container) return;

  const draftKeys = Object.keys(AppState.drafts);
  if (draftKeys.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 4rem 1.5rem; background: var(--bg-card); border-radius: var(--radius-xl); border: 1px solid var(--panel-border);">
        <i class="fa-solid fa-floppy-disk" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
        <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">KHÔNG CÓ BẢN NHÁP NÀO</h3>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem; font-size: 0.9rem;">
          Khi đang viết bài ở tab Thực hành, bấm nút "Lưu nháp" để lưu lại tiến độ viết dở của bạn tại đây.
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = draftKeys.map(k => {
    const d = AppState.drafts[k];
    const words = d.content ? d.content.split(/\s+/).filter(Boolean).length : 0;
    return `
      <div class="theory-card" style="margin-bottom: 1rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
          <div>
            <span class="category-tag" style="background: rgba(99,102,241,0.15); color: var(--accent-primary); font-size: 0.75rem;">
              ${d.categoryKey ? d.categoryKey.toUpperCase() : 'B2 LEVEL'}
            </span>
            <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--text-primary); margin: 0.35rem 0;">
              ${escapeHtml(d.topicTitle || 'Bản nháp')}
            </h3>
            <div style="font-size: 0.8rem; color: var(--text-muted);">
              Đã lưu lúc: ${formatDateTime(d.savedAt)} • ${words} từ
            </div>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-primary btn-sm" onclick="resumeDraftAction('${d.categoryKey}', '${d.topicId}')">
              <i class="fa-solid fa-pen"></i> Viết tiếp
            </button>
            <button class="btn btn-secondary btn-sm" onclick="deleteDraftAction('${k}')">
              <i class="fa-solid fa-trash"></i> Xóa
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function resumeDraftAction(catKey, topicId) {
  selectCategory(catKey);
  AppState.activePracticeTopicId = topicId;
  switchWorkflowTab('practice');
}

function deleteDraftAction(draftKey) {
  if (confirm('Bạn có chắc muốn xóa bản nháp này?')) {
    delete AppState.drafts[draftKey];
    localStorage.setItem('vstep_b2_task1_drafts', JSON.stringify(AppState.drafts));
    renderAllDraftsScreen();
    showToast('Đã xóa bản nháp.', 'info');
  }
}

function exportSubmissionsHistoryAction() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(AppState.submissions, null, 2));
  const dlAnchor = document.createElement('a');
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", `vstep_b2_submissions_${Date.now()}.json`);
  dlAnchor.click();
}

// ==========================================================================
// 8. AUDIO SYNTHESIZER: AMBIENT RAIN & SOUNDS (WEB AUDIO API)
// ==========================================================================
function getAudioContext() {
  if (!AppState.audioCtx) {
    const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
    if (AudioCtxClass) AppState.audioCtx = new AudioCtxClass();
  }
  if (AppState.audioCtx && AppState.audioCtx.state === 'suspended') {
    AppState.audioCtx.resume();
  }
  return AppState.audioCtx;
}

function toggleAmbientRainSound() {
  const btn = document.getElementById('ambientRainBtn');
  const ctx = getAudioContext();
  if (!ctx) return;

  if (AppState.ambientRainNode) {
    try {
      AppState.ambientRainGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);
      setTimeout(() => {
        if (AppState.ambientRainNode) {
          AppState.ambientRainNode.stop();
          AppState.ambientRainNode.disconnect();
          AppState.ambientRainNode = null;
        }
      }, 450);
    } catch (e) {
      AppState.ambientRainNode = null;
    }
    if (btn) {
      btn.innerHTML = '<i class="fa-solid fa-cloud-rain"></i> Tiếng mưa';
      btn.classList.remove('btn-ambient-active');
    }
    showToast('Đã tắt tiếng mưa.', 'info');
  } else {
    try {
      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        data[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = data[i];
        data[i] *= 3.0;
      }

      AppState.ambientRainNode = ctx.createBufferSource();
      AppState.ambientRainNode.buffer = buffer;
      AppState.ambientRainNode.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, ctx.currentTime);

      AppState.ambientRainGain = ctx.createGain();
      AppState.ambientRainGain.gain.setValueAtTime(0.0001, ctx.currentTime);
      AppState.ambientRainGain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 1.0);

      AppState.ambientRainNode.connect(filter);
      filter.connect(AppState.ambientRainGain);
      AppState.ambientRainGain.connect(ctx.destination);
      AppState.ambientRainNode.start();

      if (btn) {
        btn.innerHTML = '<i class="fa-solid fa-cloud-rain"></i> Đang mưa 🌧';
        btn.classList.add('btn-ambient-active');
      }
      showToast('Đã bật tiếng mưa êm dịu giúp bạn tập trung!', 'success');
    } catch (e) {
      console.error(e);
      showToast('Thiết bị chưa hỗ trợ Web Audio.', 'warning');
    }
  }
}

function playSuccessChime() {
  if (!AppState.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0.12, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.25);
    });
  } catch (e) {}
}

function playFanfare() {
  if (!AppState.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.1);
      gain.gain.setValueAtTime(0.12, now + idx * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.1);
      osc.stop(now + idx * 0.1 + 0.4);
    });
  } catch (e) {}
}

function playPopSound() {
  if (!AppState.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(500, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.04);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.05);
  } catch (e) {}
}

// --------------------------------------------------------------------------
// ZEN WRITING MODE
// --------------------------------------------------------------------------
function toggleZenWritingMode() {
  const isZen = document.body.classList.toggle('zen-mode-active');
  const btn = document.getElementById('zenModeBtn');
  if (btn) {
    btn.innerHTML = isZen ? '<i class="fa-solid fa-compress"></i> Thoát Zen' : '<i class="fa-solid fa-expand"></i> Zen Mode';
  }
  showToast(isZen ? 'Đã bật chế độ Zen toàn màn hình tập trung!' : 'Đã thoát chế độ Zen.', 'info');
}

// --------------------------------------------------------------------------
// MOBILE SIDEBAR DRAWER & BACKDROP
// --------------------------------------------------------------------------
function toggleMobileSidebar() {
  const sb = document.getElementById('mainSidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (!sb) return;
  const isOpen = sb.classList.toggle('mobile-open');
  if (backdrop) backdrop.classList.toggle('active', isOpen);
  if (isOpen) {
    document.body.classList.add('mobile-drawer-active');
  } else {
    document.body.classList.remove('mobile-drawer-active');
  }
}

function closeMobileSidebar() {
  const sb = document.getElementById('mainSidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (sb) sb.classList.remove('mobile-open');
  if (backdrop) backdrop.classList.remove('active');
  document.body.classList.remove('mobile-drawer-active');
}

// Lắng nghe phím ESC để đóng Mobile Sidebar nếu đang mở
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMobileSidebar();
  }
});

// --------------------------------------------------------------------------
// STUDENT MODAL & PROFILE
// --------------------------------------------------------------------------
function openStudentModal() {
  const modal = document.getElementById('studentProfileModal');
  const nameInput = document.getElementById('modalStudentNameInput');
  const classInput = document.getElementById('modalStudentClassInput');
  if (modal) modal.style.display = 'flex';
  if (nameInput) nameInput.value = AppState.student.name || '';
  if (classInput) classInput.value = AppState.student.className || '';
}

function closeStudentModal() {
  const modal = document.getElementById('studentProfileModal');
  if (modal) modal.style.display = 'none';
}

function saveStudentModalProfile() {
  const nameInput = document.getElementById('modalStudentNameInput');
  const classInput = document.getElementById('modalStudentClassInput');
  
  const name = nameInput ? nameInput.value.trim() : '';
  const className = classInput ? classInput.value.trim() : '';
  
  if (name) AppState.student.name = name;
  if (className) AppState.student.className = className;
  
  try {
    localStorage.setItem('vstep_b2_task1_student', JSON.stringify(AppState.student));
  } catch (e) {}

  updateStudentDisplay();
  updatePracticeCopyPasteBadge();
  updateSidebarCategoryLockUI();
  closeStudentModal();
  showToast('Đã cập nhật thông tin học viên!', 'success');
}

function updateStudentDisplay() {
  const nameDisplay = document.getElementById('studentNameDisplay');
  if (nameDisplay && AppState.student.name) {
    nameDisplay.textContent = AppState.student.name;
  }
}

// --------------------------------------------------------------------------
// CATEGORY TOPICS MODAL (DANH SÁCH ĐỀ THI RIÊNG CHO TỪNG DẠNG THƯ)
// --------------------------------------------------------------------------
function openCategoryTopicsModal() {
  const modal = document.getElementById('categoryTopicsModal');
  const titleEl = document.getElementById('categoryTopicsModalTitle');
  const gridEl = document.getElementById('categoryTopicsModalGrid');
  if (!modal || !gridEl) return;

  const catKey = AppState.activeCategory;
  const cat = CATEGORY_MAP[catKey];
  const catData = (typeof LETTERS_DATA !== 'undefined') ? LETTERS_DATA.find(c => c.category_id === catKey) : null;
  const topics = (catData && catData.topics) ? catData.topics : [];

  if (titleEl) {
    const catName = cat ? cat.title_vi.toUpperCase() : 'CHUYÊN ĐỀ';
    titleEl.innerHTML = `
      <i class="fa-solid ${cat ? cat.icon : 'fa-folder-open'}" style="color: var(--cyan-light);"></i>
      DANH SÁCH ĐỀ THI • ${catName} (${topics.length} ĐỀ)
    `;
  }

  gridEl.innerHTML = topics.map((t, idx) => {
    const isCurrent = t.id === AppState.activePracticeTopicId;
    return `
      <div class="topic-modal-card ${isCurrent ? 'selected-current-topic' : ''}" onclick="selectTopicFromCategoryModal('${t.id}')">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <span class="hl-pill hl-cyan">
            <i class="fa-solid fa-file-signature"></i> Đề ${String(idx + 1).padStart(2, '0')}
          </span>
          <span style="font-size: 0.74rem; font-weight: 700; color: var(--emerald-light);">
            ${escapeHtml(t.recipient_type || 'Chuẩn B2')}
          </span>
        </div>
        <h4 style="font-size: 0.92rem; font-weight: 800; color: var(--text-primary); margin: 0 0 0.25rem 0; line-height: 1.4;">
          ${escapeHtml(t.title_vi || t.title_en)}
        </h4>
        <div style="font-size: 0.78rem; color: var(--text-muted); font-style: italic; margin-bottom: 0.45rem;">
          ${escapeHtml(t.title_en)}
        </div>
        <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5; margin: 0 0 0.85rem 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
          ${escapeHtml((t.context || t.prompt || '').replace(/\*\*/g, ''))}
        </p>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 0.5rem; border-top: 1px solid var(--panel-border);">
          <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600;">
            <i class="fa-solid fa-feather"></i> 120+ từ (VSTEP B2)
          </span>
          <button class="btn btn-primary btn-sm" style="padding: 0.22rem 0.65rem; font-size: 0.74rem;">
            ${isCurrent ? 'Đang viết đề này' : 'Luyện viết đề này ›'}
          </button>
        </div>
      </div>
    `;
  }).join('');

  modal.style.display = 'flex';
}

function closeCategoryTopicsModal() {
  const modal = document.getElementById('categoryTopicsModal');
  if (modal) modal.style.display = 'none';
}

function selectTopicFromCategoryModal(topicId) {
  closeCategoryTopicsModal();
  onPracticeTopicChange(topicId);
  const topic = findTopicById(topicId);
  showToast(`Đã chọn: ${topic?.title_vi || topic?.title_en || 'Đề thi'}`, 'success');
}

// --------------------------------------------------------------------------
// HELPERS
// --------------------------------------------------------------------------
function findTopicById(topicId) {
  if (typeof LETTERS_DATA === 'undefined') return null;
  for (const cat of LETTERS_DATA) {
    if (cat.topics) {
      const found = cat.topics.find(t => t.id === topicId);
      if (found) {
        if (!found.category_id) found.category_id = cat.category_id;
        return found;
      }
    }
  }
  return null;
}

function showToast(msg, type = 'info') {
  const toast = document.getElementById('toastNotification');
  const msgEl = document.getElementById('toastMsg');
  const iconEl = document.getElementById('toastIcon');
  if (!toast || !msgEl) return;

  msgEl.textContent = msg;
  if (iconEl) {
    iconEl.className = type === 'success' ? 'fa-solid fa-circle-check' : (type === 'warning' ? 'fa-solid fa-triangle-exclamation' : 'fa-solid fa-circle-info');
    iconEl.style.color = type === 'success' ? 'var(--success)' : (type === 'warning' ? 'var(--warning)' : 'var(--accent-primary)');
  }

  toast.style.display = 'flex';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 3200);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function capitalize(s) {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function formatDateTime(isoStr) {
  if (!isoStr) return '';
  try {
    const d = new Date(isoStr);
    return `${d.toLocaleDateString('vi-VN')} ${d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}`;
  } catch (e) {
    return isoStr;
  }
}


// ==========================================================================
// TAB: GỢI Ý Ý TƯỞNG & CÂU MỞ RỘNG (EXPANDED IDEAS STRATEGY)
// ==========================================================================
function openPracticeIdeasModal() {
  const modal = document.getElementById('practiceIdeasModalOverlay');
  const titleEl = document.getElementById('practiceIdeasModalTitle');
  const subEl = document.getElementById('practiceIdeasModalSub');
  const bodyEl = document.getElementById('practiceIdeasModalBody');
  if (!modal || !bodyEl) return;

  const topicId = AppState.activePracticeTopicId;
  const topic = findTopicById(topicId);
  const catKey = AppState.activeCategory;

  if (titleEl && topic) {
    const cleanTitle = topic.title_vi ? topic.title_vi.replace(/^Đề\s*\d+\s*:\s*/i, '') : (topic.title_en || '');
    titleEl.innerHTML = `
      <i class="fa-solid fa-lightbulb" style="color: var(--amber-light);"></i>
      GỢI Ý Ý TƯỞNG & CÂU MỞ RỘNG B2 • ${escapeHtml(cleanTitle)}
    `;
  }

  if (subEl && topic) {
    subEl.textContent = `Triển khai chi tiết cho ${topic.title_vi || 'đề thi này'}: Ý chính (Action) ➔ Lý do (Reason) ➔ Câu mở rộng 1 & 2 (Expansion).`;
  }

  const ideas = topic?.details?.suggested_ideas || [];
  bodyEl.innerHTML = buildIdeasCardsHtml(ideas, false, catKey);

  modal.style.display = 'flex';
}

function closePracticeIdeasModal() {
  const modal = document.getElementById('practiceIdeasModalOverlay');
  if (modal) modal.style.display = 'none';
}

function copyIdeaText(text) {
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
    if (typeof showToast === 'function') {
      showToast('📋 Đã sao chép câu vào bộ nhớ tạm!', 'success');
    }
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    if (typeof showToast === 'function') {
      showToast('📋 Đã sao chép câu vào bộ nhớ tạm!', 'success');
    }
  });
}

function buildIdeasCardsHtml(ideas, isCompact, catKey) {
  if (!ideas || ideas.length === 0) {
    return '<div style="color: var(--text-muted); font-size: 0.88rem; padding: 1.5rem; text-align: center;">Đang cập nhật gợi ý ý tưởng cho đề này.</div>';
  }

  const isComplaint = (catKey === 'complaint');

  return ideas.map((group, gIdx) => {
    const groupTitleEn = group.title_en || `Requirement ${gIdx + 1}`;
    const groupTitleVi = group.title_vi || '';
    const icon = group.icon || 'fa-lightbulb';
    const patternEn = group.pattern_en;
    const patternVi = group.pattern_vi;
    const vocabList = group.vocab || [];
    const note = group.note;

    return `
      <div class="ideas-group-card ${isCompact ? 'compact' : ''}">
        <div class="ideas-group-header">
          <div class="ideas-group-title">
            <i class="fa-solid ${icon}"></i>
            <span>${escapeHtml(groupTitleEn)}</span>
            ${groupTitleVi ? `<span style="font-size: 0.92rem; font-weight: normal; color: var(--text-muted);">(${escapeHtml(groupTitleVi)})</span>` : ''}
          </div>
          <span class="hl-pill hl-cyan" style="font-size: 0.74rem;">
            ${(group.options || []).length} Gợi ý phát triển
          </span>
        </div>

        ${patternEn ? `
          <div style="background: rgba(99,102,241,0.08); border: 1px solid rgba(99,102,241,0.22); border-radius: var(--radius-sm); padding: 0.75rem 1rem; margin-bottom: 0.85rem; font-size: 0.86rem;">
            <div style="font-weight: 700; color: var(--violet-light); margin-bottom: 0.25rem;">
              <i class="fa-solid fa-code"></i> Cấu trúc câu chuẩn B2:
            </div>
            <div style="color: var(--text-primary); font-weight: 600;">${escapeHtml(patternEn)}</div>
            ${patternVi ? `<div style="color: var(--text-muted); font-style: italic; margin-top: 0.2rem;">(${escapeHtml(patternVi)})</div>` : ''}
          </div>
        ` : ''}

        ${vocabList.length > 0 ? `
          <div style="margin-bottom: 0.85rem;">
            <span style="font-size: 0.78rem; font-weight: 700; color: var(--amber-light);">
              <i class="fa-solid fa-tags"></i> Từ vựng tính cách ăn điểm B2:
            </span>
            <div class="ideas-vocab-chips">
              ${vocabList.map(v => `
                <span class="ideas-vocab-chip" title="${escapeHtml(v.vi)}">
                  <strong>${escapeHtml(v.en)}</strong> (${escapeHtml(v.vi)})
                </span>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${isComplaint ? `
          <div style="background: rgba(239, 68, 68, 0.07); border: 1px solid rgba(239, 68, 68, 0.25); border-radius: var(--radius-sm); padding: 0.6rem 0.85rem; margin-bottom: 0.85rem; font-size: 0.83rem; color: var(--text-primary); line-height: 1.55;">
            <strong style="color: var(--rose-light);"><i class="fa-solid fa-circle-exclamation"></i> Quy tắc triển khai Thư phàn nàn:</strong> Mỗi ý gồm <strong>1 Cặp câu ở Thân thư 1</strong> (Câu 1: Vấn đề chính + Câu 2: Mô tả cụ thể / Hậu quả) và <strong>1 câu Đề xuất giải pháp</strong> dành cho Thân thư 3.
          </div>
        ` : ''}

        ${note ? `
          <div class="ideas-group-note">
            <i class="fa-solid fa-circle-info" style="color: var(--cyan-light); margin-right: 0.35rem;"></i> ${escapeHtml(note)}
          </div>
        ` : ''}

        <div class="ideas-options-list">
          ${(group.options || []).map((opt, optIdx) => {
            const actEn = opt.action_en || opt.problem_en || '';
            const actVi = opt.action_vi || opt.problem_vi || '';
            const rsnEn = opt.reason_en || opt.impact_en || '';
            const rsnVi = opt.reason_vi || opt.impact_vi || '';

            let solEn = opt.solution_en || '';
            let solVi = opt.solution_vi || '';
            let exp1En = opt.expansion_1_en || '';
            let exp1Vi = opt.expansion_1_vi || '';
            let exp2En = opt.expansion_2_en || '';
            let exp2Vi = opt.expansion_2_vi || '';

            // Kiểm tra nếu expansion_1_en thực chất là câu giải pháp B2
            const isSolSentence = (str) => /^(I would appreciate it if you could|I strongly recommend|I would like to suggest|I suggest that you|I believe that steps should be taken to|I recommend that)\b/i.test(str || '');
            if (!solEn && isSolSentence(exp1En)) {
              solEn = exp1En;
              solVi = exp1Vi;
              exp1En = '';
              exp1Vi = '';
            }

            if (isComplaint) {
              const gTitle = (group.title_en || '') + ' ' + (group.title_vi || '');
              const isSolutionGroup = /suggested improvements|corrective actions|maintenance|giải pháp|khắc phục|cải tiến/i.test(gTitle);
              const isFeelingGroup = /how you felt|feelings|cảm nhận|cảm xúc/i.test(gTitle);

              let actBadge = '<span class="hl-pill hl-rose" style="font-size: 0.72rem; padding: 0.15rem 0.55rem; font-weight: 700;"><i class="fa-solid fa-triangle-exclamation"></i> 1. Câu vấn đề chính (Thân thư 1)</span>';
              let rsnBadge = '<span class="hl-pill hl-amber" style="font-size: 0.72rem; padding: 0.15rem 0.55rem; font-weight: 700;"><i class="fa-solid fa-magnifying-glass"></i> 2. Câu mô tả cụ thể (Thân thư 1)</span>';
              let cardBorderColor = 'var(--rose-light)';
              let actBg = 'rgba(239, 68, 68, 0.05)';

              if (isSolutionGroup) {
                actBadge = '<span class="hl-pill hl-emerald" style="font-size: 0.72rem; padding: 0.15rem 0.55rem; font-weight: 700;"><i class="fa-solid fa-screwdriver-wrench"></i> Đề xuất giải pháp (Thân thư 3)</span>';
                rsnBadge = '<span class="hl-pill hl-amber" style="font-size: 0.72rem; padding: 0.15rem 0.55rem; font-weight: 700;"><i class="fa-solid fa-bullseye"></i> Mục đích / Kỳ vọng</span>';
                cardBorderColor = 'var(--emerald-light)';
                actBg = 'rgba(16, 185, 129, 0.05)';
              } else if (isFeelingGroup) {
                actBadge = '<span class="hl-pill hl-rose" style="font-size: 0.72rem; padding: 0.15rem 0.55rem; font-weight: 700;"><i class="fa-solid fa-face-frown"></i> Cảm xúc & Cảm nhận (Thân thư 2)</span>';
                rsnBadge = '<span class="hl-pill hl-amber" style="font-size: 0.72rem; padding: 0.15rem 0.55rem; font-weight: 700;"><i class="fa-solid fa-circle-info"></i> Lý do / Giải thích cảm xúc</span>';
                cardBorderColor = 'var(--rose-light)';
                actBg = 'rgba(239, 68, 68, 0.05)';
              }

              // Chuẩn bị nội dung sao chép
              const pairText = [actEn, rsnEn].filter(Boolean).map(s => s.endsWith('.') ? s : s + '.').join(' ').replace(/'/g, "\\'");
              const solutionText = (solEn ? (solEn.endsWith('.') ? solEn : solEn + '.') : '').replace(/'/g, "\\'");
              let allSentences = [];
              if (actEn) allSentences.push(actEn.endsWith('.') ? actEn : actEn + '.');
              if (rsnEn) allSentences.push(rsnEn.endsWith('.') ? rsnEn : rsnEn + '.');
              if (exp1En) allSentences.push(exp1En.endsWith('.') ? exp1En : exp1En + '.');
              if (exp2En) allSentences.push(exp2En.endsWith('.') ? exp2En : exp2En + '.');
              if (solEn) allSentences.push(solEn.endsWith('.') ? solEn : solEn + '.');
              const fullCopyText = allSentences.join(' ').replace(/'/g, "\\'");

              return `
                <div class="idea-option-card" style="border-left: 3px solid ${cardBorderColor};">
                  <!-- 1. Hàng đầu tiên (Vấn đề / Cảm xúc / Giải pháp) -->
                  <div class="idea-action-row" style="background: ${actBg}; padding: 0.6rem 0.75rem; border-radius: var(--radius-sm); margin-bottom: 0.5rem;">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.3rem;">
                      ${actBadge}
                      <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">Hướng ${optIdx + 1}</span>
                    </div>
                    <div style="font-weight: 700; color: var(--text-primary); font-size: 0.93rem; line-height: 1.5;">${escapeHtml(actEn)}</div>
                    ${actVi ? `<div style="font-size: 0.83rem; color: var(--text-muted); font-style: italic; margin-top: 0.2rem;">(${escapeHtml(actVi)})</div>` : ''}
                  </div>

                  <!-- 2. Hàng thứ hai (Mô tả cụ thể / Lý do / Mục đích) -->
                  ${rsnEn ? `
                    <div class="idea-reason-row" style="background: rgba(245, 158, 11, 0.05); padding: 0.6rem 0.75rem; border-radius: var(--radius-sm); margin-bottom: 0.5rem;">
                      <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.3rem;">
                        ${rsnBadge}
                      </div>
                      <div style="font-size: 0.9rem; color: var(--text-primary); line-height: 1.5;">${escapeHtml(rsnEn)}</div>
                      ${rsnVi ? `<div style="font-size: 0.83rem; color: var(--text-muted); font-style: italic; margin-top: 0.2rem;">(${escapeHtml(rsnVi)})</div>` : ''}
                    </div>
                  ` : ''}

                  <!-- 3. Câu mở rộng 1 (nếu có - LUÔN NẰM TRƯỚC GIẢI PHÁP) -->
                  ${exp1En ? `
                    <div class="idea-expansion-row" style="background: rgba(6, 182, 212, 0.05); padding: 0.6rem 0.75rem; border-radius: var(--radius-sm); margin-bottom: 0.5rem; border: 1px solid rgba(6, 182, 212, 0.2);">
                      <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.3rem;">
                        <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.55rem; font-weight: 700;">
                          <i class="fa-solid fa-circle-plus"></i> Câu mở rộng 1
                        </span>
                      </div>
                      <div style="font-size: 0.9rem; color: var(--text-primary); line-height: 1.5;">${escapeHtml(exp1En)}</div>
                      ${exp1Vi ? `<div style="font-size: 0.83rem; color: var(--text-muted); font-style: italic; margin-top: 0.2rem;">(${escapeHtml(exp1Vi)})</div>` : ''}
                    </div>
                  ` : ''}

                  <!-- 4. Câu mở rộng 2 (nếu có - LUÔN NẰM TRƯỚC GIẢI PHÁP) -->
                  ${exp2En ? `
                    <div class="idea-expansion-row" style="background: rgba(99, 102, 241, 0.05); padding: 0.6rem 0.75rem; border-radius: var(--radius-sm); margin-bottom: 0.5rem; border: 1px solid rgba(99, 102, 241, 0.2);">
                      <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.3rem;">
                        <span class="hl-pill hl-violet" style="font-size: 0.72rem; padding: 0.15rem 0.55rem; font-weight: 700;">
                          <i class="fa-solid fa-circle-plus"></i> Câu mở rộng 2
                        </span>
                      </div>
                      <div style="font-size: 0.9rem; color: var(--text-primary); line-height: 1.5;">${escapeHtml(exp2En)}</div>
                      ${exp2Vi ? `<div style="font-size: 0.83rem; color: var(--text-muted); font-style: italic; margin-top: 0.2rem;">(${escapeHtml(exp2Vi)})</div>` : ''}
                    </div>
                  ` : ''}

                  <!-- 5. Đề xuất giải pháp (Thân thư 3) (nếu có - LUÔN NẰM SAU CÁC CÂU MỞ RỘNG) -->
                  ${solEn ? `
                    <div class="idea-expansion-row" style="background: rgba(16, 185, 129, 0.05); padding: 0.6rem 0.75rem; border-radius: var(--radius-sm); margin-bottom: 0.5rem; border: 1px solid rgba(16, 185, 129, 0.2);">
                      <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.3rem;">
                        <span class="hl-pill hl-emerald" style="font-size: 0.72rem; padding: 0.15rem 0.55rem; font-weight: 700;">
                          <i class="fa-solid fa-screwdriver-wrench"></i> 3. Đề xuất giải pháp (Thân thư 3)
                        </span>
                      </div>
                      <div style="font-size: 0.9rem; color: var(--text-primary); line-height: 1.5;">${escapeHtml(solEn)}</div>
                      ${solVi ? `<div style="font-size: 0.83rem; color: var(--text-muted); font-style: italic; margin-top: 0.2rem;">(${escapeHtml(solVi)})</div>` : ''}
                    </div>
                  ` : ''}

                  <!-- Action Footer -->
                  <div class="idea-card-footer" style="display: flex; flex-wrap: wrap; gap: 0.4rem; justify-content: flex-end; margin-top: 0.45rem;">
                    ${isSolutionGroup ? `
                      <button type="button" class="btn btn-secondary btn-sm" onclick="copyIdeaText('${pairText}')" style="font-size: 0.74rem; padding: 0.25rem 0.65rem; color: var(--emerald-light); border-color: var(--emerald-border);" title="Sao chép câu Đề xuất giải pháp vào Thân thư 3">
                        <i class="fa-solid fa-screwdriver-wrench"></i> Chép Giải pháp (Thân 3)
                      </button>
                      ${exp1En ? `
                        <button type="button" class="btn btn-secondary btn-sm" onclick="copyIdeaText('${fullCopyText}')" style="font-size: 0.74rem; padding: 0.25rem 0.65rem; color: var(--cyan-light); border-color: var(--cyan-border);" title="Sao chép toàn bộ ý kèm câu mở rộng">
                          <i class="fa-solid fa-copy"></i> Chép kèm Câu mở rộng
                        </button>
                      ` : ''}
                    ` : isFeelingGroup ? `
                      <button type="button" class="btn btn-secondary btn-sm" onclick="copyIdeaText('${pairText}')" style="font-size: 0.74rem; padding: 0.25rem 0.65rem; color: var(--rose-light); border-color: var(--rose-border);" title="Sao chép câu Cảm xúc vào Thân thư 2">
                        <i class="fa-solid fa-face-frown"></i> Chép Cảm xúc (Thân 2)
                      </button>
                      ${exp1En ? `
                        <button type="button" class="btn btn-secondary btn-sm" onclick="copyIdeaText('${fullCopyText}')" style="font-size: 0.74rem; padding: 0.25rem 0.65rem; color: var(--cyan-light); border-color: var(--cyan-border);" title="Sao chép toàn bộ ý kèm câu mở rộng">
                          <i class="fa-solid fa-copy"></i> Chép kèm Câu mở rộng
                        </button>
                      ` : ''}
                    ` : solEn ? `
                      <button type="button" class="btn btn-secondary btn-sm" onclick="copyIdeaText('${pairText}')" style="font-size: 0.74rem; padding: 0.25rem 0.65rem; color: var(--cyan-light); border-color: var(--cyan-border);" title="Sao chép Cặp câu (Vấn đề chính + Mô tả cụ thể) để dán vào Thân thư 1">
                        <i class="fa-solid fa-copy"></i> Chép Cặp câu (Thân 1)
                      </button>
                      <button type="button" class="btn btn-secondary btn-sm" onclick="copyIdeaText('${solutionText}')" style="font-size: 0.74rem; padding: 0.25rem 0.65rem; color: var(--emerald-light); border-color: var(--emerald-border);" title="Sao chép câu Đề xuất giải pháp để dán vào Thân thư 3">
                        <i class="fa-solid fa-screwdriver-wrench"></i> Chép Giải pháp (Thân 3)
                      </button>
                    ` : `
                      <button type="button" class="btn btn-secondary btn-sm" onclick="copyIdeaText('${pairText}')" style="font-size: 0.74rem; padding: 0.25rem 0.65rem; color: var(--cyan-light); border-color: var(--cyan-border);" title="Sao chép Cặp câu (Vấn đề chính + Mô tả cụ thể) để dán vào Thân thư 1">
                        <i class="fa-solid fa-copy"></i> Chép Cặp câu (Thân 1)
                      </button>
                      ${exp1En ? `
                        <button type="button" class="btn btn-secondary btn-sm" onclick="copyIdeaText('${fullCopyText}')" style="font-size: 0.74rem; padding: 0.25rem 0.65rem; color: var(--violet-light); border-color: var(--violet-border);" title="Sao chép toàn bộ ý kèm câu mở rộng">
                          <i class="fa-solid fa-circle-plus"></i> Chép kèm Câu mở rộng
                        </button>
                      ` : ''}
                    `}
                  </div>
                </div>
              `;
            }

            // Construct full composite text for clipboard copy
            let copySentences = [];
            if (actEn) copySentences.push(actEn.endsWith('.') ? actEn : actEn + '.');
            if (rsnEn) copySentences.push(rsnEn.endsWith('.') ? rsnEn : rsnEn + '.');
            const pairText = copySentences.join(' ').replace(/'/g, "\\'");

            if (exp1En) copySentences.push(exp1En.endsWith('.') ? exp1En : exp1En + '.');
            if (exp2En) copySentences.push(exp2En.endsWith('.') ? exp2En : exp2En + '.');
            const fullCopyText = copySentences.join(' ').replace(/'/g, "\\'");

            return `
              <div class="idea-option-card">
                <!-- 1. Main Action / Point / Problem -->
                <div class="idea-action-row">
                  <div class="idea-action-title">
                    <span class="idea-num-badge">${isComplaint ? 'Vấn đề' : 'Ý'} ${optIdx + 1}</span>
                    <strong>${escapeHtml(actEn)}</strong>
                  </div>
                  ${actVi ? `<div class="idea-action-trans">(${escapeHtml(actVi)})</div>` : ''}
                </div>

                <!-- 2. Reason / Result / Consequence -->
                ${rsnEn ? `
                  <div class="idea-reason-row">
                    <div class="idea-arrow-tag">
                      <i class="fa-solid fa-arrow-turn-down" style="margin-top: 3px;"></i>
                      <span>${escapeHtml(rsnEn)}</span>
                    </div>
                    ${rsnVi ? `<div class="idea-reason-trans">(${escapeHtml(rsnVi)})</div>` : ''}
                  </div>
                ` : ''}

                <!-- 3. Expansion 1 / Solution Request -->
                ${exp1En ? `
                  <div class="idea-expansion-row">
                    <div class="idea-exp-badge-wrap" style="margin-bottom: 0.35rem;">
                      <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.15rem 0.55rem; white-space: nowrap;">
                        <i class="fa-solid ${isComplaint ? 'fa-screwdriver-wrench' : 'fa-circle-plus'}"></i> ${isComplaint ? 'Yêu cầu khắc phục' : 'Câu mở rộng 1'}
                      </span>
                    </div>
                    <div class="idea-exp-text">${escapeHtml(exp1En)}</div>
                    ${exp1Vi ? `<div class="idea-exp-trans">(${escapeHtml(exp1Vi)})</div>` : ''}
                  </div>
                ` : ''}

                <!-- 4. Expansion 2 -->
                ${exp2En ? `
                  <div class="idea-expansion-row" style="background: rgba(16,185,129,0.06); border-color: rgba(16,185,129,0.2);">
                    <div class="idea-exp-badge-wrap" style="margin-bottom: 0.35rem;">
                      <span class="hl-pill hl-emerald" style="font-size: 0.72rem; padding: 0.15rem 0.55rem; white-space: nowrap;">
                        <i class="fa-solid fa-circle-plus"></i> Câu mở rộng 2
                      </span>
                    </div>
                    <div class="idea-exp-text">${escapeHtml(exp2En)}</div>
                    ${exp2Vi ? `<div class="idea-exp-trans">(${escapeHtml(exp2Vi)})</div>` : ''}
                  </div>
                ` : ''}

                <!-- Action Footer -->
                <div class="idea-card-footer" style="display: flex; gap: 0.4rem; justify-content: flex-end; flex-wrap: wrap; margin-top: 0.45rem;">
                  <button type="button" class="btn btn-secondary btn-sm" onclick="copyIdeaText('${pairText}')" style="font-size: 0.74rem; padding: 0.25rem 0.65rem; color: var(--cyan-light); border-color: var(--cyan-border);" title="Sao chép cặp câu chính (Ý chính + Lý do/Mô tả)">
                    <i class="fa-solid fa-copy"></i> Chép Cặp câu chính
                  </button>
                  ${(exp1En || exp2En) ? `
                    <button type="button" class="btn btn-secondary btn-sm" onclick="copyIdeaText('${fullCopyText}')" style="font-size: 0.74rem; padding: 0.25rem 0.65rem; color: var(--violet-light); border-color: var(--violet-border);" title="Sao chép toàn bộ câu này kèm theo câu mở rộng">
                      <i class="fa-solid fa-circle-plus"></i> Chép kèm Câu mở rộng
                    </button>
                  ` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');
}


// ==========================================================================
// CÁC HÀM BỔ TRỢ ĐÁNH GIÁ TỪNG CÂU, BÀI MẪU & XUẤT FILE WORD
// ==========================================================================

function renderSentencesListMarkup(sentences, subId) {
  if (!sentences || sentences.length === 0) {
    return `
      <div style="text-align: center; padding: 2rem; color: var(--text-muted); font-size: 0.9rem;">
        Chưa có dữ liệu đánh giá từng câu.
      </div>
    `;
  }

  return sentences.map(s => {
    const qClass = `quality-${s.quality}`;
    const escapedUpgrade = (s.upgrade || '').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

    return `
      <div class="eval-sentence-card ${qClass}" data-quality="${s.quality}">
        <div class="eval-sentence-header">
          <div class="eval-sentence-meta-left">
            <span class="eval-sentence-num">Câu ${s.index}</span>
            <span class="eval-sentence-role-pill">
              <i class="fa-solid fa-layer-group"></i> ${escapeHtml(s.role)}
            </span>
            <span class="eval-sentence-quality-pill ${qClass}">
              <i class="fa-solid ${s.quality === 'excellent' ? 'fa-star' : s.quality === 'good' ? 'fa-check' : s.quality === 'error' ? 'fa-triangle-exclamation' : 'fa-circle-exclamation'}"></i>
              ${escapeHtml(s.qualityBadge)}
            </span>
          </div>
          <span class="eval-meta-pill" style="font-size: 0.76rem; background: var(--bg-card); border-color: var(--panel-border);">
            <i class="fa-solid fa-pen-nib"></i> ${s.wordCount} từ
          </span>
        </div>

        <div class="eval-sentence-quote">
          "${escapeHtml(s.text)}"
        </div>

        <div class="eval-sentence-feedback">
          <i class="fa-solid ${s.quality === 'error' ? 'fa-circle-xmark' : 'fa-circle-check'}"></i>
          <div>
            <strong>Nhận xét:</strong> ${escapeHtml(s.feedback)}
          </div>
        </div>

        ${s.upgrade ? `
          <div class="eval-sentence-upgrade">
            <div class="eval-sentence-upgrade-header">
              <span><i class="fa-solid fa-wand-magic-sparkles"></i> Gợi ý câu viết lại chuẩn B2:</span>
              <button class="btn btn-secondary btn-sm" onclick="copySentenceUpgrade('${escapedUpgrade}')" style="font-size: 0.72rem; padding: 0.15rem 0.55rem; color: var(--emerald-light); border-color: rgba(16,185,129,0.35); font-weight: 700;">
                <i class="fa-solid fa-copy"></i> Sao chép
              </button>
            </div>
            <div class="eval-sentence-upgrade-text">
              "${escapeHtml(s.upgrade)}"
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
}

function filterSubSentences(subId, filterKey, btnEl) {
  if (btnEl && btnEl.parentElement) {
    btnEl.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');
  }
  const container = document.getElementById(`sentences_container_${subId}`);
  if (!container) return;
  const cards = container.querySelectorAll('.eval-sentence-card');
  cards.forEach(card => {
    if (filterKey === 'all') {
      card.style.display = '';
    } else {
      const q = card.getAttribute('data-quality');
      if (q === filterKey) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    }
  });
}

function toggleSubSampleTranslation(subId) {
  const transEl = document.getElementById(`sub_sample_vi_${subId}`);
  const labelEl = document.getElementById(`btnSubSampleTransLabel_${subId}`);
  if (!transEl) return;
  const isHidden = transEl.style.display === 'none';
  transEl.style.display = isHidden ? 'block' : 'none';
  if (labelEl) {
    labelEl.textContent = isHidden ? 'Ẩn dịch tiếng Việt' : 'Xem dịch tiếng Việt';
  }
}

function copySampleLetterText(topicId) {
  const topic = findTopicById(topicId);
  const sample = topic?.details?.sample_b2 || topic?.sample_b2;
  const text = sample?.letter_en || sample?.text;
  if (!text) return;
  copyIdeaText(text.replace(/[*_]/g, ''));
  showToast('📋 Đã sao chép toàn bộ bài mẫu vào bộ nhớ tạm!', 'success');
}

function copySentenceUpgrade(text) {
  if (!text) return;
  copyIdeaText(text);
  showToast('📋 Đã sao chép câu nâng cấp B2 vào bộ nhớ tạm!', 'success');
}

// ==========================================================================
// XUẤT FILE MICROSOFT WORD (.DOC / .DOCX) CHUẨN ĐỊNH DẠNG VSTEP TASK 01
// ==========================================================================
function generateWordDocumentHtml(sub, topic) {
  const ev = sub.evaluation || {};
  const tf = ev.tf || { band: 7.0, strengths: [], improvements: [] };
  const or = ev.or || { band: 7.0, strengths: [], improvements: [] };
  const lr = ev.lr || { band: 7.0, strengths: [], improvements: [] };
  const gra = ev.gra || { band: 7.0, strengths: [], improvements: [] };
  const overallBand = ev.overallBand || 7.0;
  let sentences = ev.sentenceEvaluations || [];
  if (sentences.length === 0 && sub.content) {
    sentences = evaluateSentenceBySentence(sub.content, topic, ev.detectedErrors || []);
  }
  const sample = topic?.details?.sample_b2 || topic?.sample_b2 || {};

  return `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <title>Báo Cáo Đánh Giá VSTEP Writing Task 01</title>
      <style>
        @page { size: 21.0cm 29.7cm; margin: 2.0cm; mso-page-orientation: portrait; }
        body { font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.5; color: #111827; }
        h1 { font-size: 17pt; color: #1e3a8a; text-align: center; margin-bottom: 4pt; }
        h2 { font-size: 13pt; color: #1e40af; border-bottom: 2pt solid #2563eb; padding-bottom: 4pt; margin-top: 16pt; margin-bottom: 8pt; text-transform: uppercase; }
        h3 { font-size: 11pt; color: #0f172a; margin-top: 10pt; margin-bottom: 4pt; }
        table { width: 100%; border-collapse: collapse; margin-top: 6pt; margin-bottom: 12pt; }
        th, td { border: 1pt solid #cbd5e1; padding: 6pt 8pt; font-size: 10.5pt; vertical-align: top; }
        th { background-color: #f1f5f9; color: #0f172a; font-weight: bold; }
        .score-box { background-color: #eff6ff; border: 1.5pt solid #3b82f6; padding: 10pt; text-align: center; margin: 10pt 0; border-radius: 4pt; }
        .student-text { background-color: #f8fafc; border: 1pt solid #cbd5e1; padding: 12pt; font-family: "Times New Roman", serif; font-size: 11.5pt; line-height: 1.8; margin: 8pt 0; }
        .sample-text { background-color: #f0fdf4; border: 1pt solid #86efac; border-left: 4pt solid #16a34a; padding: 12pt; font-size: 11.5pt; line-height: 1.8; margin: 8pt 0; }
        .note { font-size: 10pt; color: #64748b; font-style: italic; }
      </style>
    </head>
    <body>
      <div style="text-align: center; margin-bottom: 15pt;">
        <p style="font-size: 13pt; font-weight: bold; color: #1e40af; margin: 0; text-transform: uppercase; letter-spacing: 1.2pt;">ENGLISH WITH MISS NGUYET</p>
        <p style="font-size: 10pt; color: #4b5563; margin: 2pt 0 4pt 0; text-transform: uppercase; letter-spacing: 0.8pt;">HỆ THỐNG LUYỆN THI VSTEP B2 NÂNG CAO</p>
        <h1>PHIẾU ĐÁNH GIÁ BÀI LÀM VSTEP WRITING TASK 01</h1>
        <p class="note">Ngày xuất báo cáo: ${new Date().toLocaleDateString("vi-VN")}</p>
      </div>

      <h2>I. THÔNG TIN BÀI LÀM</h2>
      <table>
        <tr>
          <td width="20%"><strong>Học viên:</strong></td>
          <td width="30%">${sub.studentName || "Học viên VSTEP B2"}</td>
          <td width="20%"><strong>Lớp học:</strong></td>
          <td width="30%">${sub.className || "CB206 - Mục tiêu B2"}</td>
        </tr>
        <tr>
          <td><strong>Đề bài:</strong></td>
          <td colspan="3"><strong>${topic?.title_vi || sub.topicTitle}</strong></td>
        </tr>
        ${sub.isRevision ? `
        <tr>
          <td><strong>Phiên bản bài làm:</strong></td>
          <td colspan="3"><strong style="color: #2563eb; text-transform: uppercase;">Bản sửa lần ${sub.revisionNumber || 2} (Đã chỉnh sửa hoàn thiện theo góp ý)</strong></td>
        </tr>
        ` : ''}
        <tr>
          <td><strong>Số từ bài viết:</strong></td>
          <td><strong>${sub.wordCount} từ</strong> (Yêu cầu: 120+ từ)</td>
          <td><strong>Thời gian làm bài:</strong></td>
          <td>${Math.floor((sub.timeSpentSecs || 0) / 60)} phút ${(sub.timeSpentSecs || 0) % 60} giây</td>
        </tr>
      </table>

      <h2>II. KẾT QUẢ ĐÁNH GIÁ CHUẨN VSTEP TASK 01</h2>
      <div class="score-box">
        <p style="font-size: 14pt; font-weight: bold; color: #1e40af; margin: 0;">ĐIỂM TỔNG QUAN (OVERALL BAND): ${overallBand} / 10</p>
        <p style="font-size: 11pt; color: #166534; font-weight: bold; margin: 4pt 0 0 0;">${overallBand >= 7.0 ? "ĐẠT CHUẨN VSTEP B2" : overallBand >= 6.0 ? "TIỆM CẬN B2 (B1+)" : "CẦN TIẾP TỤC LUYỆN TẬP"}</p>
      </div>

      <table>
        <tr>
          <th width="28%">Tiêu chí chấm điểm</th>
          <th width="12%">Điểm</th>
          <th width="30%">Điểm mạnh đạt được</th>
          <th width="30%">Điểm cần cải thiện</th>
        </tr>
        <tr>
          <td><strong>1. Task Fulfillment (TF)</strong><br><span class="note">Hoàn thành yêu cầu đề bài</span></td>
          <td style="text-align: center; font-weight: bold; font-size: 12pt; color: #1e40af;">${tf.band}</td>
          <td>${(tf.strengths || []).join("<br>") || "Đáp ứng cơ bản yêu cầu đề bài."}</td>
          <td>${(tf.improvements || []).join("<br>") || "Không có."}</td>
        </tr>
        <tr>
          <td><strong>2. Organization (OR)</strong><br><span class="note">Bố cục và tính liên kết</span></td>
          <td style="text-align: center; font-weight: bold; font-size: 12pt; color: #1e40af;">${or.band}</td>
          <td>${(or.strengths || []).join("<br>") || "Bố cục chia đoạn rõ ràng."}</td>
          <td>${(or.improvements || []).join("<br>") || "Không có."}</td>
        </tr>
        <tr>
          <td><strong>3. Lexical Resource (LR)</strong><br><span class="note">Vốn từ vựng & Collocations</span></td>
          <td style="text-align: center; font-weight: bold; font-size: 12pt; color: #1e40af;">${lr.band}</td>
          <td>${(lr.strengths || []).join("<br>") || "Dùng từ tương đối chuẩn xác."}</td>
          <td>${(lr.improvements || []).join("<br>") || "Không có."}</td>
        </tr>
        <tr>
          <td><strong>4. Grammatical Accuracy (GRA)</strong><br><span class="note">Độ chính xác và đa dạng ngữ pháp</span></td>
          <td style="text-align: center; font-weight: bold; font-size: 12pt; color: #1e40af;">${gra.band}</td>
          <td>${(gra.strengths || []).join("<br>") || "Kiểm soát ngữ pháp ổn định."}</td>
          <td>${(gra.improvements || []).join("<br>") || "Không có."}</td>
        </tr>
      </table>

      <h2>III. ĐÁNH GIÁ & NHẬN XÉT CHI TIẾT TỪNG CÂU</h2>
      <table>
        <tr>
          <th width="8%">STT</th>
          <th width="22%">Vai trò câu</th>
          <th width="35%">Câu văn của học viên</th>
          <th width="35%">Nhận xét & Gợi ý nâng cấp B2</th>
        </tr>
        ${sentences.map((s, i) => `
          <tr>
            <td style="text-align: center; font-weight: bold;">Câu ${i + 1}</td>
            <td><strong>${s.role}</strong><br><span class="note">${s.qualityBadge}</span></td>
            <td><em>"${s.text}"</em></td>
            <td>
              <strong>Nhận xét:</strong> ${s.feedback}
              ${s.upgrade ? `<br><br><strong style="color: #1e40af;">Gợi ý viết lại chuẩn B2:</strong><br><span style="color: #1e3a8a;">${s.upgrade}</span>` : ""}
            </td>
          </tr>
        `).join("")}
      </table>

      <h2>IV. NGUYÊN VĂN BÀI VIẾT CỦA HỌC VIÊN</h2>
      <div class="student-text">
        ${(sub.content || "").replace(/\n/g, "<br>")}
      </div>

      <h2>V. BÀI MẪU THAM KHẢO CHUẨN B2 (BAND 8.0 - 9.0)</h2>
      <div class="sample-text">
        <p style="font-weight: bold; color: #166534; margin-top: 0;">BÀI MẪU TIẾNG ANH CHUẨN B2:</p>
        ${(sample.letter_en || sample.text || "").replace(/\n/g, "<br>")}
        <br><br>
        <p style="font-weight: bold; color: #166534; margin-bottom: 4pt;">BẢN DỊCH TIẾNG VIỆT THAM KHẢO:</p>
        <p style="color: #374151; font-style: italic;">
          ${(sample.letter_vi || sample.translation || "").replace(/\n/g, "<br>")}
        </p>
      </div>

      <div style="margin-top: 30pt; text-align: right;">
        <p style="font-weight: bold; margin-bottom: 40pt;">GIÁO VIÊN CHẤM ĐIỂM</p>
        <p style="font-weight: bold; color: #1e40af;">Miss Nguyệt - Chuyên gia VSTEP B2</p>
      </div>
    </body>
    </html>
  `;
}

function exportSubmissionToWord(subId) {
  let sub = null;
  if (subId) {
    sub = AppState.submissions.find(s => s.id === subId);
  }
  if (!sub && AppState.submissions.length > 0) {
    sub = AppState.submissions[0];
  }
  if (!sub) {
    showToast('Chưa tìm thấy bài viết để xuất file Word!', 'warning');
    return;
  }

  const topic = findTopicById(sub.topicId);
  downloadWordDocument(sub, topic);
}

function downloadWordDocument(sub, topic) {
  try {
    const htmlContent = generateWordDocumentHtml(sub, topic);
    const blob = new Blob(['\ufeff', htmlContent], {
      type: 'application/msword;charset=utf-8'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const safeTopicId = sub.topicId || 'de';
    const safeName = (sub.studentName || 'HocVien')
      .replace(/[^\w\s\u00C0-\u1EF9]/gi, '')
      .trim()
      .replace(/\s+/g, '_');
    const safeTitle = (topic?.title_vi || sub.topicTitle || 'BaiLam')
      .replace(/[^\w\s\u00C0-\u1EF9]/gi, '')
      .trim()
      .replace(/\s+/g, '_')
      .substring(0, 30);
    
    a.href = url;
    a.download = `VSTEP_B2_Task1_${safeTopicId}_${safeName}_${safeTitle}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('📄 Đã xuất file Word bài làm thành công!', 'success');
  } catch (err) {
    console.error("Export Word error:", err);
    showToast('Lỗi khi xuất file Word: ' + err.message, 'error');
  }
}

// ==========================================================================
// SAO CHÉP BÀI LÀM & NHẬN XÉT SỬA LỖI
// ==========================================================================
function copySubmissionCorrection(subId) {
  const sub = AppState.submissions.find(s => s.id === subId);
  if (!sub) return;
  const ev = sub.evaluation || {};
  const topic = findTopicById(sub.topicId);

  let text = `=== BÀI LÀM VSTEP WRITING TASK 01 ===\n`;
  text += `Học viên: ${sub.studentName} - Lớp: ${sub.className}\n`;
  text += `Đề bài: ${topic?.title_vi || sub.topicTitle}\n`;
  if (sub.isRevision) {
    text += `Phiên bản: Bản sửa lần ${sub.revisionNumber || 2} (Đã chỉnh sửa theo góp ý)\n`;
  }
  text += `Điểm tổng quan: ${ev.overallBand || 7.0} / 10.0 (TF: ${ev.tf?.band || 7.0}, OR: ${ev.or?.band || 7.0}, LR: ${ev.lr?.band || 7.0}, GRA: ${ev.gra?.band || 7.0})\n\n`;
  text += `--- BÀI VIẾT CỦA HỌC VIÊN (${sub.wordCount} từ) ---\n`;
  text += `${sub.content}\n\n`;

  const sentences = ev.sentenceEvaluations || [];
  if (sentences.length > 0) {
    text += `--- NHẬN XÉT & CÂU NÂNG CẤP CHUẨN B2 ---\n`;
    sentences.forEach((s, idx) => {
      text += `[Câu ${idx + 1}]: "${s.original}"\n`;
      if (s.feedback) text += `  Nhận xét: ${s.feedback}\n`;
      if (s.upgraded) text += `  ➔ Nâng cấp B2: "${s.upgraded}"\n`;
      text += `\n`;
    });
  }

  copyIdeaText(text);
  showToast('📋 Đã sao chép toàn bộ Bài viết & Nhận xét sửa lỗi vào bộ nhớ tạm!', 'success');
}

// ==========================================================================
// XUẤT BẢN THẢO WORD (.DOC) KHI ĐANG VIẾT
// ==========================================================================
function exportCurrentEditorToWord() {
  const topicId = AppState.activePracticeTopicId;
  const textarea = document.getElementById('practiceWritingTextarea');
  const content = (textarea ? textarea.value : '').trim();
  const topic = findTopicById(topicId);

  if (!content) {
    showToast('Chưa có nội dung bài viết để xuất file Word!', 'warning');
    return;
  }

  const draftData = {
    topicId,
    categoryKey: AppState.activeCategory,
    topicTitle: topic?.title_vi || topic?.title_en || 'Bài tập viết thư',
    studentName: AppState.student?.name || 'Học viên VSTEP B2',
    className: AppState.student?.className || 'CB206 - Mục tiêu B2',
    content,
    wordCount: content.split(/\s+/).filter(Boolean).length,
    savedAt: new Date().toISOString()
  };

  downloadDraftWordDocument(draftData, topic);
}

function exportSingleDraftToWord(draftKey) {
  const draft = AppState.drafts[draftKey];
  if (!draft) {
    showToast('Không tìm thấy bản nháp để xuất!', 'warning');
    return;
  }
  const topic = findTopicById(draft.topicId);
  downloadDraftWordDocument(draft, topic);
}

function downloadDraftWordDocument(draft, topic) {
  try {
    const htmlContent = generateDraftWordDocumentHtml(draft, topic);
    const blob = new Blob(['\ufeff', htmlContent], {
      type: 'application/msword;charset=utf-8'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const safeTopicId = draft.topicId || 'de';
    const safeName = (draft.studentName || AppState.student?.name || 'HocVien')
      .replace(/[^\w\s\u00C0-\u1EF9]/gi, '')
      .trim()
      .replace(/\s+/g, '_');
    const safeTitle = (topic?.title_vi || draft.topicTitle || 'BanThao')
      .replace(/[^\w\s\u00C0-\u1EF9]/gi, '')
      .trim()
      .replace(/\s+/g, '_')
      .substring(0, 30);

    a.href = url;
    a.download = `VSTEP_B2_BanThao_${safeTopicId}_${safeName}_${safeTitle}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('📄 Đã xuất bản thảo Word (.doc) thành công!', 'success');
  } catch (err) {
    console.error("Export draft word error:", err);
    showToast('Lỗi khi xuất file: ' + err.message, 'error');
  }
}

function generateDraftWordDocumentHtml(draft, topic) {
  const sample = topic?.details?.sample_b2 || topic?.sample_b2 || {};
  const words = (draft.content || '').trim().split(/\s+/).filter(Boolean);

  return `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <title>Bản Thảo Bài Viết VSTEP Writing Task 01</title>
      <style>
        @page { size: 21.0cm 29.7cm; margin: 2.0cm; mso-page-orientation: portrait; }
        body { font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.6; color: #111827; }
        h1 { font-size: 16pt; color: #1e3a8a; text-align: center; margin-bottom: 4pt; }
        h2 { font-size: 12pt; color: #1e40af; border-bottom: 2pt solid #2563eb; padding-bottom: 4pt; margin-top: 14pt; margin-bottom: 8pt; text-transform: uppercase; }
        table { width: 100%; border-collapse: collapse; margin-top: 6pt; margin-bottom: 12pt; }
        th, td { border: 1pt solid #cbd5e1; padding: 6pt 8pt; font-size: 10.5pt; vertical-align: top; }
        th { background-color: #f1f5f9; color: #0f172a; font-weight: bold; }
        .student-text { background-color: #f8fafc; border: 1.5pt solid #cbd5e1; padding: 14pt; font-size: 12pt; line-height: 1.8; margin: 10pt 0; }
        .prompt-box { background-color: #eff6ff; border: 1pt solid #bfdbfe; border-left: 4pt solid #3b82f6; padding: 10pt 12pt; margin: 8pt 0; }
      </style>
    </head>
    <body>
      <div style="text-align: center; margin-bottom: 12pt;">
        <p style="font-size: 12pt; font-weight: bold; color: #1e40af; margin: 0; text-transform: uppercase;">ENGLISH WITH MISS NGUYET - VSTEP B2 NÂNG CAO</p>
        <h1>BẢN THẢO BÀI VIẾT THỰC HÀNH VSTEP TASK 01</h1>
        <p style="font-size: 10pt; color: #64748b; font-style: italic;">Thời gian xuất file: ${new Date().toLocaleString("vi-VN")}</p>
      </div>

      <h2>I. THÔNG TIN BÀI VIẾT</h2>
      <table>
        <tr>
          <td width="20%"><strong>Học viên:</strong></td>
          <td width="30%">${escapeHtml(draft.studentName || AppState.student?.name || "Học viên VSTEP B2")}</td>
          <td width="20%"><strong>Lớp học:</strong></td>
          <td width="30%">${escapeHtml(draft.className || AppState.student?.className || "CB206 - Mục tiêu B2")}</td>
        </tr>
        <tr>
          <td><strong>Đề bài:</strong></td>
          <td colspan="3"><strong>${escapeHtml(topic?.title_vi || draft.topicTitle || "")}</strong></td>
        </tr>
        <tr>
          <td><strong>Số từ bản thảo:</strong></td>
          <td><strong>${words.length} từ</strong> (Yêu cầu bài thi: 120+ từ)</td>
          <td><strong>Trạng thái:</strong></td>
          <td><strong style="color: #0284c7;">Bản thảo đang luyện viết</strong></td>
        </tr>
      </table>

      <h2>II. ĐỀ BÀI (PROMPT)</h2>
      <div class="prompt-box">
        ${escapeHtml(topic?.prompt || "").replace(/\n/g, "<br>")}
      </div>

      <h2>III. NỘI DUNG BÀI LÀM CỦA HỌC VIÊN</h2>
      <div class="student-text">
        ${escapeHtml(draft.content || "").replace(/\n/g, "<br>")}
      </div>

      ${sample?.letter_en ? `
        <h2>IV. BÀI MẪU THAM KHẢO CHUẨN B2 (THAM KHẢO TỪ GIÁO VIÊN)</h2>
        <div style="background-color: #f0fdf4; border: 1pt solid #86efac; border-left: 4pt solid #16a34a; padding: 12pt; font-size: 11pt; line-height: 1.8;">
          <p style="font-weight: bold; color: #166534; margin-top: 0;">SAMPLE LETTER (BAND 8.0 - 9.0):</p>
          ${escapeHtml(sample.letter_en || sample.text || "").replace(/\n/g, "<br>")}
        </div>
      ` : ''}

      <div style="margin-top: 25pt; text-align: right;">
        <p style="font-weight: bold; margin-bottom: 35pt;">GIÁO VIÊN HƯỚNG DẪN</p>
        <p style="font-weight: bold; color: #1e40af;">Miss Nguyet - Chuyên gia VSTEP B2</p>
      </div>
    </body>
    </html>
  `;
}

// ==========================================================================
// HỘP SAO LƯU TIẾN ĐỘ & QUẢN LÝ BẢN NHÁP (MODAL & BACKUP/RESTORE)
// ==========================================================================
function openProgressBackupModal() {
  const modal = document.getElementById('progressBackupModalOverlay');
  if (!modal) return;
  renderBackupModalDraftsList();
  modal.style.display = 'flex';
}

function closeProgressBackupModal() {
  const modal = document.getElementById('progressBackupModalOverlay');
  if (modal) modal.style.display = 'none';
}

function renderBackupModalDraftsList() {
  const container = document.getElementById('progressBackupModalBody');
  const statsEl = document.getElementById('backupModalStatsBadge');
  if (!container) return;

  const draftKeys = Object.keys(AppState.drafts || {});
  const totalDrafts = draftKeys.length;
  const totalSubs = (AppState.submissions || []).length;

  if (statsEl) {
    statsEl.innerHTML = `<span>Đang lưu: <strong>${totalDrafts} bản nháp</strong> • <strong>${totalSubs} bài đã nộp</strong></span>`;
  }

  if (totalDrafts === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1.5rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--panel-border);">
        <i class="fa-solid fa-floppy-disk" style="font-size: 2.8rem; color: var(--text-muted); margin-bottom: 0.75rem;"></i>
        <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.35rem;">CHƯA CÓ BẢN NHÁP NÀO ĐƯỢC LƯU</h4>
        <p style="color: var(--text-secondary); font-size: 0.85rem; max-width: 500px; margin: 0 auto 1.25rem auto; line-height: 1.5;">
          Khi bạn gõ bài viết trong Phòng Thực Hành, hệ thống sẽ tự động lưu lại tiến độ liên tục tại đây để bạn không bao giờ bị mất bài.
        </p>
        <button class="btn btn-primary btn-sm" onclick="closeProgressBackupModal(); switchWorkflowTab('practice');">
          <i class="fa-solid fa-pen-nib"></i> Vào phòng viết bài ngay
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      ${draftKeys.map(key => {
        const d = AppState.drafts[key];
        const topic = findTopicById(d.topicId);
        const cat = CATEGORY_MAP[d.categoryKey] || {};
        const words = (d.content || '').trim().split(/\s+/).filter(Boolean);
        const dateStr = d.savedAt ? new Date(d.savedAt).toLocaleString('vi-VN') : 'Gần đây';

        return `
          <div class="backup-draft-card">
            <div style="flex: 1; min-width: 250px;">
              <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.3rem;">
                <span class="hl-pill hl-cyan" style="font-size: 0.72rem; padding: 0.12rem 0.5rem;">
                  <i class="fa-solid ${cat.icon || 'fa-tag'}"></i> ${escapeHtml(cat.title_vi || d.categoryKey || '')}
                </span>
                <span style="font-size: 0.78rem; color: var(--text-muted);">
                  <i class="fa-regular fa-clock"></i> ${dateStr}
                </span>
                <span class="hl-pill ${words.length >= 120 ? 'hl-emerald' : 'hl-amber'}" style="font-size: 0.72rem; padding: 0.12rem 0.5rem;">
                  <i class="fa-solid fa-pen-nib"></i> ${words.length} từ
                </span>
              </div>
              <h4 style="font-size: 0.96rem; font-weight: 800; color: var(--text-primary); margin: 0 0 0.35rem 0;">
                ${escapeHtml(topic?.title_vi || d.topicTitle || 'Bài làm')}
              </h4>
              <div style="font-size: 0.83rem; color: var(--text-secondary); line-height: 1.45; max-height: 2.9em; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; font-style: italic;">
                "${escapeHtml(d.content || '')}"
              </div>
            </div>

            <div style="display: flex; gap: 0.4rem; align-items: center; flex-wrap: wrap;">
              <button class="btn btn-primary btn-sm" onclick="resumeDraftFromBackup('${d.categoryKey}', '${d.topicId}')" style="font-size: 0.76rem; padding: 0.3rem 0.7rem;" title="Mở bản nháp này để tiếp tục viết">
                <i class="fa-solid fa-pen-to-square"></i> Tiếp tục viết
              </button>
              <button class="btn btn-secondary btn-sm" onclick="exportSingleDraftToWord('${key}')" style="font-size: 0.76rem; padding: 0.3rem 0.65rem; color: var(--accent-primary); border-color: var(--accent-primary);" title="Xuất bản nháp này ra file Word (.doc)">
                <i class="fa-solid fa-file-word"></i> Xuất Word
              </button>
              <button class="btn btn-secondary btn-sm" onclick="copyIdeaText('${(d.content || '').replace(/'/g, "\\'")}')" style="font-size: 0.76rem; padding: 0.3rem 0.55rem;" title="Sao chép nội dung bản nháp">
                <i class="fa-solid fa-copy"></i>
              </button>
              <button class="btn btn-secondary btn-sm" onclick="deleteDraftAction('${key}'); renderBackupModalDraftsList();" style="font-size: 0.76rem; padding: 0.3rem 0.55rem; color: var(--danger);" title="Xóa bản nháp này">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function resumeDraftFromBackup(catKey, topicId) {
  closeProgressBackupModal();
  selectCategory(catKey);
  AppState.activePracticeTopicId = topicId;
  switchWorkflowTab('practice');
  const textarea = document.getElementById('practiceWritingTextarea');
  if (textarea) {
    textarea.focus();
    textarea.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function downloadAllBackupJson() {
  const backupData = {
    exportedAt: new Date().toISOString(),
    version: '2.0',
    student: AppState.student,
    drafts: AppState.drafts,
    submissions: AppState.submissions
  };

  const str = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
  const dl = document.createElement('a');
  const safeName = (AppState.student?.name || 'VSTEP_Student').replace(/[^\w]/gi, '_');
  dl.setAttribute("href", str);
  dl.setAttribute("download", `VSTEP_B2_Backup_${safeName}_${Date.now()}.json`);
  dl.click();
  showToast('📥 Đã tải file sao lưu toàn bộ tiến độ (.json) về máy tính!', 'success');
}

function triggerImportBackupJson() {
  const fileInput = document.getElementById('backupJsonFileInput');
  if (fileInput) {
    fileInput.value = '';
    fileInput.click();
  }
}

function handleBackupFileImport(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (!data || (!data.drafts && !data.submissions)) {
        showToast('Tệp sao lưu không đúng định dạng VSTEP B2!', 'error');
        return;
      }

      if (data.drafts && typeof data.drafts === 'object') {
        AppState.drafts = Object.assign({}, AppState.drafts, data.drafts);
        localStorage.setItem('vstep_b2_task1_drafts', JSON.stringify(AppState.drafts));
      }

      if (Array.isArray(data.submissions)) {
        const existingIds = new Set(AppState.submissions.map(s => s.id));
        data.submissions.forEach(sub => {
          if (!existingIds.has(sub.id)) {
            AppState.submissions.push(sub);
          }
        });
        localStorage.setItem('vstep_b2_task1_submissions', JSON.stringify(AppState.submissions));
      }

      if (data.student && data.student.name) {
        AppState.student = data.student;
        localStorage.setItem('vstep_b2_task1_student', JSON.stringify(AppState.student));
        updateStudentDisplay();
      }

      renderBackupModalDraftsList();
      showToast('🎉 Đã khôi phục thành công dữ liệu từ tệp sao lưu!', 'success');
    } catch (err) {
      console.error(err);
      showToast('Lỗi đọc tệp sao lưu: ' + err.message, 'error');
    }
  };
  reader.readAsText(file);
}
