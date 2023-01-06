package operations

import (
	"openapi/pkg/models/shared"
)

type PutProvisionEntityPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutProvisionEntityHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutProvisionEntityRequest struct {
	PathParams PutProvisionEntityPathParams
	Headers    PutProvisionEntityHeaders
}

type PutProvisionEntityResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProvisionEntityResponseType *shared.ProvisionEntityResponseType
	StatusCode                  int64
}
