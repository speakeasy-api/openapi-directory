import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the cardholder of a credit card payment method associated with an account. If you do not provide information about the cardholder, Zuora uses the account's bill-to contact.
 *
**/
export declare class AccountCreditCardHolder extends SpeakeasyBase {
    addressLine1?: string;
    addressLine2?: string;
    cardHolderName?: string;
    city?: string;
    country?: string;
    email?: string;
    phone?: string;
    state?: string;
    zipCode?: string;
}
