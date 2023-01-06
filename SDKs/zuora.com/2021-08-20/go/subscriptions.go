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

type Subscriptions struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewSubscriptions(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Subscriptions {
	return &Subscriptions{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetSubscriptionsByAccount - List subscriptions by account key
// Retrieves all subscriptions associated with the specified account. Zuora only returns the latest version of the subscriptions.
//
// Subscription data is returned in reverse chronological order based on `updatedDate`.
func (s *Subscriptions) GetSubscriptionsByAccount(ctx context.Context, request operations.GetSubscriptionsByAccountRequest) (*operations.GetSubscriptionsByAccountResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/subscriptions/accounts/{account-key}", request.PathParams)

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

	res := &operations.GetSubscriptionsByAccountResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GetSubscriptionWrapper
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETSubscriptionWrapper = out
		}
	}

	return res, nil
}

// GetSubscriptionsByKey - Retrieve a subscription by key
// This REST API reference describes how to retrieve detailed information about a specified subscription in the latest version.
func (s *Subscriptions) GetSubscriptionsByKey(ctx context.Context, request operations.GetSubscriptionsByKeyRequest) (*operations.GetSubscriptionsByKeyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/subscriptions/{subscription-key}", request.PathParams)

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

	res := &operations.GetSubscriptionsByKeyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETSubscriptionTypeWithSuccess = out
		}
	}

	return res, nil
}

// GetSubscriptionsByKeyAndVersion - Retrieve a subscription by key and version
// This REST API reference describes how to retrieve detailed information about a specified subscription in a specified version. When you create a subscription amendment, you create a new version of the subscription. You can use this method to retrieve information about a subscription in any version.
func (s *Subscriptions) GetSubscriptionsByKeyAndVersion(ctx context.Context, request operations.GetSubscriptionsByKeyAndVersionRequest) (*operations.GetSubscriptionsByKeyAndVersionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/subscriptions/{subscription-key}/versions/{version}", request.PathParams)

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

	res := &operations.GetSubscriptionsByKeyAndVersionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETSubscriptionTypeWithSuccess = out
		}
	}

	return res, nil
}

// ObjectDeleteSubscription - CRUD: Delete a subscription
func (s *Subscriptions) ObjectDeleteSubscription(ctx context.Context, request operations.ObjectDeleteSubscriptionRequest) (*operations.ObjectDeleteSubscriptionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/object/subscription/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ObjectDeleteSubscriptionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ProxyDeleteResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProxyDeleteResponse = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ProxyUnauthorizedResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProxyUnauthorizedResponse = out
		}
	}

	return res, nil
}

// ObjectGetSubscription - CRUD: Retrieve a subscription
func (s *Subscriptions) ObjectGetSubscription(ctx context.Context, request operations.ObjectGetSubscriptionRequest) (*operations.ObjectGetSubscriptionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/object/subscription/{id}", request.PathParams)

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

	res := &operations.ObjectGetSubscriptionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProxyGetSubscription = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ProxyUnauthorizedResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProxyUnauthorizedResponse = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ProxyNoDataResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProxyNoDataResponse = out
		}
	}

	return res, nil
}

// ObjectPutSubscription - CRUD: Update a subscription
func (s *Subscriptions) ObjectPutSubscription(ctx context.Context, request operations.ObjectPutSubscriptionRequest) (*operations.ObjectPutSubscriptionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/object/subscription/{id}", request.PathParams)

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

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ObjectPutSubscriptionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ProxyCreateOrModifyResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProxyCreateOrModifyResponse = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ProxyUnauthorizedResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProxyUnauthorizedResponse = out
		}
	}

	return res, nil
}

// PostPreviewSubscription - Preview a subscription
// The REST API reference describes how to create a new subscription in preview mode. This call does not require a valid customer account. It can be used to show potential new customers a preview of a subscription with complete details and charges before creating an account, or to let existing customers preview a subscription with all charges before committing.
//
// ## Notes
// - The response of the Preview Subscription call is based on the REST API minor version you set in the request header. The response structure might be different if you use different minor version numbers.
//
// - If you have the Invoice Settlement feature enabled, we recommend that you set the `zuora-version` parameter to `207.0` or later. Otherwise, an error is returned.
//
// - Default values for **customerAcceptanceDate** and **serviceActivationDate** are set as follows.
//
// |        | serviceActivationDate (SA) specified          | serviceActivationDate (SA) NOT specified  |
// | ------------- |:-------------:| -----:|
// | customerAcceptanceDate (CA) specified      | SA uses value in the request call; CA uses value in the request call| CA uses value in the request call;SA uses CE as default |
// | customerAcceptanceDate (CA) NOT specified      | SA uses value in the request call; CA uses SA as default |   SA and CA use CE as default |
func (s *Subscriptions) PostPreviewSubscription(ctx context.Context, request operations.PostPreviewSubscriptionRequest) (*operations.PostPreviewSubscriptionResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/subscriptions/preview"

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

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostPreviewSubscriptionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.PostSubscriptionPreviewResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.POSTSubscriptionPreviewResponseType = out
		}
	}

	return res, nil
}

// PostSubscription - Create a subscription
// This REST API reference describes how to create a new subscription for an existing customer account.
//
// ## Notes
//
// If you have the Invoice Settlement feature enabled, it is best practice to set the `zuora-version` parameter to `211.0` or later. Otherwise, an error occurs.
//
// If `invoiceCollect` is `true`, the call will not return `success` = `true` unless the subscription, invoice, and payment are all successful.
//
// Default values for **customerAcceptanceDate** and **serviceActivationDate** are set as follows. This API operation does not support creating a pending subscription.
//
// |        | serviceActivationDate(SA) specified          | serviceActivationDate (SA) NOT specified  |
// | ------------- |:-------------:| -----:|
// | customerAcceptanceDate (CA) specified| SA uses value in the request call; CA uses value in the request call| CA uses value in the request call;SA uses CE as default |
// | customerAcceptanceDate (CA) NOT specified      | SA uses value in the request call; CA uses SA as default |   SA and CA use CE as default |
func (s *Subscriptions) PostSubscription(ctx context.Context, request operations.PostSubscriptionRequest) (*operations.PostSubscriptionResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/subscriptions"

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

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSubscriptionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.PostSubscriptionResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.POSTSubscriptionResponseType = out
		}
	}

	return res, nil
}

// PutCancelSubscription - Cancel a subscription
// This REST API reference describes how to cancel an active subscription.
//
// **Note**: If you have the Invoice Settlement feature enabled, it is best practice to set the `zuora-version` parameter to `211.0` or later. Otherwise, an error occurs.
func (s *Subscriptions) PutCancelSubscription(ctx context.Context, request operations.PutCancelSubscriptionRequest) (*operations.PutCancelSubscriptionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/subscriptions/{subscription-key}/cancel", request.PathParams)

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

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutCancelSubscriptionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.PostSubscriptionCancellationResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.POSTSubscriptionCancellationResponseType = out
		}
	}

	return res, nil
}

// PutRenewSubscription - Renew a subscription
// Renews a termed subscription using existing renewal terms.
//
// **Note**: If you have the Invoice Settlement feature enabled, it is best practice to set the `zuora-version` parameter to `211.0` or later. Otherwise, an error occurs.
func (s *Subscriptions) PutRenewSubscription(ctx context.Context, request operations.PutRenewSubscriptionRequest) (*operations.PutRenewSubscriptionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/subscriptions/{subscription-key}/renew", request.PathParams)

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

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutRenewSubscriptionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.PutRenewSubscriptionResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PUTRenewSubscriptionResponseType = out
		}
	}

	return res, nil
}

// PutResumeSubscription - Resume a subscription
// This REST API reference describes how to resume a suspended subscription.
//
// **Note**: If you have the Invoice Settlement feature enabled, it is best practice to set the `zuora-version` parameter to `211.0` or later. Otherwise, an error occurs.
func (s *Subscriptions) PutResumeSubscription(ctx context.Context, request operations.PutResumeSubscriptionRequest) (*operations.PutResumeSubscriptionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/subscriptions/{subscription-key}/resume", request.PathParams)

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

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutResumeSubscriptionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.PutSubscriptionResumeResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PUTSubscriptionResumeResponseType = out
		}
	}

	return res, nil
}

// PutSubscription - Update a subscription
// Use this call to make the following kinds of changes to a subscription:
//   - Add a note
//   - Change the renewal term or auto-renewal flag
//   - Change the term length or change between evergreen and termed
//   - Add a new product rate plan
//   - Remove an existing subscription rate plan
//   - Change the quantity or price of an existing subscription rate plan
//
// ## Notes
// * The Update Subscription call creates a new subscription, which has the old subscription number but a new subscription ID.  The old subscription is canceled but remains in the system.
// * In one request, this call can make:
//   - Up to 9 combined add, update, and remove changes
//   - No more than 1 change to terms & conditions
//
// * Updates are performed in the following sequence:
//  1. First change the notes on the existing subscription, if requested.
//  2. Then change the terms and conditions, if requested.
//  3. Then perform the remaining amendments based upon the effective dates specified. If multiple amendments have the same contract-effective dates, then execute adds before updates, and updates before removes.
//
// * The update operation is atomic. If any of the updates fails, the entire operation is rolled back.
// * The response of the Update Subscription call is based on the REST API minor version you set in the request header. The response structure might be different if you use different minor version numbers.
// * If you have the Invoice Settlement feature enabled, it is best practice to set the `zuora-version` parameter to `211.0` or later. Otherwise, an error occurs.
//
// ## Override a Tiered Price
// There are two ways you override a tiered price:
//
// * Override a specific tier number
// For example: `tiers[{tier:1,price:8},{tier:2,price:6}]`
//
// * Override the entire tier structure
// For example:  `tiers[{tier:1,price:8,startingUnit:1,endingUnit:100,priceFormat:"FlatFee"},
// {tier:2,price:6,startingUnit:101,priceFormat:"FlatFee"}]`
//
// If you just override a specific tier, do not include the `startingUnit` field in the request.
func (s *Subscriptions) PutSubscription(ctx context.Context, request operations.PutSubscriptionRequest) (*operations.PutSubscriptionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/subscriptions/{subscription-key}", request.PathParams)

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

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSubscriptionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.PutSubscriptionResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PUTSubscriptionResponseType = out
		}
	}

	return res, nil
}

// PutSuspendSubscription - Suspend a subscription
// This REST API reference describes how to suspend an active subscription.
//
// **Note**: If you have the Invoice Settlement feature enabled, it is best practice to set the `zuora-version` parameter to `211.0` or later. Otherwise, an error occurs.
func (s *Subscriptions) PutSuspendSubscription(ctx context.Context, request operations.PutSuspendSubscriptionRequest) (*operations.PutSuspendSubscriptionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/subscriptions/{subscription-key}/suspend", request.PathParams)

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

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSuspendSubscriptionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.PutSubscriptionSuspendResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PUTSubscriptionSuspendResponseType = out
		}
	}

	return res, nil
}

// PutUpdateSubscriptionCustomFieldsOfASpecifiedVersion - Update subscription custom fields of a subscription version
// Updates the custom fields of a specified subscription version.
func (s *Subscriptions) PutUpdateSubscriptionCustomFieldsOfASpecifiedVersion(ctx context.Context, request operations.PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionRequest) (*operations.PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/subscriptions/{subscriptionNumber}/versions/{version}/customFields", request.PathParams)

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

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.CommonResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommonResponseType = out
		}
	}

	return res, nil
}
