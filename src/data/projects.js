/**
 * Projects Data
 * 
 * Cara menambahkan project baru:
 * 1. Tambahkan object baru ke array di bawah
 * 2. Isi semua field sesuai format
 * 3. Tambahkan placeholder image di src/assets/projects/
 * 4. Ganti value "PLACEHOLDER" dengan data asli
 * 5. Ganti null pada links dengan URL yang sesuai
 */

import webcat from '../assets/project/webcat.png'
import analisis from '../assets/project/analisis.png'
import furab from '../assets/project/furab.png'
import komponen from '../assets/project/komponen.jpeg'
import dash from '../assets/project/dash.png'

export const projects = [
  {
    id: 1,
    title: 'Web & Mobile Penanganan Kucing Liar',
    category: 'Web Development',
    image: webcat,
    tags: ['Web Development', 'MySQL', 'Tailwind CSS', 'Vue.js'],
    overview:
      'Adopt Center adalah platform web yang dirancang untuk membantu penanganan kucing liar dan terlantar. Platform ini menyediakan layanan adopsi untuk membantu calon adopter menemukan kucing yang sesuai, fitur pelaporan untuk kucing yang ditemukan atau hilang, serta donasi untuk mendukung kebutuhan operasional shelter.',
    role:
      'Berperan dalam proses perancangan UI/UX dan antarmuka aplikasi, pengembangan frontend, serta perancangan dan pengelolaan basis data MySQL.',
    description: `Fitur utama yang dikembangkan dalam project ini meliputi:

- **Pusat Adopsi** — menyediakan informasi kucing yang tersedia untuk diadopsi serta membantu calon adopter menemukan kucing yang sesuai.
- **Report & Rescue** — memungkinkan masyarakat melaporkan kucing yang ditemukan, hilang, atau membutuhkan bantuan.
- **Donasi** — menyediakan sarana bagi pengguna untuk memberikan dukungan terhadap operasional dan kebutuhan shelter.
- **Berita & Komunitas** — menyajikan informasi, berita, dan konten seputar kucing serta kegiatan komunitas.
- **Manajemen Pengguna** — mengelola data dan aktivitas pengguna dalam platform.`,
    gallery: [],
    links: {
      github: 'https://github.com/Erviina/adopKucing',
      demo: 'https://erviina.github.io/adopKucing/',
      figma: null
    }
  },
  {
    id: 2,
    title: 'Analisis Komposisi Makanan',
    category: 'Data Analysis',
    image: analisis,
    tags: ['Data Analysis', 'R', 'Python'],
    overview:
      'Analisis Pola Asosiasi antara Bahan Utama dan Bahan Tambahan Pangan pada Produk Makanan Kemasan Menggunakan Algoritma Apriori.',
    role:
      'Berperan dalam pengumpulan dan pengolahan dataset, transformasi data, pemodelan menggunakan algoritma Apriori di R Studio, serta hyperparameter tuning dan pemilihan model terbaik.',
    description: `Tujuan analisis dalam project ini meliputi:

- **Identifikasi Pola Asosiasi** — mengidentifikasi pola asosiasi antara bahan utama produk makanan dan bahan tambahan pangan (BTP) target seperti MSG, pengemulsi, serta propionat/benzoat.
- **Pengukuran Kekuatan Asosiasi** — mengukur kekuatan hubungan menggunakan metrik support, confidence, lift, conviction, dan coverage.
- **Evaluasi Association Rules** — mengevaluasi kualitas rules yang dihasilkan oleh algoritma Apriori.
- **Data-Driven Insight** — memberikan insight berbasis data mengenai karakteristik formulasi produk makanan kemasan.`,
    gallery: [],
    links: {
      doc: '/documents/AnalisisData.pdf'
    }
  },
  {
    id: 3,
    title: 'Perancangan Microservice',
    category: 'System Architecture & Database Design',
    image: furab,
    tags: ['System Design', 'Golang', 'PostgreSQL'],
    overview:
      'Perancangan backend super-app berbasis microservices menggunakan Go (Golang), dengan arsitektur yang terdiri dari 23 microservice independen yang saling terintegrasi untuk mendukung berbagai kebutuhan aplikasi.',
    role:
      'Berperan dalam perancangan arsitektur microservice, pembagian service berdasarkan kebutuhan sistem, serta perancangan struktur database dan komunikasi antar-service.',
    description: `FURAB merupakan backend super-app yang dirancang menggunakan pendekatan **microservices** dengan **Go (Golang)**. Sistem terdiri dari **23 microservice** independen yang memiliki tanggung jawab masing-masing dan saling berkomunikasi untuk mendukung kebutuhan aplikasi.

Arsitektur utama yang digunakan meliputi:

- **Microservices Architecture** — membagi sistem menjadi 23 service independen agar setiap service dapat dikembangkan dan dikelola secara terpisah.
- **API Gateway** — menjadi pintu masuk utama untuk menerima dan meneruskan request menuju service yang sesuai.
- **Kafka & RabbitMQ** — digunakan sebagai message broker untuk mendukung komunikasi asynchronous antar-service.
- **PostgreSQL** — digunakan sebagai database pada service yang membutuhkan penyimpanan data terstruktur.
- **Kubernetes** — digunakan untuk deployment dan orchestration seluruh service.
- **Helm Chart** — digunakan untuk mengelola dan mempermudah deployment aplikasi pada Kubernetes.
- **Jenkins CI/CD** — digunakan untuk mengotomasi proses build, testing, dan deployment.`,
    gallery: [],
    links: {
      github: 'https://github.com/rabbaniez23/presentasifurab',
      demo: null,
      figma: null
    }
  },
  {
    id: 4,
    title: 'Smart Secure Desk',
    category: 'Internet of Things',
    image: komponen,
    tags: ['IoT', 'ESP32', 'MQTT', 'Ball Switch'],
    overview:
      'Smart Secure Desk adalah sistem keamanan dan otomasi meja berbasis Internet of Things (IoT) yang dirancang untuk meningkatkan keamanan barang pribadi sekaligus mengoptimalkan pencahayaan pada area kerja atau belajar. Sistem menggunakan ESP32, sensor ball switch, sensor LDR, LED, buzzer, serta protokol MQTT untuk melakukan pemantauan dan komunikasi data secara real-time.',
    role:
      'Berperan dalam perancangan dan perakitan rangkaian IoT menggunakan ESP32 dan sensor, serta mengembangkan dashboard untuk monitoring data dan kondisi sistem secara real-time.',
    description: `Smart Secure Desk mengintegrasikan perangkat keras dan sistem monitoring untuk mendeteksi kondisi meja serta mengatur pencahayaan secara otomatis.

Fitur dan komponen utama:

- **Security Detection** — mendeteksi indikasi pergerakan atau gangguan pada meja menggunakan sensor ball switch.
- **Sliding Window Classification** — menggunakan pendekatan klasifikasi berbasis sliding window untuk membantu membedakan kondisi normal dan indikasi pencurian.
- **Smart Lighting** — menggunakan sensor LDR untuk membaca kondisi pencahayaan dan mengatur LED secara otomatis.
- **Real-Time Monitoring** — mengirimkan data sensor secara real-time menggunakan protokol MQTT.
- **Alert System** — memberikan peringatan menggunakan buzzer ketika sistem mendeteksi kondisi mencurigakan.
- **Monitoring Dashboard** — menyediakan dashboard untuk memantau data dan kondisi sistem.`,
    gallery: [dash],
    links: {
      github: 'https://github.com/Erviina/TubesIoT',
      demo: null,
      figma: null
    }
  }
]
