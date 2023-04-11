import { SpeakeasyBase } from "../../../internal/utils";
export declare class BankAccount extends SpeakeasyBase {
    /**
     * The name of the account
     */
    accountName?: string;
    /**
     * The account number
     */
    accountNumber?: string;
    /**
     * Fixed amounts (for example, if an employee wants to have $100 of their salary transferred to one account, and the remaining amount to another)
     */
    amount?: number;
    /**
     * The BSB number of the account
     */
    bsb?: string;
    /**
     * If this account is the Remaining bank account
     */
    remainder?: boolean;
    /**
     * The text that will appear on your employee's bank statement when they receive payment
     */
    statementText?: string;
}
