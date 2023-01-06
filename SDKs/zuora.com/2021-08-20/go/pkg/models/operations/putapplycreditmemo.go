package operations

import (
	"openapi/pkg/models/shared"
)

type PutApplyCreditMemoPathParams struct {
	CreditMemoID string `pathParam:"style=simple,explode=false,name=creditMemoId"`
}

type PutApplyCreditMemoHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutApplyCreditMemoRequest struct {
	PathParams PutApplyCreditMemoPathParams
	Headers    PutApplyCreditMemoHeaders
	Request    shared.ApplyCreditMemoType `request:"mediaType=application/json"`
}

type PutApplyCreditMemoResponse struct {
	ContentType       string
	GETCreditMemoType map[string]interface{}
	Headers           map[string][]string
	StatusCode        int64
}
