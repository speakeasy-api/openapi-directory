package operations

type AccountTrustedDomainPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type AccountTrustedDomainRequest struct {
	PathParams AccountTrustedDomainPathParams
}

type AccountTrustedDomainResponse struct {
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	AccountTrustedDomain200ApplicationJSONAny *interface{}
}
