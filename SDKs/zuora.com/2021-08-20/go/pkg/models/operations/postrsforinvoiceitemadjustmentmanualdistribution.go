package operations

import (
	"openapi/pkg/models/shared"
)

type PostRSforInvoiceItemAdjustmentManualDistributionPathParams struct {
	InvoiceItemAdjKey string `pathParam:"style=simple,explode=false,name=invoice-item-adj-key"`
}

type PostRSforInvoiceItemAdjustmentManualDistributionHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostRSforInvoiceItemAdjustmentManualDistributionRequest struct {
	PathParams PostRSforInvoiceItemAdjustmentManualDistributionPathParams
	Headers    PostRSforInvoiceItemAdjustmentManualDistributionHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PostRSforInvoiceItemAdjustmentManualDistributionResponse struct {
	ContentType                                  string
	Headers                                      map[string][]string
	POSTRevenueScheduleByTransactionResponseType *shared.PostRevenueScheduleByTransactionResponseType
	StatusCode                                   int64
}
