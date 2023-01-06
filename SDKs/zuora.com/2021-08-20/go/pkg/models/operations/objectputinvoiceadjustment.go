package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPutInvoiceAdjustmentPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectPutInvoiceAdjustmentQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPutInvoiceAdjustmentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPutInvoiceAdjustmentRequest struct {
	PathParams  ObjectPutInvoiceAdjustmentPathParams
	QueryParams ObjectPutInvoiceAdjustmentQueryParams
	Headers     ObjectPutInvoiceAdjustmentHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPutInvoiceAdjustmentResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
