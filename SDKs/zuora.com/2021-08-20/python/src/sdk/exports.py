import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Exports:
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

    
    def object_get_export(self, request: operations.ObjectGetExportRequest) -> operations.ObjectGetExportResponse:
        r"""CRUD: Retrieve an export
        Use this operation to check the status of a data source export and access the exported data.
        
        When you export data from Zuora, each exported file is available for download for 7 days. Data source exports (Export objects) older than 90 days are automatically deleted.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/object/export/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ObjectGetExportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyGetExport])
                res.proxy_get_export = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyUnauthorizedResponse])
                res.proxy_unauthorized_response = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyNoDataResponse])
                res.proxy_no_data_response = out

        return res

    
    def object_post_export(self, request: operations.ObjectPostExportRequest) -> operations.ObjectPostExportResponse:
        r"""CRUD: Create an export
        Use this operation to create a data source export. After you have created a data source export, use [CRUD: Retrieve an export](https://www.zuora.com/developer/api-reference/#operation/Object_GETExport) to check the status of the data source export and access the exported data.
        
        ## Limits
        
        Zuora system enforces the following limits on data source exports:
        
        * The maximum processing time per export is 3 hours. If an export is executed for longer than 3 hours, it will be killed automatically.
        * The maximum number of concurrent exports is 50 per tenant. Exports in `Pending` and `Processing` status are counted towards the concurrent export limit. Zuora system will reject the subsequent data source export requests once the concurrent export limit is reached.
        
        When you export data from Zuora, each exported file is available for download for 7 days. Data source exports (Export objects) older than 90 days are automatically deleted.
        
        **Note:** This operation supports the [Export ZOQL](https://knowledgecenter.zuora.com/DC_Developers/M_Export_ZOQL) query language. However, this operation does not support some data sources, objects, and fields in Export ZOQL queries. For full compatibility with Export ZOQL, Zuora recommends that you use the [AQuA API](https://knowledgecenter.zuora.com/DC_Developers/T_Aggregate_Query_API) instead of this operation.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/object/export"
        
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

        res = operations.ObjectPostExportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyCreateOrModifyResponse])
                res.proxy_create_or_modify_response = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyBadRequestResponse])
                res.proxy_bad_request_response = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyUnauthorizedResponse])
                res.proxy_unauthorized_response = out

        return res

    