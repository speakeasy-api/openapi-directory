import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateBulkInventoryQueryParams extends SpeakeasyBase {
    feedType: string;
    shipNode?: string;
}
export declare class UpdateBulkInventoryHeaders extends SpeakeasyBase {
    authorization: string;
    wmCONSUMERCHANNELTYPE: string;
    wmQOSCORRELATIONID: string;
    wmSECACCESSTOKEN: string;
    wmSVCNAME: string;
}
export declare class UpdateBulkInventoryRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class UpdateBulkInventoryRequestBody extends SpeakeasyBase {
    file?: UpdateBulkInventoryRequestBodyFile;
}
export declare class UpdateBulkInventory200ApplicationJson extends SpeakeasyBase {
    additionalAttributes?: Record<string, any>;
    errors?: Record<string, any>;
    feedId?: string;
}
export declare class UpdateBulkInventoryRequest extends SpeakeasyBase {
    queryParams: UpdateBulkInventoryQueryParams;
    headers: UpdateBulkInventoryHeaders;
    request: UpdateBulkInventoryRequestBody;
}
export declare class UpdateBulkInventoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateBulkInventory200ApplicationJSONObject?: UpdateBulkInventory200ApplicationJson;
}
