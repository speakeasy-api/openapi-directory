package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPhoneDevices200ApplicationJsonDevices {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignee")
    public ListPhoneDevices200ApplicationJsonDevicesAssignee assignee;
    public ListPhoneDevices200ApplicationJsonDevices withAssignee(ListPhoneDevices200ApplicationJsonDevicesAssignee assignee) {
        this.assignee = assignee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device_type")
    public String deviceType;
    public ListPhoneDevices200ApplicationJsonDevices withDeviceType(String deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public ListPhoneDevices200ApplicationJsonDevices withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListPhoneDevices200ApplicationJsonDevices withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mac_address")
    public String macAddress;
    public ListPhoneDevices200ApplicationJsonDevices withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public ListPhoneDevices200ApplicationJsonDevicesSite site;
    public ListPhoneDevices200ApplicationJsonDevices withSite(ListPhoneDevices200ApplicationJsonDevicesSite site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ListPhoneDevices200ApplicationJsonDevicesStatusEnum status;
    public ListPhoneDevices200ApplicationJsonDevices withStatus(ListPhoneDevices200ApplicationJsonDevicesStatusEnum status) {
        this.status = status;
        return this;
    }
}