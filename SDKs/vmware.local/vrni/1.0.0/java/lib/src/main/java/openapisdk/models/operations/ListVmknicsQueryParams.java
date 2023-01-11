package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListVmknicsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public ListVmknicsQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_time")
    public Double endTime;
    public ListVmknicsQueryParams withEndTime(Double endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Double size;
    public ListVmknicsQueryParams withSize(Double size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_time")
    public Double startTime;
    public ListVmknicsQueryParams withStartTime(Double startTime) {
        this.startTime = startTime;
        return this;
    }
}