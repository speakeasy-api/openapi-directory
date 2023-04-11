import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExportToXMLResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    reportResultDTO?: shared.ReportResultDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
