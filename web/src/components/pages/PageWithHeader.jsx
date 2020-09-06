import React from 'react';
import Header from '../header/Header';

const PageWithHeader = ({ children, headerSearch }) => (
    <div className="app-screen">
        <Header headerSearch={headerSearch} />
        <div className="app-main-screen">
            {children}
        </div>
    </div>
);

export default PageWithHeader;
