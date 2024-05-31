import React from "react";

import Rating from "../Rating/Rating";

function CardProducts({ product }) {
    return (
        <div className="qa-Card-products__container">
            <div className="qa-Card-products__body">
                <img
                    src={product.image}
                    alt={product.name}
                    className="qa-Card-products__body--img"
                />
            </div>
            <div className="qa-Card-products__footer">
                <div>
                    <p className="qa-Card-products__footer--name">
                        {product.name}
                    </p>
                    <Rating
                        rating={product.rating}
                        numberVotes={product.votes}
                    />
                </div>
                <div>
                    <p className="qa-Card-products__footer--price">
                        {product.price}
                    </p>
                    {!product.available && (
                        <p className="qa-Card-products__footer--available">
                            Sold out
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CardProducts;
