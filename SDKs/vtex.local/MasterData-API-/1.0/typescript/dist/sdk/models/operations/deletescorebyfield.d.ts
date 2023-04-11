import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeletescorebyfieldRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand
     */
    accept: string;
    deletescorebyfieldRequest: shared.DeletescorebyfieldRequest;
    /**
     * Two letter word that identifies the data structure
     */
    acronym: string;
    /**
     * Name of the field to remove score from
     */
    fieldName: string;
    /**
     * Id of the document
     */
    id: string;
}
export declare class DeletescorebyfieldResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
