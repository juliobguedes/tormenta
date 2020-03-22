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
        return (
            <div className="feat-screen">
                <p className="feat-details">Loading...</p>
            </div>
        );
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
                {feat.preRequisito
                    ? <p>Pré-requisitos: {feat.preRequisito}</p>
                    : null}
                {feat.custo
                    ? <p>Custo: {feat.custo}</p>
                    : null}
                <p>Benefício: {feat.beneficio}</p>
                {feat.especial
                    ? <p>Especial: {feat.especial}</p>
                    : null}
                {feat.normal
                    ? <p>Normal: {feat.normal}</p>
                    : null}
            </div>
        </div>
    )
};

export default FeatPage;
