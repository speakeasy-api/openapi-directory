import { SpeakeasyBase } from "../../../internal/utils";
import { SaveTransaction } from "./savetransaction";
/**
 * The transaction or transactions to create.  To create a single transaction you can specify a value for the `transaction` object and to create multiple transactions you can specify an array of `transactions`.  It is expected that you will only provide a value for one of these objects.
 */
export declare class PostTransactionsWrapper extends SpeakeasyBase {
    transaction?: SaveTransaction;
    transactions?: SaveTransaction[];
}
