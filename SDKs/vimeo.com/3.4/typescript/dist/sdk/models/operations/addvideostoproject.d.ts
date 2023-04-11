import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddVideosToProjectSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class AddVideosToProjectRequest extends SpeakeasyBase {
    /**
     * The ID of the project.
     */
    projectId: number;
    /**
     * A comma-separated list of video URIs to add.
     */
    uris: string;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class AddVideosToProjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error code 2204: The input is invalid.
     */
    error?: shared.ErrorT;
}
