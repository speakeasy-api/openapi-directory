import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDocument1Request extends SpeakeasyBase {
    /**
     * provider invoice's internal identifier
     */
    invoiceId: number;
}
export declare class GetDocument1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    urlResultDTO?: shared.UrlResultDTO;
}
