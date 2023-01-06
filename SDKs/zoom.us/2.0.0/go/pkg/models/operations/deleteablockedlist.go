package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteABlockedListPathParams struct {
	BlockedListID string `pathParam:"style=simple,explode=false,name=blockedListId"`
}

type DeleteABlockedListSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DeleteABlockedListRequest struct {
	PathParams DeleteABlockedListPathParams
	Security   DeleteABlockedListSecurity
}

type DeleteABlockedListResponse struct {
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
	DeleteABlockedList204ApplicationJSONAny *interface{}
}
