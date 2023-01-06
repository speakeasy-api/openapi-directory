package operations

import (
	"openapi/pkg/models/shared"
)

type PostCatalogPathParams struct {
	ProductID string `pathParam:"style=simple,explode=false,name=product-id"`
}

type PostCatalogHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostCatalogRequest struct {
	PathParams PostCatalogPathParams
	Headers    PostCatalogHeaders
	Request    shared.PostCatalogType `request:"mediaType=application/json"`
}

type PostCatalogResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
