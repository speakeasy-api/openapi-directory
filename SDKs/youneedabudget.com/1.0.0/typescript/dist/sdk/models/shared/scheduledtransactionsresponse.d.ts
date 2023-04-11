import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduledTransactionDetail } from "./scheduledtransactiondetail";
export declare class ScheduledTransactionsResponseData extends SpeakeasyBase {
    scheduledTransactions: ScheduledTransactionDetail[];
    /**
     * The knowledge of the server
     */
    serverKnowledge: number;
}
/**
 * The list of requested scheduled transactions
 */
export declare class ScheduledTransactionsResponse extends SpeakeasyBase {
    data: ScheduledTransactionsResponseData;
}
