import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDates3Request extends SpeakeasyBase {
    /**
     * task's internal identifier
     */
    taskId: string;
}
export declare class GetDates3Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    projectDatesDTO?: shared.ProjectDatesDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
