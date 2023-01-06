package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetAllCustomObjectDefinitionsInNamespaceQueryParams struct {
	Select *shared.GlobalHeaderAuthorizationOAuthEnum `queryParam:"style=form,explode=true,name=select"`
}

type GetAllCustomObjectDefinitionsInNamespaceHeaders struct {
	Authorization  string     `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string    `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string    `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *time.Time `header:"style=simple,explode=false,name=Zuora-Version"`
}

type GetAllCustomObjectDefinitionsInNamespaceRequest struct {
	QueryParams GetAllCustomObjectDefinitionsInNamespaceQueryParams
	Headers     GetAllCustomObjectDefinitionsInNamespaceHeaders
}

type GetAllCustomObjectDefinitionsInNamespaceResponse struct {
	ContentType                                      string
	GETAllCustomObjectDefinitionsInNamespaceResponse *shared.GetAllCustomObjectDefinitionsInNamespaceResponse
	Headers                                          map[string][]string
	StatusCode                                       int64
}
