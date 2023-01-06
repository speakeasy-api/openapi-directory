package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetWorkflowsUsagesQueryParams struct {
	EndDate   time.Time `queryParam:"style=form,explode=true,name=endDate"`
	Metrics   string    `queryParam:"style=form,explode=true,name=metrics"`
	StartDate time.Time `queryParam:"style=form,explode=true,name=startDate"`
}

type GetWorkflowsUsagesHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetWorkflowsUsagesRequest struct {
	QueryParams GetWorkflowsUsagesQueryParams
	Headers     GetWorkflowsUsagesHeaders
}

type GetWorkflowsUsagesResponse struct {
	ContentType    string
	Headers        map[string][]string
	StatusCode     int64
	UsagesResponse *shared.UsagesResponse
}
