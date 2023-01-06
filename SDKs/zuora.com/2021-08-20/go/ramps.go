package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type Ramps struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewRamps(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Ramps {
	return &Ramps{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetRampByRampNumber - Retrieve a ramp
// **Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
//
// Retrieves the latest definition of a specified ramp.
func (s *Ramps) GetRampByRampNumber(ctx context.Context, request operations.GetRampByRampNumberRequest) (*operations.GetRampByRampNumberResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/ramps/{rampNumber}", request.PathParams)

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

	res := &operations.GetRampByRampNumberResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GetRampByRampNumberResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETRampByRampNumberResponseType = out
		}
	}

	return res, nil
}

// GetRampMetricsByOrderNumber - List ramp metrics by order number
// **Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
//
// Retrieves key ramp metrics about a specified order, including the following metrics:
//
// * TCB, TCV in the Ramp level
// * TCB, TCV in the Interval level
// * TCB, TCV, Quantity, and MRR in Interval Metrics
// * Delta TCB, Delta TCV, Delta Quantity, and Delta MRR in Interval Delta Metrics
//
// See [Key metrics for Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/F_Key_metrics_for_Ramps) for more information.
func (s *Ramps) GetRampMetricsByOrderNumber(ctx context.Context, request operations.GetRampMetricsByOrderNumberRequest) (*operations.GetRampMetricsByOrderNumberResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/orders/{orderNumber}/ramp-metrics", request.PathParams)

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

	res := &operations.GetRampMetricsByOrderNumberResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GetRampMetricsByOrderNumberResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETRampMetricsByOrderNumberResponseType = out
		}
	}

	return res, nil
}

// GetRampMetricsByRampNumber - List all ramp metrics of a ramp
// **Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
//
// Retrieves key metrics about a specified ramp, including the following metrics:
//
// * TCB, TCV in the Ramp level
// * TCB, TCV in the Interval level
// * TCB, TCV, Quantity, and MRR in Interval Metrics
// * Delta TCB, Delta TCV, Delta Quantity, and Delta MRR in Interval Delta Metrics
//
// See [Key metrics for Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/F_Key_metrics_for_Ramps) for more information.
func (s *Ramps) GetRampMetricsByRampNumber(ctx context.Context, request operations.GetRampMetricsByRampNumberRequest) (*operations.GetRampMetricsByRampNumberResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/ramps/{rampNumber}/ramp-metrics", request.PathParams)

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

	res := &operations.GetRampMetricsByRampNumberResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GetRampMetricsByRampNumberResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETRampMetricsByRampNumberResponseType = out
		}
	}

	return res, nil
}

// GetRampMetricsBySubscriptionKey - List ramp metrics by subscription key
// **Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
//
// Retrieves key ramp metrics about a specified subscription, including the following metrics:
//
// * TCB, TCV in the Ramp level
// * TCB, TCV in the Interval level
// * TCB, TCV, Quantity, and MRR in Interval Metrics
// * Delta TCB, Delta TCV, Delta Quantity, and Delta MRR in Interval Delta Metrics
//
// See [Key metrics for Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/F_Key_metrics_for_Ramps) for more information.
func (s *Ramps) GetRampMetricsBySubscriptionKey(ctx context.Context, request operations.GetRampMetricsBySubscriptionKeyRequest) (*operations.GetRampMetricsBySubscriptionKeyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/subscriptions/{subscriptionKey}/ramp-metrics", request.PathParams)

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

	res := &operations.GetRampMetricsBySubscriptionKeyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GetRampMetricsBySubscriptionKeyResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETRampMetricsBySubscriptionKeyResponseType = out
		}
	}

	return res, nil
}

// GetRampsBySubscriptionKey - Retrieve a ramp by subscription key
// **Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
//
//	Retrieves the definition of the ramp associated with a specified subscription.
func (s *Ramps) GetRampsBySubscriptionKey(ctx context.Context, request operations.GetRampsBySubscriptionKeyRequest) (*operations.GetRampsBySubscriptionKeyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/subscriptions/{subscriptionKey}/ramps", request.PathParams)

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

	res := &operations.GetRampsBySubscriptionKeyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GetRampsBySubscriptionKeyResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETRampsBySubscriptionKeyResponseType = out
		}
	}

	return res, nil
}
