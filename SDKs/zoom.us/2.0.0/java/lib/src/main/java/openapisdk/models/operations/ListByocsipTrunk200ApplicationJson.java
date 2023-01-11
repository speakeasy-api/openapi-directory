package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListByocsipTrunk200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("byoc_sip_trunk")
    public ListByocsipTrunk200ApplicationJsonByocSipTrunk[] byocSipTrunk;
    public ListByocsipTrunk200ApplicationJson withByocSipTrunk(ListByocsipTrunk200ApplicationJsonByocSipTrunk[] byocSipTrunk) {
        this.byocSipTrunk = byocSipTrunk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public ListByocsipTrunk200ApplicationJson withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListByocsipTrunk200ApplicationJson withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}