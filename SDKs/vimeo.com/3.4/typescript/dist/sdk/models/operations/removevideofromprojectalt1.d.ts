import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RemoveVideoFromProjectAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
export declare class RemoveVideoFromProjectAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the project.
     */
    projectId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class RemoveVideoFromProjectAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error code 2204: The input is invalid.
     */
    error?: shared.ErrorT;
}
