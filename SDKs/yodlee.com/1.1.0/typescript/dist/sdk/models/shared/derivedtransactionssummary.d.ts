import { SpeakeasyBase } from "../../../internal/utils";
import { DerivedCategorySummary } from "./derivedcategorysummary";
import { Money } from "./money";
import { DerivedTransactionsLinks } from "./derivedtransactionslinks";
export declare enum DerivedTransactionsSummaryCategoryTypeEnum {
    Transfer = "TRANSFER",
    DeferredCompensation = "DEFERRED_COMPENSATION",
    Uncategorize = "UNCATEGORIZE",
    Income = "INCOME",
    Expense = "EXPENSE"
}
export declare class DerivedTransactionsSummary extends SpeakeasyBase {
    categorySummary?: DerivedCategorySummary[];
    categoryType?: DerivedTransactionsSummaryCategoryTypeEnum;
    creditTotal?: Money;
    debitTotal?: Money;
    links?: DerivedTransactionsLinks;
}
