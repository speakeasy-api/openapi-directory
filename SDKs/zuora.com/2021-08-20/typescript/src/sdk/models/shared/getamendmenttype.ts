import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAmendmentType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoRenew" })
  autoRenew?: boolean;

  @SpeakeasyMetadata({ data: "json, name=baseRatePlanId" })
  baseRatePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=baseSubscriptionId" })
  baseSubscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=contractEffectiveDate" })
  contractEffectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currentTerm" })
  currentTerm?: number;

  @SpeakeasyMetadata({ data: "json, name=currentTermPeriodType" })
  currentTermPeriodType?: string;

  @SpeakeasyMetadata({ data: "json, name=customerAcceptanceDate" })
  customerAcceptanceDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationAccountId" })
  destinationAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationInvoiceOwnerId" })
  destinationInvoiceOwnerId?: string;

  @SpeakeasyMetadata({ data: "json, name=effectiveDate" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=newRatePlanId" })
  newRatePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=newSubscriptionId" })
  newSubscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=renewalSetting" })
  renewalSetting?: string;

  @SpeakeasyMetadata({ data: "json, name=renewalTerm" })
  renewalTerm?: number;

  @SpeakeasyMetadata({ data: "json, name=renewalTermPeriodType" })
  renewalTermPeriodType?: string;

  @SpeakeasyMetadata({ data: "json, name=resumeDate" })
  resumeDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=serviceActivationDate" })
  serviceActivationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=specificUpdateDate" })
  specificUpdateDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=suspendDate" })
  suspendDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=termStartDate" })
  termStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=termType" })
  termType?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
