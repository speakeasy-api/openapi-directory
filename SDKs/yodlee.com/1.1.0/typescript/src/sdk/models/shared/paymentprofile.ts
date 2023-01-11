import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountAddress } from "./accountaddress";
import { PaymentIdentifier } from "./paymentidentifier";
import { PaymentBankTransferCode } from "./paymentbanktransfercode";



export class PaymentProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address", elemType: AccountAddress })
  address?: AccountAddress[];

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier?: PaymentIdentifier;

  @SpeakeasyMetadata({ data: "json, name=paymentBankTransferCode" })
  paymentBankTransferCode?: PaymentBankTransferCode;
}
