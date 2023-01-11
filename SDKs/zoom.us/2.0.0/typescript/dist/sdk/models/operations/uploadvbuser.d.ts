import { SpeakeasyBase } from "../../../internal/utils";
export declare class UploadVBuserPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UploadVBuserRequestBody extends SpeakeasyBase {
    file?: string;
}
export declare class UploadVBuser201ApplicationJson extends SpeakeasyBase {
    id?: string;
    isDefault?: boolean;
    name?: string;
    size?: string;
    type?: string;
}
export declare class UploadVBuserRequest extends SpeakeasyBase {
    pathParams: UploadVBuserPathParams;
    request?: UploadVBuserRequestBody;
}
export declare class UploadVBuserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    uploadVBuser201ApplicationJSONObject?: UploadVBuser201ApplicationJson;
}
