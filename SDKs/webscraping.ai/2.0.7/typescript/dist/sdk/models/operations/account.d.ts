import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountResponse extends SpeakeasyBase {
    /**
     * Success
     */
    account?: shared.Account;
    contentType: string;
    /**
     * Wrong API key
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
