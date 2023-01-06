package shared

type PostSubscriptionResponseType struct {
	ContractedMrr        *float64 `json:"contractedMrr,omitempty"`
	CreditMemoID         *string  `json:"creditMemoId,omitempty"`
	InvoiceID            *string  `json:"invoiceId,omitempty"`
	PaidAmount           *float64 `json:"paidAmount,omitempty"`
	PaymentID            *string  `json:"paymentId,omitempty"`
	SubscriptionID       *string  `json:"subscriptionId,omitempty"`
	SubscriptionNumber   *string  `json:"subscriptionNumber,omitempty"`
	Success              *bool    `json:"success,omitempty"`
	TotalContractedValue *float64 `json:"totalContractedValue,omitempty"`
}
