package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingUpdateMultipartFormDataSettings
 * Meeting settings.
**/
public class MeetingUpdateMultipartFormDataSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_multiple_devices")
    public Boolean allowMultipleDevices;
    public MeetingUpdateMultipartFormDataSettings withAllowMultipleDevices(Boolean allowMultipleDevices) {
        this.allowMultipleDevices = allowMultipleDevices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_hosts")
    public String alternativeHosts;
    public MeetingUpdateMultipartFormDataSettings withAlternativeHosts(String alternativeHosts) {
        this.alternativeHosts = alternativeHosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_hosts_email_notification")
    public Boolean alternativeHostsEmailNotification;
    public MeetingUpdateMultipartFormDataSettings withAlternativeHostsEmailNotification(Boolean alternativeHostsEmailNotification) {
        this.alternativeHostsEmailNotification = alternativeHostsEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approval_type")
    public Long approvalType;
    public MeetingUpdateMultipartFormDataSettings withApprovalType(Long approvalType) {
        this.approvalType = approvalType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approved_or_denied_countries_or_regions")
    public MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions approvedOrDeniedCountriesOrRegions;
    public MeetingUpdateMultipartFormDataSettings withApprovedOrDeniedCountriesOrRegions(MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions approvedOrDeniedCountriesOrRegions) {
        this.approvedOrDeniedCountriesOrRegions = approvedOrDeniedCountriesOrRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio")
    public MeetingUpdateMultipartFormDataSettingsAudioEnum audio;
    public MeetingUpdateMultipartFormDataSettings withAudio(MeetingUpdateMultipartFormDataSettingsAudioEnum audio) {
        this.audio = audio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_domains")
    public String authenticationDomains;
    public MeetingUpdateMultipartFormDataSettings withAuthenticationDomains(String authenticationDomains) {
        this.authenticationDomains = authenticationDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_exception")
    public MeetingUpdateMultipartFormDataSettingsAuthenticationException[] authenticationException;
    public MeetingUpdateMultipartFormDataSettings withAuthenticationException(MeetingUpdateMultipartFormDataSettingsAuthenticationException[] authenticationException) {
        this.authenticationException = authenticationException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_name")
    public String authenticationName;
    public MeetingUpdateMultipartFormDataSettings withAuthenticationName(String authenticationName) {
        this.authenticationName = authenticationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_option")
    public String authenticationOption;
    public MeetingUpdateMultipartFormDataSettings withAuthenticationOption(String authenticationOption) {
        this.authenticationOption = authenticationOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_recording")
    public MeetingUpdateMultipartFormDataSettingsAutoRecordingEnum autoRecording;
    public MeetingUpdateMultipartFormDataSettings withAutoRecording(MeetingUpdateMultipartFormDataSettingsAutoRecordingEnum autoRecording) {
        this.autoRecording = autoRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("breakout_room")
    public MeetingUpdateMultipartFormDataSettingsBreakoutRoom breakoutRoom;
    public MeetingUpdateMultipartFormDataSettings withBreakoutRoom(MeetingUpdateMultipartFormDataSettingsBreakoutRoom breakoutRoom) {
        this.breakoutRoom = breakoutRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("close_registration")
    public Boolean closeRegistration;
    public MeetingUpdateMultipartFormDataSettings withCloseRegistration(Boolean closeRegistration) {
        this.closeRegistration = closeRegistration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cn_meeting")
    public Boolean cnMeeting;
    public MeetingUpdateMultipartFormDataSettings withCnMeeting(Boolean cnMeeting) {
        this.cnMeeting = cnMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_email")
    public String contactEmail;
    public MeetingUpdateMultipartFormDataSettings withContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_name")
    public String contactName;
    public MeetingUpdateMultipartFormDataSettings withContactName(String contactName) {
        this.contactName = contactName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_keys")
    public MeetingUpdateMultipartFormDataSettingsCustomKeys[] customKeys;
    public MeetingUpdateMultipartFormDataSettings withCustomKeys(MeetingUpdateMultipartFormDataSettingsCustomKeys[] customKeys) {
        this.customKeys = customKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryption_type")
    public MeetingUpdateMultipartFormDataSettingsEncryptionTypeEnum encryptionType;
    public MeetingUpdateMultipartFormDataSettings withEncryptionType(MeetingUpdateMultipartFormDataSettingsEncryptionTypeEnum encryptionType) {
        this.encryptionType = encryptionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_login")
    public Boolean enforceLogin;
    public MeetingUpdateMultipartFormDataSettings withEnforceLogin(Boolean enforceLogin) {
        this.enforceLogin = enforceLogin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_login_domains")
    public String enforceLoginDomains;
    public MeetingUpdateMultipartFormDataSettings withEnforceLoginDomains(String enforceLoginDomains) {
        this.enforceLoginDomains = enforceLoginDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("global_dial_in_countries")
    public String[] globalDialInCountries;
    public MeetingUpdateMultipartFormDataSettings withGlobalDialInCountries(String[] globalDialInCountries) {
        this.globalDialInCountries = globalDialInCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("global_dial_in_numbers")
    public MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers[] globalDialInNumbers;
    public MeetingUpdateMultipartFormDataSettings withGlobalDialInNumbers(MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers[] globalDialInNumbers) {
        this.globalDialInNumbers = globalDialInNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_video")
    public Boolean hostVideo;
    public MeetingUpdateMultipartFormDataSettings withHostVideo(Boolean hostVideo) {
        this.hostVideo = hostVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_meeting")
    public Boolean inMeeting;
    public MeetingUpdateMultipartFormDataSettings withInMeeting(Boolean inMeeting) {
        this.inMeeting = inMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jbh_time")
    public Long jbhTime;
    public MeetingUpdateMultipartFormDataSettings withJbhTime(Long jbhTime) {
        this.jbhTime = jbhTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("join_before_host")
    public Boolean joinBeforeHost;
    public MeetingUpdateMultipartFormDataSettings withJoinBeforeHost(Boolean joinBeforeHost) {
        this.joinBeforeHost = joinBeforeHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language_interpretation")
    public MeetingUpdateMultipartFormDataSettingsLanguageInterpretation languageInterpretation;
    public MeetingUpdateMultipartFormDataSettings withLanguageInterpretation(MeetingUpdateMultipartFormDataSettingsLanguageInterpretation languageInterpretation) {
        this.languageInterpretation = languageInterpretation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_authentication")
    public Boolean meetingAuthentication;
    public MeetingUpdateMultipartFormDataSettings withMeetingAuthentication(Boolean meetingAuthentication) {
        this.meetingAuthentication = meetingAuthentication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mute_upon_entry")
    public Boolean muteUponEntry;
    public MeetingUpdateMultipartFormDataSettings withMuteUponEntry(Boolean muteUponEntry) {
        this.muteUponEntry = muteUponEntry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_video")
    public Boolean participantVideo;
    public MeetingUpdateMultipartFormDataSettings withParticipantVideo(Boolean participantVideo) {
        this.participantVideo = participantVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants_confirmation_email")
    public Boolean registrantsConfirmationEmail;
    public MeetingUpdateMultipartFormDataSettings withRegistrantsConfirmationEmail(Boolean registrantsConfirmationEmail) {
        this.registrantsConfirmationEmail = registrantsConfirmationEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants_email_notification")
    public Boolean registrantsEmailNotification;
    public MeetingUpdateMultipartFormDataSettings withRegistrantsEmailNotification(Boolean registrantsEmailNotification) {
        this.registrantsEmailNotification = registrantsEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registration_type")
    public Long registrationType;
    public MeetingUpdateMultipartFormDataSettings withRegistrationType(Long registrationType) {
        this.registrationType = registrationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_share_button")
    public Boolean showShareButton;
    public MeetingUpdateMultipartFormDataSettings withShowShareButton(Boolean showShareButton) {
        this.showShareButton = showShareButton;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_pmi")
    public Boolean usePmi;
    public MeetingUpdateMultipartFormDataSettings withUsePmi(Boolean usePmi) {
        this.usePmi = usePmi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_room")
    public Boolean waitingRoom;
    public MeetingUpdateMultipartFormDataSettings withWaitingRoom(Boolean waitingRoom) {
        this.waitingRoom = waitingRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watermark")
    public Boolean watermark;
    public MeetingUpdateMultipartFormDataSettings withWatermark(Boolean watermark) {
        this.watermark = watermark;
        return this;
    }
}