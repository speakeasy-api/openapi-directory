import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateClientDeadlineRequest extends SpeakeasyBase {
    /**
     * Updated Client Deadline for a project.
     */
    timeDTO: shared.TimeDTO;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class UpdateClientDeadlineResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
