package shared

import (
	"time"
)

type DataQueryJobQueryStatusEnum string

const (
	DataQueryJobQueryStatusEnumSubmitted  DataQueryJobQueryStatusEnum = "submitted"
	DataQueryJobQueryStatusEnumAccepted   DataQueryJobQueryStatusEnum = "accepted"
	DataQueryJobQueryStatusEnumInProgress DataQueryJobQueryStatusEnum = "in_progress"
	DataQueryJobQueryStatusEnumCompleted  DataQueryJobQueryStatusEnum = "completed"
	DataQueryJobQueryStatusEnumFailed     DataQueryJobQueryStatusEnum = "failed"
	DataQueryJobQueryStatusEnumCancelled  DataQueryJobQueryStatusEnum = "cancelled"
)

// DataQueryJob
// A data query job.
type DataQueryJob struct {
	CreatedBy        *string                      `json:"createdBy,omitempty"`
	DataFile         *string                      `json:"dataFile,omitempty"`
	ID               *string                      `json:"id,omitempty"`
	OutputRows       *int64                       `json:"outputRows,omitempty"`
	ProcessingTime   *int64                       `json:"processingTime,omitempty"`
	Query            *string                      `json:"query,omitempty"`
	QueryStatus      *DataQueryJobQueryStatusEnum `json:"queryStatus,omitempty"`
	RemainingRetries *int64                       `json:"remainingRetries,omitempty"`
	UpdatedOn        *time.Time                   `json:"updatedOn,omitempty"`
}
