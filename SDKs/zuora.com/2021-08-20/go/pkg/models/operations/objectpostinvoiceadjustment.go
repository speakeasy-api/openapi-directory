package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPostInvoiceAdjustmentQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPostInvoiceAdjustmentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPostInvoiceAdjustmentRequest struct {
	QueryParams ObjectPostInvoiceAdjustmentQueryParams
	Headers     ObjectPostInvoiceAdjustmentHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPostInvoiceAdjustmentResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyBadRequestResponse     *shared.ProxyBadRequestResponse
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
