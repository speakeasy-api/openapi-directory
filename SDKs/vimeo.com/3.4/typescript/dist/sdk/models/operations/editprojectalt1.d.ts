import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditProjectAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
export declare class EditProjectAlt1RequestBody extends SpeakeasyBase {
    /**
     * The name of the project.
     */
    name: string;
}
export declare class EditProjectAlt1Request extends SpeakeasyBase {
    requestBody: EditProjectAlt1RequestBody;
    /**
     * The ID of the project.
     */
    projectId: number;
}
export declare class EditProjectAlt1Response extends SpeakeasyBase {
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
