package shared

type CreditCardCardTypeEnum string

const (
	CreditCardCardTypeEnumVisa                 CreditCardCardTypeEnum = "Visa"
	CreditCardCardTypeEnumMasterCard           CreditCardCardTypeEnum = "MasterCard"
	CreditCardCardTypeEnumAmericanExpress      CreditCardCardTypeEnum = "AmericanExpress"
	CreditCardCardTypeEnumDiscover             CreditCardCardTypeEnum = "Discover"
	CreditCardCardTypeEnumJcb                  CreditCardCardTypeEnum = "JCB"
	CreditCardCardTypeEnumDiners               CreditCardCardTypeEnum = "Diners"
	CreditCardCardTypeEnumCup                  CreditCardCardTypeEnum = "CUP"
	CreditCardCardTypeEnumMaestro              CreditCardCardTypeEnum = "Maestro"
	CreditCardCardTypeEnumElectron             CreditCardCardTypeEnum = "Electron"
	CreditCardCardTypeEnumAppleVisa            CreditCardCardTypeEnum = "AppleVisa"
	CreditCardCardTypeEnumAppleMasterCard      CreditCardCardTypeEnum = "AppleMasterCard"
	CreditCardCardTypeEnumAppleAmericanExpress CreditCardCardTypeEnum = "AppleAmericanExpress"
	CreditCardCardTypeEnumAppleDiscover        CreditCardCardTypeEnum = "AppleDiscover"
	CreditCardCardTypeEnumAppleJcb             CreditCardCardTypeEnum = "AppleJCB"
	CreditCardCardTypeEnumElo                  CreditCardCardTypeEnum = "Elo"
	CreditCardCardTypeEnumHipercard            CreditCardCardTypeEnum = "Hipercard"
	CreditCardCardTypeEnumNaranja              CreditCardCardTypeEnum = "Naranja"
	CreditCardCardTypeEnumNativa               CreditCardCardTypeEnum = "Nativa"
	CreditCardCardTypeEnumTarjetaShopping      CreditCardCardTypeEnum = "TarjetaShopping"
	CreditCardCardTypeEnumCencosud             CreditCardCardTypeEnum = "Cencosud"
	CreditCardCardTypeEnumArgencard            CreditCardCardTypeEnum = "Argencard"
	CreditCardCardTypeEnumCabal                CreditCardCardTypeEnum = "Cabal"
)

// CreditCard
// Default payment method associated with an account. Only credit card payment methods are supported.
type CreditCard struct {
	CardHolderInfo  *AccountCreditCardHolder `json:"cardHolderInfo,omitempty"`
	CardNumber      *string                  `json:"cardNumber,omitempty"`
	CardType        *CreditCardCardTypeEnum  `json:"cardType,omitempty"`
	ExpirationMonth *int64                   `json:"expirationMonth,omitempty"`
	ExpirationYear  *int64                   `json:"expirationYear,omitempty"`
	SecurityCode    *string                  `json:"securityCode,omitempty"`
}
