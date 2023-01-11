package openapisdk.models.operations;



public class PostRSforInvoiceItemManualDistributionResponse {
    public String contentType;
    public PostRSforInvoiceItemManualDistributionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostRSforInvoiceItemManualDistributionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostRevenueScheduleByTransactionResponseType postRevenueScheduleByTransactionResponseType;
    public PostRSforInvoiceItemManualDistributionResponse withPostRevenueScheduleByTransactionResponseType(openapisdk.models.shared.PostRevenueScheduleByTransactionResponseType postRevenueScheduleByTransactionResponseType) {
        this.postRevenueScheduleByTransactionResponseType = postRevenueScheduleByTransactionResponseType;
        return this;
    }
    public Long statusCode;
    public PostRSforInvoiceItemManualDistributionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}