package operations

import (
	"openapi/pkg/models/shared"
)

type ActionPosTqueryQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ActionPosTqueryHeaders struct {
	XZuoraWSDLVersion *string `header:"style=simple,explode=false,name=X-Zuora-WSDL-Version"`
	ZuoraEntityIds    *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID      *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ActionPosTqueryRequest struct {
	QueryParams ActionPosTqueryQueryParams
	Headers     ActionPosTqueryHeaders
	Request     shared.ProxyActionqueryRequest `request:"mediaType=application/json"`
}

type ActionPosTqueryResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyActionqueryResponse  *shared.ProxyActionqueryResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
