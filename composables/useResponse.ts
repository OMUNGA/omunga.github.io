import type { IResponse } from "@/types";
export function useResponse() {
  function getResponse(ErrorResponse: any): IResponse {
    const response = ErrorResponse.gqlErrors[0].extensions.originalError;
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
