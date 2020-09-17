import React from 'react';
import Header from '../header/Header';

const PageWithHeader = ({ children, headerSearch, className }) => (
    <div className="app-screen">
        <Header headerSearch={headerSearch} />
        <div className={className}>
            {children}
        </div>
    </div>
);

export default PageWithHeader;
