import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Getfeedorderstatus1Request extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    /**
     * Lot quantity to retrieve. Maximum accepted value is 10.
     */
    maxlot: string;
}
export declare class Getfeedorderstatus1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getfeedorderstatuses?: shared.Getfeedorderstatus[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
