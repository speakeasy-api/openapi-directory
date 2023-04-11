import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of goal, if the category has a goal (TB='Target Category Balance', TBD='Target Category Balance by Date', MF='Monthly Funding', NEED='Plan Your Spending')
 */
export declare enum CategoryGoalTypeEnum {
    Tb = "TB",
    Tbd = "TBD",
    Mf = "MF",
    Need = "NEED",
    Debt = "DEBT",
    Null = "null"
}
export declare class Category extends SpeakeasyBase {
    /**
     * Activity amount in milliunits format
     */
    activity: number;
    /**
     * Balance in milliunits format
     */
    balance: number;
    /**
     * Budgeted amount in milliunits format
     */
    budgeted: number;
    categoryGroupId: string;
    /**
     * Whether or not the category has been deleted.  Deleted categories will only be included in delta requests.
     */
    deleted: boolean;
    /**
     * The goal cadence
     */
    goalCadence?: number;
    /**
     * The goal cadence frequency
     */
    goalCadenceFrequency?: number;
    /**
     * The month a goal was created
     */
    goalCreationMonth?: Date;
    /**
     * The day of the goal
     */
    goalDay?: number;
    /**
     * The number of months, including the current month, left in the current goal period.
     */
    goalMonthsToBudget?: number;
    /**
     * The total amount funded towards the goal within the current goal period.
     */
    goalOverallFunded?: number;
    /**
     * The amount of funding still needed to complete the goal within the current goal period.
     */
    goalOverallLeft?: number;
    /**
     * The percentage completion of the goal
     */
    goalPercentageComplete?: number;
    /**
     * The goal target amount in milliunits
     */
    goalTarget?: number;
    /**
     * The original target month for the goal to be completed.  Only some goal types specify this date.
     */
    goalTargetMonth?: Date;
    /**
     * The type of goal, if the category has a goal (TB='Target Category Balance', TBD='Target Category Balance by Date', MF='Monthly Funding', NEED='Plan Your Spending')
     */
    goalType?: CategoryGoalTypeEnum;
    /**
     * The amount of funding still needed in the current month to stay on track towards completing the goal within the current goal period.  This amount will generally correspond to the 'Underfunded' amount in the web and mobile clients except when viewing a category with a Needed for Spending Goal in a future month.  The web and mobile clients will ignore any funding from a prior goal period when viewing category with a Needed for Spending Goal in a future month.
     */
    goalUnderFunded?: number;
    /**
     * Whether or not the category is hidden
     */
    hidden: boolean;
    id: string;
    name: string;
    note?: string;
    /**
     * If category is hidden this is the id of the category group it originally belonged to before it was hidden.
     */
    originalCategoryGroupId?: string;
}
