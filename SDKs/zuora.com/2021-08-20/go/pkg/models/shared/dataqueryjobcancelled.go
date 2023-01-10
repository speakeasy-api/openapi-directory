package shared

import (
	"time"
)

type DataQueryJobCancelledQueryStatusEnum string

const (
	DataQueryJobCancelledQueryStatusEnumCancelled DataQueryJobCancelledQueryStatusEnum = "cancelled"
)

// DataQueryJobCancelled
// A cancelled data query job.
type DataQueryJobCancelled struct {
	CreatedBy        *string                               `json:"createdBy,omitempty"`
	ID               *string                               `json:"id,omitempty"`
	Query            *string                               `json:"query,omitempty"`
	QueryStatus      *DataQueryJobCancelledQueryStatusEnum `json:"queryStatus,omitempty"`
	RemainingRetries *int64                                `json:"remainingRetries,omitempty"`
	UpdatedOn        *time.Time                            `json:"updatedOn,omitempty"`
}
