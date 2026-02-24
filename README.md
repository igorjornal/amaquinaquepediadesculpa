# A Máquina Que Pedia Desculpa - Landing Page

Landing page oficial para o pré-lançamento do livro **"A Máquina Que Pedia Desculpa"**, de Igor Schulenburg.

## 🚀 Tecnologias Utilizadas

- **React** (com Vite)
- **Tailwind CSS** (para estilização responsiva e animações)
- **Netlify Forms** (para captura de leads)
- **Lucide React** (ícones)

## 🛠️ Como Rodar Localmente

1. Clone este repositório.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra `http://localhost:3000` no seu navegador.

## 📦 Como Fazer Deploy no Netlify

Este projeto já está configurado para ser hospedado no **Netlify** com suporte a formulários.

1. Crie um novo site no Netlify importando este repositório do GitHub.
2. As configurações de build devem ser detectadas automaticamente:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Clique em **Deploy**.

### Formulário de Contato

O formulário de "Cadastre-se" utiliza a funcionalidade nativa **Netlify Forms**.
- Não é necessário configurar backend.
- Os dados enviados aparecerão automaticamente no painel do Netlify em "Forms".
- O atributo `data-netlify="true"` já está configurado no arquivo `src/App.tsx`.

## 🎨 Personalização

- **Cores e Fontes:** Configuradas no arquivo `src/index.css` e `tailwind.config.js` (via plugin Vite).
- **Imagens:** As imagens da capa e do autor estão linkadas diretamente no código. Para alterar, substitua as URLs em `src/App.tsx`.
