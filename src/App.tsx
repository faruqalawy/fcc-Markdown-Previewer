import { useState } from 'react'
import './App.css'
import ReactMarkdown from "react-markdown";

const defaultMarkdown = `
# Halo, Selamat datang di React Markdown Previewer!
## Ini nih sub-judulnya...
### Dan ini dia beberapa hal keren lainnya:
Ini ada kode, \`<div>a</div>\`, di tengah dua backtick.

\`\`\`
// ini kode yang multi-baris nih:

function contohLain(firstLine, lastLine) {
  if (firstLine === '\`\`\`' && lastLine === '\`\`\`') {
    return kodeBanyakBaris;
  }
}
\`\`\`

Kamu juga bisa bikin teks **tebel**... keren kan!
Atau _miring_.
Atau... tunggu dulu... **_keduanya_**!
Dan jangan sungkan buat bikin coretan-coretan di atas segalanya.

Ada juga [link](https://github.com/faruqalawy), dan

> Kutipan Blok!

Dan kalau kamu mau, bisa juga bikin tabel yang keren:

| Judul Liar | Judul Gila | Judul Lainnya |
|------------|-------------|---------------|
| Konten kamu bisa | ada di sini, dan | juga bisa ada di sini.... |
| Dan di sini. | Oke. | Gue rasa kita paham lah. |
  
Dan tentu aja ada daftar.
- Ada yang berupa poin-poin.
  - Dengan level indentasi yang berbeda.
    - Terlihat seperti ini.
1. Dan pastinya ada juga daftar yang berurutan.
  - Pakai angka 1 aja kalau mau!

Dan yang paling penting, jangan lupa gambar yang ditanam di sini:
![Beungeut Aing](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5SNN_TMWk2lJguPq0s5sp8JLVkLKre-2yGYQcIchYJAtyTRexXELCjHi48nLqeWRF3g2z3oVtBHw1pbuQAN2M5kY0dfT0rNQmHLeKxIdJzLau-Bdz2VUu8rMXyO_RR5M-XHLB1-Xl8apB3wHVus0sirdLABY_x6TphVd1tB9yes5FW1HzMlojzxvG_9k/s1600/WhatsApp%20Image%202023-09-27%20at%2015.13.45.jpg)
`;

function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown);

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Markdown Previewer</h1>
        <div className="boxes-container">
          <textarea
            name="editor"
            id="editor"
            value={markdownText}
            onChange={(e) => setMarkdownText(e.target.value)}
          ></textarea>
          <div id="preview">
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
