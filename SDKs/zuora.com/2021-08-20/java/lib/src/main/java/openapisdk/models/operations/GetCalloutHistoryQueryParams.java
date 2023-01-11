package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetCalloutHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endTime")
    public OffsetDateTime endTime;
    public GetCalloutHistoryQueryParams withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=eventCategory")
    public String eventCategory;
    public GetCalloutHistoryQueryParams withEventCategory(String eventCategory) {
        this.eventCategory = eventCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=failedOnly")
    public Boolean failedOnly;
    public GetCalloutHistoryQueryParams withFailedOnly(Boolean failedOnly) {
        this.failedOnly = failedOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeResponseContent")
    public Boolean includeResponseContent;
    public GetCalloutHistoryQueryParams withIncludeResponseContent(Boolean includeResponseContent) {
        this.includeResponseContent = includeResponseContent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=objectId")
    public String objectId;
    public GetCalloutHistoryQueryParams withObjectId(String objectId) {
        this.objectId = objectId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetCalloutHistoryQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startTime")
    public OffsetDateTime startTime;
    public GetCalloutHistoryQueryParams withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}