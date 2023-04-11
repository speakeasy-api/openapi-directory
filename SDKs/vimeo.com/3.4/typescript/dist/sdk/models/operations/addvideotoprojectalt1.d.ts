import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddVideoToProjectAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
export declare class AddVideoToProjectAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the project.
     */
    projectId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class AddVideoToProjectAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error code 5000: No such user, project, or video exists.
     */
    error?: shared.ErrorT;
}
