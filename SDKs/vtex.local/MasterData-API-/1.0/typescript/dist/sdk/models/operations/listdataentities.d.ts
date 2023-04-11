import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListdataentitiesRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
}
export declare class ListdataentitiesResponse extends SpeakeasyBase {
    contentType: string;
    listdataentities?: shared.Listdataentity[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
