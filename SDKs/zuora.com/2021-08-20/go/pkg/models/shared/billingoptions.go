package shared

import (
	"time"
)

type BillingOptions struct {
	DocumentDate *time.Time `json:"documentDate,omitempty"`
	TargetDate   *time.Time `json:"targetDate,omitempty"`
}
