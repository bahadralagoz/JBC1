/*
 * JBC catalogue, taken from the JBC Trendyol store list (JBC_Trendyol_Urun_Listesi.xlsx).
 * Prices are the Trendyol sale prices at the time of the export; ratings are Trendyol reviews.
 * Photos: the store's own product photography, cut out to transparent WebP (assets/products/<id>.webp).
 * `hex` is sampled from the garment in the photo and drives the room colour.
 * `crop`: which edge of the photo is cut by the frame ("bottom" for half-body shots, "top" for shorts).
 *
 * NOT in the export, so still to be filled in: size availability, fabric weights, measurements.
 * Women's items in the store (crop halter atlet) are left out: the site is menswear only.
 */
window.JBC_PRODUCTS = [
  {
    id: "sweatshirt",
    name: "Sweatshirt",
    full: "Oversize Şardonlu Sweatshirt",
    specs: { Kumaş: "Şardonlu", Kalıp: "Oversize", Yaka: "Bisiklet yaka", Detay: "Nakışlı logo veya logosuz" },
    colors: [
      { id: "1047911815", name: "Bordo", note: "Nakışlı", hex: "#63222f", price: 849.9 },
      { id: "1047911821", name: "Hardal", note: "Nakışlı", hex: "#d4ba34", price: 849.9 },
      { id: "1047911833", name: "Haki", note: "Nakışlı", hex: "#504d36", price: 749.9, rating: [4.0, 1] },
      { id: "1047911772", name: "Gül kurusu", note: "Nakışlı", hex: "#db908a", price: 749.9, rating: [4.0, 1] },
      { id: "1047908838", name: "Gül kurusu", note: "Logosuz", hex: "#df958f", price: 799.9 },
      { id: "867555906", name: "Kahve", note: "Basic", hex: "#926e61", price: 749.9, rating: [4.0, 4] },
      { id: "865310808", name: "İndigo", note: "Basic", hex: "#30405d", price: 699.9, rating: [3.9, 7] }
    ]
  },
  {
    id: "esofman",
    name: "Eşofman Takımı",
    full: "Erkek Eşofman Takımı",
    specs: { Kumaş: "—", Kalıp: "Rahat, paçası lastikli", Yaka: "Kapüşonlu veya bisiklet yaka", Detay: "Üst + alt takım" },
    colors: [
      { id: "1073956969", name: "Siyah", note: "Kapüşonlu, nakışlı", hex: "#1e1a1c", price: 1799.9 },
      { id: "1073956974", name: "Buz mavisi", note: "Kapüşonlu, nakışlı", hex: "#95b1ca", price: 1799.9 },
      { id: "1063541229", name: "Mavi", note: "Kapüşonlu", hex: "#93abc1", price: 1999.9 },
      { id: "1063537335", name: "Açık mavi", note: "Bisiklet yaka", hex: "#a9c1d8", price: 1999.9 },
      { id: "1063520589", name: "Mavi", note: "Bisiklet yaka, nakışlı", hex: "#91aec7", price: 1899 }
    ]
  },
  {
    id: "kapusonlu",
    name: "Kapüşonlu",
    full: "Nakışlı Kapüşonlu Sweatshirt",
    specs: { Kumaş: "—", Kalıp: "Oversize", Yaka: "Kapüşon, kanguru cep", Detay: "Nakışlı logo" },
    colors: [{ id: "1047914177", name: "Çağla", note: "Nakışlı", hex: "#a4b496", price: 849.9, rating: [3.8, 4], crop: "bottom" }]
  },
  {
    id: "oversize-tisort",
    name: "Oversize Tişört",
    full: "Kabarmalı Kadife Baskı Oversize Tişört",
    specs: { Kumaş: "%100 pamuk, kalın tok kumaş", Kalıp: "Oversize", Yaka: "Bisiklet yaka", Detay: "Sırtta kabarmalı kadife JBC baskı" },
    colors: [
      { id: "1108282352", name: "Siyah", note: "Sırt baskılı", hex: "#1a191e", price: 799.9, rating: [5.0, 1], crop: "bottom" },
      { id: "1108282353", name: "Beyaz", note: "Sırt baskılı", hex: "#e6e7ee", price: 799.9, crop: "bottom" },
      { id: "1108282354", name: "Petrol", note: "Sırt baskılı", hex: "#163556", price: 799.9, rating: [5.0, 1], crop: "bottom" }
    ]
  },
  {
    id: "tisort",
    name: "Tişört",
    full: "%100 Pamuk Tişört",
    specs: { Kumaş: "%100 pamuk", Kalıp: "Regular", Yaka: "Bisiklet yaka", Detay: "Nakışlı logo veya düz" },
    colors: [
      { id: "926364254", name: "Bordo", note: "Nakışlı", hex: "#952035", price: 429.9, rating: [5.0, 5] },
      { id: "926312433", name: "Bordo", note: "Düz", hex: "#901e33", price: 399.9, rating: [2.5, 2] }
    ]
  },
  {
    id: "sort",
    name: "Şort",
    full: "Big Stretch Spor Şort",
    specs: { Kumaş: "Big Stretch esnek kumaş", Kalıp: "Rahat kalıp", Yaka: "—", Detay: "Bağcıklı bel, ara biyeli modeller" },
    colors: [
      { id: "1114736287", name: "Lacivert", note: "Ara biyeli", hex: "#282a36", price: 649.9, crop: "top" },
      { id: "1114736342", name: "Siyah", note: "Ara biyeli", hex: "#1b1a21", price: 649.9, crop: "top" },
      { id: "1114733369", name: "Siyah", note: "Biyesiz", hex: "#1c1b22", price: 649.9, crop: "top" }
    ]
  }
];

/* Trendyol product URLs, by product id. */
window.JBC_TRENDYOL = {
  "1047911815": "https://www.trendyol.com/jbc/bisiklet-yaka-nakisli-oversize-sardonlu-basic-erkek-sweatshirt-p-1047911815",
  "1047911821": "https://www.trendyol.com/jbc/bisiklet-yaka-nakisli-oversize-sardonlu-basic-erkek-sweatshirt-p-1047911821",
  "1047911833": "https://www.trendyol.com/jbc/bisiklet-yaka-nakisli-oversize-sardonlu-basic-erkek-sweatshirt-p-1047911833",
  "1047911772": "https://www.trendyol.com/jbc/bisiklet-yaka-nakisli-oversize-sardonlu-basic-erkek-sweatshirt-p-1047911772",
  "1047908838": "https://www.trendyol.com/jbc/bisiklet-yaka-oversize-sardonlu-basic-erkek-sweatshirt-p-1047908838",
  "867555906": "https://www.trendyol.com/jbc/bisiklet-yaka-oversize-sardonlu-basic-erkek-sweatshirt-p-867555906",
  "865310808": "https://www.trendyol.com/jbc/indigo-bisiklet-yaka-oversize-sardonlu-basic-erkek-sweatshirt-p-865310808",
  "1073956969": "https://www.trendyol.com/jbc/nakisli-kapusonlu-erkek-esofman-takimi-p-1073956969",
  "1073956974": "https://www.trendyol.com/jbc/nakisli-kapusonlu-erkek-esofman-takimi-p-1073956974",
  "1063541229": "https://www.trendyol.com/jbc/mavi-kapusonlu-erkek-esofman-takimi-p-1063541229",
  "1063537335": "https://www.trendyol.com/jbc/erkek-bisiklet-yaka-esofman-takimi-p-1063537335",
  "1063520589": "https://www.trendyol.com/jbc/erkek-esofman-takimi-p-1063520589",
  "1047914177": "https://www.trendyol.com/jbc/nakisli-erkek-kapusonlu-p-1047914177",
  "1108282352": "https://www.trendyol.com/jbc/kabarmali-kadife-baski-erkek-beyaz-oversize-kalin-tok-kumas-bisiklet-yaka-tisort-p-1108282352",
  "1108282353": "https://www.trendyol.com/jbc/kabarmali-kadife-baski-erkek-beyaz-oversize-kalin-tok-kumas-bisiklet-yaka-tisort-p-1108282353",
  "1108282354": "https://www.trendyol.com/jbc/kabarmali-kadife-baski-erkek-beyaz-oversize-kalin-tok-kumas-bisiklet-yaka-tisort-p-1108282354",
  "926364254": "https://www.trendyol.com/jbc/erkek-nakisli-100-pamuk-p-926364254",
  "926312433": "https://www.trendyol.com/jbc/erkek-100-pamuk-p-926312433",
  "1114736287": "https://www.trendyol.com/jbc/erkek-ara-biyeli-spor-sort-big-stretch-esnek-kumas-rahat-kalip-p-1114736287",
  "1114736342": "https://www.trendyol.com/jbc/erkek-ara-biyeli-spor-sort-big-stretch-esnek-kumas-rahat-kalip-p-1114736342",
  "1114733369": "https://www.trendyol.com/jbc/erkek-big-stretch-esnek-kumas-sort-yazlik-rahat-spor-sort-p-1114733369"
};

/* Size availability is not in the export; this list is a placeholder until real stock data exists. */
window.JBC_SIZES = ["S", "M", "L", "XL", "XXL"];
