// main.js (dashboard-clients)

// تحية ديناميكية باسم المستخدم
document.addEventListener('DOMContentLoaded', function () {
  const greetingSpan = document.getElementById('greeting');
  if (greetingSpan) {
    const hour = new Date().getHours();
    let greet = "Bonjour";
    if (hour < 12) greet = "Bonjour";
    else if (hour < 18) greet = "Bon après-midi";
    else greet = "Bonsoir";
    greetingSpan.textContent = `${greet}, tarekben96 👋`;
  }
});

// (اختياري) عداد تصاعدي للأرقام الإحصائية
function animateStat(id, target) {
  const el = document.getElementById(id);
  if (!el) return;
  let n = 0;
  const step = Math.ceil(target / 30);
  const interval = setInterval(() => {
    n += step;
    if (n >= target) {
      el.textContent = target;
      clearInterval(interval);
    } else {
      el.textContent = n;
    }
  }, 15);
}

// عند تحميل الصفحة شغل العداد على الكروت
document.addEventListener('DOMContentLoaded', function () {
  animateStat('stat-clients', 43);
  animateStat('stat-employees', 8);
  animateStat('stat-orders', 12);
  animateStat('stat-invoices', 27);
});
