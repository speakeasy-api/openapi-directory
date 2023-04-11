import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GetProjectRequest extends SpeakeasyBase {
    /**
     * The ID of the project.
     */
    projectId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class GetProjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error code 8000: The user credentials are invalid.
     */
    error?: shared.ErrorT;
    /**
     * The project was returned.
     */
    project?: shared.Project;
}
