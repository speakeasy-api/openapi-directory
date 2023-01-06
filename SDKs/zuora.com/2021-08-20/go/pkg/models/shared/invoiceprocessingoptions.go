package shared

import (
	"time"
)

type InvoiceProcessingOptions struct {
	InvoiceDate       *time.Time `json:"InvoiceDate,omitempty"`
	InvoiceTargetDate time.Time  `json:"InvoiceTargetDate"`
}
