import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAddress } from "./accountaddress";
import { PaymentIdentifier } from "./paymentidentifier";
import { PaymentBankTransferCode } from "./paymentbanktransfercode";
export declare class PaymentProfile extends SpeakeasyBase {
    address?: AccountAddress[];
    identifier?: PaymentIdentifier;
    paymentBankTransferCode?: PaymentBankTransferCode;
}
