import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PriceBulkUploadsFeedTypeEnum {
    Price = "price",
    CptSellerEligibility = "CPT_SELLER_ELIGIBILITY"
}
export declare class PriceBulkUploadsQueryParams extends SpeakeasyBase {
    feedType: PriceBulkUploadsFeedTypeEnum;
}
export declare class PriceBulkUploadsHeaders extends SpeakeasyBase {
    authorization: string;
    wmCONSUMERCHANNELTYPE?: string;
    wmQOSCORRELATIONID: string;
    wmSECACCESSTOKEN: string;
    wmSVCNAME: string;
}
export declare class PriceBulkUploadsRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class PriceBulkUploadsRequestBody extends SpeakeasyBase {
    file?: PriceBulkUploadsRequestBodyFile;
}
export declare class PriceBulkUploads200ApplicationJson extends SpeakeasyBase {
    additionalAttributes?: Record<string, any>;
    errors?: Record<string, any>;
    feedId?: string;
}
export declare class PriceBulkUploadsRequest extends SpeakeasyBase {
    queryParams: PriceBulkUploadsQueryParams;
    headers: PriceBulkUploadsHeaders;
    request: PriceBulkUploadsRequestBody;
}
export declare class PriceBulkUploadsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    priceBulkUploads200ApplicationJSONObject?: PriceBulkUploads200ApplicationJson;
}
