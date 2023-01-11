import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class DebitMemos:
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

    
    def delete_debit_memo(self, request: operations.DeleteDebitMemoRequest) -> operations.DeleteDebitMemoResponse:
        r"""Delete a debit memo
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Deletes a debit memo. Only debit memos with the Cancelled status can be deleted. 
        
        You can delete a debit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/debitmemos/{debitMemoId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDebitMemoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def get_debit_memo(self, request: operations.GetDebitMemoRequest) -> operations.GetDebitMemoResponse:
        r"""Retrieve a debit memo
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Retrieves the information about a specific debit memo.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/debitmemos/{debitMemoId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDebitMemoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_debit_memo_type = out

        return res

    
    def get_debit_memo_application_parts(self, request: operations.GetDebitMemoApplicationPartsRequest) -> operations.GetDebitMemoApplicationPartsResponse:
        r"""List all application parts of a debit memo
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Retrieves information about the payments or credit memos that are applied to a specified debit memo.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/debitmemos/{debitMemoId}/application-parts", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDebitMemoApplicationPartsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetDebitMemoApplicationPartCollectionType])
                res.get_debit_memo_application_part_collection_type = out

        return res

    
    def get_debit_memo_item(self, request: operations.GetDebitMemoItemRequest) -> operations.GetDebitMemoItemResponse:
        r"""Retrieve a debit memo item
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
        
        Retrieves information about a specific item of a debit memo. A debit memo item is a single line item in a debit memo.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/debitmemos/{debitMemoId}/items/{dmitemid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDebitMemoItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_debit_memo_item_type = out

        return res

    
    def get_debit_memo_items(self, request: operations.GetDebitMemoItemsRequest) -> operations.GetDebitMemoItemsResponse:
        r"""List debit memo items
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Retrieves the information about all items of a debit memo. A debit memo item is a single line item in a debit memo. 
        
        ### Filtering
        
        You can use query parameters to restrict the data returned in the response. Each query parameter corresponds to one field in the response body.
        
        If the value of a filterable field is string, you can set the corresponding query parameter to `null` when filtering. Then, you can get the response data with this field value being `null`. 
        
        Examples:
        
        - /v1/debitmemos/402890245c7ca371015c7cb40b28001f/items?amount=100
        
        - /v1/debitmemos/402890245c7ca371015c7cb40b28001f/items?amount=100&sort=createdDate
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/debitmemos/{debitMemoId}/items", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDebitMemoItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetDebitMemoItemCollectionType])
                res.get_debit_memo_item_collection_type = out

        return res

    
    def get_debit_memos(self, request: operations.GetDebitMemosRequest) -> operations.GetDebitMemosResponse:
        r"""List debit memos
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
        
        Retrieves the information about all debit memos associated with all customer accounts.
        
        ### Filtering
        
        You can use query parameters to restrict the data returned in the response. Each query parameter corresponds to one field in the response body.
        
        If the value of a filterable field is string, you can set the corresponding query parameter to `null` when filtering. Then, you can get the response data with this field value being `null`. 
        
        Examples:
        
        - /v1/debitmemos?status=Posted
        
        - /v1/debitmemos?referredInvoiceId=null&status=Draft
        
        - /v1/debitmemos?status=Posted&type=External&sort=+number
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/debitmemos"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDebitMemosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetDebitMemoCollectionType])
                res.get_debit_memo_collection_type = out

        return res

    
    def get_taxation_items_of_debit_memo_item(self, request: operations.GetTaxationItemsOfDebitMemoItemRequest) -> operations.GetTaxationItemsOfDebitMemoItemResponse:
        r"""List all taxation items of a debit memo item
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
        
        Retrieves information about the taxation items of a specific debit memo item.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/debitmemos/{debitMemoId}/items/{dmitemid}/taxation-items", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTaxationItemsOfDebitMemoItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTaxationItemsOfDebitMemoItem200ApplicationJSON])
                res.get_taxation_items_of_debit_memo_item_200_application_json_object = out

        return res

    
    def post_dm_taxation_items(self, request: operations.PostDmTaxationItemsRequest) -> operations.PostDmTaxationItemsResponse:
        r"""Create taxation items for a debit memo
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
        
        Creates taxation items for a debit memo.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/debitmemos/{debitMemoId}/taxationitems", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDmTaxationItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTaxationItemListType])
                res.get_taxation_item_list_type = out

        return res

    
    def post_debit_memo_collect(self, request: operations.PostDebitMemoCollectRequest) -> operations.PostDebitMemoCollectResponse:
        r"""Collect a posted debit memo
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
        
        This API operation provides an easy way to let the client-side to collect an existing posted debit memo.
        It supports the following steps:
          1. Apply unapplied credit memos to the posted debit memo by Oldest-First-Largest-First rule if there are more than one unapplied credit memos.
          2. Apply unapplied payments to the posted debit memo by Oldest-First-Largest-First rule if there are more than one unapplied payments.
          3. Process payment to the posted debit memo if there is an open-balance on it.
        
        **Reistrictions**
        
        Since this API will do lots of works, and some of them are resource consuming, we need to resitrict the usage of this API by the following conditions:
          1. If the target debit memo gets more than 10 debit memo items, the request will be rejected.
          2. If `CreditMemo` is specified in `applicationOrder`, when there are more than 25 credit memos will be used to apply to the debit memo, the request will be rejected.
          3. If `CreditMemo` is specified in `applicationOrder`, when there are more than 100 credit memo items will be used to apply to the debit memo, the request will be rejected.
          4. If `UnappliedPayment` is specified in `applicationOrder`, when there are more than 25 payments will be used to apply to the debit memo, the request will be rejected.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/debitmemos/{debitMemoId}/collect", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDebitMemoCollectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDebitMemoCollect200ApplicationJSON])
                res.post_debit_memo_collect_200_application_json_object = out

        return res

    
    def post_debit_memo_from_prpc(self, request: operations.PostDebitMemoFromPrpcRequest) -> operations.PostDebitMemoFromPrpcResponse:
        r"""Create a debit memo from a charge
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Creates an ad-hoc debit memo from a product rate plan charge. Zuora supports the creation of debit memos from any type of product rate plan charge. The charges can also have any amount and any charge model, except for discout charge models.
        
        When debit memos are created from product rate plan charges, the specified amount with decimal places is now validated based on the decimal places supported by each currency.
        
        You can create a debit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/debitmemos"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDebitMemoFromPrpcResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_debit_memo_type = out

        return res

    
    def post_debit_memo_pdf(self, request: operations.PostDebitMemoPdfRequest) -> operations.PostDebitMemoPdfResponse:
        r"""Generate a debit memo PDF file
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
        
        Creates a PDF file for a specified debit memo. To access the generated PDF file, you can download it by clicking **View PDF** on the detailed debit memo page through the Zuora UI.
        
        This REST API operation can be used only if you have the billing document file generation feature and the Billing user permission \"Regenerate PDF\" enabled.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/debitmemos/{debitMemoId}/pdfs", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDebitMemoPdfResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostMemoPdfResponse])
                res.post_memo_pdf_response = out

        return res

    
    def post_email_debit_memo(self, request: operations.PostEmailDebitMemoRequest) -> operations.PostEmailDebitMemoResponse:
        r"""Email a debit memo
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Sends a posted debit memo to the specified email addresses manually.
        
        
        
        ## Notes
          - You must activate the **Email Debit Memo | Manually email Debit Memo** notification before emailing debit memos. To include the debit memo PDF in the email, select the **Include Debit Memo PDF** check box in the **Edit notification** dialog from the Zuora UI. See [Create and Edit Notifications](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/C_Create_Notifications#section_2) for more information.
        
        
          - Zuora sends the email messages based on the email template you set. You can set the email template to use in the **Delivery Options** panel of the **Edit notification** dialog from the Zuora UI. By default, the **Manual Email for Debit Memo Default Template** template is used. See [Create and Edit Email Templates](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/Create_Email_Templates) for more information.
        
        
          - The debit memos are sent only to the work email addresses or personal email addresses of the Bill To contact if the following conditions are all met:
        
            * The `useEmailTemplateSetting` field is set to `false`.
            * The email addresses are not specified in the `emailAddresses` field.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/debitmemos/{debitMemoId}/emails", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostEmailDebitMemoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def post_upload_file_for_debit_memo(self, request: operations.PostUploadFileForDebitMemoRequest) -> operations.PostUploadFileForDebitMemoResponse:
        r"""Upload a file for a debit memo
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Uploads an externally generated PDF file for a debit memo that is in Draft or Posted status.
        
        To use this operation, you must enable the Modify Debit Memo permission. See [Billing Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
        
        This operation has the following restrictions:
        - Only the PDF file format is supported.
        - The maximum size of the PDF file to upload is 4 MB.
        - A maximum of 50 PDF files can be uploaded for one debit memo.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/debitmemos/{debitMemoId}/files", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUploadFileForDebitMemoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostUploadFileResponse])
                res.post_upload_file_response = out

        return res

    
    def put_batch_update_debit_memos(self, request: operations.PutBatchUpdateDebitMemosRequest) -> operations.PutBatchUpdateDebitMemosResponse:
        r"""Update debit memos
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
        
        Updates the due date for multiple debit memos in batches with one call. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/debitmemos"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutBatchUpdateDebitMemosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def put_cancel_debit_memo(self, request: operations.PutCancelDebitMemoRequest) -> operations.PutCancelDebitMemoResponse:
        r"""Cancel a debit memo
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Cancels a debit memo. Only debit memos with the Draft status can be cancelled. 
        
        You can cancel a debit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/debitmemos/{debitMemoId}/cancel", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCancelDebitMemoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_debit_memo_type = out

        return res

    
    def put_debit_memo(self, request: operations.PutDebitMemoRequest) -> operations.PutDebitMemoResponse:
        r"""Update a debit memo
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Updates the basic and finance information about a debit memo. Currently, Zuora supports updating tax-exclusive memo items, but does not support updating tax-inclusive memo items. 
        
        If the amount of a memo item is updated, the tax will be recalculated in the following conditions:
          - The memo is created from a product rate plan charge and you use Avalara to calculate the tax.
          - The memo is created from an invoice and you use Avalara or Zuora Tax to calculate the tax.
        
        You can update a debit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/debitmemos/{debitMemoId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutDebitMemoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_debit_memo_type = out

        return res

    
    def put_post_debit_memo(self, request: operations.PutPostDebitMemoRequest) -> operations.PutPostDebitMemoResponse:
        r"""Post a debit memo
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Posts a debit memo to activate it. You can post debit memos only if you have the [Billing permissions](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles#Billing_Permissions).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/debitmemos/{debitMemoId}/post", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPostDebitMemoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_debit_memo_type = out

        return res

    
    def put_unpost_debit_memo(self, request: operations.PutUnpostDebitMemoRequest) -> operations.PutUnpostDebitMemoResponse:
        r"""Unpost a debit memo
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Unposts a debit memo that is in Posted status. If any credit memo or payment has been applied to a debit memo, you are not allowed to unpost the debit memo. After a debit memo is unposted, its status becomes Draft.
        
        You can unpost debit memos only if you have the [Billing permissions](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles#Billing_Permissions).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/debitmemos/{debitMemoId}/unpost", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUnpostDebitMemoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_debit_memo_type = out

        return res

    