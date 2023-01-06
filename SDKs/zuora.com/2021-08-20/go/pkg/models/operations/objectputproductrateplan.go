package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPutProductRatePlanPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectPutProductRatePlanQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPutProductRatePlanHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPutProductRatePlanRequest struct {
	PathParams  ObjectPutProductRatePlanPathParams
	QueryParams ObjectPutProductRatePlanQueryParams
	Headers     ObjectPutProductRatePlanHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPutProductRatePlanResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
