import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTaxationItemsOfCreditMemoItemPathParams extends SpeakeasyBase {
    cmitemid: string;
    creditMemoId: string;
}
export declare class GetTaxationItemsOfCreditMemoItemQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetTaxationItemsOfCreditMemoItemHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetTaxationItemsOfCreditMemoItem200ApplicationJson extends SpeakeasyBase {
    data?: Record<string, any>[];
    nextPage?: string;
    success?: boolean;
}
export declare class GetTaxationItemsOfCreditMemoItemRequest extends SpeakeasyBase {
    pathParams: GetTaxationItemsOfCreditMemoItemPathParams;
    queryParams: GetTaxationItemsOfCreditMemoItemQueryParams;
    headers: GetTaxationItemsOfCreditMemoItemHeaders;
}
export declare class GetTaxationItemsOfCreditMemoItemResponse extends SpeakeasyBase {
    contentType: string;
    getTaxationItemsOfCreditMemoItem200ApplicationJSONObject?: GetTaxationItemsOfCreditMemoItem200ApplicationJson;
    headers: Record<string, string[]>;
    statusCode: number;
}
