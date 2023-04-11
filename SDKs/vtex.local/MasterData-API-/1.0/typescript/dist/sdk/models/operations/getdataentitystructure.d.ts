import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetdataentitystructureRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    /**
     * Identifies the kind of data
     */
    acronym: string;
}
export declare class GetdataentitystructureResponse extends SpeakeasyBase {
    contentType: string;
    getdataentityfields?: shared.Getdataentityfields;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
