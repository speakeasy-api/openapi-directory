import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDates1Request extends SpeakeasyBase {
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class GetDates1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    projectDatesDTO?: shared.ProjectDatesDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
