import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the event
     */
    id: string;
}
export declare class GetEventResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request: The client should not repeat the request without modifications
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Successful
     */
    events?: shared.Event[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
