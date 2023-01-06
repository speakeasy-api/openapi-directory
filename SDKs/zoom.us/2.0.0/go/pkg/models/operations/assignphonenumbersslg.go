package operations

type AssignPhoneNumbersSlgPathParams struct {
	SharedLineGroupID string `pathParam:"style=simple,explode=false,name=sharedLineGroupId"`
}

type AssignPhoneNumbersSlgApplicationJSONPhoneNumbers struct {
	ID     *string `json:"id,omitempty"`
	Number *string `json:"number,omitempty"`
}

type AssignPhoneNumbersSlgApplicationJSON struct {
	PhoneNumbers []AssignPhoneNumbersSlgApplicationJSONPhoneNumbers `json:"phone_numbers,omitempty"`
}

type AssignPhoneNumbersSlgMultipartFormDataPhoneNumbers struct {
	ID     *string `json:"id,omitempty"`
	Number *string `json:"number,omitempty"`
}

type AssignPhoneNumbersSlgMultipartFormData1 struct {
	PhoneNumbers []AssignPhoneNumbersSlgMultipartFormDataPhoneNumbers `multipartForm:"name=phone_numbers,json"`
}

type AssignPhoneNumbersSlgRequests struct {
	Object  *AssignPhoneNumbersSlgApplicationJSON    `request:"mediaType=application/json"`
	Object1 *AssignPhoneNumbersSlgMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type AssignPhoneNumbersSlgRequest struct {
	PathParams AssignPhoneNumbersSlgPathParams
	Request    *AssignPhoneNumbersSlgRequests
}

type AssignPhoneNumbersSlgResponse struct {
	ContentType string
	StatusCode  int64
}
