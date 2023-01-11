import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImGroupMembersCreatePathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class ImGroupMembersCreateApplicationJsonMembers extends SpeakeasyBase {
    email?: string;
    id?: string;
}
export declare class ImGroupMembersCreateApplicationJson extends SpeakeasyBase {
    members?: ImGroupMembersCreateApplicationJsonMembers[];
}
export declare class ImGroupMembersCreateMultipartFormDataMembers extends SpeakeasyBase {
    email?: string;
    id?: string;
}
export declare class ImGroupMembersCreateMultipartFormData1 extends SpeakeasyBase {
    members?: ImGroupMembersCreateMultipartFormDataMembers[];
}
export declare class ImGroupMembersCreateRequests extends SpeakeasyBase {
    object?: ImGroupMembersCreateApplicationJson;
    object1?: ImGroupMembersCreateMultipartFormData1;
}
export declare class ImGroupMembersCreateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ImGroupMembersCreateRequest extends SpeakeasyBase {
    pathParams: ImGroupMembersCreatePathParams;
    request: ImGroupMembersCreateRequests;
    security: ImGroupMembersCreateSecurity;
}
export declare class ImGroupMembersCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    imGroupMembersCreate201ApplicationJSONAny?: any;
}
