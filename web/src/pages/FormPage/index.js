import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';

import FormInput from '../../components/FormInput';
import Footer from '../../components/Footer';

import useApi from '../../hooks/useApi';

const initialValue = { //Iniciando o objeto com valores vazios
    title: "",
    url: "",
    imageUrl: "",
    price: ""
}

const FormPage = () => {
    const { id } = useParams()
    const [values, setValues] = useState( id ? null : initialValue)
    const history = useHistory()

    const [load] = useApi({
        url: `/promotions/${id}`,
        method: 'get',
        onCompleted: res => {
            setValues(res.data)
        }
    })

    const [save, saveInfo] = useApi({
        url: id ? `/promotions/${id}` : `/promotions`,
        method: id ? 'put' : 'post',
        data: values,
        onCompleted: res => {
            if(!res.error) {
                history.push('/')
            }
        } 
    })

    function onChange(event) {
        const { name, value } = event.target
        setValues({...values, [name]: value}) //Criando um novo objeto mudando somente a propriedade indicada
    }

    function onSubmit(event) { //Passando os valores do form para a api
        event.preventDefault()
        save()
    }

    useEffect(() => { //Pegar a promoção pelo id
        if(id) {
            load()
        }
    }, [id])


    return (
        <div className="bg-white min-vh-100 py-3 pb-0 shadow position-relative m-auto">
            <div className="container-fluid w-75 pb-3 m-auto">
                <h1 className="text-center py-3 logo">PromoBox</h1>

                <h6 className="py-2">
                    { id ? 'Editando Promoção:' : 'Nova Promoção:' }
                </h6>

                {!values ? (
                    <div>Loading...</div>

                ) : (
                    <>
                        {saveInfo.loading 
                            ? (<span className="text-center text-secondary">Salvando...</span>) 
                            : (
                                <form onSubmit={onSubmit}>
                                    <FormInput id="title" type="text" label="Título" func={onChange} value={id ? values.title : null}/>
                                    <FormInput id="url" type="text" label="Link" func={onChange} value={id ? values.url : null}/>
                                    <FormInput id="imageUrl" type="text" label="Imagem (URL)" func={onChange} value={id ? values.imageUrl : null}/>
                                    <FormInput id="price" type="text" label="Preço" func={onChange} value={id ? values.price : null}/>

                                    <div className="d-flex mt-5">
                                        <Link to="/" className="btn w-25 mr-1 back">{/* Voltar para MainPage */}
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-return-left" fill="currentColor">
                                                <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                                            </svg>
                                        </Link>

                                        <button type="submit" className="btn text-white w-75 send ml-1">Salvar</button>  
                                    </div>  
                                </form>
                            )
                        }
                    </>
                )}
            </div>
            <Footer/>
        </div>
    )
};

export default FormPage;