import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChargeMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amendmentId" })
  amendmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=amendmentType" })
  amendmentType?: string;

  @SpeakeasyMetadata({ data: "json, name=chargeNumber" })
  chargeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceOwnerAccountNumber" })
  invoiceOwnerAccountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=mrrDiscountAmount" })
  mrrDiscountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=mrrGrossAmount" })
  mrrGrossAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=mrrNetAmount" })
  mrrNetAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=productRatePlanChargeId" })
  productRatePlanChargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=productRatePlanId" })
  productRatePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=ratePlanChargeId" })
  ratePlanChargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subscriptionName" })
  subscriptionName?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionOwnerAccountNumber" })
  subscriptionOwnerAccountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=tcvDiscountAmount" })
  tcvDiscountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=tcvGrossAmount" })
  tcvGrossAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=tcvNetAmount" })
  tcvNetAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=updatedOn" })
  updatedOn?: Date;
}
