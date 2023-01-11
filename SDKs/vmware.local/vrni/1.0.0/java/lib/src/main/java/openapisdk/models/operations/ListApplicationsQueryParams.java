package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListApplicationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public ListApplicationsQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_time")
    public Double endTime;
    public ListApplicationsQueryParams withEndTime(Double endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Double size;
    public ListApplicationsQueryParams withSize(Double size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_time")
    public Double startTime;
    public ListApplicationsQueryParams withStartTime(Double startTime) {
        this.startTime = startTime;
        return this;
    }
}