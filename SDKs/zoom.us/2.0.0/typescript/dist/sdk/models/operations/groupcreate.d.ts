import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupCreateApplicationJson extends SpeakeasyBase {
    name?: string;
}
export declare class GroupCreateMultipartFormData extends SpeakeasyBase {
    name?: string;
}
export declare class GroupCreateRequests extends SpeakeasyBase {
    object?: GroupCreateApplicationJson;
    object1?: GroupCreateMultipartFormData;
}
export declare class GroupCreateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class GroupCreate201ApplicationJson extends SpeakeasyBase {
    id?: string;
    name?: string;
    totalMembers?: number;
}
export declare class GroupCreateRequest extends SpeakeasyBase {
    request: GroupCreateRequests;
    security: GroupCreateSecurity;
}
export declare class GroupCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    groupCreate201ApplicationJSONObject?: GroupCreate201ApplicationJson;
}
