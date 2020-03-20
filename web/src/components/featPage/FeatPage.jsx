import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../lib/axiosInstance';

import './FeatPage.css';

const FeatPage = ({ match }) => {
    const [feat, setFeat] = useState();
    const { featId } = useParams();

    useEffect(() => {
        axios.get(`/feat/${featId}`).then(response => {
            console.log(Object.keys(response.data));
            setFeat(response.data);
        });
    }, []);

    if (!feat) {
        return (<div><p>Loading...</p></div>)
    }

    return (
        <div>
            <p>{feat.nome}</p>
            <p>{feat.livro}</p>
            <p>{feat.tipo}</p>
            <p>{feat.descricao}</p>
            <p>{feat.preRequisito}</p>
            <p>{feat.custo}</p>
            <p>{feat.beneficio}</p>
            <p>{feat.especial}</p>
            <p>{feat.normal}</p>
        </div>
    )
};

export default FeatPage;
