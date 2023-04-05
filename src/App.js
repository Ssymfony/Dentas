import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import {Categories} from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"
class App extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                orders: [],
                currentItems: [],
                items: [
                    {id: 0,
                     title: 'Бесплатная конультация специалиста',
                     img:  'gn.jpg',
                     desc: '',
                     category: 'consultation',
                     price: '00.00'
                    },
                    {id: 1,
                        title: 'Аппликационная анестезия',
                        img: 'gg.jpg',
                        desc: 'Обезболивание',
                        category: 'Anesthesia',
                        price: '50.00'
                    },
                    {id: 2,
                        title: 'Инъекционная анестезия',
                        img: 'gg.jpg',
                        desc: 'Обезболивание',
                        category: 'Anesthesia',
                        price: '350.00'
                    },
                    {id: 3,
                        title: 'Радиовизиография (первичная), 1 снимок',
                        img: 'bn.jpg',
                        desc: 'Диагностика',
                        category: 'Diagnostics',
                        price: '150.00'
                    },
                    {id: 4,
                        title: 'Радиовизиография (повторная), 1 снимок',
                        img: 'bn.jpg',
                        desc: 'Диагностика',
                        category: 'Diagnostics',
                        price: '100.00'
                    },
                    {id: 5,
                        title: 'Лечение кариеса (кариес эмали)',
                        img: 'nn.jpg',
                        desc: 'Терапевтический прием',
                        category: 'Therapeutic reception',
                        price: '2500,00'
                    },
                    {id: 6,
                        title: 'Лечение кариеса (кариес дентина)',
                        img: 'nn.jpg',
                        desc: 'Терапевтический прием',
                        category: 'Therapeutic reception',
                        price: '3200,00'
                    },
                    {id: 7,
                        title: '-1 –о корневого',
                        img: 'ng.jpg',
                        desc: 'Лечение осложненного кариеса (пульпита, периодонтита',
                        category: 'Caries treatment',
                        price: '5100,00'
                    },
                    {id: 8,
                        title: '-2-ух корневого',
                        img: 'ng.jpg',
                        desc: 'Лечение осложненного кариеса (пульпита, периодонтита)',
                        category: 'Caries treatment',
                        price: '6500,00'
                    },
                    {id: 9,
                        title: '-3-ех корневого',
                        img: 'ng.jpg',
                        desc: 'Лечение осложненного кариеса (пульпита, периодонтита)',
                        category: 'Caries treatment',
                        price: '8100,00'
                    },
                ],
            showFullItem: false,
            fullItem:{}
        }
            this.state.currentItems = this.state.items
            this.addToOrder = this.addToOrder.bind(this)
            this.deleteOrder = this.deleteOrder.bind(this)
            this.chooseCategory = this.chooseCategory.bind(this)
            this.onShowItem = this.onShowItem.bind(this)
    }
    render() {
        return (
            <div className='wrapper'>
                <Header orders={this.state.orders}  onDelete={this.deleteOrder}/>
                <Categories chooseCategory={this.chooseCategory} />
                <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

                {this.state.ShowFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem}  item={this.state.fullItem} />}
                <Footer />
            </div>
        )
    }
    onShowItem(item) {
        this.setState({fullItem: item})
        this.setState({ ShowFullItem: !this.state.ShowFullItem})
    }
    chooseCategory(category){
        if(category === 'all'){
            this.setState({currentItems: this.state.items})
            return
        }
        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }
    deleteOrder(id){
       this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }
    addToOrder(item){
        let isInArray = false
        this.state.orders.forEach(el =>{
            if (el.id === item.id)
                isInArray = true
        })
    if(!isInArray)
    this.setState({orders: [...this.state.orders,item] })
    }
}
export default App;
