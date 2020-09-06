import React, { useState } from 'react';

import PageWithHeader from './PageWithHeader';
import FeatList from '../featList/FeatList';
import Menu from '../menu/Menu';

const MainPage = () => {
    const [selected, setSelected] = useState({});
    const [headerText, setHeaderText] = useState('');
    const menuClick = (featType) => {
        selected[featType] = !selected[featType];
        setSelected({ ...selected});
    };
    return (
        <PageWithHeader headerSearch={(text) => setHeaderText(text)}>
            <Menu selectType={(featType) => menuClick(featType)} />
            <FeatList filters={selected} headerText={headerText} />
        </PageWithHeader>
    );
};

export default MainPage;
