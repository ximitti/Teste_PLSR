import React from "react";

export default function Modal({ product, itemId }) {
  return (
    <>
      <div className="modal fade" id={itemId} aria-hidden="true" aria-labelledby={`${itemId}Label`} tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`${itemId}Label`}>{product.name}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button 
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse" 
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Tamanhos disponíveis
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <ul className="list-group list-group-horizontal">
                        {
                          product.available_sizes.length
                          ? product.available_sizes.map((size, i) => {
                            return <li key={i} className="list-group-item">{size}</li>
                          })
                          : <li className="list-group-item">Indisponível</li>
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-light border-secondary">
                <img src={product.image_url} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.type} - ${product.price}</h5>
                  <p className="card-text">{product.seller} - {product.sport}</p>
                  <p className="card-text">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}