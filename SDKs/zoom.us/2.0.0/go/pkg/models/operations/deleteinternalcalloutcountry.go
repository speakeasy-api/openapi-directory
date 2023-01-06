package operations

type DeleteInternalCallOutCountryPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	CountryID string `pathParam:"style=simple,explode=false,name=countryId"`
}

type DeleteInternalCallOutCountryRequest struct {
	PathParams DeleteInternalCallOutCountryPathParams
}

type DeleteInternalCallOutCountryResponse struct {
	Body                                              []byte
	ContentType                                       string
	StatusCode                                        int64
	DeleteInternalCallOutCountry204ApplicationJSONAny *interface{}
}
