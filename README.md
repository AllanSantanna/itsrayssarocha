# ItsRayssa Rocha

Site de apresentação das aulas particulares de inglês da teacher Rayssa Rocha, migrado de HTML/CSS/JavaScript para **React + Vite**.

## Desenvolvimento

Requer Node.js 20.19+ ou 22.12+ e npm.

```bash
npm install
npm run dev
```

Abra a URL exibida no terminal. O Vite atualiza a página automaticamente a cada alteração.

## Produção

```bash
npm run build
npm run preview
```

Publique a pasta `dist/` em uma hospedagem de sites estáticos. A configuração usa caminhos relativos para suportar publicação em subdiretórios, como no GitHub Pages. A hospedagem anterior que servia o HTML diretamente precisa passar a servir o resultado do build.

## Organização

- `src/App.jsx`: seções da página.
- `src/components/`: cabeçalho, botão de contato, ícones e abas da metodologia.
- `src/data.js`: ferramentas, bônus, depoimentos, perguntas frequentes, navegação e link do WhatsApp.
- `src/styles.css`: identidade visual e layouts responsivos.
- `assets/img/`: fotos originais, processadas pelo Vite.
- `public/`: arquivos estáticos, como o favicon.

O menu móvel fecha ao selecionar um link ou pressionar Escape. As abas de metodologia também podem ser navegadas com as setas, Home e End. Animações respeitam a preferência por movimento reduzido. As fotos, os depoimentos e os contatos do projeto original foram preservados.

O botão de lua/sol no cabeçalho alterna entre os modos claro e escuro e salva a escolha no navegador. A preferência é aplicada antes da renderização para evitar que o tema claro apareça brevemente ao recarregar. O botão continua funcionando se o navegador bloquear o armazenamento local.

O botão “Fale comigo” tem um brilho pulsante ao redor da borda, com um ciclo de 1,8 segundo. Quando a redução de movimento está ativa no sistema, apenas esse efeito permanece animado, com metade da velocidade; as demais animações continuam desativadas.

Em celulares, os textos e áreas de toque são maiores, e as seções se reorganizam em uma coluna. Até 480 px, as ferramentas ficam em uma coluna, as abas de habilidades formam uma grade 2 × 2 e os botões principais ocupam a largura disponível. O menu tem rolagem própria para continuar acessível com o telefone na horizontal.
