import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreditCard } from "./creditcard";
import { TaxInfo } from "./taxinfo";
import { RenewalTerm } from "./renewalterm";
import { RatePlanOverride } from "./rateplanoverride";



// CreateSubscriptionNewSubscriptionOwnerAccount
/** 
 * Information about a new account that will own the subscription. Only available if you have enabled the Owner Transfer feature.
 * 
 * **Note:** The Owner Transfer feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
 * 
 * If you do not set this field or the `subscriptionOwnerAccountNumber` field, the account that owns the order will also own the subscription. Zuora will return an error if you set this field and the `subscriptionOwnerAccountNumber` field.
 * 
**/
export class CreateSubscriptionNewSubscriptionOwnerAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=autoPay" })
  autoPay?: boolean;

  @SpeakeasyMetadata({ data: "json, name=batch" })
  batch?: string;

  @SpeakeasyMetadata({ data: "json, name=billCycleDay" })
  billCycleDay: number;

  @SpeakeasyMetadata({ data: "json, name=billToContact" })
  billToContact: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=communicationProfileId" })
  communicationProfileId?: string;

  @SpeakeasyMetadata({ data: "json, name=creditCard" })
  creditCard?: CreditCard;

  @SpeakeasyMetadata({ data: "json, name=crmId" })
  crmId?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=hpmCreditCardPaymentMethodId" })
  hpmCreditCardPaymentMethodId?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceDeliveryPrefsEmail" })
  invoiceDeliveryPrefsEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=invoiceDeliveryPrefsPrint" })
  invoiceDeliveryPrefsPrint?: boolean;

  @SpeakeasyMetadata({ data: "json, name=invoiceTemplateId" })
  invoiceTemplateId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentGateway" })
  paymentGateway?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMethod" })
  paymentMethod?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=paymentTerm" })
  paymentTerm?: string;

  @SpeakeasyMetadata({ data: "json, name=soldToContact" })
  soldToContact?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=taxInfo" })
  taxInfo?: TaxInfo;
}

export enum CreateSubscriptionTermsInitialTermPeriodTypeEnum {
    Month = "Month",
    Year = "Year",
    Day = "Day",
    Week = "Week"
}

export enum CreateSubscriptionTermsInitialTermTermTypeEnum {
    Termed = "TERMED",
    Evergreen = "EVERGREEN"
}


// CreateSubscriptionTermsInitialTerm
/** 
 * Information about the first term of the subscription.
 * 
**/
export class CreateSubscriptionTermsInitialTerm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: number;

  @SpeakeasyMetadata({ data: "json, name=periodType" })
  periodType?: CreateSubscriptionTermsInitialTermPeriodTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=termType" })
  termType: CreateSubscriptionTermsInitialTermTermTypeEnum;
}

export enum CreateSubscriptionTermsRenewalSettingEnum {
    RenewWithSpecificTerm = "RENEW_WITH_SPECIFIC_TERM",
    RenewToEvergreen = "RENEW_TO_EVERGREEN"
}


// CreateSubscriptionTerms
/** 
 * Container for the terms and renewal settings of the subscription.
 * 
**/
export class CreateSubscriptionTerms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoRenew" })
  autoRenew?: boolean;

  @SpeakeasyMetadata({ data: "json, name=initialTerm" })
  initialTerm: CreateSubscriptionTermsInitialTerm;

  @SpeakeasyMetadata({ data: "json, name=renewalSetting" })
  renewalSetting?: CreateSubscriptionTermsRenewalSettingEnum;

  @SpeakeasyMetadata({ data: "json, name=renewalTerms", elemType: RenewalTerm })
  renewalTerms: RenewalTerm[];
}


// CreateSubscription
/** 
 * Information about an order action of type `CreateSubscription`.
 * 
**/
export class CreateSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoiceSeparately" })
  invoiceSeparately?: boolean;

  @SpeakeasyMetadata({ data: "json, name=newSubscriptionOwnerAccount" })
  newSubscriptionOwnerAccount?: CreateSubscriptionNewSubscriptionOwnerAccount;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=subscribeToRatePlans", elemType: RatePlanOverride })
  subscribeToRatePlans?: RatePlanOverride[];

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumber" })
  subscriptionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionOwnerAccountNumber" })
  subscriptionOwnerAccountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=terms" })
  terms?: CreateSubscriptionTerms;
}
