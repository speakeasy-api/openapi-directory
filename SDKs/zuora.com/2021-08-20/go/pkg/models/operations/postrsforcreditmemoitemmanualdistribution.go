package operations

import (
	"openapi/pkg/models/shared"
)

type PostRSforCreditMemoItemManualDistributionPathParams struct {
	CmiID string `pathParam:"style=simple,explode=false,name=cmi-id"`
}

type PostRSforCreditMemoItemManualDistributionHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostRSforCreditMemoItemManualDistributionRequest struct {
	PathParams PostRSforCreditMemoItemManualDistributionPathParams
	Headers    PostRSforCreditMemoItemManualDistributionHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PostRSforCreditMemoItemManualDistributionResponse struct {
	ContentType                                  string
	Headers                                      map[string][]string
	POSTRevenueScheduleByTransactionResponseType *shared.PostRevenueScheduleByTransactionResponseType
	StatusCode                                   int64
}
