import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateInternalNotesRequest extends SpeakeasyBase {
    /**
     * Updated Internal Notes for a project.
     */
    stringDTO: shared.StringDTO;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class UpdateInternalNotesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
