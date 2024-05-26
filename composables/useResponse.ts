import type { IResponse } from "@/types";
export function useResponse() {
  function getResponse(ErrorResponse: any): IResponse {
    console.log({ ErrorResponse });
    let response;
    if (ErrorResponse.gqlErrors[0].extensions) {
      response = ErrorResponse.gqlErrors[0].extensions.originalError;
    } else if (ErrorResponse.gqlErrors[0].message) {
      response = {
        statusCode: ErrorResponse.statusCode,
        message: ErrorResponse.gqlErrors[0].message,
        data: {},
      };
    }
    return {
      statusCode: response.statusCode,
      message: response.message,
      data: {},
    };
  }
  function setResponse(
    statusCode: number,
    message: string,
    data: object
  ): IResponse {
    return {
      statusCode,
      message,
      data,
    };
  }

  return { getResponse, setResponse };
}
