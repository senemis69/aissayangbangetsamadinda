// Mendapatkan elemen audio
const audio = document.getElementById("audio");

// Mendapatkan durasi lagu dalam detik
const audioDuration = 241; // 4 menit dan 1 detik

// Fungsi untuk melakukan scroll perlahan
function autoScroll() {
    // Mendapatkan waktu saat ini dalam lagu
    const currentTime = audio.currentTime;

    // Menghitung persentase waktu saat ini terhadap durasi lagu
    const scrollPercentage = currentTime / audioDuration;

    // Menghitung posisi scroll berdasarkan persentase waktu
    const scrollPosition = scrollPercentage * (document.body.scrollHeight - window.innerHeight);

    // Melakukan scroll ke posisi yang dihitung
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
}

// Mengatur interval untuk melakukan scroll perlahan sesuai dengan durasi lagu
audio.onplay = () => {
    // Mendapatkan waktu mulai lagu
    const startTime = Date.now();

    // Mengatur interval untuk melakukan scroll perlahan
    const scrollInterval = setInterval(() => {
        // Menghitung waktu yang telah berlalu sejak lagu dimulai
        const elapsedTime = Date.now() - startTime;

        // Memeriksa apakah lagu sudah selesai atau belum
        if (elapsedTime < audioDuration * 1000) {
            // Jika belum selesai, lakukan scroll perlahan
            autoScroll();
        } else {
            // Jika sudah selesai, hentikan interval scroll
            clearInterval(scrollInterval);
        }
    }, 100); // Frekuensi scroll disesuaikan dengan kebutuhan
};
