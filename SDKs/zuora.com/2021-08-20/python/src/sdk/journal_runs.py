import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class JournalRuns:
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

    
    def delete_journal_run(self, request: operations.DeleteJournalRunRequest) -> operations.DeleteJournalRunResponse:
        r"""Delete a journal run
        This reference describes how to delete a journal run using the REST API.
                              
         You can only delete journal runs that have already been canceled.
                              
         You must have the \"Delete Cancelled Journal Run\" Zuora Finance user permission enabled to delete journal runs.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/journal-runs/{jr-number}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteJournalRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def get_journal_run(self, request: operations.GetJournalRunRequest) -> operations.GetJournalRunResponse:
        r"""Retrieve a journal run
        This REST API reference describes how to get information about a journal run. Request and response field descriptions and sample code are provided.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/journal-runs/{jr-number}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetJournalRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetJournalRunType])
                res.get_journal_run_type = out

        return res

    
    def post_journal_run(self, request: operations.PostJournalRunRequest) -> operations.PostJournalRunResponse:
        r"""Create a journal run
        This REST API reference describes how to create a journal run. Request and response field descriptions and sample code are provided.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/journal-runs"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostJournalRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostJournalRunResponseType])
                res.post_journal_run_response_type = out

        return res

    
    def put_journal_run(self, request: operations.PutJournalRunRequest) -> operations.PutJournalRunResponse:
        r"""Cancel a journal run
        This reference describes how to cancel a journal run using the REST API.
                  
        The summary journal entries in the journal run are canceled asynchronously. See the \"Example\" section below for details.
                  
        You must have the \"Cancel Journal Run\" Zuora Finance user permission enabled to cancel journal runs.
        
        ## Notes
        When you cancel a journal run, the summary journal entries associated with that journal run are canceled asynchronously. A response of `{ \"success\": true }` means only that the specified journal run has a status of \"Pending\", \"Error\", or \"Completed\" and therefore can be canceled, but does not mean that the whole journal run was successfully canceled.
        
        For example, let's say you want to cancel journal run JR-00000075. The journal run status is \"Completed\" and it contains ten journal entries. One of the journal entries has its Transferred to Accounting status set to \"Yes\", meaning that the entry cannot be canceled. The workflow might go as follows:
        1. You make an API call to cancel the journal run.
        2. The journal run status is \"Completed\", so you receive a response of `{ \"success\": true }`.
        3. Zuora begins asynchronously canceling journal entries associated with the journal run. The journal entry whose Transferred to Accounting status is \"Yes\" fails to be canceled. The cancelation process continues, and the other journal entries are successfully canceled.
        4. The journal run status remains as \"Completed\". The status does not change to \"Canceled\" because the journal run still contains a journey entry that is not canceled.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/journal-runs/{jr-number}/cancel", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutJournalRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    