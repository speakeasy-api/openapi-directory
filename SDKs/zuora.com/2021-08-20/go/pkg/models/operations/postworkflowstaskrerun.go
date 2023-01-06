package operations

import (
	"openapi/pkg/models/shared"
)

type PostWorkflowsTaskRerunPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=task_id"`
}

type PostWorkflowsTaskRerunHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostWorkflowsTaskRerunRequest struct {
	PathParams PostWorkflowsTaskRerunPathParams
	Headers    PostWorkflowsTaskRerunHeaders
}

type PostWorkflowsTaskRerunResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Task        *shared.Task
}
