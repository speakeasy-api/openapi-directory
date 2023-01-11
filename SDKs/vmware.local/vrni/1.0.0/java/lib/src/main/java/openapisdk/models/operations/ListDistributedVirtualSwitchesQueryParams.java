package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDistributedVirtualSwitchesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public ListDistributedVirtualSwitchesQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_time")
    public Double endTime;
    public ListDistributedVirtualSwitchesQueryParams withEndTime(Double endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Double size;
    public ListDistributedVirtualSwitchesQueryParams withSize(Double size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_time")
    public Double startTime;
    public ListDistributedVirtualSwitchesQueryParams withStartTime(Double startTime) {
        this.startTime = startTime;
        return this;
    }
}