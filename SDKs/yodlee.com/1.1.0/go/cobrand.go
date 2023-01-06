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

type Cobrand struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCobrand(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Cobrand {
	return &Cobrand{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CobrandLogin - Cobrand Login
// The cobrand login service authenticates a cobrand.<br>Cobrand session in the response includes the cobrand session token (cobSession) <br>which is used in subsequent API calls like registering or signing in the user. <br>The idle timeout for a cobrand session is 2 hours and the absolute timeout is 24 hours. This service can be <br>invoked to create a new cobrand session token. <br><b>Note:</b> This endpoint is deprecated for customers using the API Key-based authentication and is applicable only to customers who use the SAML-based authentication.<br>The content type has to be passed as application/json for the body parameter. <br>
func (s *Cobrand) CobrandLogin(ctx context.Context, request operations.CobrandLoginRequest) (*operations.CobrandLoginResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/cobrand/login"

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

	res := &operations.CobrandLoginResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json;charset=UTF-8`):
			var out *shared.CobrandLoginResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CobrandLoginResponse = out
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

// CobrandLogout - Cobrand Logout
// The cobrand logout service is used to log out the cobrand.<br>This service does not return a response. The HTTP response code is 204 (Success with no content).<br><b>Note:</b> This endpoint is deprecated for customers using the API Key-based authentication and is applicable only to customers who use the SAML-based authentication.<br>
func (s *Cobrand) CobrandLogout(ctx context.Context) (*operations.CobrandLogoutResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/cobrand/logout"

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

	res := &operations.CobrandLogoutResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// CreateSubscriptionEvent - Subscribe Event
// <b>Refer POST /configs/notifications/events/{eventName}.</b><br>The subscribe events service is used to subscribe to an event for receiving notifications.<br>The callback URL, where the notification will be posted should be provided to this service.<br>If the callback URL is invalid or inaccessible, the subscription will be unsuccessful, and an error will be thrown.<br>Customers can subscribe to REFRESH,DATA_UPDATES and AUTO_REFRESH_UPDATES event.<br><br><b>Notes</b>:<br>This service is not available in developer sandbox/test environment and will be made available for testing in your dedicated environment, once the contract is signed.<br>The content type has to be passed as application/json for the body parameter.<br>
func (s *Cobrand) CreateSubscriptionEvent(ctx context.Context, request operations.CreateSubscriptionEventRequest) (*operations.CreateSubscriptionEventResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/cobrand/config/notifications/events/{eventName}", request.PathParams)

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

	res := &operations.CreateSubscriptionEventResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
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

// DeleteSubscribedEvent - Delete Subscription
// <b>Refer DELETE /configs/notifications/events/{eventName}.</b><br>The delete events service is used to unsubscribe from an events service.<br>
func (s *Cobrand) DeleteSubscribedEvent(ctx context.Context, request operations.DeleteSubscribedEventRequest) (*operations.DeleteSubscribedEventResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/cobrand/config/notifications/events/{eventName}", request.PathParams)

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

	res := &operations.DeleteSubscribedEventResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
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

// GetPublicKey - Get Public Key
// <b>Refer GET /configs/publicKey.</b><br>The get public key service provides the customer the public key that should be used to encrypt the user credentials before sending it to Yodlee.<br>This endpoint is useful only for PKI enabled.<br>
func (s *Cobrand) GetPublicKey(ctx context.Context) (*operations.GetPublicKeyResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/cobrand/publicKey"

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

	res := &operations.GetPublicKeyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json;charset=UTF-8`):
			var out *shared.CobrandPublicKeyResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CobrandPublicKeyResponse = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetSubscribedEvents - Get Subscribed Events
// <b>Refer GET /configs/notifications/events.</b><br>The get events service provides the list of events for which consumers subscribed <br>to receive notifications. <br>
func (s *Cobrand) GetSubscribedEvents(ctx context.Context, request operations.GetSubscribedEventsRequest) (*operations.GetSubscribedEventsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/cobrand/config/notifications/events"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSubscribedEventsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json;charset=UTF-8`):
			var out *shared.CobrandNotificationResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CobrandNotificationResponse = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// UpdateSubscribedEvent - Update Subscription
// <b>Refer PUT /configs/notifications/events/{eventName}.</b><br>The update events service is used to update the callback URL.<br>If the callback URL is invalid or inaccessible, the subscription will be unsuccessful, and an error will be thrown.<br><b>Note:</b> The content type has to be passed as application/json for the body parameter. <br>
func (s *Cobrand) UpdateSubscribedEvent(ctx context.Context, request operations.UpdateSubscribedEventRequest) (*operations.UpdateSubscribedEventResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/cobrand/config/notifications/events/{eventName}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
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

	res := &operations.UpdateSubscribedEventResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
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
