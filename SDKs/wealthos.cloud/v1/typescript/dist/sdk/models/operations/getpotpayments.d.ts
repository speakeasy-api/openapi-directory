import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPotPaymentsPathParams extends SpeakeasyBase {
    potId: string;
}
export declare class GetPotPaymentsQueryParams extends SpeakeasyBase {
    pageNumber?: string;
    pageSize?: string;
    paymentType?: string;
    purpose?: string;
    serviceProvider?: string;
}
export declare class GetPotPaymentsHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetPotPaymentsSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class GetPotPayments200ApplicationJson extends SpeakeasyBase {
    nextPageAvailable: boolean;
    payments: any[];
    potId: string;
}
export declare class GetPotPaymentsRequest extends SpeakeasyBase {
    pathParams: GetPotPaymentsPathParams;
    queryParams: GetPotPaymentsQueryParams;
    headers: GetPotPaymentsHeaders;
    security: GetPotPaymentsSecurity;
}
export declare class GetPotPaymentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPotPayments200ApplicationJSONObject?: GetPotPayments200ApplicationJson;
    getPotPayments401ApplicationJSONAny?: any;
    getPotPayments403ApplicationJSONAny?: any;
    getPotPayments404ApplicationJSONAny?: any;
    getPotPayments429ApplicationJSONAny?: any;
    getPotPayments500ApplicationJSONAny?: any;
}
