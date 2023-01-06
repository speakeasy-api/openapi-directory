package shared

type BadRequestResponseErrors struct {
	Code   *string `json:"code,omitempty"`
	Status *string `json:"status,omitempty"`
	Title  *string `json:"title,omitempty"`
}

type BadRequestResponse struct {
	Errors []BadRequestResponseErrors `json:"Errors,omitempty"`
}
