package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarUpdateMultipartFormDataSettings
 * Webinar settings.
**/
public class WebinarUpdateMultipartFormDataSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_multiple_devices")
    public Boolean allowMultipleDevices;
    public WebinarUpdateMultipartFormDataSettings withAllowMultipleDevices(Boolean allowMultipleDevices) {
        this.allowMultipleDevices = allowMultipleDevices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_hosts")
    public String alternativeHosts;
    public WebinarUpdateMultipartFormDataSettings withAlternativeHosts(String alternativeHosts) {
        this.alternativeHosts = alternativeHosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approval_type")
    public Long approvalType;
    public WebinarUpdateMultipartFormDataSettings withApprovalType(Long approvalType) {
        this.approvalType = approvalType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attendees_and_panelists_reminder_email_notification")
    public WebinarUpdateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification attendeesAndPanelistsReminderEmailNotification;
    public WebinarUpdateMultipartFormDataSettings withAttendeesAndPanelistsReminderEmailNotification(WebinarUpdateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification attendeesAndPanelistsReminderEmailNotification) {
        this.attendeesAndPanelistsReminderEmailNotification = attendeesAndPanelistsReminderEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio")
    public WebinarUpdateMultipartFormDataSettingsAudioEnum audio;
    public WebinarUpdateMultipartFormDataSettings withAudio(WebinarUpdateMultipartFormDataSettingsAudioEnum audio) {
        this.audio = audio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_domains")
    public String authenticationDomains;
    public WebinarUpdateMultipartFormDataSettings withAuthenticationDomains(String authenticationDomains) {
        this.authenticationDomains = authenticationDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_name")
    public String authenticationName;
    public WebinarUpdateMultipartFormDataSettings withAuthenticationName(String authenticationName) {
        this.authenticationName = authenticationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_option")
    public String authenticationOption;
    public WebinarUpdateMultipartFormDataSettings withAuthenticationOption(String authenticationOption) {
        this.authenticationOption = authenticationOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_recording")
    public WebinarUpdateMultipartFormDataSettingsAutoRecordingEnum autoRecording;
    public WebinarUpdateMultipartFormDataSettings withAutoRecording(WebinarUpdateMultipartFormDataSettingsAutoRecordingEnum autoRecording) {
        this.autoRecording = autoRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("close_registration")
    public Boolean closeRegistration;
    public WebinarUpdateMultipartFormDataSettings withCloseRegistration(Boolean closeRegistration) {
        this.closeRegistration = closeRegistration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_email")
    public String contactEmail;
    public WebinarUpdateMultipartFormDataSettings withContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_name")
    public String contactName;
    public WebinarUpdateMultipartFormDataSettings withContactName(String contactName) {
        this.contactName = contactName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_language")
    public String emailLanguage;
    public WebinarUpdateMultipartFormDataSettings withEmailLanguage(String emailLanguage) {
        this.emailLanguage = emailLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_login")
    public Boolean enforceLogin;
    public WebinarUpdateMultipartFormDataSettings withEnforceLogin(Boolean enforceLogin) {
        this.enforceLogin = enforceLogin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_login_domains")
    public String enforceLoginDomains;
    public WebinarUpdateMultipartFormDataSettings withEnforceLoginDomains(String enforceLoginDomains) {
        this.enforceLoginDomains = enforceLoginDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("follow_up_absentees_email_notification")
    public WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification followUpAbsenteesEmailNotification;
    public WebinarUpdateMultipartFormDataSettings withFollowUpAbsenteesEmailNotification(WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification followUpAbsenteesEmailNotification) {
        this.followUpAbsenteesEmailNotification = followUpAbsenteesEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("follow_up_attendees_email_notification")
    public WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification followUpAttendeesEmailNotification;
    public WebinarUpdateMultipartFormDataSettings withFollowUpAttendeesEmailNotification(WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification followUpAttendeesEmailNotification) {
        this.followUpAttendeesEmailNotification = followUpAttendeesEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("global_dial_in_countries")
    public String[] globalDialInCountries;
    public WebinarUpdateMultipartFormDataSettings withGlobalDialInCountries(String[] globalDialInCountries) {
        this.globalDialInCountries = globalDialInCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hd_video")
    public Boolean hdVideo;
    public WebinarUpdateMultipartFormDataSettings withHdVideo(Boolean hdVideo) {
        this.hdVideo = hdVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_video")
    public Boolean hostVideo;
    public WebinarUpdateMultipartFormDataSettings withHostVideo(Boolean hostVideo) {
        this.hostVideo = hostVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_authentication")
    public Boolean meetingAuthentication;
    public WebinarUpdateMultipartFormDataSettings withMeetingAuthentication(Boolean meetingAuthentication) {
        this.meetingAuthentication = meetingAuthentication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notify_registrants")
    public Boolean notifyRegistrants;
    public WebinarUpdateMultipartFormDataSettings withNotifyRegistrants(Boolean notifyRegistrants) {
        this.notifyRegistrants = notifyRegistrants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("on_demand")
    public Boolean onDemand;
    public WebinarUpdateMultipartFormDataSettings withOnDemand(Boolean onDemand) {
        this.onDemand = onDemand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("panelists_invitation_email_notification")
    public Boolean panelistsInvitationEmailNotification;
    public WebinarUpdateMultipartFormDataSettings withPanelistsInvitationEmailNotification(Boolean panelistsInvitationEmailNotification) {
        this.panelistsInvitationEmailNotification = panelistsInvitationEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("panelists_video")
    public Boolean panelistsVideo;
    public WebinarUpdateMultipartFormDataSettings withPanelistsVideo(Boolean panelistsVideo) {
        this.panelistsVideo = panelistsVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("post_webinar_survey")
    public Boolean postWebinarSurvey;
    public WebinarUpdateMultipartFormDataSettings withPostWebinarSurvey(Boolean postWebinarSurvey) {
        this.postWebinarSurvey = postWebinarSurvey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("practice_session")
    public Boolean practiceSession;
    public WebinarUpdateMultipartFormDataSettings withPracticeSession(Boolean practiceSession) {
        this.practiceSession = practiceSession;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("question_and_answer")
    public WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer questionAndAnswer;
    public WebinarUpdateMultipartFormDataSettings withQuestionAndAnswer(WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer questionAndAnswer) {
        this.questionAndAnswer = questionAndAnswer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants_confirmation_email")
    public Boolean registrantsConfirmationEmail;
    public WebinarUpdateMultipartFormDataSettings withRegistrantsConfirmationEmail(Boolean registrantsConfirmationEmail) {
        this.registrantsConfirmationEmail = registrantsConfirmationEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants_email_notification")
    public Boolean registrantsEmailNotification;
    public WebinarUpdateMultipartFormDataSettings withRegistrantsEmailNotification(Boolean registrantsEmailNotification) {
        this.registrantsEmailNotification = registrantsEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants_restrict_number")
    public Long registrantsRestrictNumber;
    public WebinarUpdateMultipartFormDataSettings withRegistrantsRestrictNumber(Long registrantsRestrictNumber) {
        this.registrantsRestrictNumber = registrantsRestrictNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registration_type")
    public Long registrationType;
    public WebinarUpdateMultipartFormDataSettings withRegistrationType(Long registrationType) {
        this.registrationType = registrationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_share_button")
    public Boolean showShareButton;
    public WebinarUpdateMultipartFormDataSettings withShowShareButton(Boolean showShareButton) {
        this.showShareButton = showShareButton;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("survey_url")
    public String surveyUrl;
    public WebinarUpdateMultipartFormDataSettings withSurveyUrl(String surveyUrl) {
        this.surveyUrl = surveyUrl;
        return this;
    }
}