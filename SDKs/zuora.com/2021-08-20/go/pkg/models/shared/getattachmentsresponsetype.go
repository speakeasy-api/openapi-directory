package shared

type GetAttachmentsResponseType struct {
	Attachments []GetAttachmentResponseWithoutSuccessType `json:"attachments,omitempty"`
	NextPage    *string                                   `json:"nextPage,omitempty"`
	Success     *bool                                     `json:"success,omitempty"`
}
