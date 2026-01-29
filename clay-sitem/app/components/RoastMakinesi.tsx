"use client";
import { useState } from "react";

export default function CaagAIMakinesi() {
  const [onay, setOnay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Başlatılıyor...");
  const [sonuc, setSonuc] = useState("");
  const [kullaniciAdi, setKullaniciAdi] = useState("");

  const laflar = [
    "Bio'na 'Gezgin' yazmışsın ama en uzak gittiğin yer BİM. O profil ne öyle?",
    "Tweetlerin o kadar sıkıcı ki telefonumun şarjı %10 arttı. Kapat o hesabı.",
    "Profil fotoğrafına baktım, yapay zeka olmama rağmen devrelerim yandı.",
    "Elon Musk bu hesabı görse Twitter'ı aldığına pişman olurdu.",
    "Sürekli İngilizce terimler kullanarak zeki görünmeye çalışman... Sadece 'cringe' duruyor.",
  ];

  const beniYak = () => {
    if (!kullaniciAdi) return;
    setLoading(true);
    setSonuc("");
    
    const adimlar = [
      "Profil fotoğrafı taranıyor... 📸",
      "Tweet geçmişine bakılıyor... 🕵️‍♂️",
      "Utanç verici anlar tespit edildi... 😬",
      "ChatGPT gülmekten cevap veremiyor... 🤣",
      "Yargı hazırlanıyor... 🔥"
    ];

    let i = 0;
    setLoadingText(adimlar[0]);

    const interval = setInterval(() => {
      i++;
      if (i < adimlar.length) {
        setLoadingText(adimlar[i]);
      }
    }, 800);

    setTimeout(() => {
      clearInterval(interval);
      const rastgeleLaf = laflar[Math.floor(Math.random() * laflar.length)];
      setSonuc(rastgeleLaf);
      setLoading(false);
    }, 4500);
  };

  const paylas = () => {
    const text = `Yapay Zeka beni yerin dibine soktu! 💀\n\n"${sonuc}"\n\nSen de cesaretin varsa dene: caagai.com @caagai_bot`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1400px] mx-auto px-6 h-full relative z-10 py-10 gap-10">
      
      {/* --- SOL TARAF (FORM) --- */}
      <div className="flex-1 text-left w-full">
        
        <h1 className="modern-title text-6xl md:text-[6.5rem] text-white mb-6 drop-shadow-2xl tracking-tighter">
          EGONU <br />
          YERLE BİR <br />
          EDELİM.
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 font-medium mb-10 max-w-lg leading-relaxed opacity-90 drop-shadow-md">
          Yapay zeka profilini incelesin ve duymaktan korktuğun gerçekleri yüzüne vursun.
        </p>

        <div className="flex flex-col max-w-md w-full gap-5">
          
          {/* ONAY KUTUSU */}
          <div 
            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-all backdrop-blur-sm"
            onClick={() => setOnay(!onay)}
          >
            <div className={`w-6 h-6 min-w-[24px] rounded border-2 flex items-center justify-center transition-all ${onay ? 'bg-[#FFD700] border-[#FFD700]' : 'border-white/50'}`}>
              {onay && <span className="text-black font-bold text-sm">✓</span>}
            </div>
            <p className="text-sm text-white/90 font-medium select-none">
              Mizahi amaçla acımasızca eleştirilmeyi kabul ediyorum.
            </p>
          </div>

          {/* INPUT (ARTIK HATA VERMEZ - CSS YERİNE TAILWIND KULLANDIK) */}
          <input 
            type="text" 
            placeholder="@kullaniciadi" 
            className="w-full p-5 rounded-2xl text-xl font-bold shadow-lg bg-white/10 backdrop-blur-md border-2 border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:border-white focus:outline-none transition-all"
            onChange={(e) => setKullaniciAdi(e.target.value)}
          />

          {/* 3D BUTON */}
          <button 
            disabled={!onay || loading}
            onClick={beniYak}
            className={`btn-3d w-full py-5 text-xl flex justify-center items-center gap-3`}
          >
            {loading ? (
              <>
                <div className="w-6 h-6 border-4 border-black/20 border-t-black rounded-full animate-spin"></div>
                <span>{loadingText}</span>
              </>
            ) : (
              onay ? "🔥 BENİ YAK!" : "Önce Onayı Ver ☝️"
            )}
          </button>
        </div>
      </div>

      {/* --- SAĞ TARAF --- */}
      <div className="flex-1 flex justify-center items-center relative h-[400px] md:h-[500px] w-full mt-10 md:mt-0">
        <div className={`absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full blur-[100px] transition-all duration-1000 ${sonuc ? 'bg-orange-600/60' : 'bg-blue-500/30'}`}></div>
        
        {sonuc ? (
           <div className="alev-animasyon transition-all duration-500 transform scale-100 z-10">🔥</div>
        ) : (
           <div className="roket-animasyon z-10">🚀</div>
        )}
      </div>

      {/* --- POP-UP SONUÇ --- */}
      {sonuc && (
         <div className="fixed top-0 left-0 w-full h-full bg-black/90 backdrop-blur-xl z-[999] flex items-center justify-center p-4">
            <div className="bg-[#111] p-8 md:p-12 rounded-[40px] max-w-2xl w-full border border-white/10 shadow-2xl flex flex-col items-center text-center animate-bounce-in relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"></div>
                <button onClick={() => setSonuc("")} className="absolute top-6 right-8 text-gray-500 hover:text-white text-3xl font-bold transition-colors">✕</button>

                <h2 className="text-6xl font-black text-white mb-2 tracking-tighter">SONUÇ</h2>
                <div className="text-4xl mb-8">🔥</div>
                
                <p className="text-2xl md:text-3xl font-bold leading-snug text-gray-200 mb-10">"{sonuc}"</p>

                <button 
                  onClick={paylas}
                  className="bg-white text-black hover:bg-gray-200 px-10 py-4 rounded-full font-black text-xl flex items-center gap-3 transition-transform hover:scale-105"
                >
                  <span className="text-2xl">🐦</span> X'te Paylaş
                </button>
            </div>
         </div>
      )}
    </div>
  );
}