package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUpdateEmailTemplateRequest {
    public PutUpdateEmailTemplatePathParams pathParams;
    public PutUpdateEmailTemplateRequest withPathParams(PutUpdateEmailTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutUpdateEmailTemplateHeaders headers;
    public PutUpdateEmailTemplateRequest withHeaders(PutUpdateEmailTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutPublicEmailTemplateRequest request;
    public PutUpdateEmailTemplateRequest withRequest(openapisdk.models.shared.PutPublicEmailTemplateRequest request) {
        this.request = request;
        return this;
    }
}