import { SpeakeasyBase } from "../../../internal/utils";
import { AccountTypeEnum } from "./accounttypeenum";
export declare class Account extends SpeakeasyBase {
    /**
     * The current balance of the account in milliunits format
     */
    balance: number;
    /**
     * The current cleared balance of the account in milliunits format
     */
    clearedBalance: number;
    /**
     * Whether this account is closed or not
     */
    closed: boolean;
    debtEscrowAmounts?: Record<string, number>;
    debtInterestRates?: Record<string, number>;
    debtMinimumPayments?: Record<string, number>;
    /**
     * The original debt/loan account balance, specified in milliunits format.
     */
    debtOriginalBalance?: number;
    /**
     * Whether or not the account has been deleted.  Deleted accounts will only be included in delta requests.
     */
    deleted: boolean;
    /**
     * If an account linked to a financial institution (direct_import_linked=true) and the linked connection is not in a healthy state, this will be true.
     */
    directImportInError?: boolean;
    /**
     * Whether or not the account is linked to a financial institution for automatic transaction import.
     */
    directImportLinked?: boolean;
    id: string;
    /**
     * A date/time specifying when the account was last reconciled.
     */
    lastReconciledAt?: Date;
    name: string;
    note?: string;
    /**
     * Whether this account is on budget or not
     */
    onBudget: boolean;
    /**
     * The payee id which should be used when transferring to this account
     */
    transferPayeeId: string;
    /**
     * The type of account
     */
    type: AccountTypeEnum;
    /**
     * The current uncleared balance of the account in milliunits format
     */
    unclearedBalance: number;
}
