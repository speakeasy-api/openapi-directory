package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeetingCreate201ApplicationJsonSettingsBreakoutRoomRooms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public MeetingCreate201ApplicationJsonSettingsBreakoutRoomRooms withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participants")
    public String[] participants;
    public MeetingCreate201ApplicationJsonSettingsBreakoutRoomRooms withParticipants(String[] participants) {
        this.participants = participants;
        return this;
    }
}