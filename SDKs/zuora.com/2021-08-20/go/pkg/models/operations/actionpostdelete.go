package operations

import (
	"openapi/pkg/models/shared"
)

type ActionPosTdeleteQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ActionPosTdeleteHeaders struct {
	XZuoraWSDLVersion *string `header:"style=simple,explode=false,name=X-Zuora-WSDL-Version"`
	ZuoraEntityIds    *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID      *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ActionPosTdeleteRequest struct {
	QueryParams ActionPosTdeleteQueryParams
	Headers     ActionPosTdeleteHeaders
	Request     shared.ProxyActiondeleteRequest `request:"mediaType=application/json"`
}

type ActionPosTdeleteResponse struct {
	ContentType               string
	DeleteResults             []shared.DeleteResult
	Headers                   map[string][]string
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
