import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho nome= "Pedro"  idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome= "João "  idade={16} nerd={false}></DiretaFilho>
        </div>
    )
}