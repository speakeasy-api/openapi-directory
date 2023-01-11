package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OnDemandPagePreorder {
    @JsonProperty("active")
    public Boolean active;
    public OnDemandPagePreorder withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonProperty("cancel_time")
    public String cancelTime;
    public OnDemandPagePreorder withCancelTime(String cancelTime) {
        this.cancelTime = cancelTime;
        return this;
    }
    @JsonProperty("publish_time")
    public String publishTime;
    public OnDemandPagePreorder withPublishTime(String publishTime) {
        this.publishTime = publishTime;
        return this;
    }
    @JsonProperty("time")
    public String time;
    public OnDemandPagePreorder withTime(String time) {
        this.time = time;
        return this;
    }
}