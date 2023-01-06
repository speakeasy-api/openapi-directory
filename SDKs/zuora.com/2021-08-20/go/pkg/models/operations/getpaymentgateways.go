package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentgatewaysHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetPaymentgatewaysRequest struct {
	Headers GetPaymentgatewaysHeaders
}

type GetPaymentgatewaysResponse struct {
	ContentType               string
	GETPaymentGatwaysResponse *shared.GetPaymentGatwaysResponse
	Headers                   map[string][]string
	StatusCode                int64
}
