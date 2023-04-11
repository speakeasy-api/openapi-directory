import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
export declare class MonthDetail extends SpeakeasyBase {
    /**
     * The total amount of transactions in the month, excluding those categorized to 'Inflow: Ready to Assign'
     */
    activity: number;
    /**
     * The Age of Money as of the month
     */
    ageOfMoney?: number;
    /**
     * The total amount budgeted in the month
     */
    budgeted: number;
    /**
     * The budget month categories.  Amounts (budgeted, activity, balance, etc.) are specific to the {month} parameter specified.
     */
    categories: Category[];
    /**
     * Whether or not the month has been deleted.  Deleted months will only be included in delta requests.
     */
    deleted: boolean;
    /**
     * The total amount of transactions categorized to 'Inflow: Ready to Assign' in the month
     */
    income: number;
    month: Date;
    note?: string;
    /**
     * The available amount for 'Ready to Assign'
     */
    toBeBudgeted: number;
}
