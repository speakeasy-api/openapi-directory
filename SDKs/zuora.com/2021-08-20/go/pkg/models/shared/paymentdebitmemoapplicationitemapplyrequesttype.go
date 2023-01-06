package shared

type PaymentDebitMemoApplicationItemApplyRequestType struct {
	Amount          float64 `json:"amount"`
	DebitMemoItemID *string `json:"debitMemoItemId,omitempty"`
	TaxItemID       *string `json:"taxItemId,omitempty"`
}
