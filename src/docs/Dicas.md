1º Abrir o VSCODE
2º No terminal, digitar: cd desktop
3º No terminal, dentro de desktop mkdir (nome da pasta)
4º No terminal, cd (nome da pasta)
5º Dentro da pasta: code .
6º No terminal da pasta: touch (nome do arquivo)
7º No terminal:  mkdir src
8º No terminal: cd src
9º No terminal: mkdir css
10º No terminal: mkdir js
11º No terminal: cd css
12º No terminal: touch (nome do arquivo na pasta)
13º No terminal: cd ..
14º No terminal: cd js
15º No terminal: touch (nome no arquivo na pasta)
16º No terminal: cd ..
17º No terminal: cd ..  (até chegar na pasta raiz)
18º No terminal: git init
19º Se estiver na Fiap: git config --global user.name "Estela"
20º Se estiver na Fiap: git config --global user.email estela.mariano@icloud.com
21º No terminal: git status
22º Se estiver vermelho: git add .
23º Se estiver verde: git commit -m "Explicação do que foi feito"
24º Entrar no Github em repositórios, criar um novo repositório, colocar o nome e deixar público
(DICA DE OURO - NUNCA TRADUZA A PÁGINA DO GITHUB)
25º No bloco que estiver as três linhas: 
        1º linha: conecta seu gitbash com seu github
        2º linha: muda o nome master para main
        3º linha: pega tudo o que está no projeto para o github
26º Caso você esteja em outro pc: no seu repositório o botão verde escrito code, copie o link
27º Abra seu vscode, no terminal, cd desktop: git clone (copie e cole o link) - isso clona seu projeto e continuar de onde parou
28º Se modificar seu código, faça todo o processo 
    git status
    git add .
    git commit -m "Mensagem"
    e para subir as alterações: git push