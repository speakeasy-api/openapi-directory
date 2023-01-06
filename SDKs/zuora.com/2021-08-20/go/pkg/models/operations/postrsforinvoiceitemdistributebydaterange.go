package operations

import (
	"openapi/pkg/models/shared"
)

type PostRSforInvoiceItemDistributeByDateRangePathParams struct {
	InvoiceItemID string `pathParam:"style=simple,explode=false,name=invoice-item-id"`
}

type PostRSforInvoiceItemDistributeByDateRangeHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostRSforInvoiceItemDistributeByDateRangeRequest struct {
	PathParams PostRSforInvoiceItemDistributeByDateRangePathParams
	Headers    PostRSforInvoiceItemDistributeByDateRangeHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PostRSforInvoiceItemDistributeByDateRangeResponse struct {
	ContentType                                  string
	Headers                                      map[string][]string
	POSTRevenueScheduleByTransactionResponseType *shared.PostRevenueScheduleByTransactionResponseType
	StatusCode                                   int64
}
