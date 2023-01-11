package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ParticipantWebinarFeedbackQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public ParticipantWebinarFeedbackQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ParticipantWebinarFeedbackQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public ParticipantWebinarFeedbackTypeEnum type;
    public ParticipantWebinarFeedbackQueryParams withType(ParticipantWebinarFeedbackTypeEnum type) {
        this.type = type;
        return this;
    }
}