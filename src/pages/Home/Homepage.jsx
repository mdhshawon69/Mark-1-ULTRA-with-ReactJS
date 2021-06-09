/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import InfoSection from '../../Components/InfoSection/InfoSection';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';

const Homepage = () => (
    <div>
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
        <InfoSection {...homeObjFour} />
    </div>
);

export default Homepage;
