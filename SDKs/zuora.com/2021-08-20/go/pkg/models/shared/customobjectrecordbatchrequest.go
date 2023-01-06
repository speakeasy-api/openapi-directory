package shared

// CustomObjectRecordBatchRequest
// Request of processing custom object records in batch.
type CustomObjectRecordBatchRequest struct {
	Action CustomObjectRecordBatchAction `json:"action"`
}
