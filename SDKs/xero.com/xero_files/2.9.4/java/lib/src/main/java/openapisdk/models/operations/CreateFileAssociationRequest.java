package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFileAssociationRequest {
    public CreateFileAssociationPathParams pathParams;
    public CreateFileAssociationRequest withPathParams(CreateFileAssociationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateFileAssociationHeaders headers;
    public CreateFileAssociationRequest withHeaders(CreateFileAssociationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Association request;
    public CreateFileAssociationRequest withRequest(openapisdk.models.shared.Association request) {
        this.request = request;
        return this;
    }
    public CreateFileAssociationSecurity security;
    public CreateFileAssociationRequest withSecurity(CreateFileAssociationSecurity security) {
        this.security = security;
        return this;
    }
}