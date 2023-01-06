package operations

import (
	"openapi/pkg/models/shared"
)

type PostPaymentRunHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostPaymentRunRequest struct {
	Headers PostPaymentRunHeaders
	Request shared.PostPaymentRunRequest `request:"mediaType=application/json"`
}

type PostPaymentRunResponse struct {
	ContentType       string
	GETPaymentRunType *shared.GetPaymentRunType
	Headers           map[string][]string
	StatusCode        int64
}
