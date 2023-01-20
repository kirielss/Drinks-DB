import React from 'react';
import { Link } from 'react-router-dom';
export default function Error() {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>Oops! É um caminho sem saida</h1>
        <Link to="/" className="btn btn-primary">
          Voltar ao Inicio
        </Link>
      </div>
    </section>
  );
}
