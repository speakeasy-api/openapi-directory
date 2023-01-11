import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserEmailQueryParams extends SpeakeasyBase {
    email: string;
}
export declare class UserEmailSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UserEmail200ApplicationJson extends SpeakeasyBase {
    existedEmail?: boolean;
}
export declare class UserEmailRequest extends SpeakeasyBase {
    queryParams: UserEmailQueryParams;
    security: UserEmailSecurity;
}
export declare class UserEmailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    userEmail200ApplicationJSONObject?: UserEmail200ApplicationJson;
}
