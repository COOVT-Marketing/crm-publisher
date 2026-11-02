(function () {
  const css = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
:root{--bg:#0d1110;--surface:#161b19;--surface2:#1c221f;--surface3:#222925;--border:#2a322e;--border-soft:#343c38;--text:#eef1ef;--muted:#7d8782;--accent:#3d9a9a;--accent-soft:rgba(61,154,154,.15);--accent-h:#348585;--gold:#e8b84a;--danger:#e05c5c;--radius:16px;--radius-sm:10px;--shadow:0 1px 2px rgba(0,0,0,.4),0 8px 24px rgba(0,0,0,.25);--inv-primary:#548888;--inv-bg:#f8fafa;--inv-text:#1e293b;--inv-muted:#64748b;--inv-border:#e2e8f0;--chart-line:#e8b84a;--chart-fill:rgba(232,184,74,.12)}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Inter',system-ui,-apple-system,sans-serif;background:var(--bg);color:var(--text);min-height:100vh;-webkit-font-smoothing:antialiased}
#root{min-height:100vh}
.card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow)}
.metric{background:linear-gradient(165deg,var(--surface2) 0%,var(--surface) 100%);border:1px solid var(--border);border-radius:var(--radius);padding:1.25rem 1.35rem;transition:border-color .2s}
.metric:hover{border-color:var(--border-soft)}
.metric-label{font-size:11px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin-bottom:10px}
.metric-value{font-size:1.75rem;font-weight:700;letter-spacing:-0.03em;line-height:1.15}
.metric-value .unit{font-size:12px;font-weight:500;color:var(--muted);margin-left:3px}
.metric-sub{font-size:12px;color:var(--muted);margin-top:8px;font-variant-numeric:tabular-nums}
.input-dark{background:var(--surface3);border:1px solid var(--border);color:var(--text);border-radius:var(--radius-sm);font-size:13px;transition:border-color .2s,box-shadow .2s}
.input-dark:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-soft)}
.input-dark::placeholder{color:var(--muted)}
.nav-link{color:var(--muted);font-size:13.5px;font-weight:500;padding-bottom:6px;border-bottom:2px solid transparent;background:none;border-top:none;border-left:none;border-right:none;cursor:pointer;transition:color .2s,border-color .2s}
.nav-link:hover{color:var(--text)}
.nav-link.active{color:var(--text);border-bottom-color:var(--accent)}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:7px;font-size:13px;font-weight:500;border-radius:var(--radius-sm);cursor:pointer;transition:background .2s,opacity .15s,transform .1s;border:none}
.btn:active{transform:scale(.98)}
.btn-primary{background:var(--accent);color:#fff;padding:8px 16px}
.btn-primary:hover{background:var(--accent-h)}
.btn-ghost{background:var(--surface3);color:var(--muted);border:1px solid var(--border);padding:8px 14px}
.btn-ghost:hover{background:var(--border);color:var(--text)}
.btn-export{background:var(--text);color:var(--bg);font-weight:600;padding:8px 16px}
.btn-export:hover{opacity:.92}
.btn-invoice{background:#548888;color:#fff;font-weight:600;padding:8px 16px}
.btn-invoice:hover{background:#467373}
.btn-toggle{background:transparent;color:var(--accent);border:1px solid var(--border);padding:7px 14px;font-size:12.5px;font-weight:500;border-radius:var(--radius-sm);cursor:pointer;display:inline-flex;align-items:center;gap:6px}
.btn-toggle:hover{background:var(--accent-soft);border-color:var(--accent)}
.table-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch}
table{width:100%;border-collapse:collapse}
thead tr{background:var(--surface2)}
th{font-size:11px;font-weight:500;letter-spacing:.05em;text-transform:uppercase;color:var(--muted);text-align:left;padding:12px 20px}
td{padding:13px 20px;font-size:13.5px;border-top:1px solid var(--border)}
tbody tr{transition:background .12s}
tbody tr:hover{background:rgba(61,154,154,.04)}
.status-billable{display:inline-block;background:var(--accent-soft);color:#6bc4c4;font-size:11px;font-weight:600;padding:3px 9px;border-radius:6px}
.status-non{display:inline-block;background:rgba(125,135,130,.12);color:var(--muted);font-size:11px;font-weight:600;padding:3px 9px;border-radius:6px}
.site-header{background:rgba(13,17,16,.82);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid var(--border);position:sticky;top:0;z-index:30}
.extra-metrics{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;max-height:0;overflow:hidden;opacity:0;transition:max-height .35s ease,opacity .3s ease,margin .3s ease;margin-top:0}
.extra-metrics.open{max-height:160px;opacity:1;margin-top:14px}
.login-card{background:var(--surface);border:1px solid var(--border);border-radius:20px;box-shadow:0 0 80px rgba(61,154,154,.08),var(--shadow);padding:2.5rem;width:100%;max-width:400px}
.fade-in{animation:fadeIn .3s ease}
@keyframes fadeIn{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:none}}
.chevron{transition:transform .25s ease}
.chevron.rotated{transform:rotate(180deg)}
::-webkit-scrollbar{width:5px;height:5px}
::-webkit-scrollbar-track{background:transparent}
::-webkit-scrollbar-thumb{background:var(--border);border-radius:4px}
::-webkit-scrollbar-thumb:hover{background:var(--border-soft)}
.chart-card{padding:1.25rem 1.35rem}
.chart-title{font-size:11px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin-bottom:16px}
.chart-wrap{position:relative;height:280px;width:100%}
.stat-cards{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
@media(max-width:640px){.stat-cards{grid-template-columns:1fr}.chart-wrap{height:220px}}
.inv-modal{position:fixed;inset:0;z-index:1000;display:none;overflow-y:auto;background:rgba(15,23,42,.55);backdrop-filter:blur(6px)}
.inv-modal.open{display:block}
.inv-panel{max-width:720px;margin:2rem auto;background:#fff;border-radius:20px;box-shadow:0 25px 50px -12px rgba(0,0,0,.35);overflow:hidden}
.inv-toolbar{display:flex;align-items:center;justify-content:space-between;padding:14px 24px;border-bottom:1px solid var(--inv-border);background:#fafbfc}
.inv-toolbar h2{font-size:16px;font-weight:600;color:var(--inv-text)}
.inv-actions{display:flex;gap:10px}
.btn-print{display:inline-flex;align-items:center;gap:7px;background:var(--inv-primary);color:#fff;font-size:13px;font-weight:600;padding:9px 16px;border:none;border-radius:8px;cursor:pointer}
.btn-print:hover{background:#467373}
.btn-pdf{display:inline-flex;align-items:center;gap:7px;background:#1e293b;color:#fff;font-size:13px;font-weight:600;padding:9px 16px;border:none;border-radius:8px;cursor:pointer}
.btn-pdf:hover{background:#0f172a}
.btn-close-inv{width:36px;height:36px;display:flex;align-items:center;justify-content:center;background:transparent;border:1px solid var(--inv-border);border-radius:8px;color:var(--inv-muted);cursor:pointer;font-size:18px}
.btn-close-inv:hover{background:#f1f5f9;color:var(--inv-text)}
.inv-body{padding:32px 36px 28px;color:var(--inv-text);font-family:'Inter',system-ui,sans-serif;background:#ffffff}
.inv-header{display:flex;justify-content:space-between;align-items:flex-start;gap:28px;margin-bottom:20px}
.inv-brand{display:flex;gap:14px;align-items:center}
.inv-logo{width:52px;height:52px;border-radius:12px;background:linear-gradient(145deg,#f0f7f7 0%,#e8f2f2 100%);border:1px solid #d4e4e4;display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0}
.inv-logo img{height:34px;width:auto;object-fit:contain}
.inv-company h1{font-size:18px;font-weight:700;color:var(--inv-primary);letter-spacing:-0.02em}
.inv-company .tagline{font-size:12px;color:var(--inv-muted);margin-top:3px}
.inv-meta{text-align:right}
.inv-badge{display:inline-block;background:linear-gradient(135deg,#548888 0%,#3d6e6e 100%);color:#fff;font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:5px 14px;border-radius:6px;margin-bottom:14px}
.inv-meta-row{display:flex;justify-content:flex-end;gap:12px;font-size:13px;margin-bottom:5px}
.inv-meta-row span:first-child{color:var(--inv-muted);font-weight:500}
.inv-meta-row span:last-child{font-weight:600;color:var(--inv-text);font-variant-numeric:tabular-nums}
.inv-divider{height:1px;background:linear-gradient(90deg,transparent,var(--inv-border),transparent);margin:0 0 20px}
.inv-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px}
@media(max-width:640px){.inv-grid{grid-template-columns:1fr}.inv-header{flex-direction:column}.inv-meta{text-align:left}.inv-meta-row{justify-content:flex-start}}
.inv-section-title{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--inv-muted);margin-bottom:10px}
.bill-to{background:var(--inv-bg);border:1px solid var(--inv-border);border-radius:12px;padding:16px 18px}
.bill-to strong{font-size:15px;font-weight:600;color:var(--inv-text);display:block}
.bank-box{background:var(--inv-bg);border:1px solid var(--inv-border);border-radius:12px;padding:16px 18px}
.bank-box .inv-section-title{color:var(--inv-primary)}
.bank-row{display:flex;justify-content:space-between;gap:12px;font-size:13px;margin-bottom:6px}
.bank-row:last-child{margin-bottom:0}
.bank-row span:first-child{color:var(--inv-muted)}
.bank-row span:last-child{font-weight:500;color:var(--inv-text);text-align:right;font-variant-numeric:tabular-nums}
.inv-summary{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:20px}
@media(max-width:480px){.inv-summary{grid-template-columns:1fr}}
.inv-stat{background:linear-gradient(165deg,#f8fafa 0%,#f0f5f5 100%);border:1px solid var(--inv-border);border-radius:14px;padding:16px 18px;text-align:center}
.inv-stat-label{font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--inv-muted);margin-bottom:8px}
.inv-stat-value{font-size:1.75rem;font-weight:700;letter-spacing:-0.03em;line-height:1.1;color:var(--inv-text)}
.inv-stat-value.gold{color:#b8860b}
.inv-stat-value.teal{color:var(--inv-primary)}
.inv-stat-sub{font-size:12px;color:var(--inv-muted);margin-top:6px}
.inv-line-item{border:1px solid var(--inv-border);border-radius:12px;overflow:hidden;margin-bottom:18px}
.inv-line-head{display:grid;grid-template-columns:1fr 100px 120px;background:var(--inv-primary);padding:11px 20px;gap:12px}
.inv-line-head span{font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#fff}
.inv-line-head span:nth-child(2),.inv-line-head span:nth-child(3){text-align:right}
.inv-line-body{display:grid;grid-template-columns:1fr 100px 120px;padding:16px 20px;gap:12px;align-items:center;background:#fff}
.inv-line-body span:nth-child(2),.inv-line-body span:nth-child(3){text-align:right;font-variant-numeric:tabular-nums;font-weight:600}
.inv-line-desc{font-size:14px;font-weight:500;color:var(--inv-text)}
.inv-line-desc small{display:block;font-size:12px;font-weight:400;color:var(--inv-muted);margin-top:3px}
.inv-totals{display:flex;justify-content:flex-end;margin-bottom:8px}
.totals-box{width:280px;background:var(--inv-bg);border:1px solid var(--inv-border);border-radius:12px;padding:16px 20px}
.total-row{display:flex;justify-content:space-between;font-size:13px;margin-bottom:10px}
.total-row span:first-child{color:var(--inv-muted)}
.total-row span:last-child{font-weight:500;font-variant-numeric:tabular-nums}
.total-final{border-top:1px solid var(--inv-border);padding-top:14px;margin-top:4px;display:flex;justify-content:space-between;align-items:center}
.total-final span:first-child{font-size:14px;font-weight:700;color:var(--inv-text)}
.total-badge{background:linear-gradient(135deg,#548888 0%,#3d6e6e 100%);color:#fff;font-size:16px;font-weight:700;padding:8px 16px;border-radius:8px;letter-spacing:-0.01em}
.inv-form{padding:20px 24px;background:#f8fafc;border-bottom:1px solid var(--inv-border)}
.inv-form-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
@media(max-width:640px){.inv-form-grid{grid-template-columns:1fr}}
.inv-form label{display:block;font-size:12px;font-weight:500;color:#64748b;margin-bottom:6px}
.inv-form input,.inv-form select{width:100%;padding:9px 12px;border:1px solid #e2e8f0;border-radius:8px;font-size:13px;color:#1e293b;background:#fff}
.inv-form input:focus,.inv-form select:focus{outline:none;border-color:#548888;box-shadow:0 0 0 3px rgba(84,136,136,.15)}
.paid-modal{position:fixed;inset:0;z-index:1100;display:none;align-items:center;justify-content:center;padding:20px;background:rgba(5,8,7,.65);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}
.paid-modal.open{display:flex;animation:fadeIn .2s ease}
.pm-card{width:100%;max-width:420px;background:var(--surface);border:1px solid var(--border);border-radius:20px;box-shadow:0 0 80px rgba(61,154,154,.08),var(--shadow);padding:1.75rem}
.pm-icon{width:42px;height:42px;border-radius:12px;background:var(--accent-soft);color:#6bc4c4;display:flex;align-items:center;justify-content:center;margin-bottom:16px}
.pm-icon.danger{background:rgba(224,92,92,.12);color:var(--danger)}
.pm-title{font-size:17px;font-weight:600;letter-spacing:-.01em}
.pm-sub{font-size:12.5px;color:var(--muted);margin-top:4px;line-height:1.5}
.pm-label{display:block;font-size:11px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin:22px 0 8px}
.pm-input{display:flex;align-items:center;background:var(--surface3);border:1px solid var(--border);border-radius:var(--radius-sm);padding:0 14px;transition:border-color .2s,box-shadow .2s}
.pm-input:focus-within{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-soft)}
.pm-input span{color:var(--gold);font-weight:600;font-size:18px;margin-right:6px}
.pm-input input{flex:1;min-width:0;background:transparent;border:none;outline:none;color:var(--text);font-size:18px;font-weight:600;padding:13px 0;font-variant-numeric:tabular-nums}
.pm-hint{font-size:12px;color:var(--muted);margin-top:8px}
.pm-error{font-size:12px;color:var(--danger);margin-top:8px}
.pm-actions{display:flex;gap:10px;margin-top:24px}
.pm-actions .btn{flex:1;padding:11px 16px}
.btn-danger{background:var(--danger);color:#fff}
.btn-danger:hover{opacity:.9}
.status-paid{display:inline-block;background:rgba(107,196,196,.15);color:#6bc4c4;font-size:11px;font-weight:600;padding:3px 9px;border-radius:6px}
.status-pending{display:inline-block;background:rgba(232,184,74,.12);color:var(--gold);font-size:11px;font-weight:600;padding:3px 9px;border-radius:6px}
.btn-mini{font-size:12px;font-weight:500;padding:6px 11px;border-radius:8px;border:1px solid var(--border);background:var(--surface3);color:var(--muted);cursor:pointer;transition:background .2s,color .2s;white-space:nowrap}
.btn-mini:hover{background:var(--border);color:var(--text)}
.btn-mini-primary{background:var(--accent);border-color:var(--accent);color:#fff}
.btn-mini-primary:hover{background:var(--accent-h);color:#fff}
.seg{display:inline-flex;background:var(--surface3);border:1px solid var(--border);border-radius:var(--radius-sm);padding:3px;gap:2px}
.seg-btn{font-size:12px;font-weight:500;color:var(--muted);padding:6px 14px;border-radius:7px;border:none;background:transparent;cursor:pointer;transition:background .2s,color .2s}
.seg-btn:hover:not(.active){color:var(--text)}
.seg-btn.active{background:var(--accent);color:#fff}
.th-sort{cursor:pointer;user-select:none}
.th-sort:hover{color:var(--text)}
@media print{
  body *{visibility:hidden!important}
  .inv-modal,.inv-modal *{visibility:visible!important}
  .inv-modal{position:absolute!important;left:0!important;top:0!important;width:100%!important;background:white!important;overflow:visible!important}
  .inv-toolbar,.inv-form{display:none!important}
  .inv-panel{box-shadow:none!important;border-radius:0!important;margin:0!important;max-width:none!important}
  .inv-body{padding:0!important}
  .inv-header{margin-bottom:18px!important}
  .inv-divider{margin-bottom:18px!important}
  .inv-grid{gap:14px!important;margin-bottom:18px!important}
  .inv-summary{gap:12px!important;margin-bottom:18px!important}
  .inv-stat{padding:14px 16px!important}
  .inv-stat-value{font-size:1.5rem!important}
  .inv-line-item{margin-bottom:16px!important}
  .inv-line-head{padding:9px 16px!important}
  .inv-line-body{padding:12px 16px!important}
  .totals-box{padding:12px 16px!important}
  .bill-to,.bank-box{padding:12px 14px!important}
  @page{size:A4;margin:12mm 14mm}
}
`;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  // Chart.js
  const chartScript = document.createElement("script");
  chartScript.src = "https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js";
  document.head.appendChild(chartScript);

  const html2pdfScript = document.createElement("script");
  html2pdfScript.src = "https://cdn.jsdelivr.net/npm/html2pdf.js@0.10.1/dist/html2pdf.bundle.min.js";
  document.head.appendChild(html2pdfScript);

  // Standalone jsPDF as reliable PDF backend (no html2canvas)
  const jspdfScript = document.createElement("script");
  jspdfScript.src = "https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js";
  document.head.appendChild(jspdfScript);

  const VTM_LOGO_DATA = "data:image/png;base64,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";
  const API = "https://script.google.com/macros/s/AKfycbw7CBJksXRQFzwTvwCWUKfp-S_1BUUNfo4c4y-22emeX81jRa0PRHkiiJ8lFwRQpMAqVA/exec";
  let calls = [], monthly = [], timer = null, extraOpen = false;
  let payoutChart = null;
  let defaultsApplied = false;   // Overview opens on today's date once per login
  let chartMode = "payout";      // "payout" | "calls"
  let stateSort = "avg_desc";    // key_dir
  /* Paid months: { "2026-08": { amount: 1234.5, paidOn: "2026-10-05" } } (stored in this browser) */
  const PAID_KEY = "vtm_paid_months";
  // Shift runs 7 PM -> 5 AM. Before 6 AM local time the "current day" is still last night's shift,
  // so the range starts yesterday (7 PM-midnight calls) and ends today (midnight-5 AM calls).
  const SHIFT_CUTOFF_HOUR = 6;
  function defaultDateRange() {
    const now = new Date();
    const today = formatDate(now);
    if (now.getHours() < SHIFT_CUTOFF_HOUR) {
      const y = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
      return { from: formatDate(y), to: today };
    }
    return { from: today, to: today };
  }
  function loadPaid() {
    try { return JSON.parse(localStorage.getItem(PAID_KEY) || "{}") || {}; } catch (e) { return {}; }
  }
  function savePaid(o) {
    try { localStorage.setItem(PAID_KEY, JSON.stringify(o)); } catch (e) {}
  }
  let paidMonths = loadPaid();
  function isPaidCall(c) {
    const k = getRowDate(c.dts).slice(0, 7);
    return !!(k && paidMonths[k]);
  }
  function splitPayout(rows) {
    let all = 0, pending = 0, paid = 0;
    rows.forEach(c => {
      const p = Number(c.payout) || 0;
      all += p;
      if (isPaidCall(c)) paid += p; else pending += p;
    });
    return { all, pending, paid };
  }

  function checkLogin() {
    if (localStorage.getItem("vtm_logged_in") === "true") {
      document.getElementById("a0").classList.add("hidden");
      document.getElementById("a4").classList.remove("hidden");
      loadData();
      timer = setInterval(loadData, 60000);
    }
  }
  function formatTs(v) {
    if (v == null || v === "") return "—";
    const s = String(v).trim();
    if (!s) return "—";
    if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s;
    const d = new Date(s);
    if (isNaN(d.getTime())) return s;
    const p = n => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
  }
  async function api(action, params = {}) {
    const u = new URL(API);
    u.searchParams.set("action", action);
    Object.keys(params).forEach(k => u.searchParams.set(k, params[k]));
    const r = await fetch(u.toString());
    if (!r.ok) throw new Error("Network error");
    return await r.json();
  }
  async function doLogin() {
    const pwd = document.getElementById("a1").value;
    const btn = document.getElementById("a2");
    btn.disabled = true;
    btn.textContent = "Sign in...";
    try {
      const res = await api("login", { password: pwd });
      if (res.success) {
        localStorage.setItem("vtm_logged_in", "true");
        document.getElementById("a0").classList.add("hidden");
        document.getElementById("a4").classList.remove("hidden");
        loadData();
        timer = setInterval(loadData, 60000);
      } else {
        document.getElementById("a3").classList.remove("hidden");
      }
    } catch (e) {
      alert("Login failed: " + e.message);
    } finally {
      btn.disabled = false;
      btn.textContent = "Sign In";
    }
  }
  function doLogout() {
    if (timer) clearInterval(timer);
    defaultsApplied = false;
    localStorage.removeItem("vtm_logged_in");
    document.getElementById("a4").classList.add("hidden");
    document.getElementById("a0").classList.remove("hidden");
    document.getElementById("a1").value = "";
    document.getElementById("a3").classList.add("hidden");
    if (payoutChart) {
      payoutChart.destroy();
      payoutChart = null;
    }
  }
  async function loadData() {
    try {
      const [c, m] = await Promise.all([api("getCalls"), api("getMonthly")]);
      calls = c.data || [];
      monthly = m.data || [];
      if (!defaultsApplied) {
        defaultsApplied = true;
        const r = defaultDateRange();
        document.getElementById("ag").value = r.from;
        document.getElementById("ah").value = r.to;
      }
      applyFilters();
      renderMonthly(monthly);
      if (!document.getElementById("am").classList.contains("hidden")) {
        renderAnalytics();
      }
      if (document.getElementById("invoiceModal").classList.contains("open")) {
        generateInvoice();
      }
    } catch (e) {
      console.error(e);
    }
  }
  function getFiltered() {
    const q = (document.getElementById("af").value || "").toLowerCase().trim();
    const fr = document.getElementById("ag").value;
    const to = document.getElementById("ah").value;
    const st = document.getElementById("ai").value;
    return calls.filter(r => {
      if (q) {
        const h = `${r.ani || ""} ${r.state || ""} ${r.dts || ""}`.toLowerCase();
        if (!h.includes(q)) return false;
      }
      if (fr || to) {
        let rd = "";
        if (r.dts) {
          const m = String(r.dts).match(/(\d{4})-(\d{2})-(\d{2})/);
          if (m) rd = m[0];
          else {
            const d = new Date(r.dts);
            if (!isNaN(d.getTime())) {
              const p = n => String(n).padStart(2, "0");
              rd = `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
            }
          }
        }
        if (fr && rd < fr) return false;
        if (to && rd > to) return false;
      }
      const po = Number(r.payout) || 0;
      if (st === "billable" && po <= 0) return false;
      if (st === "nonbillable" && po > 0) return false;
      return true;
    });
  }
  function applyFilters() {
    const f = getFiltered();
    renderTable(f);
    renderMetrics(f);
  }
  function clearFilters() {
    document.getElementById("af").value = "";
    document.getElementById("ag").value = "";
    document.getElementById("ah").value = "";
    document.getElementById("ai").value = "all";
    applyFilters();
  }
  function renderMetrics(rows) {
    if (!rows || !rows.length) {
      document.getElementById("a9").textContent = "0";
      document.getElementById("aa").textContent = "$0.00";
      document.getElementById("ab").innerHTML = '0 <span class="unit">sec</span>';
      document.getElementById("ac").textContent = "$0.00";
      document.getElementById("ad").textContent = "$0.00";
      document.getElementById("ae").textContent = "$0.00";
      return;
    }
    let td = 0, lo = Infinity, hi = -Infinity;
    rows.forEach(c => {
      const p = Number(c.payout) || 0;
      td += Number(c.call_duration_sec) || 0;
      if (p > 0) {
        if (p < lo) lo = p;
        if (p > hi) hi = p;
      }
    });
    const sp = splitPayout(rows);
    document.getElementById("a9").textContent = rows.length;
    // Total Payout = only what is still to be received (paid months excluded)
    document.getElementById("aa").textContent = "$" + sp.pending.toFixed(2);
    document.getElementById("ab").innerHTML = Math.round(td / rows.length) + ' <span class="unit">sec</span>';
    document.getElementById("ac").textContent = "$" + (sp.all / rows.length).toFixed(2);
    document.getElementById("ad").textContent = lo === Infinity ? "$0.00" : "$" + lo.toFixed(2);
    document.getElementById("ae").textContent = hi === -Infinity ? "$0.00" : "$" + hi.toFixed(2);
  }
  /* ---------- Analytics (with Date / Month / State filters) ---------- */
  function getRowDate(dts) {
    if (!dts) return "";
    const m = String(dts).match(/(\d{4})-(\d{2})-(\d{2})/);
    if (m) return m[0];
    const d = new Date(dts);
    if (isNaN(d.getTime())) return "";
    const p = n => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  }
  function normState(c) {
    return ((c.state || "Unknown").toString().trim().toUpperCase()) || "UNKNOWN";
  }
  // If From is after To, they are swapped.
  function getAnalyticsRange() {
    let from = document.getElementById("anFrom").value;
    let to = document.getElementById("anTo").value;
    if (from && to && from > to) {
      const t = from; from = to; to = t;
    }
    return { from, to };
  }
  function getAnalyticsFiltered() {
    const { from, to } = getAnalyticsRange();
    const st = document.getElementById("anState").value;
    return calls.filter(c => {
      const d = getRowDate(c.dts);
      if ((from || to) && !d) return false;
      if (from && d < from) return false;
      if (to && d > to) return false;
      if (st !== "all" && normState(c) !== st) return false;
      return true;
    });
  }
  function populateStateFilter() {
    const sel = document.getElementById("anState");
    const current = sel.value || "all";
    const states = [...new Set(calls.map(normState))].sort();
    sel.innerHTML = `<option value="all">All States</option>` +
      states.map(s => `<option value="${s}">${s}</option>`).join("");
    sel.value = states.includes(current) ? current : "all";
  }
  function onAnRange() {
    renderAnalytics();
  }
  function clearAnalyticsFilters() {
    document.getElementById("anFrom").value = "";
    document.getElementById("anTo").value = "";
    document.getElementById("anState").value = "all";
    renderAnalytics();
  }
  function findExtremes(rows) {
    let longest = null, shortest = null;
    rows.forEach(c => {
      const d = Number(c.call_duration_sec);
      if (!isFinite(d) || d <= 0) return;
      if (!longest || d > Number(longest.call_duration_sec)) longest = c;
      if (!shortest || d < Number(shortest.call_duration_sec)) shortest = c;
    });
    return { longest, shortest };
  }
  function renderCallExtremes(rows) {
    const { longest, shortest } = findExtremes(rows);
    const longEl = document.getElementById("anLongest");
    const shortEl = document.getElementById("anShortest");
    const longSub = document.getElementById("anLongestSub");
    const shortSub = document.getElementById("anShortestSub");
    if (longest) {
      longEl.innerHTML = Math.round(Number(longest.call_duration_sec)) + ' <span class="unit">sec</span>';
      longSub.textContent = (longest.state || "—").toString().toUpperCase();
    } else {
      longEl.innerHTML = '— <span class="unit">sec</span>';
      longSub.textContent = "No data";
    }
    if (shortest) {
      shortEl.innerHTML = Math.round(Number(shortest.call_duration_sec)) + ' <span class="unit">sec</span>';
      shortSub.textContent = (shortest.state || "—").toString().toUpperCase();
    } else {
      shortEl.innerHTML = '— <span class="unit">sec</span>';
      shortSub.textContent = "No data";
    }
  }
  function buildDailySeries(rows, mode) {
    const map = {};
    rows.forEach(c => {
      const d = getRowDate(c.dts);
      if (!d) return;
      if (!map[d]) map[d] = 0;
      map[d] += mode === "calls" ? 1 : (Number(c.payout) || 0);
    });
    const keys = Object.keys(map).sort();
    return {
      labels: keys.map(k => {
        const parts = k.split("-");
        return parts.length === 3 ? `${parts[1]}-${parts[2]}` : k;
      }),
      fullDates: keys,
      values: keys.map(k => map[k])
    };
  }
  function setChartMode(mode) {
    chartMode = mode === "calls" ? "calls" : "payout";
    document.getElementById("chartModePayout").classList.toggle("active", chartMode === "payout");
    document.getElementById("chartModeCalls").classList.toggle("active", chartMode === "calls");
    document.getElementById("chartTitle").textContent = chartMode === "calls" ? "Daily Calls Chart" : "Daily Payout Chart";
    renderPayoutChart(getAnalyticsFiltered());
  }
  function renderPayoutChart(rows) {
    const canvas = document.getElementById("payoutChart");
    if (!canvas || typeof Chart === "undefined") return;
    const isCalls = chartMode === "calls";
    const data = buildDailySeries(rows, chartMode);
    const color = isCalls ? "#3d9a9a" : "#e8b84a";
    const fill = isCalls ? "rgba(61,154,154,0.15)" : "rgba(232,184,74,0.12)";
    const hover = isCalls ? "#6bc4c4" : "#f0c96a";
    if (payoutChart) {
      payoutChart.destroy();
      payoutChart = null;
    }
    if (!data.labels.length) {
      return;
    }
    const ctx = canvas.getContext("2d");
    payoutChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.labels,
        datasets: [{
          label: isCalls ? "Calls" : "Payout",
          data: data.values,
          borderColor: color,
          backgroundColor: fill,
          borderWidth: 2.5,
          fill: true,
          tension: 0.35,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointBackgroundColor: color,
          pointBorderColor: "#161b19",
          pointBorderWidth: 2,
          pointHoverBackgroundColor: hover,
          pointHoverBorderColor: "#161b19"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: "index", intersect: false },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "rgba(22,27,25,0.95)",
            titleColor: "#eef1ef",
            bodyColor: "#eef1ef",
            borderColor: "#2a322e",
            borderWidth: 1,
            padding: 12,
            cornerRadius: 10,
            displayColors: false,
            callbacks: {
              title: (items) => {
                const i = items[0]?.dataIndex;
                return data.fullDates[i] || items[0]?.label || "";
              },
              label: (ctx) => isCalls ? `Calls: ${ctx.raw}` : `Payout: $${Number(ctx.raw).toFixed(2)}`
            }
          }
        },
        scales: {
          x: {
            grid: { color: "rgba(42,50,46,0.6)", drawBorder: false },
            ticks: {
              color: "#7d8782",
              font: { size: 11, family: "Inter, system-ui, sans-serif" },
              maxRotation: 0,
              autoSkip: true,
              maxTicksLimit: 12
            }
          },
          y: {
            beginAtZero: true,
            grid: { color: "rgba(42,50,46,0.6)", drawBorder: false },
            ticks: {
              color: "#7d8782",
              font: { size: 11, family: "Inter, system-ui, sans-serif" },
              precision: isCalls ? 0 : undefined,
              callback: (v) => isCalls ? v : "$" + v
            }
          }
        }
      }
    });
  }
  function renderAnalytics() {
    populateStateFilter();
    const rows = getAnalyticsFiltered();
    let b = 0, n = 0;
    rows.forEach(c => {
      const p = Number(c.payout) || 0;
      if (p > 0) b++; else n++;
    });
    const sp = splitPayout(rows);
    document.getElementById("an").textContent = rows.length;
    document.getElementById("ao").textContent = b;
    document.getElementById("ap").textContent = n;
    // Total Payout = still to be received (paid months excluded); Avg uses every call
    document.getElementById("anTotal").textContent = "$" + sp.pending.toFixed(2);
    document.getElementById("anAvg").textContent = "$" + (rows.length ? sp.all / rows.length : 0).toFixed(2);
    const { from, to } = getAnalyticsRange();
    const st = document.getElementById("anState").value;
    let when = "All time";
    if (from && to) when = `${from} → ${to}`;
    else if (from) when = `From ${from}`;
    else if (to) when = `Until ${to}`;
    const parts = [when, st === "all" ? "All states" : st];
    document.getElementById("anRange").textContent = parts.join(" · ");
    renderCallExtremes(rows);
    renderStates(rows);
    // Wait for Chart.js if still loading
    if (typeof Chart !== "undefined") {
      renderPayoutChart(rows);
    } else {
      const wait = setInterval(() => {
        if (typeof Chart !== "undefined") {
          clearInterval(wait);
          renderPayoutChart(rows);
        }
      }, 50);
      setTimeout(() => clearInterval(wait), 5000);
    }
  }
  const byState = (a, b) => a.state.localeCompare(b.state);
  const STATE_SORTS = {
    state_asc: (a, b) => byState(a, b),
    state_desc: (a, b) => byState(b, a),
    calls_desc: (a, b) => b.calls - a.calls || byState(a, b),
    calls_asc: (a, b) => a.calls - b.calls || byState(a, b),
    payout_desc: (a, b) => b.totalPayout - a.totalPayout || byState(a, b),
    payout_asc: (a, b) => a.totalPayout - b.totalPayout || byState(a, b),
    avg_desc: (a, b) => b.avgBid - a.avgBid || byState(a, b),
    avg_asc: (a, b) => a.avgBid - b.avgBid || byState(a, b)
  };
  function getStates(rows) {
    const s = {};
    rows.forEach(c => {
      const st = normState(c);
      if (!s[st]) s[st] = { c: 0, t: 0 };
      s[st].c++;
      s[st].t += Number(c.payout) || 0;
    });
    return Object.keys(s)
      .map(k => ({ state: k, calls: s[k].c, totalPayout: s[k].t, avgBid: s[k].c ? s[k].t / s[k].c : 0 }))
      .sort(STATE_SORTS[stateSort] || STATE_SORTS.avg_desc);
  }
  function setStateSort(val) {
    if (!STATE_SORTS[val]) val = "avg_desc";
    stateSort = val;
    const sel = document.getElementById("stateSort");
    if (sel) sel.value = val;
    renderStates(getAnalyticsFiltered());
  }
  // Clicking a column header: first click = natural order, click again = reverse
  function sortStateBy(key) {
    const [k, dir] = stateSort.split("_");
    const next = k === key
      ? key + "_" + (dir === "asc" ? "desc" : "asc")
      : key + "_" + (key === "state" ? "asc" : "desc");
    setStateSort(next);
  }
  function updateStateSortUI() {
    const [k, dir] = stateSort.split("_");
    const arrow = dir === "asc" ? " ▲" : " ▼";
    [["thState", "state", "State"], ["thCalls", "calls", "Calls"], ["thPayout", "payout", "Total Payout"], ["thAvg", "avg", "Average Bid"]]
      .forEach(([id, key, label]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = label + (k === key ? arrow : "");
      });
    const sel = document.getElementById("stateSort");
    if (sel) sel.value = stateSort;
  }
  function renderStates(rows) {
    updateStateSortUI();
    const st = getStates(rows || getAnalyticsFiltered());
    const tb = document.getElementById("aq");
    tb.innerHTML = "";
    if (!st.length) {
      tb.innerHTML = `<tr><td colspan="4" class="text-center py-8" style="color:var(--muted)">No data for this filter</td></tr>`;
      return;
    }
    st.forEach(s => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td class="font-medium">${s.state}</td>
        <td style="color:var(--muted)">${s.calls}</td>
        <td style="color:var(--gold)">$${s.totalPayout.toFixed(2)}</td>
        <td class="font-medium" style="color:var(--gold)">$${s.avgBid.toFixed(2)}</td>`;
      tb.appendChild(tr);
    });
  }
  /* ---------- Tables ---------- */
  function renderTable(rows) {
    const tb = document.getElementById("ak");
    const nd = document.getElementById("al");
    const rc = document.getElementById("aj");
    tb.innerHTML = "";
    rc.textContent = rows.length ? `${rows.length} record${rows.length !== 1 ? "s" : ""}` : "";
    if (!rows || !rows.length) {
      nd.classList.remove("hidden");
      return;
    }
    nd.classList.add("hidden");
    rows.forEach(r => {
      const p = Number(r.payout) || 0;
      const st = p > 0 ? `<span class="status-billable">Billable</span>` : `<span class="status-non">Non-billable</span>`;
      const tr = document.createElement("tr");
      tr.innerHTML = `<td style="color:var(--muted)">${formatTs(r.dts)}</td>
        <td class="font-mono">${r.ani || "—"}</td>
        <td style="color:var(--muted)">${r.state || "—"}</td>
        <td style="color:var(--muted)">${r.call_duration_sec || "—"}s</td>
        <td class="font-medium" style="color:var(--gold)">$${p.toFixed(2)}</td>
        <td>${st}${p > 0 && isPaidCall(r) ? ' <span class="status-paid">Paid</span>' : ''}</td>`;
      tb.appendChild(tr);
    });
  }
  function normMonthKey(raw) {
    let m = (raw || "").toString().trim();
    if (m.length > 7) {
      const mt = m.match(/(\d{4})-(\d{2})/);
      if (mt) m = mt[0];
      else {
        const d = new Date(m);
        if (!isNaN(d.getTime())) {
          const p = n => String(n).padStart(2, "0");
          m = `${d.getFullYear()}-${p(d.getMonth() + 1)}`;
        }
      }
    }
    return m;
  }
  function renderPaidSummary() {
    const el = document.getElementById("paidSummary");
    if (!el) return;
    let pending = 0, received = 0;
    calls.forEach(c => { if (!isPaidCall(c)) pending += Number(c.payout) || 0; });
    Object.keys(paidMonths).forEach(k => { received += Number(paidMonths[k].amount) || 0; });
    el.innerHTML = `<span style="color:var(--muted)">Pending to receive: <b style="color:var(--gold)">$${pending.toFixed(2)}</b></span>
      <span style="color:var(--muted)">Received (paid months): <b style="color:#6bc4c4">$${received.toFixed(2)}</b></span>`;
  }
  function renderMonthly(rows) {
    const tb = document.getElementById("ar");
    tb.innerHTML = "";
    (rows || []).forEach(r => {
      const m = normMonthKey(r.month);
      const total = Number(r.total_payout || 0);
      const paid = m ? paidMonths[m] : null;
      const statusCell = paid ? `<span class="status-paid">Paid</span>` : `<span class="status-pending">Pending</span>`;
      const paidCell = paid
        ? `<span class="font-medium" style="color:#6bc4c4">$${Number(paid.amount).toFixed(2)}</span>`
        : `<span style="color:var(--muted)">—</span>`;
      const actions = m
        ? `<div class="flex flex-wrap gap-2 justify-end">
             <button class="btn-mini" onclick="viewMonthCalls('${m}')">View Calls</button>
             ${paid
               ? `<button class="btn-mini" onclick="unmarkPaid('${m}')">Undo Paid</button>`
               : `<button class="btn-mini btn-mini-primary" onclick="markPaid('${m}', ${total})">Mark Paid</button>`}
           </div>`
        : "";
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${m || "—"}</td>
        <td class="font-medium" style="color:var(--gold)">$${total.toFixed(2)}</td>
        <td style="color:var(--muted)">${r.total_calls || "—"}</td>
        <td>${statusCell}</td>
        <td>${paidCell}</td>
        <td style="text-align:right">${actions}</td>`;
      tb.appendChild(tr);
    });
    renderPaidSummary();
  }
  function refreshPaidViews() {
    applyFilters();
    renderMonthly(monthly);
    if (!document.getElementById("am").classList.contains("hidden")) renderAnalytics();
  }
  let paidModalState = null;
  function monthLabel(m) {
    const [y, mo] = m.split("-").map(Number);
    return new Date(y, mo - 1, 1).toLocaleString("en-US", { month: "long", year: "numeric" });
  }
  function openPaidModal(mode, m, suggested) {
    paidModalState = { mode, m };
    const isMark = mode === "mark";
    document.getElementById("pmTitle").textContent = isMark ? "Mark as Paid" : "Remove Paid status";
    document.getElementById("pmMonth").textContent = monthLabel(m);
    document.getElementById("pmMarkBody").classList.toggle("hidden", !isMark);
    document.getElementById("pmUndoBody").classList.toggle("hidden", isMark);
    document.getElementById("pmError").classList.add("hidden");
    document.getElementById("pmIcon").classList.toggle("danger", !isMark);
    const btn = document.getElementById("pmConfirm");
    btn.textContent = isMark ? "Mark as Paid" : "Remove Paid";
    btn.className = "btn " + (isMark ? "btn-primary" : "btn-danger");
    const input = document.getElementById("pmAmount");
    if (isMark) {
      input.value = suggested.toFixed(2);
      document.getElementById("pmHint").textContent = `Calls total for this month: $${suggested.toFixed(2)}`;
    }
    document.getElementById("paidModal").classList.add("open");
    if (isMark) setTimeout(() => { input.focus(); input.select(); }, 30);
  }
  function closePaidModal() {
    paidModalState = null;
    document.getElementById("paidModal").classList.remove("open");
  }
  function confirmPaidModal() {
    if (!paidModalState) return;
    const { mode, m } = paidModalState;
    if (mode === "mark") {
      const amt = Number(String(document.getElementById("pmAmount").value).replace(/[$,\s]/g, ""));
      if (!isFinite(amt) || amt < 0 || document.getElementById("pmAmount").value.trim() === "") {
        document.getElementById("pmError").classList.remove("hidden");
        return;
      }
      paidMonths[m] = { amount: amt, paidOn: formatDate(new Date()) };
    } else {
      delete paidMonths[m];
    }
    savePaid(paidMonths);
    closePaidModal();
    refreshPaidViews();
  }
  function markPaid(m, suggested) { openPaidModal("mark", m, Number(suggested) || 0); }
  function unmarkPaid(m) { openPaidModal("undo", m, 0); }
  document.addEventListener("keydown", e => { if (e.key === "Escape" && paidModalState) closePaidModal(); });
  // Jump to Overview with that month's date range so every call + payout is listed
  function viewMonthCalls(m) {
    const [y, mo] = m.split("-").map(Number);
    const last = new Date(y, mo, 0).getDate();
    document.getElementById("af").value = "";
    document.getElementById("ag").value = `${m}-01`;
    document.getElementById("ah").value = `${m}-${String(last).padStart(2, "0")}`;
    document.getElementById("ai").value = "all";
    switchTab("o");
    applyFilters();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function switchTab(p) {
    document.getElementById("a8").classList.toggle("hidden", p !== "o");
    document.getElementById("am").classList.toggle("hidden", p !== "a");
    document.getElementById("a5").classList.toggle("active", p === "o");
    document.getElementById("a6").classList.toggle("active", p === "a");
    if (p === "a") {
      renderAnalytics();
    }
  }
  function toggleExtra() {
    extraOpen = !extraOpen;
    const el = document.getElementById("aExtra");
    const txt = document.getElementById("aToggleText");
    const ch = document.getElementById("aChevron");
    if (extraOpen) {
      el.classList.add("open");
      txt.textContent = "See less";
      ch.classList.add("rotated");
    } else {
      el.classList.remove("open");
      txt.textContent = "See more";
      ch.classList.remove("rotated");
    }
  }
  async function doRefresh() {
    const btn = document.getElementById("a7");
    btn.disabled = true;
    btn.innerHTML = `<svg class="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/></svg> Refreshing...`;
    try {
      const res = await api("refresh");
      if (res.success) await loadData();
      else alert("Failed: " + res.message);
    } catch (e) {
      alert("Error: " + e.message);
    } finally {
      btn.disabled = false;
      btn.innerHTML = `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg> Refresh`;
    }
  }
  function exportCSV() {
    const rows = getFiltered();
    if (!rows.length) {
      alert("No data to export");
      return;
    }
    const headers = ["dts", "ani", "state", "call_duration_sec", "payout", "status"];
    const csvRows = rows.map(r => {
      const p = Number(r.payout) || 0;
      const st = p > 0 ? "Billable" : "Non-billable";
      const exact = formatTs(r.dts);
      const dts = exact === "—" ? "" : "\t" + exact;
      return [dts, r.ani || "", r.state || "", r.call_duration_sec || "", p.toFixed(2), st]
        .map(v => {
          const s = String(v);
          return s.includes(",") || s.includes('"') || s.includes("\n") ? `"${s.replace(/"/g, '""')}"` : s;
        }).join(",");
    });
    const csv = [headers.join(",")].concat(csvRows).join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "vtm-calls-" + new Date().toISOString().slice(0, 10) + ".csv";
    a.click();
    URL.revokeObjectURL(url);
  }
  /* ---------- Invoice ---------- */
  function formatDate(d) {
    if (!(d instanceof Date) || isNaN(d)) return "—";
    const p = n => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  }
  // Same source string as the Overview table, trimmed to minutes (no timezone conversion)
  function formatTimestamp(dts) {
    const s = formatTs(dts);
    if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.replace("T", " ").slice(0, 16);
    return s;
  }
  function formatPhone(ani) {
    if (!ani) return "—";
    return String(ani).replace(/\D/g, "");
  }
  function formatDuration(sec) {
    return (Number(sec) || 0) + "s";
  }
  let invRand = 0; // fixed per modal open so the invoice number doesn't change while typing
  function openInvoiceModal() {
    const monthSelect = document.getElementById("invMonthSelect");
    monthSelect.innerHTML = "";
    // months (YYYY-MM) that actually have billable calls
    const billableMonths = new Set();
    calls.forEach(r => {
      if (Number(r.payout) > 0) {
        const k = getRowDate(r.dts).slice(0, 7);
        if (k) billableMonths.add(k);
      }
    });
    const now = new Date();
    const keys = [];
    for (let i = 0; i < 12; i++) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const val = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      const label = d.toLocaleString("en-US", { month: "long", year: "numeric" });
      const opt = document.createElement("option");
      opt.value = val;
      opt.textContent = label;
      monthSelect.appendChild(opt);
      keys.push(val);
    }
    // Default: previous month if it has billable calls, otherwise the newest month that does
    let def = keys[1];
    if (!billableMonths.has(def)) {
      const found = keys.find(k => billableMonths.has(k));
      if (found) def = found;
    }
    monthSelect.value = def;
    invRand = Math.floor(Math.random() * 9000) + 1000;
    document.getElementById("invoiceModal").classList.add("open");
    document.body.style.overflow = "hidden";
    generateInvoice();
  }
  function generateInvoice() {
    const month = document.getElementById("invMonthSelect").value;
    const buyer = document.getElementById("invBuyerName").value.trim() || "Client / Partner";
    const bankName = document.getElementById("invBankName").value.trim() || "—";
    const accountTitle = document.getElementById("invAccountTitle").value.trim() || "—";
    const accountNumber = document.getElementById("invAccountNumber").value.trim() || "—";
    const routing = document.getElementById("invRouting").value.trim() || "—";
    const [y, m] = month.split("-").map(Number);
    const start = new Date(y, m - 1, 1);
    // Month match uses the same YYYY-MM-DD string as the tables, so no timezone drift at month edges
    const filtered = calls.filter(r => Number(r.payout) > 0 && getRowDate(r.dts).slice(0, 7) === month);
    const now = new Date();
    const invDate = formatDate(now);
    const invNum = `INV-${y}${String(m).padStart(2, "0")}-${invRand || 1000}`;
    const periodLabel = start.toLocaleString("en-US", { month: "long", year: "numeric" });
    let subtotal = 0;
    filtered.forEach(call => { subtotal += Number(call.payout) || 0; });
    document.getElementById("invNumber").textContent = invNum;
    document.getElementById("invDate").textContent = invDate;
    document.getElementById("invPeriod").textContent = periodLabel;
    document.getElementById("billToName").textContent = buyer;
    document.getElementById("bankNameDisplay").textContent = bankName;
    document.getElementById("accountTitleDisplay").textContent = accountTitle;
    document.getElementById("accountNumberDisplay").textContent = accountNumber;
    document.getElementById("routingDisplay").textContent = routing;
    document.getElementById("invStatCalls").textContent = filtered.length;
    document.getElementById("invStatAmount").textContent = "$" + subtotal.toFixed(2);
    document.getElementById("invLineDesc").textContent = "Auto";
    document.getElementById("invLinePeriod").textContent = periodLabel;
    document.getElementById("invLineCalls").textContent = filtered.length;
    document.getElementById("invLineAmount").textContent = "$" + subtotal.toFixed(2);
    document.getElementById("invSubtotal").textContent = "$" + subtotal.toFixed(2);
    document.getElementById("invTotal").textContent = "$" + subtotal.toFixed(2);
  }
    function closeInvoiceModal() {
    document.getElementById("invoiceModal").classList.remove("open");
    document.body.style.overflow = "";
  }
  function printInvoice() {
    window.print();
  }
  function downloadPDF() {
    // Prefer pure jsPDF (no html2canvas) — avoids 0x0 canvas / CORS crashes
    const JsPDFCtor = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;
    if (!JsPDFCtor) {
      // Fallback: library still loading
      if (typeof html2pdf === "undefined") {
        alert("PDF library is still loading. Please wait a second and try again, or use Print.");
        return;
      }
      // Last resort: open print dialog (user can Save as PDF)
      window.print();
      return;
    }

    const invNum = document.getElementById("invNumber").textContent || "invoice";
    const invDate = document.getElementById("invDate").textContent || "—";
    const period = document.getElementById("invPeriod").textContent || "—";
    const buyer = document.getElementById("billToName").textContent || "—";
    const bankName = document.getElementById("bankNameDisplay").textContent || "—";
    const accountTitle = document.getElementById("accountTitleDisplay").textContent || "—";
    const accountNumber = document.getElementById("accountNumberDisplay").textContent || "—";
    const routing = document.getElementById("routingDisplay").textContent || "—";
    const qty = document.getElementById("invStatCalls").textContent || "0";
    const amount = document.getElementById("invStatAmount").textContent || "$0.00";
    const lineDesc = document.getElementById("invLineDesc").textContent || "Auto";
    const linePeriod = document.getElementById("invLinePeriod").textContent || period;
    const lineQty = document.getElementById("invLineCalls").textContent || qty;
    const lineAmount = document.getElementById("invLineAmount").textContent || amount;
    const subtotal = document.getElementById("invSubtotal").textContent || amount;
    const total = document.getElementById("invTotal").textContent || amount;

    const doc = new JsPDFCtor({ unit: "mm", format: "a4", orientation: "portrait" });
    const pageW = doc.internal.pageSize.getWidth();
    const margin = 18;
    const contentW = pageW - margin * 2;
    let y = margin;

    const teal = [84, 136, 136];
    const dark = [30, 41, 59];
    const muted = [100, 116, 139];
    const gold = [184, 134, 11];
    const light = [248, 250, 250];
    const border = [226, 232, 240];

    // Header brand + logo
    try {
      doc.addImage(VTM_LOGO_DATA, "PNG", margin, y, 12, 12);
    } catch (e) {
      doc.setFillColor(...teal);
      doc.roundedRect(margin, y, 12, 12, 2, 2, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7);
      doc.text("VTM", margin + 6, y + 7.5, { align: "center" });
    }

    doc.setTextColor(...teal);
    doc.setFontSize(14);
    doc.text("Vocal Tech Marketing", margin + 16, y + 5);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...muted);
    doc.text("Where brands find their voices!", margin + 16, y + 10);

    // Invoice badge + meta (right)
    const rightX = pageW - margin;
    doc.setFillColor(...teal);
    doc.roundedRect(rightX - 28, y, 28, 7, 1.5, 1.5, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.text("INVOICE", rightX - 14, y + 4.8, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...muted);
    doc.text("Invoice #", rightX - 55, y + 14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...dark);
    doc.text(String(invNum), rightX, y + 14, { align: "right" });

    doc.setFont("helvetica", "normal");
    doc.setTextColor(...muted);
    doc.text("Invoice Date", rightX - 55, y + 20);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...dark);
    doc.text(String(invDate), rightX, y + 20, { align: "right" });

    doc.setFont("helvetica", "normal");
    doc.setTextColor(...muted);
    doc.text("Billing Period", rightX - 55, y + 26);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...dark);
    doc.text(String(period), rightX, y + 26, { align: "right" });

    y += 36;
    // Divider
    doc.setDrawColor(...border);
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageW - margin, y);
    y += 8;

    // Bill To + Banking boxes
    const colW = (contentW - 6) / 2;
    const boxH = 36;
    doc.setFillColor(...light);
    doc.setDrawColor(...border);
    doc.roundedRect(margin, y, colW, boxH, 2, 2, "FD");
    doc.roundedRect(margin + colW + 6, y, colW, boxH, 2, 2, "FD");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setTextColor(...muted);
    doc.text("BILL TO", margin + 4, y + 6);
    doc.setFontSize(11);
    doc.setTextColor(...dark);
    doc.text(String(buyer), margin + 4, y + 14);

    doc.setFontSize(7);
    doc.setTextColor(...teal);
    doc.text("BANKING DETAILS", margin + colW + 10, y + 6);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...muted);
    const bankLeft = margin + colW + 10;
    const bankRight = pageW - margin - 4;
    const bankRows = [
      ["Bank Name", bankName],
      ["Account Title", accountTitle],
      ["Account Number", accountNumber],
      ["IBAN / Routing", routing]
    ];
    let by = y + 12;
    bankRows.forEach(([lab, val]) => {
      doc.setTextColor(...muted);
      doc.text(lab, bankLeft, by);
      doc.setTextColor(...dark);
      doc.setFont("helvetica", "bold");
      doc.text(String(val), bankRight, by, { align: "right" });
      doc.setFont("helvetica", "normal");
      by += 5.5;
    });

    y += boxH + 8;

    // Quantity + Amount cards
    const cardW = (contentW - 6) / 2;
    const cardH = 28;
    doc.setFillColor(...light);
    doc.setDrawColor(...border);
    doc.roundedRect(margin, y, cardW, cardH, 2, 2, "FD");
    doc.roundedRect(margin + cardW + 6, y, cardW, cardH, 2, 2, "FD");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setTextColor(...muted);
    doc.text("QUANTITY", margin + cardW / 2, y + 7, { align: "center" });
    doc.setFontSize(18);
    doc.setTextColor(...teal);
    doc.text(String(qty), margin + cardW / 2, y + 17, { align: "center" });
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(...muted);
    doc.text("For this billing period", margin + cardW / 2, y + 23, { align: "center" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.text("TOTAL AMOUNT", margin + cardW + 6 + cardW / 2, y + 7, { align: "center" });
    doc.setFontSize(18);
    doc.setTextColor(...gold);
    doc.text(String(amount), margin + cardW + 6 + cardW / 2, y + 17, { align: "center" });
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(...muted);
    doc.text("Amount due", margin + cardW + 6 + cardW / 2, y + 23, { align: "center" });

    y += cardH + 8;

    // Line item table header
    const rowH = 10;
    doc.setFillColor(...teal);
    doc.roundedRect(margin, y, contentW, rowH, 1.5, 1.5, "F");
    // square bottom of header
    doc.rect(margin, y + 5, contentW, 5, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.text("DESCRIPTION", margin + 4, y + 6.5);
    doc.text("QTY", margin + contentW * 0.62, y + 6.5);
    doc.text("AMOUNT", pageW - margin - 4, y + 6.5, { align: "right" });
    y += rowH;

    // Line body
    doc.setDrawColor(...border);
    doc.setFillColor(255, 255, 255);
    doc.rect(margin, y, contentW, 16, "FD");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...dark);
    doc.text(String(lineDesc), margin + 4, y + 6.5);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...muted);
    doc.text(String(linePeriod), margin + 4, y + 12);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...dark);
    doc.text(String(lineQty), margin + contentW * 0.62, y + 9);
    doc.text(String(lineAmount), pageW - margin - 4, y + 9, { align: "right" });
    y += 22;

    // Totals box (right aligned)
    const totW = 70;
    const totX = pageW - margin - totW;
    doc.setFillColor(...light);
    doc.setDrawColor(...border);
    doc.roundedRect(totX, y, totW, 28, 2, 2, "FD");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...muted);
    doc.text("Subtotal", totX + 4, y + 8);
    doc.setTextColor(...dark);
    doc.setFont("helvetica", "bold");
    doc.text(String(subtotal), totX + totW - 4, y + 8, { align: "right" });

    doc.setDrawColor(...border);
    doc.line(totX + 4, y + 12, totX + totW - 4, y + 12);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...dark);
    doc.text("Total Due", totX + 4, y + 21);
    doc.setFillColor(...teal);
    doc.roundedRect(totX + totW - 36, y + 15, 32, 9, 1.5, 1.5, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(9);
    doc.text(String(total), totX + totW - 20, y + 21, { align: "center" });

    // Exactly one page — save
    doc.save(invNum + ".pdf");
  }
  /* ---------- Markup ---------- */
  document.getElementById("root").innerHTML = `
  <div id="a0" class="min-h-screen flex items-center justify-center p-5">
    <div class="login-card fade-in">
      <div class="text-center mb-8">
        <img src="logo.png" alt="VTM" class="mx-auto h-12 w-auto mb-5 opacity-95">
        <h1 class="text-xl font-bold tracking-tight">VTM CRM</h1>
        <p class="text-sm mt-1.5" style="color:var(--muted)">Call Analytics Portal</p>
      </div>
      <input id="a1" type="password" placeholder="Enter password" class="input-dark w-full px-4 py-3.5 mb-4" onkeypress="if(event.key==='Enter')doLogin()">
      <button onclick="doLogin()" id="a2" class="btn btn-primary w-full py-3.5 text-sm">Sign In</button>
      <p id="a3" class="text-sm mt-4 text-center hidden" style="color:var(--danger)">Incorrect password</p>
    </div>
  </div>
  <div id="a4" class="hidden">
    <header class="site-header">
      <div class="max-w-7xl mx-auto px-5 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-8">
          <div class="flex items-center gap-3">
            <img src="logo.png" alt="VTM" class="h-8 w-auto opacity-95">
            <div>
              <h1 class="font-semibold text-[13.5px] leading-tight tracking-wide">VTM CRM</h1>
              <p class="text-[11px]" style="color:var(--muted)">Call Analytics</p>
            </div>
          </div>
          <nav class="flex gap-7">
            <button onclick="switchTab('o')" id="a5" class="nav-link active">Overview</button>
            <button onclick="switchTab('a')" id="a6" class="nav-link">Analytics</button>
          </nav>
        </div>
        <div class="flex items-center gap-2.5">
          <button onclick="doRefresh()" id="a7" class="btn btn-primary">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            Refresh
          </button>
          <button onclick="doLogout()" class="btn btn-ghost">Logout</button>
        </div>
      </div>
    </header>
    <main class="max-w-7xl mx-auto px-5 sm:px-6 py-7">
      <div id="a8" class="space-y-5 fade-in">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
          <div class="metric"><div class="metric-label">Total Calls</div><div id="a9" class="metric-value">—</div></div>
          <div class="metric"><div class="metric-label">Total Payout</div><div id="aa" class="metric-value" style="color:var(--gold)">—</div></div>
          <div class="metric"><div class="metric-label">Avg Duration</div><div id="ab" class="metric-value">— <span class="unit">sec</span></div></div>
          <div class="metric"><div class="metric-label">Avg Payout</div><div id="ac" class="metric-value" style="color:var(--gold)">—</div></div>
        </div>
        <div>
          <button id="aToggle" onclick="toggleExtra()" class="btn-toggle">
            <span id="aToggleText">See more</span>
            <svg id="aChevron" class="w-3.5 h-3.5 chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div id="aExtra" class="extra-metrics">
            <div class="metric"><div class="metric-label">Lowest Bid</div><div id="ad" class="metric-value" style="color:var(--gold)">—</div></div>
            <div class="metric"><div class="metric-label">Highest Bid</div><div id="ae" class="metric-value" style="color:var(--gold)">—</div></div>
          </div>
        </div>
        <div class="card p-4">
          <div class="flex flex-wrap items-end gap-3">
            <div class="flex-1 min-w-[160px]">
              <label class="block text-[11px] font-medium mb-1.5" style="color:var(--muted)">Search</label>
              <input id="af" type="text" placeholder="ANI, state or date..." class="input-dark w-full px-3.5 py-2.5" oninput="applyFilters()">
            </div>
            <div>
              <label class="block text-[11px] font-medium mb-1.5" style="color:var(--muted)">From</label>
              <input id="ag" type="date" class="input-dark px-3.5 py-2.5" onchange="applyFilters()">
            </div>
            <div>
              <label class="block text-[11px] font-medium mb-1.5" style="color:var(--muted)">To</label>
              <input id="ah" type="date" class="input-dark px-3.5 py-2.5" onchange="applyFilters()">
            </div>
            <div>
              <label class="block text-[11px] font-medium mb-1.5" style="color:var(--muted)">Status</label>
              <select id="ai" class="input-dark px-3.5 py-2.5" onchange="applyFilters()">
                <option value="all">All</option>
                <option value="billable">Billable</option>
                <option value="nonbillable">Non-billable</option>
              </select>
            </div>
            <button onclick="clearFilters()" class="btn btn-ghost">Clear</button>
            <button onclick="exportCSV()" class="btn btn-export ml-auto">Export CSV</button>
            <button onclick="openInvoiceModal()" class="btn btn-invoice">Generate Invoice</button>
          </div>
        </div>
        <div class="card overflow-hidden">
          <div class="px-5 py-4 border-b flex items-center justify-between" style="border-color:var(--border)">
            <h2 class="font-semibold text-[13.5px] tracking-wide">Call Details</h2>
            <span id="aj" class="text-[11.5px]" style="color:var(--muted)"></span>
          </div>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>ANI</th>
                  <th>State</th>
                  <th>Duration</th>
                  <th>Payout</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody id="ak"></tbody>
            </table>
          </div>
          <div id="al" class="hidden py-16 text-center">
            <p class="text-sm" style="color:var(--muted)">No calls match the current filters</p>
          </div>
        </div>
      </div>
      <div id="am" class="hidden space-y-5 fade-in">
        <div class="card p-4">
          <div class="flex flex-wrap items-end gap-3">
            <div>
              <label class="block text-[11px] font-medium mb-1.5" style="color:var(--muted)">From</label>
              <input id="anFrom" type="date" class="input-dark px-3.5 py-2.5" style="color-scheme:dark" onchange="onAnRange()">
            </div>
            <div>
              <label class="block text-[11px] font-medium mb-1.5" style="color:var(--muted)">To</label>
              <input id="anTo" type="date" class="input-dark px-3.5 py-2.5" style="color-scheme:dark" onchange="onAnRange()">
            </div>
            <div>
              <label class="block text-[11px] font-medium mb-1.5" style="color:var(--muted)">State</label>
              <select id="anState" class="input-dark px-3.5 py-2.5 min-w-[140px]" onchange="renderAnalytics()">
                <option value="all">All States</option>
              </select>
            </div>
            <button onclick="clearAnalyticsFilters()" class="btn btn-ghost">Clear</button>
            <span id="anRange" class="ml-auto text-[11.5px]" style="color:var(--muted)"></span>
          </div>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-5 gap-3.5">
          <div class="metric"><div class="metric-label">Total Calls</div><div id="an" class="metric-value">—</div></div>
          <div class="metric"><div class="metric-label">Billable Calls</div><div id="ao" class="metric-value" style="color:var(--accent)">—</div></div>
          <div class="metric"><div class="metric-label">Non-Billable Calls</div><div id="ap" class="metric-value" style="color:var(--muted)">—</div></div>
          <div class="metric"><div class="metric-label">Total Payout</div><div id="anTotal" class="metric-value" style="color:var(--gold)">—</div></div>
          <div class="metric"><div class="metric-label">Avg Payout</div><div id="anAvg" class="metric-value" style="color:var(--gold)">—</div></div>
        </div>
        <div class="stat-cards">
          <div class="metric">
            <div class="metric-label">Longest Call</div>
            <div id="anLongest" class="metric-value">— <span class="unit">sec</span></div>
            <div id="anLongestSub" class="metric-sub">—</div>
          </div>
          <div class="metric">
            <div class="metric-label">Shortest Call</div>
            <div id="anShortest" class="metric-value">— <span class="unit">sec</span></div>
            <div id="anShortestSub" class="metric-sub">—</div>
          </div>
        </div>
        <div class="card chart-card">
          <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div id="chartTitle" class="chart-title" style="margin-bottom:0">Daily Payout Chart</div>
            <div class="seg">
              <button id="chartModePayout" class="seg-btn active" onclick="setChartMode('payout')">Payout</button>
              <button id="chartModeCalls" class="seg-btn" onclick="setChartMode('calls')">Calls</button>
            </div>
          </div>
          <div class="chart-wrap">
            <canvas id="payoutChart"></canvas>
          </div>
        </div>
        <div class="card overflow-hidden">
          <div class="px-5 py-4 border-b" style="border-color:var(--border)">
            <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 class="font-semibold text-[13.5px] tracking-wide">State Summary</h2>
              <p class="text-[11.5px] mt-1" style="color:var(--muted)">Calls, total payout and average bid per state</p>
            </div>
            <div class="flex items-center gap-2">
              <label class="text-[11px] font-medium" style="color:var(--muted)">Sort by</label>
              <select id="stateSort" class="input-dark px-3 py-2" onchange="setStateSort(this.value)">
                <option value="avg_desc">Average Bid (High → Low)</option>
                <option value="avg_asc">Average Bid (Low → High)</option>
                <option value="calls_desc">Calls (High → Low)</option>
                <option value="calls_asc">Calls (Low → High)</option>
                <option value="state_asc">State (A → Z)</option>
                <option value="state_desc">State (Z → A)</option>
                <option value="payout_desc">Total Payout (High → Low)</option>
                <option value="payout_asc">Total Payout (Low → High)</option>
              </select>
            </div>
          </div>
          </div>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th id="thState" class="th-sort" onclick="sortStateBy('state')">State</th>
                  <th id="thCalls" class="th-sort" onclick="sortStateBy('calls')">Calls</th>
                  <th id="thPayout" class="th-sort" onclick="sortStateBy('payout')">Total Payout</th>
                  <th id="thAvg" class="th-sort" onclick="sortStateBy('avg')">Average Bid ▼</th>
                </tr>
              </thead>
              <tbody id="aq"></tbody>
            </table>
          </div>
        </div>
        <div class="card overflow-hidden">
          <div class="px-5 py-4 border-b" style="border-color:var(--border)">
            <h2 class="font-semibold text-[13.5px] tracking-wide">Monthly Summary</h2>
            <p class="text-[11.5px] mt-1" style="color:var(--muted)">Mark a month as Paid once its invoice payout is received — paid months are left out of Total Payout, call history stays available via View Calls</p>
            <div id="paidSummary" class="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-[12.5px]"></div>
          </div>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Total Payout</th>
                  <th>Total Calls</th>
                  <th>Status</th>
                  <th>Paid Amount</th>
                  <th style="text-align:right">Actions</th>
                </tr>
              </thead>
              <tbody id="ar"></tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  </div>
  <div id="invoiceModal" class="inv-modal">
    <div class="inv-panel">
      <div class="inv-toolbar">
        <h2>Generate Invoice</h2>
        <div class="inv-actions">
          <button class="btn-print" onclick="printInvoice()">
            <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
            Print
          </button>
          <button class="btn-pdf" onclick="downloadPDF()">
            <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            Download PDF
          </button>
          <button class="btn-close-inv" onclick="closeInvoiceModal()">×</button>
        </div>
      </div>
      <div class="inv-form">
        <div class="inv-form-grid">
          <div>
            <label>Billing Month</label>
            <select id="invMonthSelect" onchange="generateInvoice()"></select>
          </div>
          <div>
            <label>Buyer Name</label>
            <input id="invBuyerName" type="text" placeholder="Enter buyer / client name" oninput="generateInvoice()">
          </div>
          <div>
            <label>Bank Name</label>
            <input id="invBankName" type="text" placeholder="Bank Name" oninput="generateInvoice()">
          </div>
          <div>
            <label>Account Title</label>
            <input id="invAccountTitle" type="text" placeholder="Account Title" oninput="generateInvoice()">
          </div>
          <div>
            <label>Account Number</label>
            <input id="invAccountNumber" type="text" placeholder="Account Number" oninput="generateInvoice()">
          </div>
          <div>
            <label>IBAN / Routing</label>
            <input id="invRouting" type="text" placeholder="IBAN or Routing Number" oninput="generateInvoice()">
          </div>
        </div>
      </div>
      <div class="inv-body" id="invoicePrintArea">
        <div class="inv-header">
          <div class="inv-brand">
            <div class="inv-logo"><img src="logo.png" alt="VTM"></div>
            <div class="inv-company">
              <h1>Vocal Tech Marketing</h1>
              <div class="tagline">Where brands find their voices!</div>
            </div>
          </div>
          <div class="inv-meta">
            <div class="inv-badge">INVOICE</div>
            <div class="inv-meta-row"><span>Invoice #</span><span id="invNumber">—</span></div>
            <div class="inv-meta-row"><span>Invoice Date</span><span id="invDate">—</span></div>
            <div class="inv-meta-row"><span>Billing Period</span><span id="invPeriod">—</span></div>
          </div>
        </div>
        <div class="inv-divider"></div>
        <div class="inv-grid">
          <div class="bill-to">
            <div class="inv-section-title">Bill To</div>
            <strong id="billToName">—</strong>
          </div>
          <div class="bank-box">
            <div class="inv-section-title">Banking Details</div>
            <div class="bank-row"><span>Bank Name</span><span id="bankNameDisplay">—</span></div>
            <div class="bank-row"><span>Account Title</span><span id="accountTitleDisplay">—</span></div>
            <div class="bank-row"><span>Account Number</span><span id="accountNumberDisplay">—</span></div>
            <div class="bank-row"><span>IBAN / Routing</span><span id="routingDisplay">—</span></div>
          </div>
        </div>
        <div class="inv-summary">
          <div class="inv-stat">
            <div class="inv-stat-label">Quantity</div>
            <div class="inv-stat-value teal" id="invStatCalls">0</div>
            <div class="inv-stat-sub">For this billing period</div>
          </div>
          <div class="inv-stat">
            <div class="inv-stat-label">Total Amount</div>
            <div class="inv-stat-value gold" id="invStatAmount">$0.00</div>
            <div class="inv-stat-sub">Amount due</div>
          </div>
        </div>
        <div class="inv-line-item">
          <div class="inv-line-head">
            <span>Description</span>
            <span>Qty</span>
            <span>Amount</span>
          </div>
          <div class="inv-line-body">
            <span class="inv-line-desc"><span id="invLineDesc">Auto</span><small id="invLinePeriod">—</small></span>
            <span id="invLineCalls">0</span>
            <span id="invLineAmount">$0.00</span>
          </div>
        </div>
        <div class="inv-totals">
          <div class="totals-box">
            <div class="total-row"><span>Subtotal</span><span id="invSubtotal">$0.00</span></div>
            <div class="total-final">
              <span>Total Due</span>
              <div class="total-badge" id="invTotal">$0.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="paidModal" class="paid-modal" onclick="if(event.target===this)closePaidModal()">
    <div class="pm-card">
      <div id="pmIcon" class="pm-icon">
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M5 13l4 4L19 7"/></svg>
      </div>
      <div id="pmTitle" class="pm-title">Mark as Paid</div>
      <div id="pmMonth" class="pm-sub"></div>
      <div id="pmMarkBody">
        <label class="pm-label" for="pmAmount">Invoice payout received</label>
        <div class="pm-input">
          <span>$</span>
          <input id="pmAmount" type="text" inputmode="decimal" autocomplete="off" placeholder="0.00" onkeydown="if(event.key==='Enter')confirmPaidModal()">
        </div>
        <div id="pmHint" class="pm-hint"></div>
        <div id="pmError" class="pm-error hidden">Please enter a valid amount</div>
      </div>
      <div id="pmUndoBody" class="pm-sub hidden" style="margin-top:14px">This month's payout will count in Total Payout again.</div>
      <div class="pm-actions">
        <button class="btn btn-ghost" onclick="closePaidModal()">Cancel</button>
        <button id="pmConfirm" class="btn btn-primary" onclick="confirmPaidModal()">Mark as Paid</button>
      </div>
    </div>
  </div>
  `;
  /* ---------- Expose handlers used by inline onclick/onchange ---------- */
  window.doLogin = doLogin;
  window.doLogout = doLogout;
  window.doRefresh = doRefresh;
  window.switchTab = switchTab;
  window.toggleExtra = toggleExtra;
  window.clearFilters = clearFilters;
  window.applyFilters = applyFilters;
  window.exportCSV = exportCSV;
  window.openInvoiceModal = openInvoiceModal;
  window.closeInvoiceModal = closeInvoiceModal;
  window.printInvoice = printInvoice;
  window.downloadPDF = downloadPDF;
  window.generateInvoice = generateInvoice;
  window.onAnRange = onAnRange;
  window.clearAnalyticsFilters = clearAnalyticsFilters;
  window.renderAnalytics = renderAnalytics;
  window.setChartMode = setChartMode;
  window.setStateSort = setStateSort;
  window.sortStateBy = sortStateBy;
  window.markPaid = markPaid;
  window.closePaidModal = closePaidModal;
  window.confirmPaidModal = confirmPaidModal;
  window.unmarkPaid = unmarkPaid;
  window.viewMonthCalls = viewMonthCalls;
  checkLogin();
})();
