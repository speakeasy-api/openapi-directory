package openapisdk.models.operations;



public class PostRSforDebitMemoItemDistributeByDateRangeResponse {
    public String contentType;
    public PostRSforDebitMemoItemDistributeByDateRangeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostRSforDebitMemoItemDistributeByDateRangeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostRevenueScheduleByTransactionResponseType postRevenueScheduleByTransactionResponseType;
    public PostRSforDebitMemoItemDistributeByDateRangeResponse withPostRevenueScheduleByTransactionResponseType(openapisdk.models.shared.PostRevenueScheduleByTransactionResponseType postRevenueScheduleByTransactionResponseType) {
        this.postRevenueScheduleByTransactionResponseType = postRevenueScheduleByTransactionResponseType;
        return this;
    }
    public Long statusCode;
    public PostRSforDebitMemoItemDistributeByDateRangeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}