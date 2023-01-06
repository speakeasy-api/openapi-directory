package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPutAccountPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectPutAccountQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPutAccountHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPutAccountRequest struct {
	PathParams  ObjectPutAccountPathParams
	QueryParams ObjectPutAccountQueryParams
	Headers     ObjectPutAccountHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPutAccountResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
