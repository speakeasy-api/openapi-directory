import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostSubscriptionCancellationResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancelledDate" })
  cancelledDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=creditMemoId" })
  creditMemoId?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceId" })
  invoiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=paidAmount" })
  paidAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=paymentId" })
  paymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=totalDeltaMrr" })
  totalDeltaMrr?: number;

  @SpeakeasyMetadata({ data: "json, name=totalDeltaTcv" })
  totalDeltaTcv?: number;
}
