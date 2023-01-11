package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFolderRequest {
    public UpdateFolderPathParams pathParams;
    public UpdateFolderRequest withPathParams(UpdateFolderPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateFolderHeaders headers;
    public UpdateFolderRequest withHeaders(UpdateFolderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public UpdateFolderRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public UpdateFolderSecurity security;
    public UpdateFolderRequest withSecurity(UpdateFolderSecurity security) {
        this.security = security;
        return this;
    }
}