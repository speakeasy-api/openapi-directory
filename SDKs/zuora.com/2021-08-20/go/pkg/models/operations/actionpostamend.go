package operations

import (
	"openapi/pkg/models/shared"
)

type ActionPosTamendQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ActionPosTamendHeaders struct {
	XZuoraWSDLVersion *string `header:"style=simple,explode=false,name=X-Zuora-WSDL-Version"`
	ZuoraEntityIds    *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID      *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ActionPosTamendRequest struct {
	QueryParams ActionPosTamendQueryParams
	Headers     ActionPosTamendHeaders
	Request     shared.ProxyActionamendRequest `request:"mediaType=application/json"`
}

type ActionPosTamendResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyActionamendResponse  *shared.ProxyActionamendResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
