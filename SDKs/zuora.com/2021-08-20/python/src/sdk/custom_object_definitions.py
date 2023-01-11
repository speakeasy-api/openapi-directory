import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CustomObjectDefinitions:
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

    
    def delete_custom_object_definition_by_type(self, request: operations.DeleteCustomObjectDefinitionByTypeRequest) -> operations.DeleteCustomObjectDefinitionByTypeResponse:
        r"""Delete a custom object definition
        Deletes the custom object definition for the provided type.
        
        **Note:** A custom object definition can only be deleted if no record of this custom object type exists.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/objects/definitions/default/{object}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCustomObjectDefinitionByTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                res.delete_custom_object_definition_by_type_200_application_json_uri_string = r.content

        return res

    
    def get_all_custom_object_definitions_in_namespace(self, request: operations.GetAllCustomObjectDefinitionsInNamespaceRequest) -> operations.GetAllCustomObjectDefinitionsInNamespaceResponse:
        r"""List custom object definitions
        Get all custom objects definitions for a given tenant. If you want to copy all the existing custom objects from an old tenant to a new tenant, you can call this operation in your old tenant and then use its response directly as the request of the [Create custom object definitions](https://www.zuora.com/developer/api-reference/#operation/POST_CustomObjectDefinitions) call in the new tenant to import all the custom objects from the old tenant.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/objects/definitions/default"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllCustomObjectDefinitionsInNamespaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetAllCustomObjectDefinitionsInNamespaceResponse])
                res.get_all_custom_object_definitions_in_namespace_response = out

        return res

    
    def get_custom_object_definition_by_type(self, request: operations.GetCustomObjectDefinitionByTypeRequest) -> operations.GetCustomObjectDefinitionByTypeResponse:
        r"""Retrieve a custom object definition
        Retrieves the custom object definition by type for the given tenant.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/objects/definitions/default/{object}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomObjectDefinitionByTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomObjectDefinition])
                res.custom_object_definition = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonErrorResponse])
                res.common_error_response = out

        return res

    
    def post_custom_object_definitions(self, request: operations.PostCustomObjectDefinitionsRequest) -> operations.PostCustomObjectDefinitionsResponse:
        r"""Create custom object definitions
        You can post custom object definitions with the request body schema described below. 
        
        This operation also allows you to use the [List custom object definitions](https://www.zuora.com/developer/api-reference/#operation/GET_AllCustomObjectDefinitionsInNamespace) response schema as its request schema. If you want to copy all the existing custom objects from an old tenant to a new tenant, you can make a [List custom object definitions](https://www.zuora.com/developer/api-reference/#operation/GET_AllCustomObjectDefinitionsInNamespace) call in your old tenant and then use its response directly as the request of this operation in the new tenant to import all the custom objects from the old tenant.
        
        The `label` field is the UI label of the custom object. The `object` field contains the API Name of the custom object.
        
        ## Limitations 
        
        This custom object definition has the following limitations:
        
        * The maximum number of characters for the Custom Object API Name (`object`) is 64.
        * The maximum number of characters for the Custom Object Label (`label`) is	64.
        * The maximum number of characters for the Custom Object Description 250.
        * The maximum number of custom fields in an custom object	is 50.
        * The maximum number of characters for the custom field API name is	64.
        * The maximum number of characters for the custom field label (`label`) is	64.
        * The maximum number of characters for the custom field Description	is 250.
        * The maximum number of picklist options is 250.
        * The default maximum number of characters for the Text field is 512. You can configure the max length up to 4,096 characters when creating or updating the custom object definition via API.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/objects/definitions/default"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCustomObjectDefinitionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetAllCustomObjectDefinitionsInNamespaceResponse])
                res.get_all_custom_object_definitions_in_namespace_response = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonErrorResponse])
                res.common_error_response = out

        return res

    
    def post_update_custom_object_definition(self, request: operations.PostUpdateCustomObjectDefinitionRequest) -> operations.PostUpdateCustomObjectDefinitionResponse:
        r"""Update a custom object definition
        Updates a custom object definition by posting migration resource to initiate the migration of definitions.
        
        ## Limitations 
        
        Updating custom field definition has the following limitations:
        
        * You can only have one action per update request.
        * You cannot delete fields from custom objects that contain records.
        * You can only add required fields to custom objects with no records.
        * You can change optional fields to required only on the custom objects with no records. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/objects/migrations"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUpdateCustomObjectDefinitionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.MigrationUpdateCustomObjectDefinitionsResponse])
                res.migration_update_custom_object_definitions_response = out

        return res

    