package operations

import (
	"openapi/pkg/models/shared"
)

type GetAmendmentsBySubscriptionIDPathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscription-id"`
}

type GetAmendmentsBySubscriptionIDHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetAmendmentsBySubscriptionIDRequest struct {
	PathParams GetAmendmentsBySubscriptionIDPathParams
	Headers    GetAmendmentsBySubscriptionIDHeaders
}

type GetAmendmentsBySubscriptionIDResponse struct {
	ContentType      string
	GETAmendmentType *shared.GetAmendmentType
	Headers          map[string][]string
	StatusCode       int64
}
