// ===== 辽宁事业单位信息站 - 全站脚本 =====

// 全站页面索引（用于搜索）
const SITE_INDEX = [
  { title: "首页", url: "/index.html", desc: "辽宁事业单位考试信息汇总" },
  { title: "深度内容专区", url: "/deep-content.html", desc: "题型精讲、岗位拆解、备考规划、面试精讲" },
  { title: "公告汇总", url: "/notice/index.html", desc: "联考、沈阳、大连、各地单招公告" },
  { title: "辽宁事业单位联考公告汇总", url: "/notice/liaoning-union-exam.html", desc: "ABCDE + 行政执法类联考公告" },
  { title: "沈阳事业单位单招公告汇总", url: "/notice/shenyang.html", desc: "沈阳市各区县事业单位招聘公告" },
  { title: "大连事业单位单招公告汇总", url: "/notice/dalian.html", desc: "大连市各区县事业单位招聘公告" },
  { title: "省内其他地市公告索引", url: "/notice/city-other.html", desc: "鞍山、抚顺、本溪、丹东、锦州等" },
  { title: "医疗岗E类公告合集", url: "/notice/medical.html", desc: "医院、医疗卫生系统招聘公告" },
  { title: "教师岗D类公告合集", url: "/notice/teacher.html", desc: "学校、教育系统招聘公告" },
  { title: "岗位选择指南", url: "/notice/job-selection-guide.html", desc: "14市地竞争比、选岗策略" },
  { title: "报名人数统计", url: "/notice/signup-stats.html", desc: "热门岗位、竞争比跟踪" },
  { title: "岗位深度拆解：街道办综合岗", url: "/notice/job-analysis-street.html", desc: "工作内容、待遇、发展前景" },
  { title: "岗位深度拆解：乡镇农业服务中心", url: "/notice/job-analysis-township.html", desc: "基层工作、5年服务期、低分上岸" },
  { title: "岗位深度拆解：中小学教师岗", url: "/notice/job-analysis-teacher.html", desc: "工作内容、职称评定、寒暑假" },
  { title: "岗位深度拆解：医疗岗", url: "/notice/job-analysis-medical.html", desc: "医院、疾控、基层、职称、夜班" },
  { title: "岗位深度拆解：县直综合岗", url: "/notice/job-analysis-county.html", desc: "写材料、混编混岗、vs公务员、待遇" },
  { title: "报考答疑", url: "/qa/index.html", desc: "应届生、户籍、档案、资格复审等" },
  { title: "应届生择业期怎么界定", url: "/qa/graduate-definition.html", desc: "辽宁事业单位应届生身份认定政策" },
  { title: "岗位专业目录怎么查", url: "/qa/major-catalog.html", desc: "专业不符怎么办" },
  { title: "户籍限制解读", url: "/qa/hukou-limit.html", desc: "本地户籍要求" },
  { title: "最低服务年限", url: "/qa/service-period.html", desc: "服务期内能不能流动" },
  { title: "社保劳动合同丢失工龄认定", url: "/qa/social-security-work-age.html", desc: "工龄怎么算" },
  { title: "档案存放要求", url: "/qa/file-archive-place.html", desc: "档案在自己手里怎么办" },
  { title: "资格复审需要哪些材料", url: "/qa/qualification-review-material.html", desc: "资格复审材料清单" },
  { title: "资格复审常见驳回原因", url: "/qa/qualification-review-risk.html", desc: "避免资格复审被刷" },
  { title: "兼职灵活就业算工作经历吗", url: "/qa/part-time-work-experience.html", desc: "工作经历认定" },
  { title: "在职可以报考事业单位吗", url: "/qa/registered-permanent-residence.html", desc: "在职人员报考条件" },
  { title: "笔试备考", url: "/written/index.html", desc: "ABCDE大纲、题型、图书推荐" },
  { title: "ABCDE类考试大纲解读", url: "/written/syllabus-abcde.html", desc: "五类岗位考试内容" },
  { title: "行政执法类大纲重点", url: "/written/syllabus-law-enforce.html", desc: "新增行政执法类" },
  { title: "综合岗教师岗医疗岗区别", url: "/written/subject-difference.html", desc: "考试内容对比" },
  { title: "考试题型分值分布", url: "/written/exam-scope.html", desc: "各题型占分" },
  { title: "正版教辅图书推荐", url: "/written/book-recommend.html", desc: "中公华图正版图书CPS" },
  { title: "历年真题汇总", url: "/written/real-questions.html", desc: "2024-2026考生回忆版真题" },
  { title: "言语理解题型精讲", url: "/written/verbal-analysis.html", desc: "逻辑填空、片段阅读、语句表达" },
  { title: "判断推理题型精讲", url: "/written/reasoning-analysis.html", desc: "图形推理(含示意图)、定义、类比、逻辑" },
  { title: "数量关系+资料分析精讲", url: "/written/quant-data-analysis.html", desc: "工程行程利润、增长率比重、速算技巧" },
  { title: "综应A类题型精讲", url: "/written/comprehensive-analysis.html", desc: "归纳概括、提出对策、应急、沟通、公文" },
  { title: "3个月备考上岸计划", url: "/written/study-plan.html", desc: "每日学习安排、资料推荐、在职全职方案" },
  { title: "上岸经验帖：在职3个月220分", url: "/written/success-story.html", desc: "真实备考经历、选岗策略、避坑经验" },
  { title: "面试", url: "/interview/index.html", desc: "面试真题、流程、进面分数" },
  { title: "考生回忆版面试真题汇总", url: "/interview/real-question.html", desc: "非官方原题" },
  { title: "面试完整流程", url: "/interview/process.html", desc: "从报到到结束" },
  { title: "进面分数参考", url: "/interview/score-reference.html", desc: "考生回忆汇总" },
  { title: "面试真题逐题精讲", url: "/interview/question-analysis.html", desc: "综合分析、人际、应急、组织计划" },
  { title: "FAQ高频问题", url: "/faq.html", desc: "报名缴费准考证体检等" },
  { title: "关于本站", url: "/about.html", desc: "站点说明" },
  { title: "免责声明", url: "/disclaimer.html", desc: "法律声明" }
];

// 移动端菜单
function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const links = document.querySelector('.nav-links');
  if (btn && links) {
    btn.addEventListener('click', () => links.classList.toggle('open'));
  }
}

// 回到顶部
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) btn.classList.add('show');
    else btn.classList.remove('show');
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// FAQ 折叠
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      q.parentElement.classList.toggle('open');
    });
  });
  const expandAll = document.querySelector('.faq-expand-all');
  if (expandAll) {
    expandAll.addEventListener('click', () => {
      const items = document.querySelectorAll('.faq-item');
      const allOpen = Array.from(items).every(i => i.classList.contains('open'));
      items.forEach(i => allOpen ? i.classList.remove('open') : i.classList.add('open'));
      expandAll.textContent = allOpen ? '全部展开' : '全部收起';
    });
  }
}

// 考试倒计时（2027年联考公告预计2027年2月发布）
function initCountdown() {
  const daysEl = document.getElementById('cd-days');
  if (!daysEl) return;
  const target = new Date('2027-02-01T09:00:00+08:00').getTime();
  function update() {
    const now = Date.now();
    const diff = target - now;
    if (diff <= 0) {
      daysEl.textContent = '0';
      document.getElementById('cd-hours').textContent = '0';
      document.getElementById('cd-mins').textContent = '0';
      document.getElementById('cd-secs').textContent = '0';
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    daysEl.textContent = d;
    document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
    document.getElementById('cd-mins').textContent = String(m).padStart(2, '0');
    document.getElementById('cd-secs').textContent = String(s).padStart(2, '0');
  }
  update();
  setInterval(update, 1000);
}

// 柱状图动画
function initCharts() {
  const bars = document.querySelectorAll('.bar-fill');
  if (!bars.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.dataset.width;
        if (width) entry.target.style.width = width;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(bar => observer.observe(bar));
}

// 搜索功能
function initSearch() {
  const inputs = document.querySelectorAll('.nav-search input, .hero-search input');
  inputs.forEach(input => {
    let resultsBox = input.parentElement.querySelector('.search-results');
    if (!resultsBox) {
      resultsBox = document.createElement('div');
      resultsBox.className = 'search-results';
      input.parentElement.style.position = 'relative';
      input.parentElement.appendChild(resultsBox);
    }
    input.addEventListener('input', () => {
      const kw = input.value.trim().toLowerCase();
      if (!kw) { resultsBox.classList.remove('show'); return; }
      const matched = SITE_INDEX.filter(p =>
        p.title.toLowerCase().includes(kw) || p.desc.toLowerCase().includes(kw)
      ).slice(0, 8);
      if (matched.length === 0) {
        resultsBox.innerHTML = '<div class="search-result-item"><p>未找到相关内容</p></div>';
      } else {
        resultsBox.innerHTML = matched.map(p =>
          `<div class="search-result-item" onclick="location.href='${p.url}'">
            <h4>${p.title}</h4><p>${p.desc}</p></div>`
        ).join('');
      }
      resultsBox.classList.add('show');
    });
    input.addEventListener('blur', () => setTimeout(() => resultsBox.classList.remove('show'), 200));
    input.addEventListener('focus', () => { if (input.value.trim()) resultsBox.classList.add('show'); });
  });
}

// 侧边栏目录高亮
function initTOC() {
  const headings = document.querySelectorAll('.article h2, .article h3');
  const tocLinks = document.querySelectorAll('.toc-list a');
  if (!headings.length || !tocLinks.length) return;
  window.addEventListener('scroll', () => {
    let current = '';
    headings.forEach(h => {
      if (window.scrollY >= h.offsetTop - 100) current = h.id;
    });
    tocLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
  });
}

// 页面入场动画
function initFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.card, .dir-card, .notice-item, .quick-nav-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(el);
  });
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initBackToTop();
  initFAQ();
  initSearch();
  initTOC();
  initFadeIn();
  initCountdown();
  initCharts();
});
