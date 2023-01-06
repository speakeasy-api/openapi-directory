package operations

import (
	"openapi/pkg/models/shared"
)

type GetHostedPagesQueryParams struct {
	VersionNumber *string `queryParam:"style=form,explode=true,name=versionNumber"`
}

type GetHostedPagesHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetHostedPagesRequest struct {
	QueryParams GetHostedPagesQueryParams
	Headers     GetHostedPagesHeaders
}

type GetHostedPagesResponse struct {
	ContentType        string
	GetHostedPagesType *shared.GetHostedPagesType
	Headers            map[string][]string
	StatusCode         int64
}
