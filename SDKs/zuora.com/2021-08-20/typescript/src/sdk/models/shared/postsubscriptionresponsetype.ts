import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostSubscriptionResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contractedMrr" })
  contractedMrr?: number;

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

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumber" })
  subscriptionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=totalContractedValue" })
  totalContractedValue?: number;
}
