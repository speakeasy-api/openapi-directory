import { SpeakeasyBase } from "../../../internal/utils";
export declare class AddByocNumberApplicationJson extends SpeakeasyBase {
    carrier: string;
    phoneNumbers: string[];
    siteId?: string;
}
export declare class AddByocNumberMultipartFormData extends SpeakeasyBase {
    carrier: string;
    phoneNumbers: string[];
    siteId?: string;
}
export declare class AddByocNumberRequests extends SpeakeasyBase {
    object?: AddByocNumberApplicationJson;
    object1?: AddByocNumberMultipartFormData;
}
export declare class AddByocNumber201ApplicationJsonPhoneNumbers extends SpeakeasyBase {
    id?: string;
    number?: string;
}
export declare class AddByocNumber201ApplicationJson extends SpeakeasyBase {
    phoneNumbers?: AddByocNumber201ApplicationJsonPhoneNumbers[];
}
export declare class AddByocNumberRequest extends SpeakeasyBase {
    request?: AddByocNumberRequests;
}
export declare class AddByocNumberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    addBYOCNumber201ApplicationJSONObject?: AddByocNumber201ApplicationJson;
}
