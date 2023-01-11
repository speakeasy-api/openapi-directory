import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
import { DerivedCategorySummaryDetails } from "./derivedcategorysummarydetails";
import { DerivedTransactionsLinks } from "./derivedtransactionslinks";



export class DerivedCategorySummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryId" })
  categoryId?: number;

  @SpeakeasyMetadata({ data: "json, name=categoryName" })
  categoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=creditTotal" })
  creditTotal?: Money;

  @SpeakeasyMetadata({ data: "json, name=debitTotal" })
  debitTotal?: Money;

  @SpeakeasyMetadata({ data: "json, name=details", elemType: DerivedCategorySummaryDetails })
  details?: DerivedCategorySummaryDetails[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: DerivedTransactionsLinks;
}
