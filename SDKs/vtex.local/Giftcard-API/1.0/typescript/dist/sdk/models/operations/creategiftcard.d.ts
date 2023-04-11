import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateGiftCardRequest extends SpeakeasyBase {
    /**
     * Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json
     */
    accept: string;
    /**
     * The Media type of the body of the request. Default value for payment provider protocol is application/json
     */
    contentType: string;
    createGiftCardRequest: shared.CreateGiftCardRequest;
    /**
     * The AppKey configured by the merchant
     */
    xVTEXAPIAppKey: string;
    /**
     * The AppToken configured by the merchant
     */
    xVTEXAPIAppToken: string;
}
export declare class CreateGiftCardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    response?: shared.Response;
}
