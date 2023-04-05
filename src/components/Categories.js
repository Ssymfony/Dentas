import React, {Component} from "react"

export class Categories extends Component{
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'consultation',
                    name: 'Консультация'
                },
                {
                    key: 'Anesthesia',
                    name: 'Обезболивание'
                },
                {
                    key: 'Diagnostics',
                    name: 'Диагностика'
                },
                {
                    key: 'Therapeutic reception',
                    name: 'Терапевтический прием'
                },
                {
                    key: 'Caries treatment',
                    name: 'Лечение осложненного кариеса (пульпита, периодонтита)'
                },
            ]
        }
    }
    render() {
        return(
        <div className='categories'>
            {this.state.categories.map(el => (
                <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
        )
    }
}