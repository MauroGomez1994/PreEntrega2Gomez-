const products = [
    {   
        id '1',
        name: 'Cemento',
        price: 10,
        img '',
        stock: 10,
        description: 'Description de Cemento'
    },
    
    {   
        id '2',
        name: 'Hierro',
        price: 20,
        img '',
        stock: 10,
        description: 'Description de Hierro'
    }

    {   
        id '3',
        name: 'Madera',
        price: 30,
        img '',
        stock: 10,
        description: 'Description de Madera'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}