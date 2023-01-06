package operations

import (
	"openapi/pkg/models/shared"
)

type PutAcceptUserAccessPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type PutAcceptUserAccessHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutAcceptUserAccessRequest struct {
	PathParams PutAcceptUserAccessPathParams
	Headers    PutAcceptUserAccessHeaders
}

type PutAcceptUserAccessResponse struct {
	ContentType                     string
	Headers                         map[string][]string
	PUTAcceptUserAccessResponseType *shared.PutAcceptUserAccessResponseType
	StatusCode                      int64
}
