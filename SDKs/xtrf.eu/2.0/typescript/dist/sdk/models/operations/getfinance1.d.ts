import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFinance1Request extends SpeakeasyBase {
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class GetFinance1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    financeDTO?: shared.FinanceDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
