import { SpeakeasyBase } from "../../../internal/utils";
export declare class AddCalloutCountriesPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class AddCalloutCountriesApplicationJsonCalloutCountries extends SpeakeasyBase {
    id: string;
}
export declare class AddCalloutCountriesApplicationJson extends SpeakeasyBase {
    calloutCountries: AddCalloutCountriesApplicationJsonCalloutCountries[];
}
export declare class AddCalloutCountriesMultipartFormDataCalloutCountries extends SpeakeasyBase {
    id: string;
}
export declare class AddCalloutCountriesMultipartFormData1 extends SpeakeasyBase {
    calloutCountries: AddCalloutCountriesMultipartFormDataCalloutCountries[];
}
export declare class AddCalloutCountriesRequests extends SpeakeasyBase {
    object?: AddCalloutCountriesApplicationJson;
    object1?: AddCalloutCountriesMultipartFormData1;
}
export declare class AddCalloutCountries201ApplicationJsonCalloutCountries extends SpeakeasyBase {
    code?: string;
    id?: string;
    name?: string;
}
export declare class AddCalloutCountries201ApplicationJson extends SpeakeasyBase {
    calloutCountries?: AddCalloutCountries201ApplicationJsonCalloutCountries[];
}
export declare class AddCalloutCountriesRequest extends SpeakeasyBase {
    pathParams: AddCalloutCountriesPathParams;
    request?: AddCalloutCountriesRequests;
}
export declare class AddCalloutCountriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    addCalloutCountries201ApplicationJSONObject?: AddCalloutCountries201ApplicationJson;
}
