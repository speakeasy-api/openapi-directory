import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Attachments:
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

    
    def delete_attachments(self, request: operations.DeleteAttachmentsRequest) -> operations.DeleteAttachmentsResponse:
        r"""Delete an attachment
        Use the Delete Attachment REST request to delete an attachment from a Zuora object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/attachments/{attachment-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAttachmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def get_attachments(self, request: operations.GetAttachmentsRequest) -> operations.GetAttachmentsResponse:
        r"""Retrieve an attachment
        Use the View Attachment REST request to retrieve information about an attachment document.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/attachments/{attachment-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAttachmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetAttachmentResponseType])
                res.get_attachment_response_type = out

        return res

    
    def get_attachments_list(self, request: operations.GetAttachmentsListRequest) -> operations.GetAttachmentsListResponse:
        r"""List attachments by object type and key
        Use the View Attachment REST request to get a list of attachments on an account, an invoice, a subscription, a credit memo, or a debit memo.
        
        **Note**: The Credit and Debit Memos feature is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/attachments/{object-type}/{object-key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAttachmentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetAttachmentsResponseType])
                res.get_attachments_response_type = out

        return res

    
    def post_attachments(self, request: operations.PostAttachmentsRequest) -> operations.PostAttachmentsResponse:
        r"""Create an attachment
        Use the Add Attachment REST request with a multipart/form-data to attach a document file to an Account, a Subscription, an Invoice, a Credit Memo, or a Debit Memo.
        
        **Note**: The Credit and Debit Memos feature is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/attachments"
        
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

        res = operations.PostAttachmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostAttachmentResponseType])
                res.post_attachment_response_type = out

        return res

    
    def put_attachments(self, request: operations.PutAttachmentsRequest) -> operations.PutAttachmentsResponse:
        r"""Update an attachment
        Use the Edit Attachment REST request to make changes to the descriptive fields of an attachment, such as the description and the file name. You cannot change the actual content of the attached file in Zuora. If you need to change the actual content, you need to delete the attachment and add the updated file as a new attachment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/attachments/{attachment-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAttachmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    