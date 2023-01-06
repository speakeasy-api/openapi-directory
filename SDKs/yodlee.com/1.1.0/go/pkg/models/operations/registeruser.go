package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterUserRequest struct {
	Request shared.UserRequest `request:"mediaType=application/json"`
}

type RegisterUserResponse struct {
	ContentType  string
	StatusCode   int64
	UserResponse *shared.UserResponse
	YodleeError  *shared.YodleeError
}
