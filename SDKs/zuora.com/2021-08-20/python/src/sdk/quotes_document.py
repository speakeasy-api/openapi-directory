import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class QuotesDocument:
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

    
    def post_quotes_document(self, request: operations.PostQuotesDocumentRequest) -> operations.PostQuotesDocumentResponse:
        r"""Generate a quote document
        The `document` call generates a quote document and returns the generated document URL. You can directly access the generated quote file through the returned URL.
        
        The `document` call should be only used from Zuora Quotes. 
        
        ## File Size Limitation 
        The maximum export file size is 2047MB. If you have large data requests that go over this limit, you will get the following 403 HTTP response code from Zuora:
        `security:max-object-size>2047MB</security:max-object-size>`
        
        Submit a request at [Zuora Global Support](http://support.zuora.com/) if you require additional assistance.
        
        We can work with you to determine if large file optimization is an option for you.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/quotes/document"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQuotesDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostQuoteDocResponseType])
                res.post_quote_doc_response_type = out

        return res

    