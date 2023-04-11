import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetappkeysfromaccountRequest extends SpeakeasyBase {
    /**
     * The media type of the body of the request. Default value for license manager protocol is application/json
     */
    contentType: string;
}
export declare class GetappkeysfromaccountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getappkeysfromaccounts?: shared.Getappkeysfromaccount[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
