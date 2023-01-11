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
exports.ProviderDetail = exports.ProviderDetailStatusEnum = exports.ProviderDetailAuthTypeEnum = exports.ProviderDetailAuthParameterEnum = exports.ProviderDetailAccountTypeEnum = exports.ProviderDetailPriorityEnum = void 0;
var utils_1 = require("../../../internal/utils");
var capability_1 = require("./capability");
var providersdataset_1 = require("./providersdataset");
var loginform_1 = require("./loginform");
var ProviderDetailPriorityEnum;
(function (ProviderDetailPriorityEnum) {
    ProviderDetailPriorityEnum["Popular"] = "POPULAR";
    ProviderDetailPriorityEnum["Suggested"] = "SUGGESTED";
    ProviderDetailPriorityEnum["Cobrand"] = "COBRAND";
    ProviderDetailPriorityEnum["Search"] = "SEARCH";
    ProviderDetailPriorityEnum["All"] = "ALL";
})(ProviderDetailPriorityEnum = exports.ProviderDetailPriorityEnum || (exports.ProviderDetailPriorityEnum = {}));
var ProviderDetailAccountTypeEnum;
(function (ProviderDetailAccountTypeEnum) {
    ProviderDetailAccountTypeEnum["Current"] = "CURRENT";
    ProviderDetailAccountTypeEnum["BrokerageCash"] = "BROKERAGE_CASH";
})(ProviderDetailAccountTypeEnum = exports.ProviderDetailAccountTypeEnum || (exports.ProviderDetailAccountTypeEnum = {}));
var ProviderDetailAuthParameterEnum;
(function (ProviderDetailAuthParameterEnum) {
    ProviderDetailAuthParameterEnum["AuthorizationCode"] = "authorizationCode";
    ProviderDetailAuthParameterEnum["IdToken"] = "idToken";
    ProviderDetailAuthParameterEnum["AuthResponse"] = "authResponse";
})(ProviderDetailAuthParameterEnum = exports.ProviderDetailAuthParameterEnum || (exports.ProviderDetailAuthParameterEnum = {}));
var ProviderDetailAuthTypeEnum;
(function (ProviderDetailAuthTypeEnum) {
    ProviderDetailAuthTypeEnum["Oauth"] = "OAUTH";
    ProviderDetailAuthTypeEnum["Credentials"] = "CREDENTIALS";
    ProviderDetailAuthTypeEnum["MfaCredentials"] = "MFA_CREDENTIALS";
})(ProviderDetailAuthTypeEnum = exports.ProviderDetailAuthTypeEnum || (exports.ProviderDetailAuthTypeEnum = {}));
var ProviderDetailStatusEnum;
(function (ProviderDetailStatusEnum) {
    ProviderDetailStatusEnum["Supported"] = "Supported";
    ProviderDetailStatusEnum["Beta"] = "Beta";
    ProviderDetailStatusEnum["Unsupported"] = "Unsupported";
})(ProviderDetailStatusEnum = exports.ProviderDetailStatusEnum || (exports.ProviderDetailStatusEnum = {}));
var ProviderDetail = /** @class */ (function (_super) {
    __extends(ProviderDetail, _super);
    function ProviderDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PRIORITY" }),
        __metadata("design:type", String)
    ], ProviderDetail.prototype, "priority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountType" }),
        __metadata("design:type", Array)
    ], ProviderDetail.prototype, "accountType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=associatedProviderIds" }),
        __metadata("design:type", Array)
    ], ProviderDetail.prototype, "associatedProviderIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authParameter" }),
        __metadata("design:type", Array)
    ], ProviderDetail.prototype, "authParameter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authType" }),
        __metadata("design:type", String)
    ], ProviderDetail.prototype, "authType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=baseUrl" }),
        __metadata("design:type", String)
    ], ProviderDetail.prototype, "baseUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=capability", elemType: capability_1.Capability }),
        __metadata("design:type", Array)
    ], ProviderDetail.prototype, "capability", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=countryISOCode" }),
        __metadata("design:type", String)
    ], ProviderDetail.prototype, "countryISOCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataset", elemType: providersdataset_1.ProvidersDataset }),
        __metadata("design:type", Array)
    ], ProviderDetail.prototype, "dataset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=favicon" }),
        __metadata("design:type", String)
    ], ProviderDetail.prototype, "favicon", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=help" }),
        __metadata("design:type", String)
    ], ProviderDetail.prototype, "help", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ProviderDetail.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isAddedByUser" }),
        __metadata("design:type", String)
    ], ProviderDetail.prototype, "isAddedByUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isAutoRefreshEnabled" }),
        __metadata("design:type", Boolean)
    ], ProviderDetail.prototype, "isAutoRefreshEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isConsentRequired" }),
        __metadata("design:type", Boolean)
    ], ProviderDetail.prototype, "isConsentRequired", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languageISOCode" }),
        __metadata("design:type", String)
    ], ProviderDetail.prototype, "languageISOCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastModified" }),
        __metadata("design:type", String)
    ], ProviderDetail.prototype, "lastModified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loginForm", elemType: loginform_1.LoginForm }),
        __metadata("design:type", Array)
    ], ProviderDetail.prototype, "loginForm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loginUrl" }),
        __metadata("design:type", String)
    ], ProviderDetail.prototype, "loginUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=logo" }),
        __metadata("design:type", String)
    ], ProviderDetail.prototype, "logo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProviderDetail.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primaryLanguageISOCode" }),
        __metadata("design:type", String)
    ], ProviderDetail.prototype, "primaryLanguageISOCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ProviderDetail.prototype, "status", void 0);
    return ProviderDetail;
}(utils_1.SpeakeasyBase));
exports.ProviderDetail = ProviderDetail;
