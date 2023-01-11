package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetPathwayAsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fileType")
    public String fileType;
    public GetGetPathwayAsQueryParams withFileType(String fileType) {
        this.fileType = fileType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetGetPathwayAsFormatEnum format;
    public GetGetPathwayAsQueryParams withFormat(GetGetPathwayAsFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pwId")
    public String pwId;
    public GetGetPathwayAsQueryParams withPwId(String pwId) {
        this.pwId = pwId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=revision")
    public Long revision;
    public GetGetPathwayAsQueryParams withRevision(Long revision) {
        this.revision = revision;
        return this;
    }
}