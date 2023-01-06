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

type PaymentMethods struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewPaymentMethods(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *PaymentMethods {
	return &PaymentMethods{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeletePaymentMethods - Delete a payment method
// Deletes a credit card payment method.
//
// If the specified payment method is the account's default payment
// method, the request will fail.  In that case, you must first designate a
// different payment method for that customer to be the default.
//
// For a use case of this operation, see [Configure Payment Methods](https://www.zuora.com/developer/api-guides/#Configure-payment-methods).
func (s *PaymentMethods) DeletePaymentMethods(ctx context.Context, request operations.DeletePaymentMethodsRequest) (*operations.DeletePaymentMethodsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/payment-methods/{payment-method-id}", request.PathParams)

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

	res := &operations.DeletePaymentMethodsResponse{
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

// GetPaymentMethod - Retrieve a payment method
// This operation allows you to get the detailed information about a payment method.
func (s *PaymentMethods) GetPaymentMethod(ctx context.Context, request operations.GetPaymentMethodRequest) (*operations.GetPaymentMethodResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/payment-methods/{payment-method-id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
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

	res := &operations.GetPaymentMethodResponse{
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

			res.GETPaymentMethodResponse = out
		}
	}

	return res, nil
}

// GetPaymentMethodsCreditCard - List all credit card payment methods of an account
// This REST API reference describes how to retrieve all credit card
// information for the specified customer account.
//
// ## Notes
// The response includes details of credit or debit cards for the specified customer account. Card numbers are masked, e.g., "************1234". Cards are returned in reverse chronological order of last update.
//
// Though you can also send requests for bank transfer, ACH, or other supported payment methods, the response will not include effective details of these payment methods.
func (s *PaymentMethods) GetPaymentMethodsCreditCard(ctx context.Context, request operations.GetPaymentMethodsCreditCardRequest) (*operations.GetPaymentMethodsCreditCardResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/payment-methods/credit-cards/accounts/{account-key}", request.PathParams)

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

	res := &operations.GetPaymentMethodsCreditCardResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GetPaymentMethodsType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETPaymentMethodsType = out
		}
	}

	return res, nil
}

// GetStoredCredentialProfiles - List stored credential profiles of a payment method
// Retrieves the stored credential profiles within a payment method.
//
// **Note:** This feature is in the **Early Adopters** phase. We are actively soliciting feedback from a small set of early adopters before releasing as generally available.
func (s *PaymentMethods) GetStoredCredentialProfiles(ctx context.Context, request operations.GetStoredCredentialProfilesRequest) (*operations.GetStoredCredentialProfilesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/payment-methods/{payment-method-id}/profiles", request.PathParams)

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

	res := &operations.GetStoredCredentialProfilesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GetStoredCredentialProfilesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetStoredCredentialProfilesResponse = out
		}
	}

	return res, nil
}

// ObjectDeletePaymentMethod - CRUD: Delete a payment method
func (s *PaymentMethods) ObjectDeletePaymentMethod(ctx context.Context, request operations.ObjectDeletePaymentMethodRequest) (*operations.ObjectDeletePaymentMethodResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/object/payment-method/{id}", request.PathParams)

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

	res := &operations.ObjectDeletePaymentMethodResponse{
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

// ObjectGetPaymentMethod - CRUD: Retrieve a payment method
func (s *PaymentMethods) ObjectGetPaymentMethod(ctx context.Context, request operations.ObjectGetPaymentMethodRequest) (*operations.ObjectGetPaymentMethodResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/object/payment-method/{id}", request.PathParams)

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

	res := &operations.ObjectGetPaymentMethodResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ProxyGetPaymentMethod
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProxyGetPaymentMethod = out
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

// ObjectPostPaymentMethod - CRUD: Create a payment method
func (s *PaymentMethods) ObjectPostPaymentMethod(ctx context.Context, request operations.ObjectPostPaymentMethodRequest) (*operations.ObjectPostPaymentMethodResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/object/payment-method"

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

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ObjectPostPaymentMethodResponse{
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
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ProxyBadRequestResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProxyBadRequestResponse = out
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

// ObjectPutPaymentMethod - CRUD: Update a payment method
// For a use case of this operation, see [Configure Payment Methods](https://www.zuora.com/developer/api-guides/#Configure-payment-methods).
func (s *PaymentMethods) ObjectPutPaymentMethod(ctx context.Context, request operations.ObjectPutPaymentMethodRequest) (*operations.ObjectPutPaymentMethodResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/object/payment-method/{id}", request.PathParams)

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

	res := &operations.ObjectPutPaymentMethodResponse{
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

// PostCancelAuthorization - Cancel authorization
// **Note:** If you wish to enable this feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
//
// Allows you to cancel an authorization. The payment gateways that support this operation include Verifi, CyberSource 1.28, CyberSource 1.97, Chase Paymentech Orbital, and Ingenico ePayments.
func (s *PaymentMethods) PostCancelAuthorization(ctx context.Context, request operations.PostCancelAuthorizationRequest) (*operations.PostCancelAuthorizationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/payment-methods/{payment-method-id}/voidAuthorize", request.PathParams)

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

	res := &operations.PostCancelAuthorizationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.PostVoidAuthorizeResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.POSTVoidAuthorizeResponse = out
		}
	}

	return res, nil
}

// PostCancelStoredCredentialProfile - Cancel a stored credential profile
// Cancels a stored credential profile within a payment method.
//
// Cancelling the stored credential profile indicates that the stored credentials are no longer valid, per a customer request. You cannot reactivate the stored credential profile after you have cancelled it.
//
// **Note:** This feature is in the **Early Adopters** phase. We are actively soliciting feedback from a small set of early adopters before releasing as generally available.
func (s *PaymentMethods) PostCancelStoredCredentialProfile(ctx context.Context, request operations.PostCancelStoredCredentialProfileRequest) (*operations.PostCancelStoredCredentialProfileResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/payment-methods/{payment-method-id}/profiles/{profile-number}/cancel", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostCancelStoredCredentialProfileResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ModifiedStoredCredentialProfileResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ModifiedStoredCredentialProfileResponse = out
		}
	}

	return res, nil
}

// PostCreateAuthorization - Create authorization
// **Note:** If you want to enable this feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
//
// Enables you to authorize the availability of funds for a transaction but delay the capture of funds until a later time. Subsequently, use [CRUD: Create a payment](https://www.zuora.com/developer/api-reference/#operation/Object_POSTPayment) or [Create a payment](https://www.zuora.com/developer/api-reference/#operation/POST_CreatePayment) to capture the authorized funds, or use [Cancel authorization](https://www.zuora.com/developer/api-reference/#operation/POST_CancelAuthorization) to cancel the authorization.
//
// The payment gateways that support this operation include:
//
// * Adyen integration v2.0 - This gateway does not support [Cancel authorization](https://www.zuora.com/developer/api-reference/#operation/POST_CancelAuthorization).
// * CyberSource 1.28
// * CyberSource 1.97
// * CyberSource 2.0 - This gateway does not support [Cancel authorization](https://www.zuora.com/developer/api-reference/#operation/POST_CancelAuthorization).
// * Chase Paymentech Orbital
// * Ingenico ePayments
// * Verifi - This gateway does not support [Cancel authorization](https://www.zuora.com/developer/api-reference/#operation/POST_CancelAuthorization).
//
// Note that CyberSource 2.0 supports the Delayed Capture feature for both Credit Cards and Credit Card Reference payment methods.
//
// If you have the Invoice Settlement feature enabled, use the [Create payment](https://www.zuora.com/developer/api-reference/#operation/POST_CreatePayment) operation to capture the funds instead of the [CRUD: Create payment](https://www.zuora.com/developer/api-reference/#operation/Object_POSTPayment) operation.
func (s *PaymentMethods) PostCreateAuthorization(ctx context.Context, request operations.PostCreateAuthorizationRequest) (*operations.PostCreateAuthorizationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/payment-methods/{payment-method-id}/authorize", request.PathParams)

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

	res := &operations.PostCreateAuthorizationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.PostAuthorizeResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.POSTAuthorizeResponse = out
		}
	}

	return res, nil
}

// PostCreateStoredCredentialProfile - Create a stored credential profile
// Creates a stored credential profile within a payment method.
//
// The stored credential profile represents a consent agreement that you have established with a customer. When you use the payment method in a transaction, Zuora may include information from the stored credential profile to inform the payment processor that the transaction is related to your pre-existing consent agreement with the customer.
//
// **Note:** This feature is in the **Early Adopters** phase. We are actively soliciting feedback from a small set of early adopters before releasing as generally available.
func (s *PaymentMethods) PostCreateStoredCredentialProfile(ctx context.Context, request operations.PostCreateStoredCredentialProfileRequest) (*operations.PostCreateStoredCredentialProfileResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/payment-methods/{payment-method-id}/profiles", request.PathParams)

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

	res := &operations.PostCreateStoredCredentialProfileResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ModifiedStoredCredentialProfileResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ModifiedStoredCredentialProfileResponse = out
		}
	}

	return res, nil
}

// PostExpireStoredCredentialProfile - Expire a stored credential profile
// Expires a stored credential profile within a payment method.
//
// Expiring the stored credential profile indicates that the stored credentials are no longer valid, per an expiration policy in the stored credential transaction framework. You cannot reactivate the stored credential profile after you have expired it.
//
// **Note:** This feature is in the **Early Adopters** phase. We are actively soliciting feedback from a small set of early adopters before releasing as generally available.
func (s *PaymentMethods) PostExpireStoredCredentialProfile(ctx context.Context, request operations.PostExpireStoredCredentialProfileRequest) (*operations.PostExpireStoredCredentialProfileResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/payment-methods/{payment-method-id}/profiles/{profile-number}/expire", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostExpireStoredCredentialProfileResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ModifiedStoredCredentialProfileResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ModifiedStoredCredentialProfileResponse = out
		}
	}

	return res, nil
}

// PostPaymentMethods - Create a payment method
// You can use this operation to create either a payment method associated with a specific customer account, or an orphan payment method that is not associated with any customer account. The orphan payment method must be associated with a customer account within 10 days. Otherwise, it will be deleted.
//
// This operation supports the payment methods listed below.
//
// ### PayPal Express Checkout
// The following request body fields are specific to this payment method:
// * `BAID` (required)
// * `email` (required)
//
// ### PayPal Native Express Checkout
// The following request body fields are specific to this payment method:
// * `BAID` (required)
// * `email` (optional)
//
// ### PayPal Adaptive
// The following request body fields are specific to this payment method:
// * `preapprovalKey` (required)
// * `email` (required)
//
// ### Credit Card
// The following request body fields are specific to this payment method:
// * `cardHolderInfo` (`cardHolderName` required)
// * `cardNumber` (required)
// * `cardType` (required)
// * `expirationMonth` (required)
// * `expirationYear` (required)
// * `mitConsentAgreementRef`
// * `mitConsentAgreementSrc`
// * `mitNetworkTransactionId`
// * `mitProfileAction`
// * `mitProfileType`
// * `mitProfileAgreedOn`
// * `securityCode`
// * `checkDuplicated`
//
// ### ACH
// The following request body fields are applicable to this payment method:
// * `bankABACode` (required)
// * `bankAccountName` (required)
// * `bankAccountNumber` (required)
// * `bankAccountType` (required)
// * `bankName` (required)
// * `addressLine1`
// * `addressLine2`
// * `phone`
// * `email`
// * `city`
// * `country`
// * `state`
// * `zipCode`
//
// ### SEPA
// The following request body fields are applicable to this payment method:
// * `IBAN` (required)
// * `accountHolderInfo` (required)
// * `businessIdentificationCode`
//
// ### Betalingsservice (Direct Debit DK)
// The following request body fields are applicable to this payment method:
// * `accountNumber` (required)
// * `identityNumber` (required)
// * `bankCode` (required)
// * `accountHolderInfo` (required)
//
// ### Autogiro (Direct Debit SE)
// The following request body fields are applicable to this payment method:
// * `accountNumber` (required)
// * `identityNumber` (required)
// * `branchCode` (required)
// * `accountHolderInfo` (required)
//
// ### Bacs (Direct Debit UK)
// The following request body fields are applicable to this payment method:
// * `accountNumber` (required)
// * `bankCode` (required)
// * `accountHolderInfo` (required)
//
// ### Becs (Direct Entry AU)
// The following request body fields are applicable to this payment method:
// * `accountNumber` (required)
// * `branchCode` (required)
// * `accountHolderInfo` (required)
//
// ### Becsnz (Direct Debit NZ)
// The following request body fields are applicable to this payment method:
// * `accountNumber` (required)
// * `bankCode` (required)
// * `branchCode` (required)
// * `accountHolderInfo` (required)
//
// ### PAD (Pre-Authorized Debit)
// The following request body fields are applicable to this payment method:
// * `accountNumber` (required)
// * `bankCode` (required)
// * `branchCode` (required)
// * `accountHolderInfo` (required)
//
// ### Custom payment methods
// Note: This feature is in the Early Adopter phase. If you want to use this feature, submit a request at [Zuora Global Support](http://support.zuora.com/) to enable the Universal Payment Connector and Open Payment Method services that support this feature.
//
// With the support of Universal Payment Connector (UPC) and Open Payment Method (OPM) services, you can create custom payment methods by using the fields defined in a definition file for this type of custom payment method. See [Set up custom payment gateways and payment methods](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/MB_Set_up_custom_payment_gateways_and_payment_methods) for details.
func (s *PaymentMethods) PostPaymentMethods(ctx context.Context, request operations.PostPaymentMethodsRequest) (*operations.PostPaymentMethodsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/payment-methods"

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

	res := &operations.PostPaymentMethodsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.PostPaymentMethodResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.POSTPaymentMethodResponse = out
		}
	}

	return res, nil
}

// PostPaymentMethodsCreditCard - Create a credit card payment method
// You can create a credit card payment method for a customer account or an orphan credit card payment method that is not associated with any customer account. The orphan payment method must be associated with a customer account within 10 days. Otherwise, it will be deleted.
//
// This API call is CORS Enabled. Use client-side JavaScript to invoke the call.
//
// **Note**: If you use this operation to create credit card payment methods instead of using the [iFrame of Hosted Payment Pages](https://knowledgecenter.zuora.com/CB_Billing/LA_Hosted_Payment_Pages/C_Hosted_Payment_Pages/B_Implementing_Hosted_Payment_Pages_on_Your_Website/C_Embed_and_Submit_the_iFrame), you are subject to PCI-compliance audit requirements.
func (s *PaymentMethods) PostPaymentMethodsCreditCard(ctx context.Context, request operations.PostPaymentMethodsCreditCardRequest) (*operations.PostPaymentMethodsCreditCardResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/payment-methods/credit-cards"

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

	res := &operations.PostPaymentMethodsCreditCardResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.PostPaymentMethodResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.POSTPaymentMethodResponseType = out
		}
	}

	return res, nil
}

// PostPaymentMethodsDecryption - Create an Apple Pay payment method
// The decryption API endpoint can conditionally perform 3 tasks in one atomic call:
//   - Decrypt Apple Pay Payment token
//   - Create Credit Card Payment Method in Zuora with decrypted Apple Pay information
//   - Process Payment on a specified Invoice (optional)
func (s *PaymentMethods) PostPaymentMethodsDecryption(ctx context.Context, request operations.PostPaymentMethodsDecryptionRequest) (*operations.PostPaymentMethodsDecryptionResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/payment-methods/decryption"

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

	res := &operations.PostPaymentMethodsDecryptionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.PostPaymentMethodResponseDecryption
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.POSTPaymentMethodResponseDecryption = out
		}
	}

	return res, nil
}

// PutPaymentMethod - Update a payment method
// This operation allows you to update an existing payment method.
//
// The following request body fields can be updated regardless of payment method types:
// * `authGateway`
// * `gatewayOptions`
// * `accountHolderInfo`
// * Custom fields
//
// The following request body fields can be updated only for the Credit Card payment method:
// * `expirationMonth`
// * `expirationYear`
// * `securityCode`
func (s *PaymentMethods) PutPaymentMethod(ctx context.Context, request operations.PutPaymentMethodRequest) (*operations.PutPaymentMethodResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/payment-methods/{payment-method-id}", request.PathParams)

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

	res := &operations.PutPaymentMethodResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.PutPaymentMethodResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PUTPaymentMethodResponse = out
		}
	}

	return res, nil
}

// PutPaymentMethodsCreditCard - Update a credit card payment method
// Updates an existing credit card payment method.
func (s *PaymentMethods) PutPaymentMethodsCreditCard(ctx context.Context, request operations.PutPaymentMethodsCreditCardRequest) (*operations.PutPaymentMethodsCreditCardResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/payment-methods/credit-cards/{payment-method-id}", request.PathParams)

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

	res := &operations.PutPaymentMethodsCreditCardResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.PutPaymentMethodResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PUTPaymentMethodResponseType = out
		}
	}

	return res, nil
}

// PutScrubPaymentMethods - Scrub a payment method
//
// This operation enables you to replace all sensitive data in a payment method, related payment method snapshot table, and four related log tables with dummy values that will be stored in Zuora databases.
//
// This operation will scrub the sensitive data and soft-delete the specified payment method at the same time.
//
// If you want to delete or anonymize personal data in Zuora, you must scrub the payment method before anonymizing the associated account and contact. See [Delete or anonymize personal data](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Responding_to_individual_requests_for_access%2C_correction%2C_and_deletion_of_data_under_applicable_privacy_laws#Edit_and_correct_personal_data) for more information.
//
// **Note:** In order to use this operation, you must ensure that the **Scrub Sensitive Data of Specific Payment Method payments** permission is enabled in your user role. Contact your tenant administrator if you want to enable this permission. See [Scrub Payment Methods](https://knowledgecenter.zuora.com/CB_Billing/L_Payment_Methods/Scrub_Payment_Methods) for more information.
func (s *PaymentMethods) PutScrubPaymentMethods(ctx context.Context, request operations.PutScrubPaymentMethodsRequest) (*operations.PutScrubPaymentMethodsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/payment-methods/{payment-method-id}/scrub", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
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

	res := &operations.PutScrubPaymentMethodsResponse{
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

// PutVerifyPaymentMethods - Verify a payment method
// Sends an authorization request to the corresponding payment gateway to verify the payment method, even though no changes are made for the payment method. Supported payment methods are Credit Cards and Paypal.
//
// Zuora now supports performing a standalone zero dollar verification or one dollar authorization for credit cards. It also supports a billing agreement status check on PayPal payment methods.
//
// If a payment method is created by Hosted Payment Pages and is not assigned to any billing account, the payment method cannot be verified through this operation.
func (s *PaymentMethods) PutVerifyPaymentMethods(ctx context.Context, request operations.PutVerifyPaymentMethodsRequest) (*operations.PutVerifyPaymentMethodsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/payment-methods/{payment-method-id}/verify", request.PathParams)

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

	res := &operations.PutVerifyPaymentMethodsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.PutVerifyPaymentMethodResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PUTVerifyPaymentMethodResponseType = out
		}
	}

	return res, nil
}
