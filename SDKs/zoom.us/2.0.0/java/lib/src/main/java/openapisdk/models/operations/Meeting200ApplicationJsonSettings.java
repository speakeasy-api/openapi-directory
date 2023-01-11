package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Meeting200ApplicationJsonSettings
 * Meeting settings.
**/
public class Meeting200ApplicationJsonSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_multiple_devices")
    public Boolean allowMultipleDevices;
    public Meeting200ApplicationJsonSettings withAllowMultipleDevices(Boolean allowMultipleDevices) {
        this.allowMultipleDevices = allowMultipleDevices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_hosts")
    public String alternativeHosts;
    public Meeting200ApplicationJsonSettings withAlternativeHosts(String alternativeHosts) {
        this.alternativeHosts = alternativeHosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_hosts_email_notification")
    public Boolean alternativeHostsEmailNotification;
    public Meeting200ApplicationJsonSettings withAlternativeHostsEmailNotification(Boolean alternativeHostsEmailNotification) {
        this.alternativeHostsEmailNotification = alternativeHostsEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approval_type")
    public Long approvalType;
    public Meeting200ApplicationJsonSettings withApprovalType(Long approvalType) {
        this.approvalType = approvalType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approved_or_denied_countries_or_regions")
    public Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions approvedOrDeniedCountriesOrRegions;
    public Meeting200ApplicationJsonSettings withApprovedOrDeniedCountriesOrRegions(Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions approvedOrDeniedCountriesOrRegions) {
        this.approvedOrDeniedCountriesOrRegions = approvedOrDeniedCountriesOrRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio")
    public Meeting200ApplicationJsonSettingsAudioEnum audio;
    public Meeting200ApplicationJsonSettings withAudio(Meeting200ApplicationJsonSettingsAudioEnum audio) {
        this.audio = audio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_domains")
    public String authenticationDomains;
    public Meeting200ApplicationJsonSettings withAuthenticationDomains(String authenticationDomains) {
        this.authenticationDomains = authenticationDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_exception")
    public Meeting200ApplicationJsonSettingsAuthenticationException[] authenticationException;
    public Meeting200ApplicationJsonSettings withAuthenticationException(Meeting200ApplicationJsonSettingsAuthenticationException[] authenticationException) {
        this.authenticationException = authenticationException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_name")
    public String authenticationName;
    public Meeting200ApplicationJsonSettings withAuthenticationName(String authenticationName) {
        this.authenticationName = authenticationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_option")
    public String authenticationOption;
    public Meeting200ApplicationJsonSettings withAuthenticationOption(String authenticationOption) {
        this.authenticationOption = authenticationOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_recording")
    public Meeting200ApplicationJsonSettingsAutoRecordingEnum autoRecording;
    public Meeting200ApplicationJsonSettings withAutoRecording(Meeting200ApplicationJsonSettingsAutoRecordingEnum autoRecording) {
        this.autoRecording = autoRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("breakout_room")
    public Meeting200ApplicationJsonSettingsBreakoutRoom breakoutRoom;
    public Meeting200ApplicationJsonSettings withBreakoutRoom(Meeting200ApplicationJsonSettingsBreakoutRoom breakoutRoom) {
        this.breakoutRoom = breakoutRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("close_registration")
    public Boolean closeRegistration;
    public Meeting200ApplicationJsonSettings withCloseRegistration(Boolean closeRegistration) {
        this.closeRegistration = closeRegistration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cn_meeting")
    public Boolean cnMeeting;
    public Meeting200ApplicationJsonSettings withCnMeeting(Boolean cnMeeting) {
        this.cnMeeting = cnMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_email")
    public String contactEmail;
    public Meeting200ApplicationJsonSettings withContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_name")
    public String contactName;
    public Meeting200ApplicationJsonSettings withContactName(String contactName) {
        this.contactName = contactName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_keys")
    public Meeting200ApplicationJsonSettingsCustomKeys[] customKeys;
    public Meeting200ApplicationJsonSettings withCustomKeys(Meeting200ApplicationJsonSettingsCustomKeys[] customKeys) {
        this.customKeys = customKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryption_type")
    public Meeting200ApplicationJsonSettingsEncryptionTypeEnum encryptionType;
    public Meeting200ApplicationJsonSettings withEncryptionType(Meeting200ApplicationJsonSettingsEncryptionTypeEnum encryptionType) {
        this.encryptionType = encryptionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_login")
    public Boolean enforceLogin;
    public Meeting200ApplicationJsonSettings withEnforceLogin(Boolean enforceLogin) {
        this.enforceLogin = enforceLogin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_login_domains")
    public String enforceLoginDomains;
    public Meeting200ApplicationJsonSettings withEnforceLoginDomains(String enforceLoginDomains) {
        this.enforceLoginDomains = enforceLoginDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("global_dial_in_countries")
    public String[] globalDialInCountries;
    public Meeting200ApplicationJsonSettings withGlobalDialInCountries(String[] globalDialInCountries) {
        this.globalDialInCountries = globalDialInCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("global_dial_in_numbers")
    public Meeting200ApplicationJsonSettingsGlobalDialInNumbers[] globalDialInNumbers;
    public Meeting200ApplicationJsonSettings withGlobalDialInNumbers(Meeting200ApplicationJsonSettingsGlobalDialInNumbers[] globalDialInNumbers) {
        this.globalDialInNumbers = globalDialInNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_video")
    public Boolean hostVideo;
    public Meeting200ApplicationJsonSettings withHostVideo(Boolean hostVideo) {
        this.hostVideo = hostVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_meeting")
    public Boolean inMeeting;
    public Meeting200ApplicationJsonSettings withInMeeting(Boolean inMeeting) {
        this.inMeeting = inMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jbh_time")
    public Long jbhTime;
    public Meeting200ApplicationJsonSettings withJbhTime(Long jbhTime) {
        this.jbhTime = jbhTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("join_before_host")
    public Boolean joinBeforeHost;
    public Meeting200ApplicationJsonSettings withJoinBeforeHost(Boolean joinBeforeHost) {
        this.joinBeforeHost = joinBeforeHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language_interpretation")
    public Meeting200ApplicationJsonSettingsLanguageInterpretation languageInterpretation;
    public Meeting200ApplicationJsonSettings withLanguageInterpretation(Meeting200ApplicationJsonSettingsLanguageInterpretation languageInterpretation) {
        this.languageInterpretation = languageInterpretation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_authentication")
    public Boolean meetingAuthentication;
    public Meeting200ApplicationJsonSettings withMeetingAuthentication(Boolean meetingAuthentication) {
        this.meetingAuthentication = meetingAuthentication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mute_upon_entry")
    public Boolean muteUponEntry;
    public Meeting200ApplicationJsonSettings withMuteUponEntry(Boolean muteUponEntry) {
        this.muteUponEntry = muteUponEntry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_video")
    public Boolean participantVideo;
    public Meeting200ApplicationJsonSettings withParticipantVideo(Boolean participantVideo) {
        this.participantVideo = participantVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants_confirmation_email")
    public Boolean registrantsConfirmationEmail;
    public Meeting200ApplicationJsonSettings withRegistrantsConfirmationEmail(Boolean registrantsConfirmationEmail) {
        this.registrantsConfirmationEmail = registrantsConfirmationEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants_email_notification")
    public Boolean registrantsEmailNotification;
    public Meeting200ApplicationJsonSettings withRegistrantsEmailNotification(Boolean registrantsEmailNotification) {
        this.registrantsEmailNotification = registrantsEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registration_type")
    public Long registrationType;
    public Meeting200ApplicationJsonSettings withRegistrationType(Long registrationType) {
        this.registrationType = registrationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_share_button")
    public Boolean showShareButton;
    public Meeting200ApplicationJsonSettings withShowShareButton(Boolean showShareButton) {
        this.showShareButton = showShareButton;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_pmi")
    public Boolean usePmi;
    public Meeting200ApplicationJsonSettings withUsePmi(Boolean usePmi) {
        this.usePmi = usePmi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_room")
    public Boolean waitingRoom;
    public Meeting200ApplicationJsonSettings withWaitingRoom(Boolean waitingRoom) {
        this.waitingRoom = waitingRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watermark")
    public Boolean watermark;
    public Meeting200ApplicationJsonSettings withWatermark(Boolean watermark) {
        this.watermark = watermark;
        return this;
    }
}