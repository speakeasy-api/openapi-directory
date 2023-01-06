package operations

import (
	"openapi/pkg/models/shared"
)

type GetDataQueryJobsQueryParams struct {
	PageSize    *int64                               `queryParam:"style=form,explode=true,name=pageSize"`
	QueryStatus *shared.GlobalHeaderZuoraTrackIDEnum `queryParam:"style=form,explode=true,name=queryStatus"`
}

type GetDataQueryJobsHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetDataQueryJobsRequest struct {
	QueryParams GetDataQueryJobsQueryParams
	Headers     GetDataQueryJobsHeaders
}

type GetDataQueryJobsResponse struct {
	ContentType              string
	GetDataQueryJobsResponse *shared.GetDataQueryJobsResponse
	Headers                  map[string][]string
	StatusCode               int64
}
