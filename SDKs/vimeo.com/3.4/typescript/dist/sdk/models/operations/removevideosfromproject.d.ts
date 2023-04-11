import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RemoveVideosFromProjectSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RemoveVideosFromProjectRequest extends SpeakeasyBase {
    /**
     * The ID of the project.
     */
    projectId: number;
    /**
     * Whether to delete the videos when removing them from the project.
     */
    shouldDeleteClips?: boolean;
    /**
     * A comma-separated list of the video URIs to remove.
     */
    uris: string;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class RemoveVideosFromProjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error code 2204: The input is invalid.
     */
    error?: shared.ErrorT;
}
