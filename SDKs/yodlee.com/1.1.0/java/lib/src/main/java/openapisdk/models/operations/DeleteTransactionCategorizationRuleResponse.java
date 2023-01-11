package openapisdk.models.operations;



public class DeleteTransactionCategorizationRuleResponse {
    public String contentType;
    public DeleteTransactionCategorizationRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteTransactionCategorizationRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public DeleteTransactionCategorizationRuleResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}