package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetCurationTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetGetCurationTagsFormatEnum format;
    public GetGetCurationTagsQueryParams withFormat(GetGetCurationTagsFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pwId")
    public String pwId;
    public GetGetCurationTagsQueryParams withPwId(String pwId) {
        this.pwId = pwId;
        return this;
    }
}