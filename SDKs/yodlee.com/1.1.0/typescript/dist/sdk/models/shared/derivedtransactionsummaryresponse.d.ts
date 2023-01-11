import { SpeakeasyBase } from "../../../internal/utils";
import { DerivedTransactionsLinks } from "./derivedtransactionslinks";
import { DerivedTransactionsSummary } from "./derivedtransactionssummary";
export declare class DerivedTransactionSummaryResponse extends SpeakeasyBase {
    links?: DerivedTransactionsLinks;
    transactionSummary?: DerivedTransactionsSummary[];
}
