import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGiftCardusingJSONRequest extends SpeakeasyBase {
    /**
     * Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json
     */
    accept: string;
    /**
     * The Media type of the body of the request. Default value for payment provider protocol is application/json
     */
    contentType: string;
    getGiftCardusingJSONRequest: shared.GetGiftCardusingJSONRequest;
    /**
     * PaginationB control.B ThisB queryB variableB mustB followB theB formatB _resources={from}-{to}_.
     */
    restRange?: string;
}
export declare class GetGiftCardusingJSONResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    response2?: shared.Response2;
}
