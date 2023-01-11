import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountPlanAddonCreatePathParams extends SpeakeasyBase {
    accountId: string;
}
/**
 * Account plan object.
**/
export declare class AccountPlanAddonCreateApplicationJson1 extends SpeakeasyBase {
    hosts: number;
    type: string;
}
/**
 * Additional phone base plans.
**/
export declare class AccountPlanAddonCreateApplicationJson2PhonePlanPlanBase extends SpeakeasyBase {
    calloutCountries?: string;
    type?: string;
}
export declare class AccountPlanAddonCreateApplicationJson2PhonePlanPlanCalling extends SpeakeasyBase {
    hosts?: number;
    type?: string;
}
export declare class AccountPlanAddonCreateApplicationJson2PhonePlanPlanNumber extends SpeakeasyBase {
    hosts?: number;
    type?: string;
}
/**
 * Phone Plan Object
**/
export declare class AccountPlanAddonCreateApplicationJson2PhonePlan extends SpeakeasyBase {
    planBase?: AccountPlanAddonCreateApplicationJson2PhonePlanPlanBase;
    planCalling?: AccountPlanAddonCreateApplicationJson2PhonePlanPlanCalling[];
    planNumber?: AccountPlanAddonCreateApplicationJson2PhonePlanPlanNumber[];
}
/**
 * Zoom Phone Plan Object
**/
export declare class AccountPlanAddonCreateApplicationJson2 extends SpeakeasyBase {
    planDetails: AccountPlanAddonCreateApplicationJson2PhonePlan;
    type: string;
}
/**
 * Account plan object.
**/
export declare class AccountPlanAddonCreateMultipartFormData1 extends SpeakeasyBase {
    hosts: number;
    type: string;
}
/**
 * Additional phone base plans.
**/
export declare class AccountPlanAddonCreateMultipartFormData2PhonePlanPlanBase extends SpeakeasyBase {
    calloutCountries?: string;
    type?: string;
}
export declare class AccountPlanAddonCreateMultipartFormData2PhonePlanPlanCalling extends SpeakeasyBase {
    hosts?: number;
    type?: string;
}
export declare class AccountPlanAddonCreateMultipartFormData2PhonePlanPlanNumber extends SpeakeasyBase {
    hosts?: number;
    type?: string;
}
/**
 * Phone Plan Object
**/
export declare class AccountPlanAddonCreateMultipartFormData2PhonePlan extends SpeakeasyBase {
    planBase?: AccountPlanAddonCreateMultipartFormData2PhonePlanPlanBase;
    planCalling?: AccountPlanAddonCreateMultipartFormData2PhonePlanPlanCalling[];
    planNumber?: AccountPlanAddonCreateMultipartFormData2PhonePlanPlanNumber[];
}
/**
 * Zoom Phone Plan Object
**/
export declare class AccountPlanAddonCreateMultipartFormData2 extends SpeakeasyBase {
    planDetails: AccountPlanAddonCreateMultipartFormData2PhonePlan;
    type: string;
}
export declare class AccountPlanAddonCreateRequests extends SpeakeasyBase {
    oneOf?: any;
    oneOf1?: any;
}
export declare class AccountPlanAddonCreateRequest extends SpeakeasyBase {
    pathParams: AccountPlanAddonCreatePathParams;
    request: AccountPlanAddonCreateRequests;
}
export declare class AccountPlanAddonCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
