package operations

import (
	"openapi/pkg/models/shared"
)

type PostGenerateBillingDocumentsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostGenerateBillingDocumentsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostGenerateBillingDocumentsRequest struct {
	PathParams PostGenerateBillingDocumentsPathParams
	Headers    PostGenerateBillingDocumentsHeaders
	Request    shared.PostGenerateBillingDocumentType `request:"mediaType=application/json"`
}

type PostGenerateBillingDocumentsResponse struct {
	ContentType                         string
	GenerateBillingDocumentResponseType *shared.GenerateBillingDocumentResponseType
	Headers                             map[string][]string
	StatusCode                          int64
}
