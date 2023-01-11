import { SpeakeasyBase } from "../../../internal/utils";
export declare class AddAutoReceptionistApplicationJson extends SpeakeasyBase {
    name: string;
    siteId?: string;
}
export declare class AddAutoReceptionistMultipartFormData extends SpeakeasyBase {
    name: string;
    siteId?: string;
}
export declare class AddAutoReceptionistRequests extends SpeakeasyBase {
    object?: AddAutoReceptionistApplicationJson;
    object1?: AddAutoReceptionistMultipartFormData;
}
export declare class AddAutoReceptionist201ApplicationJson extends SpeakeasyBase {
    extensionNumber?: number;
    id?: string;
    name?: string;
}
export declare class AddAutoReceptionistRequest extends SpeakeasyBase {
    request?: AddAutoReceptionistRequests;
}
export declare class AddAutoReceptionistResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    addAutoReceptionist201ApplicationJSONObject?: AddAutoReceptionist201ApplicationJson;
}
