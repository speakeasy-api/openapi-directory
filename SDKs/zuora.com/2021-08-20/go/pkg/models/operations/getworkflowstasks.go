package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkflowsTasksQueryParams struct {
	ActionType *string `queryParam:"style=form,explode=true,name=action_type"`
	CallType   *string `queryParam:"style=form,explode=true,name=call_type"`
	ID         *string `queryParam:"style=form,explode=true,name=id"`
	Instance   *bool   `queryParam:"style=form,explode=true,name=instance"`
	Name       *string `queryParam:"style=form,explode=true,name=name"`
	Object     *string `queryParam:"style=form,explode=true,name=object"`
	ObjectID   *string `queryParam:"style=form,explode=true,name=object_id"`
	Page       *int64  `queryParam:"style=form,explode=true,name=page"`
	PageLength *int64  `queryParam:"style=form,explode=true,name=page_length"`
	Tags       *string `queryParam:"style=form,explode=true,name=tags"`
	WorkflowID *string `queryParam:"style=form,explode=true,name=workflow_id"`
}

type GetWorkflowsTasksHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetWorkflowsTasksRequest struct {
	QueryParams GetWorkflowsTasksQueryParams
	Headers     GetWorkflowsTasksHeaders
}

type GetWorkflowsTasksResponse struct {
	ContentType   string
	Headers       map[string][]string
	StatusCode    int64
	TasksResponse *shared.TasksResponse
}
