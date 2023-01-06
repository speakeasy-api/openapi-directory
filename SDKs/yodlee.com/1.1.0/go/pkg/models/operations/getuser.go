package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserResponse struct {
	ContentType        string
	StatusCode         int64
	UserDetailResponse *shared.UserDetailResponse
}
