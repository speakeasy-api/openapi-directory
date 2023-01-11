import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Accounts } from "./accounts";
import { Budgets } from "./budgets";
import { Categories } from "./categories";
import { Deprecated } from "./deprecated";
import { Months } from "./months";
import { PayeeLocations } from "./payeelocations";
import { Payees } from "./payees";
import { ScheduledTransactions } from "./scheduledtransactions";
import { Transactions } from "./transactions";
import { User } from "./user";
export declare const ServerList: readonly ["https://api.youneedabudget.com/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    accounts: Accounts;
    budgets: Budgets;
    categories: Categories;
    deprecated: Deprecated;
    months: Months;
    payeeLocations: PayeeLocations;
    payees: Payees;
    scheduledTransactions: ScheduledTransactions;
    transactions: Transactions;
    user: User;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
