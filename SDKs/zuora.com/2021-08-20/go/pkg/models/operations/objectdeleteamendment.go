package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectDeleteAmendmentPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectDeleteAmendmentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectDeleteAmendmentRequest struct {
	PathParams ObjectDeleteAmendmentPathParams
	Headers    ObjectDeleteAmendmentHeaders
}

type ObjectDeleteAmendmentResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyDeleteResponse       *shared.ProxyDeleteResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
