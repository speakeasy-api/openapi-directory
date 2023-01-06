package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPutInvoicePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectPutInvoiceQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPutInvoiceHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPutInvoiceRequest struct {
	PathParams  ObjectPutInvoicePathParams
	QueryParams ObjectPutInvoiceQueryParams
	Headers     ObjectPutInvoiceHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPutInvoiceResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
