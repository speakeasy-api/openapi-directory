import { SpeakeasyBase } from "../../../internal/utils";
import { SaveTransactionWithId } from "./savetransactionwithid";
/**
 * The transactions to update. Each transaction must have either an `id` or `import_id` specified. If `id` is specified as null an `import_id` value can be provided which will allow transaction(s) to be updated by their `import_id`. If an `id` is specified, it will always be used for lookup.
 */
export declare class PatchTransactionsWrapper extends SpeakeasyBase {
    transactions: SaveTransactionWithId[];
}
