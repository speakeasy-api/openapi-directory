import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class EventTriggers:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def delete_event_trigger(self, request: operations.DeleteEventTriggerRequest) -> operations.DeleteEventTriggerResponse:
        r"""Delete an event trigger
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/events/event-triggers/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteEventTriggerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            res.headers = r.headers
            
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def get_event_trigger(self, request: operations.GetEventTriggerRequest) -> operations.GetEventTriggerResponse:
        r"""Retrieve an event trigger
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/events/event-triggers/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventTriggerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventTrigger])
                res.event_trigger = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def get_event_triggers(self, request: operations.GetEventTriggersRequest) -> operations.GetEventTriggersResponse:
        r"""List event triggers
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/events/event-triggers"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventTriggersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetEventTriggers200ApplicationJSON])
                res.get_event_triggers_200_application_json_object = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def post_event_trigger(self, request: operations.PostEventTriggerRequest) -> operations.PostEventTriggerResponse:
        r"""Create an event trigger
        When you create an event trigger, you must specify the base object and define the trigger condition.
        
        ### Specify the base object
        Use `baseObject` field to specify which object to define a trigger on. You can define an event trigger on any of the following objects:
        
          * Account
          * AccountingCode
          * AccountingPeriod
          * Amendment
          * BillingRun
          * Contact
          * CreditBalanceAdjustment
          * CreditMemo
          * CreditMemoApplication
          * CreditMemoApplicationItem
          * CreditMemoItem
          * DebitMemo
          * DebitMemoItem
          * Feature
          * Invoice
          * InvoiceAdjustment
          * InvoiceItem
          * InvoiceItemAdjustment
          * JournalEntry
          * JournalEntryItem
          * Order
          * OrderAction
          * Payment
          * PaymentApplication
          * PaymentMethod
          * PaymentPart
          * Product
          * ProductFeature
          * ProductRatePlan
          * ProductRatePlanCharge
          * RatePlan
          * RatePlanCharge
          * Refund
          * RefundApplication
          * RevenueEvent
          * RevenueEventItem
          * RevenueSchedule
          * RevenueScheduleItem
          * Subscription
          * SubscriptionProductFeature
          * TaxationItem
          * Usage
        
        #### Tenant level base objects and tenant level event triggers
        Zuora identifies the following base objects as the tenant level base objects:
        
          * AccountingCode
          * AccountingPeriod
          * BillingRun
          * Feature
          * JournalEntry
          * JournalEntryItem
          * Product
          * ProductFeature
          * ProductRatePlan
          * ProductRatePlanCharge
        
        Event triggers defined on tenant level base objects are tenant level event triggers. Notifications associated with tenant level events are system notifications. 
        
        **Note:** Tenant level event triggers and system notifications are only available in the default profile.        
        
        ### Define the trigger condition
        The `condition` field is a [JEXL](http://commons.apache.org/proper/commons-jexl/) expression that specifies when to trigger events. The expression can contain fields from the object that the trigger is defined on.
        
        **Note:** The condition cannot contain fields from [data source](https://knowledgecenter.zuora.com/DC_Developers/M_Export_ZOQL) objects that are joined to the object that the trigger is defined on.
        
        For example, the following condition causes an event to be triggered whenever an invoice is posted with an amount greater than 1000:
        
        ```changeType == 'UPDATE' && Invoice.Status == 'Posted' && Invoice.Status_old != 'Posted' && Invoice.Amount > 1000```
        
        Where:
        
          * `changeType` is a keyword that specifies the type of change that occurred to the Invoice object. For all objects, the supported values of `changeType` are `INSERT`, `UPDATE`,  and `DELETE`.
          * `Invoice.Status` is the value of the Invoice object's `Status` field after the change occurred.
          * `Invoice.Status_old` is the value of the Invoice object's `Status` field before the change occurred.
        
        In the above example, the value of `baseObject` is `Invoice`.
        
        ### Limitations 
        
        This event trigger has the following limitations:
        
        * The maximum number of event triggers is 20. If you want to increase the limit, submit a request at [Zuora Global Support](https://support.zuora.com).
        
        * The INSERT change type is not supported on RatePlan base objects.
        
        * The INSERT change type is not supported on SubscriptionProductFeature base objects.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/events/event-triggers"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostEventTriggerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventTrigger])
                res.event_trigger = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def put_event_trigger(self, request: operations.PutEventTriggerRequest) -> operations.PutEventTriggerResponse:
        r"""Update an event trigger
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/events/event-triggers/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutEventTriggerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventTrigger])
                res.event_trigger = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    