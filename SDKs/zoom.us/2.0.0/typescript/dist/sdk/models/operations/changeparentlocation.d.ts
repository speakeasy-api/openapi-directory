import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangeParentLocationPathParams extends SpeakeasyBase {
    locationId: string;
}
export declare class ChangeParentLocationApplicationJson extends SpeakeasyBase {
    parentLocationId?: string;
}
export declare class ChangeParentLocationMultipartFormData extends SpeakeasyBase {
    parentLocationId?: string;
}
export declare class ChangeParentLocationRequests extends SpeakeasyBase {
    object?: ChangeParentLocationApplicationJson;
    object1?: ChangeParentLocationMultipartFormData;
}
export declare class ChangeParentLocationSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ChangeParentLocationRequest extends SpeakeasyBase {
    pathParams: ChangeParentLocationPathParams;
    request?: ChangeParentLocationRequests;
    security: ChangeParentLocationSecurity;
}
export declare class ChangeParentLocationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    changeParentLocation204ApplicationJSONAny?: any;
}
