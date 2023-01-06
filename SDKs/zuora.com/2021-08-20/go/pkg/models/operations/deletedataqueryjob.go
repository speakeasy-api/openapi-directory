package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDataQueryJobPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=job-id"`
}

type DeleteDataQueryJobHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type DeleteDataQueryJobRequest struct {
	PathParams DeleteDataQueryJobPathParams
	Headers    DeleteDataQueryJobHeaders
}

type DeleteDataQueryJobResponse struct {
	ContentType                string
	DataQueryErrorResponse     *shared.DataQueryErrorResponse
	DeleteDataQueryJobResponse *shared.DeleteDataQueryJobResponse
	Headers                    map[string][]string
	StatusCode                 int64
}
