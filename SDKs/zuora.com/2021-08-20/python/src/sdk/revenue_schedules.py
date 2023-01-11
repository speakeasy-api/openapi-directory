import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class RevenueSchedules:
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

    
    def delete_rs(self, request: operations.DeleteRsRequest) -> operations.DeleteRsResponse:
        r"""Delete a revenue schedule
        Deletes a revenue schedule by specifying its revenue schedule number
        ## Prerequisites
        You must have the Delete Custom Revenue Schedule permissions in Zuora Finance.
        
        The revenue schedule must not be associated with any invoice item, invoice item adjustment, or credit/debit memo item in Zuora Billing.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-schedules/{rs-number}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def get_rs(self, request: operations.GetRsRequest) -> operations.GetRsResponse:
        r"""List all details of a revenue schedule
        Retrieves the details of a revenue schedule by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-schedules/{rs-number}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.getrs_detail_type = out

        return res

    
    def get_r_sby_credit_memo_item(self, request: operations.GetRSbyCreditMemoItemRequest) -> operations.GetRSbyCreditMemoItemResponse:
        r"""Retrieve a revenue schedule by credit memo item ID
        
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
        
        Retrieves the details about a revenue schedule by specifying a valid credit memo item ID.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-schedules/credit-memo-items/{cmi-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRSbyCreditMemoItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.getrs_detail_type = out

        return res

    
    def get_r_sby_debit_memo_item(self, request: operations.GetRSbyDebitMemoItemRequest) -> operations.GetRSbyDebitMemoItemResponse:
        r"""Retrieve a revenue schedule by debit memo item ID
        
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
        
        Retrieves the details about a revenue schedule by specifying a valid debit memo item ID.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-schedules/debit-memo-items/{dmi-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRSbyDebitMemoItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.getrs_detail_type = out

        return res

    
    def get_r_sby_invoice_item(self, request: operations.GetRSbyInvoiceItemRequest) -> operations.GetRSbyInvoiceItemResponse:
        r"""Retrieve a revenue schedule by invoice item ID
        Retrieves the details of a revenue schedule by specifying the invoice item ID.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-schedules/invoice-items/{invoice-item-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRSbyInvoiceItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.getrs_detail_type = out

        return res

    
    def get_r_sby_invoice_item_adjustment(self, request: operations.GetRSbyInvoiceItemAdjustmentRequest) -> operations.GetRSbyInvoiceItemAdjustmentResponse:
        r"""Retrieve a revenue schedule by invoice item adjustment key
        Retrieves the details of a revenue schedule by specifying a valid invoice item adjustment identifier. Request and response field descriptions and sample code are provided.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-schedules/invoice-item-adjustments/{invoice-item-adj-key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRSbyInvoiceItemAdjustmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.getrs_detail_type = out

        return res

    
    def get_r_sby_product_charge_and_billing_account(self, request: operations.GetRSbyProductChargeAndBillingAccountRequest) -> operations.GetRSbyProductChargeAndBillingAccountResponse:
        r"""List revenue schedules of a product charge by charge ID and account key
        
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
        
        Retrieves the details about all revenue schedules of a product rate plan charge by specifying the charge ID and billing account ID.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-schedules/product-charges/{charge-key}/{account-key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRSbyProductChargeAndBillingAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetrsDetailsByProductChargeType])
                res.getrs_details_by_product_charge_type = out

        return res

    
    def get_r_sfor_subsc_charge(self, request: operations.GetRSforSubscChargeRequest) -> operations.GetRSforSubscChargeResponse:
        r"""List revenue schedules by subscription charge key
        Retrieves the revenue schedule details by specifying subscription charge ID. Request and response field descriptions and sample code are provided
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-schedules/subscription-charges/{charge-key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRSforSubscChargeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetrsDetailsByChargeType])
                res.getrs_details_by_charge_type = out

        return res

    
    def post_r_sfor_credit_memo_item_distribute_by_date_range(self, request: operations.PostRSforCreditMemoItemDistributeByDateRangeRequest) -> operations.PostRSforCreditMemoItemDistributeByDateRangeResponse:
        r"""Create a revenue schedule for a credit memo item (distribute by date range)
        
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
        
        Creates a revenue schedule for a credit memo item, and automatically distribute the revenue by specifying the recognition start and end dates.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-schedules/credit-memo-items/{cmi-id}/distribute-revenue-with-date-range", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRSforCreditMemoItemDistributeByDateRangeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostRevenueScheduleByTransactionResponseType])
                res.post_revenue_schedule_by_transaction_response_type = out

        return res

    
    def post_r_sfor_credit_memo_item_manual_distribution(self, request: operations.PostRSforCreditMemoItemManualDistributionRequest) -> operations.PostRSforCreditMemoItemManualDistributionResponse:
        r"""Create a revenue schedule for a credit memo item (manual distribution)
        
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
        
        Creates a revenue schedule for a credit memo item, and manually distribute the revenue.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-schedules/credit-memo-items/{cmi-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRSforCreditMemoItemManualDistributionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostRevenueScheduleByTransactionResponseType])
                res.post_revenue_schedule_by_transaction_response_type = out

        return res

    
    def post_r_sfor_debit_memo_item_distribute_by_date_range(self, request: operations.PostRSforDebitMemoItemDistributeByDateRangeRequest) -> operations.PostRSforDebitMemoItemDistributeByDateRangeResponse:
        r"""Create a revenue schedule for a debit memo item (distribute by date range)
        
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
        
        Creates a revenue schedule for a debit memo item, and automatically distribute the revenue by specifying the recognition start and end dates.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-schedules/debit-memo-items/{dmi-id}/distribute-revenue-with-date-range", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRSforDebitMemoItemDistributeByDateRangeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostRevenueScheduleByTransactionResponseType])
                res.post_revenue_schedule_by_transaction_response_type = out

        return res

    
    def post_r_sfor_debit_memo_item_manual_distribution(self, request: operations.PostRSforDebitMemoItemManualDistributionRequest) -> operations.PostRSforDebitMemoItemManualDistributionResponse:
        r"""Create a revenue schedule for a debit memo item (distribute by date range)
        
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
        
        Creates a revenue schedule for a debit memo item, and manually distribute the revenue.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-schedules/debit-memo-items/{dmi-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRSforDebitMemoItemManualDistributionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostRevenueScheduleByTransactionResponseType])
                res.post_revenue_schedule_by_transaction_response_type = out

        return res

    
    def post_r_sfor_invoice_item_adjustment_distribute_by_date_range(self, request: operations.PostRSforInvoiceItemAdjustmentDistributeByDateRangeRequest) -> operations.PostRSforInvoiceItemAdjustmentDistributeByDateRangeResponse:
        r"""Create a revenue schedule for an invoice item adjustment (distribute by date range)
        Creates a revenue schedule for an Invoice Item Adjustment and distribute the revenue by specifying the recognition start and end dates.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-schedules/invoice-item-adjustments/{invoice-item-adj-key}/distribute-revenue-with-date-range", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRSforInvoiceItemAdjustmentDistributeByDateRangeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostRevenueScheduleByTransactionResponseType])
                res.post_revenue_schedule_by_transaction_response_type = out

        return res

    
    def post_r_sfor_invoice_item_adjustment_manual_distribution(self, request: operations.PostRSforInvoiceItemAdjustmentManualDistributionRequest) -> operations.PostRSforInvoiceItemAdjustmentManualDistributionResponse:
        r"""Create a revenue schedule for an invoice item adjustment (manual distribution)
        Creates a revenue schedule for an Invoice Item Adjustment and manually distribute the revenue.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-schedules/invoice-item-adjustments/{invoice-item-adj-key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRSforInvoiceItemAdjustmentManualDistributionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostRevenueScheduleByTransactionResponseType])
                res.post_revenue_schedule_by_transaction_response_type = out

        return res

    
    def post_r_sfor_invoice_item_distribute_by_date_range(self, request: operations.PostRSforInvoiceItemDistributeByDateRangeRequest) -> operations.PostRSforInvoiceItemDistributeByDateRangeResponse:
        r"""Create a revenue schedule for an invoice item (distribute by date range)
        Creates a revenue schedule for an Invoice Item and distribute the revenue by specifying the recognition start and end dates.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-schedules/invoice-items/{invoice-item-id}/distribute-revenue-with-date-range", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRSforInvoiceItemDistributeByDateRangeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostRevenueScheduleByTransactionResponseType])
                res.post_revenue_schedule_by_transaction_response_type = out

        return res

    
    def post_r_sfor_invoice_item_manual_distribution(self, request: operations.PostRSforInvoiceItemManualDistributionRequest) -> operations.PostRSforInvoiceItemManualDistributionResponse:
        r"""Create a revenue schedule for an invoice item (manual distribution)
        Creates a revenue schedule for an Invoice Item and manually distribute the revenue.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-schedules/invoice-items/{invoice-item-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRSforInvoiceItemManualDistributionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostRevenueScheduleByTransactionResponseType])
                res.post_revenue_schedule_by_transaction_response_type = out

        return res

    
    def post_r_sfor_subsc_charge(self, request: operations.PostRSforSubscChargeRequest) -> operations.PostRSforSubscChargeResponse:
        r"""Create a revenue schedule by subscription charge key
        Creates a revenue schedule by specifying the subscription charge. This method is for custom unlimited revenue recognition only.
        
        **Note**: You can create a maximum of 3,000 revenue schedules for a subscription charge.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-schedules/subscription-charges/{charge-key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRSforSubscChargeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostRevenueScheduleByChargeResponseType])
                res.post_revenue_schedule_by_charge_response_type = out

        return res

    
    def put_rs_basic_info(self, request: operations.PutRsBasicInfoRequest) -> operations.PutRsBasicInfoResponse:
        r"""Update a revenue schedule
        Retrieves basic information of a revenue schedule by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-schedules/{rs-number}/basic-information", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRsBasicInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def put_revenue_across_ap(self, request: operations.PutRevenueAcrossApRequest) -> operations.PutRevenueAcrossApResponse:
        r"""Distribute revenue across accounting periods
        Distributes revenue by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-schedules/{rs-number}/distribute-revenue-across-accounting-periods", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRevenueAcrossApResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PutRevenueScheduleResponseType])
                res.put_revenue_schedule_response_type = out

        return res

    
    def put_revenue_by_recognition_startand_end_dates(self, request: operations.PutRevenueByRecognitionStartandEndDatesRequest) -> operations.PutRevenueByRecognitionStartandEndDatesResponse:
        r"""Distribute revenue in a recognition period
        Distributes revenue by specifying the recognition start and end dates. Request and response field descriptions and sample code are provided.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-schedules/{rs-number}/distribute-revenue-with-date-range", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRevenueByRecognitionStartandEndDatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PutRevenueScheduleResponseType])
                res.put_revenue_schedule_response_type = out

        return res

    
    def put_revenue_specific_date(self, request: operations.PutRevenueSpecificDateRequest) -> operations.PutRevenueSpecificDateResponse:
        r"""Distribute revenue on a specific date
        Distributes revenue on a specific recognition date. Request and response field descriptions and sample code are provided.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-schedules/{rs-number}/distribute-revenue-on-specific-date", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRevenueSpecificDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PutRevenueScheduleResponseType])
                res.put_revenue_schedule_response_type = out

        return res

    