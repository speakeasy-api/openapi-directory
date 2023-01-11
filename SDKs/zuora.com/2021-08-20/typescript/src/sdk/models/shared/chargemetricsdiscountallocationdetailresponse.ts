import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChargeMetricsDiscountAllocationDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amendmentId" })
  amendmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=amendmentType" })
  amendmentType?: string;

  @SpeakeasyMetadata({ data: "json, name=chargeMetricsId" })
  chargeMetricsId?: string;

  @SpeakeasyMetadata({ data: "json, name=chargeNumber" })
  chargeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=discountChargeNumber" })
  discountChargeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=discountMrr" })
  discountMrr?: number;

  @SpeakeasyMetadata({ data: "json, name=discountTcv" })
  discountTcv?: number;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceOwnerAccountNumber" })
  invoiceOwnerAccountNumber?: string;

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

  @SpeakeasyMetadata({ data: "json, name=updatedOn" })
  updatedOn?: Date;
}
