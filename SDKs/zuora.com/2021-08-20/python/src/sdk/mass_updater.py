import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class MassUpdater:
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

    
    def get_mass_updater(self, request: operations.GetMassUpdaterRequest) -> operations.GetMassUpdaterResponse:
        r"""List all results of a mass action
        Describes how to get information about the result of a mass action through the REST API. 
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/bulk/{bulk-key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMassUpdaterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetMassUpdateType])
                res.get_mass_update_type = out

        return res

    
    def post_mass_updater(self, request: operations.PostMassUpdaterRequest) -> operations.PostMassUpdaterResponse:
        r"""Perform a mass action
        Describes how to perform a mass action through the REST API. 
        
        Using this API method, you send a multipart/form-data request containing a `.csv` file with data about the mass action you want to perform. Zuora returns a key and then asynchronously processes the mass action. You can use the key to get details about the result of the mass action.
        
        If you want to use this operation to perform the Mass Payment Upload (MPU) mass action, see [Mass Payment Upload](https://knowledgecenter.zuora.com/Billing/Finance/Mass_Updater/Mass_Payment_Upload) for more information.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/bulk"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMassUpdaterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostMassUpdateResponseType])
                res.post_mass_update_response_type = out

        return res

    
    def put_mass_updater(self, request: operations.PutMassUpdaterRequest) -> operations.PutMassUpdaterResponse:
        r"""Stop a mass action
        Describes how to stop a mass action through the REST API. You can stop a mass action when its status is Pending or Processing. After you have stopped a mass action, you can get the mass action result to see details of the mass action.
        
        - If you stop a mass action when its status is Pending, no response file is generated because no records have been processed.
        
        - If you stop a mass action when its status is Processing, a response file is generated. You can check the response file to see which records have been processed and which have not. In the response file, the **Success** column has the value `Y` (successful) or `N` (failed) for processed records, and a blank value for unprocessed records.
        
        Records that have already been processed when a mass action is stopped are not rolled back.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/bulk/{bulk-key}/stop", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutMassUpdaterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    