import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCustomerAddressRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * Name of the schema the document to be created needs to be compliant with.
     */
    schema?: string;
    createUpdateAddressRequests: shared.CreateUpdateAddressRequests;
    /**
     * ID of the Document.
     */
    id: string;
}
export declare class UpdateCustomerAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    documentResponse?: shared.DocumentResponse;
}
