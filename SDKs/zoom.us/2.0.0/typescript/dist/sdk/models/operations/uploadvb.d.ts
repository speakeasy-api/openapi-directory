import { SpeakeasyBase } from "../../../internal/utils";
export declare class UploadVbPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class UploadVbRequestBody extends SpeakeasyBase {
    file?: string;
}
export declare class UploadVb201ApplicationJson extends SpeakeasyBase {
    id?: string;
    isDefault?: boolean;
    name?: string;
    size?: string;
    type?: string;
}
export declare class UploadVbRequest extends SpeakeasyBase {
    pathParams: UploadVbPathParams;
    request?: UploadVbRequestBody;
}
export declare class UploadVbResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    uploadVB201ApplicationJSONObject?: UploadVb201ApplicationJson;
}
