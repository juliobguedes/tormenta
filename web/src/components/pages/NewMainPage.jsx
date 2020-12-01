import React, { useState } from 'react';

import PageWithHeader from './PageWithHeader';
import FeatList from '../featList/FeatList';
import Menu from '../menu/Menu';

const NewMainPage = () => {
    const [selected, setSelected] = useState({});
    const [headerText, setHeaderText] = useState('');
    const menuClick = (featType) => {
        selected[featType] = !selected[featType];
        setSelected({ ...selected});
    };
    return (
        <PageWithHeader headerSearch={(text) => setHeaderText(text)} className="app-main-screen-new">
            <Menu selectType={(featType) => menuClick(featType)} />
            <FeatList filters={selected} headerText={headerText} />
        </PageWithHeader>
    );
};

export default NewMainPage;
