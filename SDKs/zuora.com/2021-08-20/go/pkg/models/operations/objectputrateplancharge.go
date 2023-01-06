package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPutRatePlanChargePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectPutRatePlanChargeQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPutRatePlanChargeHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPutRatePlanChargeRequest struct {
	PathParams  ObjectPutRatePlanChargePathParams
	QueryParams ObjectPutRatePlanChargeQueryParams
	Headers     ObjectPutRatePlanChargeHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPutRatePlanChargeResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
