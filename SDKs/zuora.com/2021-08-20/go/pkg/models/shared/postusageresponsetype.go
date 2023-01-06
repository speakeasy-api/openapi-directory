package shared

type PostUsageResponseType struct {
	CheckImportStatus *string `json:"checkImportStatus,omitempty"`
	Size              *int64  `json:"size,omitempty"`
	Success           *bool   `json:"success,omitempty"`
}
