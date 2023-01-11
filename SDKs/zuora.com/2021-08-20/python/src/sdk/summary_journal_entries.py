import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class SummaryJournalEntries:
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

    
    def delete_summary_journal_entry(self, request: operations.DeleteSummaryJournalEntryRequest) -> operations.DeleteSummaryJournalEntryResponse:
        r"""Delete a summary journal entry
        This reference describes how to delete a summary journal entry using the REST API.
        
        You must have the \"Delete Cancelled Journal Entry\" user permission enabled to delete summary journal entries.
        
        A summary journal entry must be canceled before it can be deleted.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/journal-entries/{je-number}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSummaryJournalEntryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def get_all_summary_journal_entries(self, request: operations.GetAllSummaryJournalEntriesRequest) -> operations.GetAllSummaryJournalEntriesResponse:
        r"""List all summary journal entries in a journal run
        
        This REST API reference describes how to retrieve information about all summary journal entries in a journal run.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/journal-entries/journal-runs/{jr-number}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllSummaryJournalEntriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetJournalEntriesInJournalRunType])
                res.get_journal_entries_in_journal_run_type = out

        return res

    
    def get_summary_journal_entry(self, request: operations.GetSummaryJournalEntryRequest) -> operations.GetSummaryJournalEntryResponse:
        r"""Retrieve a summary journal entry
        This REST API reference describes how to get information about a summary journal entry by its journal entry number.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/journal-entries/{je-number}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSummaryJournalEntryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_journal_entry_detail_type = out

        return res

    
    def post_summary_journal_entry(self, request: operations.PostSummaryJournalEntryRequest) -> operations.PostSummaryJournalEntryResponse:
        r"""Create a summary journal entry
        This REST API reference describes how to manually create a summary journal entry. Request and response field descriptions and sample code are provided.
        ## Requirements
        1.The sum of debits must equal the sum of credits in the summary journal entry.
        
        2.The following applies only if you use foreign currency conversion:
          * If you have configured Aggregate transactions with different currencies during a Journal Run to \"Yes\", the value of the **currency** field must be the same as your tenant's home currency. That is, you must create journal entries using your home currency.
          * All journal entries in an accounting period must either all be aggregated or all be unaggregated. You cannot have a mix of aggregated and unaggregated journal entries in the same accounting period.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/journal-entries"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSummaryJournalEntryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostJournalEntryResponseType])
                res.post_journal_entry_response_type = out

        return res

    
    def put_basic_summary_journal_entry(self, request: operations.PutBasicSummaryJournalEntryRequest) -> operations.PutBasicSummaryJournalEntryResponse:
        r"""Update a summary journal entry
        
        This REST API reference describes how to update the basic information of a summary journal entry. Request and response field descriptions and sample code are provided.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/journal-entries/{je-number}/basic-information", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutBasicSummaryJournalEntryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def put_summary_journal_entry(self, request: operations.PutSummaryJournalEntryRequest) -> operations.PutSummaryJournalEntryResponse:
        r"""Cancel a summary journal entry
        
        This reference describes how to cancel a summary journal entry using the REST API.
            
        You must have the \"Cancel Journal Entry\" user permission enabled to cancel summary journal entries.
            
        A summary journal entry cannot be canceled if its Transferred to Accounting status is \"Yes\" or \"Processing\".
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/journal-entries/{je-number}/cancel", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSummaryJournalEntryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    