import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class RevenueRules:
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

    
    def get_revenue_automation_start_date(self, request: operations.GetRevenueAutomationStartDateRequest) -> operations.GetRevenueAutomationStartDateResponse:
        r"""Retrieve a revenue automation start date
        Describes how to get the revenue automation start date. Request and response field descriptions and sample code are provided.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/settings/finance/revenue-automation-start-date"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRevenueAutomationStartDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetRevenueStartDateSettingType])
                res.get_revenue_start_date_setting_type = out

        return res

    
    def get_revenue_rec_ruleby_product_rate_plan_charge(self, request: operations.GetRevenueRecRulebyProductRatePlanChargeRequest) -> operations.GetRevenueRecRulebyProductRatePlanChargeResponse:
        r"""Retrieve a revenue recognition rule by product rate plan charge ID
        **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
        
        Retrieves the revenue recognition rule associated with a production rate plan charge by specifying the charge ID.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-recognition-rules/product-charges/{charge-key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRevenueRecRulebyProductRatePlanChargeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetRevenueRecognitionRuleAssociationType])
                res.get_revenue_recognition_rule_association_type = out

        return res

    
    def get_revenue_rec_rules(self, request: operations.GetRevenueRecRulesRequest) -> operations.GetRevenueRecRulesResponse:
        r"""Retrieve a revenue recognition rule by subscription charge ID
        Retrieves the revenue recognition rule associated with a subscription charge by specifying the charge ID. Request and response field descriptions and sample code are provided.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-recognition-rules/subscription-charges/{charge-key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRevenueRecRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetRevenueRecognitionRuleAssociationType])
                res.get_revenue_recognition_rule_association_type = out

        return res

    