import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateClientNotesRequest extends SpeakeasyBase {
    /**
     * Updated Client Notes for a project.
     */
    stringDTO: shared.StringDTO;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class UpdateClientNotesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
