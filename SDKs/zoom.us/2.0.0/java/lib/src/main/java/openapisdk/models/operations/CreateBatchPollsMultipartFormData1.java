package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBatchPollsMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=questions,json")
    public CreateBatchPollsMultipartFormDataQuestions[] questions;
    public CreateBatchPollsMultipartFormData1 withQuestions(CreateBatchPollsMultipartFormDataQuestions[] questions) {
        this.questions = questions;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=title")
    public String title;
    public CreateBatchPollsMultipartFormData1 withTitle(String title) {
        this.title = title;
        return this;
    }
}