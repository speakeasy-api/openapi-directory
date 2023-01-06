package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAccountPathParams struct {
	AccountID int64 `pathParam:"style=simple,explode=false,name=accountId"`
}

type UpdateAccountRequest struct {
	PathParams UpdateAccountPathParams
	Request    shared.UpdateAccountRequest `request:"mediaType=application/json"`
}

type UpdateAccountResponse struct {
	ContentType string
	StatusCode  int64
	YodleeError *shared.YodleeError
}
