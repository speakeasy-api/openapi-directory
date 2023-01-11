package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFoldersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public ListFoldersQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_time")
    public Double endTime;
    public ListFoldersQueryParams withEndTime(Double endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Double size;
    public ListFoldersQueryParams withSize(Double size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_time")
    public Double startTime;
    public ListFoldersQueryParams withStartTime(Double startTime) {
        this.startTime = startTime;
        return this;
    }
}