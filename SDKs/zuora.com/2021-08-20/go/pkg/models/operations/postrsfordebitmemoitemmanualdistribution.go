package operations

import (
	"openapi/pkg/models/shared"
)

type PostRSforDebitMemoItemManualDistributionPathParams struct {
	DmiID string `pathParam:"style=simple,explode=false,name=dmi-id"`
}

type PostRSforDebitMemoItemManualDistributionHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostRSforDebitMemoItemManualDistributionRequest struct {
	PathParams PostRSforDebitMemoItemManualDistributionPathParams
	Headers    PostRSforDebitMemoItemManualDistributionHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PostRSforDebitMemoItemManualDistributionResponse struct {
	ContentType                                  string
	Headers                                      map[string][]string
	POSTRevenueScheduleByTransactionResponseType *shared.PostRevenueScheduleByTransactionResponseType
	StatusCode                                   int64
}
