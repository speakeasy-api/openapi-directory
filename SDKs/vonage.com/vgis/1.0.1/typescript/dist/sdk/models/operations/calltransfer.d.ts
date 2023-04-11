import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CallTransferRequest extends SpeakeasyBase {
    /**
     * Call transfer parameters
     */
    callTransfer: shared.CallTransfer;
    /**
     * Unique identifier of the call
     */
    id: string;
}
export declare class CallTransferResponse extends SpeakeasyBase {
    /**
     * Successful
     */
    call?: shared.Call;
    contentType: string;
    /**
     * Bad Request: The client should not repeat the request without modifications
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
