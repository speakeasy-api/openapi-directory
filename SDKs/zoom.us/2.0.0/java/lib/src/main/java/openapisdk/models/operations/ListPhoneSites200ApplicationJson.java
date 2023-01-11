package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPhoneSites200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public ListPhoneSites200ApplicationJson withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public String pageSize;
    public ListPhoneSites200ApplicationJson withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sites")
    public ListPhoneSites200ApplicationJsonSites[] sites;
    public ListPhoneSites200ApplicationJson withSites(ListPhoneSites200ApplicationJsonSites[] sites) {
        this.sites = sites;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public String totalRecords;
    public ListPhoneSites200ApplicationJson withTotalRecords(String totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}