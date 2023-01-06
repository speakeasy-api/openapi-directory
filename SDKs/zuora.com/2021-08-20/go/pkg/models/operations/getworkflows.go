package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkflowsQueryParams struct {
	CalloutTrigger   *bool   `queryParam:"style=form,explode=true,name=callout_trigger"`
	Interval         *string `queryParam:"style=form,explode=true,name=interval"`
	Name             *string `queryParam:"style=form,explode=true,name=name"`
	OndemandTrigger  *bool   `queryParam:"style=form,explode=true,name=ondemand_trigger"`
	Page             *int64  `queryParam:"style=form,explode=true,name=page"`
	PageLength       *int64  `queryParam:"style=form,explode=true,name=page_length"`
	ScheduledTrigger *bool   `queryParam:"style=form,explode=true,name=scheduled_trigger"`
}

type GetWorkflowsHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetWorkflowsRequest struct {
	QueryParams GetWorkflowsQueryParams
	Headers     GetWorkflowsHeaders
}

type GetWorkflowsResponse struct {
	ContentType          string
	GetWorkflowsResponse *shared.GetWorkflowsResponse
	Headers              map[string][]string
	StatusCode           int64
}
