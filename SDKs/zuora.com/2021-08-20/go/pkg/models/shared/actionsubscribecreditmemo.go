package shared

// ActionSubscribeCreditMemo
// Container for credit memos.
//
// **Note**: This field is only available if you have the Invoice Settlement feature enabled and set the `X-Zuora-WSDL-Version` request header to `107` or later.
type ActionSubscribeCreditMemo struct {
	TaxAmount             *float64 `json:"TaxAmount,omitempty"`
	TotalAmount           *float64 `json:"TotalAmount,omitempty"`
	TotalAmountWithoutTax *float64 `json:"TotalAmountWithoutTax,omitempty"`
}
