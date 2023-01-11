package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class DashboardMeetingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public LocalDate from;
    public DashboardMeetingsQueryParams withFrom(LocalDate from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_fields")
    public DashboardMeetingsIncludeFieldsEnum includeFields;
    public DashboardMeetingsQueryParams withIncludeFields(DashboardMeetingsIncludeFieldsEnum includeFields) {
        this.includeFields = includeFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public DashboardMeetingsQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public DashboardMeetingsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public LocalDate to;
    public DashboardMeetingsQueryParams withTo(LocalDate to) {
        this.to = to;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public DashboardMeetingsTypeEnum type;
    public DashboardMeetingsQueryParams withType(DashboardMeetingsTypeEnum type) {
        this.type = type;
        return this;
    }
}