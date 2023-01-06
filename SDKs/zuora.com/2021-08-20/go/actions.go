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

type Actions struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewActions(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Actions {
	return &Actions{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ActionPosTamend - Amend
// Modifies a subscription by creating Amendment objects. However, to modify a subscription, Zuora recommends that you use [Update subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription) instead of this action.
//
// The Amend action cannot modify the custom fields on the Subscription object. You must use [Update subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription) or [Update subscription custom fields of a specified subscription version](https://www.zuora.com/developer/api-reference/#operation/PUT_UpdateSubscriptionCustomFieldsOfASpecifiedVersion) to modify the custom fields on the Subscription object.
//
// You can use this action to create up to 10 Amendment objects.
//
// You must specify the following fields for each Amendment object:
//
// * `ContractEffectiveDate`
// * `Name`
// * `SubscriptionId`
// * `Type`
//
// Additionally, the value of `SubscriptionId` must be the same for each Amendment object. You cannot use this operation to update multiple subscriptions.
//
// **Note:** When you call this operation, Zuora modifies the subscription in the order that you specify Amendment objects in the request body.
//
// If Zuora is unable to create an Amendment object when you call this operation, the entire call fails.
func (s *Actions) ActionPosTamend(ctx context.Context, request operations.ActionPosTamendRequest) (*operations.ActionPosTamendResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/action/amend"

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

	res := &operations.ActionPosTamendResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ProxyActionamendResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProxyActionamendResponse = out
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

// ActionPosTcreate - Create
// Use the create call to create one or more objects of a specific type. You can specify different types in different create calls, but each create call must apply to only one type of object.
//
// ## Limitations
//
// This call has the following limitations:
//
// * A maximum of 50 objects are supported in a single call.
// * The Invoice Settlement feature is not supported. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement.
// * The default WSDL version for Actions is 79. To create objects according to a different WSDL version, set the `X-Zuora-WSDL-Version` header. To find out in which WSDL version a particular object or field was introduced, see [Zuora SOAP API Version History](https://knowledgecenter.zuora.com/DC_Developers/G_SOAP_API/Zuora_SOAP_API_Version_History).
//
// ## How to Use this Call
//
// You can call create on an array of one or more zObjects. It returns an array of SaveResults, indicating the success or failure of creating each object. The following information applies to this call:
//
// * You cannot pass in null zObjects.
// * You can pass in a maximum of 50 zObjects at a time.
// * All objects must be of the same type.
//
// For a use case of this call, see [Upload usage records](https://www.zuora.com/developer/api-guides/#Upload-usage-records).
//
// ### Using Create and Subscribe Calls
// Both the create and subscribe calls will create a new account. However, there are differences between the calls.
//
// Use the create call to create an account independent of a subscription.
//
// Use the subscribe call to create the account with the subscription and the initial payment information.
func (s *Actions) ActionPosTcreate(ctx context.Context, request operations.ActionPosTcreateRequest) (*operations.ActionPosTcreateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/action/create"

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

	res := &operations.ActionPosTcreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out []shared.SaveResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SaveResults = out
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

// ActionPosTdelete - Delete
// Deletes one or more objects of the same type. You can specify different types in different delete calls, but each delete call must apply only to one type of object.
//
// The following information applies to this call:
//
// * You will need to first determine the IDs for the objects you wish to delete.
// * You cannot pass in any null IDs.
// * All objects in a specific delete call must be of the same type.
//
// ### Objects per Call
// 50 objects are supported in a single call.
func (s *Actions) ActionPosTdelete(ctx context.Context, request operations.ActionPosTdeleteRequest) (*operations.ActionPosTdeleteResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/action/delete"

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

	res := &operations.ActionPosTdeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out []shared.DeleteResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeleteResults = out
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

// ActionPosTexecute - Execute
// Use the execute call to execute a process to split an invoice into multiple invoices. The original invoice must be in draft status. The resulting invoices are called split invoices.
//
// **Note:** This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com).
//
// To split a draft invoice into multiple split invoices:
//
// 1. Use the create call to create a separate InvoiceSplitItem object for each split invoice that you want to create from the original draft invoice.
// 2. Use the create call to create a single InvoiceSplit object to collect all of the InvoiceSplitItem objects.
// 3. Use the execute call to split the draft invoice into multiple split invoices.
//
// You need to create InvoiceSplitItem objects and an InvoiceSplit object before you can use the execute call.
//
// * Supported objects: InvoiceSplit
// * Asynchronous process: yes
func (s *Actions) ActionPosTexecute(ctx context.Context, request operations.ActionPosTexecuteRequest) (*operations.ActionPosTexecuteResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/action/execute"

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

	res := &operations.ActionPosTexecuteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out []shared.ExecuteResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ExecuteResults = out
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

// ActionPosTgenerate - Generate
// Generates an on-demand invoice for a specific customer. This is similar to creating an ad-hoc bill run for a specific customer account in the Zuora UI.
//
// * Supported objects: Invoice
// * Asynchronous process: yes
//
// The ID of the generated invoice is returned in the response. If multiple invoices are generated, only the id of the first invoice generated is returned. This occurs when an account has multiple subscriptions with the [invoice subscription separately](https://knowledgecenter.zuora.com/BC_Subscription_Management/Subscriptions/B_Creating_Subscriptions/Invoicing_Subscriptions_Separately) option enabled.
func (s *Actions) ActionPosTgenerate(ctx context.Context, request operations.ActionPosTgenerateRequest) (*operations.ActionPosTgenerateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/action/generate"

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

	res := &operations.ActionPosTgenerateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out []shared.SaveResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SaveResults = out
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

// ActionPosTquery - Query
// The query call sends a query expression by specifying the object to query, the fields to retrieve from that object, and any filters to determine whether a given object should be queried.
//
// You can use [Zuora Object Query Language](https://knowledgecenter.zuora.com/DC_Developers/K_Zuora_Object_Query_Language) (ZOQL) to construct those queries, passing them through the `queryString`.
//
// Once the call is made, the API executes the query against the specified object and returns a query response object to your application. Your application can then iterate through rows in the query response to retrieve information.
//
// ## Limitations
//
// This call has the following limitations:
//
// * All ZOQL keywords must be in lower case.
// * The number of records returned is limited to 2000 records
// * The Invoice Settlement feature is not supported. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement.
// * The default WSDL version for Actions is 79. To query objects or fields according to a different WSDL version, set the `X-Zuora-WSDL-Version` header. To find out in which WSDL version a particular object or field was introduced, see [Zuora SOAP API Version History](https://knowledgecenter.zuora.com/DC_Developers/G_SOAP_API/Zuora_SOAP_API_Version_History).
func (s *Actions) ActionPosTquery(ctx context.Context, request operations.ActionPosTqueryRequest) (*operations.ActionPosTqueryResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/action/query"

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

	res := &operations.ActionPosTqueryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ProxyActionqueryResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProxyActionqueryResponse = out
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

// ActionPosTqueryMore - QueryMore
// Use queryMore to request additional results from a previous query call. If your initial query call returns more than 2000 results, you can use queryMore to query for the additional results.
//
// Any `queryLocator` results greater than 2,000, will only be stored by Zuora for 5 days before it is deleted.
//
//	This call sends a request for additional results from an initial query call. If the initial query call returns more than 2000 results, you can use the `queryLocator` returned from query to request the next set of results.
//
// **Note:** Zuora expires queryMore cursors after 15 minutes of activity.
//
// To use queryMore, you first construct a query call. By default, the query call will return up to 2000 results. If there are more than 2000 results, query will return a boolean `done`, which will be marked as `false`, and a `queryLocator`, which is a marker you will pass to queryMore to get the next set of results.
func (s *Actions) ActionPosTqueryMore(ctx context.Context, request operations.ActionPosTqueryMoreRequest) (*operations.ActionPosTqueryMoreResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/action/queryMore"

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

	res := &operations.ActionPosTqueryMoreResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ProxyActionqueryMoreResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProxyActionqueryMoreResponse = out
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

// ActionPosTsubscribe - Subscribe
// This call performs many actions.  Use the subscribe call to bundle information required to create at least one new subscription.
//
// The call takes in an array of SubscribeRequests. Because it takes an array, you can submit a batch of subscription requests at once. You can create up to 50 different subscriptions in a single subscribe call.
//
// This is a combined call that you can use to perform all of the following tasks in a single call:
//
// * Create accounts
// * Create contacts
// * Create payment methods, including external payment options
// * Create an invoice for the subscription
// * Apply the first payment to a subscription
//
// ## Object Limits
// 50 objects are supported in a single call.
//
// ## Effective Date
// If the effective date is in the future, the invoices will not be generated, and there will be no invoice number.
//
// ## Subscription Name, Number, and ID
// ### Subscription Name and Number
// The subscription name is a unique identifier for the subscription. If you do not specify a value for the name, Zuora will create one automatically. The automatically generated value is known as the subscription number, such as `A-S00000080`. You cannot change the subscription name or number after creating the subscription.
//
// * **Subscription name**: The name that you set for the subscription.
// * **Subscription number**: The value generated by Zuora automatically if you do not specify a subscription name.
//
// Both the subscription name and number must be unique. If they are not, an error will occur.
//
// ### Subscription ID
// The subscription ID is a 32-digit ID in the format 4028xxxx. This is also the unique identifier for a subscription. This value is automatically generated by the system and cannot be edited or updated, but it can be queried. One subscription can have only one subscription name or number, but it can have multiple IDs: Each version of a subscription has a different ID.
//
// The Subscription object contains the fields `OriginalId` and `PreviousSubscriptionId`. `OriginalId` is the ID for the first version of a subscription. `PreviousSubscriptionId` is the ID of the version created immediately prior to the current version.
//
// ## Subscription Preview
// You can preview invoices that would be generated by the subscribe call.
//
// When previewing invoices with the subscribe call, the correspondinig Contract Effective, Service Activation, or Customer Acceptance date is required if the subscription contains a charge with its trigger event being set as `ContractEffectiveDate`, `ServiceActivationDate`, or `CustomerAcceptanceDate`.
//
// ## Invoice Subscriptions Separately
// If you have enabled the invoice subscriptions separately feature, a subscribe call will generate an invoice for each subscription for every subscription where the field `IsInvoiceSeparate` is set to `true`.
//
// If the invoice subscriptions separately feature is disabled, a subscribe call will generate a single invoice for all subscriptions.
//
// See [Invoicing Subscriptions Separately](https://knowledgecenter.zuora.com/BC_Subscription_Management/Subscriptions/B_Creating_Subscriptions/Invoicing_Subscriptions_Separately) for more information.
//
// ## Subscriptions and Draft Invoices
// If a draft invoice that includes charges exists in a customer account, using the subscribe call to create a new subscription and generate an invoice will cause the new subscription to be added to the existing draft invoice. Zuora will then post the invoice.
//
// ## When to Use Subscribe and Create Calls
// You can use either the subscribe call or the create call to create the objects associated with a subscription (accounts, contacts, and so on). There are differences between these calls, however, and some situations are better for one or the other.
//
// ### Use the Subscribe Call
// The subscribe call bundles up all the information you need for a subscription. Use the subscribe call to create new subscriptions when you have all the information you need.
//
// Subscribe calls cannot update BillTo, SoldTo, and Account objects. Payment information objects cannot be updated if there is an existing account ID in the call. These objects are not supported in a subscribe call.
//
// ### Use the Create Call
// The create call is more useful when you want to develop in stages. For example, if you want to first create an account, then a contact, and so on. If you do not have all information available, use the create call. To create a subscription, you must activate the account from Draft status to Active by calling the subscribe call.
func (s *Actions) ActionPosTsubscribe(ctx context.Context, request operations.ActionPosTsubscribeRequest) (*operations.ActionPosTsubscribeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/action/subscribe"

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

	res := &operations.ActionPosTsubscribeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out []shared.SubscribeResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SubscribeResults = out
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

// ActionPosTupdate - Update
//
// Updates the information in one or more objects of the same type. You can specify different types of objects in different update calls, but each specific update call must apply to only one type of object.
//
// You can update an array of one or more zObjects. It returns an array of SaveResults, indicating the success or failure of updating each object. The following information applies to this call:
//
// * You cannot pass in null zObjects.
// * You can pass in a maximum of 50 zObjects at a time.
// * All objects must be of the same type.
// * For each field in each object, you must determine that object's ID. Then populate the fields that you want update with the new information.
// * Zuora ignores unrecognized fields in update calls. For example, if an optional field is spelled incorrectly or a field that does not exist is specified, Zuora ignores the field and continues to process the call. No error message is returned for unrecognized fields.
//
// ## Limitations
//
// This call has the following limitations:
//
// * A maximum of 50 objects are supported in a single call.
// * The Invoice Settlement feature is not supported. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement.
// * The default WSDL version for Actions is 79. To update objects or fields according to a different WSDL version, set the `X-Zuora-WSDL-Version` header. To find out in which WSDL version a particular object or field was introduced, see [Zuora SOAP API Version History](https://knowledgecenter.zuora.com/DC_Developers/G_SOAP_API/Zuora_SOAP_API_Version_History).
func (s *Actions) ActionPosTupdate(ctx context.Context, request operations.ActionPosTupdateRequest) (*operations.ActionPosTupdateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/action/update"

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

	res := &operations.ActionPosTupdateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out []shared.SaveResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SaveResults = out
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
