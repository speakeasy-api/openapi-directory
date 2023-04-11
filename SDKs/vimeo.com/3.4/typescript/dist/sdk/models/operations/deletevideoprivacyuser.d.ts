import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteVideoPrivacyUserSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteVideoPrivacyUserRequest extends SpeakeasyBase {
    /**
     * The ID of the user.
     */
    userId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class DeleteVideoPrivacyUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The video isn't set to a user-defined access list.
     */
    legacyError?: shared.LegacyError;
}
