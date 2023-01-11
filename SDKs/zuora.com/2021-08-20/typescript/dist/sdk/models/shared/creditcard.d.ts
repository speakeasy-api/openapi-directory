import { SpeakeasyBase } from "../../../internal/utils";
import { AccountCreditCardHolder } from "./accountcreditcardholder";
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
    AppleJcb = "AppleJCB",
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
**/
export declare class CreditCard extends SpeakeasyBase {
    cardHolderInfo?: AccountCreditCardHolder;
    cardNumber?: string;
    cardType?: CreditCardCardTypeEnum;
    expirationMonth?: number;
    expirationYear?: number;
    securityCode?: string;
}
