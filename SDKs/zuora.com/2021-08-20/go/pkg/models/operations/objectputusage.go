package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPutUsagePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectPutUsageQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPutUsageHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPutUsageRequest struct {
	PathParams  ObjectPutUsagePathParams
	QueryParams ObjectPutUsageQueryParams
	Headers     ObjectPutUsageHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPutUsageResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
