import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Files:
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

    
    def file_delete_from_compute_node(self, request: operations.FileDeleteFromComputeNodeRequest) -> operations.FileDeleteFromComputeNodeResponse:
        r"""Deletes the specified task file from the compute node.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/nodes/{nodeId}/files/{fileName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FileDeleteFromComputeNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def file_delete_from_task(self, request: operations.FileDeleteFromTaskRequest) -> operations.FileDeleteFromTaskResponse:
        r"""Deletes the specified task file from the compute node where the task ran.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}/tasks/{taskId}/files/{fileName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FileDeleteFromTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def file_get_from_compute_node(self, request: operations.FileGetFromComputeNodeRequest) -> operations.FileGetFromComputeNodeResponse:
        r"""Returns the content of the specified task file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/nodes/{nodeId}/files/{fileName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FileGetFromComputeNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.file_get_from_compute_node_200_application_json_binary_string = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def file_get_from_task(self, request: operations.FileGetFromTaskRequest) -> operations.FileGetFromTaskResponse:
        r"""Returns the content of the specified task file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}/tasks/{taskId}/files/{fileName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FileGetFromTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.file_get_from_task_200_application_json_binary_string = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def file_get_node_file_properties_from_compute_node(self, request: operations.FileGetNodeFilePropertiesFromComputeNodeRequest) -> operations.FileGetNodeFilePropertiesFromComputeNodeResponse:
        r"""Gets the properties of the specified compute node file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/nodes/{nodeId}/files/{fileName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FileGetNodeFilePropertiesFromComputeNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def file_get_node_file_properties_from_task(self, request: operations.FileGetNodeFilePropertiesFromTaskRequest) -> operations.FileGetNodeFilePropertiesFromTaskResponse:
        r"""Gets the properties of the specified task file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}/tasks/{taskId}/files/{fileName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FileGetNodeFilePropertiesFromTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def file_list_from_compute_node(self, request: operations.FileListFromComputeNodeRequest) -> operations.FileListFromComputeNodeResponse:
        r"""Lists all of the files in task directories on the specified compute node.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/nodes/{nodeId}/files", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FileListFromComputeNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.node_file_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def file_list_from_task(self, request: operations.FileListFromTaskRequest) -> operations.FileListFromTaskResponse:
        r"""Lists the files in a task's directory on its compute node.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}/tasks/{taskId}/files", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FileListFromTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.node_file_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    