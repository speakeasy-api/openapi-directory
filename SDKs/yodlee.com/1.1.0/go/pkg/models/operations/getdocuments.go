package operations

import (
	"openapi/pkg/models/shared"
)

type GetDocumentsQueryParams struct {
	Keyword   *string `queryParam:"style=form,explode=true,name=Keyword"`
	AccountID *string `queryParam:"style=form,explode=true,name=accountId"`
	DocType   *string `queryParam:"style=form,explode=true,name=docType"`
	FromDate  *string `queryParam:"style=form,explode=true,name=fromDate"`
	ToDate    *string `queryParam:"style=form,explode=true,name=toDate"`
}

type GetDocumentsRequest struct {
	QueryParams GetDocumentsQueryParams
}

type GetDocumentsResponse struct {
	ContentType      string
	DocumentResponse *shared.DocumentResponse
	StatusCode       int64
	YodleeError      *shared.YodleeError
}
