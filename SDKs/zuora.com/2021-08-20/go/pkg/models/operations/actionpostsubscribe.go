package operations

import (
	"openapi/pkg/models/shared"
)

type ActionPosTsubscribeQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ActionPosTsubscribeHeaders struct {
	XZuoraWSDLVersion *string `header:"style=simple,explode=false,name=X-Zuora-WSDL-Version"`
	ZuoraEntityIds    *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID      *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ActionPosTsubscribeRequest struct {
	QueryParams ActionPosTsubscribeQueryParams
	Headers     ActionPosTsubscribeHeaders
	Request     shared.ProxyActionsubscribeRequest `request:"mediaType=application/json"`
}

type ActionPosTsubscribeResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
	SubscribeResults          []shared.SubscribeResult
}
