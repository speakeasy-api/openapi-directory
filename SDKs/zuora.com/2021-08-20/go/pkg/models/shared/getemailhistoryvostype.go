package shared

type GetEmailHistoryVOsType struct {
	EmailHistories []GetEmailHistoryVoType `json:"emailHistories,omitempty"`
	NextPage       *string                 `json:"nextPage,omitempty"`
	Success        *bool                   `json:"success,omitempty"`
}
