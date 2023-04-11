import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Customer's profile information.
 */
export declare class AddClientProfileRequestBody extends SpeakeasyBase {
    /**
     * Corporate document, if the customer is a legal entity.
     */
    corporateDocument?: string;
    /**
     * Company name, if the customer is a legal entity.
     */
    corporateName?: string;
    /**
     * Corporate phone number, if the customer is a legal entity.
     */
    corporatePhone?: string;
    /**
     * Document number informed by the customer.
     */
    document: string;
    /**
     * Type of the document informed by the customer.
     */
    documentType: string;
    /**
     * Customer's email address.
     */
    email: string;
    /**
     * Customer's first name.
     */
    firstName: string;
    /**
     * `true` if the customer is a legal entity.
     */
    isCorporate?: boolean;
    /**
     * Customer's last name.
     */
    lastName: string;
    /**
     * Customer's phone number.
     */
    phone?: string;
    /**
     * State inscription, if the customer is a legal entity.
     */
    stateInscription?: string;
    /**
     * Trade name, if the customer is a legal entity.
     */
    tradeName?: string;
}
export declare class AddClientProfileRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody: AddClientProfileRequestBody;
    /**
     * ID of the orderForm that will receive client profile information.
     */
    orderFormId: string;
}
export declare class AddClientProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
