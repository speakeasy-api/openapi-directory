package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ParticipantFeedbackQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public ParticipantFeedbackQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ParticipantFeedbackQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public ParticipantFeedbackTypeEnum type;
    public ParticipantFeedbackQueryParams withType(ParticipantFeedbackTypeEnum type) {
        this.type = type;
        return this;
    }
}