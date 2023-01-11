import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupUpdatePathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class GroupUpdateApplicationJson extends SpeakeasyBase {
    name?: string;
}
export declare class GroupUpdateMultipartFormData extends SpeakeasyBase {
    name?: string;
}
export declare class GroupUpdateRequests extends SpeakeasyBase {
    object?: GroupUpdateApplicationJson;
    object1?: GroupUpdateMultipartFormData;
}
export declare class GroupUpdateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class GroupUpdateRequest extends SpeakeasyBase {
    pathParams: GroupUpdatePathParams;
    request: GroupUpdateRequests;
    security: GroupUpdateSecurity;
}
export declare class GroupUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
