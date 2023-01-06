package operations

type CreateBatchPollsPathParams struct {
	MeetingID string `pathParam:"style=simple,explode=false,name=meetingId"`
}

type CreateBatchPollsApplicationJSONQuestionsTypeEnum string

const (
	CreateBatchPollsApplicationJSONQuestionsTypeEnumSingle   CreateBatchPollsApplicationJSONQuestionsTypeEnum = "single"
	CreateBatchPollsApplicationJSONQuestionsTypeEnumMultiple CreateBatchPollsApplicationJSONQuestionsTypeEnum = "multiple"
)

type CreateBatchPollsApplicationJSONQuestions struct {
	Answers []string                                          `json:"answers,omitempty"`
	Name    *string                                           `json:"name,omitempty"`
	Type    *CreateBatchPollsApplicationJSONQuestionsTypeEnum `json:"type,omitempty"`
}

type CreateBatchPollsApplicationJSON struct {
	Questions []CreateBatchPollsApplicationJSONQuestions `json:"questions,omitempty"`
	Title     *string                                    `json:"title,omitempty"`
}

type CreateBatchPollsMultipartFormDataQuestionsTypeEnum string

const (
	CreateBatchPollsMultipartFormDataQuestionsTypeEnumSingle   CreateBatchPollsMultipartFormDataQuestionsTypeEnum = "single"
	CreateBatchPollsMultipartFormDataQuestionsTypeEnumMultiple CreateBatchPollsMultipartFormDataQuestionsTypeEnum = "multiple"
)

type CreateBatchPollsMultipartFormDataQuestions struct {
	Answers []string                                            `json:"answers,omitempty"`
	Name    *string                                             `json:"name,omitempty"`
	Type    *CreateBatchPollsMultipartFormDataQuestionsTypeEnum `json:"type,omitempty"`
}

type CreateBatchPollsMultipartFormData1 struct {
	Questions []CreateBatchPollsMultipartFormDataQuestions `multipartForm:"name=questions,json"`
	Title     *string                                      `multipartForm:"name=title"`
}

type CreateBatchPollsRequests struct {
	Object  *CreateBatchPollsApplicationJSON    `request:"mediaType=application/json"`
	Object1 *CreateBatchPollsMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type CreateBatchPolls201ApplicationJSONPollsQuestionsTypeEnum string

const (
	CreateBatchPolls201ApplicationJSONPollsQuestionsTypeEnumSingle   CreateBatchPolls201ApplicationJSONPollsQuestionsTypeEnum = "single"
	CreateBatchPolls201ApplicationJSONPollsQuestionsTypeEnumMultiple CreateBatchPolls201ApplicationJSONPollsQuestionsTypeEnum = "multiple"
)

type CreateBatchPolls201ApplicationJSONPollsQuestions struct {
	Answers []string                                                  `json:"answers,omitempty"`
	Name    *string                                                   `json:"name,omitempty"`
	Type    *CreateBatchPolls201ApplicationJSONPollsQuestionsTypeEnum `json:"type,omitempty"`
}

type CreateBatchPolls201ApplicationJSONPollsStatusEnum string

const (
	CreateBatchPolls201ApplicationJSONPollsStatusEnumNotstart CreateBatchPolls201ApplicationJSONPollsStatusEnum = "notstart"
	CreateBatchPolls201ApplicationJSONPollsStatusEnumStarted  CreateBatchPolls201ApplicationJSONPollsStatusEnum = "started"
	CreateBatchPolls201ApplicationJSONPollsStatusEnumEnded    CreateBatchPolls201ApplicationJSONPollsStatusEnum = "ended"
	CreateBatchPolls201ApplicationJSONPollsStatusEnumSharing  CreateBatchPolls201ApplicationJSONPollsStatusEnum = "sharing"
)

type CreateBatchPolls201ApplicationJSONPolls struct {
	ID        *string                                            `json:"id,omitempty"`
	Questions []CreateBatchPolls201ApplicationJSONPollsQuestions `json:"questions,omitempty"`
	Status    *CreateBatchPolls201ApplicationJSONPollsStatusEnum `json:"status,omitempty"`
	Title     *string                                            `json:"title,omitempty"`
}

type CreateBatchPolls201ApplicationJSON struct {
	Polls []CreateBatchPolls201ApplicationJSONPolls `json:"polls,omitempty"`
}

type CreateBatchPollsRequest struct {
	PathParams CreateBatchPollsPathParams
	Request    *CreateBatchPollsRequests
}

type CreateBatchPollsResponse struct {
	Body                                     []byte
	ContentType                              string
	StatusCode                               int64
	CreateBatchPolls201ApplicationJSONObject *CreateBatchPolls201ApplicationJSON
}
