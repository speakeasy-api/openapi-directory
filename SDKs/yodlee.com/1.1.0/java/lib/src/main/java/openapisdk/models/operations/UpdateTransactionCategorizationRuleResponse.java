package openapisdk.models.operations;



public class UpdateTransactionCategorizationRuleResponse {
    public String contentType;
    public UpdateTransactionCategorizationRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateTransactionCategorizationRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public UpdateTransactionCategorizationRuleResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}