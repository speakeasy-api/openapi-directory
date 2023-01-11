import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Jobs:
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

    
    def job_add(self, request: operations.JobAddRequest) -> operations.JobAddResponse:
        r"""Adds a job to the specified account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/jobs"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_delete(self, request: operations.JobDeleteRequest) -> operations.JobDeleteResponse:
        r"""Deletes a job.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_disable(self, request: operations.JobDisableRequest) -> operations.JobDisableResponse:
        r"""Disables the specified job, preventing new tasks from running.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}/disable", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobDisableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_enable(self, request: operations.JobEnableRequest) -> operations.JobEnableResponse:
        r"""Enables the specified job, allowing new tasks to run.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}/enable", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobEnableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_get(self, request: operations.JobGetRequest) -> operations.JobGetResponse:
        r"""Gets information about the specified job.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_job = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_get_all_jobs_lifetime_statistics(self, request: operations.JobGetAllJobsLifetimeStatisticsRequest) -> operations.JobGetAllJobsLifetimeStatisticsResponse:
        r"""Gets lifetime summary statistics for all of the jobs in the specified account. Statistics are aggregated across all jobs that have ever existed in the account, from account creation to the last update time of the statistics.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lifetimejobstats"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobGetAllJobsLifetimeStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.job_statistics = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_list(self, request: operations.JobListRequest) -> operations.JobListResponse:
        r"""Lists all of the jobs in the specified account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/jobs"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_job_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_list_from_job_schedule(self, request: operations.JobListFromJobScheduleRequest) -> operations.JobListFromJobScheduleResponse:
        r"""Lists the jobs that have been created under the specified job schedule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobschedules/{jobScheduleId}/jobs", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobListFromJobScheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_job_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_list_preparation_and_release_task_status(self, request: operations.JobListPreparationAndReleaseTaskStatusRequest) -> operations.JobListPreparationAndReleaseTaskStatusResponse:
        r"""Lists the execution status of the Job Preparation and Job Release task for the specified job across the compute nodes where the job has run.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}/jobpreparationandreleasetaskstatus", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobListPreparationAndReleaseTaskStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_job_list_preparation_and_release_task_status_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_patch(self, request: operations.JobPatchRequest) -> operations.JobPatchResponse:
        r"""Updates the properties of a job.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PATCH", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_terminate(self, request: operations.JobTerminateRequest) -> operations.JobTerminateResponse:
        r"""Terminates the specified job, marking it as completed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}/terminate", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobTerminateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_update(self, request: operations.JobUpdateRequest) -> operations.JobUpdateResponse:
        r"""Updates the properties of a job.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    