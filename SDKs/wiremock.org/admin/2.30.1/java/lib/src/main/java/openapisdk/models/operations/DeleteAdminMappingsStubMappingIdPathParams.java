package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAdminMappingsStubMappingIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=stubMappingId")
    public String stubMappingId;
    public DeleteAdminMappingsStubMappingIdPathParams withStubMappingId(String stubMappingId) {
        this.stubMappingId = stubMappingId;
        return this;
    }
}