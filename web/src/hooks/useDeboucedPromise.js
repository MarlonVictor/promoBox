export default function useDebouncedPromise(func, delay) {
    function handler(...params) {
        return new Promise((resolve, reject) => {
            window.setTimeout(async () => {
                try {
                    const response = await func(...params)
                    resolve(response)
    
                } catch(err) {
                    reject(err)
                }
            }, delay)
        })
    }
    
    return handler
}