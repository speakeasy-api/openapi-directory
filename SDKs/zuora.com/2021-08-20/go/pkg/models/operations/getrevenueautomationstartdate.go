package operations

import (
	"openapi/pkg/models/shared"
)

type GetRevenueAutomationStartDateHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRevenueAutomationStartDateRequest struct {
	Headers GetRevenueAutomationStartDateHeaders
}

type GetRevenueAutomationStartDateResponse struct {
	ContentType                    string
	GETRevenueStartDateSettingType *shared.GetRevenueStartDateSettingType
	Headers                        map[string][]string
	StatusCode                     int64
}
