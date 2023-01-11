import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Operations:
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

    
    def post_billing_preview(self, request: operations.PostBillingPreviewRequest) -> operations.PostBillingPreviewResponse:
        r"""Generate a billing preview
        **Note:** The Billing Preview feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
        
        
        Generates a preview of future invoice items for one customer account. Use the BillingPreview call to calculate how much a single customer will be invoiced from the most recent invoice to a specific end of term date in the future.
        
        Additionally, you can use the BillingPreview service to access real-time data on an individual customer's usage consumption. 
        
        The BillingPreview call does not calculate taxes for charges in the subscription.
        
        If you have the Invoice Settlement feature enabled, you can also generate a preview of future credit memo items for one customer account. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/operations/billing-preview"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostBillingPreviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.BillingPreviewResult])
                res.billing_preview_result = out

        return res

    
    def post_transaction_invoice_payment(self, request: operations.PostTransactionInvoicePaymentRequest) -> operations.PostTransactionInvoicePaymentResponse:
        r"""Invoice and collect
        Generates and posts invoices and credit memos and collects payments for posted invoices. Credit memos are only available if you have the Invoice Settlement feature enabled and negative charges exist. Credit memos will not be applied to invoices. If draft invoices and credit memos exist when you run this operation, this operation will post the invoices and credit memos. Note that draft credit memos created from an invoice or a product rate plan charge will not be posted.
        
        You can use this operation to generate invoices and collect payments on the posted invoices,
         or else simply collect payment on a specified existing
        invoice. The customer's default payment method is used, and the full
        amount due is collected. The operation depends on the parameters you
        specify.
        
        - To generate one or more new invoices for that customer and collect
        payment on the generated and other unpaid invoice(s), leave the **invoiceId** field empty. 
        
        - To collect payment on an existing invoice, specify the invoice ID. 
        
        
        The operation is atomic; if any part is unsuccessful, the entire
        operation is rolled back.
        
        When an error occurs, gateway reason codes and error messages are returned the error response of this operation. The following items are some gateway response code examples.
        
        - Orbital: `05 Do Not Honor`; `14 Invalid Credit Card Number`
        - Vantiv: `301 Invalid Account Number`; `304 Lost/Stolen Card`  
        - CyberSource2: `202 Expired card`; `231 Invalid account number`
        
        For more reason code information, see the corresponding payment gateway documentation. 
        
        
        ## Notes
        
        Timeouts may occur when using this method on an account that
        has an extremely high number of subscriptions.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/operations/invoice-collect"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTransactionInvoicePaymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostInvoiceCollectResponseType])
                res.post_invoice_collect_response_type = out

        return res

    