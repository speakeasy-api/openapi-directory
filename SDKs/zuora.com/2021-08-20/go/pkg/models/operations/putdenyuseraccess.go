package operations

import (
	"openapi/pkg/models/shared"
)

type PutDenyUserAccessPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type PutDenyUserAccessHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutDenyUserAccessRequest struct {
	PathParams PutDenyUserAccessPathParams
	Headers    PutDenyUserAccessHeaders
}

type PutDenyUserAccessResponse struct {
	ContentType                   string
	Headers                       map[string][]string
	PUTDenyUserAccessResponseType *shared.PutDenyUserAccessResponseType
	StatusCode                    int64
}
