import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MatchMultipleRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    requestBody: any[][];
    /**
     * Name of the VTEX account. Used as part of the URL
     */
    accountName: string;
    /**
     * This field refers to the operation you choose to apply to received SKUs. Values include: newproduct, skuassociation, productassociation or deny.
     */
    actionName: string;
}
export declare class MatchMultipleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
