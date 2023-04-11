import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateDates2Request extends SpeakeasyBase {
    /**
     * Updated dates of a given task.
     */
    projectDatesDTO: shared.ProjectDatesDTO;
    /**
     * task's internal identifier
     */
    taskId: string;
}
export declare class UpdateDates2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    projectDatesDTO?: shared.ProjectDatesDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
