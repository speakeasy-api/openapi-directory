package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPutPaymentMethodPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectPutPaymentMethodQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPutPaymentMethodHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPutPaymentMethodRequest struct {
	PathParams  ObjectPutPaymentMethodPathParams
	QueryParams ObjectPutPaymentMethodQueryParams
	Headers     ObjectPutPaymentMethodHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPutPaymentMethodResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
