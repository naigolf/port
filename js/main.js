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
    language: 'MQL5, Python 3.10',
    techniques: 'Smart Money Concepts (SMC), Fair Value Gap (FVG), Order Block (OB), Daily EMA 200 Trend Filter, Gemini LLM Webhook, ForexFactory Scraping, Telegram Bot API, Risk/Reward 1:1, Max Daily Loss Circuit Breaker',
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
    `
  },
  'tiktok-bot': {
    title: 'TikTok Live Chat Pro++ & AI Stream Assistant',
    category: 'Chrome Extensions & Automation',
    badgeColor: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
    language: 'JavaScript (ES6+), HTML5, CSS3',
    techniques: 'Chrome Manifest V3, DOM MutationObserver (Real-time Message Intercept), Background Service Worker, Telegram Bot API, Rule-based Auto Response',
    tags: ['Chrome Extension Manifest V3', 'JavaScript', 'Telegram API', 'DOM MutationObserver', 'Web Scraping'],
    description: `
      <p class="mb-3">ส่วนขยาย Chrome สำหรับผู้ดูแลการสตรีมสดบน TikTok Live ช่วยตรวจจับข้อความแชทของผู้เข้าชมแบบ Real-time และเชื่อมต่อระบบตอบโต้อัตโนมัติ</p>
      <h4 class="font-semibold text-white mt-4 mb-2">ฟังก์ชันการทำงานหลัก:</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
        <li><strong>Live Chat Interceptor:</strong> ดักจับ Mutation ของข้อความแชทและคอมเมนต์บนหน้าต่าง TikTok Live แบบไม่มีหน่วง</li>
        <li><strong>Telegram Notification Bridge:</strong> ส่งคำถามสำคัญจากลูกค้าหรือคำสั่งซื้อพิเศษเข้ากลุ่ม Telegram ทีมงานทันที</li>
        <li><strong>Smart Auto-Reply:</strong> ตั้งค่าคีย์เวิร์ดตอบคำถามที่พบบ่อย (FAQ) อัตโนมัติ เพื่อกระตุ้นยอดขายและไม่พลาดลูกค้ารายสำคัญ</li>
      </ul>
    `
  },
  'autoflow-pro': {
    title: 'AutoFlow Pro Recorder - SidePanel Automation',
    category: 'Chrome Extensions & Automation',
    badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    language: 'JavaScript (ES6+), HTML5, CSS3',
    techniques: 'Chrome SidePanel API, Scripting & Event Listener Injection, Macro Replay Engine, Dynamic CSS Selector Matching, Storage Sync API',
    tags: ['Manifest V3', 'Chrome SidePanel API', 'Action Recorder', 'Chrome Scripting', 'Storage API'],
    description: `
      <p class="mb-3">เครื่องมือบันทึกและจำลองการคลิก กรอกฟอร์ม และวนลูปงานประจำบนเว็บเบราว์เซอร์อัตโนมัติ ผ่านหน้าต่าง Side Panel ที่ติดตั้งเป็นส่วนขยาย Chrome</p>
      <h4 class="font-semibold text-white mt-4 mb-2">ฟังก์ชันการทำงานหลัก:</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
        <li><strong>Side Panel Native UI:</strong> ใช้งานเครื่องมือคู่ขนานกับหน้าเว็บโดยไม่ต้องสลับแท็บ</li>
        <li><strong>Event Recording & Replay:</strong> บันทึกคลิก, พิมพ์ข้อความ, สกอลล์หน้าจอ และรันซ้ำด้วยความเร็วที่ปรับได้</li>
        <li><strong>Background Server Hook:</strong> ส่งข้อมูลการทำงานไปยัง Server ภายนอกเพื่อบันทึกลงฐานข้อมูล</li>
      </ul>
    `
  },
  'shopee-affiliate': {
    title: 'Shopee Affiliate Flow Automation (Naigolf)',
    category: 'Chrome Extensions & E-commerce',
    badgeColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    language: 'JavaScript (ES6+), HTML5, CSS3',
    techniques: 'Chrome SidePanel API, URL Deep-Linking & Parameterization, DOM Parsing, Multi-store Catalog Syncing',
    tags: ['Chrome Extension', 'Affiliate Marketing', 'Web Automation', 'URL DeepLinker'],
    description: `
      <p class="mb-3">เครื่องมือสร้างและจัดการลิงก์ Affiliate บน Shopee ช่วยประหยัดเวลาของ Content Creator ในการแปะพิกัดและกระจายสินค้าไปยังช่องทางต่างๆ</p>
      <h4 class="font-semibold text-white mt-4 mb-2">ฟังก์ชันการทำงานหลัก:</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
        <li><strong>One-Click Convert:</strong> แปลงลิงก์หน้าร้านให้เป็น Affiliate Deep Link พร้อมแท็กแคมเปญ</li>
        <li><strong>Multi-Store Flow:</strong> จัดการแคตตาล็อกสินค้าแยกตามธีมร้าน (Orange / Yellow Stores)</li>
        <li><strong>Data Extract:</strong> ดึงรูปภาพสินค้า แคปชั่น และราคาส่วนลดเพื่อนำไปสร้างสื่อโพสต์ได้ทันที</li>
      </ul>
    `
  },
  'tiktok-popup': {
    title: 'TikTok Popup Pro - Enhanced Desktop Viewer',
    category: 'Chrome Extensions & UX',
    badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    language: 'JavaScript (ES6+), CSS3',
    techniques: 'Chrome Content Script Injection, CSS Backdrop Filter & Viewport Centering, Keyboard Shortcut Event Binding',
    tags: ['Chrome Extension V3', 'CSS3 Modal', 'Content Scripts', 'UX Design'],
    description: `
      <p class="mb-3">ส่วนขยายสำหรับเพิ่มอรรถรสในการชมวิดีโอบน TikTok Desktop ด้วยหน้าต่าง Pop-up Modal จัดกึ่งกลางจออย่างสวยงาม สะอาดตา ไร้สิ่งรบกวน</p>
      <h4 class="font-semibold text-white mt-4 mb-2">ฟังก์ชันการทำงานหลัก:</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
        <li><strong>Distraction-Free Mode:</strong> ซ่อนคอมเมนต์และแบนเนอร์ด้านข้าง ให้ความสำคัญกับตัววิดีโอแบบ 100%</li>
        <li><strong>Keyboard Shortcuts:</strong> ควบคุมการเล่น เล่นซ้ำ หรือเปลี่ยนคลิปได้สะดวกผ่านคีย์บอร์ด</li>
      </ul>
    `
  },
  'n8n-facebook': {
    title: 'n8n Workflow Automation & Facebook Scraper',
    category: 'Automation & Data Pipelines',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    language: 'Python 3.11, JavaScript (n8n Node Code)',
    techniques: 'Headless/Headful Playwright Automation, Anti-Bot Mobile User-Agent Bypass, Webhook Data Pipeline, Hugging Face NLP Model',
    tags: ['n8n', 'Python', 'Playwright', 'Webhooks', 'Hugging Face AI', 'JSON Pipelines'],
    description: `
      <p class="mb-3">ไปป์ไลน์อัตโนมัติสำหรับการดึงโพสต์จาก Facebook Page ด้วย Python Playwright (รองรับทั้ง Headless และ Headful) เพื่อส่งต่อข้อมูลไปยัง n8n Workflow และประมวลผลด้วย AI</p>
      <h4 class="font-semibold text-white mt-4 mb-2">ฟังก์ชันการทำงานหลัก:</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
        <li><strong>Resilient Scraping:</strong> สลับโหมด Headful / Headless และ Mobile View เพื่อป้องกันการติดตรวจจับบอท</li>
        <li><strong>n8n Webhook Sync:</strong> ซิงค์ข้อมูลโพสต์ รูปภาพ และเนื้อหาเข้าสู่ระบบ n8n อัตโนมัติ</li>
        <li><strong>AI Post Analysis:</strong> เชื่อมต่อโมเดล Hugging Face เพื่อสรุปเนื้อหาและจัดหมวดหมู่ข้อมูล</li>
      </ul>
    `
  },
  'finder-xy': {
    title: 'Finder X Y - Screen Coordinate Automation Utility',
    category: 'Automation & RPA',
    badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    language: 'JavaScript, Node.js',
    techniques: 'OS Screen Coordinate Mapping, High-DPI Display Scaling Compensation, Desktop Macro Automation Tooling',
    tags: ['Node.js', 'Automation', 'RPA Tools', 'Screen Mapping'],
    description: `
      <p class="mb-3">ยูทิลิตีตรวจหาพิกัด X/Y บนหน้าจอเดสก์ท็อปและตำแหน่ง DOM Element เพื่อใช้ในการเขียน Macro Bot, RPA และจำลองการควบคุมเมาส์อย่างแม่นยำ</p>
    `
  },
  'esp32-xiaozhi': {
    title: 'ESP32-S3 AI Voice Assistant (Xiaozhi Integration)',
    category: 'IoT, Hardware & Robotics',
    badgeColor: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    language: 'C, C++, FreeRTOS',
    techniques: 'ESP-IDF Framework, I2S Digital Audio DMA, Voice Activity Detection (VAD), Streaming STT/TTS, WebSocket Audio Duplex',
    tags: ['ESP32-S3', 'ESP-IDF', 'C/C++', 'FreeRTOS', 'I2S Audio', 'Cloud LLM / STT / TTS'],
    description: `
      <p class="mb-3">การสร้างหุ่นยนต์ผู้ช่วยอัจฉริยะแบบพกพาโดยใช้ชิป ESP32-S3 สามารถฟังเสียง พูดตอบโต้ และประมวลผลคำสั่งผ่าน Large Language Model (LLM) ด้วยโครงการ Xiaozhi</p>
      <h4 class="font-semibold text-white mt-4 mb-2">ฟังก์ชันการทำงานหลัก:</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
        <li><strong>I2S Audio Pipeline:</strong> ควบคุมไมโครโฟนและลำโพงดิจิทัล รองรับการตัดเสียงรบกวน (Noise Suppression)</li>
        <li><strong>Voice Activation & Streaming:</strong> รับคำสั่งเสียงแบบสตรีมมิ่ง ส่งไปยัง Cloud STT/TTS ได้อย่างรวดเร็ว</li>
        <li><strong>Low-Power Architecture:</strong> จัดการพลังงานด้วยโหมด Sleep บน ESP32-S3 ให้พกพาไปใช้งานได้ทุกที่</li>
      </ul>
    `
  },
  'esp32-cyd': {
    title: 'ESP32 Cheap Yellow Display (CYD) Touch Dashboard',
    category: 'IoT, Hardware & Robotics',
    badgeColor: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
    language: 'C++, Arduino C',
    techniques: 'LVGL GUI Library, TFT_eSPI Driver, XPT2046 Resistive Touch Controller, MQTT Pub/Sub Telemetry, Asynchronous WiFi',
    tags: ['ESP32-2432S028R', 'LVGL', 'TFT_eSPI', 'C++', 'Touch UI', 'MQTT / REST API'],
    description: `
      <p class="mb-3">แดชบอร์ดหน้าจอสีระบบสัมผัส (Touchscreen Dashboard) บนบอร์ด ESP32 Cheap Yellow Display (CYD) สำหรับแสดงสถานะสภาพแวดล้อม เซิร์ฟเวอร์ และควบคุมอุปกรณ์ IoT ในบ้าน</p>
      <h4 class="font-semibold text-white mt-4 mb-2">ฟังก์ชันการทำงานหลัก:</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
        <li><strong>Custom LVGL GUI:</strong> ออกแบบหน้าตาสวยงาม กราฟิกเรียบหรู พร้อมสวิตช์สัมผัสและเกจวัดค่า</li>
        <li><strong>WiFi Telemetry:</strong> รับ-ส่งข้อมูลผ่าน MQTT โบรกเกอร์และ REST API สดใหม่ตลอดเวลา</li>
      </ul>
    `
  },
  'esp32-cam': {
    title: 'ESP32-S3 CAM Realtime Vision Node',
    category: 'IoT, Hardware & Robotics',
    badgeColor: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    language: 'C, C++',
    techniques: 'OV2640 Sensor DMA Framebuffer, MJPEG Streaming over HTTP/WebSocket, Motion Difference Algorithm',
    tags: ['ESP32-S3 CAM', 'OV2640 / OV5640', 'WebSocket', 'Video Streaming', 'Computer Vision'],
    description: `
      <p class="mb-3">โหนดกล้องวงจรปิดไร้สายขนาดเล็กสำหรับสตรีมมิ่งภาพวิดีโอความละเอียดสูงผ่านเครือข่าย Wi-Fi พร้อมรองรับการตรวจจับความเคลื่อนไหว</p>
    `
  },
  'companion-robot': {
    title: 'DIY Desktop Companion Robot',
    category: 'IoT, Hardware & Robotics',
    badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    language: 'C++, Arduino',
    techniques: 'Multi-Axis Servo Kinematics, Ultrasonic Sensor Fusion, Finite State Machine (FSM) Behavioral Emulation, 3D CAD Parts',
    tags: ['Arduino', 'Servo Motors', 'Sensor Fusion', '3D Printing', 'Robotics'],
    description: `
      <p class="mb-3">หุ่นยนต์ตั้งโต๊ะเชิงโต้ตอบ ขยับท่าทางตามเสียงและการตรวจจับการเคลื่อนไหว ควบคุมเซอร์โวมอเตอร์เพื่อจำลองอารมณ์ต่างๆ และเป็นเพื่อนคู่คิดบนโต๊ะทำงาน</p>
    `
  },
  'kidbright-line': {
    title: 'KidBright & LINE Beacon Smart IoT Ecosystem',
    category: 'IoT, Hardware & Robotics',
    badgeColor: 'text-green-400 bg-green-500/10 border-green-500/20',
    language: 'C++, MicroPython',
    techniques: 'Bluetooth Low Energy (BLE) Advertising, LINE Simple Beacon Protocol, I2C Sensor Interfacing, Hardware EEPROM',
    tags: ['KidBright Board', 'ESP32', 'LINE Beacon', 'LINE Messaging API', 'EEPROM', 'Sensors'],
    description: `
      <p class="mb-3">ชุดโครงงาน IoT บอร์ด KidBright เชื่อมต่อ LINE Beacon ส่งการแจ้งเตือนเข้าสมาร์ทโฟนอัตโนมัติเมื่ออยู่ในรัศมี พร้อมระบบบันทึกค่าลง EEPROM และควบคุมเซอร์โว</p>
    `
  },
  'mxq-linux': {
    title: 'MXQ Pro Android TV Box Linux Porting (Armbian)',
    category: 'Systems, Linux & Infrastructure',
    badgeColor: 'text-red-400 bg-red-500/10 border-red-400/20',
    language: 'Bash / Shell, Linux CLI',
    techniques: 'Rockchip Maskrom Mode, Miniloader & Multitool NAND Dump, U-Boot Compilation, Device Tree (DTS) Patching, Headless Server',
    tags: ['Rockchip RK322x/RK3128', 'Linux Kernel', 'Armbian Minimal', 'Multitool', 'U-Boot', 'Home Server'],
    description: `
      <p class="mb-3">การปรับเปลี่ยนกล่อง Android TV Box ตระกูล Rockchip ให้กลายเป็น Linux Server พลังงานต่ำ (Low-power Home Server) สำหรับรันงานเบื้องหลัง 24/7</p>
      <h4 class="font-semibold text-white mt-4 mb-2">ขั้นตอนเชิงเทคนิค:</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
        <li><strong>NAND/eMMC Backup:</strong> ใช้ Multitool และ RK322x Miniloader ดัมพ์อิมเมจเดิมเก็บไว้</li>
        <li><strong>Armbian Flashing:</strong> ปรับแต่ง Device Tree (DTS) และคอมไพล์บูตโหลดเดอร์เพื่อรัน Linux บน Flash eMMC</li>
        <li><strong>Workloads:</strong> รองรับการรัน Docker, Lighttpd, Node.js, Pi-hole หรือบอทอัตโนมัติต่างๆ</li>
      </ul>
    `
  },
  'proxmox-homelab': {
    title: 'Proxmox VE Virtualization HomeLab Server',
    category: 'Systems, Linux & Infrastructure',
    badgeColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    language: 'Bash, YAML, Linux SysAdmin',
    techniques: 'KVM Full Virtualization, LXC Unprivileged Containers, ZFS Storage Pool, Bridged Networking, Nginx Reverse Proxy',
    tags: ['Proxmox VE', 'KVM', 'LXC Containers', 'Bridge Networking', 'ZFS', 'Self-Hosting'],
    description: `
      <p class="mb-3">เซิร์ฟเวอร์จำลองระบบเสมือน (HomeLab Infrastructure) สำหรับรัน VM และ LXC Containers เพื่อทดสอบบอทเทรด MT5, เซิร์ฟเวอร์ฐานข้อมูล และบริการ Web Service ส่วนตัว</p>
    `
  },
  'unity-ar': {
    title: 'Unity AR Interactive Mobile Experience (AR SL)',
    category: 'AR, 3D & Mobile Development',
    badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    language: 'C# (.NET)',
    techniques: 'Unity 3D Engine, AR Foundation (ARKit & ARCore), SLAM Plane Tracking, Screen-to-World Raycasting, 3D Shaders',
    tags: ['Unity 3D', 'AR Foundation', 'C#', 'Surface Tracking', 'Mobile Apps'],
    description: `
      <p class="mb-3">แอปพลิเคชัน Augmented Reality บนสมาร์ทโฟน ตรวจจับระนาบพื้นผิว (Plane Detection) และวางโมเดล 3 มิติเชิงโต้ตอบในโลกจริงได้อย่างสมจริง</p>
    `
  },
  'branding-design': {
    title: 'Creative Branding: CHANGTHONG Cafe & Songkhla Focus',
    category: 'Creative Design & Branding',
    badgeColor: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
    language: 'Adobe Photoshop (PSB Master), Illustrator',
    techniques: 'Brand Identity Guidelines, Non-destructive Layer Masking, CMYK/RGB Color Separation, Typography Pairing',
    tags: ['Adobe Photoshop', 'Brand Identity', 'PSB / PSD Masterworks', 'Social Media Graphics'],
    description: `
      <p class="mb-3">ผลงานการออกแบบอัตลักษณ์แบรนด์ โลโก้ โปสเตอร์ดิจิทัลสำหรับสื่อโซเชียล และป้ายโฆษณา สำหรับแบรนด์ CHANGTHONG Cafe และสื่อมีเดีย Songkhla Focus</p>
    `
  },
  'esp32-thermal-printer': {
    title: 'ESP32 Wireless Thermal Receipt Printer',
    category: 'IoT, Hardware & POS',
    badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    language: 'C++, Arduino',
    techniques: 'ESC/POS Protocol, Bluetooth SPP/BLE Serial, Async Web Server API, Bitmap Thermal Printing, Dynamic QR Code Generator',
    tags: ['ESP32', 'ESC/POS', 'Thermal Print', 'Bluetooth SPP', 'REST API'],
    description: `
      <p class="mb-3">ระบบเครื่องพิมพ์ใบเสร็จความร้อนไร้สายผ่านชิป ESP32 รองรับการสั่งพิมพ์บิล คำสั่งซื้อ ใบปะหน้าพัสดุ และ QR Code ชำระเงินผ่านสัญญาณ Bluetooth และ WiFi REST API จากระบบหน้าร้าน</p>
      <h4 class="font-semibold text-white mt-4 mb-2">ฟังก์ชันการทำงานหลัก:</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
        <li><strong>ESC/POS Standard:</strong> สื่อสารคำสั่งควบคุมเครื่องพิมพ์ความร้อน ตัดกระดาษ และปรับขนาดฟอนต์ได้แม่นยำ</li>
        <li><strong>Wireless Dual Mode:</strong> สลับโหมดรับคำสั่งพิมพ์ได้ทั้ง Bluetooth Serial (SPP) และยิง Webhook ผ่าน WiFi HTTP REST API</li>
        <li><strong>Dynamic Bitmap / QR Generator:</strong> แปลงโค้ดข้อความและพิกัดพร้อมเพย์ (PromptPay) ให้กลายเป็นภาพบิตแมปความร้อนพิมพ์ลงใบเสร็จได้ทันที</li>
      </ul>
    `
  },
  'harry-stock': {
    title: 'Harry Stock - ระบบบริหารจัดการสต็อกสินค้าและคลังสินค้า',
    category: 'Full-Stack & E-Commerce',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    language: 'JavaScript, PHP / Node.js, SQL',
    techniques: 'Relational Database Modeling, Real-time Stock Deduction, Barcode Scanner Integration, Sales Profit Analytics, Role-based Access Control (RBAC)',
    tags: ['Inventory', 'Stock Management', 'SQL', 'Barcode Scan', 'Dashboard'],
    description: `
      <p class="mb-3">ระบบตัดสต็อกและจัดการคลังสินค้าอัจฉริยะสำหรับร้านค้า ออกแบบระบบบันทึกสินค้าเข้า-ออก การสแกนบาร์โค้ด คำนวณต้นทุน-กำไรแบบอัตโนมัติ และแจ้งเตือนเมื่อสินค้าใกล้หมดสต็อก</p>
      <h4 class="font-semibold text-white mt-4 mb-2">ฟังก์ชันการทำงานหลัก:</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
        <li><strong>Real-time Stock Deduction:</strong> ตัดยอดสต็อกสินค้าทันทีเมื่อเกิดคำสั่งซื้อ ป้องกันปัญหาสต็อกจมหรือขายเกิน</li>
        <li><strong>Barcode / SKU Scanning:</strong> รองรับเครื่องสแกนบาร์โค้ดเพื่อค้นหาและตัดสินค้าได้อย่างรวดเร็วที่หน้าร้าน</li>
        <li><strong>Profit & Loss Reporting:</strong> ระบบวิเคราะห์ยอดขาย ต้นทุน และกำไรสุทธิแบบเรียลไทม์พร้อมกราฟแสดงผล</li>
      </ul>
    `
  },
  'kaggle-shopee-thaimart': {
    title: 'Kaggle Stream Shopee & Thaimart Data Analytics Pipeline',
    category: 'Big Data & Cloud Analytics',
    badgeColor: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    language: 'Python 3.10, Pandas, SQL',
    techniques: 'E-Commerce Stream Scraping, Kaggle GPU/CPU Cloud Notebooks, Data Pipeline ETL, Trend & Price Volatility Analytics, Parquet Storage',
    tags: ['Python', 'Kaggle', 'Shopee API', 'Thaimart', 'Data Pipeline'],
    description: `
      <p class="mb-3">ไปป์ไลน์ดึงข้อมูลสตรีมมิ่งและวิเคราะห์ข้อมูลราคาสินค้า แคตตาล็อก และโปรโมชั่นจาก Shopee และ Thaimart ประมวลผลบนคลาวด์ Kaggle เพื่อทำนายทิศทางราคาและยอดขาย</p>
      <h4 class="font-semibold text-white mt-4 mb-2">ฟังก์ชันการทำงานหลัก:</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
        <li><strong>Cloud Automated Stream:</strong> รันไปป์ไลน์ดูดข้อมูลอัตโนมัติบน Kaggle Environment โดยไม่ต้องเปลืองทรัพยากรเครื่องตัวเอง</li>
        <li><strong>Data Wrangling & ETL:</strong> ทำความสะอาดข้อมูลสินค้าที่ซับซ้อน จัดเก็บในรูปแบบ Parquet เพื่อการสืบค้นที่รวดเร็ว</li>
        <li><strong>Price Intelligence:</strong> วิเคราะห์การเปลี่ยนแปลงราคาและโปรโมชั่นของคู่แข่งเพื่อตั้งราคาที่แข่งขันได้</li>
      </ul>
    `
  },
  'tiktok-video-autopost': {
    title: 'Chrome Extension: Auto Video Creator & TikTok Poster',
    category: 'Chrome Extensions & Automation',
    badgeColor: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
    language: 'JavaScript (ES6+), HTML5 Canvas',
    techniques: 'MediaRecorder API / Canvas Rendering, DOM Automation Injection, TikTok Web Auto-Upload Dispatcher, Automated Caption & Hashtag Injection',
    tags: ['Chrome MV3', 'TikTok Auto-Post', 'Video Engine', 'Canvas Capture'],
    description: `
      <p class="mb-3">ส่วนขยาย Chrome ขั้นสูงสำหรับอัดบันทึก Flow การใช้งานหรือสร้างคลิปวิดีโอจากภาพและข้อมูลสินค้าอัตโนมัติ พร้อมระบบบอทส่งไฟล์ขึ้นอัพโหลดและโพสต์ลง TikTok โดยตรงแบบ One-Click</p>
      <h4 class="font-semibold text-white mt-4 mb-2">ฟังก์ชันการทำงานหลัก:</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
        <li><strong>Video Flow Engine:</strong> รวมภาพและเอฟเฟกต์การเคลื่อนไหวผ่าน HTML5 Canvas และบันทึกเป็นไฟล์ WebM/MP4 ด้วย MediaRecorder API</li>
        <li><strong>TikTok Auto-Uploader:</strong> จำลองการส่งไฟล์ขึ้นหน้าเว็บ Creator ของ TikTok กรอกคำบรรยาย ติดแฮชแท็ก และตั้งเวลาโพสต์อัตโนมัติ</li>
        <li><strong>Batch Mode:</strong> รองรับการสร้างและโพสต์คลิปหลายคลิปตามคิวงานที่กำหนดไว้ล่วงหน้า</li>
      </ul>
    `
  },
  'proxmox-agentdvr': {
    title: 'Proxmox CCTV NVR Server with AgentDVR (iSpy)',
    category: 'Security & Linux Infrastructure',
    badgeColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    language: 'Bash / Shell, Linux SysAdmin',
    techniques: 'Proxmox LXC Container, Intel QuickSync GPU Hardware Passthrough, RTSP/ONVIF Protocol Ingestion, AI Object Recognition Trigger, ZFS Storage Pooling',
    tags: ['Proxmox VE', 'AgentDVR', 'CCTV NVR', 'RTSP / ONVIF', 'GPU Passthrough'],
    description: `
      <p class="mb-3">ระบบเครื่องบันทึกกล้องวงจรปิดอัจฉริยะ (Network Video Recorder) ติดตั้ง AgentDVR บน Proxmox VE (LXC Container) รองรับกล้องหลายตัวผ่าน RTSP/ONVIF พร้อมระบบ AI Motion & Human Detection</p>
      <h4 class="font-semibold text-white mt-4 mb-2">ฟังก์ชันการทำงานหลัก:</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 text-sm">
        <li><strong>LXC Containerization:</strong> รัน AgentDVR บน Linux Container ประหยัดแรมและ CPU มากกว่าการรันบน Windows VM แบบเดิมๆ</li>
        <li><strong>Hardware GPU Transcoding:</strong> ทำ GPU Passthrough ให้ AgentDVR ใช้ Intel QuickSync หรือ GPU ช่วยถอดรหัสวิดีโอ 24/7 เครื่องไม่ร้อน</li>
        <li><strong>AI Surveillance:</strong> แยกแยะบุคคล สัตว์เลี้ยง และยานพาหนะ พร้อมส่งการแจ้งเตือนพร้อมภาพถ่ายเข้า Telegram/Mobile Notification ทันที</li>
      </ul>
    `
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
        <div class="flex items-start justify-between gap-4 mb-3">
          <div>
            <span class="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full border ${data.badgeColor} mb-2">
              ${data.category}
            </span>
            <h3 class="text-xl md:text-2xl font-bold text-white tracking-tight">${data.title}</h3>
          </div>
        </div>

        <!-- Language & Techniques Box in Modal -->
        <div class="mb-4 rounded-xl border border-slate-700/80 bg-slate-950/90 p-3.5 space-y-2 text-xs font-mono">
          <div class="flex items-center gap-2">
            <span class="text-cyan-400 font-semibold shrink-0">💻 ภาษา:</span>
            <span class="text-slate-200">${data.language}</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="text-emerald-400 font-semibold shrink-0">⚙️ เทคนิค:</span>
            <span class="text-slate-300 leading-relaxed">${data.techniques}</span>
          </div>
        </div>

        <div class="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed mb-6">
          ${data.description}
        </div>

        <div class="pt-4 border-t border-slate-800">
          <div class="text-xs text-slate-400 font-mono mb-2 uppercase tracking-wider">Tech Stack Tags:</div>
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
