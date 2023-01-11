import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAllPaymentsSortEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetAllPaymentsQueryParams extends SpeakeasyBase {
    pageNumber?: string;
    pageSize?: string;
    paymentType?: string;
    purpose?: string;
    serviceProvider?: string;
    sort?: GetAllPaymentsSortEnum;
}
export declare class GetAllPaymentsHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetAllPaymentsSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class GetAllPayments200ApplicationJson extends SpeakeasyBase {
    nextPageAvailable: boolean;
    payments: any[];
}
export declare class GetAllPaymentsRequest extends SpeakeasyBase {
    queryParams: GetAllPaymentsQueryParams;
    headers: GetAllPaymentsHeaders;
    security: GetAllPaymentsSecurity;
}
export declare class GetAllPaymentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAllPayments200ApplicationJSONObject?: GetAllPayments200ApplicationJson;
    getAllPayments400ApplicationJSONAny?: any;
    getAllPayments401ApplicationJSONAny?: any;
    getAllPayments403ApplicationJSONAny?: any;
    getAllPayments404ApplicationJSONAny?: any;
    getAllPayments429ApplicationJSONAny?: any;
    getAllPayments500ApplicationJSONAny?: any;
}
