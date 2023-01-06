package shared

// RefundEntityPrefix
// Container for the prefix and starting number of refunds.
type RefundEntityPrefix struct {
	Prefix      *string `json:"prefix,omitempty"`
	StartNumber *int64  `json:"startNumber,omitempty"`
}
