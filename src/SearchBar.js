import { useState } from "react";

function SearchBar(props) {

    const [name, setName] = useState("");
    const [priceMax, setPriceMax] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const searchButtonPressed = () => {
        props.callback({name: name, priceMax: priceMax, type: type, brand: brand});
    }

    return (
        <div>
            <h2>Search for an Item</h2>
            <form>
                <label htmlFor="name-field">Name: </label>
                <input 
                    id="name-field" 
                    type="text"  
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <label htmlFor="price-field">PriceMax: </label>
                <input 
                    id="price-field" 
                    type="number" 
                    value={priceMax}
                    onChange={(e) => setPriceMax(e.target.value)} 
                />
                <label htmlFor="type-field">Type: </label>
                <input 
                    id="type-field" 
                    type="text" 
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                />
                <label htmlFor="brand-field">Brand: </label>
                <input 
                    id="brand-field" 
                    type="text" 
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                />
                <button type="button" onClick={searchButtonPressed}>Search</button>
            </form>
            <p>Name: {name}</p>
            <p>Price Max: {priceMax}</p>
            <p>Type: {type}</p>
            <p>Brand: {brand}</p>
        </div>
    )
}

export default SearchBar;