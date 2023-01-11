import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Entities:
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

    
    def delete_entities(self, request: operations.DeleteEntitiesRequest) -> operations.DeleteEntitiesResponse:
        r"""Multi-entity: Delete an entity
        **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
        
        Removes an entity and its sub-entities from a multi-entity hierarchy. You can only remove unprovisioned entities. An error occurred when you remove a provisioned entity.
        
        ## User Access Permission
        You must make the call as a global entity administrator.   
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/entities/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteEntitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeletEntityResponseType])
                res.delet_entity_response_type = out

        return res

    
    def get_entities(self, request: operations.GetEntitiesRequest) -> operations.GetEntitiesResponse:
        r"""Multi-entity: List entities
        **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
        
        
        Retrieves detailed information of certain entities in a multi-entity hierarchy.
        
        
        You can retrieve:
        
         - Provisioned entities
          
         - Unprovisioned entities
          
         - Both provisioned and unprovisioned entities
        
        ## User Access Permission
        
        You can make the call as any entity user.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/entities"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEntitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetEntitiesResponseType])
                res.get_entities_response_type = out

        return res

    
    def get_entity_by_id(self, request: operations.GetEntityByIDRequest) -> operations.GetEntityByIDResponse:
        r"""Multi-entity: Retrieve an entity
        **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
        
        Retrieves detailed information about a specified entity.
        
        ## User Access Permission
        You can make the call as any entity user.     
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/entities/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEntityByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetEntitiesResponseTypeWithID])
                res.get_entities_response_type_with_id = out

        return res

    
    def post_entities(self, request: operations.PostEntitiesRequest) -> operations.PostEntitiesResponse:
        r"""Multi-entity: Create an entity
        **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
        
        Creates an entity in a multi-entity hierarchy.
        
        ## User Access Permission
        You must make the call as a global entity administrator.
        
        ## Notes
        * We recommend that you assign only one administrator to manage the entity hierarchy, because an administrator of the global entity by default can only access to the entities that are created by themselves.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/entities"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostEntitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateEntityResponseType])
                res.create_entity_response_type = out

        return res

    
    def put_entities(self, request: operations.PutEntitiesRequest) -> operations.PutEntitiesResponse:
        r"""Multi-entity: Update an entity
        **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
        
        Edits the following information about an unprovisioned entity:
        
         - Name
         
         - Display name
         
         - Locale
         
         - Timezone
        
        ## User Access Permission
        You must make the call as a global entity administrator.
        
        ## Notes
        * You are not allowed to edit the locale and time zone of the provisioned entities through the REST API.
        * You are not allowed to edit the display name of the global entity.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/entities/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutEntitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateEntityResponseType])
                res.update_entity_response_type = out

        return res

    
    def put_provision_entity(self, request: operations.PutProvisionEntityRequest) -> operations.PutProvisionEntityResponse:
        r"""Multi-entity: Provision an entity
        **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
        
        Provisions an entity. You can only provision an entity if its parent entity is provisioned.
        
        ## User Access Permission
        You must make the call as a global entity administrator. 
        
        ## Notes
        * Zuora does not allow you to remove a provisioned entity from the multi-entity hierarchy. So before you provision an entity, make sure that you put the entity in the correct place in the multi-entity hierarchy. 
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/entities/{id}/provision", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutProvisionEntityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProvisionEntityResponseType])
                res.provision_entity_response_type = out

        return res

    