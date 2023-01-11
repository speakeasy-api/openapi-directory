package openapisdk.models.operations;



public class GetTransactionCategorizationRulesDeprecatedResponse {
    public String contentType;
    public GetTransactionCategorizationRulesDeprecatedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTransactionCategorizationRulesDeprecatedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TransactionCategorizationRule[] transactionCategorizationRules;
    public GetTransactionCategorizationRulesDeprecatedResponse withTransactionCategorizationRules(openapisdk.models.shared.TransactionCategorizationRule[] transactionCategorizationRules) {
        this.transactionCategorizationRules = transactionCategorizationRules;
        return this;
    }
}