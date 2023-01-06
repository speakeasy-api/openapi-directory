package shared

type VerificationBankTransferCodeTypeEnum string

const (
	VerificationBankTransferCodeTypeEnumBsb           VerificationBankTransferCodeTypeEnum = "BSB"
	VerificationBankTransferCodeTypeEnumIfsc          VerificationBankTransferCodeTypeEnum = "IFSC"
	VerificationBankTransferCodeTypeEnumRoutingNumber VerificationBankTransferCodeTypeEnum = "ROUTING_NUMBER"
	VerificationBankTransferCodeTypeEnumSortCode      VerificationBankTransferCodeTypeEnum = "SORT_CODE"
)

type VerificationBankTransferCode struct {
	ID   *string                               `json:"id,omitempty"`
	Type *VerificationBankTransferCodeTypeEnum `json:"type,omitempty"`
}
