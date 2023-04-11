import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateProjectSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateProjectRequestBody extends SpeakeasyBase {
    /**
     * The name of the project.
     */
    name: string;
}
export declare class CreateProjectRequest extends SpeakeasyBase {
    requestBody: CreateProjectRequestBody;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class CreateProjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * * Error code 2205: The input is empty.
     *
     * @remarks
     * * Error code 2204: The input is invalid.
     */
    error?: shared.ErrorT;
    /**
     * The project was created.
     */
    project?: shared.Project;
}
