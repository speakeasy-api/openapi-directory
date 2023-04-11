import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFinanceRequest extends SpeakeasyBase {
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class GetFinanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    financeDTO?: shared.FinanceDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
