import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'}
]
const buildControls = (props) => (
    <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {
            controls.map(ctr => (
                <BuildControl 
                    added ={() => props.ingredientAdded(ctr.type)} 
                    removed = {() => props.ingredientRemoved(ctr.type)}
                    disable = {props.disable[ctr.type]}
                    key={ctr.label} 
                    labels={ctr.label}>
                </BuildControl>
            ))
        }
        <button 
            disabled={props.purchaseable}
            className={classes.OrderButton}>ORDER NOW</button>
    </div>
);

export default buildControls