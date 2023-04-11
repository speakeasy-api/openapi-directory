import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorResponses } from "./connectorresponses";
export declare class Payment1 extends SpeakeasyBase {
    /**
     * Payment card holder.
     */
    cardHolder: string;
    /**
     * Payment card number.
     */
    cardNumber: string;
    connectorResponses: ConnectorResponses;
    /**
     * Card Verification Value (CVV2) is a security code used by payment processors to reduce fraudulent credit and debit card transactions.
     */
    cvv2: string;
    /**
     * Payment due date.
     */
    dueDate: string;
    /**
     * Payment card expire month.
     */
    expireMonth: string;
    /**
     * Payment card expire year.
     */
    expireYear: string;
    /**
     * Payment card first digits.
     */
    firstDigits: string;
    /**
     * Gift Card caption.
     */
    giftCardCaption: string;
    /**
     * Gift Card ID.
     */
    giftCardId: string;
    /**
     * Gift Card name.
     */
    giftCardName: string;
    /**
     * It represents the payment method. For each method, it can have the following values:
     *
     * @remarks
     *
     * - **Credit card:** `creditCard`
     *
     * - **Debid card:** `debitCard`
     *
     * - **Bank invoice:** `bankInvoice`
     *
     * - **Promissory:** `promissory`
     *
     * - **Gift card:** `giftCard`
     *
     * - **Pix:** `instantPayment`
     */
    group: string;
    /**
     * Payment ID.
     */
    id: string;
    /**
     * Payment Installments quantity.
     */
    installments: number;
    /**
     * Payment card last digits.
     */
    lastDigits: string;
    /**
     * Payment system ID.
     */
    paymentSystem: string;
    /**
     * Payment system name.
     */
    paymentSystemName: string;
    /**
     * Code for the customer to use the Gift Card.
     */
    redemptionCode: string;
    /**
     * Payment reference Value.
     */
    referenceValue: number;
    /**
     * Payment transaction ID.
     */
    tid: string;
    /**
     * Payment URL.
     */
    url: string;
    /**
     * Payment value.
     */
    value: number;
}
