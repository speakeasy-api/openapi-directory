package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
	"strings"
)

type HostedPages struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewHostedPages(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *HostedPages {
	return &HostedPages{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetHostedPages - List hosted pages
// Returns the Payment Pages configuration metadata,
// specifically, page ID, page version, payment method type.
//
// The following are the version-specific and general REST requests for Payment Pages:
//
// * The request for Payment Pages 1.0 configuration information: `GET <BaseURL>/hostedpages?version=1`
// * The request for Payment Pages 2.0 configuration information: `GET <BaseURL>/hostedpages?version=2`
// * The request for all versions of Payment Pages configuration information: `GET <BaseURL>/hostedpages`
//
// ## Notes
// If you do not have the corresponding tenant setting enabled, e.g., the request `version` parameter set to 2 with the Payment Pages 2.0 setting disabled, you will receive an error.
func (s *HostedPages) GetHostedPages(ctx context.Context, request operations.GetHostedPagesRequest) (*operations.GetHostedPagesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/hostedpages"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetHostedPagesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GetHostedPagesType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetHostedPagesType = out
		}
	}

	return res, nil
}
