import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class PaymentRuns:
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

    
    def delete_payment_run(self, request: operations.DeletePaymentRunRequest) -> operations.DeletePaymentRunResponse:
        r"""Delete a payment run
        Deletes a payment run. Only payment runs with the Canceled or Error status can be deleted.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/payment-runs/{paymentRunId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePaymentRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def get_payment_run(self, request: operations.GetPaymentRunRequest) -> operations.GetPaymentRunResponse:
        r"""Retrieve a payment run
        Retrives the information about a specific payment run.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/payment-runs/{paymentRunId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetPaymentRunType])
                res.get_payment_run_type = out

        return res

    
    def get_payment_run_data(self, request: operations.GetPaymentRunDataRequest) -> operations.GetPaymentRunDataResponse:
        r"""Retrieve payment run data
        Retrieves payment run data and the processing result with details, if the `data` field was specified in the Create payment run operation.
           
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/payment-runs/{paymentRunId}/data", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentRunDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetPaymentRunDataArrayResponse])
                res.get_payment_run_data_array_response = out

        return res

    
    def get_payment_run_summary(self, request: operations.GetPaymentRunSummaryRequest) -> operations.GetPaymentRunSummaryResponse:
        r"""Retrieve a payment run summary
        Retrives the summary of a payment run.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/payment-runs/{paymentRunId}/summary", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentRunSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetPaymentRunSummaryResponse])
                res.get_payment_run_summary_response = out

        return res

    
    def get_payment_runs(self, request: operations.GetPaymentRunsRequest) -> operations.GetPaymentRunsResponse:
        r"""List payment runs
        Retrieves the information about all payment runs. You can define filterable fields to restrict the data returned in the response.
        
        ### Filtering
        
        You can use query parameters to restrict the data returned in the response. Each query parameter corresponds to one field in the response body.
        
        If the value of a filterable field is string, you can set the corresponding query parameter to `null` when filtering. Then, you can get the response data with this field value being `null`. 
        
        Examples:
        
        - /v1/payment-runs?status=Processed
        
        - /v1/payment-runs?targetDate=2017-10-10&status=Pending
        
        - /v1/payment-runs?status=Completed&sort=+updatedDate
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/payment-runs"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentRunsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetPaymentRunCollectionType])
                res.get_payment_run_collection_type = out

        return res

    
    def post_payment_run(self, request: operations.PostPaymentRunRequest) -> operations.PostPaymentRunResponse:
        r"""Create a payment run
        Creates a payment run. You can create a payment run to be executed immediately after it is created, or a scheduled payment run to be executed in future.
        
        To filter the payments to be collected for a payment run, you can use either of the following methods but not both:
        
          - Use the `accountId`, `batch`, `billCycleDay`, `currency`, `paymentGatewayId`, and `billingRunId` fields to define the billing documents to be collected.
          - Use the `data` field to specify the records of accounts and billing documents to be collected, in a more flexible manner.
        
        If no filter criteria are specified in the request body, the payment run collects payments for all accounts.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/payment-runs"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPaymentRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetPaymentRunType])
                res.get_payment_run_type = out

        return res

    
    def put_payment_run(self, request: operations.PutPaymentRunRequest) -> operations.PutPaymentRunResponse:
        r"""Update a payment run
        Updates the information about an unexecuted payment run. Only pending payment runs can be updated.
        
        If none of the **accountId**, **batch**, **billCycleDay**, **currency**, **paymentGatewayId**, and **billingRunId** fields is specified in the request body, the corresponding payment run collects payments for all accounts.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/payment-runs/{paymentRunId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPaymentRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetPaymentRunType])
                res.get_payment_run_type = out

        return res

    