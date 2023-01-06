package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPostUsageQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPostUsageHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPostUsageRequest struct {
	QueryParams ObjectPostUsageQueryParams
	Headers     ObjectPostUsageHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPostUsageResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyBadRequestResponse     *shared.ProxyBadRequestResponse
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
