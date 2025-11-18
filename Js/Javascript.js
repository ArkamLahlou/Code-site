/**
 * الدالة المسؤولة عن نسخ محتوى كتلة الكود إلى الحافظة.
 * يتم استدعاؤها من خلال خاصية onclick في زر النسخ.
 * @param {string} elementId - مُعرف (ID) كتلة الكود المراد نسخها.
 */
function copyCode(elementId) {
    // 1. الحصول على عنصر الكود باستخدام ID
    const codeElement = document.getElementById(elementId);
    
    // 2. استخراج النص المراد نسخه
    const codeText = codeElement.textContent;
    
    // 3. استخدام واجهة Navigator API لنسخ النص
    navigator.clipboard.writeText(codeText)
        .then(() => {
            // النجاح: إظهار رسالة للمستخدم
            alert("✅ تم نسخ الكود بنجاح إلى الحافظة!");
        })
        .catch(err => {
            // الفشل: في حال عدم دعم المتصفح أو وجود خطأ
            console.error('فشل في عملية النسخ:', err);
            alert("❌ فشل في النسخ. يرجى المحاولة يدوياً.");
        });
          }
