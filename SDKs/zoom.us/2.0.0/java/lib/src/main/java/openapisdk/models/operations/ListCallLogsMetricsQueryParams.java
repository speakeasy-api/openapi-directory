package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCallLogsMetricsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public String from;
    public ListCallLogsMetricsQueryParams withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public ListCallLogsMetricsQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ListCallLogsMetricsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quality_type")
    public String qualityType;
    public ListCallLogsMetricsQueryParams withQualityType(String qualityType) {
        this.qualityType = qualityType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site_id")
    public String siteId;
    public ListCallLogsMetricsQueryParams withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public String to;
    public ListCallLogsMetricsQueryParams withTo(String to) {
        this.to = to;
        return this;
    }
}