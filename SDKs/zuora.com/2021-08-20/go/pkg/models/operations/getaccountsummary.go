package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountSummaryPathParams struct {
	AccountKey string `pathParam:"style=simple,explode=false,name=account-key"`
}

type GetAccountSummaryHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetAccountSummaryRequest struct {
	PathParams GetAccountSummaryPathParams
	Headers    GetAccountSummaryHeaders
}

type GetAccountSummaryResponse struct {
	ContentType           string
	GETAccountSummaryType *shared.GetAccountSummaryType
	Headers               map[string][]string
	StatusCode            int64
}
