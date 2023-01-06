package operations

import (
	"openapi/pkg/models/shared"
)

type SamlLoginQueryParams struct {
	Issuer       string  `queryParam:"style=form,explode=true,name=issuer"`
	SamlResponse string  `queryParam:"style=form,explode=true,name=samlResponse"`
	Source       *string `queryParam:"style=form,explode=true,name=source"`
}

type SamlLoginRequest struct {
	QueryParams SamlLoginQueryParams
}

type SamlLoginResponse struct {
	ContentType  string
	StatusCode   int64
	UserResponse *shared.UserResponse
	YodleeError  *shared.YodleeError
}
