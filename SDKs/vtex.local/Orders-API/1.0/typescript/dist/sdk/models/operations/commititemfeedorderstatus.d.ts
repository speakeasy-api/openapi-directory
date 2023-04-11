import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CommititemfeedorderstatusRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    commititemfeedorderstatusRequest: shared.CommititemfeedorderstatusRequest;
    /**
     * Type of the content being sent.
     */
    contentType: string;
}
export declare class CommititemfeedorderstatusResponse extends SpeakeasyBase {
    /**
     * OK
     */
    commititemfeedorderstatus200TextPlainObject?: string;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
