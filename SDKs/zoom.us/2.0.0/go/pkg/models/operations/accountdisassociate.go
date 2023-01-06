package operations

type AccountDisassociatePathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type AccountDisassociateRequest struct {
	PathParams AccountDisassociatePathParams
}

type AccountDisassociateResponse struct {
	ContentType string
	StatusCode  int64
}
