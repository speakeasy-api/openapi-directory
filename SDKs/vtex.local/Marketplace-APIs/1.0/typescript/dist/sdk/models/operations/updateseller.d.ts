import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateSellerRequestBody extends SpeakeasyBase {
    /**
     * The action being performed, which is always going to be `replace`.
     */
    operation: string;
    /**
     * The path in which the value is being updated. It follows the standardized format `/{field}`, where `{field}` is the path's name.
     */
    path: string;
    /**
     * The value that is being updated. Notice that the type will depend on the path that is being updated.
     */
    value: boolean;
}
export declare class UpdateSellerRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * array of objects
     */
    requestBody?: UpdateSellerRequestBody[];
    /**
     * Name of the VTEX account that belongs to the marketplace.
     */
    accountName: string;
    /**
     * Environment to use. Used as part of the URL.
     */
    environment: string;
    /**
     * A string that identifies the seller in the marketplace. This ID must be created by the marketplace
     */
    sellerId: string;
}
export declare class UpdateSellerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
