import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CustomObjectJobs:
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

    
    def get_all_custom_object_bulk_jobs(self, request: operations.GetAllCustomObjectBulkJobsRequest) -> operations.GetAllCustomObjectBulkJobsResponse:
        r"""List all custom object bulk jobs
        Lists all custom object bulk jobs submitted by your tenant.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/objects/jobs"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllCustomObjectBulkJobsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomObjectBulkJobResponseCollection])
                res.custom_object_bulk_job_response_collection = out

        return res

    
    def get_custom_object_bulk_job(self, request: operations.GetCustomObjectBulkJobRequest) -> operations.GetCustomObjectBulkJobResponse:
        r"""Retrieve a custom object bulk job
        Retrieves the custom object bulk job details by job ID.
        
        Only the users that have the \"View Custom Objects\" permission can retrieve custom object bulk jobs. See [Platform Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/h_Platform_Roles#Platform_Permissions) for more information.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/objects/jobs/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomObjectBulkJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomObjectBulkJobResponse])
                res.custom_object_bulk_job_response = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonErrorResponse])
                res.common_error_response = out

        return res

    
    def get_custom_object_bulk_job_errors(self, request: operations.GetCustomObjectBulkJobErrorsRequest) -> operations.GetCustomObjectBulkJobErrorsResponse:
        r"""List all errors for a custom object bulk job
        Lists all errors for a custom object bulk job.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/objects/jobs/{id}/errors", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomObjectBulkJobErrorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomObjectBulkJobErrorResponseCollection])
                res.custom_object_bulk_job_error_response_collection = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonErrorResponse])
                res.common_error_response = out

        return res

    
    def post_custom_object_bulk_job(self, request: operations.PostCustomObjectBulkJobRequest) -> operations.PostCustomObjectBulkJobResponse:
        r"""Submit a custom object bulk job
        Submits a bulk job request for a bulk operation on the specified custom object records. A succcessful call returns a newly created bulk job. The job ID can be used to poll the job status or upload the CSV file if it is a `create` job.
        
        ## Limits
        This custom object bulk jobs have the following limits:
        * The concurrent bulk job limit per tenant is 5. Bulk jobs in `open`, `pending`, or `in_progress` status are counted towards the concurrent bulk job limit.
        * The bulk job execuation order is not guaranteed, which means the bulk job that you submit ealier may be executed later.  
        * Only the users that have the \"Delete Custom Objects\" permission can create a `delete` bulk job. Only the users that have the \"Edit Custom Objects\" permission can create a `create` bulk job. See [Platform Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/h_Platform_Roles#Platform_Permissions) for more information.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/objects/jobs"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCustomObjectBulkJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomObjectBulkJobResponse])
                res.custom_object_bulk_job_response = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonErrorResponse])
                res.common_error_response = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonErrorResponse])
                res.common_error_response = out

        return res

    
    def post_upload_file_for_custom_object_bulk_job(self, request: operations.PostUploadFileForCustomObjectBulkJobRequest) -> operations.PostUploadFileForCustomObjectBulkJobResponse:
        r"""Upload a file for a custom object bulk job
        Uploads a file to a create custom object bulk job. Only one file is allowed per job. The job must be in `pending` status when you upload the file to it. The job will start creating records once the upload is finished.
        
        Only the users that have the \"Edit Custom Objects\" permission can upload files to custom object bulk jobs. See [Platform Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/h_Platform_Roles#Platform_Permissions) for more information.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/objects/jobs/{id}/files", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUploadFileForCustomObjectBulkJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomObjectBulkJobResponse])
                res.custom_object_bulk_job_response = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonErrorResponse])
                res.common_error_response = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonErrorResponse])
                res.common_error_response = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonErrorResponse])
                res.common_error_response = out

        return res

    