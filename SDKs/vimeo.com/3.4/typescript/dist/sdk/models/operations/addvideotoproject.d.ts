import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddVideoToProjectSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class AddVideoToProjectRequest extends SpeakeasyBase {
    /**
     * The ID of the project.
     */
    projectId: number;
    /**
     * The ID of the user.
     */
    userId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class AddVideoToProjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error code 5000: No such user, project, or video exists.
     */
    error?: shared.ErrorT;
}
