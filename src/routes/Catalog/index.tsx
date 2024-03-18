import "./styles.css";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Comment from "../../components/Comment";

export default function Catalog() {
  return (
    <>
      <Header />
      <main>
        <section id="dsct-catalog-section" className="dsct-catalog-main">
          <div className="dsct-message-container">
            <h1>Venha nos visitar</h1>
          </div>
          <div className="dsct-catalog-cards-container">
            <Card />
            <Card />
          </div>
        </section>
        <section id="dsct-catalog-comments-section">
          <div className="dsct-title-container">
            <h1>O que estão dizendo</h1>
          </div>
          <div>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
        </section>
      </main>
    </>
  );
}
