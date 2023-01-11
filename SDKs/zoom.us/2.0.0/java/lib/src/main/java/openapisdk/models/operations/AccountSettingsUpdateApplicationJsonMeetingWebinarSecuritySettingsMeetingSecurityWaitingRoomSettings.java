package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
 * Specify the settings to be applied if waiting room is enabled.
**/
public class AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participants_to_place_in_waiting_room")
    public Long participantsToPlaceInWaitingRoom;
    public AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings withParticipantsToPlaceInWaitingRoom(Long participantsToPlaceInWaitingRoom) {
        this.participantsToPlaceInWaitingRoom = participantsToPlaceInWaitingRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users_who_can_admit_participants_from_waiting_room")
    public Long usersWhoCanAdmitParticipantsFromWaitingRoom;
    public AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings withUsersWhoCanAdmitParticipantsFromWaitingRoom(Long usersWhoCanAdmitParticipantsFromWaitingRoom) {
        this.usersWhoCanAdmitParticipantsFromWaitingRoom = usersWhoCanAdmitParticipantsFromWaitingRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whitelisted_domains_for_waiting_room")
    public String whitelistedDomainsForWaitingRoom;
    public AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings withWhitelistedDomainsForWaitingRoom(String whitelistedDomainsForWaitingRoom) {
        this.whitelistedDomainsForWaitingRoom = whitelistedDomainsForWaitingRoom;
        return this;
    }
}