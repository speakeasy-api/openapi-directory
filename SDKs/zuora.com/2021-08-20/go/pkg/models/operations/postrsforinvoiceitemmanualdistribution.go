package operations

import (
	"openapi/pkg/models/shared"
)

type PostRSforInvoiceItemManualDistributionPathParams struct {
	InvoiceItemID string `pathParam:"style=simple,explode=false,name=invoice-item-id"`
}

type PostRSforInvoiceItemManualDistributionHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostRSforInvoiceItemManualDistributionRequest struct {
	PathParams PostRSforInvoiceItemManualDistributionPathParams
	Headers    PostRSforInvoiceItemManualDistributionHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PostRSforInvoiceItemManualDistributionResponse struct {
	ContentType                                  string
	Headers                                      map[string][]string
	POSTRevenueScheduleByTransactionResponseType *shared.PostRevenueScheduleByTransactionResponseType
	StatusCode                                   int64
}
