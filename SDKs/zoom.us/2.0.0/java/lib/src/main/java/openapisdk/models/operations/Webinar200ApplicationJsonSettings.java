package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Webinar200ApplicationJsonSettings
 * Webinar settings.
**/
public class Webinar200ApplicationJsonSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_multiple_devices")
    public Boolean allowMultipleDevices;
    public Webinar200ApplicationJsonSettings withAllowMultipleDevices(Boolean allowMultipleDevices) {
        this.allowMultipleDevices = allowMultipleDevices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_hosts")
    public String alternativeHosts;
    public Webinar200ApplicationJsonSettings withAlternativeHosts(String alternativeHosts) {
        this.alternativeHosts = alternativeHosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approval_type")
    public Long approvalType;
    public Webinar200ApplicationJsonSettings withApprovalType(Long approvalType) {
        this.approvalType = approvalType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attendees_and_panelists_reminder_email_notification")
    public Webinar200ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification attendeesAndPanelistsReminderEmailNotification;
    public Webinar200ApplicationJsonSettings withAttendeesAndPanelistsReminderEmailNotification(Webinar200ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification attendeesAndPanelistsReminderEmailNotification) {
        this.attendeesAndPanelistsReminderEmailNotification = attendeesAndPanelistsReminderEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio")
    public Webinar200ApplicationJsonSettingsAudioEnum audio;
    public Webinar200ApplicationJsonSettings withAudio(Webinar200ApplicationJsonSettingsAudioEnum audio) {
        this.audio = audio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_domains")
    public String authenticationDomains;
    public Webinar200ApplicationJsonSettings withAuthenticationDomains(String authenticationDomains) {
        this.authenticationDomains = authenticationDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_name")
    public String authenticationName;
    public Webinar200ApplicationJsonSettings withAuthenticationName(String authenticationName) {
        this.authenticationName = authenticationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_option")
    public String authenticationOption;
    public Webinar200ApplicationJsonSettings withAuthenticationOption(String authenticationOption) {
        this.authenticationOption = authenticationOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_recording")
    public Webinar200ApplicationJsonSettingsAutoRecordingEnum autoRecording;
    public Webinar200ApplicationJsonSettings withAutoRecording(Webinar200ApplicationJsonSettingsAutoRecordingEnum autoRecording) {
        this.autoRecording = autoRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("close_registration")
    public Boolean closeRegistration;
    public Webinar200ApplicationJsonSettings withCloseRegistration(Boolean closeRegistration) {
        this.closeRegistration = closeRegistration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_email")
    public String contactEmail;
    public Webinar200ApplicationJsonSettings withContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_name")
    public String contactName;
    public Webinar200ApplicationJsonSettings withContactName(String contactName) {
        this.contactName = contactName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_language")
    public String emailLanguage;
    public Webinar200ApplicationJsonSettings withEmailLanguage(String emailLanguage) {
        this.emailLanguage = emailLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_login")
    public Boolean enforceLogin;
    public Webinar200ApplicationJsonSettings withEnforceLogin(Boolean enforceLogin) {
        this.enforceLogin = enforceLogin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_login_domains")
    public String enforceLoginDomains;
    public Webinar200ApplicationJsonSettings withEnforceLoginDomains(String enforceLoginDomains) {
        this.enforceLoginDomains = enforceLoginDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("follow_up_absentees_email_notification")
    public Webinar200ApplicationJsonSettingsFollowUpAbsenteesEmailNotification followUpAbsenteesEmailNotification;
    public Webinar200ApplicationJsonSettings withFollowUpAbsenteesEmailNotification(Webinar200ApplicationJsonSettingsFollowUpAbsenteesEmailNotification followUpAbsenteesEmailNotification) {
        this.followUpAbsenteesEmailNotification = followUpAbsenteesEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("follow_up_attendees_email_notification")
    public Webinar200ApplicationJsonSettingsFollowUpAttendeesEmailNotification followUpAttendeesEmailNotification;
    public Webinar200ApplicationJsonSettings withFollowUpAttendeesEmailNotification(Webinar200ApplicationJsonSettingsFollowUpAttendeesEmailNotification followUpAttendeesEmailNotification) {
        this.followUpAttendeesEmailNotification = followUpAttendeesEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("global_dial_in_countries")
    public String[] globalDialInCountries;
    public Webinar200ApplicationJsonSettings withGlobalDialInCountries(String[] globalDialInCountries) {
        this.globalDialInCountries = globalDialInCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hd_video")
    public Boolean hdVideo;
    public Webinar200ApplicationJsonSettings withHdVideo(Boolean hdVideo) {
        this.hdVideo = hdVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_video")
    public Boolean hostVideo;
    public Webinar200ApplicationJsonSettings withHostVideo(Boolean hostVideo) {
        this.hostVideo = hostVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_authentication")
    public Boolean meetingAuthentication;
    public Webinar200ApplicationJsonSettings withMeetingAuthentication(Boolean meetingAuthentication) {
        this.meetingAuthentication = meetingAuthentication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notify_registrants")
    public Boolean notifyRegistrants;
    public Webinar200ApplicationJsonSettings withNotifyRegistrants(Boolean notifyRegistrants) {
        this.notifyRegistrants = notifyRegistrants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("on_demand")
    public Boolean onDemand;
    public Webinar200ApplicationJsonSettings withOnDemand(Boolean onDemand) {
        this.onDemand = onDemand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("panelists_invitation_email_notification")
    public Boolean panelistsInvitationEmailNotification;
    public Webinar200ApplicationJsonSettings withPanelistsInvitationEmailNotification(Boolean panelistsInvitationEmailNotification) {
        this.panelistsInvitationEmailNotification = panelistsInvitationEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("panelists_video")
    public Boolean panelistsVideo;
    public Webinar200ApplicationJsonSettings withPanelistsVideo(Boolean panelistsVideo) {
        this.panelistsVideo = panelistsVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("post_webinar_survey")
    public Boolean postWebinarSurvey;
    public Webinar200ApplicationJsonSettings withPostWebinarSurvey(Boolean postWebinarSurvey) {
        this.postWebinarSurvey = postWebinarSurvey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("practice_session")
    public Boolean practiceSession;
    public Webinar200ApplicationJsonSettings withPracticeSession(Boolean practiceSession) {
        this.practiceSession = practiceSession;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("question_and_answer")
    public Webinar200ApplicationJsonSettingsQuestionAndAnswer questionAndAnswer;
    public Webinar200ApplicationJsonSettings withQuestionAndAnswer(Webinar200ApplicationJsonSettingsQuestionAndAnswer questionAndAnswer) {
        this.questionAndAnswer = questionAndAnswer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants_confirmation_email")
    public Boolean registrantsConfirmationEmail;
    public Webinar200ApplicationJsonSettings withRegistrantsConfirmationEmail(Boolean registrantsConfirmationEmail) {
        this.registrantsConfirmationEmail = registrantsConfirmationEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants_email_notification")
    public Boolean registrantsEmailNotification;
    public Webinar200ApplicationJsonSettings withRegistrantsEmailNotification(Boolean registrantsEmailNotification) {
        this.registrantsEmailNotification = registrantsEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants_restrict_number")
    public Long registrantsRestrictNumber;
    public Webinar200ApplicationJsonSettings withRegistrantsRestrictNumber(Long registrantsRestrictNumber) {
        this.registrantsRestrictNumber = registrantsRestrictNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registration_type")
    public Long registrationType;
    public Webinar200ApplicationJsonSettings withRegistrationType(Long registrationType) {
        this.registrationType = registrationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_share_button")
    public Boolean showShareButton;
    public Webinar200ApplicationJsonSettings withShowShareButton(Boolean showShareButton) {
        this.showShareButton = showShareButton;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("survey_url")
    public String surveyUrl;
    public Webinar200ApplicationJsonSettings withSurveyUrl(String surveyUrl) {
        this.surveyUrl = surveyUrl;
        return this;
    }
}