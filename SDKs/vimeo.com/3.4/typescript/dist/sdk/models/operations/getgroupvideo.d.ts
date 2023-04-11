import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGroupVideoRequest extends SpeakeasyBase {
    /**
     * The ID of the group.
     */
    groupId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class GetGroupVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such video or group exists.
     */
    legacyError?: shared.LegacyError;
    /**
     * The video was returned.
     */
    video?: shared.Video;
}
