import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BankTransferCode } from "./banktransfercode";
import { AccountHolder } from "./accountholder";



export class VerifiedAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType?: string;

  @SpeakeasyMetadata({ data: "json, name=bankTransferCode", elemType: BankTransferCode })
  bankTransferCode?: BankTransferCode[];

  @SpeakeasyMetadata({ data: "json, name=fullAccountNumber" })
  fullAccountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=holder", elemType: AccountHolder })
  holder?: AccountHolder[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=providerAccountId" })
  providerAccountId?: number;

  @SpeakeasyMetadata({ data: "json, name=providerName" })
  providerName?: string;
}
