import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Catalog:
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

    
    def get_catalog(self, request: operations.GetCatalogRequest) -> operations.GetCatalogResponse:
        r"""List all products
        Retrieves the entire product catalog, including all products, features, and their corresponding product rate plans, charges. Products are returned in reverse chronological order on the `UpdatedDate` field. 
        
        With product rate plans and rate plan charges, the REST API has a maximum array size. 
        
        For a use case of this operation, see [Retrieve the product catalog](https://www.zuora.com/developer/api-guides/#Retrieve-the-product-catalog).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/catalog/products"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCatalogResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetCatalogType])
                res.get_catalog_type = out

        return res

    
    def get_product(self, request: operations.GetProductRequest) -> operations.GetProductResponse:
        r"""Retrieve a product
        Retrieves detailed information about a specific product, including information about its product rate plans and charges. 
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/catalog/product/{product-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_product_type = out

        return res

    
    def post_catalog(self, request: operations.PostCatalogRequest) -> operations.PostCatalogResponse:
        r"""Multi-entity: Share a product with an entity
        **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
        
        Shares a product with a target entity. Zuora synchronizes the shared products to the target entity after sharing. For more information about product sharing, see [Products Sharing Across Entities](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/C_Business_Objects_Sharing_Across_Entities/B_Products_Sharing_Across_Entities).
        
        Note that:
        
        - You must finish all the [prerequisites](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/C_Business_Objects_Sharing_Across_Entities/B_Products_Sharing_Across_Entities/Share_Products) before sharing products with other entities. 
        
        - Only source entity administrators have permission to share products with other entities. You must make the call as a source entity administrator.
        
        - Currently, you can only share a product with one entity at a time. An error occurs if you try to share a product to more than one entity.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/catalog/products/{product-id}/share", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCatalogResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    