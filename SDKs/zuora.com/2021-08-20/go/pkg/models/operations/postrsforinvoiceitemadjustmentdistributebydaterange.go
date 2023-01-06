package operations

import (
	"openapi/pkg/models/shared"
)

type PostRSforInvoiceItemAdjustmentDistributeByDateRangePathParams struct {
	InvoiceItemAdjKey string `pathParam:"style=simple,explode=false,name=invoice-item-adj-key"`
}

type PostRSforInvoiceItemAdjustmentDistributeByDateRangeHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostRSforInvoiceItemAdjustmentDistributeByDateRangeRequest struct {
	PathParams PostRSforInvoiceItemAdjustmentDistributeByDateRangePathParams
	Headers    PostRSforInvoiceItemAdjustmentDistributeByDateRangeHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PostRSforInvoiceItemAdjustmentDistributeByDateRangeResponse struct {
	ContentType                                  string
	Headers                                      map[string][]string
	POSTRevenueScheduleByTransactionResponseType *shared.PostRevenueScheduleByTransactionResponseType
	StatusCode                                   int64
}
