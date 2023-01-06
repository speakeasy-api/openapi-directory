package operations

type AddCalloutCountriesPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type AddCalloutCountriesApplicationJSONCalloutCountries struct {
	ID string `json:"id"`
}

type AddCalloutCountriesApplicationJSON struct {
	CalloutCountries []AddCalloutCountriesApplicationJSONCalloutCountries `json:"callout_countries"`
}

type AddCalloutCountriesMultipartFormDataCalloutCountries struct {
	ID string `json:"id"`
}

type AddCalloutCountriesMultipartFormData1 struct {
	CalloutCountries []AddCalloutCountriesMultipartFormDataCalloutCountries `multipartForm:"name=callout_countries,json"`
}

type AddCalloutCountriesRequests struct {
	Object  *AddCalloutCountriesApplicationJSON    `request:"mediaType=application/json"`
	Object1 *AddCalloutCountriesMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type AddCalloutCountries201ApplicationJSONCalloutCountries struct {
	Code *string `json:"code,omitempty"`
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type AddCalloutCountries201ApplicationJSON struct {
	CalloutCountries []AddCalloutCountries201ApplicationJSONCalloutCountries `json:"callout_countries,omitempty"`
}

type AddCalloutCountriesRequest struct {
	PathParams AddCalloutCountriesPathParams
	Request    *AddCalloutCountriesRequests
}

type AddCalloutCountriesResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	AddCalloutCountries201ApplicationJSONObject *AddCalloutCountries201ApplicationJSON
}
