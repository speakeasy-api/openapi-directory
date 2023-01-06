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

type AccountingPeriods struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAccountingPeriods(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *AccountingPeriods {
	return &AccountingPeriods{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteAccountingPeriod - Delete an accounting period
// Deletes an accounting period.
//
// Prerequisites
// -------------
//
//   - You must have Zuora Finance enabled on your tenant.
//
//   - You must have the Delete Accounting Period user permission. See [Finance Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/f_Finance_Roles).
//
// Limitations
// -----------
//
// The accounting period to be deleted:
//
// * Must be the most recent accounting period
//
// * Must be an open accounting period
//
// * Must have no revenue distributed into it
//
// * Must not have any active journal entries
//
// * Must not be the open-ended accounting period
//
// * Must not be in the process of running a trial balance
func (s *AccountingPeriods) DeleteAccountingPeriod(ctx context.Context, request operations.DeleteAccountingPeriodRequest) (*operations.DeleteAccountingPeriodResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/accounting-periods/{ap-id}", request.PathParams)

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

	res := &operations.DeleteAccountingPeriodResponse{
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

// GetAccountingPeriod - Retrieve an accounting period
// Retrieves an accounting period.
// Prerequisites
// -------------
//
// You must have Zuora Finance enabled on your tenant.
func (s *AccountingPeriods) GetAccountingPeriod(ctx context.Context, request operations.GetAccountingPeriodRequest) (*operations.GetAccountingPeriodResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/accounting-periods/{ap-id}", request.PathParams)

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

	res := &operations.GetAccountingPeriodResponse{
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

			res.GETAccountingPeriodType = out
		}
	}

	return res, nil
}

// GetAllAccountingPeriods - List all accounting periods
// Retrieves all accounting periods on your tenant.
func (s *AccountingPeriods) GetAllAccountingPeriods(ctx context.Context, request operations.GetAllAccountingPeriodsRequest) (*operations.GetAllAccountingPeriodsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/accounting-periods"

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

	res := &operations.GetAllAccountingPeriodsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.GetAccountingPeriodsType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETAccountingPeriodsType = out
		}
	}

	return res, nil
}

// PostAccountingPeriod - Create an accounting period
// Creates an accounting period.
// Prerequisites
// -------------
// * You must have Zuora Finance enabled on your tenant.
// * You must have the Create Accounting Period user permission.
//
// Limitations
// -----------
// * When creating the first accounting period on your tenant, the start date must be equal to or earlier than the date of the earliest transaction on the tenant.
// * Start and end dates of accounting periods must be contiguous. For example, if one accounting period ends on January 31, the next period must start on February 1.
// * If you have the Revenue Recognition Package and have enabled the "Monthly recognition over time" revenue recognition model, the accounting period start date and end date must be on the first day and last day of the month, respectively. Note that the start and end dates do not necessarily have to be in the same month.
func (s *AccountingPeriods) PostAccountingPeriod(ctx context.Context, request operations.PostAccountingPeriodRequest) (*operations.PostAccountingPeriodResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/accounting-periods"

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

	res := &operations.PostAccountingPeriodResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.PostAccountingPeriodResponseType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.POSTAccountingPeriodResponseType = out
		}
	}

	return res, nil
}

// PutCloseAccountingPeriod - Close an accounting period
// Close an accounting period by accounting period ID.
//
// Prerequisites
// -------------
// You must have Zuora Finance enabled on your tenant. You must have the Manage Close Process and Run Trial Balance user permissions.
//
// Limitations
// -----------
// * The accounting period cannot already be closed.
// * The accounting period cannot be in the process of running a trial balance.
// * All earlier accounting periods must be closed.
// * There must be no required action items for the accounting period. See Reconcile Transactions Before Closing an Accounting Period for more information.
//
// Notes
// -----
// When you close an accounting period in Zuora, a trial balance is automatically run for that period. A successful response means only that the accounting period is now closed, but does not mean that the trial balance has successfully completed.
func (s *AccountingPeriods) PutCloseAccountingPeriod(ctx context.Context, request operations.PutCloseAccountingPeriodRequest) (*operations.PutCloseAccountingPeriodResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/accounting-periods/{ap-id}/close", request.PathParams)

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

	res := &operations.PutCloseAccountingPeriodResponse{
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

// PutPendingCloseAccountingPeriod - Set an accounting period to pending close
// Sets an accounting period to pending close.
//
// Prerequisites
// -------------
//
// * You must have Zuora Finance enabled on your tenant.
// * You must have the Manage Close Process and Run Trial Balance user permissions.
//
// Limitations
//
//	-----------
//
//	* The accounting period cannot be closed or pending close.
//
//	* The accounting period cannot be in the process of running a trial balance.
//
//	* All earlier accounting periods must be closed.
//
// Notes
// -----
// When you set an accounting period to pending close in Zuora, a trial balance is automatically run for that period. A response of `{ "success": true }`  means only that the accounting period status is now pending close, but does not mean that the trial balance has successfully completed. You can use the Get Accounting Period REST API call to view details about the outcome of the trial balance.
func (s *AccountingPeriods) PutPendingCloseAccountingPeriod(ctx context.Context, request operations.PutPendingCloseAccountingPeriodRequest) (*operations.PutPendingCloseAccountingPeriodResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/accounting-periods/{ap-id}/pending-close", request.PathParams)

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

	res := &operations.PutPendingCloseAccountingPeriodResponse{
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

// PutReopenAccountingPeriod - Reopen an accounting period
// Re-opens an accounting period.
// Prerequisites
// -------------
// * You must have Zuora Finance enabled on your tenant.
// * You must have the Manage Close Process and Run Trial Balance user permissions.
//
// Limitations
// -----------
// * The accounting period must be closed or pending close.
// * You can only re-open an accounting period that is immediately previous to an open period.
func (s *AccountingPeriods) PutReopenAccountingPeriod(ctx context.Context, request operations.PutReopenAccountingPeriodRequest) (*operations.PutReopenAccountingPeriodResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/accounting-periods/{ap-id}/reopen", request.PathParams)

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

	res := &operations.PutReopenAccountingPeriodResponse{
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

// PutRunTrialBalance - Run trial balance
// Runs the trial balance for an accounting period.
//
// Prerequisites
// -------------
//
// * You must have Zuora Finance enabled on your tenant.
//
// * You must have the Manage Close Process and Run Trial Balance user permissions. See [Finance Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/f_Finance_Roles).
//
// Limitations
// -----------
//
//   - The accounting period must be open.
//
//   - The accounting period cannot already be in the process of running a trial balance.
//
// Notes
// -----
// The trial balance is run asynchronously. A response of `{ "success": true }` means only that the trial balance has started processing, but does not mean that the trial balance has successfully completed. You can use the [Get Accounting Period](https://www.zuora.com/developer/api-reference/#operation/GET_AccountingPeriod) REST API call to view details about the outcome of the trial balance.
func (s *AccountingPeriods) PutRunTrialBalance(ctx context.Context, request operations.PutRunTrialBalanceRequest) (*operations.PutRunTrialBalanceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/accounting-periods/{ap-id}/run-trial-balance", request.PathParams)

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

	res := &operations.PutRunTrialBalanceResponse{
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

// PutUpdateAccountingPeriod - Update an accounting period
//
// Updates an accounting period.
//
// Prerequisites
// -------------
//
// * You must have Zuora Finance enabled on your tenant.
//
// * You must have the Create Accounting Period user permission. See [Finance Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/f_Finance_Roles).
//
// Limitations
// -----------
//
// * You can update the start date of only the earliest accounting period on your tenant. You cannot update the start date of later periods.
//
// * If you update the earliest accounting period, the start date must be equal to or earlier than the date of the earliest transaction on the tenant.
//
// * Start and end dates of accounting periods must be contiguous. For example, if one accounting period ends on January 31, the next period must start on February 1.
//
// * If you have the Revenue Recognition Package and have enabled the "Monthly recognition over time" revenue recognition model, the accounting period start date and end date must be on the first day and last day of the month, respectively. Note that the start and end dates do not necessarily have to be in the same month.
//
// * You cannot update the start date or end date of an accounting period if:
//   - Any revenue has been distributed into the period.
//   - The period has any active journal entries.
func (s *AccountingPeriods) PutUpdateAccountingPeriod(ctx context.Context, request operations.PutUpdateAccountingPeriodRequest) (*operations.PutUpdateAccountingPeriodResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/accounting-periods/{ap-id}", request.PathParams)

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

	res := &operations.PutUpdateAccountingPeriodResponse{
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
