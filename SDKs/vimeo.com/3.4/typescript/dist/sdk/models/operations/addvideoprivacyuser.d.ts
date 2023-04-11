import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddVideoPrivacyUserSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class AddVideoPrivacyUserRequest extends SpeakeasyBase {
    /**
     * The ID of the user.
     */
    userId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class AddVideoPrivacyUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The video doesn't have a user-defined access list.
     */
    legacyError?: shared.LegacyError;
    /**
     * The user can now view the private video.
     */
    user?: shared.User;
}
