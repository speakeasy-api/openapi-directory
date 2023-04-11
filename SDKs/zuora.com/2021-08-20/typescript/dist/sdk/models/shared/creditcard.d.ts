import { SpeakeasyBase } from "../../../internal/utils";
import { AccountCreditCardHolder } from "./accountcreditcardholder";
/**
 * Type of card.
 *
 * @remarks
 *
 */
export declare enum CreditCardCardTypeEnum {
    Visa = "Visa",
    MasterCard = "MasterCard",
    AmericanExpress = "AmericanExpress",
    Discover = "Discover",
    Jcb = "JCB",
    Diners = "Diners",
    Cup = "CUP",
    Maestro = "Maestro",
    Electron = "Electron",
    AppleVisa = "AppleVisa",
    AppleMasterCard = "AppleMasterCard",
    AppleAmericanExpress = "AppleAmericanExpress",
    AppleDiscover = "AppleDiscover",
    AppleJCB = "AppleJCB",
    Elo = "Elo",
    Hipercard = "Hipercard",
    Naranja = "Naranja",
    Nativa = "Nativa",
    TarjetaShopping = "TarjetaShopping",
    Cencosud = "Cencosud",
    Argencard = "Argencard",
    Cabal = "Cabal"
}
/**
 * Default payment method associated with an account. Only credit card payment methods are supported.
 *
 * @remarks
 *
 */
export declare class CreditCard extends SpeakeasyBase {
    /**
     * Information about the cardholder of a credit card payment method associated with an account. If you do not provide information about the cardholder, Zuora uses the account's bill-to contact.
     *
     * @remarks
     *
     */
    cardHolderInfo?: AccountCreditCardHolder;
    /**
     * Card number. Once set, you cannot update or query the value of this field. The value of this field is only available in masked format. For example, XXXX-XXXX-XXXX-1234 (hyphens must not be used when you set the credit card number).
     *
     * @remarks
     *
     */
    cardNumber?: string;
    /**
     * Type of card.
     *
     * @remarks
     *
     */
    cardType?: CreditCardCardTypeEnum;
    /**
     * Expiration date of the card.
     *
     * @remarks
     *
     */
    expirationMonth?: number;
    /**
     * Expiration year of the card.
     *
     * @remarks
     *
     */
    expirationYear?: number;
    /**
     * CVV or CVV2 security code of the card. To ensure PCI compliance, Zuora does not store the value of this field.
     *
     * @remarks
     *
     */
    securityCode?: string;
}
