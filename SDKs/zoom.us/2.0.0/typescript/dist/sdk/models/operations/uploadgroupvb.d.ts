import { SpeakeasyBase } from "../../../internal/utils";
export declare class UploadGroupVbPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class UploadGroupVbQueryParams extends SpeakeasyBase {
    fileIds?: string;
}
export declare class UploadGroupVbRequestBody extends SpeakeasyBase {
    file?: string;
}
export declare class UploadGroupVb201ApplicationJson extends SpeakeasyBase {
    id?: string;
    isDefault?: boolean;
    name?: string;
    size?: string;
    type?: string;
}
export declare class UploadGroupVbRequest extends SpeakeasyBase {
    pathParams: UploadGroupVbPathParams;
    queryParams: UploadGroupVbQueryParams;
    request?: UploadGroupVbRequestBody;
}
export declare class UploadGroupVbResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    uploadGroupVB201ApplicationJSONObject?: UploadGroupVb201ApplicationJson;
}
