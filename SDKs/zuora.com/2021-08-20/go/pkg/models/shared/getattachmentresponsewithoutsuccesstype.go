package shared

import (
	"time"
)

type GetAttachmentResponseWithoutSuccessType struct {
	CreatedBy       *string    `json:"createdBy,omitempty"`
	CreatedOn       *time.Time `json:"createdOn,omitempty"`
	Description     *string    `json:"description,omitempty"`
	FileContentType *string    `json:"fileContentType,omitempty"`
	FileID          *string    `json:"fileId,omitempty"`
	FileName        *string    `json:"fileName,omitempty"`
	ID              *string    `json:"id,omitempty"`
	UpdatedBy       *string    `json:"updatedBy,omitempty"`
	UpdatedOn       *time.Time `json:"updatedOn,omitempty"`
}
