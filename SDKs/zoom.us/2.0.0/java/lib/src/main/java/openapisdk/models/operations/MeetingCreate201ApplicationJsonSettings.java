package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingCreate201ApplicationJsonSettings
 * Meeting settings.
**/
public class MeetingCreate201ApplicationJsonSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_multiple_devices")
    public Boolean allowMultipleDevices;
    public MeetingCreate201ApplicationJsonSettings withAllowMultipleDevices(Boolean allowMultipleDevices) {
        this.allowMultipleDevices = allowMultipleDevices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_hosts")
    public String alternativeHosts;
    public MeetingCreate201ApplicationJsonSettings withAlternativeHosts(String alternativeHosts) {
        this.alternativeHosts = alternativeHosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_hosts_email_notification")
    public Boolean alternativeHostsEmailNotification;
    public MeetingCreate201ApplicationJsonSettings withAlternativeHostsEmailNotification(Boolean alternativeHostsEmailNotification) {
        this.alternativeHostsEmailNotification = alternativeHostsEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approval_type")
    public Long approvalType;
    public MeetingCreate201ApplicationJsonSettings withApprovalType(Long approvalType) {
        this.approvalType = approvalType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approved_or_denied_countries_or_regions")
    public MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions approvedOrDeniedCountriesOrRegions;
    public MeetingCreate201ApplicationJsonSettings withApprovedOrDeniedCountriesOrRegions(MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions approvedOrDeniedCountriesOrRegions) {
        this.approvedOrDeniedCountriesOrRegions = approvedOrDeniedCountriesOrRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio")
    public MeetingCreate201ApplicationJsonSettingsAudioEnum audio;
    public MeetingCreate201ApplicationJsonSettings withAudio(MeetingCreate201ApplicationJsonSettingsAudioEnum audio) {
        this.audio = audio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_domains")
    public String authenticationDomains;
    public MeetingCreate201ApplicationJsonSettings withAuthenticationDomains(String authenticationDomains) {
        this.authenticationDomains = authenticationDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_exception")
    public MeetingCreate201ApplicationJsonSettingsAuthenticationException[] authenticationException;
    public MeetingCreate201ApplicationJsonSettings withAuthenticationException(MeetingCreate201ApplicationJsonSettingsAuthenticationException[] authenticationException) {
        this.authenticationException = authenticationException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_name")
    public String authenticationName;
    public MeetingCreate201ApplicationJsonSettings withAuthenticationName(String authenticationName) {
        this.authenticationName = authenticationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_option")
    public String authenticationOption;
    public MeetingCreate201ApplicationJsonSettings withAuthenticationOption(String authenticationOption) {
        this.authenticationOption = authenticationOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_recording")
    public MeetingCreate201ApplicationJsonSettingsAutoRecordingEnum autoRecording;
    public MeetingCreate201ApplicationJsonSettings withAutoRecording(MeetingCreate201ApplicationJsonSettingsAutoRecordingEnum autoRecording) {
        this.autoRecording = autoRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("breakout_room")
    public MeetingCreate201ApplicationJsonSettingsBreakoutRoom breakoutRoom;
    public MeetingCreate201ApplicationJsonSettings withBreakoutRoom(MeetingCreate201ApplicationJsonSettingsBreakoutRoom breakoutRoom) {
        this.breakoutRoom = breakoutRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("close_registration")
    public Boolean closeRegistration;
    public MeetingCreate201ApplicationJsonSettings withCloseRegistration(Boolean closeRegistration) {
        this.closeRegistration = closeRegistration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cn_meeting")
    public Boolean cnMeeting;
    public MeetingCreate201ApplicationJsonSettings withCnMeeting(Boolean cnMeeting) {
        this.cnMeeting = cnMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_email")
    public String contactEmail;
    public MeetingCreate201ApplicationJsonSettings withContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_name")
    public String contactName;
    public MeetingCreate201ApplicationJsonSettings withContactName(String contactName) {
        this.contactName = contactName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_keys")
    public MeetingCreate201ApplicationJsonSettingsCustomKeys[] customKeys;
    public MeetingCreate201ApplicationJsonSettings withCustomKeys(MeetingCreate201ApplicationJsonSettingsCustomKeys[] customKeys) {
        this.customKeys = customKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryption_type")
    public MeetingCreate201ApplicationJsonSettingsEncryptionTypeEnum encryptionType;
    public MeetingCreate201ApplicationJsonSettings withEncryptionType(MeetingCreate201ApplicationJsonSettingsEncryptionTypeEnum encryptionType) {
        this.encryptionType = encryptionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_login")
    public Boolean enforceLogin;
    public MeetingCreate201ApplicationJsonSettings withEnforceLogin(Boolean enforceLogin) {
        this.enforceLogin = enforceLogin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_login_domains")
    public String enforceLoginDomains;
    public MeetingCreate201ApplicationJsonSettings withEnforceLoginDomains(String enforceLoginDomains) {
        this.enforceLoginDomains = enforceLoginDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("global_dial_in_countries")
    public String[] globalDialInCountries;
    public MeetingCreate201ApplicationJsonSettings withGlobalDialInCountries(String[] globalDialInCountries) {
        this.globalDialInCountries = globalDialInCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("global_dial_in_numbers")
    public MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers[] globalDialInNumbers;
    public MeetingCreate201ApplicationJsonSettings withGlobalDialInNumbers(MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers[] globalDialInNumbers) {
        this.globalDialInNumbers = globalDialInNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_video")
    public Boolean hostVideo;
    public MeetingCreate201ApplicationJsonSettings withHostVideo(Boolean hostVideo) {
        this.hostVideo = hostVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_meeting")
    public Boolean inMeeting;
    public MeetingCreate201ApplicationJsonSettings withInMeeting(Boolean inMeeting) {
        this.inMeeting = inMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jbh_time")
    public Long jbhTime;
    public MeetingCreate201ApplicationJsonSettings withJbhTime(Long jbhTime) {
        this.jbhTime = jbhTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("join_before_host")
    public Boolean joinBeforeHost;
    public MeetingCreate201ApplicationJsonSettings withJoinBeforeHost(Boolean joinBeforeHost) {
        this.joinBeforeHost = joinBeforeHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language_interpretation")
    public MeetingCreate201ApplicationJsonSettingsLanguageInterpretation languageInterpretation;
    public MeetingCreate201ApplicationJsonSettings withLanguageInterpretation(MeetingCreate201ApplicationJsonSettingsLanguageInterpretation languageInterpretation) {
        this.languageInterpretation = languageInterpretation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_authentication")
    public Boolean meetingAuthentication;
    public MeetingCreate201ApplicationJsonSettings withMeetingAuthentication(Boolean meetingAuthentication) {
        this.meetingAuthentication = meetingAuthentication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mute_upon_entry")
    public Boolean muteUponEntry;
    public MeetingCreate201ApplicationJsonSettings withMuteUponEntry(Boolean muteUponEntry) {
        this.muteUponEntry = muteUponEntry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_video")
    public Boolean participantVideo;
    public MeetingCreate201ApplicationJsonSettings withParticipantVideo(Boolean participantVideo) {
        this.participantVideo = participantVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants_confirmation_email")
    public Boolean registrantsConfirmationEmail;
    public MeetingCreate201ApplicationJsonSettings withRegistrantsConfirmationEmail(Boolean registrantsConfirmationEmail) {
        this.registrantsConfirmationEmail = registrantsConfirmationEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants_email_notification")
    public Boolean registrantsEmailNotification;
    public MeetingCreate201ApplicationJsonSettings withRegistrantsEmailNotification(Boolean registrantsEmailNotification) {
        this.registrantsEmailNotification = registrantsEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registration_type")
    public Long registrationType;
    public MeetingCreate201ApplicationJsonSettings withRegistrationType(Long registrationType) {
        this.registrationType = registrationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_share_button")
    public Boolean showShareButton;
    public MeetingCreate201ApplicationJsonSettings withShowShareButton(Boolean showShareButton) {
        this.showShareButton = showShareButton;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_pmi")
    public Boolean usePmi;
    public MeetingCreate201ApplicationJsonSettings withUsePmi(Boolean usePmi) {
        this.usePmi = usePmi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_room")
    public Boolean waitingRoom;
    public MeetingCreate201ApplicationJsonSettings withWaitingRoom(Boolean waitingRoom) {
        this.waitingRoom = waitingRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watermark")
    public Boolean watermark;
    public MeetingCreate201ApplicationJsonSettings withWatermark(Boolean watermark) {
        this.watermark = watermark;
        return this;
    }
}