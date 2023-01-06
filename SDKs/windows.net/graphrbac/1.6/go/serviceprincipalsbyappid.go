package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type ServicePrincipalsByAppID struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewServicePrincipalsByAppID(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ServicePrincipalsByAppID {
	return &ServicePrincipalsByAppID{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ApplicationsGetServicePrincipalsIDByAppID - Gets an object id for a given application id from the current tenant.
func (s *ServicePrincipalsByAppID) ApplicationsGetServicePrincipalsIDByAppID(ctx context.Context, request operations.ApplicationsGetServicePrincipalsIDByAppIDRequest) (*operations.ApplicationsGetServicePrincipalsIDByAppIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{tenantID}/servicePrincipalsByAppId/{applicationID}/objectId", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ApplicationsGetServicePrincipalsIDByAppIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServicePrincipalObjectResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServicePrincipalObjectResult = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.ServicePrincipalObjectResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServicePrincipalObjectResult = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GraphError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GraphError = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.GraphError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GraphError = out
		}
	}

	return res, nil
}
