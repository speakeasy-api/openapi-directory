package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetCurationTagHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetGetCurationTagHistoryFormatEnum format;
    public GetGetCurationTagHistoryQueryParams withFormat(GetGetCurationTagHistoryFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pwId")
    public String pwId;
    public GetGetCurationTagHistoryQueryParams withPwId(String pwId) {
        this.pwId = pwId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timestamp")
    public String timestamp;
    public GetGetCurationTagHistoryQueryParams withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}