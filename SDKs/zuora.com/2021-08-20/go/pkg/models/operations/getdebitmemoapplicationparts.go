package operations

import (
	"openapi/pkg/models/shared"
)

type GetDebitMemoApplicationPartsPathParams struct {
	DebitMemoID string `pathParam:"style=simple,explode=false,name=debitMemoId"`
}

type GetDebitMemoApplicationPartsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetDebitMemoApplicationPartsRequest struct {
	PathParams GetDebitMemoApplicationPartsPathParams
	Headers    GetDebitMemoApplicationPartsHeaders
}

type GetDebitMemoApplicationPartsResponse struct {
	ContentType                               string
	GetDebitMemoApplicationPartCollectionType *shared.GetDebitMemoApplicationPartCollectionType
	Headers                                   map[string][]string
	StatusCode                                int64
}
