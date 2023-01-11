package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardWebinarParticipantsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_fields")
    public DashboardWebinarParticipantsIncludeFieldsEnum includeFields;
    public DashboardWebinarParticipantsQueryParams withIncludeFields(DashboardWebinarParticipantsIncludeFieldsEnum includeFields) {
        this.includeFields = includeFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public DashboardWebinarParticipantsQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public DashboardWebinarParticipantsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public DashboardWebinarParticipantsTypeEnum type;
    public DashboardWebinarParticipantsQueryParams withType(DashboardWebinarParticipantsTypeEnum type) {
        this.type = type;
        return this;
    }
}