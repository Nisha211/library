import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Face Moisturizer 01",
                "src": "https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/n/y/nyknet_hdbwgl.jpeg",
                "description": "Here is your favourite products",
                "content": "In love with this product.Its a boon for people with oily skin.It gets easily absorbed into the skin and doesn't give that sticky effect.It comes with a plastic tub.",
                "price": 950,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Foundation 02",
                "src": "https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/n/y/nyk_sgshf_goo.jpg",
                "description": "Here is your favourite products",
                "content": "In love with this product",
                "price": 345,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "concealer 03",
                "src": "https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/6/9/6902395685845.1_1.jpg",
                "description": "Here is your favourite products",
                "content": "In love with this product.",
                "price": 450,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "compact powder 04",
                "src": "https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/8/9/8904245702106_goo_1.jpg",
                "description": "Here is your favourite products",
                "content": "In love with this product",
                "price": 315,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Blender 05",
                "src": "https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/n/y/nypac00000317_1.jpg",
                "description": "Here is your favourite products",
                "content": "In love with this product",
                "price": 110,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Setting apray 06",
                "src": "https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/6/0/607710090040_1_1.jpg",
                "description": "Here is your favourite products",
                "content": "In love with this product",
                "price": 1117,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };
    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };
    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   


    

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}