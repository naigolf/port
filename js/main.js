// Main interactive logic for Developer Portfolio
document.addEventListener('DOMContentLoaded', () => {
  initProjectFilters();
  initSearch();
  initProjectModal();
  initLightbox();
  initSmoothScroll();
});

// Project data dictionary for deep dive modal
const projectDetails = {
  'ea-mt5': {
    title: 'MT5 Expert Advisor (EA) - SMC Strategy & AI News Filter',
    category: 'Algorithmic Trading & FinTech',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    tags: ['MQL5', 'MetaTrader 5', 'Python', 'Telegram API', 'Gemini AI', 'LuxAlgo SMC', 'ForexFactory'],
    description: `
      <p class="mb-3">ระบบซื้อขายอัตโนมัติ (Automated Algorithmic Trading) บนคู่เงินทองคำ (XAUUSD) บนแพลตฟอร์ม MetaTrader 5 ออกแบบตามหลักการ Smart Money Concepts (SMC) เลียนแบบพฤติกรรมของสถาบันการเงินรายใหญ่</p>
      <h4 class="font-semibold text-white mt-4 mb-2">จุดเด่นของสถาปัตยกรรมระบบ:</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
        <li><strong>สัญญาณเข้าออเดอร์ (Entry Signals):</strong> ตรวจจับ Fair Value Gap (FVG) และ Order Block (OB) ทุกแท่งเทียนต้นชั่วโมง (H1 New Bar)</li>
        <li><strong>การกรองแนวโน้ม (Trend Filter):</strong> วิเคราะห์ภาพใหญ่ด้วย Daily EMA 200 เน้น Buy เมื่ออยู่เหนือเส้น และเน้น Sell เมื่ออยู่ใต้เส้น</li>
        <li><strong>AI News Filter:</strong> สคริปต์เชื่อมต่อ Gemini API เพื่อวิเคราะห์ตารางข่าวเศรษฐกิจจาก ForexFactory ป้องกันการเปิดออเดอร์ช่วงข่าวแรง (Non-Farm NFP, CPI, FOMC)</li>
        <li><strong>Telegram Realtime Bot:</strong> ส่งรายงานสถานะพอร์ต, กำไร-ขาดทุนสะสม และแจ้งเตือนทันทีที่เปิด/ปิดออเดอร์</li>
        <li><strong>การคุมความเสี่ยง (Risk Management):</strong> ฟังก์ชันตัดขาดทุนอัตโนมัติ (Max Daily Loss Guard) และคุมอัตราส่วน R:R = 1:1</li>
      </ul>
    `,
    imagePlaceholder: 'images/projects/ea-mt5.png',
    placeholderNotice: 'วางภาพหน้าจอ MT5 Backtest หรือกราฟิกแผนกลยุทธ์ที่ images/projects/ea-mt5.png'
  },
  'tiktok-bot': {
    title: 'TikTok Live Chat Pro++ & AI Stream Assistant',
    category: 'Chrome Extensions & Automation',
    badgeColor: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
    tags: ['Chrome Extension Manifest V3', 'JavaScript', 'Telegram API', 'DOM MutationObserver', 'Web Scraping'],
    description: `
      <p class="mb-3">ส่วนขยาย Chrome สำหรับผู้ดูแลการสตรีมสดบน TikTok Live ช่วยตรวจจับข้อความแชทของผู้เข้าชมแบบ Real-time และเชื่อมต่อระบบตอบโต้อัตโนมัติ</p>
      <h4 class="font-semibold text-white mt-4 mb-2">ฟังก์ชันการทำงานหลัก:</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
        <li><strong>Live Chat Interceptor:</strong> ดักจับ Mutation ของข้อความแชทและคอมเมนต์บนหน้าต่าง TikTok Live แบบไม่มีหน่วง</li>
        <li><strong>Telegram Notification Bridge:</strong> ส่งคำถามสำคัญจากลูกค้าหรือคำสั่งซื้อพิเศษเข้ากลุ่ม Telegram ทีมงานทันที</li>
        <li><strong>Smart Auto-Reply:</strong> ตั้งค่าคีย์เวิร์ดตอบคำถามที่พบบ่อย (FAQ) อัตโนมัติ เพื่อกระตุ้นยอดขายและไม่พลาดลูกค้ารายสำคัญ</li>
      </ul>
    `,
    imagePlaceholder: 'images/projects/tiktok-live.png',
    placeholderNotice: 'วางภาพหน้าจอส่วนขยายหรือตัวอย่างหน้าจอไลฟ์ที่ images/projects/tiktok-live.png'
  },
  'autoflow-pro': {
    title: 'AutoFlow Pro Recorder - SidePanel Automation',
    category: 'Chrome Extensions & Automation',
    badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    tags: ['Manifest V3', 'Chrome SidePanel API', 'Action Recorder', 'Chrome Scripting', 'Storage API'],
    description: `
      <p class="mb-3">เครื่องมือบันทึกและจำลองการคลิก กรอกฟอร์ม และวนลูปงานประจำบนเว็บเบราว์เซอร์อัตโนมัติ ผ่านหน้าต่าง Side Panel ที่ติดตั้งเป็นส่วนขยาย Chrome</p>
      <h4 class="font-semibold text-white mt-4 mb-2">ฟังก์ชันการทำงานหลัก:</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
        <li><strong>Side Panel Native UI:</strong> ใช้งานเครื่องมือคู่ขนานกับหน้าเว็บโดยไม่ต้องสลับแท็บ</li>
        <li><strong>Event Recording & Replay:</strong> บันทึกคลิก, พิมพ์ข้อความ, สกอลล์หน้าจอ และรันซ้ำด้วยความเร็วที่ปรับได้</li>
        <li><strong>Background Server Hook:</strong> ส่งข้อมูลการทำงานไปยัง Server ภายนอกเพื่อบันทึกลงฐานข้อมูล</li>
      </ul>
    `,
    imagePlaceholder: 'images/projects/autoflow.png',
    placeholderNotice: 'วางภาพหน้าต่าง SidePanel หรือการทำงานที่ images/projects/autoflow.png'
  },
  'shopee-affiliate': {
    title: 'Shopee Affiliate Flow Automation (Naigolf)',
    category: 'Chrome Extensions & E-commerce',
    badgeColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    tags: ['Chrome Extension', 'Affiliate Marketing', 'Web Automation', 'URL DeepLinker'],
    description: `
      <p class="mb-3">เครื่องมือสร้างและจัดการลิงก์ Affiliate บน Shopee ช่วยประหยัดเวลาของ Content Creator ในการแปะพิกัดและกระจายสินค้าไปยังช่องทางต่างๆ</p>
      <h4 class="font-semibold text-white mt-4 mb-2">ฟังก์ชันการทำงานหลัก:</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
        <li><strong>One-Click Convert:</strong> แปลงลิงก์หน้าร้านให้เป็น Affiliate Deep Link พร้อมแท็กแคมเปญ</li>
        <li><strong>Multi-Store Flow:</strong> จัดการแคตตาล็อกสินค้าแยกตามธีมร้าน (Orange / Yellow Stores)</li>
        <li><strong>Data Extract:</strong> ดึงรูปภาพสินค้า แคปชั่น และราคาส่วนลดเพื่อนำไปสร้างสื่อโพสต์ได้ทันที</li>
      </ul>
    `,
    imagePlaceholder: 'images/projects/shopee-affiliate.png',
    placeholderNotice: 'วางภาพตัวอย่างหน้าจอเครื่องมือที่ images/projects/shopee-affiliate.png'
  },
  'tiktok-popup': {
    title: 'TikTok Popup Pro - Enhanced Desktop Viewer',
    category: 'Chrome Extensions & UX',
    badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    tags: ['Chrome Extension V3', 'CSS3 Modal', 'Content Scripts', 'UX Design'],
    description: `
      <p class="mb-3">ส่วนขยายสำหรับเพิ่มอรรถรสในการชมวิดีโอบน TikTok Desktop ด้วยหน้าต่าง Pop-up Modal จัดกึ่งกลางจออย่างสวยงาม สะอาดตา ไร้สิ่งรบกวน</p>
      <h4 class="font-semibold text-white mt-4 mb-2">ฟังก์ชันการทำงานหลัก:</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
        <li><strong>Distraction-Free Mode:</strong> ซ่อนคอมเมนต์และแบนเนอร์ด้านข้าง ให้ความสำคัญกับตัววิดีโอแบบ 100%</li>
        <li><strong>Keyboard Shortcuts:</strong> ควบคุมการเล่น เล่นซ้ำ หรือเปลี่ยนคลิปได้สะดวกผ่านคีย์บอร์ด</li>
      </ul>
    `,
    imagePlaceholder: 'images/projects/tiktok-popup.png',
    placeholderNotice: 'วางภาพหน้าจอส่วนขยายที่ images/projects/tiktok-popup.png'
  },
  'n8n-facebook': {
    title: 'n8n Workflow Automation & Facebook Scraper',
    category: 'Automation & Data Pipelines',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    tags: ['n8n', 'Python', 'Playwright', 'Webhooks', 'Hugging Face AI', 'JSON Pipelines'],
    description: `
      <p class="mb-3">ไปป์ไลน์อัตโนมัติสำหรับการดึงโพสต์จาก Facebook Page ด้วย Python Playwright (รองรับทั้ง Headless และ Headful) เพื่อส่งต่อข้อมูลไปยัง n8n Workflow และประมวลผลด้วย AI</p>
      <h4 class="font-semibold text-white mt-4 mb-2">ฟังก์ชันการทำงานหลัก:</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
        <li><strong>Resilient Scraping:</strong> สลับโหมด Headful / Headless และ Mobile View เพื่อป้องกันการติดตรวจจับบอท</li>
        <li><strong>n8n Webhook Sync:</strong> ซิงค์ข้อมูลโพสต์ รูปภาพ และเนื้อหาเข้าสู่ระบบ n8n อัตโนมัติ</li>
        <li><strong>AI Post Analysis:</strong> เชื่อมต่อโมเดล Hugging Face เพื่อสรุปเนื้อหาและจัดหมวดหมู่ข้อมูล</li>
      </ul>
    `,
    imagePlaceholder: 'images/projects/n8n-scraper.png',
    placeholderNotice: 'มีภาพตัวอย่าง workflow/screenshot อยู่แล้วที่ images/projects/n8n-scraper.png'
  },
  'finder-xy': {
    title: 'Finder X Y - Screen Coordinate Automation Utility',
    category: 'Automation & RPA',
    badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    tags: ['Node.js', 'Automation', 'RPA Tools', 'Screen Mapping'],
    description: `
      <p class="mb-3">ยูทิลิตีตรวจหาพิกัด X/Y บนหน้าจอเดสก์ท็อปและตำแหน่ง DOM Element เพื่อใช้ในการเขียน Macro Bot, RPA และจำลองการควบคุมเมาส์อย่างแม่นยำ</p>
    `,
    imagePlaceholder: 'images/projects/finder-xy.png',
    placeholderNotice: 'วางภาพหน้าจอโปรแกรมที่ images/projects/finder-xy.png'
  },
  'esp32-xiaozhi': {
    title: 'ESP32-S3 AI Voice Assistant (Xiaozhi Integration)',
    category: 'IoT, Hardware & Robotics',
    badgeColor: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    tags: ['ESP32-S3', 'ESP-IDF', 'C/C++', 'FreeRTOS', 'I2S Audio', 'Cloud LLM / STT / TTS'],
    description: `
      <p class="mb-3">การสร้างหุ่นยนต์ผู้ช่วยอัจฉริยะแบบพกพาโดยใช้ชิป ESP32-S3 สามารถฟังเสียง พูดตอบโต้ และประมวลผลคำสั่งผ่าน Large Language Model (LLM) ด้วยโครงการ Xiaozhi</p>
      <h4 class="font-semibold text-white mt-4 mb-2">ฟังก์ชันการทำงานหลัก:</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
        <li><strong>I2S Audio Pipeline:</strong> ควบคุมไมโครโฟนและลำโพงดิจิทัล รองรับการตัดเสียงรบกวน (Noise Suppression)</li>
        <li><strong>Voice Activation & Streaming:</strong> รับคำสั่งเสียงแบบสตรีมมิ่ง ส่งไปยัง Cloud STT/TTS ได้อย่างรวดเร็ว</li>
        <li><strong>Low-Power Architecture:</strong> จัดการพลังงานด้วยโหมด Sleep บน ESP32-S3 ให้พกพาไปใช้งานได้ทุกที่</li>
      </ul>
    `,
    imagePlaceholder: 'images/projects/esp32-xiaozhi.png',
    placeholderNotice: 'วางภาพบอร์ด ESP32-S3 หรือคลิปการทดสอบที่ images/projects/esp32-xiaozhi.png'
  },
  'esp32-cyd': {
    title: 'ESP32 Cheap Yellow Display (CYD) Touch Dashboard',
    category: 'IoT, Hardware & Robotics',
    badgeColor: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
    tags: ['ESP32-2432S028R', 'LVGL', 'TFT_eSPI', 'C++', 'Touch UI', 'MQTT / REST API'],
    description: `
      <p class="mb-3">แดชบอร์ดหน้าจอสีระบบสัมผัส (Touchscreen Dashboard) บนบอร์ด ESP32 Cheap Yellow Display (CYD) สำหรับแสดงสถานะสภาพแวดล้อม เซิร์ฟเวอร์ และควบคุมอุปกรณ์ IoT ในบ้าน</p>
      <h4 class="font-semibold text-white mt-4 mb-2">ฟังก์ชันการทำงานหลัก:</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
        <li><strong>Custom LVGL GUI:</strong> ออกแบบหน้าตาสวยงาม กราฟิกเรียบหรู พร้อมสวิตช์สัมผัสและเกจวัดค่า</li>
        <li><strong>WiFi Telemetry:</strong> รับ-ส่งข้อมูลผ่าน MQTT โบรกเกอร์และ REST API สดใหม่ตลอดเวลา</li>
      </ul>
    `,
    imagePlaceholder: 'images/projects/esp32-cyd.png',
    placeholderNotice: 'วางภาพหน้าจอแดชบอร์ด CYD ที่ images/projects/esp32-cyd.png'
  },
  'esp32-cam': {
    title: 'ESP32-S3 CAM Realtime Vision Node',
    category: 'IoT, Hardware & Robotics',
    badgeColor: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    tags: ['ESP32-S3 CAM', 'OV2640 / OV5640', 'WebSocket', 'Video Streaming', 'Computer Vision'],
    description: `
      <p class="mb-3">โหนดกล้องวงจรปิดไร้สายขนาดเล็กสำหรับสตรีมมิ่งภาพวิดีโอความละเอียดสูงผ่านเครือข่าย Wi-Fi พร้อมรองรับการตรวจจับความเคลื่อนไหว</p>
    `,
    imagePlaceholder: 'images/projects/esp32-cam.png',
    placeholderNotice: 'วางภาพโมดูลกล้องที่ images/projects/esp32-cam.png'
  },
  'companion-robot': {
    title: 'DIY Desktop Companion Robot',
    category: 'IoT, Hardware & Robotics',
    badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    tags: ['Arduino', 'Servo Motors', 'Sensor Fusion', '3D Printing', 'Robotics'],
    description: `
      <p class="mb-3">หุ่นยนต์ตั้งโต๊ะเชิงโต้ตอบ ขยับท่าทางตามเสียงและการตรวจจับการเคลื่อนไหว ควบคุมเซอร์โวมอเตอร์เพื่อจำลองอารมณ์ต่างๆ และเป็นเพื่อนคู่คิดบนโต๊ะทำงาน</p>
    `,
    imagePlaceholder: 'images/projects/companion-robot.png',
    placeholderNotice: 'วางภาพหุ่นยนต์ที่ images/projects/companion-robot.png'
  },
  'kidbright-line': {
    title: 'KidBright & LINE Beacon IoT Ecosystem',
    category: 'IoT, Hardware & Robotics',
    badgeColor: 'text-green-400 bg-green-500/10 border-green-500/20',
    tags: ['KidBright Board', 'ESP32', 'LINE Beacon', 'LINE Messaging API', 'EEPROM', 'Sensors'],
    description: `
      <p class="mb-3">ชุดโครงงาน IoT บอร์ด KidBright เชื่อมต่อ LINE Beacon ส่งการแจ้งเตือนเข้าสมาร์ทโฟนอัตโนมัติเมื่ออยู่ในรัศมี พร้อมระบบบันทึกค่าลง EEPROM และควบคุมเซอร์โว</p>
    `,
    imagePlaceholder: 'images/projects/kidbright.png',
    placeholderNotice: 'วางภาพบอร์ด KidBright ที่ images/projects/kidbright.png'
  },
  'mxq-linux': {
    title: 'MXQ Pro Android TV Box Linux Porting (Armbian)',
    category: 'Systems, Linux & Infrastructure',
    badgeColor: 'text-red-400 bg-red-500/10 border-red-400/20',
    tags: ['Rockchip RK322x/RK3128', 'Linux Kernel', 'Armbian Minimal', 'Multitool', 'U-Boot', 'Home Server'],
    description: `
      <p class="mb-3">การปรับเปลี่ยนกล่อง Android TV Box ตระกูล Rockchip ให้กลายเป็น Linux Server พลังงานต่ำ (Low-power Home Server) สำหรับรันงานเบื้องหลัง 24/7</p>
      <h4 class="font-semibold text-white mt-4 mb-2">ขั้นตอนเชิงเทคนิค:</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
        <li><strong>NAND/eMMC Backup:</strong> ใช้ Multitool และ RK322x Miniloader ดัมพ์อิมเมจเดิมเก็บไว้</li>
        <li><strong>Armbian Flashing:</strong> ปรับแต่ง Device Tree (DTS) และคอมไพล์บูตโหลดเดอร์เพื่อรัน Linux บน Flash eMMC</li>
        <li><strong>Workloads:</strong> รองรับการรัน Docker, Lighttpd, Node.js, Pi-hole หรือบอทอัตโนมัติต่างๆ</li>
      </ul>
    `,
    imagePlaceholder: 'images/projects/mxq-linux.png',
    placeholderNotice: 'วางภาพหน้าจอเทอร์มินัลหรือกล่อง MXQ Pro ที่ images/projects/mxq-linux.png'
  },
  'proxmox-homelab': {
    title: 'Proxmox VE Virtualization HomeLab Server',
    category: 'Systems, Linux & Infrastructure',
    badgeColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    tags: ['Proxmox VE', 'KVM', 'LXC Containers', 'Bridge Networking', 'ZFS', 'Self-Hosting'],
    description: `
      <p class="mb-3">เซิร์ฟเวอร์จำลองระบบเสมือน (HomeLab Infrastructure) สำหรับรัน VM และ LXC Containers เพื่อทดสอบบอทเทรด MT5, เซิร์ฟเวอร์ฐานข้อมูล และบริการ Web Service ส่วนตัว</p>
    `,
    imagePlaceholder: 'images/projects/proxmox.png',
    placeholderNotice: 'วางภาพแดชบอร์ด Proxmox ที่ images/projects/proxmox.png'
  },
  'unity-ar': {
    title: 'Unity AR Interactive Mobile Experience (AR SL)',
    category: 'AR, 3D & Mobile Development',
    badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    tags: ['Unity 3D', 'AR Foundation', 'C#', 'Surface Tracking', 'Mobile Apps'],
    description: `
      <p class="mb-3">แอปพลิเคชัน Augmented Reality บนสมาร์ทโฟน ตรวจจับระนาบพื้นผิว (Plane Detection) และวางโมเดล 3 มิติเชิงโต้ตอบในโลกจริงได้อย่างสมจริง</p>
    `,
    imagePlaceholder: 'images/projects/unity-ar.png',
    placeholderNotice: 'วางภาพตัวอย่างแอพ AR ที่ images/projects/unity-ar.png'
  },
  'branding-design': {
    title: 'Creative Branding: CHANGTHONG Cafe & Songkhla Focus',
    category: 'Creative Design & Branding',
    badgeColor: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
    tags: ['Adobe Photoshop', 'Brand Identity', 'PSB / PSD Masterworks', 'Social Media Graphics'],
    description: `
      <p class="mb-3">ผลงานการออกแบบอัตลักษณ์แบรนด์ โลโก้ โปสเตอร์ดิจิทัลสำหรับสื่อโซเชียล และป้ายโฆษณา สำหรับแบรนด์ CHANGTHONG Cafe และสื่อมีเดีย Songkhla Focus</p>
    `,
    imagePlaceholder: 'images/portfolio-banner.png',
    placeholderNotice: 'ใช้ภาพ portfolio-banner.png หรือผลงานออกแบบที่ images/portfolio-banner.png'
  }
};

// Filter logic
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
      updateVisibleCount();
    });
  });
}

// Search functionality
function initSearch() {
  const searchInput = document.getElementById('project-search');
  if (!searchInput) return;

  const projectCards = document.querySelectorAll('.project-card');

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    projectCards.forEach(card => {
      const title = card.querySelector('.project-title')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('.project-desc')?.textContent.toLowerCase() || '';
      const tags = Array.from(card.querySelectorAll('.badge-tech')).map(t => t.textContent.toLowerCase()).join(' ');

      if (title.includes(query) || desc.includes(query) || tags.includes(query)) {
        card.style.display = 'flex';
        card.style.opacity = '1';
      } else {
        card.style.display = 'none';
        card.style.opacity = '0';
      }
    });
    updateVisibleCount();
  });
}

function updateVisibleCount() {
  const visibleCards = Array.from(document.querySelectorAll('.project-card')).filter(c => c.style.display !== 'none');
  const countBadge = document.getElementById('project-count-badge');
  if (countBadge) {
    countBadge.textContent = `${visibleCards.length} โปรเจกต์`;
  }
}

// Modal deep dive
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');

  if (!modal) return;

  document.querySelectorAll('.btn-view-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      const data = projectDetails[projectId];

      if (!data) return;

      modalContent.innerHTML = `
        <div class="flex items-start justify-between gap-4 mb-4">
          <div>
            <span class="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full border ${data.badgeColor} mb-2">
              ${data.category}
            </span>
            <h3 class="text-xl md:text-2xl font-bold text-white tracking-tight">${data.title}</h3>
          </div>
        </div>

        <div class="mb-5 rounded-lg border border-slate-700/60 bg-slate-900/80 p-3 text-xs text-slate-400 flex items-center gap-2">
          <svg class="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span><strong>รูปภาพโปรเจกต์:</strong> ${data.placeholderNotice}</span>
        </div>

        <div class="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed mb-6">
          ${data.description}
        </div>

        <div class="pt-4 border-t border-slate-800">
          <div class="text-xs text-slate-400 font-mono mb-2 uppercase tracking-wider">Tech Stack & Frameworks:</div>
          <div class="flex flex-wrap gap-2">
            ${data.tags.map(t => `<span class="badge-tech bg-slate-800/90 text-cyan-300 border-slate-700"># ${t}</span>`).join('')}
          </div>
        </div>
      `;

      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  };

  if (modalClose) modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// Lightbox preview for images
function initLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  if (!lightbox) return;

  document.querySelectorAll('.preview-img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      const src = img.getAttribute('src');
      const alt = img.getAttribute('alt') || 'Project Preview';
      lightboxImg.setAttribute('src', src);
      lightboxCaption.textContent = alt;
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    document.body.style.overflow = 'auto';
  };

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

// Smooth scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Copy helper function for buttons
window.copyToClipboard = function(text, elementId) {
  navigator.clipboard.writeText(text).then(() => {
    const el = document.getElementById(elementId);
    if (el) {
      const original = el.innerText;
      el.innerText = '✓ Copied!';
      setTimeout(() => {
        el.innerText = original;
      }, 2000);
    }
  });
};
