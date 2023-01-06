package shared

// InvoiceEntityPrefix
// Container for the prefix and starting document number of invoices.
type InvoiceEntityPrefix struct {
	Prefix      *string `json:"prefix,omitempty"`
	StartNumber *int64  `json:"startNumber,omitempty"`
}
