import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class BillingPreviewRun:
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

    
    def get_billing_preview_run(self, request: operations.GetBillingPreviewRunRequest) -> operations.GetBillingPreviewRunResponse:
        r"""Retrieve a billing preview run
        Retrieves a preview of future invoice items for multiple customer accounts through a billing preview run. If you have the Invoice Settlement feature enabled,  you can also retrieve a preview of future credit memo items. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        A billing preview run asynchronously generates a downloadable CSV file containing a preview of invoice item data and credit memo item data for a batch of customer accounts.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/billing-preview-runs/{billingPreviewRunId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBillingPreviewRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetBillingPreviewRunResponse])
                res.get_billing_preview_run_response = out

        return res

    
    def post_billing_preview_run(self, request: operations.PostBillingPreviewRunRequest) -> operations.PostBillingPreviewRunResponse:
        r"""Create a billing preview run
        Creates a billing preview run for multiple customer accounts.
        
        You can run up to 20 billing preview runs in batches concurrently. A single batch of customer accounts can only have one billing preview run at a time. So you can have up to 20 batches running at the same time. If you create a billing preview run for all customer batches, you cannot create another billing preview run until this preview run is completed.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/billing-preview-runs"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostBillingPreviewRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostBillingPreviewRun200ApplicationJSON])
                res.post_billing_preview_run_200_application_json_object = out

        return res

    