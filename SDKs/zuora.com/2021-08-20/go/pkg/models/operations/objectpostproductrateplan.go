package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPostProductRatePlanQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPostProductRatePlanHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPostProductRatePlanRequest struct {
	QueryParams ObjectPostProductRatePlanQueryParams
	Headers     ObjectPostProductRatePlanHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPostProductRatePlanResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyBadRequestResponse     *shared.ProxyBadRequestResponse
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
