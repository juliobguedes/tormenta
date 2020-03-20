import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GiReturnArrow as ReturnIcon } from 'react-icons/gi';

import axios from '../../lib/axiosInstance';

import './FeatPage.css';

const FeatPage = ({ match }) => {
    const [feat, setFeat] = useState();
    const { featId } = useParams();

    useEffect(() => {
        axios.get(`/feat/${featId}`).then(response => {
            setFeat(response.data);
        });
    }, []);

    if (!feat) {
        return (<div><p>Loading...</p></div>)
    }

    return (
        <div className="feat-screen">
            <div className="feat-icon">
                <Link to="/" className="feat-go-back">
                    <ReturnIcon className="icon" />
                </Link>
            </div>
            <div className="feat-details">
                <p>{feat.nome}</p>
                <p>Livro: {feat.livro}</p>
                <p>Tipo: {feat.tipo}</p>
                <p>Descrição: {feat.descricao}</p>
                <p>Pré-requisitos: {feat.preRequisito}</p>
                <p>Custo: {feat.custo}</p>
                <p>Benefício: {feat.beneficio}</p>
                <p>Especial: {feat.especial}</p>
                <p>Normal: {feat.normal}</p>
            </div>
        </div>
    )
};

export default FeatPage;
