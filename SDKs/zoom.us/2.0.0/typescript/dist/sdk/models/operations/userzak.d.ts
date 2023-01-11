import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserZakSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UserZak200ApplicationJson extends SpeakeasyBase {
    token?: string;
}
export declare class UserZakRequest extends SpeakeasyBase {
    security: UserZakSecurity;
}
export declare class UserZakResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    userZak200ApplicationJSONObject?: UserZak200ApplicationJson;
}
