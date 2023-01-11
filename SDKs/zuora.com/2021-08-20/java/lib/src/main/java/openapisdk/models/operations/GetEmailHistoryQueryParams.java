package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetEmailHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endTime")
    public OffsetDateTime endTime;
    public GetEmailHistoryQueryParams withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=eventCategory")
    public String eventCategory;
    public GetEmailHistoryQueryParams withEventCategory(String eventCategory) {
        this.eventCategory = eventCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=failedOnly")
    public Boolean failedOnly;
    public GetEmailHistoryQueryParams withFailedOnly(Boolean failedOnly) {
        this.failedOnly = failedOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=objectId")
    public String objectId;
    public GetEmailHistoryQueryParams withObjectId(String objectId) {
        this.objectId = objectId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetEmailHistoryQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startTime")
    public OffsetDateTime startTime;
    public GetEmailHistoryQueryParams withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}