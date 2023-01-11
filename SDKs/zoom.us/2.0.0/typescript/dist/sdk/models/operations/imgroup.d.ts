import { SpeakeasyBase } from "../../../internal/utils";
export declare class ImGroupPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare enum ImGroup200ApplicationJsonTypeEnum {
    Normal = "normal",
    Shared = "shared",
    Restricted = "restricted"
}
/**
 * Group object.
**/
export declare class ImGroup200ApplicationJson extends SpeakeasyBase {
    id?: string;
    name?: string;
    searchByAccount?: boolean;
    searchByDomain?: boolean;
    searchByMaAccount?: boolean;
    totalMembers?: number;
    type?: ImGroup200ApplicationJsonTypeEnum;
}
export declare class ImGroupRequest extends SpeakeasyBase {
    pathParams: ImGroupPathParams;
}
export declare class ImGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    imGroup200ApplicationJSONObject?: ImGroup200ApplicationJson;
}
