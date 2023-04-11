import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddVideoPrivacyUsersSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class AddVideoPrivacyUsersRequest extends SpeakeasyBase {
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class AddVideoPrivacyUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The users can now view the private video.
     */
    users?: shared.User[];
}
