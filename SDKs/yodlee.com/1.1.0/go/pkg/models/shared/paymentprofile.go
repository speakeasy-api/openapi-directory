package shared

type PaymentProfile struct {
	Address                 []AccountAddress         `json:"address,omitempty"`
	Identifier              *PaymentIdentifier       `json:"identifier,omitempty"`
	PaymentBankTransferCode *PaymentBankTransferCode `json:"paymentBankTransferCode,omitempty"`
}
