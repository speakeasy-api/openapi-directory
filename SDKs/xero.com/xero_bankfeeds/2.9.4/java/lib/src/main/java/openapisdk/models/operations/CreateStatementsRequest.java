package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStatementsRequest {
    public CreateStatementsHeaders headers;
    public CreateStatementsRequest withHeaders(CreateStatementsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Statements request;
    public CreateStatementsRequest withRequest(openapisdk.models.shared.Statements request) {
        this.request = request;
        return this;
    }
    public CreateStatementsSecurity security;
    public CreateStatementsRequest withSecurity(CreateStatementsSecurity security) {
        this.security = security;
        return this;
    }
}