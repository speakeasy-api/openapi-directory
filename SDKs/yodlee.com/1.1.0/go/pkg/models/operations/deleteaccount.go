package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAccountPathParams struct {
	AccountID int64 `pathParam:"style=simple,explode=false,name=accountId"`
}

type DeleteAccountRequest struct {
	PathParams DeleteAccountPathParams
}

type DeleteAccountResponse struct {
	ContentType string
	StatusCode  int64
	YodleeError *shared.YodleeError
}
