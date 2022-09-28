import React from 'react';

import Modal from '../Modal';

export default function Card({ product, index }) {
  return (
    <div className="col">
      <div className="card bg-light border-secondary">
        <img src={product.image_url} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">${product.price}</p>
        </div>
        <a 
          className="btn btn-dark"
          data-bs-toggle="modal"
          href={`#item${index}`}
          role="button"
        >
          Detalhes do produto
        </a>
      </div>
      <Modal product={product} itemId={`item${index}`}/>
    </div>
  )
}