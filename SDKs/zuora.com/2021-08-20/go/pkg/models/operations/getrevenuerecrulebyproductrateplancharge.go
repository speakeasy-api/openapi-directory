package operations

import (
	"openapi/pkg/models/shared"
)

type GetRevenueRecRulebyProductRatePlanChargePathParams struct {
	ChargeKey string `pathParam:"style=simple,explode=false,name=charge-key"`
}

type GetRevenueRecRulebyProductRatePlanChargeHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRevenueRecRulebyProductRatePlanChargeRequest struct {
	PathParams GetRevenueRecRulebyProductRatePlanChargePathParams
	Headers    GetRevenueRecRulebyProductRatePlanChargeHeaders
}

type GetRevenueRecRulebyProductRatePlanChargeResponse struct {
	ContentType                              string
	GETRevenueRecognitionRuleAssociationType *shared.GetRevenueRecognitionRuleAssociationType
	Headers                                  map[string][]string
	StatusCode                               int64
}
