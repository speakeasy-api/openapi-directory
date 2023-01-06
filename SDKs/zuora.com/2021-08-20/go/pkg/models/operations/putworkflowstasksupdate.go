package operations

import (
	"openapi/pkg/models/shared"
)

type PutWorkflowsTasksUpdateHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutWorkflowsTasksUpdateRequest struct {
	Headers PutWorkflowsTasksUpdateHeaders
	Request *shared.PutTasksRequest `request:"mediaType=application/json"`
}

type PutWorkflowsTasksUpdateResponse struct {
	BadRequestResponse *shared.BadRequestResponse
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
	TasksResponse      *shared.TasksResponse
}
