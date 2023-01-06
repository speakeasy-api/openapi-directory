package shared

type ActionAmendCreditMemoData struct {
	CreditMemo     *ActionAmendCreditMemo      `json:"CreditMemo,omitempty"`
	CreditMemoItem []ActionAmendCreditMemoItem `json:"CreditMemoItem,omitempty"`
}
