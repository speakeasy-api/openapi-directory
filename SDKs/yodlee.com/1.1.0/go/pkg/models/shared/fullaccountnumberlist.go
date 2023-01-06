package shared

type FullAccountNumberList struct {
	PaymentAccountNumber  *string `json:"paymentAccountNumber,omitempty"`
	UnmaskedAccountNumber *string `json:"unmaskedAccountNumber,omitempty"`
}
