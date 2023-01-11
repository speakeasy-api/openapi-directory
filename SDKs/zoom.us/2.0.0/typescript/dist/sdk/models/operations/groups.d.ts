import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * Group object.
**/
export declare class Groups200ApplicationJsonGroups extends SpeakeasyBase {
    id?: string;
    name?: string;
    totalMembers?: number;
}
/**
 * List of Groups.
**/
export declare class Groups200ApplicationJson extends SpeakeasyBase {
    groups?: Groups200ApplicationJsonGroups[];
    totalRecords?: number;
}
export declare class GroupsRequest extends SpeakeasyBase {
    security: GroupsSecurity;
}
export declare class GroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    groups200ApplicationJSONObject?: Groups200ApplicationJson;
}
