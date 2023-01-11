package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetRecentChangesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetGetRecentChangesFormatEnum format;
    public GetGetRecentChangesQueryParams withFormat(GetGetRecentChangesFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timestamp")
    public String timestamp;
    public GetGetRecentChangesQueryParams withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}