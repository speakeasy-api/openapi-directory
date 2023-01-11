import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Workflows:
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

    
    def delete_workflow(self, request: operations.DeleteWorkflowRequest) -> operations.DeleteWorkflowResponse:
        r"""Delete a workflow
        Deletes a specific workflow by its ID.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workflows/{workflow_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWorkflowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteWorkflowSuccess])
                res.delete_workflow_success = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteWorkflowError])
                res.delete_workflow_error = out

        return res

    
    def get_workflow(self, request: operations.GetWorkflowRequest) -> operations.GetWorkflowResponse:
        r"""Retrieve a workflow
        Retrieves information about a specific workflow by its ID.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workflows/{workflow_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWorkflowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetWorkflowResponse])
                res.get_workflow_response = out

        return res

    
    def get_workflow_export(self, request: operations.GetWorkflowExportRequest) -> operations.GetWorkflowExportResponse:
        r"""Export a workflow
        Export a Workflow in a JSON document. This document can be used to create a copy of this workflow.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workflows/{workflow_id}/export", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWorkflowExportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetWorkflowExport200ApplicationJSON])
                res.get_workflow_export_200_application_json_object = out

        return res

    
    def get_workflows(self, request: operations.GetWorkflowsRequest) -> operations.GetWorkflowsResponse:
        r"""List workflows
        Retrieves a list of workflows available in your Zuora tenant.      
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/workflows"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWorkflowsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetWorkflowsResponse])
                res.get_workflows_response = out

        return res

    
    def get_workflows_task(self, request: operations.GetWorkflowsTaskRequest) -> operations.GetWorkflowsTaskResponse:
        r"""Retrieve a workflow task
        Retrieves a specific workflow task by its ID.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workflows/tasks/{task_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWorkflowsTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Task])
                res.task = out

        return res

    
    def get_workflows_tasks(self, request: operations.GetWorkflowsTasksRequest) -> operations.GetWorkflowsTasksResponse:
        r"""List workflow tasks
        Retrieves a list of workflow tasks available in your Zuora tenant.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/workflows/tasks"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWorkflowsTasksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.TasksResponse])
                res.tasks_response = out

        return res

    
    def get_workflows_usages(self, request: operations.GetWorkflowsUsagesRequest) -> operations.GetWorkflowsUsagesResponse:
        r"""Retrieve workflow task usage
        Gets workflow task usage sorted by day within a specified time frame.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/workflows/metrics.json"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWorkflowsUsagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.UsagesResponse])
                res.usages_response = out

        return res

    
    def patch_update_workflow(self, request: operations.PatchUpdateWorkflowRequest) -> operations.PatchUpdateWorkflowResponse:
        r"""Update a workflow definition
        Updates the definition of a specific workflow by its ID, which allows you to [configure the settings of a workflow](https://knowledgecenter.zuora.com/CE_Workflow/Using_Workflow/B_Configure_a_Workflow) via API.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workflows/{workflow_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchUpdateWorkflowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetWorkflowSetupResponse])
                res.get_workflow_setup_response = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteWorkflowError])
                res.delete_workflow_error = out
        elif r.status_code == 422:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationErrors])
                res.validation_errors = out

        return res

    
    def post_run_workflow(self, request: operations.PostRunWorkflowRequest) -> operations.PostRunWorkflowResponse:
        r"""Run a workflow
        Run a specified workflow. In the request body, you can include parameters that you want to pass to the workflow. For the parameters to be recognized and picked up by tasks in the workflow, you need to define the parameters first. 
        
        To learn about how to define parameters, see [Configure the settings of a workflow](https://knowledgecenter.zuora.com/CE_Workflow/Using_Workflow/B_Configure_a_Workflow).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workflows/{workflow_id}/run", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRunWorkflowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.WorkflowInstance])
                res.workflow_instance = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostRunWorkflow400ApplicationJSON])
                res.post_run_workflow_400_application_json_object = out
        elif r.status_code == 406:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostRunWorkflow406ApplicationJSON])
                res.post_run_workflow_406_application_json_object = out
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostRunWorkflow409ApplicationJSON])
                res.post_run_workflow_409_application_json_object = out

        return res

    
    def post_workflow_import(self, request: operations.PostWorkflowImportRequest) -> operations.PostWorkflowImportResponse:
        r"""Import a workflow
        Creates a copy of a workflow using the exported JSON document of the original workflow.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/workflows/import"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWorkflowImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Workflow])
                res.workflow = out

        return res

    
    def post_workflows_task_rerun(self, request: operations.PostWorkflowsTaskRerunRequest) -> operations.PostWorkflowsTaskRerunResponse:
        r"""Rerun a workflow task
        Reruns a specific workflow task by its ID.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workflows/tasks/{task_id}/rerun", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWorkflowsTaskRerunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.Task])
                res.task = out

        return res

    
    def put_workflows_tasks_update(self, request: operations.PutWorkflowsTasksUpdateRequest) -> operations.PutWorkflowsTasksUpdateResponse:
        r"""Update workflow tasks
        Updates a group of workflow tasks.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/workflows/tasks/batch_update"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutWorkflowsTasksUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.TasksResponse])
                res.tasks_response = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequestResponse])
                res.bad_request_response = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequestResponse])
                res.bad_request_response = out

        return res

    