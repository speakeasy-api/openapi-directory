package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarAbsenteesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public WebinarAbsenteesQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=occurrence_id")
    public String occurrenceId;
    public WebinarAbsenteesQueryParams withOccurrenceId(String occurrenceId) {
        this.occurrenceId = occurrenceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public WebinarAbsenteesQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}