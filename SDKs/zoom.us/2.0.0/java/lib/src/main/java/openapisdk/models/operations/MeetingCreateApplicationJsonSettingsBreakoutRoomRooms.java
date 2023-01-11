package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeetingCreateApplicationJsonSettingsBreakoutRoomRooms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public MeetingCreateApplicationJsonSettingsBreakoutRoomRooms withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participants")
    public String[] participants;
    public MeetingCreateApplicationJsonSettingsBreakoutRoomRooms withParticipants(String[] participants) {
        this.participants = participants;
        return this;
    }
}