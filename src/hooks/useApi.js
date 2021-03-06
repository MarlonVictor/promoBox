import { useState } from 'react';
import axios from 'axios';

import useDeboucedPromise from './useDeboucedPromise';


const initialRequestInfo = {
    error: null,
    data: null,
    loading: false,
}

export default function useApi(config) {
    const [requestInfo, setRequestInfo] = useState(initialRequestInfo)
    const debouncedAxios = useDeboucedPromise(axios, config.debounceDelay)

    async function call(localConfig) {
        let response = null

        const finalConfig = {
            baseURL: 'https://promo-box-api.herokuapp.com/',
            ...config,
            ...localConfig,
        }

        if (!finalConfig.quietly) {
            setRequestInfo({ //Passar o status de loading antes do fetch
                ...initialRequestInfo,
                loading: true
            })
        }

        try {
            response = await debouncedAxios(finalConfig)
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

        return response
    }

    return [
        call,
        requestInfo
    ]
}