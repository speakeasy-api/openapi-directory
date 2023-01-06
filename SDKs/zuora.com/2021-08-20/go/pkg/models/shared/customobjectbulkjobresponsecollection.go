package shared

type CustomObjectBulkJobResponseCollection struct {
	Count  *int64                        `json:"count,omitempty"`
	Cursor *string                       `json:"cursor,omitempty"`
	Jobs   []CustomObjectBulkJobResponse `json:"jobs"`
}
