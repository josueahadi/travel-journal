import Header from "./components/Header";
import data from "./data";
import Card from "./components/Card";

function App() {
  const cards = data.map((card) => {
    return <Card {...card} />;
  });

  return (
    <>
      <Header />
      <section className="flex flex-col items-center gap-10 p-10 w-full md:pt-20">
        {cards}
      </section>
    </>
  );
}

export default App;
