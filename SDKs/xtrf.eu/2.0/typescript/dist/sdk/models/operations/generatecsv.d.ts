import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GenerateCSVRequest extends SpeakeasyBase {
    /**
     * report's internal identifier
     */
    reportId: number;
}
export declare class GenerateCSVResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    reportResultDTO?: shared.ReportResultDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
