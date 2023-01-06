package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPostProductRatePlanChargeQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPostProductRatePlanChargeHeaders struct {
	XZuoraWSDLVersion *string `header:"style=simple,explode=false,name=X-Zuora-WSDL-Version"`
	ZuoraEntityIds    *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID      *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPostProductRatePlanChargeRequest struct {
	QueryParams ObjectPostProductRatePlanChargeQueryParams
	Headers     ObjectPostProductRatePlanChargeHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPostProductRatePlanChargeResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
