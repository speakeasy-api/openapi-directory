import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangeZrLocationPathParams extends SpeakeasyBase {
    roomId: string;
}
export declare class ChangeZrLocationApplicationJson extends SpeakeasyBase {
    locationId?: string;
}
export declare class ChangeZrLocationMultipartFormData extends SpeakeasyBase {
    locationId?: string;
}
export declare class ChangeZrLocationRequests extends SpeakeasyBase {
    object?: ChangeZrLocationApplicationJson;
    object1?: ChangeZrLocationMultipartFormData;
}
export declare class ChangeZrLocationSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ChangeZrLocationRequest extends SpeakeasyBase {
    pathParams: ChangeZrLocationPathParams;
    request?: ChangeZrLocationRequests;
    security: ChangeZrLocationSecurity;
}
export declare class ChangeZrLocationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    changeZRLocation204ApplicationJSONAny?: any;
}
