import type { IResponse } from "@/types";
export function useResponse() {
  function getResponse(ErrorResponse: any): IResponse {
    return {
      statusCode: 404,
      message: ErrorResponse.gqlErrors[0].message,
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
