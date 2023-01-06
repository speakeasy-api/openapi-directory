package operations

import (
	"openapi/pkg/models/shared"
)

type PostRSforCreditMemoItemDistributeByDateRangePathParams struct {
	CmiID string `pathParam:"style=simple,explode=false,name=cmi-id"`
}

type PostRSforCreditMemoItemDistributeByDateRangeHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostRSforCreditMemoItemDistributeByDateRangeRequest struct {
	PathParams PostRSforCreditMemoItemDistributeByDateRangePathParams
	Headers    PostRSforCreditMemoItemDistributeByDateRangeHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PostRSforCreditMemoItemDistributeByDateRangeResponse struct {
	ContentType                                  string
	Headers                                      map[string][]string
	POSTRevenueScheduleByTransactionResponseType *shared.PostRevenueScheduleByTransactionResponseType
	StatusCode                                   int64
}
