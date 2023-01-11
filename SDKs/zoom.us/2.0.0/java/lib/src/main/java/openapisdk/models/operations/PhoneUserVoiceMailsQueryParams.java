package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class PhoneUserVoiceMailsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public LocalDate from;
    public PhoneUserVoiceMailsQueryParams withFrom(LocalDate from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public PhoneUserVoiceMailsQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public PhoneUserVoiceMailsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public PhoneUserVoiceMailsStatusEnum status;
    public PhoneUserVoiceMailsQueryParams withStatus(PhoneUserVoiceMailsStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public LocalDate to;
    public PhoneUserVoiceMailsQueryParams withTo(LocalDate to) {
        this.to = to;
        return this;
    }
}