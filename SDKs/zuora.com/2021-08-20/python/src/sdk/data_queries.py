import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class DataQueries:
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

    
    def delete_data_query_job(self, request: operations.DeleteDataQueryJobRequest) -> operations.DeleteDataQueryJobResponse:
        r"""Cancel a data query job
        Cancels a [data query](https://knowledgecenter.zuora.com/DC_Developers/BA_Data_Query) job, which prevents Zuora from performing the query. This operation is only applicable if the status of the query job is `accepted` or `in_progress`.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/query/jobs/{job-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDataQueryJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteDataQueryJobResponse])
                res.delete_data_query_job_response = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataQueryErrorResponse])
                res.data_query_error_response = out

        return res

    
    def get_data_query_job(self, request: operations.GetDataQueryJobRequest) -> operations.GetDataQueryJobResponse:
        r"""Retrieve a data query job
        Retrieves a [data query](https://knowledgecenter.zuora.com/DC_Developers/BA_Data_Query) job. You can use this operation to track the status of the query job and obtain the URL of the query results.
        
        If you are an administrator, you can retrieve every query job in your tenant. 
        
        If you are a non-admin user and try to retrieve a query job that you are not the owner of, you will get a 403 response indicating that you are forbidden from viewing this job. As a non-admin user, you can only retrieve your own query job.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/query/jobs/{job-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataQueryJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetDataQueryJobResponse])
                res.get_data_query_job_response = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataQueryErrorResponse])
                res.data_query_error_response = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataQueryErrorResponse])
                res.data_query_error_response = out

        return res

    
    def get_data_query_jobs(self, request: operations.GetDataQueryJobsRequest) -> operations.GetDataQueryJobsResponse:
        r"""List data query jobs
        Returns a list of [data query](https://knowledgecenter.zuora.com/DC_Developers/BA_Data_Query) jobs that have been created in your Zuora tenant. You can filter the list by status.
        
        If you are an administrator, you can retrieve all the query jobs in your tenant. Otherwise, you can only retrieve your own query jobs.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/query/jobs"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataQueryJobsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetDataQueryJobsResponse])
                res.get_data_query_jobs_response = out

        return res

    
    def post_data_query_job(self, request: operations.PostDataQueryJobRequest) -> operations.PostDataQueryJobResponse:
        r"""Submit a data query
        Submits a [data query](https://knowledgecenter.zuora.com/DC_Developers/BA_Data_Query) to be performed by Zuora and creates a query job. You can use [Retrieve a data query job](#operation/GET_DataQueryJob) to track the status of the query job and obtain the URL of the query results.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/query/jobs"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDataQueryJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubmitDataQueryResponse])
                res.submit_data_query_response = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataQueryErrorResponse])
                res.data_query_error_response = out

        return res

    