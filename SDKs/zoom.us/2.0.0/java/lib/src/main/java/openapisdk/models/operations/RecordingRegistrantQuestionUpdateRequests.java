package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecordingRegistrantQuestionUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions recordingRegistrantQuestions;
    public RecordingRegistrantQuestionUpdateRequests withRecordingRegistrantQuestions(RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions recordingRegistrantQuestions) {
        this.recordingRegistrantQuestions = recordingRegistrantQuestions;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions recordingRegistrantQuestions1;
    public RecordingRegistrantQuestionUpdateRequests withRecordingRegistrantQuestions1(RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions recordingRegistrantQuestions1) {
        this.recordingRegistrantQuestions1 = recordingRegistrantQuestions1;
        return this;
    }
}