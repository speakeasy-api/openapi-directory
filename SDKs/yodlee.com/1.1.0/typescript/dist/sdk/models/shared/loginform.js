"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginForm = exports.LoginFormFormTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var row_1 = require("./row");
var LoginFormFormTypeEnum;
(function (LoginFormFormTypeEnum) {
    LoginFormFormTypeEnum["Login"] = "login";
    LoginFormFormTypeEnum["QuestionAndAnswer"] = "questionAndAnswer";
    LoginFormFormTypeEnum["Token"] = "token";
    LoginFormFormTypeEnum["Image"] = "image";
})(LoginFormFormTypeEnum = exports.LoginFormFormTypeEnum || (exports.LoginFormFormTypeEnum = {}));
var LoginForm = /** @class */ (function (_super) {
    __extends(LoginForm, _super);
    function LoginForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=forgetPasswordURL" }),
        __metadata("design:type", String)
    ], LoginForm.prototype, "forgetPasswordURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=formType" }),
        __metadata("design:type", String)
    ], LoginForm.prototype, "formType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=help" }),
        __metadata("design:type", String)
    ], LoginForm.prototype, "help", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], LoginForm.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loginHelp" }),
        __metadata("design:type", String)
    ], LoginForm.prototype, "loginHelp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mfaInfoText" }),
        __metadata("design:type", String)
    ], LoginForm.prototype, "mfaInfoText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mfaInfoTitle" }),
        __metadata("design:type", String)
    ], LoginForm.prototype, "mfaInfoTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mfaTimeout" }),
        __metadata("design:type", Number)
    ], LoginForm.prototype, "mfaTimeout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=row", elemType: row_1.Row }),
        __metadata("design:type", Array)
    ], LoginForm.prototype, "row", void 0);
    return LoginForm;
}(utils_1.SpeakeasyBase));
exports.LoginForm = LoginForm;
