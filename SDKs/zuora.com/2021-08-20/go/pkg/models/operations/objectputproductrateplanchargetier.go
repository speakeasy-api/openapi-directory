package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPutProductRatePlanChargeTierPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectPutProductRatePlanChargeTierQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPutProductRatePlanChargeTierHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPutProductRatePlanChargeTierRequest struct {
	PathParams  ObjectPutProductRatePlanChargeTierPathParams
	QueryParams ObjectPutProductRatePlanChargeTierQueryParams
	Headers     ObjectPutProductRatePlanChargeTierHeaders
	Request     shared.ProxyModifyProductRatePlanChargeTier `request:"mediaType=application/json"`
}

type ObjectPutProductRatePlanChargeTierResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
