# **uTask Pomodoro**
 
 ## *Funcionalidades:* 
 - Login e senha  
 - Cadastro de novo usuário com campo para o login, senha e a confirmação de senha  
 - Local para adicionar tarefas, assim como para selecionar quantos pomodoros terá
 - Hover na tarefa apresenta os icones para Check ou Exclusão
 - Timer que varia entre os tempos de Pomodoro, Pausa curta e Pausa Longa  
 - Botões para começar [Start], passar [Skip] ou pausar [Stop] o timer.  
 - Som de alerta ao fim de um pomodoro/pausa.  
 - Modal de configurações, com a funcionalidade de definir o tempo dos pomodoros, pausas curtas e pausas longas para ser usado no timer
 <br />

> **OBS:** certifique-se de rodar o Frontend juntamente com o Backend
## *Frontend:* 
> **OBS:** tenha certeza que está dentro da pasta 'pomodoro' para executar os próximos comandos.
> Caso tal situação não se aplique a sua realidade, basta digitar:
```
cd .\pomodoro\
```

#### Para inicializar e abrir o Frontend:
```
npm install react-script
//ou
yarn add react-scripts
```
```
//Dependência para o som utilizado no timer

npm install howler 
//ou 
yarn add howler
```
```
npm start
//ou
yarn start 
```

<br />

## *Backend:*
> **OBS:** tenha certeza que está dentro da pasta 'backend' para executar os próximos comandos.
> Caso tal situação não se aplique a sua realidade, basta digitar:
```
cd .\backend\
```
#### Para inicializar e abrir o Backend:

```
npm i
//ou
yarn install
```
```
npm run dev
//ou
yarn dev
```