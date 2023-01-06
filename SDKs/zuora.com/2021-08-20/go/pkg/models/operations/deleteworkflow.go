package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWorkflowPathParams struct {
	WorkflowID string `pathParam:"style=simple,explode=false,name=workflow_id"`
}

type DeleteWorkflowHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type DeleteWorkflowRequest struct {
	PathParams DeleteWorkflowPathParams
	Headers    DeleteWorkflowHeaders
}

type DeleteWorkflowResponse struct {
	ContentType           string
	DeleteWorkflowError   *shared.DeleteWorkflowError
	DeleteWorkflowSuccess *shared.DeleteWorkflowSuccess
	Headers               map[string][]string
	StatusCode            int64
}
