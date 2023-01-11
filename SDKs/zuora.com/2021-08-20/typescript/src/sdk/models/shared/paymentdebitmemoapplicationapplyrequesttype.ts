import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentDebitMemoApplicationItemApplyRequestType } from "./paymentdebitmemoapplicationitemapplyrequesttype";



export class PaymentDebitMemoApplicationApplyRequestType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=debitMemoId" })
  debitMemoId?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: PaymentDebitMemoApplicationItemApplyRequestType })
  items?: PaymentDebitMemoApplicationItemApplyRequestType[];
}
