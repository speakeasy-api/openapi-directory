package shared

type ActionSubscribeCreditMemoData struct {
	CreditMemo     *ActionSubscribeCreditMemo      `json:"CreditMemo,omitempty"`
	CreditMemoItem []ActionSubscribeCreditMemoItem `json:"CreditMemoItem,omitempty"`
}
