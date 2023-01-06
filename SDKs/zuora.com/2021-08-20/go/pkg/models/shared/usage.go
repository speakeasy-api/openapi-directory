package shared

type UsageValues struct {
	TaskCount *int64 `json:"taskCount,omitempty"`
}

// Usage
// The task usage of a particular day.
type Usage struct {
	Date   *string      `json:"date,omitempty"`
	Values *UsageValues `json:"values,omitempty"`
}
