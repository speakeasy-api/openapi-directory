package shared

type PostAttachmentResponseType struct {
	FileID  *string `json:"fileId,omitempty"`
	ID      *string `json:"id,omitempty"`
	Success *bool   `json:"success,omitempty"`
}
