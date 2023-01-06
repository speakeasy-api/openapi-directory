package operations

import (
	"openapi/pkg/models/shared"
)

type PostRsaSignaturesHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostRsaSignaturesRequest struct {
	Headers PostRsaSignaturesHeaders
	Request shared.PostrsaSignatureType `request:"mediaType=application/json"`
}

type PostRsaSignaturesResponse struct {
	ContentType                  string
	Headers                      map[string][]string
	POSTRSASignatureResponseType *shared.PostrsaSignatureResponseType
	StatusCode                   int64
}
