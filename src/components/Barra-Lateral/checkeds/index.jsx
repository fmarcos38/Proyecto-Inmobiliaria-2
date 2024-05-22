import React, { useState } from 'react';
import './estilos.css';

const PropertyFilter = ({ properties }) => {
    const [filters, setFilters] = useState({
        forSale: false,
        forRent: false,
    });

    const handleFilterChange = (event) => {
        const { name, checked } = event.target;
        setFilters({
            ...filters,
            [name]: checked,
        });
    };

    const filteredProperties = properties.filter(property => {
        if (!filters.forSale && !filters.forRent) {
            return true;
        }
        if (filters.forSale && property.type === 'forSale') {
            return true;
        }
        if (filters.forRent && property.type === 'forRent') {
            return true;
        }
        return false;
    });

    return (
        <div className="property-filter">
            <div className="filter-options">
                <label>
                    <input
                        type="checkbox"
                        name="forSale"
                        checked={filters.forSale}
                        onChange={handleFilterChange}
                    />
                    En Venta
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="forRent"
                        checked={filters.forRent}
                        onChange={handleFilterChange}
                    />
                    En Alquiler
                </label>
            </div>
            <div className="property-list">
                {filteredProperties.map(property => (
                    <div key={property.id} className="property-item">
                        <h3>{property.nombre}</h3>
                        <p>Tipo: {property.tipo === 'forSale' ? 'En Venta' : 'En Alquiler'}</p>
                        <p>Precio: ${property.precio.toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PropertyFilter;
