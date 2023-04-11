import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Account plan object.
 */
export declare class AccountPlanAddonUpdateApplicationJSON extends SpeakeasyBase {
    /**
     * Number of hosts for this plan.
     */
    hosts: number;
    /**
     * Account <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans">plan type.</a>
     */
    type: string;
}
export declare class AccountPlanAddonUpdateRequest extends SpeakeasyBase {
    requestBody: AccountPlanAddonUpdateApplicationJSON;
    /**
     * The account ID.
     */
    accountId: string;
}
export declare class AccountPlanAddonUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
