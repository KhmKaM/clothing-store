import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'outerwear',
                    name: 'Верхняя одежда'
                },                {
                    key: 'singlet',
                    name: 'Майка, футболка, тельняшка'
                },
                {
                    key: 'pants',
                    name: 'Брюки'
                }
            ]
        }
        }
    render() {
        return (
        <div className='categories'>
            {this.state.categories.map(el => (
                <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
        )
    }
}

export default Categories