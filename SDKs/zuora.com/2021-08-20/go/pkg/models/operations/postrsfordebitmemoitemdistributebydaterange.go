package operations

import (
	"openapi/pkg/models/shared"
)

type PostRSforDebitMemoItemDistributeByDateRangePathParams struct {
	DmiID string `pathParam:"style=simple,explode=false,name=dmi-id"`
}

type PostRSforDebitMemoItemDistributeByDateRangeHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostRSforDebitMemoItemDistributeByDateRangeRequest struct {
	PathParams PostRSforDebitMemoItemDistributeByDateRangePathParams
	Headers    PostRSforDebitMemoItemDistributeByDateRangeHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PostRSforDebitMemoItemDistributeByDateRangeResponse struct {
	ContentType                                  string
	Headers                                      map[string][]string
	POSTRevenueScheduleByTransactionResponseType *shared.PostRevenueScheduleByTransactionResponseType
	StatusCode                                   int64
}
