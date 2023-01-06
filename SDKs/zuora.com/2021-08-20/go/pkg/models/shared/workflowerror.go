package shared

type WorkflowErrorCodeEnum string

const (
	WorkflowErrorCodeEnumInvalid WorkflowErrorCodeEnum = "invalid"
)

type WorkflowError struct {
	Code   *WorkflowErrorCodeEnum `json:"code,omitempty"`
	Status *int64                 `json:"status,omitempty"`
	Title  *string                `json:"title,omitempty"`
}
