package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListProblemEventsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public ListProblemEventsQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_time")
    public Double endTime;
    public ListProblemEventsQueryParams withEndTime(Double endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Double size;
    public ListProblemEventsQueryParams withSize(Double size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_time")
    public Double startTime;
    public ListProblemEventsQueryParams withStartTime(Double startTime) {
        this.startTime = startTime;
        return this;
    }
}