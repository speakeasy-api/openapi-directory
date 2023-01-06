package operations

import (
	"openapi/pkg/models/shared"
)

type GetDataExtractsUserDataQueryParams struct {
	FromDate  string `queryParam:"style=form,explode=true,name=fromDate"`
	LoginName string `queryParam:"style=form,explode=true,name=loginName"`
	ToDate    string `queryParam:"style=form,explode=true,name=toDate"`
}

type GetDataExtractsUserDataRequest struct {
	QueryParams GetDataExtractsUserDataQueryParams
}

type GetDataExtractsUserDataResponse struct {
	ContentType                  string
	DataExtractsUserDataResponse *shared.DataExtractsUserDataResponse
	StatusCode                   int64
	YodleeError                  *shared.YodleeError
}
