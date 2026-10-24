// ==========================================================================
// TỰ ĐỘNG ĐỒNG BỘ GITHUB & THƯ MỤC MIRROR KHI CHỈNH SỬA FILE
// Repo: https://github.com/englishwithmsnguyet-dev/writingtask1practice-b2nangcao.git
// ==========================================================================

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const WORKSPACE_DIR = __dirname;
const MIRROR_DIR = '/Users/nguyetpham/Desktop/WEBSITE/WRITING TASK 01 - B2 NÂNG CAO';

const WATCH_EXTENSIONS = ['.html', '.css', '.js', '.json', '.png', '.jpg', '.gif', '.svg'];
const IGNORED_NAMES = ['.git', '.DS_Store', 'auto_sync.js', 'node_modules', '.bak'];

let debounceTimer = null;
let isSyncing = false;
let pendingFiles = new Set();

console.log('------------------------------------------------------------');
console.log('🤖 BẮT ĐẦU CHẾ ĐỘ TỰ ĐỘNG CẬP NHẬT GITHUB (AUTO-SYNC)');
console.log(`📁 Thư mục gốc: ${WORKSPACE_DIR}`);
console.log(`📁 Thư mục mirror: ${MIRROR_DIR}`);
console.log('🌐 Remote: https://github.com/englishwithmsnguyet-dev/writingtask1practice-b2nangcao.git');
console.log('⏳ Đang theo dõi các thay đổi file... (Mỗi khi bạn lưu file, hệ thống sẽ tự đồng bộ)');
console.log('------------------------------------------------------------');

function shouldWatchFile(filename) {
  if (!filename) return false;
  if (IGNORED_NAMES.some(ignored => filename.includes(ignored))) return false;
  const ext = path.extname(filename).toLowerCase();
  return WATCH_EXTENSIONS.includes(ext);
}

function syncToMirror(filePath) {
  try {
    if (!fs.existsSync(MIRROR_DIR)) return;
    const relPath = path.relative(WORKSPACE_DIR, filePath);
    const destPath = path.join(MIRROR_DIR, relPath);
    const destDir = path.dirname(destPath);
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
    fs.copyFileSync(filePath, destPath);
    console.log(`  └─ 📋 Đã đồng bộ sang mirror: ${relPath}`);
  } catch (err) {
    console.warn(`  └─ ⚠️ Không thể sao chép sang mirror: ${err.message}`);
  }
}

function runGitAutoCommitAndPush() {
  if (isSyncing) return;
  isSyncing = true;

  try {
    // 1. Kiểm tra trạng thái Git
    const status = execSync('git status --porcelain', { cwd: WORKSPACE_DIR, encoding: 'utf8' }).trim();
    if (!status) {
      console.log('ℹ️ Không có thay đổi nào cần cập nhật lên GitHub.');
      isSyncing = false;
      return;
    }

    console.log('\n⚡ Phát hiện thay đổi, đang chuẩn bị cập nhật GitHub...');

    // 2. Đồng bộ các file thay đổi sang thư mục mirror
    for (const file of pendingFiles) {
      const fullPath = path.join(WORKSPACE_DIR, file);
      if (fs.existsSync(fullPath)) {
        syncToMirror(fullPath);
      }
    }
    pendingFiles.clear();

    // 3. Git add
    execSync('git add .', { cwd: WORKSPACE_DIR, stdio: 'pipe' });

    // 4. Git commit
    const now = new Date();
    const timeStr = now.toLocaleTimeString('vi-VN', { hour12: false }) + ' ' + now.toLocaleDateString('vi-VN');
    const commitMsg = `auto-sync: cập nhật bài học & giao diện (${timeStr})`;
    execSync(`git commit -m "${commitMsg}"`, { cwd: WORKSPACE_DIR, stdio: 'pipe' });
    console.log(`  └─ 💾 Đã tạo commit: "${commitMsg}"`);

    // 5. Git push
    console.log('  └─ 🚀 Đang đẩy mã nguồn lên GitHub (origin/main)...');
    execSync('git push origin main', { cwd: WORKSPACE_DIR, stdio: 'pipe' });
    console.log(`✅ [${timeStr}] ĐÃ TỰ ĐỘNG CẬP NHẬT LÊN GITHUB THÀNH CÔNG! 🎉\n`);
  } catch (err) {
    console.error('❌ Lỗi khi tự động cập nhật GitHub:', err.message);
  } finally {
    isSyncing = false;
  }
}

// Bắt đầu theo dõi
fs.watch(WORKSPACE_DIR, { recursive: true }, (eventType, filename) => {
  if (!shouldWatchFile(filename)) return;

  pendingFiles.add(filename);
  console.log(`📝 Phát hiện chỉnh sửa file: ${filename}`);

  clearTimeout(debounceTimer);
  // Đợi 3.5 giây sau lần gõ/lưu cuối để gom các file cùng lưu lại thành 1 commit
  debounceTimer = setTimeout(() => {
    runGitAutoCommitAndPush();
  }, 3500);
});
