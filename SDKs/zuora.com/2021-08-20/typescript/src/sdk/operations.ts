import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Operations {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * postBillingPreview - Generate a billing preview
   *
   * **Note:** The Billing Preview feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
   * 
   * 
   * Generates a preview of future invoice items for one customer account. Use the BillingPreview call to calculate how much a single customer will be invoiced from the most recent invoice to a specific end of term date in the future.
   * 
   * Additionally, you can use the BillingPreview service to access real-time data on an individual customer's usage consumption. 
   * 
   * The BillingPreview call does not calculate taxes for charges in the subscription.
   * 
   * If you have the Invoice Settlement feature enabled, you can also generate a preview of future credit memo items for one customer account. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
   * 
  **/
  postBillingPreview(
    req: operations.PostBillingPreviewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostBillingPreviewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostBillingPreviewRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/operations/billing-preview";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostBillingPreviewResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.billingPreviewResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postTransactionInvoicePayment - Invoice and collect
   *
   * Generates and posts invoices and credit memos and collects payments for posted invoices. Credit memos are only available if you have the Invoice Settlement feature enabled and negative charges exist. Credit memos will not be applied to invoices. If draft invoices and credit memos exist when you run this operation, this operation will post the invoices and credit memos. Note that draft credit memos created from an invoice or a product rate plan charge will not be posted.
   * 
   * You can use this operation to generate invoices and collect payments on the posted invoices,
   *  or else simply collect payment on a specified existing
   * invoice. The customer's default payment method is used, and the full
   * amount due is collected. The operation depends on the parameters you
   * specify.
   * 
   * - To generate one or more new invoices for that customer and collect
   * payment on the generated and other unpaid invoice(s), leave the **invoiceId** field empty. 
   * 
   * - To collect payment on an existing invoice, specify the invoice ID. 
   * 
   * 
   * The operation is atomic; if any part is unsuccessful, the entire
   * operation is rolled back.
   * 
   * When an error occurs, gateway reason codes and error messages are returned the error response of this operation. The following items are some gateway response code examples.
   * 
   * - Orbital: `05 Do Not Honor`; `14 Invalid Credit Card Number`
   * - Vantiv: `301 Invalid Account Number`; `304 Lost/Stolen Card`  
   * - CyberSource2: `202 Expired card`; `231 Invalid account number`
   * 
   * For more reason code information, see the corresponding payment gateway documentation. 
   * 
   * 
   * ## Notes
   * 
   * Timeouts may occur when using this method on an account that
   * has an extremely high number of subscriptions.
   * 
  **/
  postTransactionInvoicePayment(
    req: operations.PostTransactionInvoicePaymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostTransactionInvoicePaymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostTransactionInvoicePaymentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/operations/invoice-collect";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostTransactionInvoicePaymentResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json; charset=utf-8`)) {
                res.postInvoiceCollectResponseType = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
