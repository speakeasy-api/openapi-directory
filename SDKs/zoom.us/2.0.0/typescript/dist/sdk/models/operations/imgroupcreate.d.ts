import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ImGroupCreateApplicationJsonTypeEnum {
    Normal = "normal",
    Shared = "shared",
    Restricted = "restricted"
}
export declare class ImGroupCreateApplicationJson extends SpeakeasyBase {
    name?: string;
    searchByAccount?: boolean;
    searchByDomain?: boolean;
    searchByMaAccount?: boolean;
    type?: ImGroupCreateApplicationJsonTypeEnum;
}
export declare enum ImGroupCreateMultipartFormDataTypeEnum {
    Normal = "normal",
    Shared = "shared",
    Restricted = "restricted"
}
export declare class ImGroupCreateMultipartFormData extends SpeakeasyBase {
    name?: string;
    searchByAccount?: boolean;
    searchByDomain?: boolean;
    searchByMaAccount?: boolean;
    type?: ImGroupCreateMultipartFormDataTypeEnum;
}
export declare class ImGroupCreateRequests extends SpeakeasyBase {
    object?: ImGroupCreateApplicationJson;
    object1?: ImGroupCreateMultipartFormData;
}
export declare class ImGroupCreate201ApplicationJson extends SpeakeasyBase {
    id?: string;
    name?: string;
    searchByAccount?: boolean;
    searchByDomain?: boolean;
    searchByMaAccount?: boolean;
    totalMembers?: number;
}
export declare class ImGroupCreateRequest extends SpeakeasyBase {
    request: ImGroupCreateRequests;
}
export declare class ImGroupCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    imGroupCreate201ApplicationJSONObject?: ImGroupCreate201ApplicationJson;
}
