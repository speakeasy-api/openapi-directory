import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UserorderslistRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * Customer email.
     */
    clientEmail: string;
    /**
     * Page number for result pagination.
     */
    page: string;
    /**
     * Page quantity for result pagination.
     */
    perPage: string;
}
export declare class UserorderslistResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    userorderslist?: shared.Userorderslist;
}
