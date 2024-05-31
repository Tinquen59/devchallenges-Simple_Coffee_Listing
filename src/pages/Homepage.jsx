import { useEffect, useState } from "react";
import axios from "axios";

import ButtonFilter from "../components/ButtonFilter/ButtonFilter";
import CardProducts from "../components/CardProducts/CardProducts";

const API_URL =
    "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";

function App() {
    const [isAllProducts, setIsAllProducts] = useState(true);
    const [isAvailableNow, setIsAvailableNow] = useState(false);
    const [products, setProducts] = useState([{}]);
    const [error, setError] = useState(null);

    const changeProductFilter = (filter) => {
        if (!filter) {
            setIsAllProducts(!isAllProducts);
            setIsAvailableNow(!isAvailableNow);
        }
    };

    const getProducts = async () => {
        try {
            const response = await axios.get(API_URL);

            console.log("get all products", response.data);

            setProducts(response.data);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const listAllProducts = products.map((product, index) => (
        <CardProducts product={product} key={index} />
    ));

    const listAvailableNowProducts = products
        .filter((product) => product.available)
        .map((product, index) => (
            <CardProducts product={product} key={index} />
        ));

    return (
        <>
            <div className="qa-Main__container">
                <div className="qa-Main__intro">
                    <h1 className="qa-Main__intro--title">Our Collection</h1>
                    <p className="qa-Main__intro--text">
                        Introducing our Coffee Collection, a selection of unique
                        coffees from different roast types and origins, expertly
                        roasted in small batches and shipped fresh weekly
                    </p>
                </div>

                <div className="qa-Main__filter">
                    <ButtonFilter
                        textContent="All products"
                        isActiveFilter={isAllProducts}
                        changeProductFilter={changeProductFilter}
                    />
                    <ButtonFilter
                        textContent="Available Now"
                        isActiveFilter={isAvailableNow}
                        changeProductFilter={changeProductFilter}
                    />
                </div>

                <div className="qa-Products__container">
                    {isAllProducts ? listAllProducts : listAvailableNowProducts}
                </div>
            </div>
        </>
    );
}

export default App;
