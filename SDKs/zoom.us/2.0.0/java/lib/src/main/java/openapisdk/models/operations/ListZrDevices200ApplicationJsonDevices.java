package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListZrDevices200ApplicationJsonDevices {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("app_version")
    public String appVersion;
    public ListZrDevices200ApplicationJsonDevices withAppVersion(String appVersion) {
        this.appVersion = appVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device_system")
    public String deviceSystem;
    public ListZrDevices200ApplicationJsonDevices withDeviceSystem(String deviceSystem) {
        this.deviceSystem = deviceSystem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device_type")
    public ListZrDevices200ApplicationJsonDevicesDeviceTypeEnum deviceType;
    public ListZrDevices200ApplicationJsonDevices withDeviceType(ListZrDevices200ApplicationJsonDevicesDeviceTypeEnum deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListZrDevices200ApplicationJsonDevices withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("room_name")
    public String roomName;
    public ListZrDevices200ApplicationJsonDevices withRoomName(String roomName) {
        this.roomName = roomName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ListZrDevices200ApplicationJsonDevicesStatusEnum status;
    public ListZrDevices200ApplicationJsonDevices withStatus(ListZrDevices200ApplicationJsonDevicesStatusEnum status) {
        this.status = status;
        return this;
    }
}