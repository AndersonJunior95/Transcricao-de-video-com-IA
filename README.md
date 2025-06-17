# 🎹 YouTube Audio Transcriber

Este projeto é uma aplicação experimental que permite:

- ✅ Fazer download do áudio de vídeos do YouTube
- ✅ Converter o áudio para `.mp3` com `ffmpeg`
- ⚠️ Tentar transcrever o áudio usando inteligência artificial com `@xenova/transformers` (em desenvolvimento)

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- ytdl-core
- ffmpeg-static
- fluent-ffmpeg
- Vite
- @xenova/transformers (experimental)

---

## ⚙️ Como rodar o projeto

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor backend:
```bash
node server/index.js
```

4. Em outra aba do terminal, rode o front-end:
```bash
npm run dev
```

---

## ⚠️ Aviso sobre a transcrição

> A funcionalidade de transcrição com `@xenova/transformers` está **inoperante no momento**, pois a biblioteca encontra-se desatualizada e apresenta erros como:
>
> - Bloqueio por CORS na Hugging Face
> - Caminhos inválidos nos modelos (`Unexpected token '<'`)
> - Erros ao carregar arquivos `.json` de configuração
>
> Recomenda-se utilizar:
> - A API oficial do Whisper da OpenAI  
> - Ou realizar a transcrição no back-end com `whisper.cpp` ou `whisper-asr-webservice`

---

## 📌 Observações

- O sistema de download e conversão de áudio está funcionando corretamente.
- Os arquivos `.mp3` são gerados localmente e usados na etapa de transcrição.
- O Vite pode ser removido caso opte por uma estrutura mais simples.

---

## 📂 Estrutura do projeto

```
📁 server/
 └── index.js
 └── download-video.js
 └── create-mp3.js

📁 public/
 └── audio.mp3

📁 src/
 └── form.js
 └── transcribre.js
 └── loading.js
```

---

## 🧐 Próximos passos

- Integrar com a API do Whisper (OpenAI)
- Transcrever no back-end
- Exportar a transcrição como `.txt` ou `.json`

---