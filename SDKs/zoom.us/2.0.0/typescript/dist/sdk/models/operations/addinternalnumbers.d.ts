import { SpeakeasyBase } from "../../../internal/utils";
export declare class AddInternalNumbersPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare enum AddInternalNumbersApplicationJsonInternalNumbersLanguagesEnum {
    EnGb = "en-GB",
    EnUs = "en-US",
    DeDe = "de-DE"
}
export declare class AddInternalNumbersApplicationJsonInternalNumbers extends SpeakeasyBase {
    allowForExternalMeetings?: boolean;
    allowJoin?: boolean;
    country: string;
    displayNumber: string;
    labels: string;
    languages: AddInternalNumbersApplicationJsonInternalNumbersLanguagesEnum;
    number: string;
    type: number;
    visible?: boolean;
}
export declare class AddInternalNumbersApplicationJson extends SpeakeasyBase {
    internalNumbers?: AddInternalNumbersApplicationJsonInternalNumbers[];
}
export declare enum AddInternalNumbersMultipartFormDataInternalNumbersLanguagesEnum {
    EnGb = "en-GB",
    EnUs = "en-US",
    DeDe = "de-DE"
}
export declare class AddInternalNumbersMultipartFormDataInternalNumbers extends SpeakeasyBase {
    allowForExternalMeetings?: boolean;
    allowJoin?: boolean;
    country: string;
    displayNumber: string;
    labels: string;
    languages: AddInternalNumbersMultipartFormDataInternalNumbersLanguagesEnum;
    number: string;
    type: number;
    visible?: boolean;
}
export declare class AddInternalNumbersMultipartFormData1 extends SpeakeasyBase {
    internalNumbers?: AddInternalNumbersMultipartFormDataInternalNumbers[];
}
export declare class AddInternalNumbersRequests extends SpeakeasyBase {
    object?: AddInternalNumbersApplicationJson;
    object1?: AddInternalNumbersMultipartFormData1;
}
export declare enum AddInternalNumbers201ApplicationJsonInternalNumbersLanguagesEnum {
    EnGb = "en-GB",
    EnUs = "en-US",
    DeDe = "de-DE"
}
export declare class AddInternalNumbers201ApplicationJsonInternalNumbers extends SpeakeasyBase {
    allowForExternalMeetings?: boolean;
    allowJoin?: boolean;
    country: string;
    displayNumber: string;
    id?: string;
    labels: string;
    languages: AddInternalNumbers201ApplicationJsonInternalNumbersLanguagesEnum;
    number: string;
    type: number;
    visible?: boolean;
}
export declare class AddInternalNumbers201ApplicationJson extends SpeakeasyBase {
    internalNumbers?: AddInternalNumbers201ApplicationJsonInternalNumbers[];
}
export declare class AddInternalNumbersRequest extends SpeakeasyBase {
    pathParams: AddInternalNumbersPathParams;
    request?: AddInternalNumbersRequests;
}
export declare class AddInternalNumbersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    addInternalNumbers201ApplicationJSONObject?: AddInternalNumbers201ApplicationJson;
}
