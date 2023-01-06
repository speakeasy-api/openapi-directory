package operations

type ListPhoneSitesQueryParams struct {
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

// ListPhoneSites200ApplicationJSONSitesCountry
// Site country
type ListPhoneSites200ApplicationJSONSitesCountry struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}

// ListPhoneSites200ApplicationJSONSitesMainAutoReceptionist
// Auto Receptionist for each site.
type ListPhoneSites200ApplicationJSONSitesMainAutoReceptionist struct {
	ExtensionID     *string `json:"extension_id,omitempty"`
	ExtensionNumber *string `json:"extension_number,omitempty"`
	ID              *string `json:"id,omitempty"`
	Name            *string `json:"name,omitempty"`
}

type ListPhoneSites200ApplicationJSONSites struct {
	Country              *ListPhoneSites200ApplicationJSONSitesCountry              `json:"country,omitempty"`
	ID                   *string                                                    `json:"id,omitempty"`
	MainAutoReceptionist *ListPhoneSites200ApplicationJSONSitesMainAutoReceptionist `json:"main_auto_receptionist,omitempty"`
	Name                 *string                                                    `json:"name,omitempty"`
	SiteCode             *string                                                    `json:"site_code,omitempty"`
}

type ListPhoneSites200ApplicationJSON struct {
	NextPageToken *string                                 `json:"next_page_token,omitempty"`
	PageSize      *string                                 `json:"page_size,omitempty"`
	Sites         []ListPhoneSites200ApplicationJSONSites `json:"sites,omitempty"`
	TotalRecords  *string                                 `json:"total_records,omitempty"`
}

type ListPhoneSitesRequest struct {
	QueryParams ListPhoneSitesQueryParams
}

type ListPhoneSitesResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	ListPhoneSites200ApplicationJSONObject *ListPhoneSites200ApplicationJSON
}
