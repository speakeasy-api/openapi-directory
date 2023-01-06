package shared

type GetHostedPageType struct {
	PageID      *string `json:"pageId,omitempty"`
	PageName    *string `json:"pageName,omitempty"`
	PageType    *string `json:"pageType,omitempty"`
	PageVersion *string `json:"pageVersion,omitempty"`
}
