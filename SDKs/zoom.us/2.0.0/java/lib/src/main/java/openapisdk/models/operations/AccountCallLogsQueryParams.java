package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountCallLogsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public String from;
    public AccountCallLogsQueryParams withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public AccountCallLogsQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public AccountCallLogsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=path")
    public String path;
    public AccountCallLogsQueryParams withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site_id")
    public String siteId;
    public AccountCallLogsQueryParams withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_type")
    public AccountCallLogsTimeTypeEnum timeType;
    public AccountCallLogsQueryParams withTimeType(AccountCallLogsTimeTypeEnum timeType) {
        this.timeType = timeType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public String to;
    public AccountCallLogsQueryParams withTo(String to) {
        this.to = to;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public AccountCallLogsQueryParams withType(String type) {
        this.type = type;
        return this;
    }
}