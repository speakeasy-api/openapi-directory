package operations

type ListInternalCalloutCountriesPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type ListInternalCalloutCountries200ApplicationJSONCalloutCountries struct {
	Code *string `json:"code,omitempty"`
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type ListInternalCalloutCountries200ApplicationJSON struct {
	CalloutCountries []ListInternalCalloutCountries200ApplicationJSONCalloutCountries `json:"callout_countries,omitempty"`
	TotalRecords     *int64                                                           `json:"total_records,omitempty"`
}

type ListInternalCalloutCountriesRequest struct {
	PathParams ListInternalCalloutCountriesPathParams
}

type ListInternalCalloutCountriesResponse struct {
	Body                                                 []byte
	ContentType                                          string
	StatusCode                                           int64
	ListInternalCalloutCountries200ApplicationJSONObject *ListInternalCalloutCountries200ApplicationJSON
}
