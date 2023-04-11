import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDates2Request extends SpeakeasyBase {
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class GetDates2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    quoteDatesDTO?: shared.QuoteDatesDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
