import { Accounts } from "./accounts";
import { Budgets } from "./budgets";
import { Categories } from "./categories";
import { Deprecated } from "./deprecated";
import * as shared from "./models/shared";
import { Months } from "./months";
import { PayeeLocations } from "./payeelocations";
import { Payees } from "./payees";
import { ScheduledTransactions } from "./scheduledtransactions";
import { Transactions } from "./transactions";
import { User } from "./user";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.youneedabudget.com/v1"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.youneedabudget.com
 */
export declare class SDK {
    /**
     * The accounts for a budget
     */
    accounts: Accounts;
    budgets: Budgets;
    /**
     * The categories for a budget
     */
    categories: Categories;
    deprecated: Deprecated;
    /**
     * Each budget contains one or more months, which is where Ready to Assign, Age of Money and category (budgeted / activity / balances) amounts are available.
     */
    months: Months;
    /**
     * When you enter a transaction and specify a payee on the YNAB mobile apps, the GPS coordinates for that location are stored, with your permission, so that the next time you are in the same place (like the Grocery store) we can pre-populate nearby payees for you!  It’s handy and saves you time.  This resource makes these locations available.  Locations will not be available for all payees.
     */
    payeeLocations: PayeeLocations;
    /**
     * The payees for a budget
     */
    payees: Payees;
    /**
     * The scheduled transactions for a budget
     */
    scheduledTransactions: ScheduledTransactions;
    /**
     * The transactions for a budget
     */
    transactions: Transactions;
    user: User;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
