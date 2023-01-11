package openapisdk.models.operations;



public class PostRSforInvoiceItemAdjustmentManualDistributionResponse {
    public String contentType;
    public PostRSforInvoiceItemAdjustmentManualDistributionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostRSforInvoiceItemAdjustmentManualDistributionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostRevenueScheduleByTransactionResponseType postRevenueScheduleByTransactionResponseType;
    public PostRSforInvoiceItemAdjustmentManualDistributionResponse withPostRevenueScheduleByTransactionResponseType(openapisdk.models.shared.PostRevenueScheduleByTransactionResponseType postRevenueScheduleByTransactionResponseType) {
        this.postRevenueScheduleByTransactionResponseType = postRevenueScheduleByTransactionResponseType;
        return this;
    }
    public Long statusCode;
    public PostRSforInvoiceItemAdjustmentManualDistributionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}