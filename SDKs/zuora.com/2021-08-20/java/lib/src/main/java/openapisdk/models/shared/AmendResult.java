package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AmendResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AmendmentIds")
    public String[] amendmentIds;
    public AmendResult withAmendmentIds(String[] amendmentIds) {
        this.amendmentIds = amendmentIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChargeMetricsData")
    public ChargeMetricsData chargeMetricsData;
    public AmendResult withChargeMetricsData(ChargeMetricsData chargeMetricsData) {
        this.chargeMetricsData = chargeMetricsData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditMemoDatas")
    public ActionAmendCreditMemoData[] creditMemoDatas;
    public AmendResult withCreditMemoDatas(ActionAmendCreditMemoData[] creditMemoDatas) {
        this.creditMemoDatas = creditMemoDatas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditMemoId")
    public String creditMemoId;
    public AmendResult withCreditMemoId(String creditMemoId) {
        this.creditMemoId = creditMemoId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Errors")
    public ActionsErrorResponse[] errors;
    public AmendResult withErrors(ActionsErrorResponse[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GatewayResponse")
    public String gatewayResponse;
    public AmendResult withGatewayResponse(String gatewayResponse) {
        this.gatewayResponse = gatewayResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GatewayResponseCode")
    public String gatewayResponseCode;
    public AmendResult withGatewayResponseCode(String gatewayResponseCode) {
        this.gatewayResponseCode = gatewayResponseCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvoiceDatas")
    public ActionAmendInvoiceData[] invoiceDatas;
    public AmendResult withInvoiceDatas(ActionAmendInvoiceData[] invoiceDatas) {
        this.invoiceDatas = invoiceDatas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvoiceId")
    public String invoiceId;
    public AmendResult withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentId")
    public String paymentId;
    public AmendResult withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentTransactionNumber")
    public String paymentTransactionNumber;
    public AmendResult withPaymentTransactionNumber(String paymentTransactionNumber) {
        this.paymentTransactionNumber = paymentTransactionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubscriptionId")
    public String subscriptionId;
    public AmendResult withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Success")
    public Boolean success;
    public AmendResult withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalDeltaMrr")
    public Double totalDeltaMrr;
    public AmendResult withTotalDeltaMrr(Double totalDeltaMrr) {
        this.totalDeltaMrr = totalDeltaMrr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalDeltaTcv")
    public Double totalDeltaTcv;
    public AmendResult withTotalDeltaTcv(Double totalDeltaTcv) {
        this.totalDeltaTcv = totalDeltaTcv;
        return this;
    }
}