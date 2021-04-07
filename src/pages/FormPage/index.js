import React, { useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { Formik, Form } from 'formik';

import FormInput from '../../components/FormInput';
import Footer from '../../components/Footer';
import SkeletonForm from '../../components/SkeletonForm';

import useApi from '../../hooks/useApi';
import schema from './schema';


const initialValue = { //Iniciando o objeto com valores vazios
    title: "",
    url: "",
    imageUrl: "",
    price: ""
}

const FormPage = () => {
    const { id } = useParams()
    const history = useHistory()

    const [load, loadInfo] = useApi({
        url: `/promotions/${id}`,
        method: 'get'
    })

    const values = id ? loadInfo.data : initialValue

    const [save, saveInfo] = useApi({
        url: id ? `/promotions/${id}` : `/promotions`,
        method: id ? 'put' : 'post',
        onCompleted: res => {
            if(!res.error) {
                history.push('/')
            }
        } 
    })

    useEffect(() => { //Pegar a promoção pelo id
        if(id) {
            load()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    function onSubmit(formValues) { //Passando os valores do form para a api
        save({
            data: formValues
        })
    }


    return (
        <div className="bg-white min-vh-100 py-3 pb-0 shadow position-relative m-auto">
            <div className="container-fluid w-75 pb-3 m-auto">
                <h1 className="text-center py-3 logo">PromoBox</h1>

                <h6 className="py-2">
                    { id ? 'Editando Promoção:' : 'Nova Promoção:' }
                </h6>

                {!values ? (
                    <SkeletonForm />

                ) : (
                    <>
                        {saveInfo.loading 
                            ? (
                                <main className="d-flex justify-content-center mt-5 pt-5">
                                    <div className="spinner-border text-secondary text-center" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </main>
                            ) 
                            : (
                                <Formik 
                                    initialValues={values}
                                    validationSchema={schema}
                                    onSubmit={onSubmit}
                                    render={({ errors }) => (
                                        <Form>
                                            <FormInput id="title"    type="text" error={errors.title}    label="Título"       />
                                            <FormInput id="url"      type="text" error={errors.url}      label="Link"         />
                                            <FormInput id="imageUrl" type="text" error={errors.imageUrl} label="Imagem (URL)" />
                                            <FormInput id="price"    type="text" error={errors.price}    label="Preço"        />

                                            <div className="d-flex mt-5">
                                                <Link to="/" className="btn w-25 mr-1 back">{/* Voltar para MainPage */}
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-return-left" fill="currentColor">
                                                        <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                                                    </svg>
                                                </Link>

                                                <button type="submit" className="btn text-white w-75 send ml-1">Salvar</button>  
                                            </div>  
                                        </Form>
                                    )}
                                />
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