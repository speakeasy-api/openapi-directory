import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateDates1Request extends SpeakeasyBase {
    /**
     * Updated dates of a given project..
     */
    projectDatesDTO: shared.ProjectDatesDTO;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class UpdateDates1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    projectDatesDTO?: shared.ProjectDatesDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
