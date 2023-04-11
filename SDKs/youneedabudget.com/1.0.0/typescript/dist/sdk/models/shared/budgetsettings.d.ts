import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyFormat } from "./currencyformat";
import { DateFormat } from "./dateformat";
export declare class BudgetSettings extends SpeakeasyBase {
    /**
     * The currency format setting for the budget.  In some cases the format will not be available and will be specified as null.
     */
    currencyFormat: CurrencyFormat;
    /**
     * The date format setting for the budget.  In some cases the format will not be available and will be specified as null.
     */
    dateFormat: DateFormat;
}
