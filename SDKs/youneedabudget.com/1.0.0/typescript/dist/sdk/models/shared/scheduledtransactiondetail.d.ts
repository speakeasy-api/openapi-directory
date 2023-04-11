import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduledSubTransaction } from "./scheduledsubtransaction";
/**
 * The scheduled transaction flag
 */
export declare enum ScheduledTransactionDetailFlagColorEnum {
    Red = "red",
    Orange = "orange",
    Yellow = "yellow",
    Green = "green",
    Blue = "blue",
    Purple = "purple",
    Null = "null"
}
export declare enum ScheduledTransactionDetailFrequencyEnum {
    Never = "never",
    Daily = "daily",
    Weekly = "weekly",
    EveryOtherWeek = "everyOtherWeek",
    TwiceAMonth = "twiceAMonth",
    Every4Weeks = "every4Weeks",
    Monthly = "monthly",
    EveryOtherMonth = "everyOtherMonth",
    Every3Months = "every3Months",
    Every4Months = "every4Months",
    TwiceAYear = "twiceAYear",
    Yearly = "yearly",
    EveryOtherYear = "everyOtherYear"
}
export declare class ScheduledTransactionDetail extends SpeakeasyBase {
    accountId: string;
    accountName: string;
    /**
     * The scheduled transaction amount in milliunits format
     */
    amount: number;
    categoryId?: string;
    categoryName?: string;
    /**
     * The first date for which the Scheduled Transaction was scheduled.
     */
    dateFirst: Date;
    /**
     * The next date for which the Scheduled Transaction is scheduled.
     */
    dateNext: Date;
    /**
     * Whether or not the scheduled transaction has been deleted.  Deleted scheduled transactions will only be included in delta requests.
     */
    deleted: boolean;
    /**
     * The scheduled transaction flag
     */
    flagColor?: ScheduledTransactionDetailFlagColorEnum;
    frequency: ScheduledTransactionDetailFrequencyEnum;
    id: string;
    memo?: string;
    payeeId?: string;
    payeeName?: string;
    /**
     * If a split scheduled transaction, the subtransactions.
     */
    subtransactions: ScheduledSubTransaction[];
    /**
     * If a transfer, the account_id which the scheduled transaction transfers to
     */
    transferAccountId?: string;
}
