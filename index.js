const stories = [
  {
    tag: 'Nasional',
    title: 'Pemerintah menyiapkan langkah baru untuk memperkuat daya saing daerah',
    summary:
      'Kebijakan baru fokus pada sektor infrastruktur, pendidikan, dan peningkatan investasi daerah guna mendorong pertumbuhan ekonomi yang lebih merata.',
    date: '10 Okt 2026',
    reads: '12.4k pembaca',
  },
  {
    tag: 'Olahraga',
    title: 'Tim nasional menargetkan hasil maksimal di laga internasional berikutnya',
    summary:
      'Pelatih menegaskan persiapan intensif dan strategi rotasi pemain akan menjadi kunci di pertandingan penting yang akan datang.',
    date: '09 Okt 2026',
    reads: '9.8k pembaca',
  },
  {
    tag: 'Ekonomi',
    title: 'Sektor UMKM kembali tumbuh setelah tren konsumsi nasional stabil',
    summary:
      'Para pelaku usaha menyebut optimisme pasar mulai meningkat seiring dengan dukungan digitalisasi dan akses ke pembiayaan yang lebih luas.',
    date: '08 Okt 2026',
    reads: '15.1k pembaca',
  },
  {
    tag: 'Teknologi',
    title: 'Penggunaan AI pada layanan publik makin berkembang dengan pendekatan yang aman',
    summary:
      'Integrasi sistem otomatis membantu efisiensi pelayanan, sekaligus menuntut pengawasan etika data dan keamanan informasi.',
    date: '07 Okt 2026',
    reads: '18.2k pembaca',
  },
  {
    tag: 'Lingkungan',
    title: 'Program hijau perkotaan mulai memberi dampak positif bagi kualitas hidup',
    summary:
      'Perbaikan ruang terbuka, pengelolaan sampah, dan penghijauan kota dinilai mampu menurunkan polusi dan meningkatkan kenyamanan masyarakat.',
    date: '06 Okt 2026',
    reads: '7.3k pembaca',
  },
  {
    tag: 'Opini',
    title: 'Transformasi digital tidak hanya soal teknologi, tapi juga perubahan cara kerja',
    summary:
      'Kebiasaan baru dalam organisasi menuntut kolaborasi yang lebih cepat, adaptif, dan berbasis data untuk menghadapi perubahan pasar.',
    date: '05 Okt 2026',
    reads: '11.6k pembaca',
  },
];

const editorPicks = [
  {
    tag: 'Analisis',
    title: 'Tiga strategi yang bisa mempercepat transformasi pelayanan publik',
    meta: '4 menit dibaca',
  },
  {
    tag: 'Makro',
    title: 'Ekonomi daerah mulai terlihat lebih siap menghadapi perubahan',
    meta: '6 menit dibaca',
  },
  {
    tag: 'Wawancara',
    title: 'Pelaku UMKM berbicara soal tantangan dan peluang di 2027',
    meta: '8 menit dibaca',
  },
];

const newsGrid = document.getElementById('newsGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const yearNode = document.getElementById('year');
const newsletterForm = document.getElementById('newsletterForm');
const editorPickList = document.getElementById('editorPickList');

let visibleCount = 3;

function renderEditorPicks() {
  if (!editorPickList) return;

  editorPickList.innerHTML = editorPicks
    .map(
      (item) => `
        <article class="pick-item">
          <span>${item.tag}</span>
          <strong>${item.title}</strong>
          <small>${item.meta}</small>
        </article>
      `,
    )
    .join('');
}

function renderStories() {
  if (!newsGrid) return;

  const items = stories.slice(0, visibleCount);

  newsGrid.innerHTML = items
    .map(
      (story) => `
        <article class="story-card">
          <div class="story-visual" aria-hidden="true"></div>
          <span class="story-tag">${story.tag}</span>
          <h3>${story.title}</h3>
          <p>${story.summary}</p>
          <div class="story-meta">
            <span>${story.date}</span>
            <span>${story.reads}</span>
          </div>
          <a class="story-link" href="#">Baca selengkapnya</a>
        </article>
      `,
    )
    .join('');

  if (loadMoreBtn) {
    loadMoreBtn.textContent = visibleCount >= stories.length ? 'Semua berita sudah ditampilkan' : 'Tampilkan lebih banyak';
    loadMoreBtn.disabled = visibleCount >= stories.length;
  }
}

if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', () => {
    visibleCount = Math.min(visibleCount + 3, stories.length);
    renderStories();
  });
}

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const button = newsletterForm.querySelector('button');
    const input = newsletterForm.querySelector('input');

    if (button) {
      button.textContent = 'Tersimpan';
      button.disabled = true;
    }

    if (input) {
      input.value = '';
      input.placeholder = 'Email berhasil didaftarkan';
    }
  });
}

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

renderEditorPicks();
renderStories();
