import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PaymentDebitMemoApplicationItemUnapplyRequestType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=debitMemoItemId" })
  debitMemoItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=taxItemId" })
  taxItemId?: string;
}
