package shared

import (
	"time"
)

type TimeSlicedMetricsForEvergreen struct {
	Amount            *float64   `json:"amount,omitempty"`
	EndDate           *time.Time `json:"endDate,omitempty"`
	InvoiceOwner      *string    `json:"invoiceOwner,omitempty"`
	StartDate         *time.Time `json:"startDate,omitempty"`
	SubscriptionOwner *string    `json:"subscriptionOwner,omitempty"`
	TermNumber        *float64   `json:"termNumber,omitempty"`
}
