//criar o package com todas as configurações padrões
npm init -Y
npm install next
npm install react
npm install react-dom
//ou
npm install next react react-dom
//update scripts for "dev": "next dev"
//use for init next server
npm run dev
//create folder pages
//using File-system routing
//create folder pages
//create folder api

//implements index
//add in github
//add in vercel (https://vercel.com/fidelisfelipe)
//link in https://learn-nextjs-vert.vercel.app/

//use static pages - criadas a cada request no client-side
//use dinamic pages - criadas a cada request no server-side
//use getServerSideProps

//solução para:
//paginas infinitas
//sem precisar criar arquivos manualmente
//conteúdos gerados dinamicamente
//sem serem puxados no client-side
//sem serem gerados a cada request no server-side
//incremental static generation - geração incremental de paginas
//gera disponibilidade, performace e flexbilidade

//3 formas para buscar dados para gerar páginas:
//getStaticProps        - usado para pegar as props no processo de build, e somente lá para gerar uma página estatica - mais performático por poder ser distribuida em várias cdn's
//getServerSideProps    - usado para pegar as props em tempo de execução no serve-side - menos performático
//getStaticPaths        - solução intermediária
//Gera em tempo de execução páginas estáticas em tempo de execução assim que forem requisitadas



