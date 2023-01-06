package shared

import (
	"time"
)

// Term
// List of terms for the subscription.
type Term struct {
	EndDate     *time.Time `json:"endDate,omitempty"`
	IsEvergreen *bool      `json:"isEvergreen,omitempty"`
	StartDate   *time.Time `json:"startDate,omitempty"`
	TermNumber  *float64   `json:"termNumber,omitempty"`
}
