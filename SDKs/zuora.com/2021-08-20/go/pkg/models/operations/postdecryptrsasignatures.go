package operations

import (
	"openapi/pkg/models/shared"
)

type PostDecryptRsaSignaturesHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostDecryptRsaSignaturesRequest struct {
	Headers PostDecryptRsaSignaturesHeaders
	Request shared.PostDecryptionType `request:"mediaType=application/json"`
}

type PostDecryptRsaSignaturesResponse struct {
	ContentType             string
	Headers                 map[string][]string
	POSTDecryptResponseType *shared.PostDecryptResponseType
	StatusCode              int64
}
