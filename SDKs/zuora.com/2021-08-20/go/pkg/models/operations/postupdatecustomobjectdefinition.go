package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PostUpdateCustomObjectDefinitionHeaders struct {
	Authorization  string     `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string    `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string    `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *time.Time `header:"style=simple,explode=false,name=Zuora-Version"`
}

type PostUpdateCustomObjectDefinitionRequest struct {
	Headers PostUpdateCustomObjectDefinitionHeaders
	Request shared.MigrationUpdateCustomObjectDefinitionsRequest `request:"mediaType=application/json"`
}

type PostUpdateCustomObjectDefinitionResponse struct {
	ContentType                                    string
	Headers                                        map[string][]string
	MigrationUpdateCustomObjectDefinitionsResponse *shared.MigrationUpdateCustomObjectDefinitionsResponse
	StatusCode                                     int64
}
