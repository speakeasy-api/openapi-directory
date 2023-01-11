import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateASharedLineGroupApplicationJson extends SpeakeasyBase {
    description?: string;
    displayName: string;
    extensionNumber?: number;
    siteId?: string;
}
export declare class CreateASharedLineGroupMultipartFormData extends SpeakeasyBase {
    description?: string;
    displayName: string;
    extensionNumber?: number;
    siteId?: string;
}
export declare class CreateASharedLineGroupRequests extends SpeakeasyBase {
    object?: CreateASharedLineGroupApplicationJson;
    object1?: CreateASharedLineGroupMultipartFormData;
}
export declare class CreateASharedLineGroupSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class CreateASharedLineGroupRequest extends SpeakeasyBase {
    request?: CreateASharedLineGroupRequests;
    security: CreateASharedLineGroupSecurity;
}
export declare class CreateASharedLineGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    createASharedLineGroup200ApplicationJSONAny?: any;
}
