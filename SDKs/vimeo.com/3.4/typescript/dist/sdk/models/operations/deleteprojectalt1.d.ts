import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteProjectAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteProjectAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the project.
     */
    projectId: number;
    /**
     * Whether to delete all the videos in the project along with the project itself.
     */
    shouldDeleteClips?: boolean;
}
export declare class DeleteProjectAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error code 8000: The user credentials are invalid.
     */
    error?: shared.ErrorT;
}
