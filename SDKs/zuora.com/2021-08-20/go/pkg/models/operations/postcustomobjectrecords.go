package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PostCustomObjectRecordsPathParams struct {
	Object string `pathParam:"style=simple,explode=false,name=object"`
}

type PostCustomObjectRecordsHeaders struct {
	Authorization  string     `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string    `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string    `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *time.Time `header:"style=simple,explode=false,name=Zuora-Version"`
}

type PostCustomObjectRecordsRequest struct {
	PathParams PostCustomObjectRecordsPathParams
	Headers    PostCustomObjectRecordsHeaders
	Request    shared.PostCustomObjectRecordsRequest `request:"mediaType=application/json"`
}

type PostCustomObjectRecordsResponse struct {
	ContentType                          string
	CustomObjectRecordsErrorResponse     *shared.CustomObjectRecordsErrorResponse
	CustomObjectRecordsThrottledResponse *shared.CustomObjectRecordsThrottledResponse
	ErrorResponse401Record               *shared.ErrorResponse401Record
	Headers                              map[string][]string
	PostCustomObjectRecordsResponse      *shared.PostCustomObjectRecordsResponse
	StatusCode                           int64
}
