package operations

type GetAccountLockSettingsPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type GetAccountLockSettingsQueryParams struct {
	CustomQueryFields *string `queryParam:"style=form,explode=true,name=custom_query_fields"`
	Option            *string `queryParam:"style=form,explode=true,name=option"`
}

type GetAccountLockSettingsRequest struct {
	PathParams  GetAccountLockSettingsPathParams
	QueryParams GetAccountLockSettingsQueryParams
}

type GetAccountLockSettingsResponse struct {
	Body                                           []byte
	ContentType                                    string
	StatusCode                                     int64
	GetAccountLockSettings200ApplicationJSONObject map[string]interface{}
}
