package operations

type UserVanityNameQueryParams struct {
	VanityName string `queryParam:"style=form,explode=true,name=vanity_name"`
}

type UserVanityName200ApplicationJSON struct {
	Existed *bool `json:"existed,omitempty"`
}

type UserVanityNameRequest struct {
	QueryParams UserVanityNameQueryParams
}

type UserVanityNameResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	UserVanityName200ApplicationJSONObject *UserVanityName200ApplicationJSON
}
