package operations

import (
	"openapi/pkg/models/shared"
)

type ActionPosTgenerateQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ActionPosTgenerateHeaders struct {
	XZuoraWSDLVersion *string `header:"style=simple,explode=false,name=X-Zuora-WSDL-Version"`
	ZuoraEntityIds    *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID      *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ActionPosTgenerateRequest struct {
	QueryParams ActionPosTgenerateQueryParams
	Headers     ActionPosTgenerateHeaders
	Request     shared.ProxyActiongenerateRequest `request:"mediaType=application/json"`
}

type ActionPosTgenerateResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	SaveResults               []shared.SaveResult
	StatusCode                int64
}
