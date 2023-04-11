import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Additional phone base plans.
 */
export declare class AccountPlanAddonCreateApplicationJson2PhonePlanPlanBase extends SpeakeasyBase {
    /**
     * Call-out countries: multiple values should separated by  commas. For a list of allowed values, refer to the "ID" field in [this](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#tsp-call-out-countries) table.
     */
    calloutCountries?: string;
    /**
     * Additional phone base <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#additional-zoom-phone-plans">plan type.</a>
     */
    type?: string;
}
export declare class AccountPlanAddonCreateApplicationJson2PhonePlanPlanCalling extends SpeakeasyBase {
    hosts?: number;
    /**
     * Additional phone calling <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#additional-zoom-phone-plans">plan type.</a>
     */
    type?: string;
}
export declare class AccountPlanAddonCreateApplicationJson2PhonePlanPlanNumber extends SpeakeasyBase {
    hosts?: number;
    /**
     * Additional phone number <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#additional-zoom-phone-plans">plan type.</a>
     */
    type?: string;
}
/**
 * Phone Plan Object
 */
export declare class AccountPlanAddonCreateApplicationJson2PhonePlan extends SpeakeasyBase {
    /**
     * Additional phone base plans.
     */
    planBase?: AccountPlanAddonCreateApplicationJson2PhonePlanPlanBase;
    /**
     * Additional phone calling plans.
     */
    planCalling?: AccountPlanAddonCreateApplicationJson2PhonePlanPlanCalling[];
    /**
     * Additional phone number plans.
     */
    planNumber?: AccountPlanAddonCreateApplicationJson2PhonePlanPlanNumber[];
}
/**
 * Zoom Phone Plan Object
 */
export declare class AccountPlanAddonCreateApplicationJson2 extends SpeakeasyBase {
    /**
     * Phone Plan Object
     */
    planDetails: AccountPlanAddonCreateApplicationJson2PhonePlan;
    /**
     * Zoom Phone Plan `plan_phone`
     */
    type: string;
}
/**
 * Account plan object.
 */
export declare class AccountPlanAddonCreateApplicationJson1 extends SpeakeasyBase {
    /**
     * Number of hosts for this plan.
     */
    hosts: number;
    /**
     * Account <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans">plan type.</a>
     */
    type: string;
}
export declare class AccountPlanAddonCreateRequest extends SpeakeasyBase {
    requestBody: any;
    /**
     * The account ID.
     */
    accountId: string;
}
export declare class AccountPlanAddonCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
