package operations

import (
	"openapi/pkg/models/shared"
)

type GetNetworthQueryParams struct {
	AccountIds *string `queryParam:"style=form,explode=true,name=accountIds"`
	Container  *string `queryParam:"style=form,explode=true,name=container"`
	FromDate   *string `queryParam:"style=form,explode=true,name=fromDate"`
	Include    *string `queryParam:"style=form,explode=true,name=include"`
	Interval   *string `queryParam:"style=form,explode=true,name=interval"`
	Skip       *int32  `queryParam:"style=form,explode=true,name=skip"`
	ToDate     *string `queryParam:"style=form,explode=true,name=toDate"`
	Top        *int32  `queryParam:"style=form,explode=true,name=top"`
}

type GetNetworthRequest struct {
	QueryParams GetNetworthQueryParams
}

type GetNetworthResponse struct {
	ContentType             string
	DerivedNetworthResponse *shared.DerivedNetworthResponse
	StatusCode              int64
	YodleeError             *shared.YodleeError
}
