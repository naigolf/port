# Naigolf - Developer Portfolio & Showcase 🚀

Portfolio เว็บไซต์รวบรวมผลงานการพัฒนาซอฟต์แวร์, บอทเทรด Algorithmic Trading (MT5), ส่วนขยาย Chrome Extensions, ระบบ Automation & RPA (n8n), โครงงาน IoT / Hardware (ESP32-S3, Xiaozhi AI Voice, KidBright) และ Linux Server Modding

ออกแบบในสไตล์ **Modern Cyber / Dev Dark-Theme** ดูเป็นมืออาชีพ โหลดเร็ว ไร้ Dependency และพร้อมขึ้น **GitHub Pages** ได้ทันที 100%

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
d:\portfolio\naigolf/
├── index.html              # หน้าเว็บหลักของ Portfolio (HTML5 + Tailwind CSS + Lucide Icons)
├── css/
│   └── style.css           # สไตล์ตกแต่งเพิ่มเติม (Glassmorphism, Neon Glow, Fonts)
├── js/
│   └── main.js             # ระบบกรองหมวดหมู่, ค้นหาโปรเจกต์, Modal Deep-Dive, Lightbox
├── images/
│   ├── profile.jpg         # รูปโปรไฟล์ของคุณ (คัดลอกจากรูปของคุณให้เรียบร้อยแล้ว)
│   ├── portfolio-banner.png# รูปแบนเนอร์/งานออกแบบ
│   └── projects/           # 📷 โฟลเดอร์สำหรับวางรูปภาพตัวอย่างโปรเจกต์ต่างๆ
└── README.md               # คู่มือการใช้งานและการขึ้น GitHub Pages
```

---

## 📷 วิธีแทรกรูปภาพผลงานของคุณ (Image Guide)

ในแต่ละการ์ดโปรเจกต์ ได้เว้นช่องใส่รูปภาพ (Aspect Ratio 16:9 สวยงาม) พร้อมระบบสำรอง (Fallback) หากยังไม่ได้ใส่รูป จะแสดงไอคอนและแจ้งชื่อไฟล์ที่ต้องวางไว้ให้อัตโนมัติ

เพียงแคปรูปภาพหน้าจอของโปรเจกต์ แล้วนำมาวางในโฟลเดอร์ `images/projects/` ตามชื่อดังนี้:

| โปรเจกต์ | วางรูปที่ Path นี้ | คำอธิบายสิ่งที่ควรแคป |
| :--- | :--- | :--- |
| **MT5 EA Gold Trader** | `images/projects/ea-mt5.png` | กราฟ MT5, ผลการทดสอบ Backtest หรือโครงสร้างกลยุทธ์ SMC |
| **TikTok Live Chat Pro++** | `images/projects/tiktok-live.png` | หน้าต่าง Extension บนเบราว์เซอร์ หรือขณะตรวจจับแชทสด |
| **AutoFlow Pro Recorder** | `images/projects/autoflow.png` | หน้าต่าง SidePanel ของ Chrome และขั้นตอนการอัด Macro |
| **n8n Facebook Scraper** | `images/projects/n8n-scraper.png` | *(มีรูปตัวอย่างแล้ว)* หรือแคปหน้าจอ Flow n8n ใหม่ |
| **ESP32-S3 AI Voice** | `images/projects/esp32-xiaozhi.png` | ภาพถ่ายบอร์ด ESP32-S3, ลำโพง/ไมค์ I2S หรือขณะทดสอบคุย |
| **ESP32 CYD Dashboard** | `images/projects/esp32-cyd.png` | ภาพถ่ายหน้าจอสัมผัส Cheap Yellow Display ที่แสดงผลกราฟิก |
| **MXQ Pro Linux Server** | `images/projects/mxq-linux.png` | ภาพหน้าจอ SSH Terminal รัน Armbian หรือตัวกล่อง TV Box |
| **Proxmox HomeLab** | `images/projects/proxmox.png` | หน้าจอแดชบอร์ด Proxmox VE แสดงรายการ VM & Containers |
| **Shopee Affiliate Flow** | `images/projects/shopee-affiliate.png`| หน้าต่างเครื่องมือช่วยแปลงลิงก์และจัดการร้านค้า |
| **DIY Companion Robot** | `images/projects/companion-robot.png` | ภาพถ่ายหุ่นยนต์ตั้งโต๊ะ หรือเซอร์โวมอเตอร์ |
| **ESP32-S3 CAM Vision** | `images/projects/esp32-cam.png` | ภาพถ่ายตัวบอร์ดกล้อง หรือหน้าต่างเว็บสตรีมมิ่งภาพ |
| **KidBright LINE Beacon** | `images/projects/kidbright.png` | ภาพบอร์ด KidBright หรือข้อความแจ้งเตือนทาง LINE |
| **Unity AR Mobile** | `images/projects/unity-ar.png` | ภาพสกรีนช็อตแอพ AR บนมือถือ หรือหน้าจอโปรแกรม Unity |
| **TikTok Popup Pro** | `images/projects/tiktok-popup.png` | ภาพหน้าจอขณะเปิดดูคลิปในแบบ Popup Modal |
| **Finder X Y** | `images/projects/finder-xy.png` | ภาพหน้าต่างโปรแกรมช่วยหาพิกัดหน้าจอ |
| **Creative Branding** | `images/portfolio-banner.png` | *(มีรูปตัวอย่างแล้ว)* ภาพผลงานกราฟิก CHANGTHONG Cafe |

> **หมายเหตุ:** หากต้องการเปลี่ยนชื่อไฟล์หรือใช้นามสกุลอื่น (เช่น `.jpg`) สามารถเปิดไฟล์ `index.html` แล้วค้นหาคำว่า `images/projects/...` เพื่อแก้ชื่อได้ทันที

---

## 🌐 ขั้นตอนการอัพขึ้น GitHub Pages (ภายใน 3 นาที)

### ขั้นตอนที่ 1: เตรียม Git Repository บนเครื่อง
เปิด **PowerShell** หรือ **Terminal** ในโฟลเดอร์นี้ (`d:\portfolio\naigolf`) แล้วรัน:

```bash
git init
git add .
git commit -m "feat: complete naigolf developer portfolio"
git branch -M main
```

### ขั้นตอนที่ 2: สร้าง Repository บน GitHub
1. เข้าไปที่ [GitHub](https://github.com) แล้วคลิกสร้าง **New repository**
2. ตั้งชื่อตามใจชอบ เช่น `portfolio` หรือ `naigolf-portfolio` (ตั้งเป็น **Public**)
3. คัดลอก URL ของ Repository มาเชื่อมต่อ แล้วรันคำสั่ง:

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git
git push -u origin main
```
*(เปลี่ยน `YOUR_GITHUB_USERNAME` เป็นชื่อบัญชี GitHub ของคุณ)*

### ขั้นตอนที่ 3: เปิดใช้งาน GitHub Pages
1. ในหน้า GitHub Repository ของคุณ ให้คลิกแท็บ **Settings** ด้านบน
2. เมนูด้านซ้าย เลือกหัวข้อ **Pages**
3. ตรงส่วน **Build and deployment** ให้เลือก:
   - **Source**: `Deploy from a branch`
   - **Branch**: เลือก `main` และโฟลเดอร์ `/ (root)`
4. คลิก **Save**
5. รอประมาณ 1-2 นาที คุณจะได้ URL เว็บไซต์ เช่น:
   `https://YOUR_GITHUB_USERNAME.github.io/portfolio/`

---

## 🛠️ จุดเด่นของเว็บไซต์นี้ (Developer Features)
- ⚡ **Zero-Build Required**: รันผ่าน Browser ได้ทันที ไม่ต้องมี Node.js หรือ build step
- 🔍 **Live Search & Filter**: ค้นหาโปรเจกต์ตามชื่อและ Tech Stack (เช่น ค้นหา `MQL5`, `ESP32`, `Python`) ได้แบบเรียลไทม์
- 📖 **Deep-Dive Modal**: มีปุ่ม "อ่านรายละเอียดเชิงลึก" เพื่อเปิดดูรายละเอียด สถาปัตยกรรม และจุดเด่นของแต่ละโปรเจกต์
- 🖼️ **Image Lightbox**: คลิกที่รูปภาพเพื่อขยายดูขนาดเต็มจอ
- 📱 **Fully Responsive**: รองรับทั้งมือถือ แท็บเล็ต และหน้าจอคอมพิวเตอร์ขนาดใหญ่
