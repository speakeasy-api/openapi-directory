package operations

import (
	"openapi/pkg/models/shared"
)

type PostOrderQueryParams struct {
	ReturnIds *bool `queryParam:"style=form,explode=true,name=returnIds"`
}

type PostOrderHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *string `header:"style=simple,explode=false,name=zuora-version"`
}

type PostOrderRequest struct {
	QueryParams PostOrderQueryParams
	Headers     PostOrderHeaders
	Request     shared.PostOrderRequestType `request:"mediaType=application/json"`
}

type PostOrderResponse struct {
	ContentType           string
	Headers               map[string][]string
	PostOrderResponseType *shared.PostOrderResponseType
	StatusCode            int64
}
