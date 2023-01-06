package shared

type GetHostedPagesType struct {
	Hostedpages []GetHostedPageType `json:"hostedpages,omitempty"`
	Success     *bool               `json:"success,omitempty"`
}
