package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPutAmendmentPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectPutAmendmentQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPutAmendmentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPutAmendmentRequest struct {
	PathParams  ObjectPutAmendmentPathParams
	QueryParams ObjectPutAmendmentQueryParams
	Headers     ObjectPutAmendmentHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPutAmendmentResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
