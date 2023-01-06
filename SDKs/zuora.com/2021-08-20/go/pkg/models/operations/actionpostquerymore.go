package operations

import (
	"openapi/pkg/models/shared"
)

type ActionPosTqueryMoreQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ActionPosTqueryMoreHeaders struct {
	XZuoraWSDLVersion *string `header:"style=simple,explode=false,name=X-Zuora-WSDL-Version"`
	ZuoraEntityIds    *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID      *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ActionPosTqueryMoreRequest struct {
	QueryParams ActionPosTqueryMoreQueryParams
	Headers     ActionPosTqueryMoreHeaders
	Request     shared.ProxyActionqueryMoreRequest `request:"mediaType=application/json"`
}

type ActionPosTqueryMoreResponse struct {
	ContentType                  string
	Headers                      map[string][]string
	ProxyActionqueryMoreResponse *shared.ProxyActionqueryMoreResponse
	ProxyUnauthorizedResponse    *shared.ProxyUnauthorizedResponse
	StatusCode                   int64
}
