package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCommonAreaPhones200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("common_area_phones")
    public ListCommonAreaPhones200ApplicationJsonCommonAreaPhones[] commonAreaPhones;
    public ListCommonAreaPhones200ApplicationJson withCommonAreaPhones(ListCommonAreaPhones200ApplicationJsonCommonAreaPhones[] commonAreaPhones) {
        this.commonAreaPhones = commonAreaPhones;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public ListCommonAreaPhones200ApplicationJson withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListCommonAreaPhones200ApplicationJson withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public ListCommonAreaPhones200ApplicationJson withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}