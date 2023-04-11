import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UserSSOTokenDeleteSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UserSSOTokenDeleteRequest extends SpeakeasyBase {
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
export declare class UserSSOTokenDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
