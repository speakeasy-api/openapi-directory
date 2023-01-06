package shared

import (
	"time"
)

type ProxyModifyBillRun struct {
	InvoiceDate *time.Time `json:"InvoiceDate,omitempty"`
	Status      string     `json:"Status"`
}
