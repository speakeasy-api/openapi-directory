package openapisdk.models.operations;



public class GetTransactionCategorizationRulesResponse {
    public String contentType;
    public GetTransactionCategorizationRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTransactionCategorizationRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TransactionCategorizationRuleResponse transactionCategorizationRuleResponse;
    public GetTransactionCategorizationRulesResponse withTransactionCategorizationRuleResponse(openapisdk.models.shared.TransactionCategorizationRuleResponse transactionCategorizationRuleResponse) {
        this.transactionCategorizationRuleResponse = transactionCategorizationRuleResponse;
        return this;
    }
}