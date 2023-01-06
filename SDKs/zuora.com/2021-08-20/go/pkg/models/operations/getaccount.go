package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountPathParams struct {
	AccountKey string `pathParam:"style=simple,explode=false,name=account-key"`
}

type GetAccountHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetAccountRequest struct {
	PathParams GetAccountPathParams
	Headers    GetAccountHeaders
}

type GetAccountResponse struct {
	ContentType    string
	GETAccountType *shared.GetAccountType
	Headers        map[string][]string
	StatusCode     int64
}
