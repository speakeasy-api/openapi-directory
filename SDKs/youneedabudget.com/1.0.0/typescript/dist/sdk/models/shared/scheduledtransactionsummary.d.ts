import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The scheduled transaction flag
 */
export declare enum ScheduledTransactionSummaryFlagColorEnum {
    Red = "red",
    Orange = "orange",
    Yellow = "yellow",
    Green = "green",
    Blue = "blue",
    Purple = "purple",
    Null = "null"
}
export declare enum ScheduledTransactionSummaryFrequencyEnum {
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
export declare class ScheduledTransactionSummary extends SpeakeasyBase {
    accountId: string;
    /**
     * The scheduled transaction amount in milliunits format
     */
    amount: number;
    categoryId?: string;
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
    flagColor?: ScheduledTransactionSummaryFlagColorEnum;
    frequency: ScheduledTransactionSummaryFrequencyEnum;
    id: string;
    memo?: string;
    payeeId?: string;
    /**
     * If a transfer, the account_id which the scheduled transaction transfers to
     */
    transferAccountId?: string;
}
