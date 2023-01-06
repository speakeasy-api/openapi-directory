package shared

// PaymentEntityPrefix
// Container for the prefix and starting number of payments.
type PaymentEntityPrefix struct {
	Prefix      *string `json:"prefix,omitempty"`
	StartNumber *int64  `json:"startNumber,omitempty"`
}
