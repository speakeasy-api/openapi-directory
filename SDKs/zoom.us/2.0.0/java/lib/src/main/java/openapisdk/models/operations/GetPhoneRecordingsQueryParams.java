package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPhoneRecordingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public String from;
    public GetPhoneRecordingsQueryParams withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public GetPhoneRecordingsQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=owner_type")
    public String ownerType;
    public GetPhoneRecordingsQueryParams withOwnerType(String ownerType) {
        this.ownerType = ownerType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GetPhoneRecordingsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recording_type")
    public String recordingType;
    public GetPhoneRecordingsQueryParams withRecordingType(String recordingType) {
        this.recordingType = recordingType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site_id")
    public String siteId;
    public GetPhoneRecordingsQueryParams withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public String to;
    public GetPhoneRecordingsQueryParams withTo(String to) {
        this.to = to;
        return this;
    }
}