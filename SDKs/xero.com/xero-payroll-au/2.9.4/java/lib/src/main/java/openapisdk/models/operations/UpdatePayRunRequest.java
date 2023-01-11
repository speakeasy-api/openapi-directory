package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePayRunRequest {
    public UpdatePayRunPathParams pathParams;
    public UpdatePayRunRequest withPathParams(UpdatePayRunPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdatePayRunHeaders headers;
    public UpdatePayRunRequest withHeaders(UpdatePayRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PayRunInput[] request;
    public UpdatePayRunRequest withRequest(openapisdk.models.shared.PayRunInput[] request) {
        this.request = request;
        return this;
    }
    public UpdatePayRunSecurity security;
    public UpdatePayRunRequest withSecurity(UpdatePayRunSecurity security) {
        this.security = security;
        return this;
    }
}