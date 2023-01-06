package operations

import (
	"openapi/pkg/models/shared"
)

type PutSequenceSetPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutSequenceSetHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutSequenceSetRequest struct {
	PathParams PutSequenceSetPathParams
	Headers    PutSequenceSetHeaders
	Request    *shared.PutSequenceSetRequest `request:"mediaType=application/json"`
}

type PutSequenceSetResponse struct {
	ContentType            string
	Headers                map[string][]string
	PUTSequenceSetResponse *shared.PutSequenceSetResponse
	StatusCode             int64
}
