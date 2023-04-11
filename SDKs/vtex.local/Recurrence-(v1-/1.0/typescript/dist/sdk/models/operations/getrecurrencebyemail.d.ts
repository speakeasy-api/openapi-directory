import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRecurrencebyemailRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    /**
     * If you wish to list tasks by Subscriptions with failures on the last execution cycle, insert the desired cycleStatus.
     */
    cycleStatus?: string;
    /**
     * If you wish to list tasks by email, insert the desired user's email.
     */
    email?: string;
}
export declare class GetRecurrencebyemailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
