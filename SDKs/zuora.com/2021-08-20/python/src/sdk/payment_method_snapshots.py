import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class PaymentMethodSnapshots:
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

    
    def object_get_payment_method_snapshot(self, request: operations.ObjectGetPaymentMethodSnapshotRequest) -> operations.ObjectGetPaymentMethodSnapshotResponse:
        r"""CRUD: Retrieve a payment method snapshot
        This REST API reference describes how to retrieve a Payment Method Snapshot.
        
        A Payment Method Snapshot is a copy of the particular Payment Method used in a transaction. If the Payment Method is deleted, the Payment Method Snapshot continues to retain the data used in each of the past transactions.
        
        ## Notes
        The following Payment Method fields are not available in Payment Method Snapshots:
        
        * `Active`
        * `AchAddress1`
        * `AchAddress2`
        * `CreatedById`
        * `CreatedDate`
        * `UpdatedById`
        * `UpdatedDate`
        
        The Payment Method Snapshot field `PaymentMethodId` is not available in Payment Methods.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/object/payment-method-snapshot/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ObjectGetPaymentMethodSnapshotResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyGetPaymentMethodSnapshot])
                res.proxy_get_payment_method_snapshot = out
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

    