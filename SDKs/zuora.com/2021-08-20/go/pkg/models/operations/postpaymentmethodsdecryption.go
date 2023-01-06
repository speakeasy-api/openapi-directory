package operations

import (
	"openapi/pkg/models/shared"
)

type PostPaymentMethodsDecryptionHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostPaymentMethodsDecryptionRequest struct {
	Headers PostPaymentMethodsDecryptionHeaders
	Request shared.PostPaymentMethodDecryption `request:"mediaType=application/json"`
}

type PostPaymentMethodsDecryptionResponse struct {
	ContentType                         string
	Headers                             map[string][]string
	POSTPaymentMethodResponseDecryption *shared.PostPaymentMethodResponseDecryption
	StatusCode                          int64
}
