package operations

// PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials
// Pre-emptive basic auth credentials to match against
type PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}

type PostAdminRecordingsStartRequestBodyFilters struct {
	BasicAuthCredentials *PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials `json:"basicAuthCredentials,omitempty"`
	BodyPatterns         []map[string]interface{}                                        `json:"bodyPatterns,omitempty"`
	Cookies              map[string]interface{}                                          `json:"cookies,omitempty"`
	Headers              map[string]interface{}                                          `json:"headers,omitempty"`
	Method               *string                                                         `json:"method,omitempty"`
	QueryParameters      map[string]interface{}                                          `json:"queryParameters,omitempty"`
	URL                  *string                                                         `json:"url,omitempty"`
	URLPath              *string                                                         `json:"urlPath,omitempty"`
	URLPathPattern       *string                                                         `json:"urlPathPattern,omitempty"`
	URLPattern           *string                                                         `json:"urlPattern,omitempty"`
}

type PostAdminRecordingsStartRequestBody struct {
	Filters       *PostAdminRecordingsStartRequestBodyFilters `json:"filters,omitempty"`
	TargetBaseURL *string                                     `json:"targetBaseUrl,omitempty"`
}

type PostAdminRecordingsStartRequest struct {
	Request PostAdminRecordingsStartRequestBody `request:"mediaType=application/json"`
}

type PostAdminRecordingsStartResponse struct {
	ContentType string
	StatusCode  int64
}
