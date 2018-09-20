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
        {
            controls.map(ctr => (
                <BuildControl key={ctr.label} labels={ctr.label}></BuildControl>
            ))
        }
    </div>
);

export default buildControls