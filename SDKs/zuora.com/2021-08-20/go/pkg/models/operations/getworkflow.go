package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkflowPathParams struct {
	WorkflowID string `pathParam:"style=simple,explode=false,name=workflow_id"`
}

type GetWorkflowHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetWorkflowRequest struct {
	PathParams GetWorkflowPathParams
	Headers    GetWorkflowHeaders
}

type GetWorkflowResponse struct {
	ContentType         string
	GetWorkflowResponse *shared.GetWorkflowResponse
	Headers             map[string][]string
	StatusCode          int64
}
