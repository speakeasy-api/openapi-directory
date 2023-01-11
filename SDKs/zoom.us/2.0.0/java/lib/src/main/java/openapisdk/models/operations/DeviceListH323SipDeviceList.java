package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceListH323SipDeviceList
 * Pagination Object.
**/
public class DeviceListH323SipDeviceList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public DeviceListH323SipDeviceListTheH323SipDeviceObject[] devices;
    public DeviceListH323SipDeviceList withDevices(DeviceListH323SipDeviceListTheH323SipDeviceObject[] devices) {
        this.devices = devices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public DeviceListH323SipDeviceList withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_count")
    public Long pageCount;
    public DeviceListH323SipDeviceList withPageCount(Long pageCount) {
        this.pageCount = pageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_number")
    public Long pageNumber;
    public DeviceListH323SipDeviceList withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public DeviceListH323SipDeviceList withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public DeviceListH323SipDeviceList withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}