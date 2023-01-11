import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";



export class DerivedCategorySummaryDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creditTotal" })
  creditTotal?: Money;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=debitTotal" })
  debitTotal?: Money;
}
