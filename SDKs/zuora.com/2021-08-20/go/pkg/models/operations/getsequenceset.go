package operations

import (
	"openapi/pkg/models/shared"
)

type GetSequenceSetPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSequenceSetHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetSequenceSetRequest struct {
	PathParams GetSequenceSetPathParams
	Headers    GetSequenceSetHeaders
}

type GetSequenceSetResponse struct {
	ContentType            string
	GETSequenceSetResponse *shared.GetSequenceSetResponse
	Headers                map[string][]string
	StatusCode             int64
}
