package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingRegistrantQuestionUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions meetingRegistrantQuestions;
    public MeetingRegistrantQuestionUpdateRequests withMeetingRegistrantQuestions(MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions meetingRegistrantQuestions) {
        this.meetingRegistrantQuestions = meetingRegistrantQuestions;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions meetingRegistrantQuestions1;
    public MeetingRegistrantQuestionUpdateRequests withMeetingRegistrantQuestions1(MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions meetingRegistrantQuestions1) {
        this.meetingRegistrantQuestions1 = meetingRegistrantQuestions1;
        return this;
    }
}