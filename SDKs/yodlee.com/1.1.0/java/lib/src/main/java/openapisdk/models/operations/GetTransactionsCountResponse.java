package openapisdk.models.operations;



public class GetTransactionsCountResponse {
    public String contentType;
    public GetTransactionsCountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTransactionsCountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TransactionCountResponse transactionCountResponse;
    public GetTransactionsCountResponse withTransactionCountResponse(openapisdk.models.shared.TransactionCountResponse transactionCountResponse) {
        this.transactionCountResponse = transactionCountResponse;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public GetTransactionsCountResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}