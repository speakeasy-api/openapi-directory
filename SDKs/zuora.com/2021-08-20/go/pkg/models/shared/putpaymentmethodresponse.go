package shared

type PutPaymentMethodResponse struct {
	ID      *string `json:"id,omitempty"`
	Success *bool   `json:"success,omitempty"`
}
