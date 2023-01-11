package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPlanUsage200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_base")
    public GetPlanUsage200ApplicationJsonPlanBase[] planBase;
    public GetPlanUsage200ApplicationJson withPlanBase(GetPlanUsage200ApplicationJsonPlanBase[] planBase) {
        this.planBase = planBase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_large_meeting")
    public GetPlanUsage200ApplicationJsonPlanLargeMeeting[] planLargeMeeting;
    public GetPlanUsage200ApplicationJson withPlanLargeMeeting(GetPlanUsage200ApplicationJsonPlanLargeMeeting[] planLargeMeeting) {
        this.planLargeMeeting = planLargeMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_recording")
    public GetPlanUsage200ApplicationJsonPlanRecording planRecording;
    public GetPlanUsage200ApplicationJson withPlanRecording(GetPlanUsage200ApplicationJsonPlanRecording planRecording) {
        this.planRecording = planRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_united")
    public GetPlanUsage200ApplicationJsonPlanUnited planUnited;
    public GetPlanUsage200ApplicationJson withPlanUnited(GetPlanUsage200ApplicationJsonPlanUnited planUnited) {
        this.planUnited = planUnited;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_webinar")
    public GetPlanUsage200ApplicationJsonPlanWebinar[] planWebinar;
    public GetPlanUsage200ApplicationJson withPlanWebinar(GetPlanUsage200ApplicationJsonPlanWebinar[] planWebinar) {
        this.planWebinar = planWebinar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_zoom_rooms")
    public GetPlanUsage200ApplicationJsonPlanZoomRooms[] planZoomRooms;
    public GetPlanUsage200ApplicationJson withPlanZoomRooms(GetPlanUsage200ApplicationJsonPlanZoomRooms[] planZoomRooms) {
        this.planZoomRooms = planZoomRooms;
        return this;
    }
}