package operations

type DeleteAPhoneNumberSlgPathParams struct {
	PhoneNumberID     string `pathParam:"style=simple,explode=false,name=phoneNumberId"`
	SharedLineGroupID string `pathParam:"style=simple,explode=false,name=sharedLineGroupId"`
}

type DeleteAPhoneNumberSlgRequest struct {
	PathParams DeleteAPhoneNumberSlgPathParams
}

type DeleteAPhoneNumberSlgResponse struct {
	ContentType string
	StatusCode  int64
}
