package shared

type AccountAddressTypeEnum string

const (
	AccountAddressTypeEnumHome             AccountAddressTypeEnum = "HOME"
	AccountAddressTypeEnumBusiness         AccountAddressTypeEnum = "BUSINESS"
	AccountAddressTypeEnumPobox            AccountAddressTypeEnum = "POBOX"
	AccountAddressTypeEnumRetail           AccountAddressTypeEnum = "RETAIL"
	AccountAddressTypeEnumOffice           AccountAddressTypeEnum = "OFFICE"
	AccountAddressTypeEnumSmallBusiness    AccountAddressTypeEnum = "SMALL_BUSINESS"
	AccountAddressTypeEnumCommunication    AccountAddressTypeEnum = "COMMUNICATION"
	AccountAddressTypeEnumPermanent        AccountAddressTypeEnum = "PERMANENT"
	AccountAddressTypeEnumStatementAddress AccountAddressTypeEnum = "STATEMENT_ADDRESS"
	AccountAddressTypeEnumPayment          AccountAddressTypeEnum = "PAYMENT"
	AccountAddressTypeEnumPayoff           AccountAddressTypeEnum = "PAYOFF"
	AccountAddressTypeEnumUnknown          AccountAddressTypeEnum = "UNKNOWN"
)

type AccountAddress struct {
	Address1   *string                 `json:"address1,omitempty"`
	Address2   *string                 `json:"address2,omitempty"`
	Address3   *string                 `json:"address3,omitempty"`
	City       *string                 `json:"city,omitempty"`
	Country    *string                 `json:"country,omitempty"`
	SourceType *string                 `json:"sourceType,omitempty"`
	State      *string                 `json:"state,omitempty"`
	Street     *string                 `json:"street,omitempty"`
	Type       *AccountAddressTypeEnum `json:"type,omitempty"`
	Zip        *string                 `json:"zip,omitempty"`
}
