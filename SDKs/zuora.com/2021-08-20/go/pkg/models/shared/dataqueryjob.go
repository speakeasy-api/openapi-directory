package shared

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
	DataFile       *string                      `json:"dataFile,omitempty"`
	OutputRows     *int64                       `json:"outputRows,omitempty"`
	ProcessingTime *int64                       `json:"processingTime,omitempty"`
	QueryStatus    *DataQueryJobQueryStatusEnum `json:"queryStatus,omitempty"`
}
