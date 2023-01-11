import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutRenewSubscriptionResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creditMemoId" })
  creditMemoId?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceId" })
  invoiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=paidAmount" })
  paidAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=paymentId" })
  paymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=termEndDate" })
  termEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=termStartDate" })
  termStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=totalDeltaMrr" })
  totalDeltaMrr?: number;

  @SpeakeasyMetadata({ data: "json, name=totalDeltaTcv" })
  totalDeltaTcv?: number;
}
