import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";



export class LoanPayoffDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outstandingBalance" })
  outstandingBalance?: Money;

  @SpeakeasyMetadata({ data: "json, name=payByDate" })
  payByDate?: string;

  @SpeakeasyMetadata({ data: "json, name=payoffAmount" })
  payoffAmount?: Money;
}
