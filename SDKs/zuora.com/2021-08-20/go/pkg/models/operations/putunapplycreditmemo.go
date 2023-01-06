package operations

import (
	"openapi/pkg/models/shared"
)

type PutUnapplyCreditMemoPathParams struct {
	CreditMemoID string `pathParam:"style=simple,explode=false,name=creditMemoId"`
}

type PutUnapplyCreditMemoHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutUnapplyCreditMemoRequest struct {
	PathParams PutUnapplyCreditMemoPathParams
	Headers    PutUnapplyCreditMemoHeaders
	Request    shared.UnapplyCreditMemoType `request:"mediaType=application/json"`
}

type PutUnapplyCreditMemoResponse struct {
	ContentType       string
	GETCreditMemoType map[string]interface{}
	Headers           map[string][]string
	StatusCode        int64
}
