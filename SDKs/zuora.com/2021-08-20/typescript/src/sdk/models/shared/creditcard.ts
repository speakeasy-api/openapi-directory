import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountCreditCardHolder } from "./accountcreditcardholder";


export enum CreditCardCardTypeEnum {
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


// CreditCard
/** 
 * Default payment method associated with an account. Only credit card payment methods are supported.
 * 
**/
export class CreditCard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cardHolderInfo" })
  cardHolderInfo?: AccountCreditCardHolder;

  @SpeakeasyMetadata({ data: "json, name=cardNumber" })
  cardNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=cardType" })
  cardType?: CreditCardCardTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=expirationMonth" })
  expirationMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=expirationYear" })
  expirationYear?: number;

  @SpeakeasyMetadata({ data: "json, name=securityCode" })
  securityCode?: string;
}
