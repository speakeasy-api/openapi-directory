package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFileRequest {
    public UpdateFilePathParams pathParams;
    public UpdateFileRequest withPathParams(UpdateFilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateFileHeaders headers;
    public UpdateFileRequest withHeaders(UpdateFileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FileObject request;
    public UpdateFileRequest withRequest(openapisdk.models.shared.FileObject request) {
        this.request = request;
        return this;
    }
    public UpdateFileSecurity security;
    public UpdateFileRequest withSecurity(UpdateFileSecurity security) {
        this.security = security;
        return this;
    }
}