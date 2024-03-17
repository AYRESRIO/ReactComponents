import "./styles.css";
import Header from "../../components/Header";

export default function Catalog() {
  return (
    <>
      <Header />
      <main className = "dsct-catalog-main">
        <section id="dsct-catalog-section">
          <div className="dsct-message-container">
            <h1>Venha nos visitar</h1>
          </div>
          <div className="dsct-catalog-cards-container">
            Teste
            <div>
              <h3>Lorem ipsum dolor</h3>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
