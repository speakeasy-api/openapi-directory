package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDigitalSignageContent200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contents")
    public ListDigitalSignageContent200ApplicationJsonContents[] contents;
    public ListDigitalSignageContent200ApplicationJson withContents(ListDigitalSignageContent200ApplicationJsonContents[] contents) {
        this.contents = contents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public ListDigitalSignageContent200ApplicationJson withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListDigitalSignageContent200ApplicationJson withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}