package operations

import (
	"openapi/pkg/models/shared"
)

type GetAssetClassificationListResponse struct {
	ContentType                            string
	HoldingAssetClassificationListResponse *shared.HoldingAssetClassificationListResponse
	StatusCode                             int64
}
