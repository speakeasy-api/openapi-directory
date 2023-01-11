import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class AccountingPeriods:
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

    
    def delete_accounting_period(self, request: operations.DeleteAccountingPeriodRequest) -> operations.DeleteAccountingPeriodResponse:
        r"""Delete an accounting period
        Deletes an accounting period.
        
        Prerequisites
        -------------
        
         * You must have Zuora Finance enabled on your tenant.
        
         * You must have the Delete Accounting Period user permission. See [Finance Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/f_Finance_Roles).
        
        
        Limitations
        -----------
        
        The accounting period to be deleted:
        
        * Must be the most recent accounting period
        
        * Must be an open accounting period
        
        * Must have no revenue distributed into it
        
        * Must not have any active journal entries
        
        * Must not be the open-ended accounting period
        
        * Must not be in the process of running a trial balance
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/accounting-periods/{ap-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAccountingPeriodResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def get_accounting_period(self, request: operations.GetAccountingPeriodRequest) -> operations.GetAccountingPeriodResponse:
        r"""Retrieve an accounting period
        Retrieves an accounting period.
        Prerequisites
        -------------
        
        You must have Zuora Finance enabled on your tenant.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/accounting-periods/{ap-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountingPeriodResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_accounting_period_type = out

        return res

    
    def get_all_accounting_periods(self, request: operations.GetAllAccountingPeriodsRequest) -> operations.GetAllAccountingPeriodsResponse:
        r"""List all accounting periods
        Retrieves all accounting periods on your tenant.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/accounting-periods"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllAccountingPeriodsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetAccountingPeriodsType])
                res.get_accounting_periods_type = out

        return res

    
    def post_accounting_period(self, request: operations.PostAccountingPeriodRequest) -> operations.PostAccountingPeriodResponse:
        r"""Create an accounting period
        Creates an accounting period.
        Prerequisites
        -------------
        * You must have Zuora Finance enabled on your tenant.
        * You must have the Create Accounting Period user permission.
        
        Limitations
        -----------
        * When creating the first accounting period on your tenant, the start date must be equal to or earlier than the date of the earliest transaction on the tenant.
        * Start and end dates of accounting periods must be contiguous. For example, if one accounting period ends on January 31, the next period must start on February 1.
        * If you have the Revenue Recognition Package and have enabled the \"Monthly recognition over time\" revenue recognition model, the accounting period start date and end date must be on the first day and last day of the month, respectively. Note that the start and end dates do not necessarily have to be in the same month.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/accounting-periods"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAccountingPeriodResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostAccountingPeriodResponseType])
                res.post_accounting_period_response_type = out

        return res

    
    def put_close_accounting_period(self, request: operations.PutCloseAccountingPeriodRequest) -> operations.PutCloseAccountingPeriodResponse:
        r"""Close an accounting period
        Close an accounting period by accounting period ID.
        
        Prerequisites
        -------------
        You must have Zuora Finance enabled on your tenant. You must have the Manage Close Process and Run Trial Balance user permissions.
        
        Limitations
        -----------
        * The accounting period cannot already be closed.
        * The accounting period cannot be in the process of running a trial balance.
        * All earlier accounting periods must be closed.
        * There must be no required action items for the accounting period. See Reconcile Transactions Before Closing an Accounting Period for more information.
        
        Notes
        -----
        When you close an accounting period in Zuora, a trial balance is automatically run for that period. A successful response means only that the accounting period is now closed, but does not mean that the trial balance has successfully completed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/accounting-periods/{ap-id}/close", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCloseAccountingPeriodResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def put_pending_close_accounting_period(self, request: operations.PutPendingCloseAccountingPeriodRequest) -> operations.PutPendingCloseAccountingPeriodResponse:
        r"""Set an accounting period to pending close
        Sets an accounting period to pending close.
        
        
        Prerequisites
        -------------
        
        * You must have Zuora Finance enabled on your tenant.
        * You must have the Manage Close Process and Run Trial Balance user permissions.
        
                    
        Limitations 
         -----------
         
         * The accounting period cannot be closed or pending close.
         
         * The accounting period cannot be in the process of running a trial balance.
         
         * All earlier accounting periods must be closed.
         
         
        Notes
        -----
        When you set an accounting period to pending close in Zuora, a trial balance is automatically run for that period. A response of `{ \"success\": true }`  means only that the accounting period status is now pending close, but does not mean that the trial balance has successfully completed. You can use the Get Accounting Period REST API call to view details about the outcome of the trial balance.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/accounting-periods/{ap-id}/pending-close", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPendingCloseAccountingPeriodResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def put_reopen_accounting_period(self, request: operations.PutReopenAccountingPeriodRequest) -> operations.PutReopenAccountingPeriodResponse:
        r"""Reopen an accounting period
        Re-opens an accounting period.
        Prerequisites
        -------------
        * You must have Zuora Finance enabled on your tenant.
        * You must have the Manage Close Process and Run Trial Balance user permissions.
        
        Limitations
        -----------
        * The accounting period must be closed or pending close.
        * You can only re-open an accounting period that is immediately previous to an open period.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/accounting-periods/{ap-id}/reopen", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutReopenAccountingPeriodResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def put_run_trial_balance(self, request: operations.PutRunTrialBalanceRequest) -> operations.PutRunTrialBalanceResponse:
        r"""Run trial balance
        Runs the trial balance for an accounting period. 
        
        Prerequisites
        -------------
        
        * You must have Zuora Finance enabled on your tenant.
        
        * You must have the Manage Close Process and Run Trial Balance user permissions. See [Finance Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/f_Finance_Roles).
        
                  
        Limitations 
        -----------
         
         * The accounting period must be open.
         
         * The accounting period cannot already be in the process of running a trial balance.
         
        Notes
        -----
        The trial balance is run asynchronously. A response of `{ \"success\": true }` means only that the trial balance has started processing, but does not mean that the trial balance has successfully completed. You can use the [Get Accounting Period](https://www.zuora.com/developer/api-reference/#operation/GET_AccountingPeriod) REST API call to view details about the outcome of the trial balance.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/accounting-periods/{ap-id}/run-trial-balance", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRunTrialBalanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def put_update_accounting_period(self, request: operations.PutUpdateAccountingPeriodRequest) -> operations.PutUpdateAccountingPeriodResponse:
        r"""Update an accounting period
        
        Updates an accounting period.
        
        Prerequisites
        -------------
        
        * You must have Zuora Finance enabled on your tenant.
        
        * You must have the Create Accounting Period user permission. See [Finance Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/f_Finance_Roles).
        
        Limitations
        -----------
        
        * You can update the start date of only the earliest accounting period on your tenant. You cannot update the start date of later periods.
        
        * If you update the earliest accounting period, the start date must be equal to or earlier than the date of the earliest transaction on the tenant.
        
        * Start and end dates of accounting periods must be contiguous. For example, if one accounting period ends on January 31, the next period must start on February 1.
        
        * If you have the Revenue Recognition Package and have enabled the \"Monthly recognition over time\" revenue recognition model, the accounting period start date and end date must be on the first day and last day of the month, respectively. Note that the start and end dates do not necessarily have to be in the same month.
        
        * You cannot update the start date or end date of an accounting period if:
          * Any revenue has been distributed into the period.
          * The period has any active journal entries.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/accounting-periods/{ap-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUpdateAccountingPeriodResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    