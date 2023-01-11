package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPhoneDevices200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public ListPhoneDevices200ApplicationJsonDevices[] devices;
    public ListPhoneDevices200ApplicationJson withDevices(ListPhoneDevices200ApplicationJsonDevices[] devices) {
        this.devices = devices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public ListPhoneDevices200ApplicationJson withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListPhoneDevices200ApplicationJson withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public String totalRecords;
    public ListPhoneDevices200ApplicationJson withTotalRecords(String totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}