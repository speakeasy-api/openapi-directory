import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RenewalTerm } from "./renewalterm";
import { CreateOrderRatePlanOverride } from "./createorderrateplanoverride";


export enum CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum {
    Month = "Month",
    Year = "Year",
    Day = "Day",
    Week = "Week"
}

export enum CreateOrderCreateSubscriptionTermsInitialTermTermTypeEnum {
    Termed = "TERMED",
    Evergreen = "EVERGREEN"
}


// CreateOrderCreateSubscriptionTermsInitialTerm
/** 
 * Information about the first term of the subscription.
 * 
**/
export class CreateOrderCreateSubscriptionTermsInitialTerm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: number;

  @SpeakeasyMetadata({ data: "json, name=periodType" })
  periodType?: CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=termType" })
  termType: CreateOrderCreateSubscriptionTermsInitialTermTermTypeEnum;
}

export enum CreateOrderCreateSubscriptionTermsRenewalSettingEnum {
    RenewWithSpecificTerm = "RENEW_WITH_SPECIFIC_TERM",
    RenewToEvergreen = "RENEW_TO_EVERGREEN"
}


// CreateOrderCreateSubscriptionTerms
/** 
 * Container for the terms and renewal settings of the subscription.
 * 
**/
export class CreateOrderCreateSubscriptionTerms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoRenew" })
  autoRenew?: boolean;

  @SpeakeasyMetadata({ data: "json, name=initialTerm" })
  initialTerm: CreateOrderCreateSubscriptionTermsInitialTerm;

  @SpeakeasyMetadata({ data: "json, name=renewalSetting" })
  renewalSetting?: CreateOrderCreateSubscriptionTermsRenewalSettingEnum;

  @SpeakeasyMetadata({ data: "json, name=renewalTerms", elemType: RenewalTerm })
  renewalTerms?: RenewalTerm[];
}


// CreateOrderCreateSubscription
/** 
 * Information about an order action of type `CreateSubscription`.
 * 
**/
export class CreateOrderCreateSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoiceSeparately" })
  invoiceSeparately?: boolean;

  @SpeakeasyMetadata({ data: "json, name=newSubscriptionOwnerAccount" })
  newSubscriptionOwnerAccount?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=subscribeToRatePlans", elemType: CreateOrderRatePlanOverride })
  subscribeToRatePlans?: CreateOrderRatePlanOverride[];

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumber" })
  subscriptionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionOwnerAccountNumber" })
  subscriptionOwnerAccountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=terms" })
  terms?: CreateOrderCreateSubscriptionTerms;
}
