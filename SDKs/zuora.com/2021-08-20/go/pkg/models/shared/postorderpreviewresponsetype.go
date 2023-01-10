package shared

type PostOrderPreviewResponseTypeReasons struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type PostOrderPreviewResponseType struct {
	PreviewResult *PreviewResult                        `json:"previewResult,omitempty"`
	ProcessID     *string                               `json:"processId,omitempty"`
	Reasons       []PostOrderPreviewResponseTypeReasons `json:"reasons,omitempty"`
	Success       *bool                                 `json:"success,omitempty"`
}
