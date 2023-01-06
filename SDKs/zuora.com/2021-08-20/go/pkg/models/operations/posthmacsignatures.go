package operations

import (
	"openapi/pkg/models/shared"
)

type PostHmacSignaturesHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostHmacSignaturesRequest struct {
	Headers PostHmacSignaturesHeaders
	Request shared.PosthmacSignatureType `request:"mediaType=application/json"`
}

type PostHmacSignaturesResponse struct {
	ContentType                   string
	Headers                       map[string][]string
	POSTHMACSignatureResponseType *shared.PosthmacSignatureResponseType
	StatusCode                    int64
}
