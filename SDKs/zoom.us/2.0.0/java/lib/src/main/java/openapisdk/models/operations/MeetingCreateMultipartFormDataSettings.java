package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingCreateMultipartFormDataSettings
 * Meeting settings.
**/
public class MeetingCreateMultipartFormDataSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additional_data_center_regions")
    public String[] additionalDataCenterRegions;
    public MeetingCreateMultipartFormDataSettings withAdditionalDataCenterRegions(String[] additionalDataCenterRegions) {
        this.additionalDataCenterRegions = additionalDataCenterRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_multiple_devices")
    public Boolean allowMultipleDevices;
    public MeetingCreateMultipartFormDataSettings withAllowMultipleDevices(Boolean allowMultipleDevices) {
        this.allowMultipleDevices = allowMultipleDevices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_hosts")
    public String alternativeHosts;
    public MeetingCreateMultipartFormDataSettings withAlternativeHosts(String alternativeHosts) {
        this.alternativeHosts = alternativeHosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_hosts_email_notification")
    public Boolean alternativeHostsEmailNotification;
    public MeetingCreateMultipartFormDataSettings withAlternativeHostsEmailNotification(Boolean alternativeHostsEmailNotification) {
        this.alternativeHostsEmailNotification = alternativeHostsEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approval_type")
    public Long approvalType;
    public MeetingCreateMultipartFormDataSettings withApprovalType(Long approvalType) {
        this.approvalType = approvalType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approved_or_denied_countries_or_regions")
    public MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions approvedOrDeniedCountriesOrRegions;
    public MeetingCreateMultipartFormDataSettings withApprovedOrDeniedCountriesOrRegions(MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions approvedOrDeniedCountriesOrRegions) {
        this.approvedOrDeniedCountriesOrRegions = approvedOrDeniedCountriesOrRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio")
    public MeetingCreateMultipartFormDataSettingsAudioEnum audio;
    public MeetingCreateMultipartFormDataSettings withAudio(MeetingCreateMultipartFormDataSettingsAudioEnum audio) {
        this.audio = audio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_domains")
    public String authenticationDomains;
    public MeetingCreateMultipartFormDataSettings withAuthenticationDomains(String authenticationDomains) {
        this.authenticationDomains = authenticationDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_option")
    public String authenticationOption;
    public MeetingCreateMultipartFormDataSettings withAuthenticationOption(String authenticationOption) {
        this.authenticationOption = authenticationOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_recording")
    public MeetingCreateMultipartFormDataSettingsAutoRecordingEnum autoRecording;
    public MeetingCreateMultipartFormDataSettings withAutoRecording(MeetingCreateMultipartFormDataSettingsAutoRecordingEnum autoRecording) {
        this.autoRecording = autoRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("breakout_room")
    public MeetingCreateMultipartFormDataSettingsBreakoutRoom breakoutRoom;
    public MeetingCreateMultipartFormDataSettings withBreakoutRoom(MeetingCreateMultipartFormDataSettingsBreakoutRoom breakoutRoom) {
        this.breakoutRoom = breakoutRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("close_registration")
    public Boolean closeRegistration;
    public MeetingCreateMultipartFormDataSettings withCloseRegistration(Boolean closeRegistration) {
        this.closeRegistration = closeRegistration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cn_meeting")
    public Boolean cnMeeting;
    public MeetingCreateMultipartFormDataSettings withCnMeeting(Boolean cnMeeting) {
        this.cnMeeting = cnMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_email")
    public String contactEmail;
    public MeetingCreateMultipartFormDataSettings withContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_name")
    public String contactName;
    public MeetingCreateMultipartFormDataSettings withContactName(String contactName) {
        this.contactName = contactName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryption_type")
    public MeetingCreateMultipartFormDataSettingsEncryptionTypeEnum encryptionType;
    public MeetingCreateMultipartFormDataSettings withEncryptionType(MeetingCreateMultipartFormDataSettingsEncryptionTypeEnum encryptionType) {
        this.encryptionType = encryptionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("global_dial_in_countries")
    public String[] globalDialInCountries;
    public MeetingCreateMultipartFormDataSettings withGlobalDialInCountries(String[] globalDialInCountries) {
        this.globalDialInCountries = globalDialInCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_video")
    public Boolean hostVideo;
    public MeetingCreateMultipartFormDataSettings withHostVideo(Boolean hostVideo) {
        this.hostVideo = hostVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_meeting")
    public Boolean inMeeting;
    public MeetingCreateMultipartFormDataSettings withInMeeting(Boolean inMeeting) {
        this.inMeeting = inMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jbh_time")
    public Long jbhTime;
    public MeetingCreateMultipartFormDataSettings withJbhTime(Long jbhTime) {
        this.jbhTime = jbhTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("join_before_host")
    public Boolean joinBeforeHost;
    public MeetingCreateMultipartFormDataSettings withJoinBeforeHost(Boolean joinBeforeHost) {
        this.joinBeforeHost = joinBeforeHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language_interpretation")
    public MeetingCreateMultipartFormDataSettingsLanguageInterpretation languageInterpretation;
    public MeetingCreateMultipartFormDataSettings withLanguageInterpretation(MeetingCreateMultipartFormDataSettingsLanguageInterpretation languageInterpretation) {
        this.languageInterpretation = languageInterpretation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_authentication")
    public Boolean meetingAuthentication;
    public MeetingCreateMultipartFormDataSettings withMeetingAuthentication(Boolean meetingAuthentication) {
        this.meetingAuthentication = meetingAuthentication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mute_upon_entry")
    public Boolean muteUponEntry;
    public MeetingCreateMultipartFormDataSettings withMuteUponEntry(Boolean muteUponEntry) {
        this.muteUponEntry = muteUponEntry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_video")
    public Boolean participantVideo;
    public MeetingCreateMultipartFormDataSettings withParticipantVideo(Boolean participantVideo) {
        this.participantVideo = participantVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants_email_notification")
    public Boolean registrantsEmailNotification;
    public MeetingCreateMultipartFormDataSettings withRegistrantsEmailNotification(Boolean registrantsEmailNotification) {
        this.registrantsEmailNotification = registrantsEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registration_type")
    public Long registrationType;
    public MeetingCreateMultipartFormDataSettings withRegistrationType(Long registrationType) {
        this.registrationType = registrationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_share_button")
    public Boolean showShareButton;
    public MeetingCreateMultipartFormDataSettings withShowShareButton(Boolean showShareButton) {
        this.showShareButton = showShareButton;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_pmi")
    public Boolean usePmi;
    public MeetingCreateMultipartFormDataSettings withUsePmi(Boolean usePmi) {
        this.usePmi = usePmi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_room")
    public Boolean waitingRoom;
    public MeetingCreateMultipartFormDataSettings withWaitingRoom(Boolean waitingRoom) {
        this.waitingRoom = waitingRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watermark")
    public Boolean watermark;
    public MeetingCreateMultipartFormDataSettings withWatermark(Boolean watermark) {
        this.watermark = watermark;
        return this;
    }
}