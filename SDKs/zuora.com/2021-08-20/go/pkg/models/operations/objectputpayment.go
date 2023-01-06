package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPutPaymentPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectPutPaymentQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPutPaymentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPutPaymentRequest struct {
	PathParams  ObjectPutPaymentPathParams
	QueryParams ObjectPutPaymentQueryParams
	Headers     ObjectPutPaymentHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPutPaymentResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
