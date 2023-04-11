import { SpeakeasyBase } from "../../../internal/utils";
export declare class ScheduledSubTransaction extends SpeakeasyBase {
    /**
     * The scheduled subtransaction amount in milliunits format
     */
    amount: number;
    categoryId?: string;
    /**
     * Whether or not the scheduled subtransaction has been deleted.  Deleted scheduled subtransactions will only be included in delta requests.
     */
    deleted: boolean;
    id: string;
    memo?: string;
    payeeId?: string;
    scheduledTransactionId: string;
    /**
     * If a transfer, the account_id which the scheduled subtransaction transfers to
     */
    transferAccountId?: string;
}
