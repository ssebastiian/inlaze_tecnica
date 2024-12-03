
export const errorApiResponses = (error:any) => {
    if (error.response) {

        if(error.response.status >= 300 && error.response.status <= 500){
            return {
                header: error.response.headers,
                code: error.response.status,
                message:  error.response.data.message
            };
        };

        return {
            header: error.response.headers,
            data: error.response.data,
            message: error.response.status,
        };
    } 
    
    if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        return {
            code: 0,
            message: error.request
        }
    }
    
    if(error.message){
        // Something happened in setting up the request that triggered an Error
        return {
            code: 0,
            message: error.message
        }
    }

    return {
        code: 0,
        message: error.config
    }
};