import React from 'react';
import Graphs from './MiniComponents/Graphs.js';
import Information from './MiniComponents/Information.js';
import Location from './MiniComponents/Location.js';
function PlantPage() {
    return (
        <div>
            <Graphs />
            <Information />
            <Location />
        </div>
    );
}

export default PlantPage;