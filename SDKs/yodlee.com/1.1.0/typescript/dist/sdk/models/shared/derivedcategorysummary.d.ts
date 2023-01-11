import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
import { DerivedCategorySummaryDetails } from "./derivedcategorysummarydetails";
import { DerivedTransactionsLinks } from "./derivedtransactionslinks";
export declare class DerivedCategorySummary extends SpeakeasyBase {
    categoryId?: number;
    categoryName?: string;
    creditTotal?: Money;
    debitTotal?: Money;
    details?: DerivedCategorySummaryDetails[];
    links?: DerivedTransactionsLinks;
}
