import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PriceBulkUploadsRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
/**
 * The request body consists of a Feed file attached to the request based on the feedType selected
 */
export declare class PriceBulkUploadsRequestBody extends SpeakeasyBase {
    /**
     * Feed file to upload
     */
    file: PriceBulkUploadsRequestBodyFile;
}
/**
 * The feed Type
 */
export declare enum PriceBulkUploadsFeedTypeEnum {
    Price = "price",
    CptSellerEligibility = "CPT_SELLER_ELIGIBILITY"
}
export declare class PriceBulkUploadsRequest extends SpeakeasyBase {
    /**
     * The request body consists of a Feed file attached to the request based on the feedType selected
     */
    requestBody: PriceBulkUploadsRequestBody;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding
     */
    wmConsumerChannelType?: string;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID
     */
    wmQosCorrelationId: string;
    /**
     * The access token retrieved in the Token API call
     */
    wmSecAccessToken: string;
    /**
     * Walmart Service Name
     */
    wmSvcName: string;
    /**
     * The feed Type
     */
    feedType: PriceBulkUploadsFeedTypeEnum;
}
/**
 * Successful Operation
 */
export declare class PriceBulkUploads200ApplicationXML extends SpeakeasyBase {
    additionalAttributes?: Record<string, any>;
    errors?: Record<string, any>;
    /**
     * A unique ID, returned from the Bulk Upload API, used for tracking the feed file
     */
    feedId?: string;
}
/**
 * Successful Operation
 */
export declare class PriceBulkUploads200ApplicationJSON extends SpeakeasyBase {
    additionalAttributes?: Record<string, any>;
    errors?: Record<string, any>;
    /**
     * A unique ID, returned from the Bulk Upload API, used for tracking the feed file
     */
    feedId?: string;
}
export declare class PriceBulkUploadsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Operation
     */
    priceBulkUploads200ApplicationJSONObject?: PriceBulkUploads200ApplicationJSON;
}
