package shared

import (
	"time"
)

type RampIntervalResponse struct {
	Description *string    `json:"description,omitempty"`
	EndDate     *time.Time `json:"endDate,omitempty"`
	Name        *string    `json:"name,omitempty"`
	StartDate   *time.Time `json:"startDate,omitempty"`
}
