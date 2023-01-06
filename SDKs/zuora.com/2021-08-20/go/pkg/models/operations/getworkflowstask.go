package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkflowsTaskPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=task_id"`
}

type GetWorkflowsTaskHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetWorkflowsTaskRequest struct {
	PathParams GetWorkflowsTaskPathParams
	Headers    GetWorkflowsTaskHeaders
}

type GetWorkflowsTaskResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Task        *shared.Task
}
