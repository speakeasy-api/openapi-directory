package operations

import (
	"openapi/pkg/models/shared"
)

type ActionPosTcreateQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ActionPosTcreateHeaders struct {
	XZuoraWSDLVersion *string `header:"style=simple,explode=false,name=X-Zuora-WSDL-Version"`
	ZuoraEntityIds    *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID      *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ActionPosTcreateRequest struct {
	QueryParams ActionPosTcreateQueryParams
	Headers     ActionPosTcreateHeaders
	Request     shared.ProxyActioncreateRequest `request:"mediaType=application/json"`
}

type ActionPosTcreateResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	SaveResults               []shared.SaveResult
	StatusCode                int64
}
