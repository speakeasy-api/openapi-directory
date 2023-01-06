package shared

type PostUploadFileResponse struct {
	FileID  *string `json:"fileId,omitempty"`
	Success *bool   `json:"success,omitempty"`
}
