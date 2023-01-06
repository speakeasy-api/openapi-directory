package operations

import (
	"openapi/pkg/models/shared"
)

type ActionPosTupdateQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ActionPosTupdateHeaders struct {
	XZuoraWSDLVersion *string `header:"style=simple,explode=false,name=X-Zuora-WSDL-Version"`
	ZuoraEntityIds    *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID      *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ActionPosTupdateRequest struct {
	QueryParams ActionPosTupdateQueryParams
	Headers     ActionPosTupdateHeaders
	Request     shared.ProxyActionupdateRequest `request:"mediaType=application/json"`
}

type ActionPosTupdateResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	SaveResults               []shared.SaveResult
	StatusCode                int64
}
