import { SpeakeasyBase } from "../../../internal/utils";
export declare class Payment extends SpeakeasyBase {
    /**
     * Card holder
     */
    cardHolder: string;
    /**
     * Card number.
     */
    cardNumber: string;
    /**
     * Connector responses.
     */
    connectorResponses: Record<string, any>;
    /**
     * Card verification code.
     */
    cvv2: string;
    /**
     * Due date.
     */
    dueDate: string;
    /**
     * Card expiration month.
     */
    expireMonth: string;
    /**
     * Card expiration year.
     */
    expireYear: string;
    /**
     * Card first digits.
     */
    firstDigits: string;
    /**
     * Gift card caption.
     */
    giftCardCaption: string;
    /**
     * Gift card ID.
     */
    giftCardId: string;
    /**
     * Gift card name.
     */
    giftCardName: string;
    /**
     * Payment group.
     */
    group: string;
    /**
     * Payment ID.
     */
    id: string;
    /**
     * Payment installments.
     */
    installments: number;
    /**
     * Card last digits.
     */
    lastDigits: string;
    /**
     * Payment system.
     */
    paymentSystem: string;
    /**
     * Payment system name.
     */
    paymentSystemName: string;
    /**
     * Redemption code.
     */
    redemptionCode: string;
    /**
     * Reference value for interest calculation in cents.
     */
    referenceValue: number;
    /**
     * Payment TID.
     */
    tid: string;
    /**
     * Payment URL.
     */
    url: string;
    /**
     * Payment value in cents.
     */
    value: number;
}
