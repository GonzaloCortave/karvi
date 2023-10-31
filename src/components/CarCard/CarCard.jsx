import React from "react";
import "./CarCard.scss";

const CarCard = ({ car }) => {
    const { brand, price, image, year, city, state, mileage, model, version } = car;
    const formatPrice = () => (
        price.toLocaleString("pt-BR", {
            currency: "BRL",
            style: "currency",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        })
    )


    return (
        <article className="CarCard">
            <img className="CarCard__image" src={image} alt="Car view" />
            <div className="CarCard__info-container">
                <span>
                    <label className="CarCard__label">{year}</label>
                    <label className="CarCard__label">{mileage}</label>
                </span>
                <h3 className="CarCard__title">{`${brand} ${model}`}</h3>
                <p className="CarCard__description">{version}</p>
                <p className="CarCard__price">{formatPrice()}</p>
                <p className="CarCard__location">{`${city}, ${state}`}</p>
            </div>
        </article>
    );
}

export default CarCard;