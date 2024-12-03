import { errorApiResponses } from ".";

export const ValidateErrors = async (error: any) => {
  const errorApi = errorApiResponses(error);
  let message = 'Error desconocido, contacte al administrador';

  if (errorApi.message) message = errorApi.message;

  return {
    code: errorApi.code,
    message
  };
  
}