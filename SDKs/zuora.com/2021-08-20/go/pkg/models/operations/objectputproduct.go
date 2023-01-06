package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPutProductPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectPutProductQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPutProductHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPutProductRequest struct {
	PathParams  ObjectPutProductPathParams
	QueryParams ObjectPutProductQueryParams
	Headers     ObjectPutProductHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPutProductResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
