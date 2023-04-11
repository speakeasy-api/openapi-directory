import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { CurrencyFormat } from "./currencyformat";
import { DateFormat } from "./dateformat";
export declare class BudgetSummary extends SpeakeasyBase {
    /**
     * The budget accounts (only included if `include_accounts=true` specified as query parameter)
     */
    accounts?: Account[];
    /**
     * The currency format setting for the budget.  In some cases the format will not be available and will be specified as null.
     */
    currencyFormat?: CurrencyFormat;
    /**
     * The date format setting for the budget.  In some cases the format will not be available and will be specified as null.
     */
    dateFormat?: DateFormat;
    /**
     * The earliest budget month
     */
    firstMonth?: Date;
    id: string;
    /**
     * The last time any changes were made to the budget from either a web or mobile client
     */
    lastModifiedOn?: Date;
    /**
     * The latest budget month
     */
    lastMonth?: Date;
    name: string;
}
