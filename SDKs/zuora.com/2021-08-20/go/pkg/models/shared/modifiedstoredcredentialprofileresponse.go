package shared

type ModifiedStoredCredentialProfileResponse struct {
	Number          *int64  `json:"number,omitempty"`
	PaymentMethodID *string `json:"paymentMethodId,omitempty"`
	Success         *bool   `json:"success,omitempty"`
}
