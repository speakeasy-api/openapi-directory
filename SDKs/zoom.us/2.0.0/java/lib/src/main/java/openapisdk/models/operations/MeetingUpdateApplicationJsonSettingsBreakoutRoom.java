package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingUpdateApplicationJsonSettingsBreakoutRoom
 * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
**/
public class MeetingUpdateApplicationJsonSettingsBreakoutRoom {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public MeetingUpdateApplicationJsonSettingsBreakoutRoom withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rooms")
    public MeetingUpdateApplicationJsonSettingsBreakoutRoomRooms[] rooms;
    public MeetingUpdateApplicationJsonSettingsBreakoutRoom withRooms(MeetingUpdateApplicationJsonSettingsBreakoutRoomRooms[] rooms) {
        this.rooms = rooms;
        return this;
    }
}