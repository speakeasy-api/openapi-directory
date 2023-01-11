package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetPathwayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetGetPathwayFormatEnum format;
    public GetGetPathwayQueryParams withFormat(GetGetPathwayFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pwId")
    public String pwId;
    public GetGetPathwayQueryParams withPwId(String pwId) {
        this.pwId = pwId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=revision")
    public Long revision;
    public GetGetPathwayQueryParams withRevision(Long revision) {
        this.revision = revision;
        return this;
    }
}