import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DerivedCategorySummary } from "./derivedcategorysummary";
import { Money } from "./money";
import { DerivedTransactionsLinks } from "./derivedtransactionslinks";


export enum DerivedTransactionsSummaryCategoryTypeEnum {
    Transfer = "TRANSFER",
    DeferredCompensation = "DEFERRED_COMPENSATION",
    Uncategorize = "UNCATEGORIZE",
    Income = "INCOME",
    Expense = "EXPENSE"
}


export class DerivedTransactionsSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categorySummary", elemType: DerivedCategorySummary })
  categorySummary?: DerivedCategorySummary[];

  @SpeakeasyMetadata({ data: "json, name=categoryType" })
  categoryType?: DerivedTransactionsSummaryCategoryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=creditTotal" })
  creditTotal?: Money;

  @SpeakeasyMetadata({ data: "json, name=debitTotal" })
  debitTotal?: Money;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: DerivedTransactionsLinks;
}
