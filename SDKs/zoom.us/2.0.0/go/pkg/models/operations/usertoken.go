package operations

import (
	"openapi/pkg/models/shared"
)

type UserTokenPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UserTokenTypeEnum string

const (
	UserTokenTypeEnumToken UserTokenTypeEnum = "token"
	UserTokenTypeEnumZak   UserTokenTypeEnum = "zak"
)

type UserTokenQueryParams struct {
	TTL  *int64             `queryParam:"style=form,explode=true,name=ttl"`
	Type *UserTokenTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type UserTokenSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UserToken200ApplicationJSON struct {
	Token *string `json:"token,omitempty"`
}

type UserTokenRequest struct {
	PathParams  UserTokenPathParams
	QueryParams UserTokenQueryParams
	Security    UserTokenSecurity
}

type UserTokenResponse struct {
	Body                              []byte
	ContentType                       string
	StatusCode                        int64
	UserToken200ApplicationJSONObject *UserToken200ApplicationJSON
}
