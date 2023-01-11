package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListNsxManagersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public ListNsxManagersQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_time")
    public Double endTime;
    public ListNsxManagersQueryParams withEndTime(Double endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Double size;
    public ListNsxManagersQueryParams withSize(Double size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_time")
    public Double startTime;
    public ListNsxManagersQueryParams withStartTime(Double startTime) {
        this.startTime = startTime;
        return this;
    }
}