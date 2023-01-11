package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAdminMappingsStubMappingIdRequest {
    public PutAdminMappingsStubMappingIdPathParams pathParams;
    public PutAdminMappingsStubMappingIdRequest withPathParams(PutAdminMappingsStubMappingIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutAdminMappingsStubMappingIdRequestBody request;
    public PutAdminMappingsStubMappingIdRequest withRequest(PutAdminMappingsStubMappingIdRequestBody request) {
        this.request = request;
        return this;
    }
}