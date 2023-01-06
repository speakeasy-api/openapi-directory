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

type Auth struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAuth(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Auth {
	return &Auth{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteAPIKey - Delete API Key
// This endpoint allows an existing API key to be deleted.<br>You can use one of the following authorization methods to access this API:<br><ol><li>cobsession</li><li>JWT token</li></ol> <b>Notes:</b> <li>This service is not available in developer sandbox environment and will be made availablefor testing in your dedicated environment.
func (s *Auth) DeleteAPIKey(ctx context.Context, request operations.DeleteAPIKeyRequest) (*operations.DeleteAPIKeyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/auth/apiKey/{key}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteAPIKeyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json;charset=UTF-8`):
			var out *shared.YodleeError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.YodleeError = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// DeleteToken - Delete Token
// This endpoint revokes the token passed in the Authorization header. This service is applicable for JWT-based (and all API key-based) authentication and also client credential (clientId and secret) based authentication. This service does not return a response body. The HTTP response code is 204 (success with no content). <br>Tokens generally have limited lifetime of up to 30 minutes. You will call this service when you finish working with one user, and you want to delete the valid token rather than simply letting it expire.<br><br><b>Note:</b> <li>Revoking an access token (either type, admin or a user token) can take up to 2 minutes, as the tokens are stored on a distributed system.<br/>
func (s *Auth) DeleteToken(ctx context.Context) (*operations.DeleteTokenResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/auth/token"

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteTokenResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json;charset=UTF-8`):
			var out *shared.YodleeError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.YodleeError = out
		}
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GenerateAccessToken - Generate Access Token
// <b>Generate Access Token using client credential authentication.</b><br>This service returns access tokens required to access Yodlee 1.1 APIs. These tokens are the simplest and easiest of several alternatives for authenticating with Yodlee servers.<br>The most commonly used services obtain data specific to an end user (your customer). For these services, you need a <b>user access token</b>. These are simply tokens created with the user name parameter (<b>loginName</b>) set to the id of your end user.  <i><br><br><b>Note:</b> You determine this id and you must ensure it's unique among all your customers.</i> <br><br>Each token issued has an associated user. The token passed in the http headers explicitly names the user referenced in that API call.<br><br>Some of the APIs do administrative work, and don't reference an end user. <br/>One example of administrative work is key management. Another example is registering a new user explicitly, with <b>POST /user/register</b> call or subscribe to webhook, with <b>POST /config/notifications/events/{eventName}</b>. <br/>To invoke these, you need an <b>admin access token</b>. Create this by passing in your admin user login name in place of a regular user name.<br><br>This service also allows for simplified registration of new users. Any time you pass in a user name not already in use, the system will automatically implicitly create a new user for you. <br>This user will naturally have very few associated details. You can later provide additional user information by calling the <b>PUT user/register service</b>.<br><br><b>Notes:</b><li>The content type has to be passed as application/x-www-form-urlencoded.<li>Upgrading to client credential authentication requires infrastructure reconfiguration. <li>Customers wishing to switch from another authentication scheme to client credential authentication, please contact Yodlee Client Services.</li>
func (s *Auth) GenerateAccessToken(ctx context.Context) (*operations.GenerateAccessTokenResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/auth/token"

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GenerateAccessTokenResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json;charset=UTF-8`):
			var out *shared.ClientCredentialTokenResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ClientCredentialTokenResponse = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json;charset=UTF-8`):
			var out *shared.YodleeError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.YodleeError = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json;charset=UTF-8`):
			var out *shared.YodleeError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.YodleeError = out
		}
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GenerateAPIKey - Generate API Key
// This endpoint is used to generate an API key. The RSA public key you provide should be in 2048 bit PKCS#8 encoded format. <br>A public key is a mandatory input for generating the API key.<br/>The public key should be a unique key. The apiKeyId you get in the response is what you should use to generate the JWT token.<br> You can use one of the following authorization methods to access<br/>this API:<br><ol><li>cobsession</li><li>JWT token</li></ol> Alternatively, you can use base 64 encoded cobrandLogin and cobrandPassword in the Authorization header (Format: Authorization: Basic <encoded value of cobrandLogin: cobrandPassword>)<br><br><b>Note:</b><br><li>This service is not available in developer sandbox environment and will be made available for testing in your dedicated environment. The content type has to be passed as application/json for the body parameter.</li>
func (s *Auth) GenerateAPIKey(ctx context.Context, request operations.GenerateAPIKeyRequest) (*operations.GenerateAPIKeyResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/auth/apiKey"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GenerateAPIKeyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json;charset=UTF-8`):
			var out *shared.APIKeyResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIKeyResponse = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json;charset=UTF-8`):
			var out *shared.YodleeError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.YodleeError = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetAPIKeys - Get API Keys
// This endpoint provides the list of API keys that exist for a customer.<br>You can use one of the following authorization methods to access this API:<br><ol><li>cobsession</li><li>JWT token</li></ol><b>Notes:</b><li>This service is not available in developer sandbox environment and will be made available for testing in your dedicated environment.
func (s *Auth) GetAPIKeys(ctx context.Context) (*operations.GetAPIKeysResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/auth/apiKey"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAPIKeysResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json;charset=UTF-8`):
			var out *shared.APIKeyResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIKeyResponse = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}
