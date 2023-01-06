package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPutContactPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectPutContactQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPutContactHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPutContactRequest struct {
	PathParams  ObjectPutContactPathParams
	QueryParams ObjectPutContactQueryParams
	Headers     ObjectPutContactHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPutContactResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
