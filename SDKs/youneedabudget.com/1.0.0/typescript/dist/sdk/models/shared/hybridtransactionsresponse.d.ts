import { SpeakeasyBase } from "../../../internal/utils";
import { HybridTransaction } from "./hybridtransaction";
export declare class HybridTransactionsResponseData extends SpeakeasyBase {
    /**
     * The knowledge of the server
     */
    serverKnowledge?: number;
    transactions: HybridTransaction[];
}
/**
 * The list of requested transactions
 */
export declare class HybridTransactionsResponse extends SpeakeasyBase {
    data: HybridTransactionsResponseData;
}
