import React, { useEffect, useState } from 'react';
import GoodsCards from './GoodsCard';
import c from './Products.module.css';
const Products = () => {
    const [fruits, setFruit] = useState([]);

    useEffect(() => {
        setFruit(require('./fruits.json').fruits)
    }, []);
    return (
        <div className="Products">
            <div className={c.container}>
                {fruits.map((fruit) => (
                    <GoodsCards key={fruit.id} props={fruit} />
                ))}
            </div>
        </div>
    );
};

export default Products;