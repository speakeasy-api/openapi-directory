package shared

type EvaluateAccountAddressTypeEnum string

const (
	EvaluateAccountAddressTypeEnumHome             EvaluateAccountAddressTypeEnum = "HOME"
	EvaluateAccountAddressTypeEnumBusiness         EvaluateAccountAddressTypeEnum = "BUSINESS"
	EvaluateAccountAddressTypeEnumPobox            EvaluateAccountAddressTypeEnum = "POBOX"
	EvaluateAccountAddressTypeEnumRetail           EvaluateAccountAddressTypeEnum = "RETAIL"
	EvaluateAccountAddressTypeEnumOffice           EvaluateAccountAddressTypeEnum = "OFFICE"
	EvaluateAccountAddressTypeEnumSmallBusiness    EvaluateAccountAddressTypeEnum = "SMALL_BUSINESS"
	EvaluateAccountAddressTypeEnumCommunication    EvaluateAccountAddressTypeEnum = "COMMUNICATION"
	EvaluateAccountAddressTypeEnumPermanent        EvaluateAccountAddressTypeEnum = "PERMANENT"
	EvaluateAccountAddressTypeEnumStatementAddress EvaluateAccountAddressTypeEnum = "STATEMENT_ADDRESS"
	EvaluateAccountAddressTypeEnumPayment          EvaluateAccountAddressTypeEnum = "PAYMENT"
	EvaluateAccountAddressTypeEnumPayoff           EvaluateAccountAddressTypeEnum = "PAYOFF"
	EvaluateAccountAddressTypeEnumUnknown          EvaluateAccountAddressTypeEnum = "UNKNOWN"
)

type EvaluateAccountAddress struct {
	Address1   *string                         `json:"address1,omitempty"`
	Address2   *string                         `json:"address2,omitempty"`
	Address3   *string                         `json:"address3,omitempty"`
	City       *string                         `json:"city,omitempty"`
	Country    *string                         `json:"country,omitempty"`
	SourceType *string                         `json:"sourceType,omitempty"`
	State      *string                         `json:"state,omitempty"`
	Street     string                          `json:"street"`
	Type       *EvaluateAccountAddressTypeEnum `json:"type,omitempty"`
	Zip        *string                         `json:"zip,omitempty"`
}
