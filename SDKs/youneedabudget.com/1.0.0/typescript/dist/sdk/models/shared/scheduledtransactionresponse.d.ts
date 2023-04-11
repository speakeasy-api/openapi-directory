import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduledTransactionDetail } from "./scheduledtransactiondetail";
export declare class ScheduledTransactionResponseData extends SpeakeasyBase {
    scheduledTransaction: ScheduledTransactionDetail;
}
/**
 * The requested Scheduled Transaction
 */
export declare class ScheduledTransactionResponse extends SpeakeasyBase {
    data: ScheduledTransactionResponseData;
}
