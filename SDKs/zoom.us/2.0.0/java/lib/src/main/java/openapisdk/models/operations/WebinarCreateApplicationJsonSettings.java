package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarCreateApplicationJsonSettings
 * Create Webinar settings.
**/
public class WebinarCreateApplicationJsonSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_multiple_devices")
    public Boolean allowMultipleDevices;
    public WebinarCreateApplicationJsonSettings withAllowMultipleDevices(Boolean allowMultipleDevices) {
        this.allowMultipleDevices = allowMultipleDevices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_hosts")
    public String alternativeHosts;
    public WebinarCreateApplicationJsonSettings withAlternativeHosts(String alternativeHosts) {
        this.alternativeHosts = alternativeHosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approval_type")
    public Long approvalType;
    public WebinarCreateApplicationJsonSettings withApprovalType(Long approvalType) {
        this.approvalType = approvalType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attendees_and_panelists_reminder_email_notification")
    public WebinarCreateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification attendeesAndPanelistsReminderEmailNotification;
    public WebinarCreateApplicationJsonSettings withAttendeesAndPanelistsReminderEmailNotification(WebinarCreateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification attendeesAndPanelistsReminderEmailNotification) {
        this.attendeesAndPanelistsReminderEmailNotification = attendeesAndPanelistsReminderEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio")
    public WebinarCreateApplicationJsonSettingsAudioEnum audio;
    public WebinarCreateApplicationJsonSettings withAudio(WebinarCreateApplicationJsonSettingsAudioEnum audio) {
        this.audio = audio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_domains")
    public String authenticationDomains;
    public WebinarCreateApplicationJsonSettings withAuthenticationDomains(String authenticationDomains) {
        this.authenticationDomains = authenticationDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_option")
    public String authenticationOption;
    public WebinarCreateApplicationJsonSettings withAuthenticationOption(String authenticationOption) {
        this.authenticationOption = authenticationOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_recording")
    public WebinarCreateApplicationJsonSettingsAutoRecordingEnum autoRecording;
    public WebinarCreateApplicationJsonSettings withAutoRecording(WebinarCreateApplicationJsonSettingsAutoRecordingEnum autoRecording) {
        this.autoRecording = autoRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("close_registration")
    public Boolean closeRegistration;
    public WebinarCreateApplicationJsonSettings withCloseRegistration(Boolean closeRegistration) {
        this.closeRegistration = closeRegistration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_email")
    public String contactEmail;
    public WebinarCreateApplicationJsonSettings withContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_name")
    public String contactName;
    public WebinarCreateApplicationJsonSettings withContactName(String contactName) {
        this.contactName = contactName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_language")
    public String emailLanguage;
    public WebinarCreateApplicationJsonSettings withEmailLanguage(String emailLanguage) {
        this.emailLanguage = emailLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_login")
    public Boolean enforceLogin;
    public WebinarCreateApplicationJsonSettings withEnforceLogin(Boolean enforceLogin) {
        this.enforceLogin = enforceLogin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_login_domains")
    public String enforceLoginDomains;
    public WebinarCreateApplicationJsonSettings withEnforceLoginDomains(String enforceLoginDomains) {
        this.enforceLoginDomains = enforceLoginDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("follow_up_absentees_email_notification")
    public WebinarCreateApplicationJsonSettingsFollowUpAbsenteesEmailNotification followUpAbsenteesEmailNotification;
    public WebinarCreateApplicationJsonSettings withFollowUpAbsenteesEmailNotification(WebinarCreateApplicationJsonSettingsFollowUpAbsenteesEmailNotification followUpAbsenteesEmailNotification) {
        this.followUpAbsenteesEmailNotification = followUpAbsenteesEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("follow_up_attendees_email_notification")
    public WebinarCreateApplicationJsonSettingsFollowUpAttendeesEmailNotification followUpAttendeesEmailNotification;
    public WebinarCreateApplicationJsonSettings withFollowUpAttendeesEmailNotification(WebinarCreateApplicationJsonSettingsFollowUpAttendeesEmailNotification followUpAttendeesEmailNotification) {
        this.followUpAttendeesEmailNotification = followUpAttendeesEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("global_dial_in_countries")
    public String[] globalDialInCountries;
    public WebinarCreateApplicationJsonSettings withGlobalDialInCountries(String[] globalDialInCountries) {
        this.globalDialInCountries = globalDialInCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hd_video")
    public Boolean hdVideo;
    public WebinarCreateApplicationJsonSettings withHdVideo(Boolean hdVideo) {
        this.hdVideo = hdVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_video")
    public Boolean hostVideo;
    public WebinarCreateApplicationJsonSettings withHostVideo(Boolean hostVideo) {
        this.hostVideo = hostVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_authentication")
    public Boolean meetingAuthentication;
    public WebinarCreateApplicationJsonSettings withMeetingAuthentication(Boolean meetingAuthentication) {
        this.meetingAuthentication = meetingAuthentication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("on_demand")
    public Boolean onDemand;
    public WebinarCreateApplicationJsonSettings withOnDemand(Boolean onDemand) {
        this.onDemand = onDemand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("panelists_invitation_email_notification")
    public Boolean panelistsInvitationEmailNotification;
    public WebinarCreateApplicationJsonSettings withPanelistsInvitationEmailNotification(Boolean panelistsInvitationEmailNotification) {
        this.panelistsInvitationEmailNotification = panelistsInvitationEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("panelists_video")
    public Boolean panelistsVideo;
    public WebinarCreateApplicationJsonSettings withPanelistsVideo(Boolean panelistsVideo) {
        this.panelistsVideo = panelistsVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("post_webinar_survey")
    public Boolean postWebinarSurvey;
    public WebinarCreateApplicationJsonSettings withPostWebinarSurvey(Boolean postWebinarSurvey) {
        this.postWebinarSurvey = postWebinarSurvey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("practice_session")
    public Boolean practiceSession;
    public WebinarCreateApplicationJsonSettings withPracticeSession(Boolean practiceSession) {
        this.practiceSession = practiceSession;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("question_and_answer")
    public WebinarCreateApplicationJsonSettingsQuestionAndAnswer questionAndAnswer;
    public WebinarCreateApplicationJsonSettings withQuestionAndAnswer(WebinarCreateApplicationJsonSettingsQuestionAndAnswer questionAndAnswer) {
        this.questionAndAnswer = questionAndAnswer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants_email_notification")
    public Boolean registrantsEmailNotification;
    public WebinarCreateApplicationJsonSettings withRegistrantsEmailNotification(Boolean registrantsEmailNotification) {
        this.registrantsEmailNotification = registrantsEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants_restrict_number")
    public Long registrantsRestrictNumber;
    public WebinarCreateApplicationJsonSettings withRegistrantsRestrictNumber(Long registrantsRestrictNumber) {
        this.registrantsRestrictNumber = registrantsRestrictNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registration_type")
    public Long registrationType;
    public WebinarCreateApplicationJsonSettings withRegistrationType(Long registrationType) {
        this.registrationType = registrationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_share_button")
    public Boolean showShareButton;
    public WebinarCreateApplicationJsonSettings withShowShareButton(Boolean showShareButton) {
        this.showShareButton = showShareButton;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("survey_url")
    public String surveyUrl;
    public WebinarCreateApplicationJsonSettings withSurveyUrl(String surveyUrl) {
        this.surveyUrl = surveyUrl;
        return this;
    }
}