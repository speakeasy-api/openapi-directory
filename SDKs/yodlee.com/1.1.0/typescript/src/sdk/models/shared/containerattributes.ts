import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransactionDays } from "./transactiondays";



export class ContainerAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BANK" })
  bank?: TransactionDays;

  @SpeakeasyMetadata({ data: "json, name=CREDITCARD" })
  creditcard?: TransactionDays;

  @SpeakeasyMetadata({ data: "json, name=INSURANCE" })
  insurance?: TransactionDays;

  @SpeakeasyMetadata({ data: "json, name=INVESTMENT" })
  investment?: TransactionDays;

  @SpeakeasyMetadata({ data: "json, name=LOAN" })
  loan?: TransactionDays;
}
