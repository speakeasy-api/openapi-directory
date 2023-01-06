package shared

type CreditMemoApplyDebitMemoItemRequestType struct {
	Amount           float64 `json:"amount"`
	CreditMemoItemID *string `json:"creditMemoItemId,omitempty"`
	CreditTaxItemID  *string `json:"creditTaxItemId,omitempty"`
	DebitMemoItemID  *string `json:"debitMemoItemId,omitempty"`
	TaxItemID        *string `json:"taxItemId,omitempty"`
}
