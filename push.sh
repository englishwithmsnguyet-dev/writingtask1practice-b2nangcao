#!/bin/bash
# ==========================================================================
# SCRIPT ĐẨY THAY ĐỔI LÊN GITHUB & ĐỒNG BỘ THƯ MỤC MIRROR
# ==========================================================================

TARGET_DIR="/Users/nguyetpham/Desktop/WEBSITE/WRITING LETTERS - PRACTICE - B2 LEVEL"
MIRROR_DIR="/Users/nguyetpham/Desktop/WEBSITE/WRITING TASK 01 - B2 NÂNG CAO"

cd "$TARGET_DIR" || exit 1

MSG="${1:-feat: cập nhật website VSTEP B2 Nâng Cao}"
NOW=$(date "+%Y-%m-%d %H:%M:%S")

echo "============================================================"
echo "🚀 ĐANG TIẾN HÀNH CẬP NHẬT GITHUB ($NOW)"
echo "🌐 Repo: https://github.com/englishwithmsnguyet-dev/writingtask1practice-b2nangcao.git"
echo "============================================================"

# 1. Đồng bộ sang Mirror
if [ -d "$MIRROR_DIR" ]; then
  echo "📋 1. Đang đồng bộ file sang thư mục mirror..."
  cp -R "$TARGET_DIR/app.js" "$MIRROR_DIR/"
  cp -R "$TARGET_DIR/index.html" "$MIRROR_DIR/"
  cp -R "$TARGET_DIR/styles.css" "$MIRROR_DIR/"
  cp -R "$TARGET_DIR/letters_db.js" "$MIRROR_DIR/"
  cp -R "$TARGET_DIR/theory_data.js" "$MIRROR_DIR/"
  echo "✅ Đã đồng bộ sang mirror thành công!"
fi

# 2. Git add, commit, push
echo "💾 2. Đang đóng gói thay đổi vào Git..."
git add .
git commit -m "$MSG" || echo "ℹ️ Không có thay đổi mới để commit."

echo "🚀 3. Đang đẩy lên GitHub (origin/main)..."
git push origin main

echo ""
echo "🎉 HOÀN TẤT CẬP NHẬT LÊN GITHUB!"
echo "============================================================"
