import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DerivedTransactionsLinks } from "./derivedtransactionslinks";
import { DerivedTransactionsSummary } from "./derivedtransactionssummary";



export class DerivedTransactionSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: DerivedTransactionsLinks;

  @SpeakeasyMetadata({ data: "json, name=transactionSummary", elemType: DerivedTransactionsSummary })
  transactionSummary?: DerivedTransactionsSummary[];
}
