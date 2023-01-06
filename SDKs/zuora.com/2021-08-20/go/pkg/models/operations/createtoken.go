package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTokenHeaders struct {
	ZuoraTrackID *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type CreateTokenRequestBodyGrantTypeEnum string

const (
	CreateTokenRequestBodyGrantTypeEnumClientCredentials CreateTokenRequestBodyGrantTypeEnum = "client_credentials"
)

type CreateTokenRequestBody struct {
	ClientID     string                              `form:"name=client_id"`
	ClientSecret string                              `form:"name=client_secret"`
	GrantType    CreateTokenRequestBodyGrantTypeEnum `form:"name=grant_type"`
}

type CreateTokenRequest struct {
	Headers CreateTokenHeaders
	Request CreateTokenRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type CreateTokenResponse struct {
	ContentType   string
	Headers       map[string][]string
	StatusCode    int64
	TokenResponse *shared.TokenResponse
}
