import { SpeakeasyBase } from "../../../internal/utils";
import { SaveTransaction } from "./savetransaction";
/**
 * The list of transactions to create
 */
export declare class BulkTransactions extends SpeakeasyBase {
    transactions: SaveTransaction[];
}
