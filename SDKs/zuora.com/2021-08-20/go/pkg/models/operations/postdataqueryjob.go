package operations

import (
	"openapi/pkg/models/shared"
)

type PostDataQueryJobHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostDataQueryJobRequest struct {
	Headers PostDataQueryJobHeaders
	Request shared.SubmitDataQueryRequest `request:"mediaType=application/json"`
}

type PostDataQueryJobResponse struct {
	ContentType             string
	DataQueryErrorResponse  *shared.DataQueryErrorResponse
	Headers                 map[string][]string
	StatusCode              int64
	SubmitDataQueryResponse *shared.SubmitDataQueryResponse
}
