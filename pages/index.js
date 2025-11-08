function Home() {
  return (
    <AnyText text="[Ambiente de Desenvolvimento] Bem-vindo ao clone do site TabNews!" />
  );
}

function AnyText({ text }) {
  return <h1>{text}</h1>;
}

export default Home;
