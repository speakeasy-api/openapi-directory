package operations

import (
	"openapi/pkg/models/shared"
)

type GetRevenueRecRulesPathParams struct {
	ChargeKey string `pathParam:"style=simple,explode=false,name=charge-key"`
}

type GetRevenueRecRulesHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRevenueRecRulesRequest struct {
	PathParams GetRevenueRecRulesPathParams
	Headers    GetRevenueRecRulesHeaders
}

type GetRevenueRecRulesResponse struct {
	ContentType                              string
	GETRevenueRecognitionRuleAssociationType *shared.GetRevenueRecognitionRuleAssociationType
	Headers                                  map[string][]string
	StatusCode                               int64
}
