package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class ReportOperationLogsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category_type")
    public ReportOperationLogsCategoryTypeEnum categoryType;
    public ReportOperationLogsQueryParams withCategoryType(ReportOperationLogsCategoryTypeEnum categoryType) {
        this.categoryType = categoryType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public LocalDate from;
    public ReportOperationLogsQueryParams withFrom(LocalDate from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public ReportOperationLogsQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ReportOperationLogsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public LocalDate to;
    public ReportOperationLogsQueryParams withTo(LocalDate to) {
        this.to = to;
        return this;
    }
}