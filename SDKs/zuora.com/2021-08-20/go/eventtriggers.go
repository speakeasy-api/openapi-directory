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

type EventTriggers struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewEventTriggers(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *EventTriggers {
	return &EventTriggers{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteEventTrigger - Delete an event trigger
func (s *EventTriggers) DeleteEventTrigger(ctx context.Context, request operations.DeleteEventTriggerRequest) (*operations.DeleteEventTriggerResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/events/event-triggers/{id}", request.PathParams)

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

	res := &operations.DeleteEventTriggerResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}

// GetEventTrigger - Retrieve an event trigger
func (s *EventTriggers) GetEventTrigger(ctx context.Context, request operations.GetEventTriggerRequest) (*operations.GetEventTriggerResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/events/event-triggers/{id}", request.PathParams)

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

	res := &operations.GetEventTriggerResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.EventTrigger
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EventTrigger = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}

// GetEventTriggers - List event triggers
func (s *EventTriggers) GetEventTriggers(ctx context.Context, request operations.GetEventTriggersRequest) (*operations.GetEventTriggersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/events/event-triggers"

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

	res := &operations.GetEventTriggersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *operations.GetEventTriggers200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GETEventTriggers200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}

// PostEventTrigger - Create an event trigger
// When you create an event trigger, you must specify the base object and define the trigger condition.
//
// ### Specify the base object
// Use `baseObject` field to specify which object to define a trigger on. You can define an event trigger on any of the following objects:
//
//   - Account
//   - AccountingCode
//   - AccountingPeriod
//   - Amendment
//   - BillingRun
//   - Contact
//   - CreditBalanceAdjustment
//   - CreditMemo
//   - CreditMemoApplication
//   - CreditMemoApplicationItem
//   - CreditMemoItem
//   - DebitMemo
//   - DebitMemoItem
//   - Feature
//   - Invoice
//   - InvoiceAdjustment
//   - InvoiceItem
//   - InvoiceItemAdjustment
//   - JournalEntry
//   - JournalEntryItem
//   - Order
//   - OrderAction
//   - Payment
//   - PaymentApplication
//   - PaymentMethod
//   - PaymentPart
//   - Product
//   - ProductFeature
//   - ProductRatePlan
//   - ProductRatePlanCharge
//   - RatePlan
//   - RatePlanCharge
//   - Refund
//   - RefundApplication
//   - RevenueEvent
//   - RevenueEventItem
//   - RevenueSchedule
//   - RevenueScheduleItem
//   - Subscription
//   - SubscriptionProductFeature
//   - TaxationItem
//   - Usage
//
// #### Tenant level base objects and tenant level event triggers
// Zuora identifies the following base objects as the tenant level base objects:
//
//   - AccountingCode
//   - AccountingPeriod
//   - BillingRun
//   - Feature
//   - JournalEntry
//   - JournalEntryItem
//   - Product
//   - ProductFeature
//   - ProductRatePlan
//   - ProductRatePlanCharge
//
// Event triggers defined on tenant level base objects are tenant level event triggers. Notifications associated with tenant level events are system notifications.
//
// **Note:** Tenant level event triggers and system notifications are only available in the default profile.
//
// ### Define the trigger condition
// The `condition` field is a [JEXL](http://commons.apache.org/proper/commons-jexl/) expression that specifies when to trigger events. The expression can contain fields from the object that the trigger is defined on.
//
// **Note:** The condition cannot contain fields from [data source](https://knowledgecenter.zuora.com/DC_Developers/M_Export_ZOQL) objects that are joined to the object that the trigger is defined on.
//
// For example, the following condition causes an event to be triggered whenever an invoice is posted with an amount greater than 1000:
//
// ```changeType == 'UPDATE' && Invoice.Status == 'Posted' && Invoice.Status_old != 'Posted' && Invoice.Amount > 1000```
//
// Where:
//
//   - `changeType` is a keyword that specifies the type of change that occurred to the Invoice object. For all objects, the supported values of `changeType` are `INSERT`, `UPDATE`,  and `DELETE`.
//   - `Invoice.Status` is the value of the Invoice object's `Status` field after the change occurred.
//   - `Invoice.Status_old` is the value of the Invoice object's `Status` field before the change occurred.
//
// In the above example, the value of `baseObject` is `Invoice`.
//
// ### Limitations
//
// This event trigger has the following limitations:
//
// * The maximum number of event triggers is 20. If you want to increase the limit, submit a request at [Zuora Global Support](https://support.zuora.com).
//
// * The INSERT change type is not supported on RatePlan base objects.
//
// * The INSERT change type is not supported on SubscriptionProductFeature base objects.
func (s *EventTriggers) PostEventTrigger(ctx context.Context, request operations.PostEventTriggerRequest) (*operations.PostEventTriggerResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/events/event-triggers"

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

	res := &operations.PostEventTriggerResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.EventTrigger
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EventTrigger = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}

// PutEventTrigger - Update an event trigger
func (s *EventTriggers) PutEventTrigger(ctx context.Context, request operations.PutEventTriggerRequest) (*operations.PutEventTriggerResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/events/event-triggers/{id}", request.PathParams)

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

	res := &operations.PutEventTriggerResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.EventTrigger
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EventTrigger = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}
