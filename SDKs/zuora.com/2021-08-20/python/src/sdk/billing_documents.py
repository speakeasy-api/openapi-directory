import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class BillingDocuments:
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

    
    def get_billing_document_files_deletion_job(self, request: operations.GetBillingDocumentFilesDeletionJobRequest) -> operations.GetBillingDocumentFilesDeletionJobResponse:
        r"""Retrieve a job of hard deleting billing document files
        Retrieves information about an asynchronous job of permanently deleting all billing document PDF files for specific accounts.
        
        **Note**: This operation can be used only if you have the Billing user permission \"Hard Delete Billing Document Files\" enabled. 
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/accounts/billing-documents/files/deletion-jobs/{jobId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBillingDocumentFilesDeletionJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetBillingDocumentFilesDeletionJobResponse])
                res.get_billing_document_files_deletion_job_response = out

        return res

    
    def get_billing_documents(self, request: operations.GetBillingDocumentsRequest) -> operations.GetBillingDocumentsResponse:
        r"""List billing documents for an account
        Retrieves the information about all billing documents associated with a specified account. The billing documents contain invoices, credit memos, and debit memos. 
        
        To retrieve information about credit memos and debit memos, you must have the Invoice Settlement feature enabled. 
        
        You can use query parameters to restrict the data returned in the response.
        
        Examples:
        - /billing-documents?accountId=4028905f5e4feb38015e50af9aa002d1&sort=+documentDate
        - /billing-documents?accountId=4028905f5e4feb38015e50af9aa002d1&status=Posted
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/billing-documents"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBillingDocumentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.BillingDocumentQueryResponseElementType])
                res.billing_document_query_response_element_type = out

        return res

    
    def post_billing_document_files_deletion_job(self, request: operations.PostBillingDocumentFilesDeletionJobRequest) -> operations.PostBillingDocumentFilesDeletionJobResponse:
        r"""Create a job to hard delete billing document files
        Creates an asynchronous job to permanently delete all billing document PDF files for specific accounts. 
        
        After the deletion job is completed, all billing document PDF files are permanently deleted. To retrieve the status of a deletion job, call [Retrieve a job of hard deleting billing document files](https://www.zuora.com/developer/api-reference/#operation/GET_BillingDocumentFilesDeletionJob).
        
        **Note**: This operation can be used only if you have the Billing user permission \"Hard Delete Billing Document Files\" enabled. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/accounts/billing-documents/files/deletion-jobs"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostBillingDocumentFilesDeletionJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostBillingDocumentFilesDeletionJobResponse])
                res.post_billing_document_files_deletion_job_response = out

        return res

    
    def post_generate_billing_documents(self, request: operations.PostGenerateBillingDocumentsRequest) -> operations.PostGenerateBillingDocumentsResponse:
        r"""Generate billing documents by account ID
        Generates draft or posted billing documents for a specified account. You can also generate billing documents for specified subscriptions of a specified account. The billing documents contain invoices and credit memos. To generate credit memos, you must have the Invoice Settlement feature enabled.
        
        **Note**: You cannot generate billing documents for cancelled or suspended subscriptions.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/accounts/{id}/billing-documents/generate", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGenerateBillingDocumentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenerateBillingDocumentResponseType])
                res.generate_billing_document_response_type = out

        return res

    