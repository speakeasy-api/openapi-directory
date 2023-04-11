import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateBusinessDaysRequest extends SpeakeasyBase {
    /**
     * Updated Business Days for a quote.
     */
    requestBody: number;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class UpdateBusinessDaysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
