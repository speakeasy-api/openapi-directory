package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAdminMappingsStubMappingIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=stubMappingId")
    public String stubMappingId;
    public GetAdminMappingsStubMappingIdPathParams withStubMappingId(String stubMappingId) {
        this.stubMappingId = stubMappingId;
        return this;
    }
}