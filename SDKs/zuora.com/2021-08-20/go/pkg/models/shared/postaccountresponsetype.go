package shared

type PostAccountResponseType struct {
	AccountID            *string `json:"accountId,omitempty"`
	AccountNumber        *string `json:"accountNumber,omitempty"`
	BillToContactID      *string `json:"billToContactId,omitempty"`
	ContractedMrr        *string `json:"contractedMrr,omitempty"`
	CreditMemoID         *string `json:"creditMemoId,omitempty"`
	InvoiceID            *string `json:"invoiceId,omitempty"`
	PaidAmount           *string `json:"paidAmount,omitempty"`
	PaymentID            *string `json:"paymentId,omitempty"`
	PaymentMethodID      *string `json:"paymentMethodId,omitempty"`
	SoldToContactID      *string `json:"soldToContactId,omitempty"`
	SubscriptionID       *string `json:"subscriptionId,omitempty"`
	SubscriptionNumber   *string `json:"subscriptionNumber,omitempty"`
	Success              *bool   `json:"success,omitempty"`
	TotalContractedValue *string `json:"totalContractedValue,omitempty"`
}
