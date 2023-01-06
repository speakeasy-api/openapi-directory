package operations

import (
	"openapi/pkg/models/shared"
)

type GetHoldingTypeListResponse struct {
	ContentType             string
	HoldingTypeListResponse *shared.HoldingTypeListResponse
	StatusCode              int64
}
