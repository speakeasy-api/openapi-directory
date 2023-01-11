package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTransactionCategorizationRuleRequest {
    public UpdateTransactionCategorizationRulePathParams pathParams;
    public UpdateTransactionCategorizationRuleRequest withPathParams(UpdateTransactionCategorizationRulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TransactionCategorizationRuleRequest request;
    public UpdateTransactionCategorizationRuleRequest withRequest(openapisdk.models.shared.TransactionCategorizationRuleRequest request) {
        this.request = request;
        return this;
    }
}