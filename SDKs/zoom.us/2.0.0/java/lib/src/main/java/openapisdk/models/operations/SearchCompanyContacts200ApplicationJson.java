package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchCompanyContacts200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contacts")
    public SearchCompanyContacts200ApplicationJsonContacts[] contacts;
    public SearchCompanyContacts200ApplicationJson withContacts(SearchCompanyContacts200ApplicationJsonContacts[] contacts) {
        this.contacts = contacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public SearchCompanyContacts200ApplicationJson withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public SearchCompanyContacts200ApplicationJson withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}