package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetPathwayHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetGetPathwayHistoryFormatEnum format;
    public GetGetPathwayHistoryQueryParams withFormat(GetGetPathwayHistoryFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pwId")
    public String pwId;
    public GetGetPathwayHistoryQueryParams withPwId(String pwId) {
        this.pwId = pwId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timestamp")
    public String timestamp;
    public GetGetPathwayHistoryQueryParams withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}