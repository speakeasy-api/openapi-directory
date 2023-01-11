import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class JobSchedules:
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

    
    def job_schedule_add(self, request: operations.JobScheduleAddRequest) -> operations.JobScheduleAddResponse:
        r"""Adds a job schedule to the specified account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/jobschedules"
        
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

        res = operations.JobScheduleAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_schedule_delete(self, request: operations.JobScheduleDeleteRequest) -> operations.JobScheduleDeleteResponse:
        r"""Deletes a job schedule from the specified account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobschedules/{jobScheduleId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobScheduleDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_schedule_disable(self, request: operations.JobScheduleDisableRequest) -> operations.JobScheduleDisableResponse:
        r"""Disables a job schedule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobschedules/{jobScheduleId}/disable", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobScheduleDisableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_schedule_enable(self, request: operations.JobScheduleEnableRequest) -> operations.JobScheduleEnableResponse:
        r"""Enables a job schedule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobschedules/{jobScheduleId}/enable", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobScheduleEnableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_schedule_exists(self, request: operations.JobScheduleExistsRequest) -> operations.JobScheduleExistsResponse:
        r"""Checks the specified job schedule exists.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobschedules/{jobScheduleId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobScheduleExistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_schedule_get(self, request: operations.JobScheduleGetRequest) -> operations.JobScheduleGetResponse:
        r"""Gets information about the specified job schedule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobschedules/{jobScheduleId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobScheduleGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_job_schedule = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_schedule_list(self, request: operations.JobScheduleListRequest) -> operations.JobScheduleListResponse:
        r"""Lists all of the job schedules in the specified account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/jobschedules"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobScheduleListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_job_schedule_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_schedule_patch(self, request: operations.JobSchedulePatchRequest) -> operations.JobSchedulePatchResponse:
        r"""Updates the properties of the specified job schedule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobschedules/{jobScheduleId}", request.path_params)
        
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

        res = operations.JobSchedulePatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_schedule_terminate(self, request: operations.JobScheduleTerminateRequest) -> operations.JobScheduleTerminateResponse:
        r"""Terminates a job schedule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobschedules/{jobScheduleId}/terminate", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobScheduleTerminateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_schedule_update(self, request: operations.JobScheduleUpdateRequest) -> operations.JobScheduleUpdateResponse:
        r"""Updates the properties of the specified job schedule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobschedules/{jobScheduleId}", request.path_params)
        
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

        res = operations.JobScheduleUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    