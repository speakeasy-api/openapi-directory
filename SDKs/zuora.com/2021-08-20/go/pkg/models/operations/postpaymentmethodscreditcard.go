package operations

import (
	"openapi/pkg/models/shared"
)

type PostPaymentMethodsCreditCardHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostPaymentMethodsCreditCardRequest struct {
	Headers PostPaymentMethodsCreditCardHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostPaymentMethodsCreditCardResponse struct {
	ContentType                   string
	Headers                       map[string][]string
	POSTPaymentMethodResponseType *shared.PostPaymentMethodResponseType
	StatusCode                    int64
}
