import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { Category } from "./category";
import { CategoryGroup } from "./categorygroup";
import { CurrencyFormat } from "./currencyformat";
import { DateFormat } from "./dateformat";
import { MonthDetail } from "./monthdetail";
import { Payee } from "./payee";
import { PayeeLocation } from "./payeelocation";
import { ScheduledSubTransaction } from "./scheduledsubtransaction";
import { ScheduledTransactionSummary } from "./scheduledtransactionsummary";
import { SubTransaction } from "./subtransaction";
import { TransactionSummary } from "./transactionsummary";
export declare class BudgetDetail extends SpeakeasyBase {
    accounts?: Account[];
    categories?: Category[];
    categoryGroups?: CategoryGroup[];
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
    months?: MonthDetail[];
    name: string;
    payeeLocations?: PayeeLocation[];
    payees?: Payee[];
    scheduledSubtransactions?: ScheduledSubTransaction[];
    scheduledTransactions?: ScheduledTransactionSummary[];
    subtransactions?: SubTransaction[];
    transactions?: TransactionSummary[];
}
