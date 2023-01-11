import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTaxationItemsOfDebitMemoItemPathParams extends SpeakeasyBase {
    debitMemoId: string;
    dmitemid: string;
}
export declare class GetTaxationItemsOfDebitMemoItemQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetTaxationItemsOfDebitMemoItemHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetTaxationItemsOfDebitMemoItem200ApplicationJson extends SpeakeasyBase {
    data?: Record<string, any>[];
    nextPage?: string;
    success?: boolean;
}
export declare class GetTaxationItemsOfDebitMemoItemRequest extends SpeakeasyBase {
    pathParams: GetTaxationItemsOfDebitMemoItemPathParams;
    queryParams: GetTaxationItemsOfDebitMemoItemQueryParams;
    headers: GetTaxationItemsOfDebitMemoItemHeaders;
}
export declare class GetTaxationItemsOfDebitMemoItemResponse extends SpeakeasyBase {
    contentType: string;
    getTaxationItemsOfDebitMemoItem200ApplicationJSONObject?: GetTaxationItemsOfDebitMemoItem200ApplicationJson;
    headers: Record<string, string[]>;
    statusCode: number;
}
