import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the connector responses.
 */
export declare class PaymentConnectorResponses extends SpeakeasyBase {
    /**
     * Provider's operation/error message to be logged.
     */
    message: string;
    /**
     * Provider's operation/error code to be logged.
     */
    returnCode: string;
    /**
     * Provider's unique identifier for the transaction.
     */
    tid: string;
    /**
     * Connector's authorization ID.
     */
    authId: string;
}
/**
 * Payment details.
 */
export declare class Payment extends SpeakeasyBase {
    /**
     * Payment's account ID.
     */
    accountId: string;
    /**
     * Number of the bank issued invoice bar code.
     */
    bankIssuedInvoiceBarCodeNumber: string;
    /**
     * Type of the bank issued invoice bar code.
     */
    bankIssuedInvoiceBarCodeType: string;
    /**
     * Numeric sequence that identifies the bank issued invoice.
     */
    bankIssuedInvoiceIdentificationNumber: string;
    /**
     * Bank issued invoice ID formatted.
     */
    bankIssuedInvoiceIdentificationNumberFormatted: string;
    /**
     * Billing address information.
     */
    billingAddress: Record<string, any>;
    /**
     * Name of the person who owns the card.
     */
    cardHolder: string;
    /**
     * Numeric sequence of the card used in the transaction.
     */
    cardNumber: string;
    /**
     * Information about the connector responses.
     */
    connectorResponses: PaymentConnectorResponses;
    /**
     * Card Verification Value (CVV2) is a security code used by payment processors to reduce fraudulent credit and debit card transactions.
     */
    cvv2: string;
    /**
     * Payment due date, with the format `yyyy-mm-dd`.
     */
    dueDate: string;
    /**
     * Expire month of the card used in the transaction (2-digits).
     */
    expireMonth: string;
    /**
     * Expire year of the card used in the transaction (4-digits).
     */
    expireYear: string;
    /**
     * Fist digits of the card used in the transaction.
     */
    firstDigits: string;
    /**
     * When this field is set as `true`, the Gift Card is a discount over the price, and when set as `false`, it is not a discount.
     */
    giftCardAsDiscount: boolean;
    /**
     * Gift Card's caption.
     */
    giftCardCaption: string;
    /**
     * Gift Card's ID.
     */
    giftCardId: string;
    /**
     * Gift Card's name.
     */
    giftCardName: string;
    /**
     * Gift Card provider's ID.
     */
    giftCardProvider: string;
    /**
     * Name of the collection the Gift Card belongs to.
     */
    group: string;
    /**
     * VTEX payment ID that can be used as unique identifier.
     */
    id: string;
    /**
     * Number of payment installments.
     */
    installments: number;
    /**
     * Payment's account ID.
     */
    koinUrl: string;
    /**
     * Last digits of the card used in the transaction.
     */
    lastDigits: string;
    /**
     * This field retrieves the main account if the payment was made in a subaccount.
     */
    parentAccountId: string;
    /**
     * Payment system's ID.
     */
    paymentSystem: string;
    /**
     * Payment system's name.
     */
    paymentSystemName: string;
    /**
     * Code for the customer to use the Gift Card.
     */
    redemptionCode: string;
    /**
     * Payment's reference value in cents.
     */
    referenceValue: number;
    /**
     * Provider's unique identifier for the transaction.
     */
    tid: string;
    /**
     * Payment's URL.
     */
    url: string;
    /**
     * Payment's final amount in cents.
     */
    value: number;
}
