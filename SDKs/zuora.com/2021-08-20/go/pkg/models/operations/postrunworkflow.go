package operations

import (
	"openapi/pkg/models/shared"
)

type PostRunWorkflowPathParams struct {
	WorkflowID int64 `pathParam:"style=simple,explode=false,name=workflow_id"`
}

type PostRunWorkflowHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostRunWorkflow400ApplicationJSON struct {
	Errors []shared.WorkflowError `json:"errors,omitempty"`
}

type PostRunWorkflow406ApplicationJSON struct {
	Errors     []shared.WorkflowError `json:"errors,omitempty"`
	Parameters *interface{}           `json:"parameters,omitempty"`
}

type PostRunWorkflow409ApplicationJSON struct {
	Errors []shared.WorkflowError `json:"errors,omitempty"`
}

type PostRunWorkflowRequest struct {
	PathParams PostRunWorkflowPathParams
	Headers    PostRunWorkflowHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PostRunWorkflowResponse struct {
	ContentType                             string
	Headers                                 map[string][]string
	POSTRunWorkflow400ApplicationJSONObject *PostRunWorkflow400ApplicationJSON
	POSTRunWorkflow406ApplicationJSONObject *PostRunWorkflow406ApplicationJSON
	POSTRunWorkflow409ApplicationJSONObject *PostRunWorkflow409ApplicationJSON
	StatusCode                              int64
	WorkflowInstance                        *shared.WorkflowInstance
}
