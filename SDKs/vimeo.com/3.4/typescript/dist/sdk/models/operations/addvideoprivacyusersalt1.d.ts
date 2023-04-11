import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddVideoPrivacyUsersAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
export declare class AddVideoPrivacyUsersAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the channel.
     */
    channelId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class AddVideoPrivacyUsersAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The users can now view the private video.
     */
    users?: shared.User[];
}
