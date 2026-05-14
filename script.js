const copy = {
  en: {
    nav_about: "About",
    nav_work: "Work",
    nav_projects: "Projects",
    nav_lens: "Lens",
    nav_contact: "Contact",
    hero_eyebrow: "Eugene's Personal homepage / wildlife field notes",
    hero_title_line1: "builds with code, observes with a lens.",
    hero_summary: "A quiet digital space for a concise introduction, selected interests, and photographs from the field.",
    about_eyebrow: "Introduction",
    about_title: "I work between deep learning and AI-assisted drug design.",
    work_eyebrow: "Current Work",
    work_title: "Algorithm Engineer at Hangzhou Institute of Medicine, CAS.",
    work_body: "I currently work at the Hangzhou Institute of Medicine, Chinese Academy of Sciences, where I design deep learning models for antimicrobial peptide generation, molecular affinity prediction, and related biomolecular modeling tasks.",
    work_meta_1: "Hangzhou, China",
    work_meta_2: "Algorithm Engineer",
    work_meta_3: "AI-assisted drug design",
    work_meta_4: "Nov 2023 - Present",
    projects_eyebrow: "Selected Projects",
    projects_title: "Two projects at the edge of molecules, signals, and models.",
    project_amp_title: "Antimicrobial Peptide Generation",
    project_amp_org: "Hangzhou Institute of Medicine, CAS",
    project_amp_body: "A generative model for antimicrobial peptide sequences, built with PyTorch, diffusion modeling, and protein language model representations. My work focused on designing and implementing conditional peptide sequence generation.",
    project_amp_tag_1: "PyTorch",
    project_amp_tag_2: "Diffusion Model",
    project_amp_tag_3: "Protein Language Model",
    project_nanopore_title: "Nanopore Sequencing System",
    project_nanopore_org: "BGI / CycloneSEQ Sequencer",
    project_nanopore_body: "A system for converting nanopore current signals into DNA base sequences. My work included neural network classification, signal feature analysis, and labeling workflow design for raw nanopore signals.",
    project_nanopore_tag_1: "TensorFlow",
    project_nanopore_tag_2: "Signal Analysis",
    project_nanopore_tag_3: "Label Studio",
    marquee: " / artificial intelligence / biology / medicine / photographic / field observation /",
    lens_eyebrow: "Wildlife Photography",
    lens_title_1: "African wildlife,",
    lens_title_2: "framed as quiet encounters.",
    photo_buffalo: "Buffalo stare",
    photo_pelican: "Pelican line",
    photo_lizard: "Ground color",
    photo_zebras: "Stripe rhythm",
    contact_eyebrow: "Contact",
    contact_title: "For collaboration or conversation, reach out here.",
    contact_email: "Email",
    footer_note: "Built as a static GitHub Pages site."
  },
  zh: {
    nav_about: "关于我",
    nav_work: "工作",
    nav_projects: "项目",
    nav_lens: "影像",
    nav_contact: "联系",
    hero_eyebrow: "许雨辛的个人主页 / 野外摄影手记",
    hero_title_line1: "builds with code, observes with a lens.",
    hero_summary: "这里放一点关于我的介绍，也放一些我在野外拍下的动物和风景。",
    about_eyebrow: "自我介绍",
    about_title: "我主要做深度学习和 AI 辅助药物设计相关的工作。",
    work_eyebrow: "当前工作",
    work_title: "我现在在中国科学院杭州医学研究所担任算法工程师。",
    work_body: "目前的工作主要围绕 AI 辅助药物设计展开，包括抗菌肽生成、分子亲和力预测，以及生物分子建模相关的深度学习方法。",
    work_meta_1: "中国杭州",
    work_meta_2: "算法工程师",
    work_meta_3: "AI 辅助药物设计",
    work_meta_4: "2023 年 11 月至今",
    projects_eyebrow: "项目经历",
    projects_title: "两个和分子、信号、模型有关的项目。",
    project_amp_title: "抗菌肽序列生成模型",
    project_amp_org: "中国科学院杭州医学研究所",
    project_amp_body: "该项目用于生成抗菌肽序列，技术上结合了 PyTorch、扩散模型和蛋白质语言模型。我的工作主要是设计并实现能够按条件生成肽序列的模型。",
    project_amp_tag_1: "PyTorch",
    project_amp_tag_2: "扩散模型",
    project_amp_tag_3: "蛋白质语言模型",
    project_nanopore_title: "纳米孔测序系统",
    project_nanopore_org: "华大研究院 / CycloneSEQ 测序仪",
    project_nanopore_body: "该系统用于将纳米孔电流测序信号转换为 DNA 碱基序列。我的工作包括神经网络分类模型设计、信号特征分析，以及原始纳米孔信号的标注流程设计。",
    project_nanopore_tag_1: "TensorFlow",
    project_nanopore_tag_2: "信号分析",
    project_nanopore_tag_3: "Label Studio",
    marquee: " / 人工智能 / 生物 / 医药 / 摄影 / 野外观察 / ",
    lens_eyebrow: "野生动物摄影",
    lens_title_1: "非洲野生动物，",
    lens_title_2: "在安静的瞬间里。",
    photo_buffalo: "水牛的凝视",
    photo_pelican: "鹈鹕的线条",
    photo_lizard: "地表的颜色",
    photo_zebras: "斑马的节奏",
    contact_eyebrow: "联系",
    contact_title: "如果想交流或合作，可以通过邮件找到我。",
    contact_email: "邮箱",
    footer_note: "静态页面，托管于 GitHub Pages。"
  }
};

const photos = [
  {
    src: "resources/imgs/optimized/zebras.webp",
    alt: {
      en: "Zebras in golden grass photographed by Yuxin Xu",
      zh: "草地上的斑马"
    },
    titleKey: "photo_zebras"
  },
  {
    src: "resources/imgs/optimized/pelican.webp",
    alt: {
      en: "Pelican by the water photographed by Yuxin Xu",
      zh: "水边鹈鹕"
    },
    titleKey: "photo_pelican"
  },
  {
    src: "resources/imgs/optimized/lizard.webp",
    alt: {
      en: "Colorful lizard on red earth photographed by Yuxin Xu",
      zh: "红土地与蜥蜴"
    },
    titleKey: "photo_lizard"
  },
  {
    src: "resources/imgs/optimized/buffalo.webp",
    alt: {
      en: "Close portrait of an African buffalo photographed by Yuxin Xu",
      zh: "水牛肖像"
    },
    titleKey: "photo_buffalo"
  }
];

const getInitialLanguage = () => {
  const saved = localStorage.getItem("siteLang");
  if (saved === "en" || saved === "zh") return saved;

  const languages = navigator.languages && navigator.languages.length
    ? navigator.languages
    : (navigator.language ? [navigator.language] : []);

  if (!languages.length) return "zh";
  return languages.some((lang) => lang.toLowerCase().startsWith("zh")) ? "zh" : "en";
};

const state = {
  lang: getInitialLanguage(),
  photo: 0
};

const setLanguage = (lang) => {
  state.lang = lang;
  localStorage.setItem("siteLang", lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.body.classList.toggle("is-zh", lang === "zh");
  document.querySelector("[data-lang-label]").textContent = lang === "zh" ? "EN" : "中文";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (copy[lang][key]) node.textContent = copy[lang][key];
  });
  renderPhoto(state.photo);
};

const renderPhoto = (index) => {
  state.photo = (index + photos.length) % photos.length;
  const photo = photos[state.photo];
  const image = document.querySelector("[data-stage-image]");
  const count = document.querySelector("[data-stage-count]");
  const title = document.querySelector("[data-stage-title]");

  if (!image || !count || !title) return;

  image.style.opacity = "0";
  window.setTimeout(() => {
    image.src = photo.src;
    image.alt = photo.alt[state.lang];
    count.textContent = `${String(state.photo + 1).padStart(2, "0")} / ${String(photos.length).padStart(2, "0")}`;
    title.textContent = copy[state.lang][photo.titleKey];
    image.style.opacity = "1";
  }, 160);

  document.querySelectorAll("[data-photo]").forEach((tile) => {
    tile.classList.toggle("active", Number(tile.dataset.photo) === state.photo);
  });
};

document.querySelector("[data-year]").textContent = new Date().getFullYear();
document.querySelector(".lang-toggle").addEventListener("click", () => {
  setLanguage(state.lang === "en" ? "zh" : "en");
});

document.querySelector(".previous").addEventListener("click", () => renderPhoto(state.photo - 1));
document.querySelector(".next").addEventListener("click", () => renderPhoto(state.photo + 1));
document.querySelectorAll("[data-photo]").forEach((tile) => {
  tile.addEventListener("click", () => renderPhoto(Number(tile.dataset.photo)));
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") renderPhoto(state.photo - 1);
  if (event.key === "ArrowRight") renderPhoto(state.photo + 1);
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll(".nav a").forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-45% 0px -45% 0px" });

document.querySelectorAll("section[id]").forEach((section) => navObserver.observe(section));

const progress = document.querySelector(".progress");
const heroImage = document.querySelector(".hero-image");
const cursor = document.querySelector(".cursor");

window.addEventListener("scroll", () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${(window.scrollY / maxScroll) * 100}%`;
  heroImage.style.transform = `scale(1.04) translateY(${window.scrollY * 0.05}px)`;
}, { passive: true });

window.addEventListener("pointermove", (event) => {
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});

document.querySelectorAll("a, button, .stage-frame").forEach((node) => {
  node.addEventListener("pointerenter", () => cursor.classList.add("is-active"));
  node.addEventListener("pointerleave", () => cursor.classList.remove("is-active"));
});

setLanguage(state.lang);
