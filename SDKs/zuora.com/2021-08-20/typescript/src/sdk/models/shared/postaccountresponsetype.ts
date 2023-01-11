import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAccountResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=billToContactId" })
  billToContactId?: string;

  @SpeakeasyMetadata({ data: "json, name=contractedMrr" })
  contractedMrr?: string;

  @SpeakeasyMetadata({ data: "json, name=creditMemoId" })
  creditMemoId?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceId" })
  invoiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=paidAmount" })
  paidAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentId" })
  paymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMethodId" })
  paymentMethodId?: string;

  @SpeakeasyMetadata({ data: "json, name=soldToContactId" })
  soldToContactId?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumber" })
  subscriptionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=totalContractedValue" })
  totalContractedValue?: string;
}
