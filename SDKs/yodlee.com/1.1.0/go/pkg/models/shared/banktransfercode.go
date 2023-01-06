package shared

type BankTransferCodeTypeEnum string

const (
	BankTransferCodeTypeEnumBsb           BankTransferCodeTypeEnum = "BSB"
	BankTransferCodeTypeEnumIfsc          BankTransferCodeTypeEnum = "IFSC"
	BankTransferCodeTypeEnumRoutingNumber BankTransferCodeTypeEnum = "ROUTING_NUMBER"
	BankTransferCodeTypeEnumSortCode      BankTransferCodeTypeEnum = "SORT_CODE"
)

type BankTransferCode struct {
	ID   *string                   `json:"id,omitempty"`
	Type *BankTransferCodeTypeEnum `json:"type,omitempty"`
}
