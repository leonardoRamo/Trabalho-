# Site estático

Este repositório contém o site estático do projeto.

Instruções rápidas para publicar no GitHub:

1. Inicializar git e commitar localmente:

```bash
git init
git add .
git commit -m "Initial site"
```

2. Criar o repositório remoto e enviar (duas opções):

- Usando o GitHub CLI (`gh`):

```bash
gh repo create <usuario>/<repo> --public --source=. --push
```

- Ou criar pelo site GitHub e depois:

```bash
git remote add origin https://github.com/<usuario>/<repo>.git
git branch -M main
git push -u origin main
```

3. O workflow do GitHub Actions incluído publica automaticamente o conteúdo no GitHub Pages sempre que você enviar para a branch `main`.

Se quiser, eu executo os comandos git locais por você (confirme para eu prosseguir).
