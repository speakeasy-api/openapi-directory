import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RequestreportbyorderdateRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * begin date of report interval, use format yyyyMMdd
     */
    beginDate: number;
    /**
     * end date of report interval, use format yyyyMMdd
     */
    endDate: number;
    /**
     * Email that the report will be sent to
     */
    requesterEmail: string;
}
export declare class RequestreportbyorderdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
