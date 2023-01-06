package operations

import (
	"openapi/pkg/models/shared"
)

type PatchUpdateWorkflowPathParams struct {
	WorkflowID string `pathParam:"style=simple,explode=false,name=workflow_id"`
}

type PatchUpdateWorkflowHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
}

type PatchUpdateWorkflowRequestBody struct {
	CalloutTrigger   *bool   `json:"callout_trigger,omitempty"`
	Description      *string `json:"description,omitempty"`
	Interval         *string `json:"interval,omitempty"`
	Name             *string `json:"name,omitempty"`
	OndemandTrigger  *bool   `json:"ondemand_trigger,omitempty"`
	Priority         *string `json:"priority,omitempty"`
	ScheduledTrigger *bool   `json:"scheduled_trigger,omitempty"`
	Status           *string `json:"status,omitempty"`
	Timezone         *string `json:"timezone,omitempty"`
}

type PatchUpdateWorkflowRequest struct {
	PathParams PatchUpdateWorkflowPathParams
	Headers    PatchUpdateWorkflowHeaders
	Request    *PatchUpdateWorkflowRequestBody `request:"mediaType=application/json"`
}

type PatchUpdateWorkflowResponse struct {
	ContentType              string
	DeleteWorkflowError      *shared.DeleteWorkflowError
	GetWorkflowSetupResponse *shared.GetWorkflowSetupResponse
	Headers                  map[string][]string
	StatusCode               int64
	ValidationErrors         *shared.ValidationErrors
}
