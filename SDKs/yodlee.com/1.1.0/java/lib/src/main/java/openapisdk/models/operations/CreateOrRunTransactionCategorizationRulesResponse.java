package openapisdk.models.operations;



public class CreateOrRunTransactionCategorizationRulesResponse {
    public String contentType;
    public CreateOrRunTransactionCategorizationRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateOrRunTransactionCategorizationRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public CreateOrRunTransactionCategorizationRulesResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}