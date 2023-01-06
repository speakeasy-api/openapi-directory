package shared

type PaymentBankTransferCodeTypeEnum string

const (
	PaymentBankTransferCodeTypeEnumRoutingNumber PaymentBankTransferCodeTypeEnum = "ROUTING_NUMBER"
	PaymentBankTransferCodeTypeEnumBsb           PaymentBankTransferCodeTypeEnum = "BSB"
	PaymentBankTransferCodeTypeEnumIfsc          PaymentBankTransferCodeTypeEnum = "IFSC"
	PaymentBankTransferCodeTypeEnumSortCode      PaymentBankTransferCodeTypeEnum = "SORT_CODE"
)

type PaymentBankTransferCode struct {
	ID   *string                          `json:"id,omitempty"`
	Type *PaymentBankTransferCodeTypeEnum `json:"type,omitempty"`
}
