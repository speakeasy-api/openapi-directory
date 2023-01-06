package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPostPaymentMethodQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPostPaymentMethodHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPostPaymentMethodRequest struct {
	QueryParams ObjectPostPaymentMethodQueryParams
	Headers     ObjectPostPaymentMethodHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPostPaymentMethodResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyBadRequestResponse     *shared.ProxyBadRequestResponse
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
