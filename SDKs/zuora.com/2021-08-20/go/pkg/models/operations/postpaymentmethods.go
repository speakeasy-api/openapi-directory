package operations

import (
	"openapi/pkg/models/shared"
)

type PostPaymentMethodsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostPaymentMethodsRequest struct {
	Headers PostPaymentMethodsHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostPaymentMethodsResponse struct {
	ContentType               string
	Headers                   map[string][]string
	POSTPaymentMethodResponse *shared.PostPaymentMethodResponse
	StatusCode                int64
}
