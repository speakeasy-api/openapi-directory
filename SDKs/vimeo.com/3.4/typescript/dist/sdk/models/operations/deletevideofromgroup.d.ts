import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteVideoFromGroupSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteVideoFromGroupRequest extends SpeakeasyBase {
    /**
     * The ID of the group.
     */
    groupId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class DeleteVideoFromGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user can't modify this group's videos.
     */
    legacyError?: shared.LegacyError;
}
