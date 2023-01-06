package shared

type DataQueryJobCancelledQueryStatusEnum string

const (
	DataQueryJobCancelledQueryStatusEnumCancelled DataQueryJobCancelledQueryStatusEnum = "cancelled"
)

// DataQueryJobCancelled
// A cancelled data query job.
type DataQueryJobCancelled struct {
	QueryStatus *DataQueryJobCancelledQueryStatusEnum `json:"queryStatus,omitempty"`
}
