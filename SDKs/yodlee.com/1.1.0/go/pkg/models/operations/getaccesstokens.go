package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccessTokensQueryParams struct {
	AppIds string `queryParam:"style=form,explode=true,name=appIds"`
}

type GetAccessTokensRequest struct {
	QueryParams GetAccessTokensQueryParams
}

type GetAccessTokensResponse struct {
	ContentType              string
	StatusCode               int64
	UserAccessTokensResponse *shared.UserAccessTokensResponse
}
