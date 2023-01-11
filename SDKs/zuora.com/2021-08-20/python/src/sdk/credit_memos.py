import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class CreditMemos:
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

    
    def delete_credit_memo(self, request: operations.DeleteCreditMemoRequest) -> operations.DeleteCreditMemoResponse:
        r"""Delete a credit memo
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Deletes a credit memo. Only credit memos with the Cancelled status can be deleted. 
        
        You can delete a credit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/creditmemos/{creditMemoId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCreditMemoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def get_credit_memo(self, request: operations.GetCreditMemoRequest) -> operations.GetCreditMemoResponse:
        r"""Retrieve a credit memo
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Retrieves the information about a specific credit memo.
        
        For a use case of this operation, see [Get credit memo](https://www.zuora.com/developer/api-guides/#Get-credit-memo).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/creditmemos/{creditMemoId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCreditMemoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_credit_memo_type = out

        return res

    
    def get_credit_memo_item(self, request: operations.GetCreditMemoItemRequest) -> operations.GetCreditMemoItemResponse:
        r"""Retrieve a credit memo item
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
        
        Retrieves the information about a specific item of a credit memo. A credit memo item is a single line item in a credit memo.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/creditmemos/{creditMemoId}/items/{cmitemid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCreditMemoItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_credit_memo_item_type = out

        return res

    
    def get_credit_memo_item_part(self, request: operations.GetCreditMemoItemPartRequest) -> operations.GetCreditMemoItemPartResponse:
        r"""Retrieve a credit memo part item
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
        
        Retrieves the information about a specific credit memo part item.  A credit memo part item is a single line item in a credit memo part. A credit memo part can consist of several different types of items.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/creditmemos/{creditMemoId}/parts/{partid}/itemparts/{itempartid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCreditMemoItemPartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetCreditMemoItemPartType])
                res.get_credit_memo_item_part_type = out

        return res

    
    def get_credit_memo_item_parts(self, request: operations.GetCreditMemoItemPartsRequest) -> operations.GetCreditMemoItemPartsResponse:
        r"""List all credit memo part items
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Retrieves the information about all items of a credit memo part. A credit memo part item is a single line item in a credit memo part. A credit memo part can consist of several different types of items.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/creditmemos/{creditMemoId}/parts/{partid}/itemparts", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCreditMemoItemPartsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetCreditMemoItemPartsCollectionType])
                res.get_credit_memo_item_parts_collection_type = out

        return res

    
    def get_credit_memo_items(self, request: operations.GetCreditMemoItemsRequest) -> operations.GetCreditMemoItemsResponse:
        r"""List credit memo items
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Retrieves the information about all items of a credit memo. A credit memo item is a single line item in a credit memo. 
        
        ### Filtering
        
        You can use query parameters to restrict the data returned in the response. Each query parameter corresponds to one field in the response body.
        
        If the value of a filterable field is string, you can set the corresponding query parameter to `null` when filtering. Then, you can get the response data with this field value being `null`. 
        
        Examples:
            
          - /v1/creditmemos/402890245c7ca371015c7cb40ac30015/items?amount=100
          
          - /v1/creditmemos/402890245c7ca371015c7cb40ac30015/items?amount=100&sort=createdDate
            
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/creditmemos/{creditMemoId}/items", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCreditMemoItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetCreditMemoItemsListType])
                res.get_credit_memo_items_list_type = out

        return res

    
    def get_credit_memo_part(self, request: operations.GetCreditMemoPartRequest) -> operations.GetCreditMemoPartResponse:
        r"""Retrieve a credit memo part
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Retrieves the information about a specific credit memo part. A credit memo can consist of an unapplied part, and several parts applied to invoices and debit memos.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/creditmemos/{creditMemoId}/parts/{partid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCreditMemoPartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetCreditMemoPartType])
                res.get_credit_memo_part_type = out

        return res

    
    def get_credit_memo_parts(self, request: operations.GetCreditMemoPartsRequest) -> operations.GetCreditMemoPartsResponse:
        r"""List all parts of a credit memo
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Retrieves the information about all parts of a credit memo. A credit memo can consist of an unapplied part, and several parts applied to invoices and debit memos. You can use this operation to get all the applied and unapplied portions of a credit memo.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/creditmemos/{creditMemoId}/parts", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCreditMemoPartsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetCreditMemoPartsCollectionType])
                res.get_credit_memo_parts_collection_type = out

        return res

    
    def get_credit_memos(self, request: operations.GetCreditMemosRequest) -> operations.GetCreditMemosResponse:
        r"""List credit memos
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Retrieves the information about all credit memos. 
        
        For a use case of this operation, see [Get credit memo](https://www.zuora.com/developer/api-guides/#Get-credit-memo).
        
        
        ### Filtering
        
        You can use query parameters to restrict the data returned in the response. Each query parameter corresponds to one field in the response body.
        
        If the value of a filterable field is string, you can set the corresponding query parameter to `null` when filtering. Then, you can get the response data with this field value being `null`. 
          
        Examples:
        
        - /v1/creditmemos?status=Posted
        
        - /v1/creditmemos?referredInvoiceId=null&status=Draft
        
        - /v1/creditmemos?status=Posted&type=External&sort=+number
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/creditmemos"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCreditMemosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetCreditMemoCollectionType])
                res.get_credit_memo_collection_type = out

        return res

    
    def get_taxation_items_of_credit_memo_item(self, request: operations.GetTaxationItemsOfCreditMemoItemRequest) -> operations.GetTaxationItemsOfCreditMemoItemResponse:
        r"""List all taxation items of a credit memo item
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
        
        Retrieves information about the taxation items of a specific credit memo item. 
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/creditmemos/{creditMemoId}/items/{cmitemid}/taxation-items", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTaxationItemsOfCreditMemoItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTaxationItemsOfCreditMemoItem200ApplicationJSON])
                res.get_taxation_items_of_credit_memo_item_200_application_json_object = out

        return res

    
    def post_cm_taxation_items(self, request: operations.PostCmTaxationItemsRequest) -> operations.PostCmTaxationItemsResponse:
        r"""Create taxation items for a credit memo
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
        
        Creates taxation items for a credit memo.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/creditmemos/{creditMemoId}/taxationitems", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCmTaxationItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTaxationItemListType])
                res.get_taxation_item_list_type = out

        return res

    
    def post_credit_memo_from_prpc(self, request: operations.PostCreditMemoFromPrpcRequest) -> operations.PostCreditMemoFromPrpcResponse:
        r"""Create a credit memo from a charge
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Creates an ad-hoc credit memo from a product rate plan charge. Zuora supports the creation of credit memos from any type of product rate plan charge. The charges can also have any amount and any charge model, except for discout charge models. 
        
        When credit memos are created from product rate plan charges, the specified amount with decimal places is now validated based on the decimal places supported by each currency.
        
        You can create a credit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
        
        For a use case of this operation, see [Create credit memo](https://www.zuora.com/developer/api-guides/#Create-credit-memo).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/creditmemos"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreditMemoFromPrpcResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_credit_memo_type = out

        return res

    
    def post_credit_memo_pdf(self, request: operations.PostCreditMemoPdfRequest) -> operations.PostCreditMemoPdfResponse:
        r"""Generate a credit memo PDF file
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Creates a PDF file for a specified credit memo. To access the generated PDF file, you can download it by clicking **View PDF** on the detailed credit memo page through the Zuora UI.
        
        This REST API operation can be used only if you have the billing document file generation feature and the Billing user permission \"Regenerate PDF\" enabled.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/creditmemos/{creditMemoId}/pdfs", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreditMemoPdfResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostMemoPdfResponse])
                res.post_memo_pdf_response = out

        return res

    
    def post_email_credit_memo(self, request: operations.PostEmailCreditMemoRequest) -> operations.PostEmailCreditMemoResponse:
        r"""Email a credit memo
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Sends a posted credit memo to the specified email addresses manually.
        
        
        
        ## Notes
          - You must activate the **Email Credit Memo | Manually email Credit Memo** notification before emailing credit memos. To include the credit memo PDF in the email, select the **Include Credit Memo PDF** check box in the **Edit notification** dialog from the Zuora UI. See [Create and Edit Notifications](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/C_Create_Notifications#section_2) for more information.
        
        
          - Zuora sends the email messages based on the email template you set. You can set the email template to use in the **Delivery Options** panel of the **Edit notification** dialog from the Zuora UI. By default, the **Manual Email for Credit Memo Default Template** template is used. See [Create and Edit Email Templates](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/Create_Email_Templates) for more information.
        
        
          - The credit memos are sent only to the work email addresses or personal email addresses of the Bill To contact if the following conditions are all met:
        
            * The `useEmailTemplateSetting` field is set to `false`.
            * The email addresses are not specified in the `emailAddresses` field.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/creditmemos/{creditMemoId}/emails", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostEmailCreditMemoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def post_refund_credit_memo(self, request: operations.PostRefundCreditMemoRequest) -> operations.PostRefundCreditMemoResponse:
        r"""Refund a credit memo
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Refunds a full or partial posted credit memo to your customers. Only the amount of unapplied part could be refunded. 
        
        You can refund a credit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
        
        When you refund a credit memo, the total number of credit memo items to be refunded must be less than or equal to 10,000.
        
        For a use case of this operation, see [Refund processing](https://www.zuora.com/developer/api-guides/#Refund-processing).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/creditmemos/{creditmemoId}/refunds", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRefundCreditMemoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_refund_credit_memo_type = out

        return res

    
    def post_upload_file_for_credit_memo(self, request: operations.PostUploadFileForCreditMemoRequest) -> operations.PostUploadFileForCreditMemoResponse:
        r"""Upload a file for a credit memo
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Uploads an externally generated PDF file for a credit memo that is in Draft or Posted status.
        
        To use this operation, you must enable the Modify Modify Credit Memo permission. See [Billing Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
        
        This operation has the following restrictions:
        - Only the PDF file format is supported.
        - The maximum size of the PDF file to upload is 4 MB.
        - A maximum of 50 PDF files can be uploaded for one credit memo.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/creditmemos/{creditMemoId}/files", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUploadFileForCreditMemoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostUploadFileResponse])
                res.post_upload_file_response = out

        return res

    
    def put_apply_credit_memo(self, request: operations.PutApplyCreditMemoRequest) -> operations.PutApplyCreditMemoResponse:
        r"""Apply a credit memo
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
        
        Applies a posted credit memo to one or more invoices and debit memos. 
        
        You can apply a credit memo to an invoice or a debit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
        
        When you apply a credit memo, the total number of credit memo items and the items that credit memo items to be applied to must be less than or equal to 10,000.
        
        If the limit is hit, you can follow the following instructions:
        
        - If you want to apply one credit memo to multiple invoices or debit memos, decrease the number of invoices or debit memos in the request.
        - If you want to apply one credit memo to a single invoice or debit memo with a large volume of items, you have to specify invoice items or debit memo items in the request. The maximum number of invoice items or debit memo items that you can specify in the request is 1,000.
        - If a credit memo has a large volume of items, you have to specify credit memo items in the request. The maximum number of credit memo items that you can specify in the request is 1,000.
                
        If the Proration application rule is used, when applying credit memos, the following quantity must be less than or equal to 10,000: 
        
        (number of invoice items + number of debit memo items) * number of credit memo items
        
        Otherwise, the First In First Out rule will be used instead of the Proration rule.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/creditmemos/{creditMemoId}/apply", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutApplyCreditMemoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_credit_memo_type = out

        return res

    
    def put_cancel_credit_memo(self, request: operations.PutCancelCreditMemoRequest) -> operations.PutCancelCreditMemoResponse:
        r"""Cancel a credit memo
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Cancels a credit memo. Only credit memos with the Draft status can be cancelled. 
        
        You can cancel a credit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/creditmemos/{creditMemoId}/cancel", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCancelCreditMemoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_credit_memo_type = out

        return res

    
    def put_post_credit_memo(self, request: operations.PutPostCreditMemoRequest) -> operations.PutPostCreditMemoResponse:
        r"""Post a credit memo
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Posts a credit memo to activate it. You can post credit memos only if you have the [Billing permissions](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles#Billing_Permissions).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/creditmemos/{creditMemoId}/post", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPostCreditMemoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_credit_memo_type = out

        return res

    
    def put_unapply_credit_memo(self, request: operations.PutUnapplyCreditMemoRequest) -> operations.PutUnapplyCreditMemoResponse:
        r"""Unapply a credit memo
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
        
        Unapplies an applied credit memo from one or more invoices and debit memos. The full applied amount from invoices and debit memos is transferred into the unapplied amount of the credit memo. 
        
        You can unapply a credit memo from an invoice or a debit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
        
        When you unapply a credit memo, the total number of credit memo items and the items that credit memo items to be unapplied from must be less than or equal to 10,000.
        
        If the limit is hit, you can follow the following instructions:
        
        - If you want to unapply one credit memo without specifying invoices or debit memos, you have to specify the invoices or debit memos in the request.
        - If you want to unapply one credit memo from multiple specified invoices or debit memos, decrease the number of invoices or debit memos in the request.
        - If you want to unapply one credit memo from a single invoice or debit memo with a large volume of items, you have to specify invoice items or debit memo items in the request. The maximum number of invoice items or debit memo items that you can specify in the request is 1,000.
        - If a credit memo has a large volume of items, you have to specify credit memo items in the request. The maximum number of credit memo items that you can specify in the request is 1,000.
        
        
        If the Proration application rule is used, when unapplying credit memos, the following quantity must be less than or equal to 10,000: 
        
        (number of invoice items + number of debit memo items) * number of credit memo items
        
        Otherwise, the First In First Out rule will be used instead of the Proration rule.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/creditmemos/{creditMemoId}/unapply", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUnapplyCreditMemoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_credit_memo_type = out

        return res

    
    def put_unpost_credit_memo(self, request: operations.PutUnpostCreditMemoRequest) -> operations.PutUnpostCreditMemoResponse:
        r"""Unpost a credit memo
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Unposts a credit memo that is in Posted status. If a credit memo has been applied or refunded, you are not allowed to unpost it. After a credit memo is unposted, its status becomes Draft. 
        
        You can unpost credit memos only if you have the [Billing permissions](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles#Billing_Permissions).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/creditmemos/{creditMemoId}/unpost", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUnpostCreditMemoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_credit_memo_type = out

        return res

    
    def put_update_credit_memo(self, request: operations.PutUpdateCreditMemoRequest) -> operations.PutUpdateCreditMemoResponse:
        r"""Update a credit memo
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Updates the basic and finance information about a credit memo. Currently, Zuora supports updating tax-exclusive memo items, but does not support updating tax-inclusive memo items. 
        
        If the amount of a memo item is updated, the tax will be recalculated in the following conditions:
          - The memo is created from a product rate plan charge and you use Avalara to calculate the tax.
          - The memo is created from an invoice and you use Avalara or Zuora Tax to calculate the tax.
        
        You can update a credit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/creditmemos/{creditMemoId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUpdateCreditMemoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_credit_memo_type = out

        return res

    