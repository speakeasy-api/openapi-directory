import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListInternalCalloutCountriesPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class ListInternalCalloutCountries200ApplicationJsonCalloutCountries extends SpeakeasyBase {
    code?: string;
    id?: string;
    name?: string;
}
export declare class ListInternalCalloutCountries200ApplicationJson extends SpeakeasyBase {
    calloutCountries?: ListInternalCalloutCountries200ApplicationJsonCalloutCountries[];
    totalRecords?: number;
}
export declare class ListInternalCalloutCountriesRequest extends SpeakeasyBase {
    pathParams: ListInternalCalloutCountriesPathParams;
}
export declare class ListInternalCalloutCountriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listInternalCalloutCountries200ApplicationJSONObject?: ListInternalCalloutCountries200ApplicationJson;
}
