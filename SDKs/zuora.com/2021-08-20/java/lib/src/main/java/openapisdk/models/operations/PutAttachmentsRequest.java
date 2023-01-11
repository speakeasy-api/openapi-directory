package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAttachmentsRequest {
    public PutAttachmentsPathParams pathParams;
    public PutAttachmentsRequest withPathParams(PutAttachmentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutAttachmentsHeaders headers;
    public PutAttachmentsRequest withHeaders(PutAttachmentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutAttachmentType request;
    public PutAttachmentsRequest withRequest(openapisdk.models.shared.PutAttachmentType request) {
        this.request = request;
        return this;
    }
}