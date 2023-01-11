package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class ReportSignInSignOutActivitiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public LocalDate from;
    public ReportSignInSignOutActivitiesQueryParams withFrom(LocalDate from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public ReportSignInSignOutActivitiesQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ReportSignInSignOutActivitiesQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public LocalDate to;
    public ReportSignInSignOutActivitiesQueryParams withTo(LocalDate to) {
        this.to = to;
        return this;
    }
}