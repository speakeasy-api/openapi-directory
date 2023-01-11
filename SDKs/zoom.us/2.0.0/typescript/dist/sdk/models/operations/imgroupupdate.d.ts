import { SpeakeasyBase } from "../../../internal/utils";
export declare class ImGroupUpdatePathParams extends SpeakeasyBase {
    groupId: string;
}
export declare enum ImGroupUpdateApplicationJsonTypeEnum {
    Normal = "normal",
    Shared = "shared",
    Restricted = "restricted"
}
export declare class ImGroupUpdateApplicationJson extends SpeakeasyBase {
    name?: string;
    searchByAccount?: boolean;
    searchByDomain?: boolean;
    searchByMaAccount?: boolean;
    type?: ImGroupUpdateApplicationJsonTypeEnum;
}
export declare enum ImGroupUpdateMultipartFormDataTypeEnum {
    Normal = "normal",
    Shared = "shared",
    Restricted = "restricted"
}
export declare class ImGroupUpdateMultipartFormData extends SpeakeasyBase {
    name?: string;
    searchByAccount?: boolean;
    searchByDomain?: boolean;
    searchByMaAccount?: boolean;
    type?: ImGroupUpdateMultipartFormDataTypeEnum;
}
export declare class ImGroupUpdateRequests extends SpeakeasyBase {
    object?: ImGroupUpdateApplicationJson;
    object1?: ImGroupUpdateMultipartFormData;
}
export declare class ImGroupUpdateRequest extends SpeakeasyBase {
    pathParams: ImGroupUpdatePathParams;
    request: ImGroupUpdateRequests;
}
export declare class ImGroupUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
