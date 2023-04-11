import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Account base plan object.
 */
export declare class AccountPlanBaseUpdateApplicationJSON extends SpeakeasyBase {
    /**
     * Account base plan number of hosts. For a Pro Plan please select a value between 1 and 9. For a Business Plan please select a value between 10 and 49. For a Education Plan please select a value between 20 and 149. For a Free Trial Plan please select a value between 1 and 9999.
     */
    hosts: number;
    /**
     * Account base <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans">plan type.</a>
     */
    type: string;
}
export declare class AccountPlanBaseUpdateRequest extends SpeakeasyBase {
    requestBody: AccountPlanBaseUpdateApplicationJSON;
    /**
     * The account ID.
     */
    accountId: string;
}
export declare class AccountPlanBaseUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
