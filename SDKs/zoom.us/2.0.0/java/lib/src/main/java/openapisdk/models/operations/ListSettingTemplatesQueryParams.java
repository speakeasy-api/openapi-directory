package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSettingTemplatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public ListSettingTemplatesQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ListSettingTemplatesQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site_id")
    public String siteId;
    public ListSettingTemplatesQueryParams withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}