import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionDetail } from "./transactiondetail";
export declare class TransactionsResponseData extends SpeakeasyBase {
    /**
     * The knowledge of the server
     */
    serverKnowledge: number;
    transactions: TransactionDetail[];
}
/**
 * The list of requested transactions
 */
export declare class TransactionsResponse extends SpeakeasyBase {
    data: TransactionsResponseData;
}
