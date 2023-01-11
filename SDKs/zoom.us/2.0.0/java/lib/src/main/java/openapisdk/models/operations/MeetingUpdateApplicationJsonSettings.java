package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingUpdateApplicationJsonSettings
 * Meeting settings.
**/
public class MeetingUpdateApplicationJsonSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_multiple_devices")
    public Boolean allowMultipleDevices;
    public MeetingUpdateApplicationJsonSettings withAllowMultipleDevices(Boolean allowMultipleDevices) {
        this.allowMultipleDevices = allowMultipleDevices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_hosts")
    public String alternativeHosts;
    public MeetingUpdateApplicationJsonSettings withAlternativeHosts(String alternativeHosts) {
        this.alternativeHosts = alternativeHosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_hosts_email_notification")
    public Boolean alternativeHostsEmailNotification;
    public MeetingUpdateApplicationJsonSettings withAlternativeHostsEmailNotification(Boolean alternativeHostsEmailNotification) {
        this.alternativeHostsEmailNotification = alternativeHostsEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approval_type")
    public Long approvalType;
    public MeetingUpdateApplicationJsonSettings withApprovalType(Long approvalType) {
        this.approvalType = approvalType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approved_or_denied_countries_or_regions")
    public MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions approvedOrDeniedCountriesOrRegions;
    public MeetingUpdateApplicationJsonSettings withApprovedOrDeniedCountriesOrRegions(MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions approvedOrDeniedCountriesOrRegions) {
        this.approvedOrDeniedCountriesOrRegions = approvedOrDeniedCountriesOrRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio")
    public MeetingUpdateApplicationJsonSettingsAudioEnum audio;
    public MeetingUpdateApplicationJsonSettings withAudio(MeetingUpdateApplicationJsonSettingsAudioEnum audio) {
        this.audio = audio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_domains")
    public String authenticationDomains;
    public MeetingUpdateApplicationJsonSettings withAuthenticationDomains(String authenticationDomains) {
        this.authenticationDomains = authenticationDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_exception")
    public MeetingUpdateApplicationJsonSettingsAuthenticationException[] authenticationException;
    public MeetingUpdateApplicationJsonSettings withAuthenticationException(MeetingUpdateApplicationJsonSettingsAuthenticationException[] authenticationException) {
        this.authenticationException = authenticationException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_name")
    public String authenticationName;
    public MeetingUpdateApplicationJsonSettings withAuthenticationName(String authenticationName) {
        this.authenticationName = authenticationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_option")
    public String authenticationOption;
    public MeetingUpdateApplicationJsonSettings withAuthenticationOption(String authenticationOption) {
        this.authenticationOption = authenticationOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_recording")
    public MeetingUpdateApplicationJsonSettingsAutoRecordingEnum autoRecording;
    public MeetingUpdateApplicationJsonSettings withAutoRecording(MeetingUpdateApplicationJsonSettingsAutoRecordingEnum autoRecording) {
        this.autoRecording = autoRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("breakout_room")
    public MeetingUpdateApplicationJsonSettingsBreakoutRoom breakoutRoom;
    public MeetingUpdateApplicationJsonSettings withBreakoutRoom(MeetingUpdateApplicationJsonSettingsBreakoutRoom breakoutRoom) {
        this.breakoutRoom = breakoutRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("close_registration")
    public Boolean closeRegistration;
    public MeetingUpdateApplicationJsonSettings withCloseRegistration(Boolean closeRegistration) {
        this.closeRegistration = closeRegistration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cn_meeting")
    public Boolean cnMeeting;
    public MeetingUpdateApplicationJsonSettings withCnMeeting(Boolean cnMeeting) {
        this.cnMeeting = cnMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_email")
    public String contactEmail;
    public MeetingUpdateApplicationJsonSettings withContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_name")
    public String contactName;
    public MeetingUpdateApplicationJsonSettings withContactName(String contactName) {
        this.contactName = contactName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_keys")
    public MeetingUpdateApplicationJsonSettingsCustomKeys[] customKeys;
    public MeetingUpdateApplicationJsonSettings withCustomKeys(MeetingUpdateApplicationJsonSettingsCustomKeys[] customKeys) {
        this.customKeys = customKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryption_type")
    public MeetingUpdateApplicationJsonSettingsEncryptionTypeEnum encryptionType;
    public MeetingUpdateApplicationJsonSettings withEncryptionType(MeetingUpdateApplicationJsonSettingsEncryptionTypeEnum encryptionType) {
        this.encryptionType = encryptionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_login")
    public Boolean enforceLogin;
    public MeetingUpdateApplicationJsonSettings withEnforceLogin(Boolean enforceLogin) {
        this.enforceLogin = enforceLogin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_login_domains")
    public String enforceLoginDomains;
    public MeetingUpdateApplicationJsonSettings withEnforceLoginDomains(String enforceLoginDomains) {
        this.enforceLoginDomains = enforceLoginDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("global_dial_in_countries")
    public String[] globalDialInCountries;
    public MeetingUpdateApplicationJsonSettings withGlobalDialInCountries(String[] globalDialInCountries) {
        this.globalDialInCountries = globalDialInCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("global_dial_in_numbers")
    public MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers[] globalDialInNumbers;
    public MeetingUpdateApplicationJsonSettings withGlobalDialInNumbers(MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers[] globalDialInNumbers) {
        this.globalDialInNumbers = globalDialInNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_video")
    public Boolean hostVideo;
    public MeetingUpdateApplicationJsonSettings withHostVideo(Boolean hostVideo) {
        this.hostVideo = hostVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_meeting")
    public Boolean inMeeting;
    public MeetingUpdateApplicationJsonSettings withInMeeting(Boolean inMeeting) {
        this.inMeeting = inMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jbh_time")
    public Long jbhTime;
    public MeetingUpdateApplicationJsonSettings withJbhTime(Long jbhTime) {
        this.jbhTime = jbhTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("join_before_host")
    public Boolean joinBeforeHost;
    public MeetingUpdateApplicationJsonSettings withJoinBeforeHost(Boolean joinBeforeHost) {
        this.joinBeforeHost = joinBeforeHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language_interpretation")
    public MeetingUpdateApplicationJsonSettingsLanguageInterpretation languageInterpretation;
    public MeetingUpdateApplicationJsonSettings withLanguageInterpretation(MeetingUpdateApplicationJsonSettingsLanguageInterpretation languageInterpretation) {
        this.languageInterpretation = languageInterpretation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_authentication")
    public Boolean meetingAuthentication;
    public MeetingUpdateApplicationJsonSettings withMeetingAuthentication(Boolean meetingAuthentication) {
        this.meetingAuthentication = meetingAuthentication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mute_upon_entry")
    public Boolean muteUponEntry;
    public MeetingUpdateApplicationJsonSettings withMuteUponEntry(Boolean muteUponEntry) {
        this.muteUponEntry = muteUponEntry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_video")
    public Boolean participantVideo;
    public MeetingUpdateApplicationJsonSettings withParticipantVideo(Boolean participantVideo) {
        this.participantVideo = participantVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants_confirmation_email")
    public Boolean registrantsConfirmationEmail;
    public MeetingUpdateApplicationJsonSettings withRegistrantsConfirmationEmail(Boolean registrantsConfirmationEmail) {
        this.registrantsConfirmationEmail = registrantsConfirmationEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants_email_notification")
    public Boolean registrantsEmailNotification;
    public MeetingUpdateApplicationJsonSettings withRegistrantsEmailNotification(Boolean registrantsEmailNotification) {
        this.registrantsEmailNotification = registrantsEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registration_type")
    public Long registrationType;
    public MeetingUpdateApplicationJsonSettings withRegistrationType(Long registrationType) {
        this.registrationType = registrationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_share_button")
    public Boolean showShareButton;
    public MeetingUpdateApplicationJsonSettings withShowShareButton(Boolean showShareButton) {
        this.showShareButton = showShareButton;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_pmi")
    public Boolean usePmi;
    public MeetingUpdateApplicationJsonSettings withUsePmi(Boolean usePmi) {
        this.usePmi = usePmi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_room")
    public Boolean waitingRoom;
    public MeetingUpdateApplicationJsonSettings withWaitingRoom(Boolean waitingRoom) {
        this.waitingRoom = waitingRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watermark")
    public Boolean watermark;
    public MeetingUpdateApplicationJsonSettings withWatermark(Boolean watermark) {
        this.watermark = watermark;
        return this;
    }
}