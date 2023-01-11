package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetPathwayInfoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetGetPathwayInfoFormatEnum format;
    public GetGetPathwayInfoQueryParams withFormat(GetGetPathwayInfoFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pwId")
    public String pwId;
    public GetGetPathwayInfoQueryParams withPwId(String pwId) {
        this.pwId = pwId;
        return this;
    }
}