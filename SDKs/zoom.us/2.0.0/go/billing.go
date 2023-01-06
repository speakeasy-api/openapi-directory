package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type Billing struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewBilling(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Billing {
	return &Billing{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// AccountBilling - Get billing information
// Get [billing information](https://support.zoom.us/hc/en-us/articles/201363263-About-Billing) of a sub account.<br><br>Only master accounts can use this API. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' billing information. Email the partner programs team at **partner-success@zoom.us** for more details.<br>
//
// **Prerequisites:**
// * Pro or a higher paid account with master account option enabled. <br>
//
// **Scope**:`billing:master`<br>
// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
func (s *Billing) AccountBilling(ctx context.Context, request operations.AccountBillingRequest) (*operations.AccountBillingResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{accountId}/billing", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccountBillingResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.AccountBilling200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AccountBilling200ApplicationJSONObject = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// AccountBillingInvoices - List billing invoices
// List [invoices](https://support.zoom.us/hc/en-us/articles/207276556-Viewing-your-invoice-history#h_6710542f-23cc-4059-9cc7-ff02bec7314e) of a Zoom account.
//
// To list a regular Zoom account's invoices or a master account's invoices, provide `me` as the value of the `accountId` path parameter. To list a sub account's invoices, provide the account ID of the sub account in the `accountId` path parameter.
//
// **Prerequisites:**
// * Account must be enrolled in Pro or a higher plan.<br>
//
// **Scope**:`billing:master`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
// **Additional Rate Limit:** You can make **one** API request per account(`accountId`) every **five** minutes until the daily limit is reached. This API has a daily limit of **6** requests per account(`accountId`).
func (s *Billing) AccountBillingInvoices(ctx context.Context, request operations.AccountBillingInvoicesRequest) (*operations.AccountBillingInvoicesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{accountId}/billing/invoices", request.PathParams)

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

	res := &operations.AccountBillingInvoicesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.AccountBillingInvoices200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AccountBillingInvoices200ApplicationJSONObject = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// AccountBillingUpdate - Update billing information
// Update [billing information](https://support.zoom.us/hc/en-us/articles/201363263-About-Billing) of a sub account.<br><br>
// This API can only be used by master accounts that pay all billiing charges of their associated sub accounts. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' billing information. Email the partner programs team at **partner-success@zoom.us** for more details.<br><br>
//
// **Prerequisites:**
// * Pro or a higher paid account with master account option enabled. <br>
//
// **Scope**:`billing:master`<br>
// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
func (s *Billing) AccountBillingUpdate(ctx context.Context, request operations.AccountBillingUpdateRequest) (*operations.AccountBillingUpdateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{accountId}/billing", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccountBillingUpdateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// AccountPlanAddonCancel - Cancel additional plans
// [Cancel additional plan](https://support.zoom.us/hc/en-us/articles/203634215-How-Do-I-Cancel-My-Subscription-) of a sub account. The cancellation does not provide refund for the current subscription. The service remains active for the current session.
//
// This API can only be used by master accounts that pay all billiing charges of their associated Pro or higher sub accounts. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' subscriptions. Email the partner programs team at **partner-success@zoom.us** for more details.<br><br>
//
// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
//
// **Prerequisites:**<br>
// * Pro or a higher plan with master account option enabled.
// * The sub account must be a paid account.<br>
// **Scope:** `billing:master`<br>
func (s *Billing) AccountPlanAddonCancel(ctx context.Context, request operations.AccountPlanAddonCancelRequest) (*operations.AccountPlanAddonCancelResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{accountId}/plans/addons/status", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccountPlanAddonCancelResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 204:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AccountPlanAddonCancel204ApplicationJSONAny = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 300:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// AccountPlanAddonCreate - Subscribe additional plan
// Subscribe a sub account to a Zoom addon plan. This API can only be used by master accounts that pay all billiing charges of their associated Pro or higher sub accounts. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' subscriptions. Email the partner programs team at **partner-success@zoom.us** for more details.<br><br>
// <br>**Prerequisites:**<br>
// * Pro or a higher plan with master account option enabled.
// * The sub account must be a paid account. The billing charges for the sub account must be paid by its master account.<br><br>
//
// **Scopes**: `billing:master`<br>
// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
func (s *Billing) AccountPlanAddonCreate(ctx context.Context, request operations.AccountPlanAddonCreateRequest) (*operations.AccountPlanAddonCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{accountId}/plans/addons", request.PathParams)

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

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccountPlanAddonCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// AccountPlanAddonUpdate - Update an additional plan
// Update an additional plan for a sub account.
//
// This API can only be used by master accounts that pay all billiing charges of their associated Pro or higher sub accounts. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' subscriptions. Email the partner programs team at **partner-success@zoom.us** for more details.<br><br>
// <br>**Prerequisites:**<br>
// * Pro or a higher plan with master account enabled.
// * The sub account must be a paid account. The billing charges for the sub account must be paid by the master account.<br><br>
//
// **Scopes**: `billing:master`<br>
// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
func (s *Billing) AccountPlanAddonUpdate(ctx context.Context, request operations.AccountPlanAddonUpdateRequest) (*operations.AccountPlanAddonUpdateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{accountId}/plans/addons", request.PathParams)

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

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccountPlanAddonUpdateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 300:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// AccountPlanBaseDelete - Cancel a base plan
// [Cancel a base plan](https://support.zoom.us/hc/en-us/articles/203634215-How-Do-I-Cancel-My-Subscription-) for a sub account.
//
// This API can only be used by master accounts that pay all billiing charges of their associated Pro or higher sub accounts. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' subscriptions. Email the partner programs team at **partner-success@zoom.us** for more details.<br><br>
//
// **Scopes**: `billing:master`<br>
// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
// **Prerequisites:**<br>
// * The sub account must have a Pro or a higher plan.
func (s *Billing) AccountPlanBaseDelete(ctx context.Context, request operations.AccountPlanBaseDeleteRequest) (*operations.AccountPlanBaseDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{accountId}/plans/base/status", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccountPlanBaseDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 204:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AccountPlanBaseDelete204ApplicationJSONObject = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// AccountPlanBaseUpdate - Update a base plan
// Update a base plan of a sub account.
//
// This API can only be used by master accounts that pay all billiing charges of their associated Pro or higher sub accounts. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' subscriptions. Email the partner programs team at **partner-success@zoom.us** for more details.<br><br>
// **Scopes:** `billing:master`<br><br>
// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
// **Prerequisites:**<br>
// * The sub account must have a Pro or a higher plan.
func (s *Billing) AccountPlanBaseUpdate(ctx context.Context, request operations.AccountPlanBaseUpdateRequest) (*operations.AccountPlanBaseUpdateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{accountId}/plans/base", request.PathParams)

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

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccountPlanBaseUpdateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 300:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// AccountPlanCreate - Subscribe plans
// Subscribe a sub account to a Zoom plan using your master account. This API can only be used by master accounts that pay all billiing charges of their associated Pro or higher sub accounts. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' subscriptions. Email the partner programs team at **partner-success@zoom.us** for more details.<br><br>
// **Scopes**: `billing:master`<br>
func (s *Billing) AccountPlanCreate(ctx context.Context, request operations.AccountPlanCreateRequest) (*operations.AccountPlanCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{accountId}/plans", request.PathParams)

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

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccountPlanCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AccountPlanCreate200ApplicationJSONAny = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.AccountPlanCreate201ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AccountPlanCreate201ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 300:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// AccountPlans - Get plan Information
// Get plan information of a sub account that is managed by a master account. <br><br>This API can only be used by master accounts that pay all billiing charges of their associated Pro or higher sub accounts. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' billing information. Email the partner programs team at **partner-success@zoom.us** for more details.<br><br>
// **Scopes:** `billing:master`<br>
// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
func (s *Billing) AccountPlans(ctx context.Context, request operations.AccountPlansRequest) (*operations.AccountPlansResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{accountId}/plans", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccountPlansResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.AccountPlans200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AccountPlans200ApplicationJSONObject = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// DownloadInvoicePdf - Download an invoice file
// Download a [billed](https://support.zoom.us/hc/en-us/articles/201363263-About-Billing) invoice file of a Zoom account in PDF format. To download a regular account's invoice or a  master account's invoice, provide `me` as the value of `accountId` path parameter. To download a sub account's invoice, provide the account ID of the sub account in the `accountId` path parameter.
//
// **Prerequisites:**
// * Account must be enrolled in Pro or a higher plan.<br>
//
// **Scope**:`billing:master`<br>
// **Rate Limit:** You can make **one** request to this API every **thirty** minutes until the daily limit is reached. This API has a daily limit of **100** requests per **account**.
func (s *Billing) DownloadInvoicePdf(ctx context.Context, request operations.DownloadInvoicePdfRequest) (*operations.DownloadInvoicePdfResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/download/billing/invoices/{invoiceId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DownloadInvoicePdfResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DownloadInvoicePDF200ApplicationJSONAny = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetAccountBillingInvoice - Get invoice details
// Get detailed information about a specific [invoice](https://support.zoom.us/hc/en-us/articles/207276556-Viewing-your-invoice-history#h_6710542f-23cc-4059-9cc7-ff02bec7314e). <br>To retrieve a regular Zoom account's invoice details or a master account's invoice details, provide `me` as the value of `accountId` path parameter. To list a sub account's invoice details, provide the account ID of the sub account in the `accountId` path parameter.
//
// **Prerequisites:**
// * Account must be enrolled in Pro or a higher plan. <br>
//
// **Scope**:`billing:master`<br>
// <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
// **Additional Rate Limit:** You can make **one** API request every **thirty** minutes until the daily limit is reached. This API has a daily limit of **100** requests per **account**.
func (s *Billing) GetAccountBillingInvoice(ctx context.Context, request operations.GetAccountBillingInvoiceRequest) (*operations.GetAccountBillingInvoiceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{accountId}/billing/invoices/{invoiceId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAccountBillingInvoiceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetAccountBillingInvoice200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetAccountBillingInvoice200ApplicationJSONObject = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetPlanUsage - Get plan usage
// Get information on usage of [plans](https://marketplace.zoom.us/docs/api-reference/other-references/plans) of an account. This API supports regular accounts as well as master and sub accounts. To get plan usage of a regular account, use the `account:read:admin` scope and provide “me” as the value of the  `accountId` path parameter.To get plan usage of a master account, provide the keyword "me" as the value of the `accountId` path parameter and use the `billing:master` scope. To get plan usage of a sub account, provide the actual account Id of the sub account as the value of the `accountId` path parameter and use the `billing:master` scope.
//
// **Prerequisite**:<br>
// Account type: master account on a paid Pro, Business or Enterprise plan.<br>
// **Scope:** `billing:master` for master and sub accounts. `account:read:admin` for regular Zoom accounts.<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
func (s *Billing) GetPlanUsage(ctx context.Context, request operations.GetPlanUsageRequest) (*operations.GetPlanUsageResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{accountId}/plans/usage", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPlanUsageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetPlanUsage200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetPlanUsage200ApplicationJSONObject = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}
