package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFolderRequest {
    public CreateFolderHeaders headers;
    public CreateFolderRequest withHeaders(CreateFolderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CreateFolderRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public CreateFolderSecurity security;
    public CreateFolderRequest withSecurity(CreateFolderSecurity security) {
        this.security = security;
        return this;
    }
}