package shared

import (
	"time"
)

// RampIntervalRequest
// Container for the intervals that the ramp is split into in its timeline. Zuora can report metrics for this specific period.
type RampIntervalRequest struct {
	Description *string   `json:"description,omitempty"`
	EndDate     time.Time `json:"endDate"`
	Name        *string   `json:"name,omitempty"`
	StartDate   time.Time `json:"startDate"`
}
