package operations

import (
	"openapi/pkg/models/shared"
)

type GetDataQueryJobPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=job-id"`
}

type GetDataQueryJobHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetDataQueryJobRequest struct {
	PathParams GetDataQueryJobPathParams
	Headers    GetDataQueryJobHeaders
}

type GetDataQueryJobResponse struct {
	ContentType             string
	DataQueryErrorResponse  *shared.DataQueryErrorResponse
	GetDataQueryJobResponse *shared.GetDataQueryJobResponse
	Headers                 map[string][]string
	StatusCode              int64
}
