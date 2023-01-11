import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentDebitMemoApplicationItemUnapplyRequestType } from "./paymentdebitmemoapplicationitemunapplyrequesttype";



export class PaymentDebitMemoApplicationUnapplyRequestType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=debitMemoId" })
  debitMemoId?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: PaymentDebitMemoApplicationItemUnapplyRequestType })
  items?: PaymentDebitMemoApplicationItemUnapplyRequestType[];
}
