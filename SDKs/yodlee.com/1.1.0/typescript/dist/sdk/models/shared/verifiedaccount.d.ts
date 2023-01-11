import { SpeakeasyBase } from "../../../internal/utils";
import { BankTransferCode } from "./banktransfercode";
import { AccountHolder } from "./accountholder";
export declare class VerifiedAccount extends SpeakeasyBase {
    accountNumber?: string;
    accountType?: string;
    bankTransferCode?: BankTransferCode[];
    fullAccountNumber?: string;
    holder?: AccountHolder[];
    id?: number;
    providerAccountId?: number;
    providerName?: string;
}
