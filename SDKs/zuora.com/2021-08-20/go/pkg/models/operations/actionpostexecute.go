package operations

import (
	"openapi/pkg/models/shared"
)

type ActionPosTexecuteQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ActionPosTexecuteHeaders struct {
	XZuoraWSDLVersion *string `header:"style=simple,explode=false,name=X-Zuora-WSDL-Version"`
	ZuoraEntityIds    *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID      *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ActionPosTexecuteRequest struct {
	QueryParams ActionPosTexecuteQueryParams
	Headers     ActionPosTexecuteHeaders
	Request     shared.ProxyActionexecuteRequest `request:"mediaType=application/json"`
}

type ActionPosTexecuteResponse struct {
	ContentType               string
	ExecuteResults            []shared.ExecuteResult
	Headers                   map[string][]string
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
