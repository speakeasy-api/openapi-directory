import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostGenerateBillingDocumentType extends SpeakeasyBase {
    autoPost?: boolean;
    autoRenew?: boolean;
    chargeTypeToExclude?: string[];
    effectiveDate?: Date;
    subscriptionIds?: string[];
    targetDate?: Date;
}
