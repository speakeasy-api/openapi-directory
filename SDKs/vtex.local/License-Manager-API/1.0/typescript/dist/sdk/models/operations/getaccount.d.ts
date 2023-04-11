import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccountResponse extends SpeakeasyBase {
    /**
     * Success
     */
    accountResponse?: shared.AccountResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
