import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GeneratePrinterFriendlyRequest extends SpeakeasyBase {
    /**
     * report's internal identifier
     */
    reportId: number;
}
export declare class GeneratePrinterFriendlyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    reportResultDTO?: shared.ReportResultDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
