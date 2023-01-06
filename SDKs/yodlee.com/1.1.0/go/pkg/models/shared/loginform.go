package shared

type LoginFormFormTypeEnum string

const (
	LoginFormFormTypeEnumLogin             LoginFormFormTypeEnum = "login"
	LoginFormFormTypeEnumQuestionAndAnswer LoginFormFormTypeEnum = "questionAndAnswer"
	LoginFormFormTypeEnumToken             LoginFormFormTypeEnum = "token"
	LoginFormFormTypeEnumImage             LoginFormFormTypeEnum = "image"
)

type LoginForm struct {
	ForgetPasswordURL *string                `json:"forgetPasswordURL,omitempty"`
	FormType          *LoginFormFormTypeEnum `json:"formType,omitempty"`
	Help              *string                `json:"help,omitempty"`
	ID                *int64                 `json:"id,omitempty"`
	LoginHelp         *string                `json:"loginHelp,omitempty"`
	MfaInfoText       *string                `json:"mfaInfoText,omitempty"`
	MfaInfoTitle      *string                `json:"mfaInfoTitle,omitempty"`
	MfaTimeout        *int64                 `json:"mfaTimeout,omitempty"`
	Row               []Row                  `json:"row,omitempty"`
}
