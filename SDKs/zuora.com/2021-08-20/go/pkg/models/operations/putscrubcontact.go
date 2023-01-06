package operations

import (
	"openapi/pkg/models/shared"
)

type PutScrubContactPathParams struct {
	ContactID string `pathParam:"style=simple,explode=false,name=contactId"`
}

type PutScrubContactHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutScrubContactRequest struct {
	PathParams PutScrubContactPathParams
	Headers    PutScrubContactHeaders
}

type PutScrubContactResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
