package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
 * Specify the settings to be applied if waiting room is enabled.
**/
public class UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participants_to_place_in_waiting_room")
    public Long participantsToPlaceInWaitingRoom;
    public UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings withParticipantsToPlaceInWaitingRoom(Long participantsToPlaceInWaitingRoom) {
        this.participantsToPlaceInWaitingRoom = participantsToPlaceInWaitingRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users_who_can_admit_participants_from_waiting_room")
    public Long usersWhoCanAdmitParticipantsFromWaitingRoom;
    public UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings withUsersWhoCanAdmitParticipantsFromWaitingRoom(Long usersWhoCanAdmitParticipantsFromWaitingRoom) {
        this.usersWhoCanAdmitParticipantsFromWaitingRoom = usersWhoCanAdmitParticipantsFromWaitingRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whitelisted_domains_for_waiting_room")
    public String whitelistedDomainsForWaitingRoom;
    public UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings withWhitelistedDomainsForWaitingRoom(String whitelistedDomainsForWaitingRoom) {
        this.whitelistedDomainsForWaitingRoom = whitelistedDomainsForWaitingRoom;
        return this;
    }
}