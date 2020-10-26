import { useState } from 'react';
import axios from 'axios';

const initialRequestInfo = {
    error: null,
    data: null,
    loading: false,
}

export default function useApi(config) {
    const [requestInfo, setRequestInfo] = useState(initialRequestInfo)

    async function call() {
        setRequestInfo({ //Passar o status de loading antes do fetch
            ...initialRequestInfo,
            loading: true
        })

        let response = null
        try {
            response = await axios({
                baseURL: "http://localhost:5000",
                ...config
            }) 
            setRequestInfo({ //Atualizando o initialRequestInfo com os dados buscados
                ...initialRequestInfo,
                data: response.data
            })

        } catch (error) {
            setRequestInfo({
                ...initialRequestInfo,
                error
            })
        }

        if(config.onCompleted) { //Se o processo estiver completo, atribui os dados a função onCompleted
            config.onCompleted(response)
        }
    }

    return [
        call,
        requestInfo
    ]
}