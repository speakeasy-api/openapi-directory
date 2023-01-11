import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class PaymentGatewayReconciliation:
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

    
    def post_reconcile_refund(self, request: operations.PostReconcileRefundRequest) -> operations.PostReconcileRefundResponse:
        r"""Reconcile a refund
        Reconciles a refund when receiving the gateway reconciliation request or event.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/refunds/{refund-id}/reconcile", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostReconcileRefundResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostReconcileRefundResponse])
                res.post_reconcile_refund_response = out

        return res

    
    def post_reject_payment(self, request: operations.PostRejectPaymentRequest) -> operations.PostRejectPaymentResponse:
        r"""Reject a payment
        Sets the Payment status to \"Rejected\", creates a refund for the payment amount, and returns the Refund object as response.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/gateway-settlement/payments/{payment-id}/reject", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRejectPaymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostRejectPaymentResponse])
                res.post_reject_payment_response = out

        return res

    
    def post_reverse_payment(self, request: operations.PostReversePaymentRequest) -> operations.PostReversePaymentResponse:
        r"""Reverse a payment
        Sets the Payment status to \"Reversed\", creates a refund for the amount specified in the request, and returns the Refund object as response.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/gateway-settlement/payments/{payment-id}/chargeback", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostReversePaymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostReversePaymentResponse])
                res.post_reverse_payment_response = out

        return res

    
    def post_settle_payment(self, request: operations.PostSettlePaymentRequest) -> operations.PostSettlePaymentResponse:
        r"""Settle a payment
        Sets the Payment status to \"Settled\" and returns the Payment object as response.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/gateway-settlement/payments/{payment-id}/settle", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSettlePaymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostSettlePaymentResponse])
                res.post_settle_payment_response = out

        return res

    