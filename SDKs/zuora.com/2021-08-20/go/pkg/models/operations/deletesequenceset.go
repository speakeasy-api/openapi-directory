package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSequenceSetPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteSequenceSetHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type DeleteSequenceSetRequest struct {
	PathParams DeleteSequenceSetPathParams
	Headers    DeleteSequenceSetHeaders
}

type DeleteSequenceSetResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
