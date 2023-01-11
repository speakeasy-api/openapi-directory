import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RatePlan } from "./rateplan";
import { RatePlanChargeDataInRatePlanData } from "./rateplanchargedatainrateplandata";
import { SubscriptionProductFeatureList } from "./subscriptionproductfeaturelist";



// AmendmentRatePlanData
/** 
 * A container for one `RatePlanData`. This field is only required if the `Type` field is set to `NewProduct`, `RemoveProduct`, or `UpdateProduct`.
 * 
**/
export class AmendmentRatePlanData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RatePlan" })
  ratePlan: RatePlan;

  @SpeakeasyMetadata({ data: "json, name=RatePlanChargeData", elemType: RatePlanChargeDataInRatePlanData })
  ratePlanChargeData?: RatePlanChargeDataInRatePlanData[];

  @SpeakeasyMetadata({ data: "json, name=SubscriptionProductFeatureList" })
  subscriptionProductFeatureList?: SubscriptionProductFeatureList;
}


export class Amendment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoRenew" })
  autoRenew?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=ContractEffectiveDate" })
  contractEffectiveDate: Date;

  @SpeakeasyMetadata({ data: "json, name=CreatedById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=CurrentTerm" })
  currentTerm?: number;

  @SpeakeasyMetadata({ data: "json, name=CurrentTermPeriodType" })
  currentTermPeriodType?: string;

  @SpeakeasyMetadata({ data: "json, name=CustomerAcceptanceDate" })
  customerAcceptanceDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationAccountId" })
  destinationAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationInvoiceOwnerId" })
  destinationInvoiceOwnerId?: string;

  @SpeakeasyMetadata({ data: "json, name=EffectiveDate" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=RatePlanData" })
  ratePlanData?: AmendmentRatePlanData;

  @SpeakeasyMetadata({ data: "json, name=RenewalSetting" })
  renewalSetting?: string;

  @SpeakeasyMetadata({ data: "json, name=RenewalTerm" })
  renewalTerm?: number;

  @SpeakeasyMetadata({ data: "json, name=RenewalTermPeriodType" })
  renewalTermPeriodType?: string;

  @SpeakeasyMetadata({ data: "json, name=ResumeDate" })
  resumeDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ServiceActivationDate" })
  serviceActivationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=SpecificUpdateDate" })
  specificUpdateDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=SubscriptionId" })
  subscriptionId: string;

  @SpeakeasyMetadata({ data: "json, name=SuspendDate" })
  suspendDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=TermStartDate" })
  termStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=TermType" })
  termType?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDate" })
  updatedDate?: Date;
}
