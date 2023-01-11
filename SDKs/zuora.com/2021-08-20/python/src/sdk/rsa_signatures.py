import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class RsaSignatures:
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

    
    def post_decrypt_rsa_signatures(self, request: operations.PostDecryptRsaSignaturesRequest) -> operations.PostDecryptRsaSignaturesResponse:
        r"""Decrypt an RSA signature
        The REST API used in Payment Pages 2.0 are CORS (Cross-Origin Resource Sharing) enabled and therefore requires a digital signature. You use rsa_signatures to generate the required digital signature and token for a Payment Pages 2.0 form, and then you use the decrypt REST service to decrypt the signature to validate the signature and key.
        
        This REST service should be used only when you implement Payment Pages 2.0. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/rsa-signatures/decrypt"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDecryptRsaSignaturesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostDecryptResponseType])
                res.post_decrypt_response_type = out

        return res

    
    def post_rsa_signatures(self, request: operations.PostRsaSignaturesRequest) -> operations.PostRsaSignaturesResponse:
        r"""Generate an RSA signature
        The REST API used in Payment Pages 2.0 are CORS (Cross-Origin Resource Sharing) enabled and therefore requires a digital signature. The POST rsa_signatures call generates and returns the required digital signature and token for a Payment Pages 2.0 form. You need to pass the generated signature to your client for it to access Payment Pages 2.0. 
            
        This REST service should be used only when you implement Payment Pages 2.0. 
        
        **Note:** To avoid potential credit card fraud attacks, you should secure your Payment Pages from being accessed by fraudulent users before you issue client-side digital signatures and tokens. See [Manage Token Issuance](https://knowledgecenter.zuora.com/CB_Billing/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Manage_Token_Issuance) for more information.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/rsa-signatures"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRsaSignaturesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostrsaSignatureResponseType])
                res.postrsa_signature_response_type = out

        return res

    