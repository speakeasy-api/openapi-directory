import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddVideoToGroupSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class AddVideoToGroupRequest extends SpeakeasyBase {
    /**
     * The ID of the group.
     */
    groupId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class AddVideoToGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * * The video is already in the group.
     *
     * @remarks
     * * The user can't add videos to the group.
     */
    legacyError?: shared.LegacyError;
    /**
     * The video was added.
     */
    video?: shared.Video;
}
