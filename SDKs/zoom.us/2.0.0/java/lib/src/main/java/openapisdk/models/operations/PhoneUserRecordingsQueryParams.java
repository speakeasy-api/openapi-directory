package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class PhoneUserRecordingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public LocalDate from;
    public PhoneUserRecordingsQueryParams withFrom(LocalDate from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public PhoneUserRecordingsQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public PhoneUserRecordingsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public LocalDate to;
    public PhoneUserRecordingsQueryParams withTo(LocalDate to) {
        this.to = to;
        return this;
    }
}