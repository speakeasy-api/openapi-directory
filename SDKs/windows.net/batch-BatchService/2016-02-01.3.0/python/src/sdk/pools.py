import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Pools:
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

    
    def pool_add(self, request: operations.PoolAddRequest) -> operations.PoolAddResponse:
        r"""Adds a pool to the specified account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/pools"
        
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

        res = operations.PoolAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_delete(self, request: operations.PoolDeleteRequest) -> operations.PoolDeleteResponse:
        r"""Deletes a pool from the specified account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PoolDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_disable_auto_scale(self, request: operations.PoolDisableAutoScaleRequest) -> operations.PoolDisableAutoScaleResponse:
        r"""Disables automatic scaling for a pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/disableautoscale", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PoolDisableAutoScaleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_enable_auto_scale(self, request: operations.PoolEnableAutoScaleRequest) -> operations.PoolEnableAutoScaleResponse:
        r"""Enables automatic scaling for a pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/enableautoscale", request.path_params)
        
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

        res = operations.PoolEnableAutoScaleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_evaluate_auto_scale(self, request: operations.PoolEvaluateAutoScaleRequest) -> operations.PoolEvaluateAutoScaleResponse:
        r"""Gets the result of evaluating an automatic scaling formula on the pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/evaluateautoscale", request.path_params)
        
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

        res = operations.PoolEvaluateAutoScaleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.auto_scale_run = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_exists(self, request: operations.PoolExistsRequest) -> operations.PoolExistsResponse:
        r"""Gets basic properties of a pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PoolExistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_get(self, request: operations.PoolGetRequest) -> operations.PoolGetResponse:
        r"""Gets information about the specified pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PoolGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_pool = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_get_all_pools_lifetime_statistics(self, request: operations.PoolGetAllPoolsLifetimeStatisticsRequest) -> operations.PoolGetAllPoolsLifetimeStatisticsResponse:
        r"""Gets lifetime summary statistics for all of the pools in the specified account. Statistics are aggregated across all pools that have ever existed in the account, from account creation to the last update time of the statistics.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lifetimepoolstats"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PoolGetAllPoolsLifetimeStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.pool_statistics = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_list(self, request: operations.PoolListRequest) -> operations.PoolListResponse:
        r"""Lists all of the pools in the specified account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/pools"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PoolListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_pool_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_list_pool_usage_metrics(self, request: operations.PoolListPoolUsageMetricsRequest) -> operations.PoolListPoolUsageMetricsResponse:
        r"""Lists the usage metrics, aggregated by pool across individual time intervals, for the specified account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/poolusagemetrics"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PoolListPoolUsageMetricsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.pool_list_pool_usage_metrics_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_patch(self, request: operations.PoolPatchRequest) -> operations.PoolPatchResponse:
        r"""Updates the properties of a pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}", request.path_params)
        
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

        res = operations.PoolPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_resize(self, request: operations.PoolResizeRequest) -> operations.PoolResizeResponse:
        r"""Changes the number of compute nodes that are assigned to a pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/resize", request.path_params)
        
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

        res = operations.PoolResizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_stop_resize(self, request: operations.PoolStopResizeRequest) -> operations.PoolStopResizeResponse:
        r"""Stops an ongoing resize operation on the pool. This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/stopresize", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PoolStopResizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_update_properties(self, request: operations.PoolUpdatePropertiesRequest) -> operations.PoolUpdatePropertiesResponse:
        r"""Updates the properties of a pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/updateproperties", request.path_params)
        
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

        res = operations.PoolUpdatePropertiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_upgrade_os(self, request: operations.PoolUpgradeOsRequest) -> operations.PoolUpgradeOsResponse:
        r"""Upgrades the operating system of the specified pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/upgradeos", request.path_params)
        
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

        res = operations.PoolUpgradeOsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    