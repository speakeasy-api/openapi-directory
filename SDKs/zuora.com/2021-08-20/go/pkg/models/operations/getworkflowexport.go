package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkflowExportPathParams struct {
	WorkflowID int64 `pathParam:"style=simple,explode=false,name=workflow_id"`
}

type GetWorkflowExportHeaders struct {
	ZuoraTrackID *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetWorkflowExport200ApplicationJSON struct {
	Linkages []shared.Linkage `json:"linkages,omitempty"`
	Tasks    []shared.Task    `json:"tasks,omitempty"`
	Workflow *shared.Workflow `json:"workflow,omitempty"`
}

type GetWorkflowExportRequest struct {
	PathParams GetWorkflowExportPathParams
	Headers    GetWorkflowExportHeaders
}

type GetWorkflowExportResponse struct {
	ContentType                               string
	GETWorkflowExport200ApplicationJSONObject *GetWorkflowExport200ApplicationJSON
	Headers                                   map[string][]string
	StatusCode                                int64
}
