import { Component } from "react";
const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
// o console log foi adicionado para facilitar a compreensão
class List extends Component {
    render (){
        const items = shoppingList.map((item,index) => {
            return (<li key ={index}>{ item }</li>);
          });
    return (
        <div>
            <h1>Lista de compras</h1>
            <ol>
                {items}
            </ol>
        </div>
    )
}
}

export default List;
