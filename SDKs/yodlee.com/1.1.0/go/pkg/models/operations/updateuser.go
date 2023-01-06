package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserRequest struct {
	Request shared.UpdateUserRequest `request:"mediaType=application/json"`
}

type UpdateUserResponse struct {
	ContentType string
	StatusCode  int64
}
