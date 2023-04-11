import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccountDisassociateRequest extends SpeakeasyBase {
    /**
     * The account ID.
     */
    accountId: string;
}
export declare class AccountDisassociateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
