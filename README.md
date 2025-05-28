# 🛒 Price Comparator

Aplicação web para facilitar a comparação de preços de produtos em mercados fictícios, com foco em ajudar pessoas de baixa renda a economizar.
A plataforma simula uma rede de mercados fictícios, permitindo que o usuário compare preços de forma prática, como se estivesse pesquisando em mercados reais próximos.

## Índice

- <a href="#objetivo">Objetivo</a>
- <a href="#funcionalidades">Funcionalidades</a>
- <a href="#tecnologias-utilizadas">Tecnologias utilizadas</a>
- <a href="#como-rodar-o-projeto-localmente"> Como rodar o projeto localmente</a>
- <a href="#deploy"> Deploy</a>
- <a href="#desenvolvido-por"> Desenvolvido por</a>


## 🎯Objetivo
O Price Comparator tem como principal missão promover o consumo consciente e facilitar o acesso a informações de preços, ajudando pessoas de baixa renda a economizar no dia a dia.
A plataforma simula uma rede de mercados fictícios, possibilitando a comparação rápida e eficiente de preços.

## 🚀Funcionalidades
- 🔎 Buscar produtos pelo nome.
- 📊 Comparar preços entre mercados fictícios.
- 🏆 Destaque automático para o menor preço.
- 🔄 Feedback visual de carregamento.
- ⚠️ Exibição de mensagens de erro caso a API esteja indisponível.

## 🖥️Tecnologias Utilizadas
- Frontend: Next.js, React, Tailwind CSS
- Backend: Node.js, Express.js
- Banco de Dados: MongoDB Atlas
- Hospedagem: Vercel (frontend), Render (backend)
- Testes: Postman

## ⚙️Como rodar o projeto localmente

1. Clone o repositório.
```bash
git clone https://github.com/seu-usuario/price-comparator.git
cd price-comparator
```

2. Instale as dependências:
```bash
npm install
```
## ou
```bash
yarn install
```

3. Configure as variáveis de ambiente:

Crie um arquivo **.env** na raiz do projeto:
```bash
NEXT_PUBLIC_API_URL=http://localhost:5000
```
Ajuste conforme o ambiente desejado.

4. Execute o servidor de desenvolvimento
```bash
npm run dev
```
Acesse: http://localhost:3000

### 📦Deploy
- **Frontend:** Aplicação web -[https://price-comparator-nine.vercel.app](https://price-comparator-nine.vercel.app)
- **Backend (API):** Endpoints REST — [https://price-comparator-2hvq.onrender.com/produtos](https://price-comparator-2hvq.onrender.com/produtos)

## 👩🏽‍💻Desenvolvido por
### Amanda Hellen

## 📄 Licença
Este projeto está licenciado sob a [MIT License](./LICENSE.md).
