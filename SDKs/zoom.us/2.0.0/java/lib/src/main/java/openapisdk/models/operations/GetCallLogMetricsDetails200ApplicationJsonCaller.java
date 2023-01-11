package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCallLogMetricsDetails200ApplicationJsonCaller
 * Caller object contains information of the caller.
**/
public class GetCallLogMetricsDetails200ApplicationJsonCaller {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("codec")
    public String codec;
    public GetCallLogMetricsDetails200ApplicationJsonCaller withCodec(String codec) {
        this.codec = codec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device_type")
    public String deviceType;
    public GetCallLogMetricsDetails200ApplicationJsonCaller withDeviceType(String deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_number")
    public String extensionNumber;
    public GetCallLogMetricsDetails200ApplicationJsonCaller withExtensionNumber(String extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headset")
    public String headset;
    public GetCallLogMetricsDetails200ApplicationJsonCaller withHeadset(String headset) {
        this.headset = headset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isp")
    public String isp;
    public GetCallLogMetricsDetails200ApplicationJsonCaller withIsp(String isp) {
        this.isp = isp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("microphone")
    public String microphone;
    public GetCallLogMetricsDetails200ApplicationJsonCaller withMicrophone(String microphone) {
        this.microphone = microphone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public GetCallLogMetricsDetails200ApplicationJsonCaller withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site_id")
    public String siteId;
    public GetCallLogMetricsDetails200ApplicationJsonCaller withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}