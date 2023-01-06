package operations

import (
	"openapi/pkg/models/shared"
)

type PostWorkflowImportHeaders struct {
	ZuoraTrackID *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostWorkflowImportRequestBody struct {
	Linkages []shared.Linkage `json:"linkages,omitempty"`
	Tasks    []shared.Task    `json:"tasks,omitempty"`
	Workflow *shared.Workflow `json:"workflow,omitempty"`
}

type PostWorkflowImportRequest struct {
	Headers PostWorkflowImportHeaders
	Request *PostWorkflowImportRequestBody `request:"mediaType=application/json"`
}

type PostWorkflowImportResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Workflow    *shared.Workflow
}
