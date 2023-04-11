import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditProjectSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class EditProjectRequestBody extends SpeakeasyBase {
    /**
     * The name of the project.
     */
    name: string;
}
export declare class EditProjectRequest extends SpeakeasyBase {
    requestBody: EditProjectRequestBody;
    /**
     * The ID of the project.
     */
    projectId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class EditProjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * * Error code 2204: The input is invalid.
     *
     * @remarks
     * * Error code 2205: The input is empty.
     */
    error?: shared.ErrorT;
    /**
     * The project was edited.
     */
    project?: shared.Project;
}
