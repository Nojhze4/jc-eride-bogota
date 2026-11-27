/* Main JS for JC E-Ride Bogotá Tours
   - Configure contact variables below
   - Handles WhatsApp links, translate button placeholder and form submit
*/
const CONFIG = {
  whatsappNumber: "573143507985",
  email: "juancarlostolozapaez@gmail.com",
  googleMapsUrl: "",
  instagramUrl: "",
  whatsappMessage: "Hola Juan Carlos, quiero reservar un tour privado en Bogotá."
};

function buildWhatsAppLink(number, message){
  if(!number) return '#';
  const encoded = encodeURIComponent(message || 'Hello');
  return `https://wa.me/${number}?text=${encoded}`;
}

function initWhatsAppButtons(){
  const els = document.querySelectorAll('[data-whatsapp]');
  els.forEach(el => {
    el.addEventListener('click', ()=>{
      const url = buildWhatsAppLink(CONFIG.whatsappNumber, CONFIG.whatsappMessage);
      window.open(url,'_blank');
    });
  });

  const big = document.getElementById('whatsappBig');
  if(big){ big.href = buildWhatsAppLink(CONFIG.whatsappNumber, CONFIG.whatsappMessage); }
  const floatBtn = document.getElementById('whatsappFloat');
  if(floatBtn){ floatBtn.addEventListener('click', ()=> window.open(buildWhatsAppLink(CONFIG.whatsappNumber, CONFIG.whatsappMessage),'_blank')); }
  const bookWhatsapp = document.getElementById('bookWhatsapp');
  if(bookWhatsapp){ bookWhatsapp.href = buildWhatsAppLink(CONFIG.whatsappNumber, CONFIG.whatsappMessage); }
}

function initEmailLinks(){
  const emailBig = document.getElementById('emailBig');
  if(emailBig){ emailBig.href = `mailto:${CONFIG.email}`; }
}

const translations = {
  es: {
    navHome: 'Inicio',
    navTours: 'Tours',
    navElectric: 'Vehículo eléctrico',
    navAbout: 'Sobre Juan Carlos',
    navFaq: 'Preguntas frecuentes',
    navContact: 'Contacto',
    ctaBook: 'Reservar por WhatsApp',
    footerBrand: 'Juan Carlos E-Ride Bogotá Tours',
    footerSubtitle: 'Recorridos privados en vehículos eléctricos en Bogotá, Colombia',
    footerMeta: '© 2026 Juan Carlos E-Ride Bogotá Tours. Todos los derechos reservados.',
    whatsappFloat: 'WhatsApp',
    heroEyebrow: '¿Nuevo en Bogotá? Deja que Juan Carlos te ayude a explorar la ciudad.',
    heroTitle: 'Descubre Bogotá en un recorrido privado 100% eléctrico',
    heroLead: 'Tours privados y personalizados en Bogotá y sus alrededores, con Juan Carlos.',
    heroPrimaryCta: 'Reservar mi tour',
    heroSecondaryCta: 'Conocer los tours',
    benefitsTitle: '¿Por qué elegir JC E-Ride?',
    benefitElectricTitle: '100 % Eléctrico',
    benefitElectricText: 'Recorre Bogotá en un vehículo completamente eléctrico, silencioso y moderno.',
    benefitPrivateTitle: 'Tour Privado',
    benefitPrivateText: 'Disfruta de una experiencia privada sin compartir el vehículo con otros turistas.',
    benefitPersonalizedTitle: 'Personalizado',
    benefitPersonalizedText: 'El recorrido puede adaptarse a tus intereses, tiempo disponible y preferencias.',
    benefitLocalTitle: 'Experiencia Local',
    benefitLocalText: 'Conoce Bogotá acompañado por Juan Carlos y recibe una atención cercana durante tu recorrido.',
    toursTitle: 'Explora Bogotá a tu manera',
    customTitle: 'Tu Bogotá. A tu manera.',
    customDescription: 'No todos los viajeros quieren hacer el mismo recorrido. Cuéntale a Juan Carlos qué lugares quieres conocer, cuánto tiempo tienes disponible y qué tipo de experiencia buscas. Juntos pueden crear un recorrido privado adaptado a tus intereses.',
    formName: 'Nombre',
    formEmail: 'Email',
    formWhatsApp: 'WhatsApp',
    formDate: 'Fecha aproximada',
    formPeople: 'Número de personas',
    formPlaces: 'Lugares que desea visitar',
    formComments: 'Comentarios',
    formSubmit: 'Solicitar un Tour Privado',
    electricTitle: '100% eléctrico. 100% Bogotá.',
    electricBadge: '100% VEHÍCULO ELÉCTRICO',
    electricItem1: 'Cero emisiones directas durante la conducción.',
    electricItem2: 'Conducción silenciosa.',
    electricItem3: 'Experiencia moderna y confortable.',
    electricItem4: 'Una alternativa de movilidad más responsable.',
    aboutTitle: 'Conoce a Juan Carlos',
    aboutPara1: 'Juan Carlos cuenta con amplia experiencia realizando recorridos y tours a nivel nacional. Después de conocer diferentes regiones, destinos y formas de vivir el turismo en Colombia, identificó una oportunidad: ofrecer a quienes visitan Bogotá una experiencia diferente, privada y personalizada.',
    aboutPara2: 'Así nació Juan Carlos E-Ride Bogotá Tours, un servicio creado para recorrer Bogotá y sus municipios cercanos de una manera cómoda, tranquila y responsable con el medio ambiente.',
    aboutPara3: 'Juan Carlos decidió incorporar un vehículo 100 % eléctrico para ofrecer una experiencia de movilidad moderna, silenciosa y confortable, combinando su experiencia como conductor y conocedor de diferentes destinos con una atención personalizada para cada visitante.',
    aboutPara4: 'Su objetivo es que cada persona pueda conocer Bogotá a su propio ritmo, con un recorrido adaptado a sus intereses y acompañado por alguien que conoce la ciudad y sus alrededores.',
    aboutButton1: 'Conoce a Juan Carlos',
    aboutButton2: 'Planifica tu Tour',
    trustTitle: 'Viaja con Confianza',
    trustItem1: 'Experiencia privada',
    trustItem2: 'Servicio personalizado',
    trustItem3: 'Conocimiento local',
    trustItem4: 'Comunicación directa',
    trustItem5: 'Vehículo eléctrico 100%',
    galleryTitle: 'Galería',
    faqTitle: 'Preguntas frecuentes',
    faqQuestion1: '¿Cómo reservo un tour?',
    faqAnswer1: 'Puedes reservar contactando a Juan Carlos por WhatsApp o por correo electrónico. Usa el formulario para solicitar un tour personalizado.',
    faqQuestion2: '¿Los tours son privados?',
    faqAnswer2: 'Sí, todos los tours ofrecidos son privados y adaptados a tus necesidades.',
    contactTitle: 'Planifica tu Experiencia en Bogotá',
    contactIntro: '¿Tienes preguntas o quieres crear un tour privado? Contacta directamente a Juan Carlos.',
    contactWhatsAppTitle: 'WhatsApp',
    contactWhatsAppText: 'Chatea directamente para planear y reservar.',
    chatWhatsApp: 'Chatear por WhatsApp',
    contactEmailTitle: 'Correo electrónico',
    contactEmailText: 'Escribe a Juan Carlos',
    sendEmail: 'Enviar email',
    translateButton: 'Traducir',
    askTour: 'Pregunta sobre este tour',
    bookWhatsApp: 'Reservar por WhatsApp',
    tourEssentialsTitle: 'Bogotá esencial',
    tourHistoricTitle: 'Bogotá histórica',
    tourMonserrateTitle: 'Bogotá y Monserrate',
    tourCustomTitle: 'Tour privado personalizado'
  },
  en: {
    navHome: 'Home',
    navTours: 'Tours',
    navElectric: 'Electric Vehicle',
    navAbout: 'About Juan Carlos',
    navFaq: 'FAQs',
    navContact: 'Contact',
    ctaBook: 'Book on WhatsApp',
    footerBrand: 'Juan Carlos E-Ride Bogotá Tours',
    footerSubtitle: 'Private electric tours in Bogotá, Colombia',
    footerMeta: '© 2026 Juan Carlos E-Ride Bogotá Tours. All rights reserved.',
    whatsappFloat: 'WhatsApp',
    heroEyebrow: 'New to Bogotá? Let Juan Carlos help you explore the city.',
    heroTitle: 'Discover Bogotá in a Private 100% Electric Ride',
    heroLead: 'Private and personalized tours in Bogotá and nearby destinations, hosted by Juan Carlos.',
    heroPrimaryCta: 'Reserve my tour',
    heroSecondaryCta: 'Explore the tours',
    benefitsTitle: 'Why choose JC E-Ride',
    benefitElectricTitle: '100 % Electric',
    benefitElectricText: 'Travel through Bogotá in a fully electric, quiet, and modern vehicle.',
    benefitPrivateTitle: 'Private Tour',
    benefitPrivateText: 'Enjoy a private experience without sharing the vehicle with other tourists.',
    benefitPersonalizedTitle: 'Personalized',
    benefitPersonalizedText: 'The route can be adapted to your interests, time available, and preferences.',
    benefitLocalTitle: 'Local Experience',
    benefitLocalText: 'Get to know Bogotá with Juan Carlos and receive close, friendly attention during your tour.',
    toursTitle: 'Explore Bogotá Your Way',
    customTitle: 'Your Bogotá. Your Way.',
    customDescription: 'Not every traveler wants the same route. Tell Juan Carlos which places you want to visit, how much time you have, and what kind of experience you are looking for. Together, you can create a private tour tailored to your interests.',
    formName: 'Name',
    formEmail: 'Email',
    formWhatsApp: 'WhatsApp',
    formDate: 'Approximate date',
    formPeople: 'Number of people',
    formPlaces: 'Places you want to visit',
    formComments: 'Comments',
    formSubmit: 'Request a Private Tour',
    electricTitle: '100% Electric. 100% Bogotá.',
    electricBadge: '100% ELECTRIC VEHICLE',
    electricItem1: 'Zero direct emissions during the trip.',
    electricItem2: 'Quiet driving.',
    electricItem3: 'Modern and comfortable experience.',
    electricItem4: 'A more responsible mobility alternative.',
    aboutTitle: 'Meet Juan Carlos',
    aboutPara1: 'Juan Carlos has extensive experience leading tours and excursions across Colombia. After getting to know different regions, destinations, and ways of experiencing tourism in Colombia, he identified an opportunity: to offer visitors to Bogotá a different, private, and personalized experience.',
    aboutPara2: 'That is how Juan Carlos E-Ride Bogotá Tours was born, a service created to explore Bogotá and its nearby municipalities in a comfortable, calm, and environmentally responsible way.',
    aboutPara3: 'Juan Carlos decided to include a 100% electric vehicle to offer a modern, quiet, and comfortable mobility experience, combining his experience as a driver and local expert with personalized attention for each visitor.',
    aboutPara4: 'His goal is for every person to discover Bogotá at their own pace, with a route adapted to their interests and accompanied by someone who knows the city and its surroundings.',
    aboutButton1: 'Meet Juan Carlos',
    aboutButton2: 'Plan Your Tour',
    trustTitle: 'Travel with Confidence',
    trustItem1: 'Private experience',
    trustItem2: 'Personalized service',
    trustItem3: 'Local knowledge',
    trustItem4: 'Direct communication',
    trustItem5: '100% electric vehicle',
    galleryTitle: 'Gallery',
    faqTitle: 'Frequently Asked Questions',
    faqQuestion1: 'How do I book a tour?',
    faqAnswer1: 'You can reserve by contacting Juan Carlos on WhatsApp or by email. Use the form to request a personalized tour.',
    faqQuestion2: 'Are the tours private?',
    faqAnswer2: 'Yes, all tours offered are private and adapted to your needs.',
    contactTitle: "Let's Plan Your Bogotá Experience",
    contactIntro: 'Do you have questions or want to create a private tour? Contact Juan Carlos directly.',
    contactWhatsAppTitle: 'WhatsApp',
    contactWhatsAppText: 'Chat directly to plan and book.',
    chatWhatsApp: 'Chat on WhatsApp',
    contactEmailTitle: 'Email',
    contactEmailText: 'Email Juan Carlos',
    sendEmail: 'Send Email',
    translateButton: 'Translate',
    askTour: 'Ask about this tour',
    bookWhatsApp: 'Book on WhatsApp',
    tourEssentialsTitle: 'Bogotá Essentials',
    tourHistoricTitle: 'Historic Bogotá',
    tourMonserrateTitle: 'Bogotá & Monserrate',
    tourCustomTitle: 'Custom Private Tour'
  },
  pt: {
    navHome: 'Início',
    navTours: 'Passeios',
    navElectric: 'Veículo Elétrico',
    navAbout: 'Sobre Juan Carlos',
    navFaq: 'Perguntas frequentes',
    navContact: 'Contato',
    ctaBook: 'Reservar no WhatsApp',
    heroEyebrow: 'Novo em Bogotá? Deixe Juan Carlos mostrar a cidade.',
    heroTitle: 'Descubra Bogotá em um passeio privado 100% elétrico',
    heroLead: 'Passeios privados e personalizados em Bogotá e arredores, com Juan Carlos.',
    heroPrimaryCta: 'Reservar meu tour',
    heroSecondaryCta: 'Conhecer os tours',
    benefitsTitle: 'Por que escolher a JC E-Ride',
    toursTitle: 'Explore Bogotá do seu jeito',
    customTitle: 'Sua Bogotá. Seu jeito.',
    electricTitle: '100% Elétrico. 100% Bogotá.',
    aboutTitle: 'Conheça Juan Carlos',
    trustTitle: 'Viaje com confiança',
    galleryTitle: 'Galeria',
    faqTitle: 'Perguntas frequentes',
    contactTitle: 'Vamos planejar sua experiência em Bogotá',
    translateButton: 'Traduzir'
  },
  fr: {
    navHome: 'Accueil',
    navTours: 'Tours',
    navElectric: 'Véhicule électrique',
    navAbout: 'À propos de Juan Carlos',
    navFaq: 'Questions fréquentes',
    navContact: 'Contact',
    ctaBook: 'Réserver via WhatsApp',
    heroEyebrow: 'Nouveau à Bogotá ? Laissez Juan Carlos vous faire découvrir la ville.',
    heroTitle: 'Découvrez Bogotá en voiture privée 100 % électrique',
    heroLead: 'Tours privés et personnalisés à Bogotá et ses environs, avec Juan Carlos.',
    heroPrimaryCta: 'Réserver mon tour',
    heroSecondaryCta: 'Découvrir les tours',
    benefitsTitle: 'Pourquoi choisir JC E-Ride',
    toursTitle: 'Explorez Bogotá à votre manière',
    customTitle: 'Votre Bogotá. À votre manière.',
    electricTitle: '100 % électrique. 100 % Bogotá.',
    aboutTitle: 'Rencontrez Juan Carlos',
    trustTitle: 'Voyagez en confiance',
    galleryTitle: 'Galerie',
    faqTitle: 'Questions fréquentes',
    contactTitle: 'Planifions votre expérience à Bogotá',
    translateButton: 'Traduire'
  },
  de: {
    navHome: 'Startseite',
    navTours: 'Touren',
    navElectric: 'Elektrofahrzeug',
    navAbout: 'Über Juan Carlos',
    navFaq: 'Häufige Fragen',
    navContact: 'Kontakt',
    ctaBook: 'Per WhatsApp buchen',
    heroEyebrow: 'Neu in Bogotá? Lassen Sie Juan Carlos die Stadt entdecken.',
    heroTitle: 'Entdecken Sie Bogotá in einer privaten 100% elektrischen Fahrt',
    heroLead: 'Private und individuelle Touren in Bogotá und Umgebung, geführt von Juan Carlos.',
    heroPrimaryCta: 'Meine Tour buchen',
    heroSecondaryCta: 'Touren ansehen',
    benefitsTitle: 'Warum JC E-Ride wählen',
    toursTitle: 'Erkunden Sie Bogotá auf Ihre Weise',
    customTitle: 'Ihr Bogotá. Auf Ihre Weise.',
    electricTitle: '100% elektrisch. 100% Bogotá.',
    aboutTitle: 'Juan Carlos kennenlernen',
    trustTitle: 'Reisen Sie mit Vertrauen',
    galleryTitle: 'Galerie',
    faqTitle: 'Häufig gestellte Fragen',
    contactTitle: 'Planen wir Ihre Bogotá-Erfahrung',
    translateButton: 'Übersetzen'
  },
  it: {
    navHome: 'Home',
    navTours: 'Tour',
    navElectric: 'Veicolo elettrico',
    navAbout: 'Su Juan Carlos',
    navFaq: 'Domande frequenti',
    navContact: 'Contatti',
    ctaBook: 'Prenota su WhatsApp',
    heroEyebrow: 'Nuovo a Bogotá? Lascia che Juan Carlos ti mostri la città.',
    heroTitle: 'Scopri Bogotá in un giro privato 100% elettrico',
    heroLead: 'Tour privati e personalizzati a Bogotá e dintorni, guidati da Juan Carlos.',
    heroPrimaryCta: 'Prenota il mio tour',
    heroSecondaryCta: 'Scopri i tour',
    benefitsTitle: 'Perché scegliere JC E-Ride',
    toursTitle: 'Esplora Bogotá a modo tuo',
    customTitle: 'La tua Bogotá. A modo tuo.',
    electricTitle: '100% elettrico. 100% Bogotá.',
    aboutTitle: 'Conosci Juan Carlos',
    trustTitle: 'Viaggia con sicurezza',
    galleryTitle: 'Galleria',
    faqTitle: 'Domande frequenti',
    contactTitle: 'Progettiamo la tua esperienza a Bogotá',
    translateButton: 'Traduci'
  },
  ja: {
    navHome: 'ホーム',
    navTours: 'ツアー',
    navElectric: '電気自動車',
    navAbout: 'Juan Carlosについて',
    navFaq: 'よくある質問',
    navContact: 'お問い合わせ',
    ctaBook: 'WhatsAppで予約',
    heroEyebrow: 'ボゴタは初めてですか？Juan Carlosが案内します。',
    heroTitle: 'ボゴタを100%電気自動車で体験',
    heroLead: 'ボゴタと周辺地域のプライベートで個別対応のツアー。',
    heroPrimaryCta: 'ツアーを予約',
    heroSecondaryCta: 'ツアーを見る',
    benefitsTitle: 'なぜJC E-Rideを選ぶのか',
    toursTitle: '自分だけのボゴタを探索',
    customTitle: 'あなたのボゴタ。あなたのペースで。',
    electricTitle: '100%電気自動車。100%ボゴタ。',
    aboutTitle: 'Juan Carlosについて',
    trustTitle: '安心して旅を楽しむ',
    galleryTitle: 'ギャラリー',
    faqTitle: 'よくある質問',
    contactTitle: 'ボゴタ体験を計画しよう',
    translateButton: '翻訳'
  },
  ko: {
    navHome: '홈',
    navTours: '투어',
    navElectric: '전기차',
    navAbout: 'Juan Carlos 소개',
    navFaq: '자주 묻는 질문',
    navContact: '연락처',
    ctaBook: 'WhatsApp로 예약',
    heroEyebrow: '보고타가 처음이세요? Juan Carlos가 도와드립니다.',
    heroTitle: '100% 전기차로 보고타를 발견하세요',
    heroLead: '보고타와 주변 지역의 개인 맞춤형 투어를 Juan Carlos와 함께.',
    heroPrimaryCta: '투어 예약',
    heroSecondaryCta: '투어 보기',
    benefitsTitle: '왜 JC E-Ride를 선택해야 하나요',
    toursTitle: '나만의 방식으로 보고타 탐험',
    customTitle: '나만의 보고타. 나만의 방식으로.',
    electricTitle: '100% 전기차. 100% 보고타.',
    aboutTitle: 'Juan Carlos 만나기',
    trustTitle: '안심하고 여행하기',
    galleryTitle: '갤러리',
    faqTitle: '자주 묻는 질문',
    contactTitle: '보고타 경험을 계획해보세요',
    translateButton: '번역'
  },
  zh: {
    navHome: '首页',
    navTours: '旅行',
    navElectric: '电动车',
    navAbout: '关于 Juan Carlos',
    navFaq: '常见问题',
    navContact: '联系',
    ctaBook: 'WhatsApp 预约',
    heroEyebrow: '第一次到波哥大？让 Juan Carlos 带您探索城市。',
    heroTitle: '乘坐纯电动私人车探索波哥大',
    heroLead: '在波哥大及周边地区，由 Juan Carlos 提供私人定制旅游。',
    heroPrimaryCta: '预订我的路线',
    heroSecondaryCta: '了解更多路线',
    benefitsTitle: '为什么选择 JC E-Ride',
    toursTitle: '按您的方式探索波哥大',
    customTitle: '您的波哥大。按您的方式。',
    electricTitle: '100% 电动。100% 波哥大。',
    aboutTitle: '认识 Juan Carlos',
    trustTitle: '安心出行',
    galleryTitle: '图库',
    faqTitle: '常见问题',
    contactTitle: '让我们规划您的波哥大体验',
    translateButton: '翻译'
  },
  ar: {
    navHome: 'الرئيسية',
    navTours: 'الجولات',
    navElectric: 'السيارة الكهربائية',
    navAbout: 'عن خوان كارلوس',
    navFaq: 'الأسئلة الشائعة',
    navContact: 'تواصل',
    ctaBook: 'احجز عبر واتساب',
    heroEyebrow: 'جديد في بوغوتا؟ دع خوان كارلوس يساعدك في استكشاف المدينة.',
    heroTitle: 'اكتشف بوغوتا في رحلة خاصة 100% كهربائية',
    heroLead: 'جولات خاصة ومخصصة في بوغوتا والمناطق المجاورة بقيادة خوان كارلوس.',
    heroPrimaryCta: 'احجز جولتي',
    heroSecondaryCta: 'استكشف الجولات',
    benefitsTitle: 'لماذا تختار JC E-Ride',
    toursTitle: 'استكشف بوغوتا بطريقةك الخاصة',
    customTitle: 'بوغوتا الخاصة بك. بطريقتك.',
    electricTitle: '100% كهربائية. 100% بوغوتا.',
    aboutTitle: 'عرف على خوان كارلوس',
    trustTitle: 'سافر بثقة',
    galleryTitle: 'المعرض',
    faqTitle: 'الأسئلة الشائعة',
    contactTitle: 'لنخطط لتجربتك في بوغوتا',
    translateButton: 'ترجمة'
  }
};

function applyLanguage(lang){
  const dict = translations[lang] || translations.es;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (!dict[key]) return;

    if (el.tagName === 'A' || el.tagName === 'BUTTON' || el.tagName === 'DIV' || el.tagName === 'SPAN' || el.tagName === 'SUMMARY' || el.tagName === 'H3' || el.tagName === 'H4' || el.tagName === 'P' || el.tagName === 'STRONG') {
      el.textContent = dict[key];
      return;
    }

    const inlineText = el.querySelector('span');
    if (inlineText) {
      inlineText.textContent = dict[key];
      return;
    }

    el.textContent = dict[key];
  });

  const navMap = {
    home: 'navHome',
    tours: 'navTours',
    electric: 'navElectric',
    about: 'navAbout',
    faq: 'navFaq',
    contact: 'navContact'
  };

  Object.entries(navMap).forEach(([href, key]) => {
    const link = document.querySelector(`.nav-link[href="#${href}"]`);
    if (link && dict[key]) link.textContent = dict[key];
  });

  const translateButton = document.getElementById('translateBtn');
  if (translateButton) {
    const label = dict.translateButton || 'Translate';
    translateButton.setAttribute('aria-label', label);
    translateButton.setAttribute('title', label);

    const translateLabel = translateButton.querySelector('.translate-label');
    if (translateLabel) {
      translateLabel.textContent = label;
    }
  }
}

function initTranslateButton(){
  const btn = document.getElementById('translateBtn');
  const menu = document.getElementById('languageMenu');
  const select = document.getElementById('languageSelect');

  if(!btn || !menu || !select) return;

  const closeMenu = () => {
    menu.setAttribute('hidden', 'hidden');
    btn.setAttribute('aria-expanded', 'false');
  };

  const toggleMenu = () => {
    const isHidden = menu.hasAttribute('hidden');
    if (isHidden) {
      menu.removeAttribute('hidden');
      btn.setAttribute('aria-expanded', 'true');
      select.focus();
    } else {
      closeMenu();
    }
  };

  btn.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleMenu();
  });

  select.addEventListener('change', (event) => {
    applyLanguage(event.target.value);
    closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!menu.hasAttribute('hidden') && !btn.contains(event.target) && !menu.contains(event.target)) {
      closeMenu();
    }
  });

  closeMenu();
  applyLanguage(select.value);
}

function scrollToSection(id){
  const el = document.querySelector(id);
  if(el) el.scrollIntoView({behavior:'smooth'});
}

function isValidEmail(value){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());
}

function getTodayISO(){
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today.toISOString().split('T')[0];
}

function showFormError(message, focusTarget = null) {
  const existing = document.querySelector('.jc-eride-form-error');
  if (existing) existing.remove();

  const alertEl = document.createElement('div');
  alertEl.className = 'jc-eride-form-error alert alert-danger alert-dismissible fade show';
  alertEl.setAttribute('role', 'alert');
  alertEl.setAttribute('aria-live', 'assertive');
  alertEl.style.position = 'fixed';
  alertEl.style.top = '24px';
  alertEl.style.left = '50%';
  alertEl.style.transform = 'translateX(-50%)';
  alertEl.style.zIndex = '2000';
  alertEl.style.minWidth = '300px';
  alertEl.style.maxWidth = '520px';
  alertEl.style.width = 'min(90vw, 520px)';
  alertEl.style.boxShadow = '0 12px 30px rgba(0,0,0,0.18)';

  alertEl.innerHTML = `
    <div class="d-flex align-items-center justify-content-between gap-3">
      <strong class="me-2">Error</strong>
      <span class="flex-grow-1">${message}</span>
      <button type="button" class="btn-close" aria-label="Cerrar"></button>
    </div>
  `;

  const dismissBtn = alertEl.querySelector('.btn-close');
  dismissBtn.addEventListener('click', () => alertEl.remove());

  document.body.appendChild(alertEl);

  if (focusTarget) {
    focusTarget.focus();
  }

  window.setTimeout(() => {
    if (alertEl.parentNode) {
      alertEl.remove();
    }
  }, 4000);
}

function clampPeopleValue(input){
  if (!input) return;
  const value = Number(input.value);
  if (!Number.isFinite(value)) {
    input.value = 1;
    return;
  }

  if (value < 1) input.value = 1;
  if (value > 4) input.value = 4;
}

function initForm(){
  const form = document.getElementById('customForm');
  if(!form) return;

  const dateInput = form.querySelector('input[name="date"]');
  const peopleInput = form.querySelector('input[name="people"]');

  if (dateInput) {
    dateInput.min = getTodayISO();
    dateInput.addEventListener('input', () => {
      if (!dateInput.value) return;
      const selectedDate = new Date(`${dateInput.value}T00:00:00`);
      const today = new Date(`${getTodayISO()}T00:00:00`);
      if (selectedDate < today) {
        dateInput.value = getTodayISO();
      }
    });
  }

  if (peopleInput) {
    peopleInput.addEventListener('input', () => clampPeopleValue(peopleInput));
    clampPeopleValue(peopleInput);
  }

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const obj = Object.fromEntries(data.entries());
    const email = String(obj.email || '').trim();
    const name = String(obj.name || '').trim();
    const whatsapp = String(obj.whatsapp || '').trim();
    const people = Number(obj.people || 0);
    const selectedDate = obj.date ? new Date(`${obj.date}T00:00:00`) : null;

    if(!name && !whatsapp){
      showFormError('Please provide your name or a WhatsApp number so we can contact you.', form.querySelector('[name="name"]') || form.querySelector('[name="whatsapp"]'));
      return;
    }

    if(!email || !isValidEmail(email)){
      showFormError('Please use a valid email address so we can contact you.', form.email);
      return;
    }

    if (people < 1 || people > 4) {
      showFormError('The number of people must be between 1 and 4.', peopleInput);
      return;
    }

    if (selectedDate && selectedDate < new Date(`${getTodayISO()}T00:00:00`)) {
      showFormError('Please choose a future date for your trip.', dateInput);
      return;
    }

    const msg = `${CONFIG.whatsappMessage}\n\nRequest details:\nName: ${name}\nEmail: ${email}\nWhatsApp: ${whatsapp}\nDate: ${obj.date||''}\nPeople: ${people}\nPlaces: ${obj.places||''}\nComments: ${obj.comments||''}`;
    window.open(buildWhatsAppLink(CONFIG.whatsappNumber, msg),'_blank');
  });
}

function initScrollHeader(){
  const header = document.querySelector('.site-header');
  if(!header) return;

  const applyHeaderState = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  applyHeaderState();
  window.addEventListener('scroll', applyHeaderState, { passive: true });
}

document.addEventListener('DOMContentLoaded', ()=>{
  initWhatsAppButtons();
  initEmailLinks();
  initTranslateButton();
  initForm();
  initScrollHeader();
});

// Export small helpers for dev/testing
window.JC_ERIDE = {CONFIG, buildWhatsAppLink, scrollToSection};
