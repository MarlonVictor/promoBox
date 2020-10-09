import React, { useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';

import { postPromotion } from '../../services/api';
import FormInput from '../../components/FormInput';


const initialValue = { //Iniciando o objeto com valores vazios
    title: "",
    url: "",
    imageUrl: "",
    price: ""
}

const FormPage = () => {
    //const { id } = useParams()
    const [values, setValues] = useState(initialValue)
    const history = useHistory()

    function onChange(event) {
        const { name, value } = event.target
        setValues({...values, [name]: value})//Criando um novo objeto mudando somente a propriedade indicada
    }

    function onSubmit(event) {
        event.preventDefault()
        postPromotion(values).then(res => history.push('/'))//Request passando os valores do form para a api
    }


    return (
        <div className="bg-white min-vh-100 py-3 pb-0 shadow position-relative">
            <div className="container-fluid w-75 pb-3 m-auto">
                <h1 className="text-center py-3 logo">PromoBox</h1>
                <h6 className="py-2">Nova Promoção:</h6>

                <form onSubmit={onSubmit}>
                    <FormInput id="title" type="text" label="Título" func={onChange}/>
                    <FormInput id="url" type="text" label="Link" func={onChange}/>
                    <FormInput id="imageUrl" type="text" label="Imagem (URL)" func={onChange}/>
                    <FormInput id="price" type="text" label="Preço" func={onChange}/>

                    <div className="d-flex mt-5">
                        <Link to="/" className="btn w-25 mr-1 back">{/* Voltar para MainPage */}
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-return-left" fill="currentColor">
                                <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                        </Link>

                        <button type="submit" className="btn text-white w-75 send ml-1">Salvar</button>  
                    </div>
                </form>
            </div>
        </div>  
    )
};

export default FormPage;