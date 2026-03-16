# VidaApp — Gerenciador de Vida Completo

## Como usar no celular (Android)

Para funcionar como PWA instalável, o app precisa ser servido por um servidor com HTTPS.
A forma mais fácil é usar o **Netlify** (gratuito, arraste e solte).

---

### Opção 1 — Netlify (Recomendado, 2 minutos)

1. Acesse **https://netlify.com** e crie uma conta gratuita
2. Na tela inicial, arraste a pasta `vidaapp` para a área de deploy
3. O Netlify vai te dar um link como `https://meu-app.netlify.app`
4. Abra esse link no Chrome do Android
5. O Chrome vai mostrar "Adicionar à tela inicial" — aceite!
6. O VidaApp fica instalado como app nativo 📱

---

### Opção 2 — GitHub Pages (Gratuito)

1. Crie uma conta em **https://github.com**
2. Crie um repositório público
3. Faça upload dos arquivos desta pasta
4. Vá em Settings > Pages > Source: main branch
5. Acesse `https://seu-usuario.github.io/nome-do-repo`

---

### Opção 3 — Testar localmente (PC + celular na mesma rede Wi-Fi)

```bash
# No PC, dentro da pasta vidaapp:
python3 -m http.server 8000

# Descubra o IP do seu PC (ex: 192.168.1.100)
# No celular Chrome, acesse: http://192.168.1.100:8000
```
> Nota: sem HTTPS, o service worker não funciona, mas o app funciona normalmente.

---

## Funcionalidades

- ✅ **12 categorias** de gestão (Saúde, Família, Pets, Finanças, etc.)
- ✅ **Alarmes reais** com notificações push no celular
- ✅ **Dados persistem** mesmo fechando o app (localStorage)
- ✅ **Adicionar/excluir** tarefas em qualquer categoria
- ✅ **Marcar como feito** — estado salvo automaticamente
- ✅ **Lista de compras** interativa com progresso
- ✅ **Funciona offline** depois de aberto uma vez
- ✅ **Installable** — aparece na tela inicial como app nativo

## Arquivos

```
vidaapp/
  index.html    ← App principal
  sw.js         ← Service Worker (cache + notificações)
  manifest.json ← Configuração PWA
  icon-192.png  ← Ícone do app
  icon-512.png  ← Ícone para splash screen
  icon-96.png   ← Badge de notificação
  README.md     ← Este arquivo
```
