package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListZrDevices200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public ListZrDevices200ApplicationJsonDevices[] devices;
    public ListZrDevices200ApplicationJson withDevices(ListZrDevices200ApplicationJsonDevices[] devices) {
        this.devices = devices;
        return this;
    }
}