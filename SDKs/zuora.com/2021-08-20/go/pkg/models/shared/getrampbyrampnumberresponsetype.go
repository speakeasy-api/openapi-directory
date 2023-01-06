package shared

type GetRampByRampNumberResponseTypeReasons struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type GetRampByRampNumberResponseType struct {
	ProcessID *string                                  `json:"processId,omitempty"`
	Reasons   []GetRampByRampNumberResponseTypeReasons `json:"reasons,omitempty"`
	Success   *bool                                    `json:"success,omitempty"`
}
