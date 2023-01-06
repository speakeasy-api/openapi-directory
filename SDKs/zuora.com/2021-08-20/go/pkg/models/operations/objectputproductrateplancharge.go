package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPutProductRatePlanChargePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectPutProductRatePlanChargeQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPutProductRatePlanChargeHeaders struct {
	XZuoraWSDLVersion *string `header:"style=simple,explode=false,name=X-Zuora-WSDL-Version"`
	ZuoraEntityIds    *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID      *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPutProductRatePlanChargeRequest struct {
	PathParams  ObjectPutProductRatePlanChargePathParams
	QueryParams ObjectPutProductRatePlanChargeQueryParams
	Headers     ObjectPutProductRatePlanChargeHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPutProductRatePlanChargeResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyNoDataResponse         *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
