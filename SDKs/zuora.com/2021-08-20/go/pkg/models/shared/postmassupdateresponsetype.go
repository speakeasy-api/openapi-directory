package shared

type PostMassUpdateResponseType struct {
	BulkKey *string `json:"bulkKey,omitempty"`
	Success *bool   `json:"success,omitempty"`
}
